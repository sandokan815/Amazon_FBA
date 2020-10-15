var CurrentCurrency;
var SelectedAsin;
var Region;
var valicenseKey="";
var CurrencySymbol;
var _cache = {};
class SearchInAmazon {

    constructor() {

    }

    SearchKeyWord(keyword, country) {

        return new Promise((resolve, reject) => {
			CurrentCurrency=CURRENCIES[country];
            this.FetchPage(keyword, country)
            .then(html => {
                resolve(this.ParseSearchedResults(country, html));
            })
        });
    }

    FetchPage(keyword, country) {

        const url = "https://www.amazon." + country + "/s?k=" + encodeURIComponent(keyword);
		Region=country;
        var ajaxSettings = {
            "url": url,
            "headers": {
                "CustomUserAgent": "Mozilla/5.0 (Linux; Android 8.0.0; Build/OPR6.170623.013) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Mobile Safari/537.36"
            },
        };

        return $.ajax(ajaxSettings);
    }

    ParseSearchedResults(country, html) {

        const ClassObjects = this;

        const $html = (new DOMParser).parseFromString(html, "text/html");

        const items = $(".s-result-list .s-result-item", $html);
        const searchResultProducts = [];

        for (let item of items) {
            if(typeof $(item).attr("data-asin")=="undefined" || $(item).attr("data-asin").trim()=="")
            {
            	continue;
            }
            let product = {

                country: country,
                currency: ClassObjects.GetCurrencySymbols(country),
                asin: $(item).attr("data-asin"),
                title: $(item).find("h2 span").eq(0).text().trim(),
                rating: parseFloat($(item).find(".a-icon-star-small").text().split(' ')[0]),
                reviewCount: ClassObjects.GetTotalReviews($(item)),
                sellPrice: ClassObjects.GetSellPrice($(item)),
                isPrime: $(item).find("span.s-prime").length > 0,
                imageUrl: $(item).find(".s-image").attr("src").includes("https://") ? $(item).find(".s-image").attr("src") : "https://www.amazon."+country+$(item).find(".s-image").attr("src"),
                freeDelivery: $(item).find("span[aria-label='FREE delivery']").length > 0,
                delivery: 0
            };

            if (product.title)
                searchResultProducts.push(product);
        }
        
        return searchResultProducts;
    }

    GetSellPrice($item) {

        //let fullPrice = this.ConvertDecimal($item.find(".a-color-secondary .a-color-base").eq(0).text());
        let fullPrice = 0;
        if (fullPrice > 0) return fullPrice;

        let priceStr = $item.find(".a-price-whole").eq(0).text();
        
        let decimal = $item.find(".a-price-fraction").eq(0).text() ? parseFloat("0." + $item.find(".a-price-fraction").eq(0).text()) : 0;
		if(this.ConvertDecimal(priceStr) + decimal<=0)
		{
			if(decimal<=0)
			{
				decimal= Number($item.find(".a-offscreen").eq(0).text().replace(/[^0-9\.]+/g,""));
				if(decimal>0)
				{
					return decimal;
				}
			}
			if(decimal<=0)
			{
				decimal= Number($item.find(".a-offscreen").eq(1).text().replace(/[^0-9\.]+/g,""));
				if(decimal>0)
				{
					return decimal;
				}
			}
			if(this.ConvertDecimal(priceStr) + decimal <=0 && $item.find(".a-offscreen").eq(0).length  && $item.find(".a-offscreen").eq(0).text().replace(/[^0-9\.]+/g,"")>0)
			{
				return Number($item.find(".a-offscreen").eq(0).text().replace(/[^0-9\.]+/g,""));
			}
			if(this.ConvertDecimal(priceStr) + decimal <=0 && typeof $item.find(".a-offscreen").eq(1).length && $item.find(".a-offscreen").eq(1).text().replace(/[^0-9\.]+/g,"")>0)
			{
				return Number($item.find(".a-offscreen").eq(1).text().replace(/[^0-9\.]+/g,""));
			}
		}
        return this.ConvertDecimal(priceStr) + decimal;
    }
    GetTotalReviews($item) {

        let TReview=parseInt($item.find(".a-icon-star-small").parent().next().text());
        if(TReview<=0 || isNaN(TReview))
        {
        	TReview = parseInt($item.find('[aria-label$="out of 5 stars"]').next().attr('aria-label'));
        }
        return TReview;
    }

    ConvertDecimal(str) {
        
        if (!str || !str.length) return 0;

        str = str.replace(/[­£$€\s]/g, "").replace(/,/g, ".");

        if (str.split('.').length > 2) {
            str = str.replace(".", "");
        }
        
        return parseFloat(str);
    }

    GetCurrencySymbols(country) {

        switch(country.trim().toLowerCase()) {

            case "co.uk":
                return "£";
            case "de":
            case "es":
            case "it":
            case "fr":
                return "€";
            case "com":
                return "$";
            default:
                return "£";
        }
    }
}
class SearchResultGenerator {

    constructor() {

        this.htmlTemplate = `

            <div class="row search-result-item bodyblock">

                <div class="col-5 text-center">
                    <img class="item-image" src="https://m.media-amazon.com/images/I/610Fs66u1EL._AC_UY218_ML3_.jpg" />
                </div>

                <div class="col-7">
                    <ul class="search-result-item-details">
                        <li><u class="item-title title ellipsis">This is a demo title of the product</u></li>
                        <li>» <a href="https://www.amazon.co.uk/dp/B018MHR366" class ="item-asin" target="_blank">B018MHR366</a> <img src="img/ext-url.png"></li>
                        <li>» <span class="item-sellprice">£11.99</span></li>
                        <li><span class="stars-container"><span class="stars-rating" style="width:75%"></span></span> <a class="item-reviewcount-link" href="https://www.amazon.co.uk/product-reviews/BAMBOO1234" target="_blank">(<span class="item-reviewcount">432</span>) </a></li>
                        <li><a href="#" class="changeAttributes" data-asin="BAMBOO1234" data-country="co.uk" data-sellprice="11.99" >» Calculate Profit</a></li>
                        <li><img title="Click To View Keepa Graph" data-toggle="tooltip" src="img/keepaicon.png" class="KeepaButtonSelectSearch KeepaHighlightButton"></li>
                    </ul>
                </div>

            </div>
        `;
    }

