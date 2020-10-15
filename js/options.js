const OPTIONS_KEYS = ['IdealRoi','vatFlatRate','IdealProfit','taxRate','historydatagraph','googleSheetName','BuyBoxGraph','DisableStockChecker','DisableStockCheckerOld','ResultPageCalculator', 'efnAdjustment', 'efn','vatBuyPrice', 'vatRate', 'vatRegistered', 'feeAdjustment', 'profitAdjustment', 'inboundShipping', 'inboundShippingUS', 'fixedPrepFee', 'transitCost', 'autoHazmat', 'spreadsheetURL','asinsel','namesel','catsel','ranksel','feessel','profitsel','riosel','pmarginsel','bevensel','weightsel','storeurlsel','DateOfExport','urlsel','bpricesel','spricesel','estsales','amazonLink','storeLink','HstoreUrl','HamazonUrl','HighlightText','ProductVariation','CQuantity','MWSSELLERIDUK','MWSTOKENUK','MWSSELLERIDUSA','MWSTOKENUSA'];
var OptionLicenseKey="";
function createCustomAlert(txt) {
	d = document;

	if(d.getElementById("modalContainer")) return;

	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "modalContainerCustomAlert";
	mObj.style.height = d.documentElement.scrollHeight + "px";
	
	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "CustomalertBox";
	
	if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
	alertObj.style.visiblity="visible";

	h1 = alertObj.appendChild(d.createElement("h1"));
	h1.appendChild(d.createTextNode("Fbamultitool Oops!"));

	msg = alertObj.appendChild(d.createElement("p"));
	//msg.appendChild(d.createTextNode(txt));
	msg.innerHTML = "<br>"+txt;

	btn = alertObj.appendChild(d.createElement("button"));
	btn.id = "CustomAlertcloseBtn";
	btn.appendChild(d.createTextNode("OK"));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert();return false; }

	alertObj.style.display = "block";
	
}