    generate(searchResultItem) {

        // HTML Elem
        const elem = $(this.htmlTemplate);

        // Image Url
        elem.find(".item-image").attr("src", searchResultItem.imageUrl);

        // Title
        const itemTitle = elem.find(".item-title");
        itemTitle.html("<b>"+searchResultItem.title+"</b>");
        itemTitle.attr("title", searchResultItem.title);
        //itemTitle.attr("href", "https://www.amazon." + searchResultItem.country + "/dp/" + searchResultItem.asin);

        // Open BBP Iframe
        const AttributesToChange = elem.find(".changeAttributes");
        AttributesToChange.attr({
            "data-asin": searchResultItem.asin,
            "data-country": searchResultItem.country,
            "data-sellPrice": searchResultItem.sellPrice
        });

        // Rating - Review Count
        elem.find(".stars-rating").css("width", searchResultItem.rating * 10 * 2);
        elem.find(".item-reviewcount-link").attr("href", "https://www.amazon." + searchResultItem.country + "/product-reviews/" + searchResultItem.asin);
        elem.find(".item-reviewcount").text(searchResultItem.reviewCount);

        // NO review? Hide Reviews
        if (isNaN(searchResultItem.reviewCount) || searchResultItem.reviewCount <= 0) {

            elem.find(".stars-container").parent().hide();
        }

        // ASIN
        elem.find(".item-asin").text(searchResultItem.asin);
        elem.find(".item-asin").attr("href", "https://www.amazon." + searchResultItem.country + "/dp/" + searchResultItem.asin);

        // Price
        elem.find(".item-sellprice").text(searchResultItem.currency + searchResultItem.sellPrice.toLocaleString(undefined, { minimumFractionDigits: 2 }));
		const KeepaHighlightButton = elem.find(".KeepaHighlightButton");
		KeepaHighlightButton.attr({
            "data-asin": searchResultItem.asin,
            "data-country": searchResultItem.country,
            "data-sellPrice": searchResultItem.sellPrice
        });
        return elem;
    }
}
class UiHelper {

    constructor(SearchResultGenerator, SearchInAmazon) {

        this.SearchResultGenerator = SearchResultGenerator;
        this.SearchInAmazon = SearchInAmazon;

        this.controls = {

            txtKeyword: $("#txtKeyword"),
            btnSearch: $("#btnSearch"),
            lnkBack: $("#backlink"),
            FBAMTCalculator: $(".CalculatorSection"),
            searchBody: $("#SearchBody"),
            lstSearchResults: $("#lstSearchResults"),
            BuyPriceQuant: $("#BuyPriceQuant"),
            buypriceinput: $("#buypriceinput"),
            SellPrice: $("#SellPrice"),
            CustomGraphOuter: $(".CustomGraphOuter"),
            flags: $(".flag")
        }
    }

    setActiveFlag(country) {

        this.controls.flags.removeClass("active");
        this.controls.flags.parent().find("[data-country='" + country + "']").addClass("active");
    }

    getActiveFlagCountry() {

        return this.controls.flags.parent().find(".flag.active").attr("data-country");
    }

    activateTooltips() {

        $('[data-toggle="tooltip"]').tooltip();
    }

    checkAndSearchWithQueryValues() {

        let queryString = document.location.href.split('?')[1];
        if (!queryString) return;

        let urlParams = new URLSearchParams(queryString.replace(/#/g, ""));

        const keyword = urlParams.get("keyword");
        const country = urlParams.get("country");
        this.setActiveFlag(country);
        this.controls.txtKeyword.val(keyword);

        this.search(keyword, country);
    }

    setInputEvents() {

        const ClassObj = this;

        // Lnk(s) Show Iframe 
        $(document).on("click", ".KeepaHighlightButton", function () {

            const elem = $(this);
            const asin = elem.attr("data-asin");
            const country = elem.attr("data-country");
            const sellPrice = elem.attr("data-sellprice");
			SelectedAsin=asin;
			window.parent.postMessage({ type: "FBAMTshowKeepaGraphs", asin: asin, country: country }, "*");
            //ClassObj.AppendKeepaWindow(asin, country, sellPrice);
        });
        $(document).on("click", ".changeAttributes", function () {

            const elem = $(this);
            const asin = elem.attr("data-asin");
            const country = elem.attr("data-country");
            const sellPrice = elem.attr("data-sellprice");
			SelectedAsin=asin;
            ClassObj.showIframe(asin, country, sellPrice);
        });

        // Btn Search
        ClassObj.controls.btnSearch.on("click", function () {
			
			ClassObj.controls.lnkBack.hide();
			ClassObj.controls.FBAMTCalculator.fadeOut();
			 ClassObj.controls.searchBody.fadeIn();
            ClassObj.search(ClassObj.controls.txtKeyword.val(), ClassObj.getActiveFlagCountry());
        });

        // Btn Back
        ClassObj.controls.lnkBack.on("click", function () {

            ClassObj.showSearchResults();
        });

        // Flags
        ClassObj.controls.flags.on("click", function () {
            ClassObj.setActiveFlag($(this).attr("data-country"));
            ClassObj.controls.lnkBack.hide();
            ClassObj.controls.FBAMTCalculator.fadeOut();
            ClassObj.controls.searchBody.fadeIn();
            ClassObj.search(ClassObj.controls.txtKeyword.val(), ClassObj.getActiveFlagCountry());

        });

        ClassObj.controls.txtKeyword.on("keypress", function (e) {

            if (e.which == 13 || e.keyCode == 13) {

                ClassObj.controls.btnSearch.click();
            }

        });
    }
    showIframe(asin, country, sellPrice) {

        const ClassObj = this;
		ClassObj.controls.searchBody.fadeOut();
		ClassObj.controls.FBAMTCalculator.fadeIn();
		ClassObj.controls.SellPrice.val(sellPrice);
		ClassObj.controls.lnkBack.show();
        /*let url = "chrome-extension://" + chrome.runtime.id + "/popup.html?asin=" + asin + "&country=" + country + "&sellPrice=" + (parseFloat(sellPrice).toFixed(2));

        ClassObj.controls.FBAMTCalculator.attr("src", url);
        

        ClassObj.controls.FBAMTCalculator.on("load", function () {

            ClassObj.controls.FBAMTCalculator.fadeIn();
            ClassObj.controls.FBAMTCalculator.contents().find(".bbs-header").hide();
            ClassObj.controls.FBAMTCalculator.contents().find("#bbs").attr("style", "max-width: 100% !important;border: none !important;padding:20px;background-color: #f7f7f7;");
            ClassObj.controls.FBAMTCalculator.contents().find(".requestafeature").hide();
            ClassObj.controls.lnkBack.show();

            const $frame = ClassObj.controls.FBAMTCalculator.contents();
            $frame.find("#btnShowGraphs").remove();
            $frame.find("#divBuyBotScore").parent().before("<button id='btnShowGraphs' data-asin='" + asin + "' data-country='" + country +"'>Show Graphs</button>");

            $frame.find("head").append(`

                <style>
                    #btnShowGraphs {
                        display: block;
                        margin: 10px auto;
                        border: 1px solid #cfe0ff;
                        background-color: #e4ecfa;
                        padding: 5px 15px;
                        color: #1a73e8;
                        border-radius: 10px !important;
                        width: 100%;
                        cursor: pointer;
                    }
                    #btnShowGraphs:hover {
                        border-color: #1a73e8;
                    }
                    #btnShowGraphs:focus {
                        outline: none;
                    }
                </style>

            `);


        });*/
    }

    showSearchResults() {

        this.controls.lnkBack.fadeOut();
        this.controls.FBAMTCalculator.hide();
        this.controls.searchBody.fadeIn();
    }

    search(keyword, country) {

        const ClassObj = this;

        if (!keyword || !keyword.length) {

            ClassObj.controls.txtKeyword.focus();
            alert("Please enter a Keyword!");
            return;
        }

        if (!country || !country.length) {

            alert("Please select a Country!");
            return;
        }

        ClassObj.controls.btnSearch.prop("disabled", true);
        ClassObj.controls.lstSearchResults.html("<h3 class='please-wait'>Please wait...</h3>");

        this.SearchInAmazon.SearchKeyWord(keyword, country).then(items => {

            ClassObj.controls.btnSearch.prop("disabled", false);

            if (!items || !items.length) {

                ClassObj.controls.lstSearchResults.html('<div class="alert alert-info" role="alert">No result found for <b>' + keyword + '</b></div>');
                return;
            }

            ClassObj.controls.lstSearchResults.html("");

            for (let item of items) {
                ClassObj.controls.lstSearchResults.append(this.SearchResultGenerator.generate(item));
            }

            ClassObj.activateTooltips();


        }).catch(err => {

            ClassObj.controls.lstSearchResults.html('<div class="alert alert-danger" role="alert">' + err + '</div>');
            ClassObj.controls.lstSearchResults.btnSearch.prop("disabled", false);
        });
    }
}
const _ui = new UiHelper(new SearchResultGenerator(), new SearchInAmazon());
const CURRENCIES = {
  'com': 'USD',
  'co.uk': 'GBP',
  'de': 'EUR',
  'fr': 'EUR',
  'es': 'EUR',
  'it': 'EUR',
}
const CURRENCYSYMBOL = {
  'USD': '$',
  'GBP': '£',
  'EUR': '€',
}
// INIT
$(document).ready(INIT);
function INIT() {
chrome.storage.sync.get(['licenseKey', 'showCalc','shipPrice', 'efn','fbmflag','Collapsible'], function (settings) {
  /*panelVM.showCalc(settings.showCalc);
  panelVM.efn(!!settings.efn);
  panelVM.Collapsible(settings.Collapsible);*/
  valicenseKey=settings.licenseKey;
  $('.rwizard-switch').checkable();
  $("#FBM_Section").hide();
  if(typeof settings.fbmflag=="undefined")
  {
  	settings.fbmflag=false;
  }
  if(typeof settings.efn=="undefined")
  {
  	settings.efn=false;
  }
  	if(settings.efn)
  	{
  		$("#FBM_Section").hide();
  		$("#FBA_Section").show();
  	}
  	else if(settings.fbmflag)
  	{
  		$("#FBM_Section").show();
  		$("#FBA_Section").hide();
  	}
  	
  	
    _ui.setInputEvents();
    _ui.activateTooltips();
    _ui.checkAndSearchWithQueryValues();
    
     $('#fbmSwitch').checkable('value',settings.fbmflag);
     $('#efnSwitch').checkable('value',settings.efn);
     $('#fbmSwitch').click(function(){
     	var fbmflag=$(this).checkable('value');
     	chrome.storage.sync.set({ fbmflag });
     	if(fbmflag)
     	{
     		var efn=false;
     		chrome.storage.sync.set({ efn });
     		$('#efnSwitch').checkable('value',false);
     		$('#efnSwitch').removeClass("ui-checked");
  			$('#efnSwitch').find("input[type=checkbox].ui-checkable").prop("checked",false);
     	}
     	$("#FBM_Section").toggle();
  		$("#FBA_Section").toggle();
     });
     $('#efnSwitch').click(function(){
     	var efn=$(this).checkable('value');
     	chrome.storage.sync.set({ efn });
     	if(efn)
     	{
     		var fbmflag=false;
     		chrome.storage.sync.set({ fbmflag });
     		$("#FBM_Section").hide();
  			$("#FBA_Section").show();
     		$('#fbmSwitch').checkable('value',false);
     		$('#fbmSwitch').removeClass("ui-checked");
  			$('#fbmSwitch').find("input[type=checkbox].ui-checkable").prop("checked",false);
     	}
     });
     $("#CurrencySelect").val(CurrentCurrency);
     loadsliders();
     $(".CalculateInput").on('keypress',function(e) {
    if(e.which == 13) {
       
     	var sellPrice = parseFloat($("#SellPrice").val());
    	var buyPrice = parseFloat($("#buypriceinput").val());
    	var SourceCurrency=$("#CurrencySelect").val();
    	var shipPriceBox=$("#ShippingA").val();
    	CurrencySymbol=CURRENCYSYMBOL[CurrentCurrency];
    	if (isNaN(sellPrice) || isNaN(buyPrice)) 
    	{
    		alert("Please Enter Buy Price");
      		return;
    	}
    	if (isNaN(shipPriceBox)) 
    	{
    		shipPriceBox=0;
    	}
    	if(typeof $('.outputDiscVoucher').attr("dis-Voucher")!="undefined")
    	{
    		var VoucherDis=$('.outputDiscVoucher').attr("dis-Voucher").replace("%","");
    		buyPrice=buyPrice-(buyPrice*VoucherDis/100);
    	}
    	 chrome.storage.sync.get(['efn','fbmflag', 'vatRate', 'vatRegistered','shipPrice','vatBuyPrice'], function (options) {
      const vat = options.vatRate;
      const vatRegistered = options.vatRegistered;
      const efn = options.efn;
      const vatBuyPrice = options.vatBuyPrice;
      
    	if(typeof vatBuyPrice=='undefined' || !vatBuyPrice)
		{
			var donothing='';
		}
		else
		{
			buyPrice=buyPrice+(vat/100*buyPrice);
		}
		if(typeof options.fbmflag!="undefined" && options.fbmflag)
		{
			convertPrice(buyPrice, SourceCurrency, CurrentCurrency)
        .then(buyPriceConverted => {
          return getFeesFBM(SelectedAsin, sellPrice, buyPriceConverted, vat, vatRegistered, efn,vatBuyPrice,shipPriceBox);
        }).then(function(fees){ console.log("fees----->",fees)})
		}
		else
		{
      convertPrice(buyPrice, SourceCurrency, CurrentCurrency)
        .then(buyPriceConverted => {
          return getFees(SelectedAsin, sellPrice, buyPriceConverted, vat, vatRegistered, efn,vatBuyPrice);
        })
        .then(function(fees){ console.log("fees----->",fees);
        });
        }
    });
    }
});
     $(".calculateprofitimg").click(function()
     {
     	var sellPrice = parseFloat($("#SellPrice").val());
    	var buyPrice = parseFloat($("#buypriceinput").val());
    	var SourceCurrency=$("#CurrencySelect").val();
    	var shipPriceBox=$("#ShippingA").val();
    	CurrencySymbol=CURRENCYSYMBOL[CurrentCurrency];
    	if (isNaN(sellPrice) || isNaN(buyPrice)) 
    	{
    		alert("Please Enter Buy Price");
      		return;
    	}
    	if (isNaN(shipPriceBox)) 
    	{
    		shipPriceBox=0;
    	}
    	if(typeof $('.outputDiscVoucher').attr("dis-Voucher")!="undefined")
    	{
    		var VoucherDis=$('.outputDiscVoucher').attr("dis-Voucher").replace("%","");
    		buyPrice=buyPrice-(buyPrice*VoucherDis/100);
    	}
    	 chrome.storage.sync.get(['efn','fbmflag', 'vatRate', 'vatRegistered','shipPrice','vatBuyPrice'], function (options) {
      const vat = options.vatRate;
      const vatRegistered = options.vatRegistered;
      const efn = options.efn;
      const vatBuyPrice = options.vatBuyPrice;
      
    	if(typeof vatBuyPrice=='undefined' || !vatBuyPrice)
		{
			var donothing='';
		}
		else
		{
			buyPrice=buyPrice+(vat/100*buyPrice);
		}
		if(typeof options.fbmflag!="undefined" && options.fbmflag)
		{
			convertPrice(buyPrice, SourceCurrency, CurrentCurrency)
        .then(buyPriceConverted => {
          return getFeesFBM(SelectedAsin, sellPrice, buyPriceConverted, vat, vatRegistered, efn,vatBuyPrice,shipPriceBox);
        }).then(function(fees){ console.log("fees----->",fees)})
		}
		else
		{
      convertPrice(buyPrice, SourceCurrency, CurrentCurrency)
        .then(buyPriceConverted => {
          return getFees(SelectedAsin, sellPrice, buyPriceConverted, vat, vatRegistered, efn,vatBuyPrice);
        })
        .then(function(fees){ console.log("fees----->",fees);
        });
        }
    });
     })
     $('[data-slider="true"]').each(function () {
      var input = $(this);
      $("<span class='tooltip12' style='font-size:17px;font-weight: bolder;color: #80faff;' data-title='Discount Buy Price:'><span class='tooltiptext'>Discount Buy Price:</span>")
        .addClass("outputDiscVoucher")
        .insertAfter($("#discVoucher"));
    })
    .bind("slider:ready slider:changed", function (event, data) {
    var Voucherdis=data.value.toFixed(0);
    var buyp=$("#buypriceinput").val();
    var disbyprice=(buyp-(buyp*Voucherdis/100)).toFixed(2);
    var titletext="<span class='tooltiptext'>Discount Buy Price:"+disbyprice+"</span>";
    $("#discVoucher")
        .nextAll(".outputDiscVoucher:first").attr("dis-Voucher",data.value.toFixed(0));
 $("#discVoucher")
        .nextAll(".outputDiscVoucher:first")
          .html(data.value.toFixed(0)+"%"+titletext);
    });
    var coll = document.getElementsByClassName("collapsible");
		var i;
		if(coll.length>=1)
		{
			for (i = 0; i < coll.length; i++) 
			{
  				coll[i].addEventListener("click", function() {
    			this.classList.toggle("active");
    			var content = this.nextElementSibling;
     			$(content).toggle();
  				});
			}
		}
    $(".CalculatorSection").hide();
    
})
}
function convertPrice(price, srcCurrency, currency) {
  if (srcCurrency === currency) {
    return Promise.resolve(price);
  }
  return getExchangeRate(srcCurrency, currency)
    .then(rate => price * rate);
}
function getExchangeRate(from, to) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ 'name': 'rates', from, to }, (rate) => {
      resolve(rate);
    });
  })
}
  function getFeesFBM(asin, sellPrice, buyPrice, vat, vatReg, efn,vatBuyPrice,shipPrice) {
    if (Region === 'com') {
      efn = false;
    }
    return Promise.all([
      _getFeesFBM(asin, sellPrice, efn),
      getOptions(),
    ])
      .then(([p, localStorage]) => {
        p.referralFeeP = Math.round(p.referralFee / sellPrice * 100) / 100;
        if(p.enableVariableFee)
        {
        	p.fbmVariableFee = Number(p.totalFee) - Number(p.referralFee);
        }
        else
        {
        	p.fbmVariableFee=0;
        }
        p.fbaFee=0;
        const calcFeesFunc = Region === 'com' ? _calcFeesUSFBM : _calcFeesFBM;
        const result = calcFeesFunc(sellPrice, buyPrice, vat, vatReg, efn, p, localStorage,vatBuyPrice,shipPrice);
        var priceLeft = 0;
        var priceRight = Math.max(buyPrice * 100, buyPrice + 100);
        for (var i = 0; i < 20; i++) { 
          const midPrice = (priceLeft + priceRight) / 2;
          const r = calcFeesFunc(midPrice, buyPrice, vat, vatReg, efn, p, localStorage,vatBuyPrice,shipPrice,false);
          if (r.profit > 0 && r.profit < 0.01 || Math.abs(priceRight - priceLeft) < 0.005) {
            break;
          }
          if (r.profit > 0) {
            priceRight = midPrice;
          } else {
            priceLeft = midPrice;
          }
        }
        result.breakeven = Math.round((priceLeft + priceRight) / 2 * 100) / 100;
        $("#FBM_breakeven").html(calcround(result.breakeven));
        return result;
      });
  }
   function _getFeesFBM(asin, sellPrice, efn) {
    const cacheKey = [asin, sellPrice, efn,"FBM"].join('-');
    if (_cache[cacheKey]) {
      return Promise.resolve(_cache[cacheKey]);
    }
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({ data: {
          		asin: asin,
          		country: Region,
          		sellPrice:sellPrice,
          		efn,
          		efnflag: efn,
        		FunctionCall: 'estimateFeeFBM',
				LicenseKey: valicenseKey,
        		},'FunctionCall':'estimateFeeFBM' }, 
      function(response) {
      _cache[cacheKey] = response;
          resolve(response);
    });
    });
  }
  function getOptions() {
  const OPTIONS_KEYS = ['taxRate','vatFlatRate','efnAdjustment','fbmflag', 'transitCost', 'feeAdjustment', 'profitAdjustment', 'inboundShipping', 'inboundShippingUS', 'fixedPrepFee'];

  return new Promise((resolve) => {
    chrome.storage.sync.get(OPTIONS_KEYS, function (localStorage) {
      resolve(localStorage);
    });
  });
}
  function _calcFeesFBM(sellPrice, buyPrice, vat, vatReg, efn, p, localStorage,vatBuyPrice,shipPrice,defaultcall=true) {
    var referralFee = sellPrice * p.referralFeeP;
    var fbaFees = p.fbaFee;
    //var totalFees = Number(p.referralFee) + Number(p.fbmVariableFee) + Number(shipPrice);
    var totalFees = Number(p.referralFee) + Number(p.fbmVariableFee);
    var result = {
      referralFee: referralFee,
      fbaFees: fbaFees,
      fbmVariableFee: Number(p.fbmVariableFee),
      shipPrice: Number(shipPrice),
      totalFBAFeesEst: totalFees,
    }
    if (efn) {
      result.efnFee = Number(p.efnFee);
      totalFees += Number(p.efnFee);

      if (localStorage.efnAdjustment != '' && isNumber(localStorage.efnAdjustment)) {
        let r = calcround(result.efnFee * parseFloat(localStorage.efnAdjustment) / 100);
        result.efnFeeAdjustment = r;
        totalFees += r;
        if(defaultcall)
        $("#FBM_efnFeeAdjustment").html(r)
      }
      else
      {
      	if(defaultcall)
      	$("#FBM_efnFeeAdjustment").parent().hide();
      }
    }
    else
    {
    	if(defaultcall)
    	$("#FBM_efnFeeAdjustment").parent().hide();
    }
    const vatOnFees = calcround(totalFees * vat / 100);
    const vatToRemit = calcround((sellPrice - buyPrice) * (vat / 100) / (1 + vat / 100));
	var Short=((vat / 100) / (1 + vat / 100));
	if(typeof localStorage.vatFlatRate!="undefined" && localStorage.vatFlatRate)
	{
		var FlatRate=calcround(sellPrice*(vat / 100));
		result.FlatRate = totalFees;
		totalFees +=FlatRate;
		if(FlatRate>0)
		{
			if(defaultcall)
			$("#FBM_FlatRate").html(FlatRate);
		}
		else
		{
			if(defaultcall)
			$("#FBM_FlatRate").parent().hide();
		}
	}
	else
	{
    	totalFees += vatReg ? vatToRemit : vatOnFees;
    	result.vatOnFees = calcround(vatOnFees);
    	//result.vatOnFees = vatOnFees;
    	result.vatToRemit = vatToRemit;
    	if(defaultcall)
    	$("#FBM_FlatRate").parent().hide();
    	if(result.vatToRemit>0)
		{
			if(defaultcall)
			$("#FBM_vatToRemit").html(result.vatToRemit);
		}
		else
		{
			if(defaultcall)
			$("#FBM_vatToRemit").parent().hide();
		}
		if(result.vatOnFees>0)
		{
			if(defaultcall)
			$("#FBM_vatOnFees").html(result.vatOnFees);
		}
		else
		{
			if(defaultcall)
			$("#FBM_vatOnFees").parent().hide();
		}
    }
    totalFees=totalFees+ Number(shipPrice);
    var profit = sellPrice - buyPrice - totalFees;
    if(profit.toFixed(2)==0.01 && defaultcall)
    {
    	profit=0.00;
    }
    result.roi = profit / buyPrice * 100;
    
    if (localStorage.profitAdjustment != '' && isNumber(localStorage.profitAdjustment)) 
    {
      let r = calcround(profit * (1 + parseFloat(localStorage.profitAdjustment) / 100));
      result.profitAdj = r;
      result.roi = calcround(r / buyPrice * 100);
      	if( result.profitAdj>0)
		{
			if(defaultcall)
			$("#FBM_profitAdj").html(result.profitAdj);
		}
		else
		{
			if(defaultcall)
			$("#FBM_profitAdj").parent().hide();
		}
    }
    
	totalFees=calcround(totalFees);
	totalFees=totalFees;
	profit=profit;
    
    result.totalFees = totalFees;
    result.totalFBAFeesEst= result.totalFees,
    result.profit = profit;
    result.useVAT = vatReg;
    result.isEFN = efn;
    result.breakeven=calcround(totalFees+buyPrice);
    result.profitMargin = (result.profitAdj || profit) / sellPrice * 100;
    $(".currencySign").html(CurrencySymbol);
	if(result.fbmVariableFee>0)
	{
		if(defaultcall)
		$("#FBM_fbmVariableFee").html(calcround(result.fbmVariableFee));
	}
	else
	{
		if(defaultcall)
		$("#FBM_fbmVariableFee").parent().hide();
	}
	if(defaultcall)
	{
		$("#FBM_salesTax").parent().hide();
		$("#FBM_referralFee").html(calcround(result.referralFee));
		$("#FBM_totalFees").html(calcround(result.totalFees));
		$("#FBM_profit").html(calcround(result.profit));
		$("#FBM_profitMargin").html(calcround(result.profitMargin));
		$("#FBM_roi").html(calcround(result.roi));
	}
	if(shipPrice>0)
	{
		if(defaultcall)
		$("#FBM_shipPrice").html(calcround(shipPrice));
	}
	else
	{
		if(defaultcall)
		$("#FBM_shipPrice").parent().hide();
	}
	if(defaultcall)
	{
		$("#FBM_profit").parent().removeClass("restriction-wizard-green");
		$("#FBM_profit").parent().removeClass("restriction-wizard-red");
	}
	if(calcround(result.profit)>0)
	{	
		if(defaultcall)
		$("#FBM_profit").parent().addClass("restriction-wizard-green");
	}
	else
	{
		if(defaultcall)
		$("#FBM_profit").parent().addClass("restriction-wizard-red");
	}
	if(defaultcall)
	{
		$("#FBM_roi").parent().removeClass("restriction-wizard-green");
		$("#FBM_roi").parent().removeClass("restriction-wizard-red");
	}
	if(calcround(result.roi)>0)
	{
		if(defaultcall)
		$("#FBM_roi").parent().addClass("restriction-wizard-green");
	}
	else
	{
		if(defaultcall)
		$("#FBM_roi").parent().addClass("restriction-wizard-red");
	}
	if(result.totalFees>0)
	{
		
	}
	else
	{
		if(defaultcall)
		$("#FBM_roi").parent().hide();
	}
    return result;
  }

  function _calcFeesUSFBM(sellPrice, buyPrice, vat, vatReg, efn, p, localStorage,vatBuyPrice,shipPrice,defaultcall=true) {
    var referralFee = sellPrice * p.referralFeeP;
    var fbaFees = p.fbaFee;
    //var totalFees = Number(p.referralFee) + Number(p.fbmVariableFee) + shipPrice;
	var totalFees = Number(p.referralFee) + Number(p.fbmVariableFee);
    var result = {
      referralFee: referralFee,
      fbaFees: fbaFees,
      fbmVariableFee: Number(p.fbmVariableFee),
      shipPrice: Number(shipPrice),
      totalFBAFeesEst: totalFees,
    };
	totalFees=totalFees+ Number(shipPrice);
    var profit = sellPrice - buyPrice - totalFees;
    if(profit.toFixed(2)==0.01 && defaultcall)
    {
    	profit=0.00;
    }
    if (localStorage.taxRate != '' && isNumber(localStorage.taxRate)) {
      let r = sellPrice * parseFloat(localStorage.taxRate) / 100;
      result.salesTax = r;
      profit -= r;
      if(result.salesTax>0)
      {
      	if(defaultcall)
      	$("#FBM_salesTax").html(calcround(result.salesTax));
      }
      else
      {
      	if(defaultcall)
      	$("#FBM_salesTax").parent().hide();
      }
    }
    else
    {
    	if(defaultcall)
    	$("#FBM_salesTax").parent().hide();
    }

    result.roi = profit / buyPrice * 100;
    result.totalFees = totalFees;
    result.profit = profit;
    result.profitMargin = (result.profitAdj || profit) / sellPrice * 100;
    result.breakeven=calcround(totalFees+buyPrice);
if(typeof result.totalFBAFeesEst == "undefined" && !isNaN(result.totalFees))
{
	result.totalFBAFeesEst= result.totalFees;
}
	$(".currencySign").html(CurrencySymbol);
	if(result.fbmVariableFee>0)
	{
		if(defaultcall)
		$("#FBM_fbmVariableFee").html(calcround(result.fbmVariableFee));
	}
	else
	{
		if(defaultcall)
		$("#FBM_fbmVariableFee").parent().hide();
	}
	if(defaultcall)
	{
		$("#FBM_referralFee").html(calcround(result.referralFee));
		$("#FBM_totalFees").html(calcround(result.totalFees));
		$("#FBM_profit").html(calcround(result.profit));
		$("#FBM_profitMargin").html(calcround(result.profitMargin));
		$("#FBM_roi").html(calcround(result.roi));
	}
	if(shipPrice>0)
	{
		if(defaultcall)
		$("#FBM_shipPrice").html(calcround(shipPrice));
	}
	else
	{
		if(defaultcall)
		$("#FBM_shipPrice").parent().hide();
	}
	if(defaultcall)
	{
		$("#FBM_profit").parent().removeClass("restriction-wizard-green");
		$("#FBM_profit").parent().removeClass("restriction-wizard-red");
	}
	if(calcround(result.profit)>0)
	{
		if(defaultcall)
		$("#FBM_profit").parent().addClass("restriction-wizard-green");
	}
	else
	{
		if(defaultcall)
		$("#FBM_profit").parent().addClass("restriction-wizard-red");
	}
	if(defaultcall)
	{
		$("#FBM_roi").parent().removeClass("restriction-wizard-green");
		$("#FBM_roi").parent().removeClass("restriction-wizard-red");
	}
	if(calcround(result.roi)>0)
	{
		if(defaultcall)
		$("#FBM_roi").parent().addClass("restriction-wizard-green");
	}
	else
	{
		if(defaultcall)
		$("#FBM_roi").parent().addClass("restriction-wizard-red");
	}
    return result;
  }