function removeCustomAlert() {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainerCustomAlert"));
}
$(function ($) {
 chrome.storage.sync.get('licenseKey', function (key) 
 {
	if(typeof key.licenseKey!="undefined")
	{
		OptionLicenseKey=key.licenseKey;
	}
 	if(typeof key.licenseKey!="undefined" && key.licenseKey.indexOf("ZAK001__")==0)
 	{
		$("#TestLicense").click(function()
		{
			if($("#LicenseCodeTest").val().trim()=="")
			{
				alert("Please Enter License Code");
			}
			else
			{
				$.ajax({
        		type: "POST",
        		url: 'http://3.16.122.8/license/index.php',
        		data:  {
          			licensekey: $("#LicenseCodeTest").val(),
          			actionType: "extension",
          			checkType: "Lamayaru",
        			},
        		async: true,
        		dataType: "json",
        		success: function(responseText){
        			console.log(responseText);
        			alert(responseText.requestmessage);
        			},
        		error: function(XMLHttpRequest, textStatus, errorThrown) {
            		alert("Something Went wrong. Please try again.");
        		}
    			});
			}
		});
	}
	else
	{
		$("#ToBeHidden").hide();
	}
})
$("#NewLicenseCodeButton").click(function()
		{
			if($("#NewLicenseCode").val().trim()=="")
			{
				alert("Please Enter License Code");
			}
			else
			{
				 chrome.runtime.sendMessage({
   					method: 'POST',
    				action: 'license',
    				dataType: 'json',
    				url: 'https://admin.fbamultitool.com/license/index.php',
    				data: {
          			licensekey: $("#NewLicenseCode").val(),
          			actionType: "extension",
        			}
				}, 
				function(response) 
				{
					var NewLicenseCode=$("#NewLicenseCode").val();
					if(typeof response!="undefined" && response!=null)
					{
						if(typeof response.OldVersionChrome!="undefined")
						{
							OldVersionChrome=response.OldVersionChrome;
						}
						if(response.requeststatus=="success")
						{
							if(typeof response.type!="undefined")
							{
								if(response.type=="Free")
								{
									FreeTrialCheck=true;
									chrome.storage.sync.set({ "FreeTrialCheck": true });
								}
								else
								{
									FreeTrialCheck=false;
									chrome.storage.sync.set({ "FreeTrialCheck": false });
								}
							}
							var now = new Date().getTime();
							chrome.storage.sync.set({ "licenseKey": NewLicenseCode });
    						chrome.storage.sync.set({ "licenseDateCheck": now });
							chrome.storage.sync.set({ "licensecheck": "success" });
							createCustomAlert("Upgraded Successfully");
						}
						else
						{
							chrome.storage.sync.remove(['licenseKey','FreeTrialCheck','licenseDateCheck','licensecheck']);
          					createCustomAlert(response.requestmessage);
						}
					}
					else
					{
						chrome.storage.sync.remove(['licenseKey','FreeTrialCheck','licenseDateCheck','licensecheck'])
          				createCustomAlert("Error Occured. Please Re-enter License Code OR Try Reinstalling App");
					}
				})
			}
		});
  $('#tabs').tabs();
  var settings;

  $('.rwizard-switch').checkable();
   var checkable=$('.rwizard-switch12').checkable();
  $('.highlight-switch').checkable();
  
  
	
	$("#showMWSUK1").click(function(){
	$("#MWSUK1").toggle();
	});
	$("#showMWSUK2").click(function(){
	$("#MWSUK2").toggle();
	});
  chrome.storage.sync.get(OPTIONS_KEYS, function (_settings) {
    settings = _settings;
    $('#fee-adjustment').val(settings.feeAdjustment);
    $('#profit-adjustment').val(settings.profitAdjustment);
    $('#efn-adjustment').val(settings.efnAdjustment);
    $('#inbound-shipping').val(settings.inboundShipping);
    $('#inbound-shipping-us').val(settings.inboundShippingUS);
    $('#fixed-prep-fee').val(settings.fixedPrepFee);
    $('#transit-cost').val(settings.transitCost);
    $('#googleSheetName').val(settings.googleSheetName);
    $('#vat-rate').val(settings.vatRate);
    $('#vat-registered').checkable('value', settings.vatRegistered);
    $('#vat-BuyPrice').checkable('value', settings.vatBuyPrice);
    $('#vat-FlatRate').checkable('value', settings.vatFlatRate);
    $('#tax-rate').val(settings.taxRate);
    var mwsuk1=chrome.extension.getURL('img/mws-uk-1.jpg');
    var mwsuk2=chrome.extension.getURL('img/mws-uk-2.png');
    $("#MWSUK1").attr("src",mwsuk1);
    $("#MWSUK2").attr("src",mwsuk2);
    if(typeof settings.IdealRoi=="undefined")
    {
    	settings.IdealRoi=30;
    }
    if(typeof settings.IdealProfit=="undefined")
    {
    	settings.IdealProfit=2.50;
    }
    $('#IdealRoi').val(settings.IdealRoi);
    $('#IdealProfit').val(settings.IdealProfit);
    if(typeof settings.ProductVariation=='undefined')
    {
    	settings.ProductVariation=true;
    }
    if(typeof settings.MWSTOKENUK=='undefined')
    {
    	settings.MWSTOKENUK="";
    }
    if(typeof settings.MWSSELLERIDUK=='undefined')
    {
    	settings.MWSSELLERIDUK="";
    }
    if(typeof settings.MWSTOKENUSA=='undefined')
    {
    	settings.MWSTOKENUSA="";
    }
    if(typeof settings.MWSSELLERIDUSA=='undefined')
    {
    	settings.MWSSELLERIDUSA="";
    }
    if(typeof settings.historydatagraph=='undefined')
    {
    	settings.historydatagraph=false;
    }
    if(typeof settings.BuyBoxGraph=='undefined')
    {
    	settings.BuyBoxGraph=false;
    }
    if(typeof settings.autoHazmat=='undefined')
    {
    	settings.autoHazmat=true;
    }
    if(typeof settings.HighlightText=='undefined')
    {
    	settings.HighlightText=false;
    }
    if(typeof settings.ResultPageCalculator=='undefined')
    {
    	settings.ResultPageCalculator=false;
    }
    if(typeof settings.DisableStockChecker=='undefined')
    {
    	settings.DisableStockChecker=true;
    }
    if(typeof settings.HstoreUrl=='undefined')
    {
    	settings.HstoreUrl=true;
    }
    if(typeof settings.HamazonUrl=='undefined')
    {
    	settings.HamazonUrl=true;
    }
    if(typeof settings.DateOfExport=='undefined')
    {
    	settings.DateOfExport=0;
    }
    if(typeof settings.asinsel=='undefined')
    {
    	settings.asinsel=0;
    }
    if(typeof settings.namesel=='undefined')
    {
    	settings.namesel=0;
    }
    if(typeof settings.catsel=='undefined')
    {
    	settings.catsel=0;
    }
    if(typeof settings.ranksel=='undefined')
    {
    	settings.ranksel=0;
    }
    if(typeof settings.feessel=='undefined')
    {
    	settings.feessel=0;
    }
    if(typeof settings.profitsel=='undefined')
    {
    	settings.profitsel=0;
    }
    if(typeof settings.riosel=='undefined')
    {
    	settings.riosel=0;
    }
    if(typeof settings.pmarginsel=='undefined')
    {
    	settings.pmarginsel=0;
    }
    if(typeof settings.bevensel=='undefined')
    {
    	settings.bevensel=0;
    }
    if(typeof settings.weightsel=='undefined')
    {
    	settings.weightsel=0;
    }
    if(typeof settings.storeurlsel=='undefined')
    {
    	settings.storeurlsel=0;
    }
    if(typeof settings.bpricesel=='undefined')
    {
    	settings.bpricesel=0;
    }
    if(typeof settings.CQuantity=='undefined')
    {
    	settings.CQuantity=0;
    }
    if(typeof settings.spricesel=='undefined')
    {
    	settings.spricesel=0;
    }
    if(typeof settings.estsales=='undefined')
    {
    	settings.estsales=0;
    }
    if(typeof settings.amazonLink=='undefined')
    {
    	settings.amazonLink=0;
    }
    if(typeof settings.storeLink=='undefined')
    {
    	settings.storeLink=0;
    }
    
    
    
    //$('#auto-hazmat').checkable('value', settings.autoHazmat);
    $('#spreadsheet-url').val(settings.spreadsheetURL);
    $('#DateOfExport').val(settings.DateOfExport);
     $('#asinsel').val(settings.asinsel);
    $('#namesel').val(settings.namesel);
    $('#catsel').val(settings.catsel);
    $('#ranksel').val(settings.ranksel);
    $('#feessel').val(settings.feessel);
    $('#profitsel').val(settings.profitsel);
    $('#riosel').val(settings.riosel);
    $('#pmarginsel').val(settings.pmarginsel);
    $('#bevensel').val(settings.bevensel);
    $('#weightsel').val(settings.weightsel);
    $('#storeurlsel').val(settings.storeurlsel);
    $('#bpricesel').val(settings.bpricesel);
    $('#spricesel').val(settings.spricesel);
    $('#CQuantity').val(settings.CQuantity);
    $('#estsales').val(settings.estsales);
    $('#amazonLink').val(settings.amazonLink);
    $('#storeLink').val(settings.storeLink);
    $('#HstoreUrl').checkable('value', settings.HstoreUrl);
    $('#HamazonUrl').checkable('value', settings.HamazonUrl);
    $('#highlighttext').checkable('value', settings.HighlightText);
    $('#ResultPageCalculator').checkable('value', settings.ResultPageCalculator);
    $('#DisableStockChecker').checkable('value', settings.DisableStockChecker);
    $('#historydatagraph').checkable('value', settings.historydatagraph);
    $('#BuyBoxGraph').checkable('value', settings.BuyBoxGraph);
    $('#ProductVariation').checkable('value', settings.ProductVariation);
    $('#MWSTOKENUK').val(settings.MWSTOKENUK);
    $('#MWSSELLERIDUK').val(settings.MWSSELLERIDUK);
     $('#MWSTOKENUSA').val(settings.MWSTOKENUSA);
    $('#MWSSELLERIDUSA').val(settings.MWSSELLERIDUSA);
   console.log("settings--->",settings);
    if( settings.DateOfExport!=0)
    {
    	$(".exportsort").find("option[value='" + settings.DateOfExport + "']").prop("disabled", true);
    }
    if( settings.asinsel!=0)
    {
    	$(".exportsort").find("option[value='" + settings.asinsel + "']").prop("disabled", true);
    }
    if( settings.namesel!=0)
    {
    	$(".exportsort").find("option[value='" + settings.namesel + "']").prop("disabled", true);
    }
    if( settings.catsel!=0)
    {
    	$(".exportsort").find("option[value='" + settings.catsel + "']").prop("disabled", true);
    }
    if( settings.ranksel!=0)
    {
    	$(".exportsort").find("option[value='" + settings.ranksel + "']").prop("disabled", true);
    }
    if( settings.feessel!=0)
    {
    	$(".exportsort").find("option[value='" + settings.feessel + "']").prop("disabled", true);
    }
    if( settings.profitsel!=0)
    {
    	$(".exportsort").find("option[value='" + settings.profitsel + "']").prop("disabled", true);
    }
    if( settings.riosel!=0)
    {
    	$(".exportsort").find("option[value='" + settings.riosel + "']").prop("disabled", true);
    }
    if( settings.pmarginsel!=0)
    {
    	$(".exportsort").find("option[value='" + settings.pmarginsel + "']").prop("disabled", true);
    }
    if( settings.bevensel!=0)
    {
    	$(".exportsort").find("option[value='" + settings.bevensel + "']").prop("disabled", true);
    }
    if( settings.weightsel!=0)
    {
    	$(".exportsort").find("option[value='" + settings.weightsel + "']").prop("disabled", true);
    }
    if( settings.storeurlsel!=0)
    {
    	$(".exportsort").find("option[value='" + settings.storeurlsel + "']").prop("disabled", true);
    }
    if( settings.CQuantity!=0)
    {
    	$(".exportsort").find("option[value='" + settings.CQuantity + "']").prop("disabled", true);
    }
     if( settings.bpricesel!=0)
    {
    	$(".exportsort").find("option[value='" + settings.bpricesel + "']").prop("disabled", true);
    }
    if( settings.spricesel!=0)
    {
    	$(".exportsort").find("option[value='" + settings.spricesel + "']").prop("disabled", true);
    }
    if( settings.estsales!=0)
    {
    	$(".exportsort").find("option[value='" + settings.estsales + "']").prop("disabled", true);
    }
    if( settings.amazonLink!=0)
    {
    	$(".exportsort").find("option[value='" + settings.amazonLink + "']").prop("disabled", true);
    }
    if( settings.storeLink!=0)
    {
    	$(".exportsort").find("option[value='" + settings.storeLink + "']").prop("disabled", true);
    }
    
  });
var previous;

$(".exportsort").on('focus', function () {
    previous = this.value;
}).change(function() {
    var selvalue=$(this).val();
if(selvalue!=0)
{
	//$('option[value="'+selvalue+'"]').prop('disabled',true);
	//$(".exportsort").find("option").prop("disabled", false);
	$(".exportsort").find("option[value='" + previous + "']").prop("disabled", false);
    $(".exportsort").not(this).find("option[value='" + selvalue + "']").prop("disabled", true);
}
else
{
	$(".exportsort").find("option[value='" + previous + "']").prop("disabled", false);
}
	if($(this).nextAll('.exportsort:first').length>0)
	{
		$(this).nextAll('.exportsort:first').focus();
	}
	else
	{
		$(this).prevAll('.exportsort:first').focus();
	}

});
$("#vat-registered").click(function(){
  	if($('#vat-registered').checkable('value'))
  	{
		$('#vat-FlatRate').checkable("value",false);
  		$('#vat-FlatRate').removeClass("ui-checked")
  		$('#vat-FlatRate').find("input[type=checkbox].ui-checkable").prop("checked",false);	
  	}
  });
$("#vat-FlatRate").click(function(){

  	if($('#vat-FlatRate').checkable('value'))
  	{
  		$('#vat-registered').checkable("value",false);
  		$('#vat-registered').removeClass("ui-checked");
  		$('#vat-registered').find("input[type=checkbox].ui-checkable").prop("checked",false);
  	}
  });
  $('#save-settings').click(function () {
    const GOOGLE_RE = /^https:\/\/docs.google.com\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/

    var newSettings = {};
    newSettings.feeAdjustment = $('#fee-adjustment').val().replace(/,/g, '');
    newSettings.profitAdjustment = $('#profit-adjustment').val().replace(/,/g, '');
    newSettings.efnAdjustment = $('#efn-adjustment').val().replace(/,/g, '');
    newSettings.inboundShipping = $('#inbound-shipping').val().replace(/,/g, '');
    newSettings.inboundShippingUS = $('#inbound-shipping-us').val().replace(/,/g, '');
    newSettings.fixedPrepFee = $('#fixed-prep-fee').val().replace(/,/g, '');
    newSettings.transitCost = $('#transit-cost').val().replace(/,/g, '');
    newSettings.googleSheetName = $('#googleSheetName').val().trim();
    newSettings.vatRate = $('#vat-rate').val();
    
    newSettings.IdealRoi = $('#IdealRoi').val();
    newSettings.IdealProfit = $('#IdealProfit').val();
    
    newSettings.vatRegistered = $('#vat-registered').checkable('value');
    newSettings.vatBuyPrice = $('#vat-BuyPrice').checkable('value');
    newSettings.vatFlatRate = $('#vat-FlatRate').checkable('value');
    if(newSettings.vatBuyPrice && !newSettings.vatRegistered)
    {
    	alert('You Can\'t Exclude Buy Price Vat ,When VAT Registered is Switched Off');
    	 $('#vat-BuyPrice').checkable('value', "false");
    	newSettings.vatBuyPrice=false;
    }
    newSettings.taxRate = $('#tax-rate').val();
    newSettings.MWSTOKENUK=$('#MWSTOKENUK').val();
    newSettings.MWSSELLERIDUK=$('#MWSSELLERIDUK').val();
    newSettings.MWSTOKENUSA=$('#MWSTOKENUSA').val();
    newSettings.MWSSELLERIDUSA=$('#MWSSELLERIDUSA').val();
    newSettings.autoHazmat = true;
    newSettings.spreadsheetURL = $('#spreadsheet-url').val();
    newSettings.DateOfExport = $('#DateOfExport option:selected').val();
    newSettings.asinsel = $('#asinsel option:selected').val();
    newSettings.namesel = $('#namesel option:selected').val();
    newSettings.catsel = $('#catsel option:selected').val();
    newSettings.ranksel = $('#ranksel option:selected').val();
    newSettings.feessel = $('#feessel option:selected').val();
	newSettings.profitsel = $('#profitsel option:selected').val();
	newSettings.riosel = $('#riosel option:selected').val();
	newSettings.pmarginsel = $('#pmarginsel option:selected').val();
	newSettings.bevensel = $('#bevensel option:selected').val();
	newSettings.weightsel = $('#weightsel option:selected').val();
	newSettings.storeurlsel = $('#storeurlsel option:selected').val();
	newSettings.bpricesel = $('#bpricesel option:selected').val();
	newSettings.spricesel = $('#spricesel option:selected').val();
	newSettings.CQuantity = $('#CQuantity option:selected').val();
	newSettings.estsales = $('#estsales option:selected').val();
	newSettings.amazonLink = $('#amazonLink option:selected').val();
	newSettings.storeLink = $('#storeLink option:selected').val();
	newSettings.HstoreUrl = $('#HstoreUrl').checkable('value');
	newSettings.HamazonUrl = $('#HamazonUrl').checkable('value');
	newSettings.HighlightText = $('#highlighttext').checkable('value');
	newSettings.DisableStockChecker = $('#DisableStockChecker').checkable('value');
	newSettings.ResultPageCalculator = $('#ResultPageCalculator').checkable('value');
	newSettings.historydatagraph = $('#historydatagraph').checkable('value');
	newSettings.BuyBoxGraph = $('#BuyBoxGraph').checkable('value');
	newSettings.ProductVariation = $('#ProductVariation').checkable('value');


    if (newSettings.spreadsheetURL && !GOOGLE_RE.test(newSettings.spreadsheetURL)) {
      alert('Google Sheet URL is incorrect');
      return;
    }
	//else
	{
    	chrome.storage.sync.set(newSettings, function () {
			$("#overlay").show();
			$(".loaderOptionPage").show();
			if(newSettings.MWSTOKENUK.trim()!="" && newSettings.MWSSELLERIDUK.trim()!="" && newSettings.MWSTOKENUSA.trim()!="" && newSettings.MWSSELLERIDUSA.trim()!="")
			{
				$.ajax
				({
					type: "GET",
					data: {
						FunctionCall: 'CallForData',
						Type: 'BOTHSIDE',
						MWSTOKENUK: newSettings.MWSTOKENUK,
						MWSSELLERIDUK: newSettings.MWSSELLERIDUK,
						MWSTOKENUSA: newSettings.MWSTOKENUSA,
						MWSSELLERIDUSA: newSettings.MWSSELLERIDUSA,
						LicenseKey: OptionLicenseKey
						},
					dataType: 'json',
					url: "http://3.16.122.8/appapi/productDetails.php",
					success: function(Response)
					{
						console.log(Response);
						$("#overlay").hide();
						$(".loaderOptionPage").hide();
						if(Response.UK.requeststatus=="success" && Response.US.requeststatus=="success")
						{
							chrome.storage.sync.set({ MWSTOKENUSAlast: newSettings.MWSTOKENUSA, MWSSELLERIDUSAlast: newSettings.MWSSELLERIDUSA,MWSTOKENUKlast: newSettings.MWSTOKENUK, MWSSELLERIDUKlast: newSettings.MWSSELLERIDUK,TokenSaved: "true",UKTOKENSAVED:"true",USATOKENSAVED:"true"});
							alert("Saved!");
						}
						else if(Response.UK.requeststatus=="success")
						{
							chrome.storage.sync.set({ MWSTOKENUKlast: newSettings.MWSTOKENUK, MWSSELLERIDUKlast: newSettings.MWSSELLERIDUK,TokenSaved: "true",UKTOKENSAVED:"true"});
							alert('USA Seller ID Or Token Not Valid');
						}
						else if(Response.US.requeststatus=="success")
						{
							chrome.storage.sync.set({ MWSTOKENUSAlast: newSettings.MWSTOKENUSA, MWSSELLERIDUSAlast: newSettings.MWSSELLERIDUSA,TokenSaved: "true",USATOKENSAVED:"true"});
							alert('UK Seller ID Or Token Not Valid');
						}
						else
						{
							chrome.storage.sync.set({ MWSTOKENUK: "", MWSSELLERIDUK: "",MWSTOKENUSA:"",MWSSELLERIDUSA:""});
							alert('Both USA and UK Seller ID Or Token Not Valid');
						}
						
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) 
					{
						$("#overlay").hide();
						$(".loaderOptionPage").hide();
        				alert('Both USA and UK Seller ID Or Token Not Valid');		
					}
				})
			}
			else if(newSettings.MWSTOKENUK.trim()!="" && newSettings.MWSSELLERIDUK.trim()!="")
			{
				$.ajax
				({
					type: "GET",
					data: {
						FunctionCall: 'CallForData',
						Type: 'UKSIDE',
						MWSTOKENUK: newSettings.MWSTOKENUK,
						MWSSELLERIDUK: newSettings.MWSSELLERIDUK,
						LicenseKey: OptionLicenseKey,
						},
					dataType: 'json',
					url: "http://3.16.122.8/appapi/productDetails.php",
					success: function(Response)
					{
						$("#overlay").hide();
						$(".loaderOptionPage").hide();
						if(Response.requeststatus=="success")
						{
							chrome.storage.sync.set({ MWSTOKENUSAlast: newSettings.MWSTOKENUSA, MWSSELLERIDUSAlast: newSettings.MWSSELLERIDUSA,TokenSaved: "true",UKTOKENSAVED:"true"});
							alert("Saved!");
						}
						else
						{
							chrome.storage.sync.set({ MWSTOKENUK: "", MWSSELLERIDUK: "",TokenSaved: "false"});
							alert('Seller ID Or Token Not Valid');
						}
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) 
					{
						$("#overlay").hide();
						$(".loaderOptionPage").hide();
        				chrome.storage.sync.set({ MWSTOKENUK: "", MWSSELLERIDUK: ""});		
						alert('Seller ID Or Token Not Valid');		
					}
				})
			}
			else if(newSettings.MWSTOKENUSA.trim()!="" && newSettings.MWSSELLERIDUSA.trim()!="")
			{
				$.ajax
				({
					type: "GET",
					data: {
						FunctionCall: 'CallForData',
						Type: 'USSIDE',
						MWSTOKENUSA: newSettings.MWSTOKENUSA,
						MWSSELLERIDUSA: newSettings.MWSSELLERIDUSA,
						LicenseKey: OptionLicenseKey
						},
					dataType: 'json',
					url: "http://3.16.122.8/appapi/productDetails.php",
					success: function(Response)
					{
						$("#overlay").hide();
						$(".loaderOptionPage").hide();
						if(Response.requeststatus=="success")
						{
							chrome.storage.sync.set({ MWSTOKENUSAlast: newSettings.MWSTOKENUSA, MWSSELLERIDUSAlast: newSettings.MWSSELLERIDUSA,TokenSaved: "true",USATOKENSAVED:"true"});
							alert("Saved!");
						}
						else
						{
							chrome.storage.sync.set({ MWSTOKENUSA: "", MWSSELLERIDUSA: "",TokenSaved: "false"});
							alert('Seller ID Or Token Not Valid');
						}
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) 
					{
						$("#overlay").hide();
						$(".loaderOptionPage").hide();
        				chrome.storage.sync.set({ MWSTOKENUSA: "", MWSSELLERIDUSA: ""});		
						alert('Seller ID Or Token Not Valid');
					}
				})
			}
			else
			{
				$("#overlay").hide();
				$(".loaderOptionPage").hide();
				alert('Saved!');
			}
    	});
    }
  });
});