function getFees(asin, sellPrice, buyPrice, vat, vatReg, efn,vatBuyPrice,defaultcall=true) {
    if (Region === 'com') {
      efn = false;
    }
    return Promise.all([
      _getFees(asin, sellPrice, efn),
      getOptions(),
    ])
      .then(([p, localStorage]) => {
		 // console.log("sellPrice--->",sellPrice);
        p.referralFeeP = Math.round(p.referralFee / sellPrice * 100) / 100;
        p.fbaFee = efn ? 0 : p.totalFee - p.referralFee;
        const calcFeesFunc = Region === 'com' ? _calcFeesUS : _calcFees;
        const result = calcFeesFunc(sellPrice, buyPrice,  vat, vatReg, efn, p, localStorage,vatBuyPrice);
        var priceLeft = 0;
        var priceRight = Math.max(buyPrice * 100, buyPrice + 100);
        for (var i = 0; i < 20; i++) { 
          const midPrice = (priceLeft + priceRight) / 2;
          const r = calcFeesFunc(midPrice, buyPrice, vat, vatReg, efn, p, localStorage,vatBuyPrice,false);
          if (r.profit > 0 && r.profit < 0.01 || Math.abs(priceRight - priceLeft) < 0.005) {
            break;
          }
          if (r.profit > 0) {
            priceRight = midPrice;
          } else {
            priceLeft = midPrice;
          }
        }
        result.breakeven = Math.round((priceLeft + priceRight) / 2 * 100) / 100;
        $("#FBA_breakeven").html(calcround(result.breakeven));
        return result;
      });
  }
  function _calcFees(sellPrice, buyPrice, vat, vatReg, efn, p, localStorage,vatBuyPrice,defaultcall=true) {
    var referralFee = sellPrice * p.referralFeeP;
    var fbaFees = p.fbaFee;
    if(fbaFees>0)
    {
    	fbaFees=Number(fbaFees.toFixed(2));
    }
    var totalFees = referralFee + fbaFees;
    var result = {
      referralFee: referralFee,
      fbaFees: fbaFees,
      totalFBAFeesEst: totalFees,
    }
//line no 1584
	if(defaultcall)
	{
		$("#FBA_fbaFee").parent().hide();
		$("#FBA_fbaFee").parent().hide();
	}
	if(calcround(fbaFees)>0)
    {
    	if(defaultcall)
    	{
    		$("#FBA_fbaFee").html(fbaFees);
    		$("#FBA_fbaFee").parent().show();
    	}
    }
    if(defaultcall)
    {
		$("#FBA_prepFeeFixed").parent().hide();
		$("#FBA_transitCost").parent().hide();
		$("#FBA_feeAdjustment").parent().hide();
		$("#FBA_netVatToBeRemitted").parent().hide();
		$("#FBA_vatOnFees").parent().hide();
	}
    if (localStorage.fixedPrepFee != '' && isNumber(localStorage.fixedPrepFee)) {
      let r = parseFloat(localStorage.fixedPrepFee);
      result.fixedPrepFee = r;
      if(defaultcall)
      {
      	$("#FBA_prepFeeFixed").html(calcround(result.fixedPrepFee));
      	$("#FBA_prepFeeFixed").parent().show();
      }
      totalFees += r;
    }

    /*if (localStorage.inboundShipping != '' && isNumber(localStorage.inboundShipping)) {
      result.inboundShipping = parseFloat(localStorage.inboundShipping);
      if (!isNaN(result.inboundShipping)) {
        totalFees += result.inboundShipping;
      }
    }*/

    if (localStorage.transitCost != '' && isNumber(localStorage.transitCost)) {
      result.transitCost = parseFloat(localStorage.transitCost);
      if (!isNaN(result.transitCost)) {
        totalFees += result.transitCost;
        if(defaultcall)
        {
        	$("#FBA_transitCost").html(calcround(result.transitCost));
      		$("#FBA_transitCost").parent().show();
      	}
      }
    }

    if (localStorage.feeAdjustment != '' && isNumber(localStorage.feeAdjustment)) {
      let r = calcround(totalFees * parseFloat(localStorage.feeAdjustment) / 100);
      	if(r>0)
    	{
    		r=Number(r.toFixed(2));
    	}
      result.fbaFeeAdjustment = r;
      if(defaultcall)
      {
       	$("#FBA_feeAdjustment").html(calcround(result.fbaFeeAdjustment));
      	$("#FBA_feeAdjustment").parent().show();
      }
      totalFees += r;
    }
    if (efn) {
      result.efnFee = Number(p.efnFee);
      totalFees += Number(p.efnFee);
		if(calcround(result.efnFee)>0)
		{
			if(defaultcall)
			$("#FBA_efnFee").html(calcround(result.efnFee));
		}
		else
		{
			if(defaultcall)
			$("#FBA_efnFee").parent().hide();
		}
      if (localStorage.efnAdjustment != '' && isNumber(localStorage.efnAdjustment)) {
        let r = calcround(result.efnFee * parseFloat(localStorage.efnAdjustment) / 100);
        result.efnFeeAdjustment = r;
        totalFees += r;
      }
    }
    else
	{
		if(defaultcall)
		$("#FBA_efnFee").parent().hide();
	}
    const vatOnFees = calcround((totalFees * vat / 100).toFixed(2));
    const vatToRemit = calcround(((sellPrice - buyPrice) * (vat / 100) / (1 + vat / 100)).toFixed(2));
	var Short=((vat / 100) / (1 + vat / 100));
	$(".currencySign").html(CurrencySymbol);
	if(typeof localStorage.vatFlatRate!="undefined" && localStorage.vatFlatRate)
	{
		var FlatRate=calcround(sellPrice*(vat / 100));
		result.FlatRate = FlatRate;
		totalFees +=FlatRate;
		if(calcround(result.FlatRate)>0)
		{
			if(defaultcall)
			{
				$("#FBA_FlatRate").html(calcround(result.FlatRate));
				$("#FBA_FlatRate").parent().show();
			}
		}
		else
		{
			if(defaultcall)
			$("#FBA_FlatRate").parent().hide();
		}
		if(defaultcall)
		$("#FBA_vatOnFees").parent().hide();
	}
	else
	{
		
    	totalFees += vatReg ? vatToRemit : vatOnFees;
    	result.vatOnFees = vatOnFees;
    	result.vatToRemit = vatToRemit;
    	$("#FBA_FlatRate").parent().hide();
    	if(!vatReg)
    	{
    		if(calcround(result.vatOnFees)>0)
			{
				if(defaultcall)
				{
					$("#FBA_vatOnFees").html(calcround(result.vatOnFees));
					$("#FBA_vatOnFees").parent().show();
				}
			}
			else
			{
				if(defaultcall)
				{
					$("#FBA_vatOnFees").parent().hide();
				}
			}
		}
		else
		{
			if(calcround(result.vatToRemit)>0)
			{
				if(defaultcall)
				{
					$("#FBA_netVatToBeRemitted").html(calcround(result.vatToRemit));
					$("#FBA_netVatToBeRemitted").parent().show();
				}
			}
			else
			{
				if(defaultcall)
				{
					$("#FBA_netVatToBeRemitted").parent().hide();
				}
			}
		}
    }
    //totalFees += vatReg ? vatToRemit : vatOnFees;
    var profit = sellPrice - buyPrice - totalFees;
    if(profit.toFixed(2)==0.01 && defaultcall)
    {
    	profit=0.00;
    }
    result.roi = profit / buyPrice * 100;
    if (localStorage.profitAdjustment != '' && isNumber(localStorage.profitAdjustment)) {
      let r = calcround(profit * (1 + parseFloat(localStorage.profitAdjustment) / 100));
      result.profitAdj = r;
      result.roi = calcround(r / buyPrice * 100);
    }
	totalFees=totalFees;
	profit=profit;

    result.totalFees = totalFees;
    result.profit = profit;
    result.useVAT = vatReg;
    result.isEFN = efn;
    result.profitMargin = (result.profitAdj || profit) / sellPrice * 100;
    result.breakeven=calcround(totalFees+buyPrice);
    if(calcround(result.referralFee)>0)
	{
		if(defaultcall)
		$("#FBA_referralFee").html(calcround(result.referralFee));
	}
	else
	{
		if(defaultcall)
		$("#FBA_referralFee").parent().hide();
	}
	if(defaultcall)
	{
		$("#FBA_salesTax").parent().hide();
		$("#FBA_referralFee").html(calcround(result.referralFee));
		$("#FBA_totalFees").html(calcround(result.totalFees));
		$("#FBA_profit").html(calcround(result.profit));
		$("#FBA_profitMargin").html(calcround(result.profitMargin));
		$("#FBA_roi").html(calcround(result.roi));
		$("#FBA_profit").parent().removeClass("restriction-wizard-green");
		$("#FBA_profit").parent().removeClass("restriction-wizard-red");
	}
	if(calcround(result.profit)>0)
	{
		if(defaultcall)
		$("#FBA_profit").parent().addClass("restriction-wizard-green");
	}
	else
	{
		if(defaultcall)
		$("#FBA_profit").parent().addClass("restriction-wizard-red");
	}
	if(defaultcall)
	{
		$("#FBA_roi").parent().removeClass("restriction-wizard-green");
		$("#FBA_roi").parent().removeClass("restriction-wizard-red");
	}
	if(calcround(result.roi)>0)
	{
		if(defaultcall)
		$("#FBA_roi").parent().addClass("restriction-wizard-green");
	}
	else
	{
		if(defaultcall)
		$("#FBA_roi").parent().addClass("restriction-wizard-red");
	}
    return result;
  }

  function _calcFeesUS(sellPrice, buyPrice, vat, vatReg, efn, p, localStorage,vatBuyPrice,defaultcall=true) {
    var referralFee = sellPrice * p.referralFeeP;
    var fbaFees = p.fbaFee;
    var totalFees = referralFee + fbaFees;

    var result = {
      referralFee: referralFee,
      fbaFees: fbaFees,
      totalFBAFeesEst: totalFees,
    };
	$("#FBA_efnFee").parent().hide();
	$("#FBA_fbaFee").parent().hide();
	if(calcround(fbaFees)>0)
    {
    	$("#FBA_fbaFee").html(calcround(fbaFees));
    	$("#FBA_fbaFee").parent().show();
    }
	$("#FBA_prepFeeFixed").parent().hide();
	$("#FBA_transitCost").parent().hide();
	$("#FBA_feeAdjustment").parent().hide();
	$("#FBA_netVatToBeRemitted").parent().hide();
	$("#FBA_vatOnFees").parent().hide();
    if (localStorage.fixedPrepFee != '' && isNumber(localStorage.fixedPrepFee)) {
      let r = parseFloat(localStorage.fixedPrepFee);
      result.fixedPrepFee = r;
      $("#FBA_prepFeeFixed").html(calcround(result.fixedPrepFee));
      $("#FBA_prepFeeFixed").parent().show();
      totalFees += r;
    }

    /*if (localStorage.inboundShippingUS != '' && isNumber(localStorage.inboundShipping)) {
      result.inboundShipping = parseFloat(localStorage.inboundShippingUS);
      if (!isNaN(result.inboundShipping)) {
        totalFees += result.inboundShipping;
        //$("#FBA_prepFeeFixed").html(calcround(result.fixedPrepFee));
      	//$("#FBA_prepFeeFixed").parent().show();
      }
    }*/

    if (localStorage.transitCost != '' && isNumber(localStorage.transitCost)) {
      result.transitCost = parseFloat(localStorage.transitCost);
      if (!isNaN(result.transitCost)) {
        totalFees += result.transitCost;
        $("#FBA_transitCost").html(calcround(result.transitCost));
      	$("#FBA_transitCost").parent().show();
      }
    }

    if (localStorage.feeAdjustment != '' && isNumber(localStorage.feeAdjustment)) {
      let r = totalFees * parseFloat(localStorage.feeAdjustment) / 100;
      result.fbaFeeAdjustment = r;
      $("#FBA_feeAdjustment").html(calcround(result.fbaFeeAdjustment));
      $("#FBA_feeAdjustment").parent().show();
      totalFees += r;
    }
	$(".currencySign").html(CurrencySymbol);
    var profit = sellPrice - buyPrice - totalFees;
    if(profit.toFixed(2)==0.01 && defaultcall)
    {
    	profit=0.00;
    }
    if (localStorage.taxRate != '' && isNumber(localStorage.taxRate)) {
      let r = sellPrice * parseFloat(localStorage.taxRate) / 100;
      result.salesTax = r;
      profit -= r;
      if(calcround(result.salesTax)>0)
      {
      	$("#FBA_salesTax").html(calcround(result.salesTax));
      	$("#FBA_salesTax").parent().show()
      }
      else
      {
      	$("#FBA_salesTax").parent().hide();
      }
    }
    else
    {
    	$("#FBA_salesTax").parent().hide();
    }
    result.roi = profit / buyPrice * 100;
    if (localStorage.profitAdjustment != '' && isNumber(localStorage.profitAdjustment)) {
      let r = profit * (1 + parseFloat(localStorage.profitAdjustment) / 100);
      result.profitAdj = r;
      result.roi = r / buyPrice * 100;
    }

    result.totalFees = totalFees;
    result.profit = profit;
    result.profitMargin = (result.profitAdj || profit) / sellPrice * 100;
    result.breakeven=calcround(totalFees+buyPrice);
if(typeof result.totalFBAFeesEst == "undefined" && !isNaN(result.totalFees))
{
	result.totalFBAFeesEst= result.totalFees;
}
	if(result.referralFee>0)
	{
		$("#FBA_referralFee").html(calcround(result.referralFee));
	}
	else
	{
		$("#FBA_referralFee").parent().hide();
	}
	$("#FBA_referralFee").html(calcround(result.referralFee));
	$("#FBA_totalFees").html(calcround(result.totalFees));
	$("#FBA_profit").html(calcround(result.profit));
	$("#FBA_profitMargin").html(calcround(result.profitMargin));
	$("#FBA_roi").html(calcround(result.roi));
	$("#FBA_profit").parent().removeClass("restriction-wizard-green");
	$("#FBA_profit").parent().removeClass("restriction-wizard-red");
	if(calcround(result.profit)>0)
	{
		$("#FBA_profit").parent().addClass("restriction-wizard-green");
	}
	else
	{
		$("#FBA_profit").parent().addClass("restriction-wizard-red");
	}
	$("#FBA_roi").parent().removeClass("restriction-wizard-green");
	$("#FBA_roi").parent().removeClass("restriction-wizard-red");
	if(calcround(result.roi)>0)
	{
		$("#FBA_roi").parent().addClass("restriction-wizard-green");
	}
	else
	{
		$("#FBA_roi").parent().addClass("restriction-wizard-red");
	}
    return result;
    
  }
 function _getFees(asin, sellPrice, efn) {
    const cacheKey = [asin, sellPrice, efn].join('-');
    if (_cache[cacheKey]) {
      return Promise.resolve(_cache[cacheKey]);
    }
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({ data: {
          		asin: asin,
          		country: Region,
          		sellPrice:sellPrice,
          		efn,
          		efnflag: efn,
        		FunctionCall: 'estimateFee',
				LicenseKey: valicenseKey,
        		},'FunctionCall':'estimateFee' }, 
      function(response) {
      _cache[cacheKey] = response;
          resolve(response);
    });
    });
  }
function calcroundSearchPage(num) 
{
	if(typeof num!='undefined')
	{
		var with2Decimals=Number(num).toFixed(2);
    	//var with2Decimals = num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
    	return parseFloat(with2Decimals);
	}
	else
	{
		return num;
	}
}
function calcround(num) {
if(isNaN(num))
{
	num=0;
}
if(typeof num!='undefined')
{
	if(num==null)
	{
		num=0;
	}
	/*else if(num<0)
	{
		num=0;
	}*/
	var with2Decimals=Number(num).toFixed(2);
    //var with2Decimals = num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
    return parseFloat(with2Decimals);
}
else
{
	return num;
}
}
function isNumber(v) {
  if (undefined === v || null === v) {
    return false;
  }
  if (typeof v === 'number') {
    return true;
  }
  return !isNaN(v - 0);
}