//Developed by bhatrameez2009@gmail.com
Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
}
Storage.prototype.getObject = function (key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}
'use strict';
var FirstCalculatorCall=false;
var FreeTrialCheck=false;
var collapsibleClickRegistered=false;
var TriggerNumber=0;
var appshown=false;
var prepCheckT=false;
var responseArrayGlobal={};
var responseArrayGlobalCalled={};
var panelVM;
var ChildWindow;
var workingOffersAssoc={};
var gethtml="";
var gobalAsin="";
var globalRegion="";
var Collapsible=false;
var asinNewAdded = '';
var urlNewAdded = '';
var RegionNewAdded="";
var ActualCategory="";
var ActualSalesRank="";
var VariationCall=false;
var diagRunId="";
var totalFBASELLERS=0;
var GlobalBreakEven=0;
var totalnumberOfSellers=0;
var lastPrimevisited=false;
var lastAllvisited=false;
var GlobalCategory="";
var GlobalCategory1="";
var GlobalCategory2="";
var GlobalCategory3="";
var currentTab;
var key = '';
var otherOpts = {};
var myListener = null;
var requestId = 0;
var workingOffers;
var domain;
var collapscall=false;
var panicId;
var buttoncartfound=false;
var PopUpOpen=false;
var formsdatatodelete=[];
var htmlWithQuantity="";
var sessionIdConfirmPage="";
var globalsettings=[];
var globalOffers=[];
var CalledStockerChecker=false;
var CalledSalesEstimator=false;
var GCQuantity=1;
var lasttime;
var _cache = {};
var automaticCall=true;
var GlobalRank="NotANumber";
var dateobject = new Date();
var datemonthyear =dateobject.getDate()+""+dateobject.getMonth()+""+dateobject.getFullYear();
var hours=0;
var minutes=0;
var seconds=0;
var cautionAlert=false;
var productURLRestriction;
var checkinoption={};
checkinoption=[datemonthyear];
var globalFBACount=0;
var globalFBMCount=0;
var globalTotalSellerCount=0;
var FBAORFBMGOT="";
var vaname="";
var vaemail="";
var valicenseKey="";
var lowestNewPriceGlobal=0;
var gotWeightCall=false;
var GotWeight=0;
var GotWeightUnit="";
var PopupUrl = chrome.extension.getURL('html/popup.html');
var sizeofscreen;
//var checkoutinhtml='<span class="vacheckout" data-bind="click: vaCheckout">VA CHECK OUT</span><span class="vacheckin" data-bind="click: showValogin">VA CHECK IN</span>';
var port;
var startTimer=0;
var GlobalObjects={};
var ScoringVar={};
ScoringVar['AmazonSeller']=0;
var alreadyFoundSellers=[];
var GlobalsalesRank='';
var defaultStock=false;
var dafaultStockObj={};
var defaultStockCheck=false;
var CartsubmitStarted=false;
var OldVersionChrome=true;
var ScraperApiKey="";
var MWSTOKENUK="";
var MWSSELLERIDUK="";
var MWSTOKENUSA="";
var MWSSELLERIDUSA="";

var PreviousGraphWidth="1030";
var newsUpdateHtml='<div class="NewsDes"><div class="NewsDesDate"></div><div class="NewsDesTitle"></div><div class="NewsDesContent">No news update</div></div>';
var scraperUrl="https://admin.fbamultitool.com/appapi/productDetails.php?url=";
scraperUrl="";
//alert(chromeVersion = /Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1]);
function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function GetBarGraph(Response,Type,Index,Divide=true)
{
	if(Divide)
	{
	return typeof Response['data']['stats'][Type][Index]!='undefined' && Response['data']['stats'][Type][Index]!=-1?Response['data']['stats'][Type][Index]/100:0;
	}
	else
	{
		return typeof Response['data']['stats'][Type][Index]!='undefined' && Response['data']['stats'][Type][Index]!=-1?Response['data']['stats'][Type][Index]:0;
	}
}
function get_time_diff( datetime )
{
    var datetime = typeof datetime !== 'undefined' ? datetime : "2014-01-01 01:02:03.123456";

    var datetime = new Date( datetime ).getTime();
    var now = new Date().getTime();

    if( isNaN(datetime) )
    {
        return "";
    }


    if (datetime < now) {
        var milisec_diff = now - datetime;
    }else{
        var milisec_diff = datetime - now;
    }

    var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));

    var date_diff = new Date( milisec_diff );

    return days;
}
const CURRENCY_SIGNS = {
  'com': '$',
  'co.uk': '£',
  'de': '€',
  'fr': '€',
  'es': '€',
  'it': '€',
  'ca': '$'
}

const NewsFlag1=chrome.extension.getURL('img/News1.png');
const NewsFlag2=chrome.extension.getURL('img/News2.png');
const NewsFlag3=chrome.extension.getURL('img/News3.png');
const NewsRed= chrome.extension.getURL('img/NewsRed.png');
const NewsWarning= chrome.extension.getURL('img/NewsPlan.png');
var isFF = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
const OPTIONS_KEYS = ['taxRate','DisableStockChecker','ResultPageCalculator', 'efnAdjustment','fbmflag', 'efn', 'vatRate','vatBuyPrice', 'vatRegistered', 'feeAdjustment', 'profitAdjustment', 'inboundShipping', 'inboundShippingUS', 'fixedPrepFee', 'transitCost', 'autoHazmat', 'spreadsheetURL','asinsel','namesel','catsel','ranksel','feessel','profitsel','riosel','pmarginsel','bevensel','weightsel','storeurlsel','urlsel','bpricesel','spricesel','estsales','amazonLink','storeLink','HstoreUrl','HamazonUrl','HighlightText','DateOfExport','CQuantity'];
var browser = browser || chrome;
var graphBack=chrome.extension.getURL('img/fba-multi-tool1.png');
var FaceBookURl=chrome.extension.getURL('img/facebook_001.png');
var YoutubeURl=chrome.extension.getURL('img/youtube_001.png');
window.templates = Object.create(null);

window.templates['panel.html'] = '<div class="rwizard-panel restriction-wizard-container gradient-2" style="width:224px !important;z-index:3;position: relative;"> <img class="restriction-wizard-logo" data-bind="attr: { src: logoURL }" width="100%"/><div class="loader-wrappernew" data-bind="if: loading"><div class="loadernew"></div></div><div data-bind="ifnot:showLicenseDialog" class="restriction-wizard-license"><h1><i class="unavailable"></i> Buy me!</h1><p>Or put license key here:</p><form id="saveLicense"> <input type="text" data-bind="value: licenseKey"> <button type="submit" data-bind="click: saveLicense">Save license key</button></form><p class="error" style="display: none">Invalid license key</p><p style="margin-bottom: 33px;"> <a href="https://www.fbamultitool.com/pricing" target="_blank">Buy license</a></p></div><div style="margin-top: -23px;margin-bottom: -20px;" data-bind="ifnot: loggedIn"><h1><i class="notlogged"></i> <a target="_blank" data-bind="attr: { href: loginURL }">Log in<i class="external-link" aria-hidden="true"></i></a></h1><p class="additional-info">to Seller\s Central</p></div><div class="restriction-wizard-main" data-bind="if:showLicenseDialog"><div style="font-size:14px;font-weight:bold;padding:0px 0px 0px 12px;" ><div class="loggedInCheck"><div class="eligble" data-bind="if: showMain"><div data-bind="if: prepCheckToShow"><div class="fbamultitoolprepdiv" ><div class="PrepInner"><i class="prepicon" role="img"><span class="tooltiptextPrep" data-bind="html: prepCheckhtml"></span></i></div></div></div><span style="font-size: 14px; font-weight:bold;float:left">Eligible To Sell:<span data-bind="html: resultHTML"></span></span><span style="font-size: 14px;" data-bind="if: data().additional"><p style="margin: 0px;" class="additional-info" data-bind="text: data().additional"></p></span> </br><!--<button data-bind="click: checkHazmat"  class="hazmat-check" type="button">Check Hazmat</button>--><span class="rwizard-hazmat-text"  style="float: left;width: 197px;text-align: left;" data-bind="html: hazmatHTML" class="hazmat"></span><span class="rwizard-hazmat-text dangerousTooltip" data-toggle="tooltip" data-placement="top" title="Hooray!"  style="float: left;width: 197px;text-align: left;" data-bind="html: dangerousHTML" class="hazmat"></span></div></div><br><div class="rwizard-rank-data" style="padding: 0px 0px 3px 0px;"><span data-bind="text: category"></span><br> <span class="SalesRankToolTip" >Sales Rank:&nbsp;<span data-bind="text: rank"></span><span class="SalesRankToolTipInner" data-bind="text: SalesRankDate"></span></span><br> <label class="collapsible1">Weight:&nbsp;<span data-bind="text: displayWeight"></span></label><span data-bind="css: { \'content_collapsible1hidden\': Collapsible }" class="content_collapsible1"  style="max-height: 0px;"><span data-bind="text: BoxDimensions"></span><br><span data-bind="text: BoxDimensionsInAdded"></span></span><br> ASIN:&nbsp;<span data-bind="text: asin" class="ASINClass"></span><br><div data-bind="if: VaHtml" style="float:left;"><span class="vacheckout" data-bind="click: vaCheckout"><u>VA CHECK OUT</u></span><span class="vacheckin" data-bind="click: showValogin"><u>VA CHECK IN</u></span></div><div data-bind="ifnot:VaHtml"><span class="vacheckout vacheckshow" data-bind="click: vaCheckout">VA CHECK OUT</span><span class="vacheckin vacheckhide" data-bind="click: showValogin">VA CHECK IN</span></div></div><div class="form-popup" id="myForm"><form action="" data-bind="submit: vaFormSubmit"  class="form-container"><h1>Login</h1><input type="text" placeholder="Enter Email" name="vaemail" required><input type="text" placeholder="Enter Name" name="vaname" required><span class="checkinmessage">By clicking "Check In" you agree with your employer that they can monitor your work load with our time tracking and screenshot service.</span><button type="submit" class="btn">Check In</button><button type="button" class="btn cancel" data-bind="click: vaFormClose" >Close</button></form></div></div><br><hr class="hrclass"><div class="rwizard-sales-data-wrapper" style="padding:5px 0px 15px 0px;"><div class="btnsales-data"> <button data-bind="click: showKeepa"  class="rwizard-sales-button salesdatabutton" style="margin:0px 0px 0px 0px;"></button></div><br><div data-bind="visible: showRank" style="padding:0px 0px 12px 0px;"><span data-bind="text: rankTop" style="font-weight:bold;" class="rwizard-badge"></span></div></div></div><div data-bind="if:showLicenseDialog"><hr class="hrclass"><button data-bind="click: toggleCalc" class="rwizard-round-button rwizard-calc-toggle fbacalulatorimg"></button><a data-bind="click: openOptions" target="_blank" class="rwizard-cog" style="color:#DDD !important">Settings</a><div data-bind="if: showCalc"><div class="rwizard-calc-form"><div class="rw-col-12"> <label id="discVoucher">Voucher Disc:&nbsp&nbsp</label><div class="rw-row"><div class="rw-col-12"><input id="priceSlider" type="text" data-slider="true" data-slider-highlight="true" data-slider-range="0,100"></div></div></div><div class="rw-col-9"> <label>Buy Price:</label><div class="rw-row"><div class="rw-col-3"> <select data-bind="value: buyPriceCurrency"><option value="EUR">&euro;</option><option value="GBP">&pound;</option><option value="USD">&dollar;</option></select></div><div class="rw-col-9" style="width:74% !important"> <input id="buypriceinput" style="margin: 0;" data-bind="value: buyPrice, executeOnEnter: calculate" type="text"></input></div></div></div><div class="rw-col-3"> <label>QTY:</label><div class="rw-row"> <input style="margin: 0;" data-bind="value: qty, executeOnEnter: calculate" type="text"></input></div></div><div class="rw-col-9"> <label>Sell Price:</label> <input data-bind="value: sellPrice, executeOnEnter: calculate" type="text"></input></div><div class="rw-col-2" style="margin-left: 8px;"> <label data-bind="text: FBAORFBM"> </label> </div></div> <button class="rwizard-round-button calculateprofitimg" data-bind="click: calculate"></button><hr class="hrclass"><div class="row"><div data-bind="if: showEFNSwitch" class="column"><div class="efn-switch-wrapper"> <label>EFN</label><div data-bind="css: { \'ui-checked\': efn }, click: toggleEFN" class="rwizard-switch"><div class="rwizard-helper"></div></div></div></div><div class="column"><div class="efn-switch-wrapper"> <label>FBM</label><div data-bind="css: { \'ui-checked\': fbmflag }, click: toggleFBM" class="rwizard-switch"><div class="rwizard-helper"></div></div></div></div><div class="column"><label data-bind="if: fbmflag" style="margin-top:2px;"><label >P&P</label><input type="text" data-bind="value: shipPrice,executeOnEnter: ShFormSubmit" placeholder="Shipping" name="ShippingA" id="ShippingA" style="width: 35px;height:19px;position: relative;border:2px solid green; border-radius:13px" ></label><label data-bind="ifnot: fbmflag" style="margin-top:2px;"><label>P&P</label><input type="text" data-bind="value: shipPrice,executeOnEnter: ShFormSubmit" placeholder="Shipping" name="ShippingA" id="ShippingA" disabled style="width: 35px;height:19px;position: relative;border:2px solid red; border-radius:13px" ></label></div></div><hr class="hrclass"><div data-bind="ifnot: fbmflag" class="rwizard-calc-results rwizard-rank-data"><label class="collapsible">FBA Fees Breakdown</label><span class="content_collapsible" style="max-height: 0px;">Referral Fee:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().referralFee"></span> <span data-bind="if: totalFees().isEFN"><br>EFN Fees:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().efnFee"></span></span> <span data-bind="ifnot: totalFees().isEFN"><br>FBA Fees:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().fbaFees"></span><br> Total FBA Fees:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().totalFBAFeesEst"></span></span> <span data-bind="if: totalFees().fixedPrepFee"><br>Fixed Prep. Fee:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().fixedPrepFee"></span></span> <span data-bind="if: totalFees().transitCost"><br>Transit Cost:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().transitCost"></span></span> <span data-bind="if: totalFees().inboundShipping"><br>Inbound Shipping:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().inboundShipping"></span></span> <span data-bind="if: totalFees().fbaFeeAdjustment"><br>FBA Fees adjustment:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().fbaFeeAdjustment"></span></span> <span data-bind="if: totalFees().efnFeeAdjustment"><br>EFN Fees adjustment:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().efnFeeAdjustment"></span></span> <span data-bind="if: !totalFees().useVAT && totalFees().vatOnFees"><br>VAT On Fees:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().vatOnFees"></span></span><span data-bind="if: totalFees().FlatRate"><br>Flat Rate VAT:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().FlatRate"></span></span> <span data-bind="if: totalFees().useVAT"><br>Net VAT To Be Remitted:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().vatToRemit"></span></span></span><br> Total Fees:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().totalFees"></span> <span data-bind="if: totalFees().salesTax"><br>Sales Tax:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().salesTax"></span></span><br><br> Your profit is:&nbsp;<span data-bind="css: profitStatus"><span data-bind="if:totalFees().profit"><span data-bind="text: currencySign"></span></span><span data-bind="numericText: totalFees().profit"></span></span><span data-bind="if: totalFees().profitAdj"><br>Profit Adjusted to<span data-bind="if: totalFees().profitAdj"><span data-bind="text: currencySign"></span></span><span data-bind="numericText: totalFees().profitAdj"></span></span> <br>Your ROI:&nbsp;<span data-bind="css: profitStatus"><span data-bind="numericText: totalFees().roi"></span><span data-bind="if: totalFees().roi"> %</span></span><br> Profit Margin:&nbsp;<span data-bind="numericText: totalFees().profitMargin"></span><span data-bind="if: totalFees().profitMargin"> %</span><br> Breakeven Price:&nbsp;<span data-bind="if: BreakEvenValue"><span data-bind="text: currencySign"></span></span><span data-bind="numericText: BreakEvenValue"></span><br></div></div><div data-bind="if: fbmflag" class="rwizard-calc-results rwizard-rank-data"><label class="collapsible fontsizeC">FBM Fees Breakdown</label><span class="content_collapsible" style="max-height: 0px;">Referral Fee:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().referralFee"></span> <span data-bind="if: totalFees().isEFN"><br>EFN Fees:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().efnFee"></span></span> <span data-bind="if: totalFees().fbmVariableFee"><br>Variable Fees:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().fbmVariableFee"></span></span> <span data-bind="if: totalFees().fixedPrepFee"><br>Fixed Prep. Fee:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().fixedPrepFee"></span></span> <span data-bind="if: totalFees().transitCost"><br>Transit Cost:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().transitCost"></span></span> <span data-bind="if: totalFees().inboundShipping"><br>Inbound Shipping:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().inboundShipping"></span></span> <span data-bind="if: totalFees().fbaFeeAdjustment"><br>FBA Fees adjustment:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().fbaFeeAdjustment"></span></span> <span data-bind="if: totalFees().efnFeeAdjustment"><br>EFN Fees adjustment:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().efnFeeAdjustment"></span></span> <span data-bind="if: !totalFees().useVAT && totalFees().vatOnFees"><br>VAT On Fees:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().vatOnFees"></span></span><span data-bind="if: totalFees().shipPrice"><br>FBM Shipping :&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().shipPrice"></span></span><span data-bind="if: totalFees().FlatRate"><br>Flat Rate VAT:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().FlatRate"></span></span> <span data-bind="if: totalFees().useVAT"><br>Net VAT To Be Remitted:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().vatToRemit"></span></span></span><br> Total Fees:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().totalFees"></span> <span data-bind="if: totalFees().salesTax"><br>Sales Tax:&nbsp;<span data-bind="text: currencySign"></span><span data-bind="numericText: totalFees().salesTax"></span></span><br><br> Your profit is:&nbsp;<span data-bind=" css: profitStatus"><span data-bind="if: totalFees().profit"><span data-bind="text: currencySign"></span></span><span data-bind="numericText: totalFees().profit"></span></span><span data-bind="if: totalFees().profitAdj"><br>Profit Adjusted to<span data-bind="if: totalFees().profitAdj"><span data-bind="text: currencySign"></span></span><span data-bind="numericText: totalFees().profitAdj"></span></span> <br>Your ROI:&nbsp;<span data-bind=" css: profitStatus"><span data-bind="numericText: totalFees().roi"></span> <span data-bind="if: totalFees().roi">%</span></span><br> Profit Margin:&nbsp;<span data-bind="numericText: totalFees().profitMargin"></span><span data-bind="if: totalFees().profitMargin"> %</span><br> Breakeven Price:&nbsp;<span data-bind="if: BreakEvenValue"><span data-bind="text: currencySign"></span></span><span data-bind="numericText: BreakEvenValue"></span><br></div></div><span data-bind="if: countriesData().length > 0"><hr class="hrclass"><table><thead><tr><th></th><th>GBP</th><th>EURO</th><th>Rank</th></tr></thead><tbody class="apptable" data-bind="foreach: countriesData"><tr><td style="padding:0px !important"><a data-bind="attr: { href: url }, html: $data.countryFlag"></a></td><td style="">&pound;<span data-bind="numericText: $data.priceGBP"></span></td><td style="">&euro;<span data-bind="numericText: $data.priceEUR"></span></td><td data-bind="text: $data.rank"></td></tr></tbody></table></span><hr class="hrclass"><div class="outerIcon"><div class="innerIcon"><a href="https://www.youtube.com/channel/UCPpv0f-IWLTnhcynWq-J7jg/featured?view_as=subscriber" title="Youtube Channel"><img src="'+YoutubeURl+'" ></a></div><div class="innerIcon" ><a href="https://www.facebook.com/groups/436504083355717/" title="Facebook Group"><img src="'+FaceBookURl+'" ></a></div><div class="innerIcon"><a href="javascript:void(0)" data-bind="click: createCustomAlertNewsUpdate.bind($data,'+"'This is the Test News')"+'"  title="News Update"><img id="NewsUpdateIcon" width="25px" style="margin-top: 5px;" src="'+NewsWarning+'" ></a></div></div><hr class="hrclass"><p class="right"> <a href="https://www.fbamultitool.com/" target="_blank">Report a bug</a></p><p class="left"> <a href="https://www.fbamultitool.com/" target="_blank">fbamultitool.com</a></p></div></div>';
window.templates['title-panel.html'] = '<span class="appendkeepa" data-bind="if:showLicenseDialog"><div class="rwizard-panel inhirit rwizard-panelbottom rwizard-panelnobottomradious rwizard-title-panel gra gradient-2" style="display: inline-block !important;width:375px;margin-bottom: 0px !important;"><div class="leftTool-col_1"><div class="rw-row"><label>PL Detector:</label><span class="wraperToolTipNew"><span data-bind="foreach : ko.utils.range(1, 3)" class="gradient-dots"><span class="pl-risk-bullet" data-bind="css: $parent.plRiskClass"></span></span><span class="TooltipText">Fetching</span></span><input type="text" style="width: 89%;" data-bind="value: storeURL" placeholder="Store URL"> <button data-bind="click: exportData" class="rwizard-export">&nbsp;</button></div><button id="variationClick"  disabled>&nbspVariation Viewer </button><br><div class="RoiBuyPriceMsg"><b>ROI Buy Price</b></div></div><div class="leftTool-col_2"><div class="rw-row"> <span class="salesestimatorfull" style="display: inline;"><label>Sales Est:</label><div class="openCircle"><div class="c100 perC0 small"><span class="EstimatedSalesShow"></span><div class="slice"><div class="bar"></div><div class="fill"></div></div></div></div></div></span></div><div style="display: inline-block;width: 108%;font-size: 13px;font-weight: bolder;clear:both;"><span>20% <font id="Roi20per" style="color:#18c187"></font></span> - <span>30% <font id="Roi30per" style="color:#18c187"></font></span> - <span>40% <font id="Roi40per" style="color:#18c187"></font></span> - <span>50% <font id="Roi50per" style="color:#18c187"></font></span> - <span>60% <font id="Roi60per" style="color:#18c187"></font></span></div></div></div><div class="rwizard-panel rwizard-panelbottom rwizard-title-panel rwizard-panelnotopradious overflowVisible gra gradient-2" style="display: inline-block !important;width:375px;margin-bottom: 0px !important;"><div class="leftTool-col_1 "><div><div class="wraperToolTip" style="display:block !important;"><div class="wraperToolTipHover" style="margin-left: 26px;font-size: 15.5px;font-weight: bold;">Score</div><div class="SEMIprogress"><div class="SEMIbarOverflow"><div class="SEMIbar"></div></div><span>0</span>%</div><div class="Tooltip"><div class="rowBar"><div class="boxdivBar"><label>ROI</label> <div class="progressBarR" id="Hroi"><div></div></div><div class="htext"><span id="HroiText"></span></div></div> <div class="boxdivBar"><label>Competition</label> <div class="progressBarR" id="Hcom"><div></div></div><div class="htext"><span id="HcomText"></span></div></div> <div class="boxdivBar"> <label>Sales</label> <div class="progressBarR" id="Hsales"><div></div></div><div class="htext"><span id="HsalesText"></span></div></div></div><div class="rowBar"><div class="boxdivBar"><label>Amazon</label><div class="progressBarR" id="Hamazon"><div></div></div><div class="htext"><span id="HamazonText"></span></div></div> <div class="boxdivBar"><label>Rank %</label> <div class="progressBarR" id="Hrank"><div></div></div><div class="htext"><span id="HrankText"></span></div></div> <div class="boxdivBar"> <label>Profit</label> <div class="progressBarR" id="Hprofit"><div></div></div><div class="htext"><span id="HprofitText"></span></div></div></div>  <div class="rowBar"><div class="boxdivBar"></div> <div class="boxdivBar"><label>BB Stock</label> <div class="progressBarR" id="Hbbstock"><div></div></div><div class="htext"><span id="HbbstockText"></span></div></div> <div class="boxdivBar"> </div></div>   <div class="rowBar rowBarCenter"> <label>Item Score</label><br><label><h3 id="scoreMainDesc"></h3></label><br><label><h6 id="scoreMainDescReason"></h6></label></div>  <div class="rowBar rowBarCenter"> <div class="finalDiv"><div class="progressBarR" id="Hoverall"><div></div></div></div><span id="HoverallNumber">0%</span></div>                  </div></div></div><div class="rw-row"></div></div><div class="leftTool-col_2" style="font-size: 15.5px;font-weight: bold;"><div class="rw-row"><button class="main circleUngate ungateButton" style="text-decoration: none;width: 80px; height: 80px; background-color: #18c187;color:white;font-size: 14.5px;font-weight: bold;">Ungate</button></div></div></div></div></span>';
document.addEventListener("sendmessage", function(a) {
    console.log("sendMessage");
    chrome.extension.sendMessage({
        action: a.detail.topic,
        source: a.detail.message
    })
});
function calcBreakEvenPoint(sellPrice,result,buyPrice) {

    var profit = 1;
    var _p = {};
    var count = 0;
    var totalFee=result.totalFees;
    sellPrice = parseFloat(sellPrice.toFixed(2));

    if (sellPrice <= 0) return 0;

    while (profit !== 0.00 && count < 2500) {

        var rate = 0.01;
        if (profit > 5) rate = parseFloat((profit / 2).toFixed(2));
        else if (profit < 0) rate = profit * -1;

        sellPrice = profit > 0 ? sellPrice - rate : sellPrice + rate;
		var getP=getProfit(sellPrice,buyPrice,totalFee)
        profit = parseFloat(getP.toFixed(2));
        count++;
    }

    return sellPrice;
}
function getProfit(sellPrice,buyPrice,totalFee)
{
	return sellPrice - buyPrice - totalFee;
}
function SalesRankHistoryFunction(HistoryArray,data,data1,data2,frequency,CurrencySign,SalesRankMade)
{
	if(GlobalCategory.trim()=="")
	{
		var currentRegion = extractCountryFromURL(location.href);

    	var productData = getProductData(document, currentRegion);
    	GlobalCategory=productData.category;
	}
	if(HistoryArray.length==1)
	{
		return highchartoption1={

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x',

},
    subtitle: {
        text: ''
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Sales Rank',
            style: {
                color: '#000000'
            }
        },
        labels: {
            formatter: function () {
                return  this.value/1000 + ' K';
            },
            style: {
                color: '#000000'
            }
        },
		 opposite: true
    }],
	 xAxis: {
	 minPadding: 0,
	 maxPadding: 0,
        crosshair: {
            width: 1,
            color: 'green',
            zIndex: 6,
        },
        gridLineWidth: 1,
        type:'datetime',
        minorTickInterval:100,
    	minTickInterval:100,
    },
plotOptions: {
        series: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 1
            },
             states: {
                inactive: {
                    opacity: 1
                },
                active: {
                    opacity: 1
                }
            }
        },
        flags: {
            tooltip: {
                xDateFormat: '%B %e, %Y'
            },
            accessibility: {
                pointDescriptionFormatter: function (point) {
                    var timeDesc = Highcharts.SeriesAccessibilityDescriber
                            .getPointA11yTimeDescription(point),
                        flagTitle = point.title,
                        flagText = point.text;

                    return timeDesc + ', ' + flagTitle + ': ' + flagText + '.';
                }
            }
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
         enabled: true
    },
    tooltip: {
            xDateFormat: '%B %Y',
            shared: true,
            split: true,
                },

    series: [
    {
        type: 'area',
        id: GlobalCategory+'_1',
        name: GlobalCategory,
         color: '#24A96B',
          fillColor: '#d0f7e5',
         turboThreshold: 500000,
        yAxis: 0,
        zIndex: 0,
        lineWidth: 1,
        step: true,
        data: SalesRankMade[frequency],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: GlobalCategory1+"__1",
        name: GlobalCategory1,
         color: '#2f2fcc',
         turboThreshold: 500000,
        yAxis: 0,
        zIndex: 1,
        lineWidth: 1,
        step: true,
        data: data[frequency],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

};
	}
	else if(HistoryArray.length==2)
	{
		return highchartoption1={

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x',

},
    subtitle: {
        text: ''
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [ { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Sales Rank',
            style: {
                color: '#000000'
            }
        },
        labels: {
            formatter: function () {
                return  this.value/1000 + ' K';
            },
            style: {
                color: '#000000'
            }
        },
		 opposite: true
    }],
	 xAxis: {
	 minPadding: 0,
	 maxPadding: 0,
        crosshair: {
            width: 1,
            color: 'green',
            zIndex: 6,
        },
        gridLineWidth: 1,
        type:'datetime',
        minorTickInterval:100,
    	minTickInterval:100,
    },
plotOptions: {
        series: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 1
            },
             states: {
                inactive: {
                    opacity: 1
                },
                active: {
                    opacity: 1
                }
            }
        },
        flags: {
            tooltip: {
                xDateFormat: '%B %e, %Y'
            },
            accessibility: {
                pointDescriptionFormatter: function (point) {
                    var timeDesc = Highcharts.SeriesAccessibilityDescriber
                            .getPointA11yTimeDescription(point),
                        flagTitle = point.title,
                        flagText = point.text;

                    return timeDesc + ', ' + flagTitle + ': ' + flagText + '.';
                }
            }
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
         enabled: true
    },
    tooltip: {
            xDateFormat: '%B %Y',
            shared: true,
            split: true,
                },

    series: [
    {
        type: 'area',
        id: GlobalCategory+"_1",
        name: GlobalCategory,
         color: '#24A96B',
          fillColor: '#d0f7e5',
         turboThreshold: 500000,
        yAxis: 0,
        zIndex: 0,
        lineWidth: 1,
        step: true,
        data: SalesRankMade[frequency],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: GlobalCategory1+"__1",
        name: GlobalCategory1,
        color: '#2f2fcc',
        lineWidth: 1,
        turboThreshold: 500000,
        step: true,
        data: data[frequency],
        zIndex: 2,
        yAxis: 0,
        tooltip: {
            xDateFormat: '%B %Y',
        }
        
    },
    {
        type: 'line',
        id: GlobalCategory2+"__1",
        name: GlobalCategory2,
        color: '#c72fcc',
        lineWidth: 1,
        turboThreshold: 500000,
        step: true,
        data: data1[frequency],
        zIndex: 1,
        yAxis: 0,
        tooltip: {
            xDateFormat: '%B %Y',
        }
        
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

};
	}
	else if(HistoryArray.length==3)
	{
		return highchartoption1={

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x',

},
    subtitle: {
        text: ''
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Sales Rank',
            style: {
                color: '#000000'
            }
        },
        labels: {
            formatter: function () {
                return  this.value/1000 + ' K';
            },
            style: {
                color: '#000000'
            }
        },
		 opposite: true
    }],
	 xAxis: {
	 minPadding: 0,
	 maxPadding: 0,
        crosshair: {
            width: 1,
            color: 'green',
            zIndex: 6,
        },
        gridLineWidth: 1,
        type:'datetime',
        minorTickInterval:100,
    	minTickInterval:100,
    },
plotOptions: {
        series: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 1
            },
             states: {
                inactive: {
                    opacity: 1
                },
                active: {
                    opacity: 1
                }
            }
        },
        flags: {
            tooltip: {
                xDateFormat: '%B %e, %Y'
            },
            accessibility: {
                pointDescriptionFormatter: function (point) {
                    var timeDesc = Highcharts.SeriesAccessibilityDescriber
                            .getPointA11yTimeDescription(point),
                        flagTitle = point.title,
                        flagText = point.text;

                    return timeDesc + ', ' + flagTitle + ': ' + flagText + '.';
                }
            }
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
         enabled: true
    },
    tooltip: {
            xDateFormat: '%B %Y',
            shared: true,
            split: true,
                },

     series: [
    {
        type: 'area',
        id: GlobalCategory+"_1",
        name: GlobalCategory,
         color: '#24A96B',
          fillColor: '#d0f7e5',
         turboThreshold: 500000,
        yAxis: 0,
        zIndex: 0,
        lineWidth: 1,
        step: true,
        data: SalesRankMade[frequency],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: GlobalCategory1+"__1",
        name: GlobalCategory1,
        color: '#2f2fcc',
        lineWidth: 1,
        turboThreshold: 500000,
        step: true,
        data: data[frequency],
        zIndex: 3,
        yAxis: 0,
        tooltip: {
            xDateFormat: '%B %Y',
        }
        
    },
    {
        type: 'line',
        id: GlobalCategory2+"__1",
        name: GlobalCategory2,
        color: '#c72fcc',
        lineWidth: 1,
        turboThreshold: 500000,
        step: true,
        data: data1[frequency],
        zIndex: 2,
        yAxis: 0,
        tooltip: {
            xDateFormat: '%B %Y',
        }
        
    }
    ,
    {
        type: 'line',
        id: GlobalCategory3+"__1",
        name: GlobalCategory3,
        color: '#f0a30a',
        lineWidth: 1,
        turboThreshold: 500000,
        step: true,
        data: data2[frequency],
        zIndex: 1,
        yAxis: 0,
        tooltip: {
            xDateFormat: '%B %Y',
        }
        
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

};
	}
	else
	{
		
		return highchartoption1={

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x',

},
    subtitle: {
        text: ''
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Primary yAxis
        labels: {
            format: CurrencySign+'{value}',
            style: {
                color: '#000000'
            }
        },
        title: {
            text: 'Price',
            style: {
                color: '#000000'
            }
        },

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Sales Rank',
            style: {
                color: '#000000'
            }
        },
        labels: {
            formatter: function () {
                return  this.value/1000 + ' K';
            },
            style: {
                color: '#000000'
            }
        },
		 opposite: true
    }],
	 xAxis: {
	 minPadding: 0,
	 maxPadding: 0,
        crosshair: {
            width: 1,
            color: 'green',
            zIndex: 6,
        },
        gridLineWidth: 1,
        type:'datetime',
        minorTickInterval:100,
    	minTickInterval:100,
    },
plotOptions: {
        series: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 1
            },
             states: {
                inactive: {
                    opacity: 1
                },
                active: {
                    opacity: 1
                }
            }
        },
        flags: {
            tooltip: {
                xDateFormat: '%B %e, %Y'
            },
            accessibility: {
                pointDescriptionFormatter: function (point) {
                    var timeDesc = Highcharts.SeriesAccessibilityDescriber
                            .getPointA11yTimeDescription(point),
                        flagTitle = point.title,
                        flagText = point.text;

                    return timeDesc + ', ' + flagTitle + ': ' + flagText + '.';
                }
            }
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
         enabled: true
    },
    tooltip: {
            xDateFormat: '%B %Y',
            shared: true,
            split: true,
                },

    series: [
    {
        type: 'line',
        id: 'Used-Price',
        name: 'Used Price',
        color: '#24A96B',
        yAxis: 1,
        zIndex: 3,
        lineWidth: 1,
        step: true,
        data: SalesRankMade[frequency],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

};
	
	}
}
function exportChart() {
	console.log("exporting SVG");
	var svg = canvg(document.getElementById('canvas'), getSVG(), {
		//ignoreDimensions: true
	});
}

function getSVG() {
	var chart = $('#customGraphCanvas').highcharts();
	var svg = chart.getSVG();
	return svg;
}
ko.bindingHandlers.numericText = {
  update: function (element, valueAccessor) {
    var value = ko.utils.unwrapObservable(valueAccessor());
    var formattedValue = '';
    if (typeof value === 'number') {
      formattedValue = isNaN(value) ? 'n/a' : value.toFixed(2);
    }

    ko.bindingHandlers.text.update(element, function () { return formattedValue; });
  }
};

ko.bindingHandlers.executeOnEnter = {
  init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
    var allBindings = allBindingsAccessor();
    $(element).keypress(function (event) {
      $(element).change();
      var keyCode = event.which ? event.which : event.keyCode;
      if (keyCode === 13) {
        allBindings.executeOnEnter.call(viewModel);
        event.preventDefault();
      }
    });
  }
};

chrome.storage.sync.get(["GraphWidth"],function(GraphWidth1){
if(typeof GraphWidth1.GraphWidth !='undefined')
{
	PreviousGraphWidth=GraphWidth1.GraphWidth;
	//PreviousGraphWidth=95;
}
else
{
	PreviousGraphWidth=95;
}

})

     var graphhtml="<div class='CustomGraphOuter' style='width:"+PreviousGraphWidth+"%;padding: 0px 0px 0px 0px;'><div id='customGraph' style='margin: 0px 0px 0px -8px;width:95%;height:95%;background-image:url("+graphBack+");background-position:37% 34%;background-repeat:no-repeat;position:relative;'><div class='loaderOuter'><div class='loader123'></div></div><div id='customGraphCanvas'></div><div class='tabledv'><table id='CustomGraphTable' style='font-size: smaller;color: #8a8686;width: 100%;display: table-row-group;position: relative; border-collapse: collapse;'><tbody><tr><td><table ><tbody><tr><td style='font-size: 14px;font-weight:bold;color:#0e0b0b;'><i style='' class='fa fa-calendar'></i>Range</td><td></td></tr><tr><td></td><td class='legendRange' id='todayGraph'>Today</td></tr><tr><td></td><td class='legendRange' id='weekGraph'>Week</td></tr><tr><td></td><td class='legendRange' id='monthGraph'>Month</td></tr><tr><td></td><td class='legendRange active' id='3monthGraph'>3 Months</td></tr><tr><td></td><td class='legendRange' id='yearGraph'>Year</td></tr><tr><td></td><td class='legendRange' id='AllGraph'>All</td></tr></tbody></table></td></tr></tbody></table></div><div id='customGraphCanvas1'></div><div id='customGraphCanvas2' class='customGraphCanvas2'></div><div id='customGraphCanvas3' class='customGraphCanvas2'></div><div id='customGraphCanvas4' class='customGraphCanvas2'></div><div id='customGraphCanvas5' class='customGraphCanvas2'></div><div id='customGraphCanvas6' class='customGraphCanvas2'></div><div id='customGraphCanvas7' class='customGraphCanvas2'></div><div id='customGraphCanvas8' ></div></div>";
     chrome.storage.sync.get(['historydatagraph','showCalc','licenseKey','FreeTrialCheck','BuyBoxGraph'], function (settings) 
  	{
  		var urlNewAdded=$(location).attr('href');
    	var asinNewAdded=parseAsinNewAdded(urlNewAdded);
    	var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
    	var GraphSectionAdded=false;
  	if(typeof settings.historydatagraph!='undefined' && settings.licenseKey!="undefined" && settings.licenseKey!='null' && settings.historydatagraph && typeof asinNewAdded!="undefined" && asinNewAdded!=null)
    {
    	GraphSectionAdded=true;
    	valicenseKey=settings.licenseKey;
    	if(typeof $('#bundleV2_feature_div').html()!="undefined")
     {
     	$('#bundleV2_feature_div').before(graphhtml);
     }
    else if(typeof $('#ppd').html()!="undefined")
     {
     	$('#ppd').after(graphhtml);
     }
     else if(typeof $('#centerCol').html()!="undefined")
     {
     	$('#centerCol').after(graphhtml);
     	
     }
     $("#CustomGraphTable").hide();
     var CustomGraphData;
     var CurrencySign=CURRENCY_SIGNS[RegionNewAdded];
     var myLineChart;
     var myLineChartT;
     var urldatamain;
     var SalesRankHistoryArray=[];
     chrome.runtime.sendMessage({
   			method: 'POST',
    		FunctionCall: 'Keepa',
    		dataType: 'json',
    		valicenseKey: valicenseKey,
    		url: 'https://admin.fbamultitool.com/keepa/keepatest4.php?marketplace='+RegionNewAdded+'&asin='+ asinNewAdded+"&valicenseKey="+valicenseKey
			}, function(Response) {
         var i,j,k,l,m,n,o,p,q,r,BuyboxMade={},FbaMade={},AmazonMade={},NewMade={},UsedMade={},SalesRankMade={},SalesRankHistory={},SalesRankHistory1={},SalesRankHistory2={};
        var AmazonCount=0;
        var NewCount=0;
        var UsedCount=0;
        var SalesRankCount=0;
        var BuyboxPriceCount=0;
        var FbaPriceCount=0;
        var SalesRankHistoryCount=0;
        AmazonMade['all']=[];
        AmazonMade['year']=[];
        AmazonMade['months3']=[];
        AmazonMade['months']=[];
        AmazonMade['week']=[];
        AmazonMade['today']=[];

        NewMade['all']=[];
        NewMade['year']=[];
        NewMade['months3']=[];
        NewMade['months']=[];
        NewMade['week']=[];
        NewMade['today']=[];

        UsedMade['all']=[];
        UsedMade['year']=[];
        UsedMade['months3']=[];
        UsedMade['months']=[];
        UsedMade['week']=[];
        UsedMade['today']=[];

        SalesRankMade['all']=[];
        SalesRankMade['year']=[];
        SalesRankMade['months3']=[];
        SalesRankMade['months']=[];
        SalesRankMade['week']=[];
        SalesRankMade['today']=[];
        
        SalesRankHistory['all']=[];
        SalesRankHistory['year']=[];
        SalesRankHistory['months3']=[];
        SalesRankHistory['months']=[];
        SalesRankHistory['week']=[];
        SalesRankHistory['today']=[];
        
        SalesRankHistory1['all']=[];
        SalesRankHistory1['year']=[];
        SalesRankHistory1['months3']=[];
        SalesRankHistory1['months']=[];
        SalesRankHistory1['week']=[];
        SalesRankHistory1['today']=[];
        
        SalesRankHistory2['all']=[];
        SalesRankHistory2['year']=[];
        SalesRankHistory2['months3']=[];
        SalesRankHistory2['months']=[];
        SalesRankHistory2['week']=[];
        SalesRankHistory2['today']=[];

        BuyboxMade['all']=[];
        BuyboxMade['year']=[];
        BuyboxMade['months3']=[];
        BuyboxMade['months']=[];
        BuyboxMade['week']=[];
        BuyboxMade['today']=[];

        FbaMade['all']=[];
        FbaMade['year']=[];
        FbaMade['months3']=[];
        FbaMade['months']=[];
        FbaMade['week']=[];
        FbaMade['today']=[];
        
        var loopEnd=false;
        var CommonDateCount;
        if(typeof Response['data']=="object")
        {
        	AmazonCount=Response['data']['AmazonPrice'].length;
        	NewCount=Response['data']['NewPrice'].length;
        	UsedCount=Response['data']['UsedPrice'].length;
        	SalesRankCount=Response['data']['SalesRank'].length;
        	BuyboxPriceCount=Response['data']['BuyboxPrice'].length;
        	FbaPriceCount=Response['data']['FbaPrice'].length;
        	SalesRankHistoryCount=Response['data']['SalesRankHistory'].length;
        	CommonDateCount=Response['data']['CommonDate'].length;
        }
        
        var dateToday=new Date();
        var todayTimestamp=dateToday.getTime();
		var yearlength = todayTimestamp - 1000*60*60*24*367;
		var months3length = todayTimestamp - 1000*60*60*24*90;
		var monthslength = todayTimestamp - 1000*60*60*24*30;
		var weeklength = todayTimestamp - 1000*60*60*24*7;
		var todaylength = todayTimestamp - 1000*60*60*24*1;
		var BuyBoxArray={};
        var FBAArray={};
		for(var i=(SalesRankCount-2);i>=2;i=i-2)
		{
        	var unix_timestamp = ((Response['data']['SalesRank'][i]+21564000)*60);
        	var Outerdate = new Date(eval(unix_timestamp*1000));
        	var SalesRankDataDate=Outerdate.getTime();
        	var OuterDateComp=Outerdate.getTime();
			var SalesRankVal=Response['data']['SalesRank'][i+1];
			if(i==(SalesRankCount-2))
			{
				loopEnd=true;
			}
			if(Response['data']['SalesRank'][i+1]==-1)
			{
				SalesRankVal=null;
			}
			SalesRankMade['all'].push({'x': new Date(OuterDateComp),'y':SalesRankVal});
			if(yearlength<=SalesRankDataDate)
			{
				SalesRankMade['year'].push({x:new Date(OuterDateComp),y:SalesRankVal});
			}
			if(months3length<=SalesRankDataDate)
			{
				SalesRankMade['months3'].push({x:new Date(OuterDateComp),y:SalesRankVal});
			}
			if(monthslength<=SalesRankDataDate)
			{
				SalesRankMade['months'].push({x:new Date(OuterDateComp),y:SalesRankVal});
			}
			if(weeklength<=SalesRankDataDate)
			{
				SalesRankMade['week'].push({x:new Date(OuterDateComp),y:SalesRankVal});
			}
			if(todaylength<=SalesRankDataDate)
			{
				SalesRankMade['today'].push({x:new Date(OuterDateComp),y:SalesRankVal});
			}
			
			var Found1=false;
			var Found2=false;
			var Found3=false;
			
			for(var j=(AmazonCount-2);j>=0;j=j-2)
        	{
        		var unix_timestampIn = ((Response['data']['AmazonPrice'][j]+21564000)*60);
        		var Indate1 = new Date(eval(unix_timestampIn*1000));
        		var IndateCom1=Indate1.getTime();
        		var InVal1=Response['data']['AmazonPrice'][j+1];

        		if(InVal1==-1)
				{
					InVal1=null;
				}
				if(InVal1!=null)
				{
					InVal1=(InVal1/100);
				}
				if(IndateCom1<OuterDateComp)
				{
					Found1=true;
					AmazonMade['all'].push({x:new Date(OuterDateComp),y:InVal1});
					if(yearlength<=OuterDateComp)
					{
						AmazonMade['year'].push({x:new Date(OuterDateComp),y:InVal1});
					}
					if(months3length<=OuterDateComp)
					{
						AmazonMade['months3'].push({x:new Date(OuterDateComp),y:InVal1});
					}
					if(monthslength<=OuterDateComp)
					{
						AmazonMade['months'].push({x:new Date(OuterDateComp),y:InVal1});
					}
					if(weeklength<=OuterDateComp)
					{
						AmazonMade['week'].push({x:new Date(OuterDateComp),y:InVal1});
					}
					if(todaylength<=OuterDateComp)
					{
						AmazonMade['today'].push({x:new Date(OuterDateComp),y:InVal1});
					}
					break;
				}
				else
				{
					var index2=j+1;
					AmazonCount=AmazonCount-2;
					Response['data']['AmazonPrice'].splice(j,1);
					Response['data']['AmazonPrice'].splice(j,1);
				}
        	}
        	if(!Found1)
        	{
        		AmazonMade['all'].push({x:new Date(OuterDateComp),y:null});
				if(yearlength<=OuterDateComp)
				{
					AmazonMade['year'].push({x:new Date(OuterDateComp),y:null});
				}
				if(months3length<=OuterDateComp)
				{
					AmazonMade['months3'].push({x:new Date(OuterDateComp),y:null});
				}
				if(monthslength<=OuterDateComp)
				{
					AmazonMade['months'].push({x:new Date(OuterDateComp),y:null});
				}
				if(weeklength<=OuterDateComp)
				{
					AmazonMade['week'].push({x:new Date(OuterDateComp),y:null});
				}
				if(todaylength<=OuterDateComp)
				{
					AmazonMade['today'].push({x:new Date(OuterDateComp),y:null});

				}
        	}
        	for(var k=(NewCount-2);k>=0;k=k-2)
        	{
        		var unix_timestampIn2 = ((Response['data']['NewPrice'][k]+21564000)*60);
        		var Indate2 = new Date(eval(unix_timestampIn2*1000));
        		var IndateCom2=Indate2.getTime();
        		var InVal2=Response['data']['NewPrice'][k+1];
        		if(InVal2==-1)
				{
					InVal2=null;
				}
				if(InVal2!=null)
				{
					InVal2=(InVal2/100);
				}
				if(IndateCom2<OuterDateComp)
				{
					Found2=true;
					NewMade['all'].push({x:new Date(OuterDateComp),y:InVal2});
					if(yearlength<=OuterDateComp)
					{
						NewMade['year'].push({x:new Date(OuterDateComp),y:InVal2});
					}
					if(months3length<=OuterDateComp)
					{
						NewMade['months3'].push({x:new Date(OuterDateComp),y:InVal2});
					}
					if(monthslength<=OuterDateComp)
					{
						NewMade['months'].push({x:new Date(OuterDateComp),y:InVal2});
					}
					if(weeklength<=OuterDateComp)
					{
						NewMade['week'].push({x:new Date(OuterDateComp),y:InVal2});
					}
					if(todaylength<=OuterDateComp)
					{
						NewMade['today'].push({x:new Date(OuterDateComp),y:InVal2});
					}
					break;
				}
				else
				{
					var index2=k+1;
					NewCount=NewCount-2;
					Response['data']['NewPrice'].splice(k,1);
					Response['data']['NewPrice'].splice(k,1);
				}
        	}
        	if(!Found2)
        	{
        		NewMade['all'].push({x:new Date(OuterDateComp),y:null});
				if(yearlength<=OuterDateComp)
				{
					NewMade['year'].push({x:new Date(OuterDateComp),y:null});
				}
				if(months3length<=OuterDateComp)
				{
					NewMade['months3'].push({x:new Date(OuterDateComp),y:null});
				}
				if(monthslength<=OuterDateComp)
				{
					NewMade['months'].push({x:new Date(OuterDateComp),y:null});
				}
				if(weeklength<=OuterDateComp)
				{
					NewMade['week'].push({x:new Date(OuterDateComp),y:null});
				}
				if(todaylength<=OuterDateComp)
				{
					NewMade['today'].push({x:new Date(OuterDateComp),y:null});
				}
        	}
        	for(var l=(UsedCount-2);l>=0;l=l-2)
        	{
        		var unix_timestampIn3 = ((Response['data']['UsedPrice'][l]+21564000)*60);
        		var Indate3 = new Date(eval(unix_timestampIn3*1000));
        		var IndateCom3=Indate3.getTime();
        		var InVal3=Response['data']['UsedPrice'][l+1];
        		if(InVal3==-1)
				{
					InVal3=null;
				}
				if(InVal3!=null)
				{
					InVal3=(InVal3/100);
				}

				if(IndateCom3<OuterDateComp)
				{
					Found3=true;
					UsedMade['all'].push({x:new Date(OuterDateComp),y:InVal3});
					if(yearlength<=OuterDateComp)
					{
						UsedMade['year'].push({x:new Date(OuterDateComp),y:InVal3});
					}
					if(months3length<=OuterDateComp)
					{
						UsedMade['months3'].push({x:new Date(OuterDateComp),y:InVal3});
					}
					if(monthslength<=OuterDateComp)
					{
						UsedMade['months'].push({x:new Date(OuterDateComp),y:InVal3});
					}
					if(weeklength<=OuterDateComp)
					{
						UsedMade['week'].push({x:new Date(OuterDateComp),y:InVal3});
					}
					if(todaylength<=OuterDateComp)
					{
						UsedMade['today'].push({x:new Date(OuterDateComp),y:InVal3});
					}
					break;
				}
				else
				{
					var index2=l+1;
					UsedCount=UsedCount-2;
					Response['data']['UsedPrice'].splice(l,1);
					Response['data']['UsedPrice'].splice(l,1);
				}
        	}
        	if(!Found3)
        	{
        		UsedMade['all'].push({x:new Date(OuterDateComp),y:null});
				if(yearlength<=OuterDateComp)
				{
					UsedMade['year'].push({x:new Date(OuterDateComp),y:null});
				}
				if(months3length<=OuterDateComp)
				{
					UsedMade['months3'].push({x:new Date(OuterDateComp),y:null});
				}
				if(monthslength<=OuterDateComp)
				{
					UsedMade['months'].push({x:new Date(OuterDateComp),y:null});
				}
				if(weeklength<=OuterDateComp)
				{
					UsedMade['week'].push({x:new Date(OuterDateComp),y:null});
				}
				if(todaylength<=OuterDateComp)
				{
					UsedMade['today'].push({x:new Date(OuterDateComp),y:null});
				}
        	}
		for(var o=(CommonDateCount-2);o>=0;o=o-2)
		{
			var unix_timestampOuter2 = ((Response['data']['CommonDate'][o]+21564000)*60);
        	var Outerdate2 = new Date(eval(unix_timestampOuter2*1000));
        	var OuterDateComp2=Outerdate2.getTime();
        	if(OuterDateComp2<=OuterDateComp)
        	{
			for(var m=(BuyboxPriceCount-3);m>=0;m=m-3)
        	{
        		var unix_timestampIn4 = ((Response['data']['BuyboxPrice'][m]+21564000)*60);
        		var Indate4 = new Date(eval(unix_timestampIn4*1000));
        		var IndateCom4=Indate4.getTime();
        		var InVal4=Response['data']['BuyboxPrice'][m+1];
        		if(InVal4==-1)
				{
					InVal4=null;
				}
				if(InVal4!=null)
				{
					InVal4=(InVal4/100);
				}
				if(IndateCom4<=OuterDateComp2 && typeof BuyBoxArray[OuterDateComp2]=="undefined")
				{
					BuyBoxArray[OuterDateComp2]=OuterDateComp2;
					Found1=true;
					BuyboxMade['all'].push({x:new Date(OuterDateComp2),y:InVal4});
					if(yearlength<=OuterDateComp2)
					{
						BuyboxMade['year'].push({x:new Date(OuterDateComp2),y:InVal4});
					}
					if(months3length<=OuterDateComp2)
					{
						BuyboxMade['months3'].push({x:new Date(OuterDateComp2),y:InVal4});
					}
					if(monthslength<=OuterDateComp2)
					{
						BuyboxMade['months'].push({x:new Date(OuterDateComp2),y:InVal4});
					}
					if(weeklength<=OuterDateComp2)
					{
						BuyboxMade['week'].push({x:new Date(OuterDateComp2),y:InVal4});
					}
					if(todaylength<=OuterDateComp2)
					{
						BuyboxMade['today'].push({x:new Date(OuterDateComp2),y:InVal4});
					}
					break;
				}
				else
				{
					var index2=m+1;
					if(IndateCom4>OuterDateComp2)
					{
						BuyboxPriceCount=BuyboxPriceCount-3;
						Response['data']['BuyboxPrice'].splice(m,1);
						Response['data']['BuyboxPrice'].splice(m,1);
						Response['data']['BuyboxPrice'].splice(m,1);
					}
				}
        	}
        for(var n=(FbaPriceCount-2);n>=0;n=n-2)
        	{
        		var unix_timestampIn5 = ((Response['data']['FbaPrice'][n]+21564000)*60);
        		var Indate5 = new Date(eval(unix_timestampIn5*1000));
        		var IndateCom5=Indate5.getTime();
        		var InVal5=Response['data']['FbaPrice'][n+1];
        		if(InVal5==-1)
				{
					InVal5=null;
				}
				if(InVal5!=null)
				{
					InVal5=(InVal5/100);
				}
				if(IndateCom5<=OuterDateComp2 && typeof FBAArray[OuterDateComp2]=="undefined")
				{
					FBAArray[OuterDateComp2]=OuterDateComp2;
					FbaMade['all'].push({x:new Date(OuterDateComp2),y:InVal5});
					if(yearlength<=OuterDateComp2)
					{
						FbaMade['year'].push({x:new Date(OuterDateComp2),y:InVal5});
					}
					if(months3length<=OuterDateComp2)
					{
						FbaMade['months3'].push({x:new Date(OuterDateComp2),y:InVal5});
					}
					if(monthslength<=OuterDateComp2)
					{
						FbaMade['months'].push({x:new Date(OuterDateComp2),y:InVal5});
					}
					if(weeklength<=OuterDateComp2)
					{
						FbaMade['week'].push({x:new Date(OuterDateComp2),y:InVal5});
					}
					if(todaylength<=OuterDateComp2)
					{
						FbaMade['today'].push({x:new Date(OuterDateComp2),y:InVal5});
					}
					break;
				}
				else
				{
					var index2=n+1;
					if(IndateCom5>OuterDateComp2)
					{
						FbaPriceCount=FbaPriceCount-2;
						Response['data']['FbaPrice'].splice(n,1);
						Response['data']['FbaPrice'].splice(n,1);
					}
				}
        	}
        	break;
        }
        else
        {
        	CommonDateCount=CommonDateCount-2;
        	Response['data']['CommonDate'].splice(o,1);
        	Response['data']['CommonDate'].splice(o,1);
        }
        }
        var SalesRankHistoryPre=0;
		$.each(Response['data']['SalesRankHistory'], function(indexH, valueH)
		{
			Found1=false;
			SalesRankHistoryPre++;
			if(valueH.length)
			{
			if($.inArray(indexH,SalesRankHistoryArray)==-1)
			{
				
				SalesRankHistoryArray.push(indexH);
				if(SalesRankHistoryPre==1)
				{
					$.each(Response['data']['categoryTree'], function(indexHH, valueHH)
					{
						if(valueHH.catId==indexH)
						{
							GlobalCategory1=valueHH.name;
							return false;
						}
					});
				}
				else if(SalesRankHistoryPre==2)
				{
					$.each(Response['data']['categoryTree'], function(indexHH, valueHH)
					{
						if(valueHH.catId==indexH)
						{
							GlobalCategory2=valueHH.name;
							return false;
						}
					});
				}
				else if(SalesRankHistoryPre==3)
				{
					$.each(Response['data']['categoryTree'], function(indexHH, valueHH)
					{
						if(valueHH.catId==indexH)
						{
							GlobalCategory3=valueHH.name;
							return false;
						}
					});
				}
			}
			for(var o=(valueH.length-2);o>=0;o=o-2)
        	{
        		var unix_timestampIn = ((Response['data']['SalesRankHistory'][indexH][o]+21564000)*60);
        		var Indateo = new Date(eval(unix_timestampIn*1000));
        		var IndateComo=Indateo.getTime();
        		var InValo=Response['data']['SalesRankHistory'][indexH][o+1];
        		if(InValo==-1)
				{
					InValo=null;
				}
				
				if(IndateComo<OuterDateComp)
				{
					Found1=true;
					if(SalesRankHistoryPre==1)
					{
						SalesRankHistory['all'].push({x:new Date(OuterDateComp),y:InValo});
					}
					else if(SalesRankHistoryPre==2)
					{
						SalesRankHistory1['all'].push({x:new Date(OuterDateComp),y:InValo});
					}
					else if(SalesRankHistoryPre==3)
					{
						SalesRankHistory2['all'].push({x:new Date(OuterDateComp),y:InValo});
					}
					if(yearlength<=OuterDateComp)
					{
						if(SalesRankHistoryPre==1)
						{
							SalesRankHistory['year'].push({x:new Date(OuterDateComp),y:InValo});
						}
						else if(SalesRankHistoryPre==2)
						{
							SalesRankHistory1['year'].push({x:new Date(OuterDateComp),y:InValo});
						}
						else if(SalesRankHistoryPre==3)
						{
							SalesRankHistory2['year'].push({x:new Date(OuterDateComp),y:InValo});
						}
					}
					if(months3length<=OuterDateComp)
					{
						if(SalesRankHistoryPre==1)
						{
							SalesRankHistory['months3'].push({x:new Date(OuterDateComp),y:InValo});
						}
						else if(SalesRankHistoryPre==2)
						{
							SalesRankHistory1['months3'].push({x:new Date(OuterDateComp),y:InValo});
						}
						else if(SalesRankHistoryPre==3)
						{
							SalesRankHistory2['months3'].push({x:new Date(OuterDateComp),y:InValo});
						}
					}
					if(monthslength<=OuterDateComp)
					{
						if(SalesRankHistoryPre==1)
						{
							SalesRankHistory['months'].push({x:new Date(OuterDateComp),y:InValo});
						}
						else if(SalesRankHistoryPre==2)
						{
							SalesRankHistory1['months'].push({x:new Date(OuterDateComp),y:InValo});
						}
						else if(SalesRankHistoryPre==3)
						{
							SalesRankHistory2['months'].push({x:new Date(OuterDateComp),y:InValo});
						}
					}
					if(weeklength<=OuterDateComp)
					{
						if(SalesRankHistoryPre==1)
						{
							SalesRankHistory['week'].push({x:new Date(OuterDateComp),y:InValo});
						}
						else if(SalesRankHistoryPre==2)
						{
							SalesRankHistory1['week'].push({x:new Date(OuterDateComp),y:InValo});
						}
						else if(SalesRankHistoryPre==3)
						{
							SalesRankHistory2['week'].push({x:new Date(OuterDateComp),y:InValo});
						}
					}
					if(todaylength<=OuterDateComp)
					{
						if(SalesRankHistoryPre==1)
						{
							SalesRankHistory['today'].push({x:new Date(OuterDateComp),y:InValo});
						}
						else if(SalesRankHistoryPre==2)
						{
							SalesRankHistory1['today'].push({x:new Date(OuterDateComp),y:InValo});
						}
						else if(SalesRankHistoryPre==3)
						{
							SalesRankHistory2['today'].push({x:new Date(OuterDateComp),y:InValo});
						}
					}
					break;
				}
				else
				{
					//var index2=j+1;
					//AmazonCount=AmazonCount-2;
					Response['data']['SalesRankHistory'][indexH].splice(o,1);
					Response['data']['SalesRankHistory'][indexH].splice(o,1);
				}
        	}
        	if(!Found1)
        	{
        		if(SalesRankHistoryPre==1)
        		{
        			SalesRankHistory['all'].push({x:new Date(OuterDateComp),y:null});
					if(yearlength<=OuterDateComp)
					{
						SalesRankHistory['year'].push({x:new Date(OuterDateComp),y:null});
					}
					if(months3length<=OuterDateComp)
					{
						SalesRankHistory['months3'].push({x:new Date(OuterDateComp),y:null});
					}
					if(monthslength<=OuterDateComp)
					{
						SalesRankHistory['months'].push({x:new Date(OuterDateComp),y:null});
					}
					if(weeklength<=OuterDateComp)
					{
						SalesRankHistory['week'].push({x:new Date(OuterDateComp),y:null});
					}
					if(todaylength<=OuterDateComp)
					{
						SalesRankHistory['today'].push({x:new Date(OuterDateComp),y:null});
					}
				}
				else if(SalesRankHistoryPre==2)
        		{
        			SalesRankHistory1['all'].push({x:new Date(OuterDateComp),y:null});
					if(yearlength<=OuterDateComp)
					{
						SalesRankHistory1['year'].push({x:new Date(OuterDateComp),y:null});
					}
					if(months3length<=OuterDateComp)
					{
						SalesRankHistory1['months3'].push({x:new Date(OuterDateComp),y:null});
					}
					if(monthslength<=OuterDateComp)
					{
						SalesRankHistory1['months'].push({x:new Date(OuterDateComp),y:null});
					}
					if(weeklength<=OuterDateComp)
					{
						SalesRankHistory1['week'].push({x:new Date(OuterDateComp),y:null});
					}
					if(todaylength<=OuterDateComp)
					{
						SalesRankHistory1['today'].push({x:new Date(OuterDateComp),y:null});
					}
        		}
        		else if(SalesRankHistoryPre==3)
        		{
        			SalesRankHistory2['all'].push({x:new Date(OuterDateComp),y:null});
					if(yearlength<=OuterDateComp)
					{
						SalesRankHistory2['year'].push({x:new Date(OuterDateComp),y:null});
					}
					if(months3length<=OuterDateComp)
					{
						SalesRankHistory2['months3'].push({x:new Date(OuterDateComp),y:null});
					}
					if(monthslength<=OuterDateComp)
					{
						SalesRankHistory2['months'].push({x:new Date(OuterDateComp),y:null});
					}
					if(weeklength<=OuterDateComp)
					{
						SalesRankHistory2['week'].push({x:new Date(OuterDateComp),y:null});
					}
					if(todaylength<=OuterDateComp)
					{
						SalesRankHistory2['today'].push({x:new Date(OuterDateComp),y:null});
					}
        		}
        	}
        	}
        	
    	});





		}
		if(typeof Response['data']['scrapename']!="undefined" && Response['data']['scrapename']=="yes")
		{
		if(GlobalCategory1.trim()=="" && typeof SalesRankHistoryArray[0]!="undefined")
		{
			chrome.runtime.sendMessage({
   			method: 'GET',
    		action: 'xhttp',
    		dataType: 'html',
    		url: 'https://www.amazon.'+BGRegionNewAdded+'/b/?node='+SalesRankHistoryArray[0],
    		data: {}
			}, function(responseNode) {
					var InnerhtmlObj = $(responseNode);
            		if(InnerhtmlObj.find("#merchandised-content").length)
            		{
            			GlobalCategory1=InnerhtmlObj.find("#merchandised-content").find("h1").html();
            		}
			})
		}
		if(GlobalCategory2.trim()=="" && typeof SalesRankHistoryArray[1]!="undefined")
		{
			chrome.runtime.sendMessage({
   			method: 'GET',
    		action: 'xhttp',
    		dataType: 'html',
    		url: 'https://www.amazon.'+RegionNewAdded+'/b/?node='+SalesRankHistoryArray[1],
    		data: {}
			}, function(responseNode) {
					var InnerhtmlObj = $(responseNode);
            		if(InnerhtmlObj.find("#merchandised-content").length)
            		{
            			GlobalCategory2=InnerhtmlObj.find("#merchandised-content").find("h1").html();
            		}
			})
		}
		if(GlobalCategory3.trim()=="" && typeof SalesRankHistoryArray[2]!="undefined")
		{
			chrome.runtime.sendMessage({
   			method: 'GET',
    		action: 'xhttp',
    		dataType: 'html',
    		url: 'https://www.amazon.'+RegionNewAdded+'/b/?node='+SalesRankHistoryArray[2],
    		data: {}
			}, function(responseNode) {
					var InnerhtmlObj = $(responseNode);
            		if(InnerhtmlObj.find("#merchandised-content").length)
            		{
            			GlobalCategory3=InnerhtmlObj.find("#merchandised-content").find("h1").html();
            		}
			})
		}
		}
SalesRankMade['all'].sort((a, b) => a['x'] - b['x']);
AmazonMade['all'].sort((a, b) => a['x'] - b['x']);
BuyboxMade['all'].sort((a, b) => a['x'] - b['x']);
NewMade['all'].sort((a, b) => a['x'] - b['x']);
UsedMade['all'].sort((a, b) => a['x'] - b['x']);
FbaMade['all'].sort((a, b) => a['x'] - b['x']);
SalesRankHistory['all'].sort((a, b) => a['x'] - b['x']);

SalesRankMade['year'].sort((a, b) => a['x'] - b['x']);
AmazonMade['year'].sort((a, b) => a['x'] - b['x']);
BuyboxMade['year'].sort((a, b) => a['x'] - b['x']);
NewMade['year'].sort((a, b) => a['x'] - b['x']);
UsedMade['year'].sort((a, b) => a['x'] - b['x']);
FbaMade['year'].sort((a, b) => a['x'] - b['x']);
SalesRankHistory['year'].sort((a, b) => a['x'] - b['x']);

SalesRankMade['months3'].sort((a, b) => a['x'] - b['x']);
AmazonMade['months3'].sort((a, b) => a['x'] - b['x']);
BuyboxMade['months3'].sort((a, b) => a['x'] - b['x']);
NewMade['months3'].sort((a, b) => a['x'] - b['x']);
UsedMade['months3'].sort((a, b) => a['x'] - b['x']);
FbaMade['months3'].sort((a, b) => a['x'] - b['x']);
SalesRankHistory['months3'].sort((a, b) => a['x'] - b['x']);

SalesRankMade['months'].sort((a, b) => a['x'] - b['x']);
AmazonMade['months'].sort((a, b) => a['x'] - b['x']);
BuyboxMade['months'].sort((a, b) => a['x'] - b['x']);
NewMade['months'].sort((a, b) => a['x'] - b['x']);
UsedMade['months'].sort((a, b) => a['x'] - b['x']);
FbaMade['months'].sort((a, b) => a['x'] - b['x']);
SalesRankHistory['months'].sort((a, b) => a['x'] - b['x']);

SalesRankMade['week'].sort((a, b) => a['x'] - b['x']);
AmazonMade['week'].sort((a, b) => a['x'] - b['x']);
BuyboxMade['week'].sort((a, b) => a['x'] - b['x']);
NewMade['week'].sort((a, b) => a['x'] - b['x']);
UsedMade['week'].sort((a, b) => a['x'] - b['x']);
FbaMade['week'].sort((a, b) => a['x'] - b['x']);
SalesRankHistory['week'].sort((a, b) => a['x'] - b['x']);

SalesRankMade['today'].sort((a, b) => a['x'] - b['x']);
AmazonMade['today'].sort((a, b) => a['x'] - b['x']);
BuyboxMade['today'].sort((a, b) => a['x'] - b['x']);
NewMade['today'].sort((a, b) => a['x'] - b['x']);
UsedMade['today'].sort((a, b) => a['x'] - b['x']);
FbaMade['today'].sort((a, b) => a['x'] - b['x']);
SalesRankHistory['today'].sort((a, b) => a['x'] - b['x']);

var preventDefaultSVGgetting = false,
  		orygFun = Highcharts.Chart.prototype.sanitizeSVG;
  Highcharts.Chart.prototype.sanitizeSVG = function(svg, b) {
    return preventDefaultSVGgetting ? svg : orygFun(svg, b)
  };
	Highcharts.setOptions({
		lang: {
			thousandsSep: ','
		}
	});
    				Highcharts.wrap(Highcharts.Tooltip.prototype, 'refresh', function (proceed) {
    var args = arguments;
    // console.log(args);
        var points = args[1];

        var point = points[0];
if(typeof point!="undefined")
{
        var chart = point.series.chart;
        //console.log(args);
    // Loop over all the series of the chart
    if(typeof chart!="undefined")
        {
    Highcharts.each(chart.series, function(series) {
        // This one already exist
        if (series == point.series || !series.visible)
        {
         	return;
         }
        
        var current,
            dist,
            distance = Number.MAX_VALUE;
        // Loop over all the points
        Highcharts.each(series.points, function(p) {
            // use the distance in X to determine the closest point
            //console.log("p---->",p);
            dist = Math.abs(p.x - point.x);
            if (dist < distance && p.series.name!="Buy Box" && p.series.name!="New, 3rd Party FBA") {
                distance = dist;
                current = p;
            }
            else if(dist < distance && (dist / (1000 * 3600 * 24))<=4)
            {
            	distance = dist;
                current = p;
            }
        });
        // Add the closest point to the array
        if(points.indexOf(current)==-1 && typeof current!="undefined")
        {
           points.push(current);   
        }     
    });  
    }
}
    proceed.apply(this, [].slice.call(args, 1));
});
    				//clearInterval(g);
    				
    				var highchartoption={

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x',

},
    subtitle: {
        text: ''
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Primary yAxis
        labels: {
            format: CurrencySign+'{value}',
            style: {
                color: '#000000'
            }
        },
        title: {
            text: 'Price',
            style: {
                color: '#000000'
            }
        },

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Sales Rank',
            style: {
                color: '#000000'
            }
        },
        labels: {
            formatter: function () {
                return  this.value/1000 + ' K';
            },
            style: {
                color: '#000000'
            }
        },
		 opposite: true
    }],
	 xAxis: {
	 minPadding: 0,
	 maxPadding: 0,
        crosshair: {
            width: 1,
            color: 'green',
            zIndex: 6,
        },
        gridLineWidth: 1,
        type:'datetime',
        minorTickInterval:100,
    	minTickInterval:100,
    },
plotOptions: {
        series: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 1
            },
             states: {
                inactive: {
                    opacity: 1
                },
                active: {
                    opacity: 1
                }
            }
        },
        flags: {
            tooltip: {
                xDateFormat: '%B %e, %Y'
            },
            accessibility: {
                pointDescriptionFormatter: function (point) {
                    var timeDesc = Highcharts.SeriesAccessibilityDescriber
                            .getPointA11yTimeDescription(point),
                        flagTitle = point.title,
                        flagText = point.text;

                    return timeDesc + ', ' + flagTitle + ': ' + flagText + '.';
                }
            }
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
         enabled: true
    },
    tooltip: {
            xDateFormat: '%B %Y',
            shared: true,
            split: true,
                },

    series: [{
        type: 'scatter',
        id: 'Buy-Box',
        name: 'Buy Box',
        yAxis: 0,
        zIndex: 6,
        turboThreshold: 500000,
        color: 'white',
        data: BuyboxMade['months3'],
        tooltip: {
        pointFormat: '<span> Buy Box '+ ': {point.y}</span>'
      },
        marker: {
            symbol: 'diamond',
            enabled: true,
            radius: 3,
            lineWidth: 1,
            lineColor: '#ff00b4',
        },
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'scatter',
        id: 'FBA',
        name: 'New, 3rd Party FBA',
		yAxis: 0,
		turboThreshold: 500000,
        data: FbaMade['months3'],
        color: 'white',
        zIndex: 5,
        step: true,
        tooltip: {
        pointFormat: '<span> New, 3rd Party FBA '+ ': {point.y}</span>'
      },
        marker: {
            symbol: 'triangle',
            enabled: true,
            radius: 3,
            lineWidth: 1,
            lineColor: '#ff5722',
        },
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: 'New-Price',
        name: 'New Price',
        color: '#88d',
        lineWidth: 1,
        turboThreshold: 500000,
        data: NewMade['months3'],
        yAxis: 0,
        zIndex: 4,
        step: true,
        tooltip: {
            xDateFormat: '%B %Y'
        }
    },
    {
        type: 'line',
        id: 'Used-Price',
        name: 'Used Price',
        color: '#444444',
        yAxis: 0,
        zIndex: 3,
        lineWidth: 1,
        step: true,
        data: UsedMade['months3'],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: 'Sales-Rank',
        name: 'Sales Rank',
        color: '#24A96B',
        lineWidth: 1,
        turboThreshold: 500000,
        step: true,
        data: SalesRankMade['months3'],
        zIndex: 2,
        yAxis: 1,
        tooltip: {
            xDateFormat: '%B %Y',
        }
        
    },
    {
        type: 'area',
        id: 'Amazon-Price',
        name: 'Amazon Price',
        color: '#FFB532',
        fillColor: '#FFE8D2',
        yAxis: 0,
        zIndex: 1,
        turboThreshold: 500000,
        step: true,
        data: AmazonMade['months3'],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

};

		myLineChartT = new Highcharts.chart('customGraphCanvas1', SalesRankHistoryFunction(SalesRankHistoryArray,SalesRankHistory,SalesRankHistory1,SalesRankHistory2,'months3',CurrencySign,SalesRankMade));
    	myLineChart = new Highcharts.chart('customGraphCanvas', highchartoption);
		//var ctx = $('#customGraphCanvas');
		//myLineChart = new Chart(ctx, config);
if(typeof settings.FreeTrialCheck!="undefined" && settings.FreeTrialCheck)
 {
		 setTimeout(function(){
		chartToImage();
		},2000);
}
else
{
	$("#CustomGraphTable").show();
}
		function chartToImage()
		{
		var svg;
    
  	preventDefaultSVGgetting = true;
    svg = myLineChart.getSVG({exporting: {
                    sourceWidth: myLineChart.chartWidth,
                    sourceHeight: myLineChart.chartHeight
                }});
    preventDefaultSVGgetting = false;
           $(".CustomGraphOuter").html("<div class='tooltip'><img src='data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(svg)))+"' title='interactive graph, buy box & fba data available on paid version only'><span class='tooltiptext1'>interactive graph, buy box & fba data available on paid version only</span></div>");
    }
		
		
		var g = setInterval(function() {
		 	var Actwidth = $('.CustomGraphOuter').width();
			var parentWidth = $('.CustomGraphOuter').offsetParent().width();
			var percentWidth = Math.ceil(100*Actwidth/parentWidth);
			percentWidth=percentWidth+6;
		 	if(PreviousGraphWidth!=percentWidth)
		 	{
		 		chrome.storage.sync.set({ "GraphWidth": percentWidth });
		 		PreviousGraphWidth=percentWidth;
		 	}
    	
    },5000);
		$(".loaderOuter").remove();
		$(".CustomGraphOuter").resizable();
			$(".legendRange").click(function()
			{
				$(".legendRange").removeClass("active");
				$(this).addClass("active");
				if($(this).attr('id')=="todayGraph")
				{
					myLineChart.destroy();
					myLineChart=null;
					myLineChartT.destroy();
					myLineChartT=null;
					myLineChartT = new Highcharts.chart('customGraphCanvas1', SalesRankHistoryFunction(SalesRankHistoryArray,SalesRankHistory,SalesRankHistory1,SalesRankHistory2,'today',CurrencySign,SalesRankMade));
					Highcharts.setOptions({
		lang: {
			thousandsSep: ','
		}
	});
					Highcharts.wrap(Highcharts.Tooltip.prototype, 'refresh', function (proceed) {
    var args = arguments;
    // console.log(args);
        var points = args[1];

        var point = points[0];
if(typeof point!="undefined")
{
        var chart = point.series.chart;
        //console.log(args);
    // Loop over all the series of the chart
    if(typeof chart!="undefined")
        {
    Highcharts.each(chart.series, function(series) {
        // This one already exist
        if (series == point.series || !series.visible) return;
        
        var current,
            dist,
            distance = Number.MAX_VALUE;
        // Loop over all the points
        Highcharts.each(series.points, function(p) {
            // use the distance in X to determine the closest point
            //console.log("p---->",p);
            dist = Math.abs(p.x - point.x);
            if (dist < distance && p.series.name!="Buy Box" && p.series.name!="New, 3rd Party FBA") {
                distance = dist;
                current = p;
            }
            else if(dist < distance && (dist / (1000 * 3600 * 24))<=4)
            {
            	distance = dist;
                current = p;
            }
        });
        // Add the closest point to the array
        if(points.indexOf(current)==-1 && typeof current!="undefined")
           points.push(current);        
    });  
    }
}
    proceed.apply(this, [].slice.call(args, 1));
});
								 /*myLineChart.series[0].update({
      					data: BuyboxMade['today']
    				}, false);
    				myLineChart.series[1].update({
      					data: FbaMade['today']
    				}, false);
					myLineChart.series[2].update({
      					data: NewMade['today']
    				}, false);
    				myLineChart.series[3].update({
      					data: UsedMade['today']
    				}, false);
     				myLineChart.series[4].update({
						data: SalesRankMade['today']
    				}, false);
   		 			myLineChart.series[5].update({
      					data: AmazonMade['today']
    				}, false);
    				myLineChart.redraw();*/
    				myLineChart = new Highcharts.chart('customGraphCanvas', {

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x'
},
    subtitle: {
        text: ''
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Primary yAxis
        labels: {
            format: CurrencySign+'{value}',
            style: {
                color: '#000000'
            }
        },
        title: {
            text: 'Price',
            style: {
                color: '#000000'
            }
        },

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Sales Rank',
            style: {
                color: '#000000'
            }
        },
        labels: {
            formatter: function () {
                return  this.value/1000 + ' K';
            },
            style: {
                color: '#000000'
            }
        },
		 opposite: true
    }],
	 xAxis: {
	 minPadding: 0,
	 maxPadding: 0,
        crosshair: {
            width: 1,
            color: 'green',
            zIndex: 6,
        },
        gridLineWidth: 1,
        type:'datetime',
        minorTickInterval:100,
    	minTickInterval:100,
    },
plotOptions: {
        series: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 1
            },
             states: {
                inactive: {
                    opacity: 1
                },
                active: {
                    opacity: 1
                }
            }
        },
        flags: {
            tooltip: {
                xDateFormat: '%B %e, %Y'
            },
            accessibility: {
                pointDescriptionFormatter: function (point) {
                    var timeDesc = Highcharts.SeriesAccessibilityDescriber
                            .getPointA11yTimeDescription(point),
                        flagTitle = point.title,
                        flagText = point.text;

                    return timeDesc + ', ' + flagTitle + ': ' + flagText + '.';
                }
            }
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
         enabled: true
    },
    tooltip: {
                    xDateFormat: '%d/%m/%Y',
            shared: true,
            split: true,
                },

    series: [{
        type: 'scatter',
        id: 'Buy-Box',
        name: 'Buy Box',
        yAxis: 0,
        zIndex: 6,
        turboThreshold: 500000,
        color: 'white',
        data: BuyboxMade['today'],
        tooltip: {
        pointFormat: '<span> Buy Box '+ ': {point.y}</span>'
      },
        marker: {
            symbol: 'diamond',
            enabled: true,
            radius: 5,
            lineWidth: 2,
            lineColor: '#ff00b4',
        },
         enableMouseTracking: true,
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'scatter',
        id: 'FBA',
        name: 'New, 3rd Party FBA',
		yAxis: 0,
		turboThreshold: 500000,
        data: FbaMade['today'],
        color: 'white',
        zIndex: 5,
        step: true,
        tooltip: {
        pointFormat: '<span> New, 3rd Party FBA '+ ': {point.y}</span>'
      },
        marker: {
            symbol: 'triangle',
            enabled: true,
            radius: 5,
            lineWidth: 2,
            lineColor: '#ff5722',
        },
        enableMouseTracking: true,
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: 'New-Price',
        name: 'New Price',
        color: '#88d',
        lineWidth: 1,
        turboThreshold: 500000,
        data: NewMade['today'],
        yAxis: 0,
        zIndex: 4,
        step: true,
        tooltip: {
            xDateFormat: '%B %Y'
        }
    },
    {
        type: 'line',
        id: 'Used-Price',
        name: 'Used Price',
        color: '#444444',
        yAxis: 0,
        zIndex: 3,
        lineWidth: 1,
        step: true,
        data: UsedMade['today'],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: 'Sales-Rank',
        name: 'Sales Rank',
        color: '#24A96B',
        lineWidth: 1,
        turboThreshold: 500000,
        step: true,
        data: SalesRankMade['today'],
        zIndex: 2,
        yAxis: 1,
        
    },
    {
        type: 'area',
        id: 'Amazon-Price',
        name: 'Amazon Price',
        color: '#FFB532',
        fillColor: '#FFE8D2',
        yAxis: 0,
        zIndex: 1,
        turboThreshold: 500000,
        step: true,
        data: AmazonMade['today'],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
				}
				else if($(this).attr('id')=="weekGraph")
				{
					myLineChart.destroy();
					myLineChart=null;
					myLineChartT.destroy();
					myLineChartT=null;
					myLineChartT = new Highcharts.chart('customGraphCanvas1', SalesRankHistoryFunction(SalesRankHistoryArray,SalesRankHistory,SalesRankHistory1,SalesRankHistory2,'week',CurrencySign,SalesRankMade));
					Highcharts.setOptions({
		lang: {
			thousandsSep: ','
		}
	});
					Highcharts.wrap(Highcharts.Tooltip.prototype, 'refresh', function (proceed) {
    var args = arguments;
    // console.log(args);
        var points = args[1];

        var point = points[0];
if(typeof point!="undefined")
{
        var chart = point.series.chart;
        //console.log(args);
    // Loop over all the series of the chart
    if(typeof chart!="undefined")
        {
    Highcharts.each(chart.series, function(series) {
        // This one already exist
        if (series == point.series || !series.visible) return;
        
        var current,
            dist,
            distance = Number.MAX_VALUE;
        // Loop over all the points
        Highcharts.each(series.points, function(p) {
            // use the distance in X to determine the closest point
            //console.log("p---->",p);
            dist = Math.abs(p.x - point.x);
            if (dist < distance && p.series.name!="Buy Box" && p.series.name!="New, 3rd Party FBA") {
                distance = dist;
                current = p;
            }
            else if(dist < distance && (dist / (1000 * 3600 * 24))<=4)
            {
            	distance = dist;
                current = p;
            }
        });
        // Add the closest point to the array
        if(points.indexOf(current)==-1 && typeof current!="undefined")
           points.push(current);        
    });  
    }
}
    proceed.apply(this, [].slice.call(args, 1));
});
					/*myLineChart.series[0].update({
      					data: BuyboxMade['week']
    				}, false);
    				myLineChart.series[1].update({
      					data: FbaMade['week']
    				}, false);
					myLineChart.series[2].update({
      					data: NewMade['week']
    				}, false);
    				myLineChart.series[3].update({
      					data: UsedMade['week']
    				}, false);
     				myLineChart.series[4].update({
						data: SalesRankMade['week']
    				}, false);
   		 			myLineChart.series[5].update({
      					data: AmazonMade['week']
    				}, false);
    				myLineChart.redraw();*/
    				myLineChart = new Highcharts.chart('customGraphCanvas', {

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x'
},
    subtitle: {
        text: ''
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Primary yAxis
        labels: {
            format: CurrencySign+'{value}',
            style: {
                color: '#000000'
            }
        },
        title: {
            text: 'Price',
            style: {
                color: '#000000'
            }
        },

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Sales Rank',
            style: {
                color: '#000000'
            }
        },
        labels: {
            formatter: function () {
                return  this.value/1000 + ' K';
            },
            style: {
                color: '#000000'
            }
        },
		 opposite: true
    }],
	 xAxis: {
	 minPadding: 0,
	 maxPadding: 0,
        crosshair: {
            width: 1,
            color: 'green',
            zIndex: 6,
        },
        gridLineWidth: 1,
        type:'datetime',
        minorTickInterval:100,
    	minTickInterval:100,
    },
plotOptions: {
        series: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 1
            },
             states: {
                inactive: {
                    opacity: 1
                },
                active: {
                    opacity: 1
                }
            }
        },
        flags: {
            tooltip: {
                xDateFormat: '%B %e, %Y'
            },
            accessibility: {
                pointDescriptionFormatter: function (point) {
                    var timeDesc = Highcharts.SeriesAccessibilityDescriber
                            .getPointA11yTimeDescription(point),
                        flagTitle = point.title,
                        flagText = point.text;

                    return timeDesc + ', ' + flagTitle + ': ' + flagText + '.';
                }
            }
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
         enabled: true
    },
    tooltip: {
                    xDateFormat: '%d/%m/%Y',
            shared: true,
            split: true,
                },

    series: [{
        type: 'scatter',
        id: 'Buy-Box',
        name: 'Buy Box',
        yAxis: 0,
        zIndex: 6,
        turboThreshold: 500000,
        color: 'white',
        data: BuyboxMade['week'],
        tooltip: {
        pointFormat: '<span> Buy Box '+ ': {point.y}</span>'
      },
        marker: {
            symbol: 'diamond',
            enabled: true,
            radius: 5,
            lineWidth: 2,
            lineColor: '#ff00b4',
        },
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'scatter',
        id: 'FBA',
        name: 'New, 3rd Party FBA',
		yAxis: 0,
		turboThreshold: 500000,
        data: FbaMade['week'],
        color: 'white',
        zIndex: 5,
        step: true,
        tooltip: {
        pointFormat: '<span> New, 3rd Party FBA '+ ': {point.y}</span>'
      },
        marker: {
            symbol: 'triangle',
            enabled: true,
            radius: 5,
            lineWidth: 2,
            lineColor: '#ff5722',
        },
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: 'New-Price',
        name: 'New Price',
        color: '#88d',
        lineWidth: 1,
        turboThreshold: 500000,
        data: NewMade['week'],
        yAxis: 0,
        zIndex: 4,
        step: true,
        tooltip: {
            xDateFormat: '%B %Y'
        }
    },
    {
        type: 'line',
        id: 'Used-Price',
        name: 'Used Price',
        color: '#444444',
        yAxis: 0,
        zIndex: 3,
        lineWidth: 1,
        step: true,
        data: UsedMade['week'],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: 'Sales-Rank',
        name: 'Sales Rank',
        color: '#24A96B',
        lineWidth: 1,
        turboThreshold: 500000,
        step: true,
        data: SalesRankMade['week'],
        zIndex: 2,
        yAxis: 1,
        
    },
    {
        type: 'area',
        id: 'Amazon-Price',
        name: 'Amazon Price',
        color: '#FFB532',
        fillColor: '#FFE8D2',
        yAxis: 0,
        zIndex: 1,
        turboThreshold: 500000,
        step: true,
        data: AmazonMade['week'],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
				}
				else if($(this).attr('id')=="monthGraph")
				{
					myLineChart.destroy();
					myLineChart=null;
					myLineChartT.destroy();
					myLineChartT=null;
					myLineChartT = new Highcharts.chart('customGraphCanvas1', SalesRankHistoryFunction(SalesRankHistoryArray,SalesRankHistory,SalesRankHistory1,SalesRankHistory2,'months',CurrencySign,SalesRankMade));
					Highcharts.setOptions({
		lang: {
			thousandsSep: ','
		}
	});
					Highcharts.wrap(Highcharts.Tooltip.prototype, 'refresh', function (proceed) {
    var args = arguments;
    // console.log(args);
        var points = args[1];

        var point = points[0];
if(typeof point!="undefined")
{
        var chart = point.series.chart;
        //console.log(args);
    // Loop over all the series of the chart
    if(typeof chart!="undefined")
        {
    Highcharts.each(chart.series, function(series) {
        // This one already exist
        if (series == point.series || !series.visible) return;
        
        var current,
            dist,
            distance = Number.MAX_VALUE;
        // Loop over all the points
        Highcharts.each(series.points, function(p) {
            // use the distance in X to determine the closest point
            //console.log("p---->",p);
            dist = Math.abs(p.x - point.x);
            if (dist < distance && p.series.name!="Buy Box" && p.series.name!="New, 3rd Party FBA") {
                distance = dist;
                current = p;
            }
            else if(dist < distance && (dist / (1000 * 3600 * 24))<=4)
            {
            	distance = dist;
                current = p;
            }
        });
        // Add the closest point to the array
        if(points.indexOf(current)==-1 && typeof current!="undefined")
           points.push(current);        
    });  
    }
}
    proceed.apply(this, [].slice.call(args, 1));
});
					/*myLineChart.series[0].update({
      					data: BuyboxMade['months']
    				}, false);
    				myLineChart.series[1].update({
      					data: FbaMade['months']
    				}, false);
					myLineChart.series[2].update({
      					data: NewMade['months']
    				}, false);
    				myLineChart.series[3].update({
      					data: UsedMade['months']
    				}, false);
     				myLineChart.series[4].update({
						data: SalesRankMade['months']
    				}, false);
   		 			myLineChart.series[5].update({
      					data: AmazonMade['months']
    				}, false);
    				myLineChart.redraw();*/
    				myLineChart = new Highcharts.chart('customGraphCanvas', {

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x'
},
    subtitle: {
        text: ''
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Primary yAxis
        labels: {
            format: CurrencySign+'{value}',
            style: {
                color: '#000000'
            }
        },
        title: {
            text: 'Price',
            style: {
                color: '#000000'
            }
        },

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Sales Rank',
            style: {
                color: '#000000'
            }
        },
        labels: {
            formatter: function () {
                return  this.value/1000 + ' K';
            },
            style: {
                color: '#000000'
            }
        },
		 opposite: true
    }],
	 xAxis: {
	 minPadding: 0,
	 maxPadding: 0,
        crosshair: {
            width: 1,
            color: 'green',
            zIndex: 6,
        },
        gridLineWidth: 1,
        type:'datetime',
        minorTickInterval:100,
    	minTickInterval:100,
    },
plotOptions: {
        series: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 1
            },
             states: {
                inactive: {
                    opacity: 1
                },
                active: {
                    opacity: 1
                }
            }
        },
        flags: {
            tooltip: {
                xDateFormat: '%B %e, %Y'
            },
            accessibility: {
                pointDescriptionFormatter: function (point) {
                    var timeDesc = Highcharts.SeriesAccessibilityDescriber
                            .getPointA11yTimeDescription(point),
                        flagTitle = point.title,
                        flagText = point.text;

                    return timeDesc + ', ' + flagTitle + ': ' + flagText + '.';
                }
            }
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
         enabled: true
    },
    tooltip: {
                    xDateFormat: '%d/%m/%Y',
            shared: true,
            split: true,
                },

    series: [{
        type: 'scatter',
        id: 'Buy-Box',
        name: 'Buy Box',
        yAxis: 0,
        zIndex: 6,
        turboThreshold: 500000,
        color: 'white',
        data: BuyboxMade['months'],
        tooltip: {
        pointFormat: '<span> Buy Box '+ ': {point.y}</span>'
      },
        marker: {
            symbol: 'diamond',
            enabled: true,
            radius: 5,
            lineWidth: 2,
            lineColor: '#ff00b4',
        },
         enableMouseTracking: true,
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'scatter',
        id: 'FBA',
        name: 'New, 3rd Party FBA',
		yAxis: 0,
		turboThreshold: 500000,
        data: FbaMade['months'],
        color: 'white',
        zIndex: 5,
        step: true,
        tooltip: {
        pointFormat: '<span> New, 3rd Party FBA '+ ': {point.y}</span>'
      },
        marker: {
            symbol: 'triangle',
            enabled: true,
            radius: 5,
            lineWidth: 2,
            lineColor: '#ff5722',
        },
        enableMouseTracking: true,
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: 'New-Price',
        name: 'New Price',
        color: '#88d',
        lineWidth: 1,
        turboThreshold: 500000,
        data: NewMade['months'],
        yAxis: 0,
        zIndex: 4,
        step: true,
        tooltip: {
            xDateFormat: '%B %Y'
        }
    },
    {
        type: 'line',
        id: 'Used-Price',
        name: 'Used Price',
        color: '#444444',
        yAxis: 0,
        zIndex: 3,
        lineWidth: 1,
        step: true,
        data: UsedMade['months'],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: 'Sales-Rank',
        name: 'Sales Rank',
        color: '#24A96B',
        lineWidth: 1,
        turboThreshold: 500000,
        step: true,
        data: SalesRankMade['months'],
        zIndex: 2,
        yAxis: 1,
        
    },
    {
        type: 'area',
        id: 'Amazon-Price',
        name: 'Amazon Price',
        color: '#FFB532',
        fillColor: '#FFE8D2',
        yAxis: 0,
        zIndex: 1,
        turboThreshold: 500000,
        step: true,
        data: AmazonMade['months'],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
				}
				else if($(this).attr('id')=="3monthGraph")
				{
					myLineChart.destroy();
					myLineChart=null;
					myLineChartT.destroy();
					myLineChartT=null;
					myLineChartT = new Highcharts.chart('customGraphCanvas1', SalesRankHistoryFunction(SalesRankHistoryArray,SalesRankHistory,SalesRankHistory1,SalesRankHistory2,'months3',CurrencySign,SalesRankMade));
					Highcharts.setOptions({
		lang: {
			thousandsSep: ','
		}
	});
					Highcharts.wrap(Highcharts.Tooltip.prototype, 'refresh', function (proceed) {
    var args = arguments;
    // console.log(args);
        var points = args[1];

        var point = points[0];
if(typeof point!="undefined")
{
        var chart = point.series.chart;
        //console.log(args);
    // Loop over all the series of the chart
    if(typeof chart!="undefined")
        {
    Highcharts.each(chart.series, function(series) {
        // This one already exist
        if (series == point.series || !series.visible) return;
        
        var current,
            dist,
            distance = Number.MAX_VALUE;
        // Loop over all the points
        Highcharts.each(series.points, function(p) {
            // use the distance in X to determine the closest point
            //console.log("p---->",p);
            dist = Math.abs(p.x - point.x);
            if (dist < distance && p.series.name!="Buy Box" && p.series.name!="New, 3rd Party FBA") {
                distance = dist;
                current = p;
            }
            else if(dist < distance && (dist / (1000 * 3600 * 24))<=4)
            {
            	distance = dist;
                current = p;
            }
        });
        // Add the closest point to the array
        if(points.indexOf(current)==-1 && typeof current!="undefined")
           points.push(current);        
    });  
    }
}
    proceed.apply(this, [].slice.call(args, 1));
});
					/*myLineChart.series[0].update({
      					data: BuyboxMade['months3']
    				}, false);
    				myLineChart.series[1].update({
      					data: FbaMade['months3']
    				}, false);
					myLineChart.series[2].update({
      					data: NewMade['months3']
    				}, false);
    				myLineChart.series[3].update({
      					data: UsedMade['months3']
    				}, false);
     				myLineChart.series[4].update({
						data: SalesRankMade['months3']
    				}, false);
   		 			myLineChart.series[5].update({
      					data: AmazonMade['months3']
    				}, false);
    				myLineChart.redraw();*/
    				myLineChart = new Highcharts.chart('customGraphCanvas', {

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x'
},
    subtitle: {
        text: ''
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Primary yAxis
        labels: {
            format: CurrencySign+'{value}',
            style: {
                color: '#000000'
            }
        },
        title: {
            text: 'Price',
            style: {
                color: '#000000'
            }
        },

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Sales Rank',
            style: {
                color: '#000000'
            }
        },
        labels: {
            formatter: function () {
                return  this.value/1000 + ' K';
            },
            style: {
                color: '#000000'
            }
        },
		 opposite: true
    }],
	 xAxis: {
	 minPadding: 0,
	 maxPadding: 0,
        crosshair: {
            width: 1,
            color: 'green',
            zIndex: 6,
        },
        gridLineWidth: 1,
        type:'datetime',
        minorTickInterval:100,
    	minTickInterval:100,
    },
plotOptions: {
        series: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 1
            },
             states: {
                inactive: {
                    opacity: 1
                },
                active: {
                    opacity: 1
                }
            }
        },
        flags: {
            tooltip: {
                xDateFormat: '%B %e, %Y'
            },
            accessibility: {
                pointDescriptionFormatter: function (point) {
                    var timeDesc = Highcharts.SeriesAccessibilityDescriber
                            .getPointA11yTimeDescription(point),
                        flagTitle = point.title,
                        flagText = point.text;

                    return timeDesc + ', ' + flagTitle + ': ' + flagText + '.';
                }
            }
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
         enabled: true
    },
    tooltip: {
                    xDateFormat: '%d/%m/%Y',
            shared: true,
            split: true,
                },

    series: [{
        type: 'scatter',
        id: 'Buy-Box',
        name: 'Buy Box',
        yAxis: 0,
        zIndex: 6,
        turboThreshold: 500000,
        color: 'white',
        data: BuyboxMade['months3'],
        tooltip: {
        pointFormat: '<span> Buy Box '+ ': {point.y}</span>'
      },
        marker: {
            symbol: 'diamond',
            enabled: true,
            radius: 3,
            lineWidth: 1,
            lineColor: '#ff00b4',
        },
         enableMouseTracking: true,
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'scatter',
        id: 'FBA',
        name: 'New, 3rd Party FBA',
		yAxis: 0,
		turboThreshold: 500000,
        data: FbaMade['months3'],
        color: 'white',
        zIndex: 5,
        step: true,
        tooltip: {
        pointFormat: '<span> New, 3rd Party FBA '+ ': {point.y}</span>'
      },
        marker: {
            symbol: 'triangle',
            enabled: true,
            radius: 3,
            lineWidth: 1,
            lineColor: '#ff5722',
        },
        enableMouseTracking: true,
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: 'New-Price',
        name: 'New Price',
        color: '#88d',
        lineWidth: 1,
        turboThreshold: 500000,
        data: NewMade['months3'],
        yAxis: 0,
        zIndex: 4,
        step: true,
        tooltip: {
            xDateFormat: '%B %Y'
        }
    },
    {
        type: 'line',
        id: 'Used-Price',
        name: 'Used Price',
        color: '#444444',
        yAxis: 0,
        zIndex: 3,
        lineWidth: 1,
        step: true,
        data: UsedMade['months3'],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: 'Sales-Rank',
        name: 'Sales Rank',
        color: '#24A96B',
        lineWidth: 1,
        turboThreshold: 500000,
        step: true,
        data: SalesRankMade['months3'],
        zIndex: 2,
        yAxis: 1,
        
    },
    {
        type: 'area',
        id: 'Amazon-Price',
        name: 'Amazon Price',
        color: '#FFB532',
        fillColor: '#FFE8D2',
        yAxis: 0,
        zIndex: 1,
        turboThreshold: 500000,
        step: true,
        data: AmazonMade['months3'],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
				}
				else if($(this).attr('id')=="yearGraph")
				{
					myLineChart.destroy();
					myLineChart=null;
					myLineChartT.destroy();
					myLineChartT=null;
					myLineChartT = new Highcharts.chart('customGraphCanvas1', SalesRankHistoryFunction(SalesRankHistoryArray,SalesRankHistory,SalesRankHistory1,SalesRankHistory2,'year',CurrencySign,SalesRankMade));
					Highcharts.setOptions({
		lang: {
			thousandsSep: ','
		}
	});
					Highcharts.wrap(Highcharts.Tooltip.prototype, 'refresh', function (proceed) {
    var args = arguments;
    // console.log(args);
        var points = args[1];

        var point = points[0];
if(typeof point!="undefined")
{
        var chart = point.series.chart;
        //console.log(args);
    // Loop over all the series of the chart
    if(typeof chart!="undefined")
        {
    Highcharts.each(chart.series, function(series) {
        // This one already exist
        if (series == point.series || !series.visible) return;
        
        var current,
            dist,
            distance = Number.MAX_VALUE;
        // Loop over all the points
        Highcharts.each(series.points, function(p) {
            // use the distance in X to determine the closest point
            //console.log("p---->",p);
            dist = Math.abs(p.x - point.x);
            if (dist < distance && p.series.name!="Buy Box" && p.series.name!="New, 3rd Party FBA") {
                distance = dist;
                current = p;
            }
            else if(dist < distance && (dist / (1000 * 3600 * 24))<=4)
            {
            	distance = dist;
                current = p;
            }
        });
        // Add the closest point to the array
        if(points.indexOf(current)==-1 && typeof current!="undefined")
           points.push(current);        
    });  
    }
}
    proceed.apply(this, [].slice.call(args, 1));
});

					/*myLineChart.series[0].update({
      					data: BuyboxMade['year']
    				}, false);
    				myLineChart.series[1].update({
      					data: FbaMade['year']
    				}, false);
					myLineChart.series[2].update({
      					data: NewMade['year']
    				}, false);
    				myLineChart.series[3].update({
      					data: UsedMade['year']
    				}, false);
     				myLineChart.series[4].update({
						data: SalesRankMade['year']
    				}, false);
   		 			myLineChart.series[5].update({
      					data: AmazonMade['year']
    				}, false);
    				myLineChart.redraw();*/
    				myLineChart = new Highcharts.chart('customGraphCanvas', {

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x'
},
    subtitle: {
        text: ''
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Primary yAxis
        labels: {
            format: CurrencySign+'{value}',
            style: {
                color: '#000000'
            }
        },
        title: {
            text: 'Price',
            style: {
                color: '#000000'
            }
        },

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Sales Rank',
            style: {
                color: '#000000'
            }
        },
        labels: {
            formatter: function () {
                return  this.value/1000 + ' K';
            },
            style: {
                color: '#000000'
            }
        },
		 opposite: true
    }],
	 xAxis: {
	 minPadding: 0,
	 maxPadding: 0,
        crosshair: {
            width: 1,
            color: 'green',
            zIndex: 6,
        },
        gridLineWidth: 1,
        type:'datetime',
        minorTickInterval:100,
    	minTickInterval:100,
    },
plotOptions: {
        series: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 1
            },
             states: {
                inactive: {
                    opacity: 1
                },
                active: {
                    opacity: 1
                }
            }
        },
        flags: {
            tooltip: {
                xDateFormat: '%B %e, %Y'
            },
            accessibility: {
                pointDescriptionFormatter: function (point) {
                    var timeDesc = Highcharts.SeriesAccessibilityDescriber
                            .getPointA11yTimeDescription(point),
                        flagTitle = point.title,
                        flagText = point.text;

                    return timeDesc + ', ' + flagTitle + ': ' + flagText + '.';
                }
            }
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
         enabled: true
    },
    tooltip: {
                    xDateFormat: '%d/%m/%Y',
            shared: true,
            split: true,
                },

    series: [{
        type: 'scatter',
        id: 'Buy-Box',
        name: 'Buy Box',
        yAxis: 0,
        zIndex: 6,
        turboThreshold: 500000,
        color: 'white',
        data: BuyboxMade['year'],
        tooltip: {
        pointFormat: '<span> Buy Box '+ ': {point.y}</span>'
      },
        marker: {
            symbol: 'diamond',
            enabled: true,
            radius: 3,
            lineWidth: 1,
            lineColor: '#ff00b4',
        },
         enableMouseTracking: true,
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'scatter',
        id: 'FBA',
        name: 'New, 3rd Party FBA',
		yAxis: 0,
		turboThreshold: 500000,
        data: FbaMade['year'],
        color: 'white',
        zIndex: 5,
        step: true,
        tooltip: {
        pointFormat: '<span> New, 3rd Party FBA '+ ': {point.y}</span>'
      },
        marker: {
            symbol: 'triangle',
            enabled: true,
            radius: 3,
            lineWidth: 1,
            lineColor: '#ff5722',
        },
        enableMouseTracking: true,
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: 'New-Price',
        name: 'New Price',
        color: '#88d',
        lineWidth: 1,
        turboThreshold: 500000,
        data: NewMade['year'],
        yAxis: 0,
        zIndex: 4,
        step: true,
        tooltip: {
            xDateFormat: '%B %Y'
        }
    },
    {
        type: 'line',
        id: 'Used-Price',
        name: 'Used Price',
        color: '#444444',
        yAxis: 0,
        zIndex: 3,
        lineWidth: 1,
        step: true,
        data: UsedMade['year'],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: 'Sales-Rank',
        name: 'Sales Rank',
        color: '#24A96B',
        lineWidth: 1,
        turboThreshold: 500000,
        step: true,
        data: SalesRankMade['year'],
        zIndex: 2,
        yAxis: 1,
        
    },
    {
        type: 'area',
        id: 'Amazon-Price',
        name: 'Amazon Price',
        color: '#FFB532',
        fillColor: '#FFE8D2',
        yAxis: 0,
        zIndex: 1,
        turboThreshold: 500000,
        step: true,
        data: AmazonMade['year'],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
				}
				else if($(this).attr('id')=="AllGraph")
				{
					myLineChart.destroy();
					myLineChart=null;
					myLineChartT.destroy();
					myLineChartT=null;
					myLineChartT = new Highcharts.chart('customGraphCanvas1', SalesRankHistoryFunction(SalesRankHistoryArray,SalesRankHistory,SalesRankHistory1,SalesRankHistory2,'all',CurrencySign,SalesRankMade));
					Highcharts.setOptions({
		lang: {
			thousandsSep: ','
		}
	});
					Highcharts.wrap(Highcharts.Tooltip.prototype, 'refresh', function (proceed) {
    var args = arguments;
    // console.log(args);
        var points = args[1];

        var point = points[0];
if(typeof point!="undefined")
{
        var chart = point.series.chart;
        //console.log(args);
    // Loop over all the series of the chart
    if(typeof chart!="undefined")
        {
    Highcharts.each(chart.series, function(series) {
        // This one already exist
        if (series == point.series || !series.visible) return;
        
        var current,
            dist,
            distance = series.closestPointRange;
        // Loop over all the points
        Highcharts.each(series.points, function(p) {
            // use the distance in X to determine the closest point
            //console.log("p---->",p);
            dist = Math.abs(p.x - point.x);
            if (dist < distance && p.series.name!="Buy Box" && p.series.name!="New, 3rd Party FBA") {
                distance = dist;
                current = p;
            }
            else if(dist < distance && (dist / (1000 * 3600 * 24))<=4)
            {
            	distance = dist;
                current = p;
            }
        });
        // Add the closest point to the array
        if(points.indexOf(current)==-1 && typeof current!="undefined")
           points.push(current);        
    });  
    }
}
    proceed.apply(this, [].slice.call(args, 1));
});
					/*myLineChart.series[0].update({
      					data: BuyboxMade['all']
    				}, false);
    				myLineChart.series[1].update({
      					data: FbaMade['all']
    				}, false);
					myLineChart.series[2].update({
      					data: NewMade['all']
    				}, false);
    				myLineChart.series[3].update({
      					data: UsedMade['all']
    				}, false);
     				myLineChart.series[4].update({
						data: SalesRankMade['all']
    				}, false);
   		 			myLineChart.series[5].update({
      					data: AmazonMade['all']
    				}, false);
    				myLineChart.redraw();*/
    				myLineChart = new Highcharts.chart('customGraphCanvas', {

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x'
},
    subtitle: {
        text: ''
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Primary yAxis
        labels: {
            format: CurrencySign+'{value}',
            style: {
                color: '#000000'
            }
        },
        title: {
            text: 'Price',
            style: {
                color: '#000000'
            }
        },

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Sales Rank',
            style: {
                color: '#000000'
            }
        },
        labels: {
            formatter: function () {
                return  this.value/1000 + ' K';
            },
            style: {
                color: '#000000'
            }
        },
		 opposite: true
    }],
	 xAxis: {
	 minPadding: 0,
	 maxPadding: 0,
        crosshair: {
            width: 1,
            color: 'green',
            zIndex: 6,
        },
        gridLineWidth: 1,
        type:'datetime',
        minorTickInterval:100,
    	minTickInterval:100,
    },
plotOptions: {
        series: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 1
            },
             states: {
                inactive: {
                    opacity: 1
                },
                active: {
                    opacity: 1
                }
            }
        },
        flags: {
            tooltip: {
                xDateFormat: '%B %e, %Y'
            },
            accessibility: {
                pointDescriptionFormatter: function (point) {
                    var timeDesc = Highcharts.SeriesAccessibilityDescriber
                            .getPointA11yTimeDescription(point),
                        flagTitle = point.title,
                        flagText = point.text;

                    return timeDesc + ', ' + flagTitle + ': ' + flagText + '.';
                }
            }
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
         enabled: true
    },
    tooltip: {
                    xDateFormat: '%d/%m/%Y',
            shared: true,
            split: true,
                },

    series: [{
        type: 'scatter',
        id: 'Buy-Box',
        name: 'Buy Box',
        yAxis: 0,
        zIndex: 6,
        turboThreshold: 500000,
        color: 'white',
        data: BuyboxMade['all'],
        tooltip: {
        pointFormat: '<span> Buy Box '+ ': {point.y}</span>'
      },
        marker: {
            symbol: 'diamond',
            enabled: true,
            radius: 3,
            lineWidth: 1,
            lineColor: '#ff00b4',
        },
         enableMouseTracking: true,
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'scatter',
        id: 'FBA',
        name: 'New, 3rd Party FBA',
		yAxis: 0,
		turboThreshold: 500000,
        data: FbaMade['all'],
        color: 'white',
        zIndex: 5,
        step: true,
        tooltip: {
        pointFormat: '<span> New, 3rd Party FBA '+ ': {point.y}</span>'
      },
        marker: {
            symbol: 'triangle',
            enabled: true,
            radius: 3,
            lineWidth: 1,
            lineColor: '#ff5722',
        },
        enableMouseTracking: true,
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: 'New-Price',
        name: 'New Price',
        color: '#88d',
        lineWidth: 1,
        turboThreshold: 500000,
        data: NewMade['all'],
        yAxis: 0,
        zIndex: 4,
        step: true,
        tooltip: {
            xDateFormat: '%B %Y'
        }
    },
    {
        type: 'line',
        id: 'Used-Price',
        name: 'Used Price',
        color: '#444444',
        yAxis: 0,
        zIndex: 3,
        lineWidth: 1,
        step: true,
        data: UsedMade['all'],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    },
    {
        type: 'line',
        id: 'Sales-Rank',
        name: 'Sales Rank',
        color: '#24A96B',
        lineWidth: 1,
        turboThreshold: 500000,
        step: true,
        data: SalesRankMade['all'],
        zIndex: 2,
        yAxis: 1,
        
    },
    {
        type: 'area',
        id: 'Amazon-Price',
        name: 'Amazon Price',
        color: '#FFB532',
        fillColor: '#FFE8D2',
        yAxis: 0,
        zIndex: 1,
        turboThreshold: 500000,
        step: true,
        data: AmazonMade['all'],
        tooltip: {
            xDateFormat: '%B %Y',
        }
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
				}
			});
			})
			chrome.runtime.sendMessage({
   			method: 'POST',
    		FunctionCall: 'Keepa',
    		dataType: 'json',
    		valicenseKey: valicenseKey,
    		url: 'https://admin.fbamultitool.com/keepa/keepaRankGraph.php?marketplace='+RegionNewAdded+'&asin='+ asinNewAdded+"&valicenseKey="+valicenseKey
			}, function(Response) {
				console.log("Response--------->",Response);
				if(Response.stats!="undefined")
				{
					var highchartoptionAmazon={

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x',

},
    subtitle: {
        text: 'Amazon Price Average'
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Primary yAxis
        labels: {
            format: CurrencySign+'{value}',
            style: {
                color: '#000000'
            }
        },
        title: {
            text: '',
            style: {
                color: '#000000'
            }
        },

    }],
	 xAxis: [{
        categories: ['7 DAYS', '30 DAYS', '90 DAYS', '180 DAYS', '365 DAYS', 'ALL TIMES'],
        crosshair: true
    }],

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
         enabled: false
    },
    plotOptions: {
            	
            
                column: {
                    pointPadding: 0,//add here
                },series: {
                	//pointPadding: 0,
					//groupPadding: 0, //this does not work
                    animation: {
                        complete: function() {
                           
                        }
                    }}},

    series: [{
        type: 'column',
        id: 'Amazon',
        name: 'Amazon',
        yAxis: 0,
        zIndex: 6,
        turboThreshold: 500000,
        color: '#18c187',
        data: [GetBarGraph(Response,"current",0),GetBarGraph(Response,"avg30",0),GetBarGraph(Response,"avg90",0),GetBarGraph(Response,"avg180",0),GetBarGraph(Response,"avg365",0),GetBarGraph(Response,"avg",0)],
        tooltip: {
        pointFormat: '<span> Amazon '+ ': {point.y}</span>'
      },
      dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return CurrencySign + Highcharts.numberFormat(this.y, 0);
                    }
                }
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

};
var highchartoptionNew={

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x',

},
    subtitle: {
        text: 'New Price Average'
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Primary yAxis
        labels: {
            format: CurrencySign+'{value}',
            style: {
                color: '#000000'
            }
        },
        title: {
            text: '',
            style: {
                color: '#000000'
            }
        },

    }],
	 xAxis: [{
        categories: ['7 DAYS', '30 DAYS', '90 DAYS', '180 DAYS', '365 DAYS', 'ALL TIMES'],
        crosshair: true
    }],

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
         enabled: false
    },
    plotOptions: {
            	
            
                column: {
                    pointPadding: 0,//add here
                },series: {
                	//pointPadding: 0,
					//groupPadding: 0, //this does not work
                    animation: {
                        complete: function() {
                           
                        }
                    }}},

    series: [{
        type: 'column',
        id: 'New',
        name: 'New',
        yAxis: 0,
        zIndex: 6,
        turboThreshold: 500000,
        color: '#18c187',
        data: [GetBarGraph(Response,"current",1),GetBarGraph(Response,"avg30",1),GetBarGraph(Response,"avg90",1),GetBarGraph(Response,"avg180",1),GetBarGraph(Response,"avg365",1),GetBarGraph(Response,"avg",1)],
        tooltip: {
        pointFormat: '<span> NEW '+ ': {point.y}</span>'
      },
      dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return CurrencySign + Highcharts.numberFormat(this.y, 0);
                    }
                }
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

};
var highchartoptionFba={

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x',

},
    subtitle: {
        text: 'FBA Price Average'
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Primary yAxis
        labels: {
            format: CurrencySign+'{value}',
            style: {
                color: '#000000'
            }
        },
        title: {
            text: '',
            style: {
                color: '#000000'
            }
        },

    }],
	 xAxis: [{
        categories: ['7 DAYS', '30 DAYS', '90 DAYS', '180 DAYS', '365 DAYS', 'ALL TIMES'],
        crosshair: true
    }],

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
         enabled: false
    },
    plotOptions: {
            	
            
                column: {
                    pointPadding: 0,//add here
                },series: {
                	//pointPadding: 0,
					//groupPadding: 0, //this does not work
                    animation: {
                        complete: function() {
                           
                        }
                    }}},

    series: [{
        type: 'column',
        id: 'FBAAve',
        name: 'FBA',
        yAxis: 0,
        zIndex: 6,
        turboThreshold: 500000,
        color: '#18c187',
        data: [GetBarGraph(Response,"current",10),GetBarGraph(Response,"avg30",10),GetBarGraph(Response,"avg90",0),GetBarGraph(Response,"avg180",10),GetBarGraph(Response,"avg365",10),GetBarGraph(Response,"avg",10)],
        tooltip: {
        pointFormat: '<span> FBA '+ ': {point.y}</span>'
      },
      dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return CurrencySign + Highcharts.numberFormat(this.y, 0);
                    }
                }
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

};
var highchartoptionBuybox={

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x',

},
    subtitle: {
        text: 'Buy Box Price Average'
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Primary yAxis
        labels: {
            format: CurrencySign+'{value}',
            style: {
                color: '#000000'
            }
        },
        title: {
            text: '',
            style: {
                color: '#000000'
            }
        },

    }],
	 xAxis: [{
        categories: ['7 DAYS', '30 DAYS', '90 DAYS', '180 DAYS', '365 DAYS', 'ALL TIMES'],
        crosshair: true
    }],

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
         enabled: false
    },
    plotOptions: {
            	
            
                column: {
                    pointPadding: 0,//add here
                },series: {
                	//pointPadding: 0,
					//groupPadding: 0, //this does not work
                    animation: {
                        complete: function() {
                           
                        }
                    }}},

    series: [{
        type: 'column',
        id: 'Buy-box',
        name: 'Buy Box',
        yAxis: 0,
        zIndex: 6,
        turboThreshold: 500000,
        color: '#18c187',
        data: [GetBarGraph(Response,"current",18),GetBarGraph(Response,"avg30",18),GetBarGraph(Response,"avg90",18),GetBarGraph(Response,"avg180",18),GetBarGraph(Response,"avg365",18),GetBarGraph(Response,"avg",18)],
        tooltip: {
        pointFormat: '<span> Buy Box '+ ': {point.y}</span>'
      },
      dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return CurrencySign + Highcharts.numberFormat(this.y, 0);
                    }
                }
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

};
var highchartoptionBSR={

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x',

},
    subtitle: {
        text: 'BSR # Average'
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Primary yAxis
        labels: {
            format: '#{value}',
            style: {
                color: '#000000'
            }
        },
        title: {
            text: '',
            style: {
                color: '#000000'
            }
        },
        

    }],
	 xAxis: [{
        categories: ['7 DAYS', '30 DAYS', '90 DAYS', '180 DAYS', '365 DAYS', 'ALL TIMES'],
        crosshair: true
    }],

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
         enabled: false
    },
    plotOptions: {
            	
            
                column: {
                    pointPadding: 0,//add here
                },series: {
                	//pointPadding: 0,
					//groupPadding: 0, //this does not work
                    animation: {
                        complete: function() {
                           
                        }
                    }}},

    series: [{
        type: 'column',
        id: 'BSR',
        name: 'BSR',
        yAxis: 0,
        zIndex: 6,
        turboThreshold: 500000,
        color: '#18c187',
        data: [GetBarGraph(Response,"current",3,false),GetBarGraph(Response,"avg30",3,false),GetBarGraph(Response,"avg90",3,false),GetBarGraph(Response,"avg180",3,false),GetBarGraph(Response,"avg365",3,false),GetBarGraph(Response,"avg",3,false)],
        tooltip: {
        pointFormat: '<span> #BSR '+ ': {point.y}</span>'
      },
      dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return '#' + Highcharts.numberFormat(this.y, 0);
                    }
                }
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

};
var highchartoptionCNT={

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x',

},
    subtitle: {
        text: 'New Offer Count Average'
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: '#000000'
            }
        },
        title: {
            text: '',
            style: {
                color: '#000000'
            }
        },

    }],
	 xAxis: [{
        categories: ['7 DAYS', '30 DAYS', '90 DAYS', '180 DAYS', '365 DAYS', 'ALL TIMES'],
        crosshair: true
    }],

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
         enabled: false
    },
    plotOptions: {
            	
            
                column: {
                    pointPadding: 0,//add here
                },series: {
                	//pointPadding: 0,
					//groupPadding: 0, //this does not work
                    animation: {
                        complete: function() {
                           
                        }
                    }}},

    series: [{
        type: 'column',
        id: 'Noffers',
        name: 'New Offers',
        yAxis: 0,
        zIndex: 6,
        turboThreshold: 500000,
        color: '#18c187',
        data: [GetBarGraph(Response,"current",11,false),GetBarGraph(Response,"avg30",11,false),GetBarGraph(Response,"avg90",11,false),GetBarGraph(Response,"avg180",11,false),GetBarGraph(Response,"avg365",11,false),GetBarGraph(Response,"avg",11,false)],
        tooltip: {
        pointFormat: '<span> New Offers '+ ': {point.y}</span>'
      },
      dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return  Highcharts.numberFormat(this.y, 0);
                    }
                }
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

};
			//customGraphCanvas2
			myLineChartAmazon = new Highcharts.chart('customGraphCanvas2', highchartoptionAmazon);
			myLineChartNew = new Highcharts.chart('customGraphCanvas3', highchartoptionNew);
			myLineChartFBA = new Highcharts.chart('customGraphCanvas4', highchartoptionFba);
			myLineChartBuybox = new Highcharts.chart('customGraphCanvas5', highchartoptionBuybox);
			myLineChartBSR = new Highcharts.chart('customGraphCanvas6', highchartoptionBSR);
			myLineChartCNT = new Highcharts.chart('customGraphCanvas7', highchartoptionCNT);
				}
			});
  }
  	if(typeof settings.BuyBoxGraph!='undefined' && settings.licenseKey!="undefined" && settings.licenseKey!='null' && settings.BuyBoxGraph && typeof asinNewAdded!="undefined" && asinNewAdded!=null)
	{
		if(!GraphSectionAdded)
		{
			if(typeof $('#bundleV2_feature_div').html()!="undefined")
     		{
     			$('#bundleV2_feature_div').before(graphhtml);
     		}
    		else if(typeof $('#ppd').html()!="undefined")
     		{
     			$('#ppd').after(graphhtml);
     		}
     		else if(typeof $('#centerCol').html()!="undefined")
     		{
     			$('#centerCol').after(graphhtml);
     		}
     		$(".loaderOuter").remove();
     		$("#customGraphCanvas").remove();
     		$("#customGraphCanvas1").remove();
     		$("#customGraphCanvas2").remove();
     		$("#customGraphCanvas3").remove();
     		$("#customGraphCanvas4").remove();
     		$("#customGraphCanvas5").remove();
     		$("#customGraphCanvas6").remove();
     		$("#customGraphCanvas7").remove();
     		$(".tabledv").remove();
		}
		var HTMLTEXTHEAD="<table class='BuyBoxtable'><thead><tr><th><span class='BuyBoxTableToolTip'><i class='fa fa-question-circle' aria-hidden='true'></i><span class='BuyBoxTableToolTiptext'>It's not possible to track every buy box rotation but this will give you a great indication of the buy box being shared</span></span></th><th colspan='2' style='text-align: center;font-size: 24px;padding: 18px 0px 18px 0px;'>Buy Box Rotation History</th></tr><tr><th>Seller Name</th><th>Buy Box Time</th><th>Buy Box Hold Time</th></tr></thead><tbody>";
		var HTMLTEXTEND="</tbody></table>";
		var HTMLTEXTCENTER="";
		valicenseKey=settings.licenseKey;
		chrome.runtime.sendMessage({
   			method: 'POST',
    		FunctionCall: 'Keepa',
    		dataType: 'json',
    		valicenseKey: valicenseKey,
    		url: 'https://admin.fbamultitool.com/keepa/keepaBuyBox.php?marketplace='+RegionNewAdded+'&asin='+ asinNewAdded+"&valicenseKey="+valicenseKey
			}, function(Response) {
				if(Response.data!="undefined")
				{
					if(Response.data.buyBoxSellerIdHistory!="undefined")
					{
						$.when(
						$.each(Response.data.buyBoxSellerIdHistory, function(indexHHS, valueHHS)
						{
							if(indexHHS.indexOf("_")!=-1)
							{
								var indexHHS2=indexHHS.substring(0, indexHHS.indexOf("_"));
							}
							else
							{
								var indexHHS2=indexHHS;
							}
							if(indexHHS.includes("-1") || indexHHS.includes("-2"))
							{
								HTMLTEXTCENTER+="<tr><td>Out Of Stock</td><td>"+valueHHS+"</td><td>"+Response.data['BuyBoxHold'][indexHHS]+"</td></tr>";
							}
							else
							{
								if(typeof Response.data['sellerNameList'][indexHHS2]!="undefined")
								{
									HTMLTEXTCENTER+="<tr><td>"+Response.data['sellerNameList'][indexHHS2]+"</td><td>"+valueHHS+"</td><td>"+Response.data['BuyBoxHold'][indexHHS]+"</td></tr>";
								}
								else
								{
									HTMLTEXTCENTER+="<tr><td>"+indexHHS2+"</td><td>"+valueHHS+"</td><td>"+Response.data['BuyBoxHold'][indexHHS]+"</td></tr>";
								}
							}
						})).then( function(){ $("#customGraphCanvas8").html(HTMLTEXTHEAD+HTMLTEXTCENTER+HTMLTEXTEND);$('[data-toggle="tooltip"]').tooltip(); });
					}
				}
				/*var highchartoptionBuyBoxGraph={

    title: {
        text: ''
    },
    
	chart: {
    backgroundColor: 'transparent',
    plotBorderColor: '#9E9E9E',
    plotBorderWidth: 1,
    renderTo: 'container',
    zoomType: 'x',

},
    subtitle: {
        text: 'New Offer Count Average'
    },
    boost: {
        useGPUTranslations: true
    },

    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: '#000000'
            }
        },
        title: {
            text: '',
            style: {
                color: '#000000'
            }
        },

    }],
	 xAxis: {
	 minPadding: 0,
	 maxPadding: 0,
        crosshair: {
            width: 1,
            color: 'green',
            zIndex: 6,
        },
        gridLineWidth: 1,
        type:'datetime',
        minorTickInterval:100,
    	minTickInterval:100,
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
         enabled: false
    },
    plotOptions: {
            	
            
                column: {
                    pointPadding: 0,//add here
                },series: {
                	//pointPadding: 0,
					//groupPadding: 0, //this does not work
                    animation: {
                        complete: function() {
                           
                        }
                    }}},

    series: [{
        type: 'column',
        id: 'Noffers',
        name: 'New Offers',
        yAxis: 0,
        zIndex: 6,
        turboThreshold: 500000,
        color: '#18c187',
        data: [GetBarGraph(Response,"current",11,false),GetBarGraph(Response,"avg30",11,false),GetBarGraph(Response,"avg90",11,false),GetBarGraph(Response,"avg180",11,false),GetBarGraph(Response,"avg365",11,false),GetBarGraph(Response,"avg",11,false)],
        tooltip: {
        pointFormat: '<span> New Offers '+ ': {point.y}</span>'
      },
      dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return  Highcharts.numberFormat(this.y, 0);
                    }
                }
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
};*/
			})
	}
  })

chrome.storage.sync.get(["MWSTOKENUK","MWSSELLERIDUK","MWSTOKENUSA","MWSSELLERIDUSA","USATOKENSAVED"],function(Token){
	if(typeof Token.MWSTOKENUK!="undefined" && typeof Token.MWSSELLERIDUK!="undefined" && Token.MWSTOKENUK.trim()!="" && Token.MWSSELLERIDUK.trim()!="")
	{
		MWSTOKENUK=Token.MWSTOKENUK;
		MWSSELLERIDUK=Token.MWSSELLERIDUK;
	} 
	if(typeof Token.MWSTOKENUSA!="undefined" && typeof Token.MWSSELLERIDUSA!="undefined" && Token.MWSTOKENUSA.trim()!="" && Token.MWSSELLERIDUSA.trim()!="")
	{
		MWSTOKENUSA=Token.MWSTOKENUSA;
		MWSSELLERIDUSA=Token.MWSSELLERIDUSA;
	} 
})
chrome.storage.sync.get(["vaname","vaemail","licenseKey"],function(va){
if(typeof va.licenseKey !='undefined' && va.licenseKey!='null')
{
	valicenseKey=va.licenseKey;
}
	if(typeof va.vaname !='undefined' && va.vaname!='null')
    {
    	vaname=va.vaname;
    	vaemail=va.vaemail;
    	//checkoutinhtml='<span class="vacheckout vacheckshow" data-bind="click: vaCheckout">VA CHECK OUT</span><span class="vacheckin vacheckhide" data-bind="click: showValogin">VA CHECK IN</span>';
    	$('.vacheckin').hide();
		$('.vacheckout').show();
    	
    }
})
var windowactive=1;
$(window).focus(function() {
    windowactive=1;
});
$(window).blur(function() {
    windowactive=0;
});
$(document).ready(function(){

chrome.storage.sync.get( "startTimer", function(data){
startTimer=data.startTimer;
 });
	sizeofscreen = {
				width: Math.max(
					document.documentElement.clientWidth,
					document.body.scrollWidth,
					document.documentElement.offsetWidth
				),
				height: Math.max(
					document.documentElement.clientHeight,
					document.body.offsetHeight,
					document.documentElement.offsetHeight
				),
				reqType: 1
			};
if(typeof vaname!='undefined' && vaname!='')
{
    	$('.vacheckin').hide();
		$('.vacheckout').show();
		var optionsUrl = chrome.extension.getURL('html/popup.html');
		if (lasttime !== 0 && lasttime !== undefined) 
		{
        	var diff = getNow() - lasttime;
    	} 
    	else 
    	{
        	var diff = 0;
    	}
    	var hours = Math.floor(diff / (1000 * 60 * 60));
    	var minutes = Math.floor((diff - hours * 1000 * 60 * 60) / (1000 * 60));
    	var seconds = Math.floor((diff - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000);
		$("body").append('<div class="timer timerbest" id="timer-"><span class="hours">'+hours+'</span>:<span class="minutes">'+minutes+'</span>:<span class="seconds">'+seconds+'</span></div>');
		setAct('interval', window.setInterval(function () {
			chrome.storage.sync.get(["vaname","vaemail","licenseKey"],function(va){
				vaname=va.vaname;
    			vaemail=va.vaemail;
			});
   			if((typeof vaname!='undefined' && vaname!='') && windowactive==1)
   			{
            	updateTimer();
            }
        }, 1000));
chrome.extension.sendMessage({
				"msg": "setPageDetails",
				"size": sizeofscreen,
				"scrollBy": window.innerHeight,
				"originalParams": {
					"overflow": document.querySelector("body").style.overflow,
					"scrollTop": document.documentElement.scrollTop
				}
			}, function(response) {
				
			});
	var xtime = setInterval(function() {
	if((typeof vaname!='undefined' && vaname!='') && windowactive==1)
	{
		sizeofscreen.reqType=3;
		chrome.extension.sendMessage({
				"msg": "setPageDetails",
				"size": sizeofscreen,
				"scrollBy": window.innerHeight,
				"originalParams": {
					"overflow": document.querySelector("body").style.overflow,
					"scrollTop": document.documentElement.scrollTop
				}
			}, function(response) {
				
			});
}
	
	
	},180000);
}
	
});
if (localStorage.getItem('activeTimer') === undefined || localStorage.getItem('activeTimer') == "null" || localStorage.getItem('activeTimer') === null) {
        localStorage.setItem('activeTimer', 0);
        localStorage.setItem('timerCount', 1);
        localStorage.setObject('timers', {0:{}});
    }
    
    function isValidURL(url) {
    var RegExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    if (RegExp.test(url)) {
        return true;
    } else {
        return false;
    }
}
    function openURL() {
    //var url = document.getElementById("txturl").value.trim();
    var optionsUrl = chrome.extension.getURL('html/popup.html');
    if (optionsUrl) {
        var myWindow = window.open(optionsUrl, '_blank');
        //myWindow.focus();
    } else {
        alert("Please enter valid URL..!");
        return false;
    }
}
function NewsUpdateMark(userid,newsid,Divid)
{
	chrome.runtime.sendMessage({
            method: 'POST',
            dataType: 'json',
            url: 'https://admin.fbamultitool.com/appapi/index.php',
    	data: {
            valicenseKey: valicenseKey,
            userid: userid,
            newsid: newsid,
            FunctionCall: 'NewsFeedsMark'
        },'FunctionCall':'NewsFeedsMark' },
        function(NewsFeeds) {
            if(NewsFeeds.status=="success")
			{
                newsUpdateHtml=NewsFeeds.data;
                $("#"+Divid).removeClass("NewsUpdateMark");
                $("#"+Divid).addClass("NewsUpdateMark");
                $("#"+Divid).find(".NewsButtonAct").attr('disabled',true);
                if(NewsFeeds.newNews)
                {
                	$("#NewsUpdateIcon").attr("src",NewsRed);
                }
                else
                {
                	$("#NewsUpdateIcon").attr("src",NewsWarning);
                }

			}
        });
}
chrome.storage.sync.get(['ScraperApiKey'], function (KEY) {
     if(typeof KEY.ScraperApiKey!="undefined")
     {
     	ScraperApiKey=KEY.ScraperApiKey;
     }
     else
     {
     	 chrome.runtime.sendMessage({ data: {
          		dataType: 'json' 
        		},'FunctionCall':'ScraperApiKey' }, 
      function(OuterHtml) 
      {
      	if(OuterHtml.status=="success")
        	{	
        		ScraperApiKey=OuterHtml.key;
        	}
      })
     }
     })
	 chrome.storage.sync.get(['ScraperApiKey'], function (KEY) {
     if(typeof KEY.ScraperApiKey!="undefined")
     {
     	ScraperApiKey=KEY.ScraperApiKey;
     }
     else
     {
     	 chrome.runtime.sendMessage({ data: {
          		dataType: 'json' 
        		},'FunctionCall':'ScraperApiKey' }, 
      function(OuterHtml) 
      {
      	if(OuterHtml.status=="success")
        	{	
        		ScraperApiKey=OuterHtml.key;
        	}
      })
     }
     })
function createCustomAlertNewsUpdate(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.className = "modalContainerCustomAlert";
    mObj.id = "modalContainerCustomAlert";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "newsAlertbox";
   
    

    NewsMain = alertObj.appendChild(d.createElement("div"));
    NewsMain.className="NewsMain";
    NewsMain.id="NewsMain";
    NewsMainPad=NewsMain.appendChild(d.createElement("div"));
    NewsMainPad.className="NewsMainPad";
    NewsHeader=NewsMainPad.appendChild(d.createElement("div"));
    NewsHeader.className="NewsHeader";
    NewsHeaderTitle=NewsHeader.appendChild(d.createElement("div"));
    NewsHeaderTitle.className="NewsHeaderTitle";
    NewsHeaderTitle.innerHTML="FBAMultiTool - NewsFeed";
    NewsHeaderButton=NewsHeader.appendChild(d.createElement("div"));
    NewsHeaderButton.className="NewsHeaderButton";
    NewsHeaderButton.innerHTML='<a href="https://www.fbamultitool.com/contact-us" target="_blank" ><button type="button" class="NewsButtonAct">Contact Us</button></a>';
    NewsDesMain=NewsMainPad.appendChild(d.createElement("div"));
    NewsDesMain.className="NewsDesMain";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - NewsMain.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";
	NewsDesMain.innerHTML=newsUpdateHtml;
    btn = NewsMain.appendChild(d.createElement("button"));
    btn.id = "CustomAlertcloseBtn";
    btn.className="NewsButtonAct marginbutton";
    btn.appendChild(d.createTextNode("OK"));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }
    ko.applyBindings(self, document.getElementById('NewsMain'));
    alertObj.style.display = "block";

}
function createCustomAlertAws(txt) {
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
	h1.appendChild(d.createTextNode("Fbamultitool Add MWS!"));

	msg = alertObj.appendChild(d.createElement("p"));
	//msg.appendChild(d.createTextNode(txt));
	msg.innerHTML = "<br>"+txt;
	divc=alertObj.appendChild(d.createElement("div"));
	divc.className="buttonDiv";
	btn = divc.appendChild(d.createElement("button"));
	btn.id = "CustomAlertcloseBtn1";
	btn.appendChild(d.createTextNode("Cancel"));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert();chrome.storage.sync.set({ PopupShown: true }); return false; }
	btn2 = divc.appendChild(d.createElement("button"));
	btn2.id = "CustomAlertcloseBtn2";
	btn2.appendChild(d.createTextNode("Add"));
	btn2.href = "#";
	btn2.onclick = function() { removeCustomAlert();chrome.runtime.sendMessage({ 'name': 'options','tabid':'#tabs-6' });chrome.storage.sync.set({ PopupShown: true });return false; }
	alertObj.style.display = "block";
	
}

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
function createCustomAlertProductTrack(txt) {
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
	h1.appendChild(d.createTextNode("FBAMultiTool Product Tracking"));

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

function ungate(domain,asin)
{
	var URL="https://sellercentral.amazon."+domain+"/hz/approvalrequest?asin="+asin;
	chrome.runtime.sendMessage({ data: {
          		urlProductInfo: URL,
          		dataType: 'html' 
        		},'FunctionCall':'SellerCenterWeight' }, 
      			function(response) 
      			{
      				
      				var parser = new DOMParser();
      				var doc = parser.parseFromString(response, 'text/html');
      				if(typeof $("#myq-application-form-email-input",doc).val()!="undefined")
      				{
      					$(".ungateButton").html("Fail");
      				}
      				else if(typeof $("[name='appAction']",doc).val()!="undefined")
      				{
      					$(".ungateButton").html("Fail");
      					alert("Please Login To Seller Center");
      				}
      				else if(typeof $("#application_dashboard_table",doc).html()!="undefined")
      				{
      					$(".ungateButton").html("Fail");
      				}
      				else if(typeof $(".su-video-page-container",doc).html()!="undefined")
      				{
      					$(".ungateButton").html("Fail");
      				}
      				else if(typeof $("#myq-performance-check-heading-failure",doc).html()!="undefined")
      				{
      					$(".ungateButton").html("Fail");
      				}
      				else
      				{
      					$(".ungateButton").html("Success");
      				}
      			});
}
function titleCase(str) {
if(typeof str=="undefined" || str==null)
{
	return str;
}
else
{
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}
}

function numberWithCommas(nStr) {
  nStr += '';
 var x = nStr.split('.');
 var x1 = x[0];
 var x2 = x.length > 1 ? '.' + x[1] : '';
 var rgx = /(\d+)(\d{3})/;
 while (rgx.test(x1)) {
  x1 = x1.replace(rgx, '$1' + ',' + '$2');
 }
 return x1 + x2;
}
function getRandomToken() {
 function chr4(){
    return Math.random().toString(16).slice(-4);
  }
  return chr4() + chr4() +
    '-' + chr4() +
    '-' + chr4() +
    '-' + chr4() +
    '-' + chr4() + chr4() + chr4();
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "domain=*;path=*";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function SalesEstimatorSearchPage(ASIN,Region,PCATEGORY,BSR,caltype="basic")
{
	if(Region == "co.uk")
	{
		Region="uk";
	}
	else if(Region == "com")
	{
		Region="us";
	}
	BSR=BSR.replace(",","");
	var asinL=ASIN+"_"+Region;
	if(typeof _cache[asinL]=="undefined")
	{
      	chrome.runtime.sendMessage({
   			method: 'POST',
    		action: 'xhttp',
    		dataType: 'json',
    		url: 'https://admin.fbamultitool.com/salesestimator/indexnew.php',
    		data: {
          		asin: ASIN,
          		Region: Region,
          		PCATEGORY: PCATEGORY,
          		BSR: BSR,
          		caltype: caltype,
          		valicenseKey: valicenseKey
        		}
			}, function(response) {
			console.log("ASIN="+ASIN+"   Region="+Region+"   PCATEGORY="+PCATEGORY+"   BSR="+BSR );
				console.log("response-->",response);
					var asinL=ASIN+"_"+Region;
					var percentage=0;
					if(typeof response.response!="undefined" && response.error.code.trim()=='')
					{
  						if(response.response[0].sales_estimate == "<5")
  						{
  							response.response[0].sales_estimate="<5>";
  							percentage=10;
  						}
  						else if(response.response[0].sales_estimate.trim()!='')
  						{
  							var fullstrig=response.response[0].sales_estimate;
  							var res = fullstrig.split("-");
  							var starte,ende;
  							starte=res[0]/1000;
  							starte=starte.toFixed(0);
  							/*if(res[0]>=1000)
  							{
  								response.response[0].sales_estimate=starte +"K";
  							}
  							else
  							{
  								response.response[0].sales_estimate=res[0];
  							}*/
  							if(fullstrig.toLowerCase().indexOf('k')<=0)
  							{
  								if(typeof res[1] !='undefined')
  								{
  									if(res[1]>=5 && res[1]<10)
  									{
  										percentage=10;
  									}
  									else if(res[1]>=10 && res[1]<25)
  									{
  										percentage=15;
  									}
  									else if(res[1]>=25 && res[1]<50)
  									{
  										percentage=20;
  									}
  									else if(res[1]>=50 && res[1]<100)
  									{
  										percentage=25;
  									}
  									else if(res[1]>=100 && res[1]<200)
  									{
  										percentage=30;
  									}
  									else if(res[1]>=200 && res[1]<300)
  									{
  										percentage=35;
  									}
  									else if(res[1]>=300 && res[1]<400)
  									{
  										percentage=40;
  									}
  									else if(res[1]>=400 && res[1]<500)
  									{
  										percentage=50;
  									}
  									else if(res[1]>=500 && res[1]<700)
  									{
  										percentage=60;
  									}
  									else if(res[1]>=700 && res[1]<900)
  									{
  										percentage=70;
  									}
  									else if(res[1]>=900 && res[1]<1200)
  									{
  										percentage=80;
  									}
  									else if(res[1]>=1200 && res[1]<2000)
  									{
  										percentage=90;
  									}
  									else if(res[1]>=2000)
  									{
  										percentage=100;
  									}
  								}
  								if(res[0]>=1000)
  								{
  									starte=res[0]/1000;
  									starte=starte.toFixed(0);
  									response.response[0].sales_estimate=starte +"K";
  								}
  								if(typeof res[1] !='undefined' && res[1]>=1000)
  								{
  									if(res[0]<1000)
  									{

  										response.response[0].sales_estimate=res[0].trim();
  									}
  									ende=res[1]/1000;
  									ende=ende.toFixed(1);
  									response.response[0].sales_estimate=response.response[0].sales_estimate+"-"+ende+"K";
  								}
  							}
  							else
  							{
  								var bege=res[0].toLowerCase().replace('k','');
  								console.log(bege);
  								bege=bege.toFixed(0);
  								response.response[0].sales_estimate=bege +"K";
  								if(res[0]>=1000)
  								{
  									starte=res[0]/1000;
  									starte=starte.toFixed(0);
  									response.response[0].sales_estimate=starte +"K";
  								}
  								if(typeof res[1] !='undefined')
  								{
  									var laste=res[1].toLowerCase().replace('k','');
  									laste=laste.toFixed(1);
  									response.response[0].sales_estimate=response.response[0].sales_estimate+"-"+laste +"K";
  								}
  							}
  						}
  						else
  						{
  							response.response[0].sales_estimate=0-1;
  						}
  						_cache[asinL]=response.response[0].sales_estimate;
  						GlobalsalesRank=response.response[0].sales_estimate;
  						if(response.response[0].sales_estimate!="NotFound")
						{
							$('.salesestimatorfull').show();
  							$('.rwizard-title-panel').attr('style',"width:380px");
  							if(response.response[0].sales_estimate.length>=8)
  							{
  								$('.EstimatedSalesShow').attr('style',"font-size:11px !important;");
  							}
  							$('.EstimatedSalesShow').html(response.response[0].sales_estimate);
						}

					}
					else
					{
						_cache[asinL]="NotFound";
						GlobalsalesRank="NotFound";
					}

				});
			}
			else
			{
				GlobalsalesRank=_cache[asinL];
			}
}
function SalesEstimator(ASIN,Region,PCATEGORY,BSR,caltype="basic")
{
	console.log("====BSR======",BSR);
    chrome.runtime.sendMessage({
            method: 'POST',
            dataType: 'json',
            url: 'https://admin.fbamultitool.com/appapi/index.php',
    	data: {
            valicenseKey: valicenseKey,
            FunctionCall: 'NewsFeeds'
        },'FunctionCall':'NewsFeeds' },
        function(NewsFeeds) {
            if(NewsFeeds.status=="success")
			{
                newsUpdateHtml=NewsFeeds.data;
                if(NewsFeeds.newNews)
                {
                	$("#NewsUpdateIcon").attr("src",NewsRed);
                }
                else
                {
                	$("#NewsUpdateIcon").attr("src",NewsWarning);
                }

			}
        });
	if(Region == "co.uk")
	{
		Region="uk";
	}
	else if(Region == "com")
	{
		Region="us";
	}
	//BSR=BSR.replace(",","");
	
	BSR=BSR.toString().replace(/,/g,"");
	/*if(BSR<=0)
	{
		BSR=20000;
	}*/
	var asinL=ASIN+"_"+Region;
	if(Number(BSR)>0)
	{
      	chrome.runtime.sendMessage({
   			method: 'POST',
    		action: 'xhttp',
    		dataType: 'json',
    		url: 'https://admin.fbamultitool.com/salesestimator/indexnew.php',
    		data: {
          		asin: ASIN,
          		Region: Region,
          		PCATEGORY: PCATEGORY,
          		BSR: BSR,
          		caltype: caltype,
          		valicenseKey: valicenseKey
        		}
			}, function(response) {
			
				console.log("ASIN="+ASIN+"   Region="+Region+"   PCATEGORY="+PCATEGORY+"   BSR="+BSR );
				console.log("response-->",response);
					var asinL=ASIN+"_"+Region;
					var percentage=0;
					if(typeof response.response!="undefined")
					{
					if(response.error.code.trim()=='')
					{
						if(response.response[0].sales_estimate == "<5")
  						{
  							response.response[0].sales_estimate="<5>";
  							percentage=10;
  						}
  						else if(response.response[0].sales_estimate == "Upgrade")
  						{
  							response.response[0].sales_estimate="Upgrade";
  							percentage=0;
  						}
  						else if(response.response[0].sales_estimate.trim()!='')
  						{
  							var fullstrig=response.response[0].sales_estimate;
  							var res = fullstrig.split("-");
  							var starte,ende;
  							starte=res[0]/1000;
  							starte=starte.toFixed(0);
  							/*if(res[0]>=1000)
  							{
  								response.response[0].sales_estimate=starte +"K";
  							}
  							else
  							{
  								response.response[0].sales_estimate=res[0];
  							}*/
  							if(fullstrig.toLowerCase().indexOf('k')<=0)
  							{
  								if(typeof res[1] !='undefined')
  								{
  									if(res[1]>=5 && res[1]<10)
  									{
  										percentage=10;
  									}
  									else if(res[1]>=10 && res[1]<25)
  									{
  										percentage=15;
  									}
  									else if(res[1]>=25 && res[1]<50)
  									{
  										percentage=20;
  									}
  									else if(res[1]>=50 && res[1]<100)
  									{
  										percentage=25;
  									}
  									else if(res[1]>=100 && res[1]<200)
  									{
  										percentage=30;
  									}
  									else if(res[1]>=200 && res[1]<300)
  									{
  										percentage=35;
  									}
  									else if(res[1]>=300 && res[1]<400)
  									{
  										percentage=40;
  									}
  									else if(res[1]>=400 && res[1]<500)
  									{
  										percentage=50;
  									}
  									else if(res[1]>=500 && res[1]<700)
  									{
  										percentage=60;
  									}
  									else if(res[1]>=700 && res[1]<900)
  									{
  										percentage=70;
  									}
  									else if(res[1]>=900 && res[1]<1200)
  									{
  										percentage=80;
  									}
  									else if(res[1]>=1200 && res[1]<2000)
  									{
  										percentage=90;
  									}
  									else if(res[1]>=2000)
  									{
  										percentage=100;
  									}
  								}
  								if(res[0]>=1000)
  								{
  									starte=res[0]/1000;
  									starte=starte.toFixed(0);
  									response.response[0].sales_estimate=starte +"K";
  								}
  								if(typeof res[1] !='undefined' && res[1]>=1000)
  								{
  									if(res[0]<1000)
  									{

  										response.response[0].sales_estimate=res[0].trim();
  									}
  									ende=res[1]/1000;
  									ende=ende.toFixed(1);
  									response.response[0].sales_estimate=response.response[0].sales_estimate+"-"+ende+"K";
  								}
  							}
  							else
  							{
  								var bege=res[0].toLowerCase().replace('k','');
  								console.log(bege);
  								bege=bege.toFixed(0);
  								response.response[0].sales_estimate=bege +"K";
  								if(res[0]>=1000)
  								{
  									starte=res[0]/1000;
  									starte=starte.toFixed(0);
  									response.response[0].sales_estimate=starte +"K";
  								}
  								if(typeof res[1] !='undefined')
  								{
  									var laste=res[1].toLowerCase().replace('k','');
  									laste=laste.toFixed(1);
  									response.response[0].sales_estimate=response.response[0].sales_estimate+"-"+laste +"K";
  								}
  							}
  						}
  						else
  						{
  							response.response[0].sales_estimate=0-1;
  						}
  						setCookie(asinL,response.response[0].sales_estimate,4);
  						if(response.response[0].sales_estimate!="NotFound")
						{
							$('.salesestimatorfull').show();
  							$('.rwizard-title-panel').attr('style',"width:380px");
  							if(response.response[0].sales_estimate.length>=8)
  							{
  								$('.EstimatedSalesShow').attr('style',"font-size:11px !important;");
  							}
  							$('.EstimatedSalesShow').html(response.response[0].sales_estimate);
  							var resNew = response.response[0].sales_estimate.split("-");
  							resNew=resNew[0].toLowerCase().replace('k','000');
  							if(resNew=="<5>")
  							{
  								resNew=5;
  							}
  							ScoringVar['SalesRank']=parseInt(resNew);
						}
						else
						{
							ScoringVar['SalesRank']=0;
							$('.EstimatedSalesShow').html("NA");
						}
						$(".SEMIprogress").each(function(){
  
  var $bar = $(this).find(".SEMIbar");
  var $val = $(this).find("span");
  var perc = parseInt( $val.text(), 10);

  $({p:0}).animate({p:perc}, {
    duration: 3000,
    easing: "swing",
    step: function(p) {
      $bar.css({
        transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
        // 45 is to add the needed rotation to have the green borders at the bottom
      });
      $val.text(p|0);
    }
  });
});
						if(caltype=="average")
						{
							if(typeof response.response[0].average_values!="undefined" && response.response[0].average_values!=null)
							{
								if(typeof response.response[0].average_values.avg_price_30!="undefined")
								{
									response.response[0].average_values.avg_price_30=parseFloat(response.response[0].average_values.avg_price_30).toFixed(2);
									$("#bb30").html(response.response[0].average_values.avg_price_30);
								}
								if(typeof response.response[0].average_values.avg_price_60!="undefined")
								{
									response.response[0].average_values.avg_price_60=parseFloat(response.response[0].average_values.avg_price_60).toFixed(2);
									$("#bb60").html(response.response[0].average_values.avg_price_60);
								}
								if(typeof response.response[0].average_values.avg_price_90!="undefined")
								{
									response.response[0].average_values.avg_price_90=parseFloat(response.response[0].average_values.avg_price_90).toFixed(2);
									$("#bb90").html(response.response[0].average_values.avg_price_90);
								}
								if(typeof response.response[0].average_values.avg_sales_rank_30!="undefined")
								{
									response.response[0].average_values.avg_sales_rank_30=parseFloat(response.response[0].average_values.avg_sales_rank_30).toFixed(0);
									response.response[0].average_values.avg_sales_rank_30=numberWithCommas(response.response[0].average_values.avg_sales_rank_30);
									$("#rrr30").html(response.response[0].average_values.avg_sales_rank_30);
								}
								if(typeof response.response[0].average_values.avg_sales_rank_60!="undefined")
								{
									response.response[0].average_values.avg_sales_rank_60=parseFloat(response.response[0].average_values.avg_sales_rank_60).toFixed(0);
									response.response[0].average_values.avg_sales_rank_60=numberWithCommas(response.response[0].average_values.avg_sales_rank_60);
									$("#rrr60").html(response.response[0].average_values.avg_sales_rank_60);
								}
								if(typeof response.response[0].average_values.avg_sales_rank_90!="undefined")
								{
									response.response[0].average_values.avg_sales_rank_90=parseFloat(response.response[0].average_values.avg_sales_rank_90).toFixed(0);
									response.response[0].average_values.avg_sales_rank_90=numberWithCommas(response.response[0].average_values.avg_sales_rank_90);
									$("#rrr90").html(response.response[0].average_values.avg_sales_rank_90);
								}
							}
						}
					}
					else
					{
						setCookie(asinL,"NotFound",2);
						ScoringVar['SalesRank']=0;
						$('.EstimatedSalesShow').html("NA");
					}
				}
				else
				{
					setCookie(asinL,"NotFound",2);
					ScoringVar['SalesRank']=0;
					percentage=0;
					$('.EstimatedSalesShow').html("NA");
				}
					
					$('.c100').attr('class', function(i, c){
    return c.replace(/(^|\s)perC\S+/g, '');
});
					$( '.c100' ).addClass('perC'+percentage );
				});
		}
		else
		{
			setCookie(asinL,"NotFound",2);
					ScoringVar['SalesRank']=0;
					percentage=0;
					$('.EstimatedSalesShow').html("NA");
					$('.c100').attr('class', function(i, c){
    return c.replace(/(^|\s)perC\S+/g, '');
});
					$( '.c100' ).addClass('perC'+percentage );
		}
}
function SalesEstimator1(ASIN,Region,PCATEGORY,BSR)
{
	if(Region == "co.uk")
	{
		Region="uk";
	}
	else if(Region == "com")
	{
		Region="us";
	}
	BSR=BSR.replace(",","");
	var asinL=ASIN+"_"+Region;
	var SalesEstimatorData={};
	SalesEstimatorData['requests']={};
	SalesEstimatorData['requests']['product_id']=ASIN;
	SalesEstimatorData['requests']['category']="Clothing";
	SalesEstimatorData['requests']['marketplace']="amazon";
	SalesEstimatorData['requests']['geo']=Region;
	SalesEstimatorData['requests']['bsr']=3;
if(getCookie(asinL).trim()=='')
{
	 $.ajax({
        type: 'POST',
        url: 'https://us-central1-restriction-wizard.cloudfunctions.net/salesestimatekey',
        dataType: 'text',
        success: (result) => {
        var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.sellerprime.com/b2b/product/sales_estimate",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "app-client-id": "fbamultool",
    "app-token": result
  },
  "processData": false,
  "data": "{\n  \"requests\":[\n  \t{\n  \t\t\"product_id\":\""+ASIN+"\",\n  \t\t\"category\":\""+PCATEGORY+"\",\n  \t\t\"marketplace\":\"amazon\",\n  \t\t\"geo\":\""+Region+"\",\n  \t\t\"bsr\":"+BSR+"\n  \t}\n  \t]\n}\n"
}
        $.ajax(settings).done(function (response) {
        console.log("settings==>",settings);
			var asinL=ASIN+"_"+Region;
			if(response.error.code.trim()=='')
			{
  				if(response.response[0].sales_estimate == "<5")
  				{
  					response.response[0].sales_estimate="<5>";
  				}
  				else if(response.response[0].sales_estimate.trim()!='')
  				{
  					var fullstrig=response.response[0].sales_estimate;
  					var res = fullstrig.split("-");
  					var starte,ende;
  					console.log(res);
  					if(res[0]>=1000)
  					{
  						starte=res[0]/1000;
  						response.response[0].sales_estimate=starte +"K";
  					}
  					if(typeof res[1] !='undefined')
  					{
  						ende=res[1]/1000;
  						response.response[0].sales_estimate=response.response[0].sales_estimate + " - "+ende;
  					}
  				}
  				setCookie(asinL,response.response[0].sales_estimate,4);
  				$('.salesestimatorfull').show();
  				$('.rwizard-title-panel').attr('style',"width:380px");
  				$('.EstimatedSalesShow').html(response.response[0].sales_estimate);
			}
			else
			{
				setCookie(asinL,"NotFound",2);
			}
			});
        },
        error: (msg) => {
        console.log(msg);}
      });
	
}
else
{
	if(getCookie(asinL).trim()!="NotFound")
	{
		$('.salesestimatorfull').show();
  		$('.rwizard-title-panel').attr('style',"width:380px");
  		$('.EstimatedSalesShow').html(getCookie(asinL));
	}
}
}
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
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
function getUrlParameter(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function parseAsinNewAdded(url) {
  var asin;
  if(url.indexOf('/dp/')<0 && url.indexOf('/d/')>0)
  {
  		var splited=url.split('/');
  		for(var i=0;i<splited.length;i++)
  		{
  			if(splited[i].length==10)
  			{
  				return splited[i];
  			}
  		}
  }
  else
  {
  	return (asin = /https?:\/\/www.amazon.[\s\S]*?\/([A-Za-z0-9]{8,20})[\/?]/.exec(url + '/')) ? asin[1] : null;
  		
  }
}

function extractCountryFromURLNewAdded(url) {
  if (!url) {
    return null
  };
  var re = /.+amazon\.([a-z.]{2,6})\/.*/;
  var match = url.match(re);
  if(match==null)
	return null;
  return match.length ? match[1] : null;
}
function getOffersNewAdded(region, asin ,type, page,totalsellers,totalnumberofpagesvisited,checkprimemain) {
var url="";
var scraperUrl1="http://api.scraperapi.com?api_key="+ScraperApiKey+"&url=";
var scraperUrl1="";
  var primesellers="ref=olp_f_primeEligible?ie=UTF8&f_all=true&f_new=true&f_primeEligible=true";
  var Allsellers="ref=olp_f_new?ie=UTF8&f_all=true&f_new=true";
  var Newsellers="ref=olp_f_new?ie=UTF8&f_all=true&f_new=true";
	if(type=="prime")
	{
		url = 'https://www.amazon.' + region + '/gp/offer-listing/' + asin + '/' + primesellers;
	}
	else if(type=="all")
	{
		url = 'https://www.amazon.' + region + '/gp/offer-listing/' + asin + '/' + Allsellers;
	}
	else if(type=="last" || type=="Primelast" || type=="Alllast")
	{
		
		url = 'https://www.amazon.' + region + '/gp/offer-listing/' + asin + '/' + page;
	}
	else
	{
		url = 'https://www.amazon.' + region + '/gp/offer-listing/' + asin + '/' + Newsellers;
	}
	chrome.runtime.sendMessage({ data: {
        		FunctionCall: '_getOffers' ,
        		URL: scraperUrl1+url,
        		},'FunctionCall':'_getOffers' }, 
      function(result) {
	 //$.get(url).then(function (result) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(result, 'text/html');
      var $Navigation = $('.a-pagination', doc);
      result="";
      if(typeof $Navigation !== "undefined") 
      {
      	if(type=="all" || type=="prime")
      	{
      		if($Navigation.find('li').length>2)
      		{
      			var numberOfFBA=$Navigation.find('li').length-2;
      		}
      		else
      		{
      			var numberOfFBA=$Navigation.find('li').length;
      		}
      	}
      	else
      	{
      		if($Navigation.find('li').length>2)
      		{
      			var numberOfFBA=$Navigation.find('li').length-2;
      		}
      		else
      		{
      			var numberOfFBA=$Navigation.find('li').length;
      		}
      	}
        var TotalFbaBeforeLastPage=0;
        var lastpagenumber=0;
        if(numberOfFBA>8 && totalnumberofpagesvisited==0)
        {
      		var pageolpPos=$Navigation.find('li:nth-last-child(2)').find('a').attr('href').indexOf('ref=olp_page_');
      		var pagePos=$Navigation.find('li:nth-last-child(2)').find('a').attr('href').indexOf('?ie=UTF8');
      		pageolpPos=pageolpPos+13;
      		numberOfFBA=$Navigation.find('li:nth-last-child(2)').find('a').attr('href').substring(pageolpPos,pagePos);
      	}
        if(numberOfFBA>1)
        {
        	lastpagenumber= numberOfFBA -1;
        	TotalFbaBeforeLastPage=lastpagenumber*10;
        	if(type=="prime" || type=="Primelast")
        	{
        		var pageurl="ref=olp_page_"+numberOfFBA+"?ie=UTF8&f_all=true&f_new=true&f_primeEligible=true&startIndex="+TotalFbaBeforeLastPage;
        		if(lastPrimevisited == false)
        		{
        			getOffersNewAdded(region, asin ,"Primelast", pageurl,totalsellers,TotalFbaBeforeLastPage,checkprimemain);
        			lastPrimevisited=true;
        		}
        		else
        		{
        			if(typeof $('.olpOffer',doc) !== "undefined") 
      				{
      					if(checkprimemain==1)
      					{
      				 		totalFBASELLERS=totalnumberofpagesvisited + $('.olpOffer',doc).length;
      					}
      					else
      					{
      						totalFBASELLERS=0;
      					}
        				
        				 var Mfn= totalsellers - totalFBASELLERS;
        				 ScoringVar['TotalSellers']=totalsellers;
        				 console.log(globalTotalSellerCount);
        				  if(globalTotalSellerCount>0 && globalTotalSellerCount<10)
      				  {
      				  	Mfn=globalFBMCount;
        				totalFBASELLERS=globalFBACount;
      				  }
        				 $('#mfnsellers').html(Mfn+" FBM");
        				$('#fbasellers').html(totalFBASELLERS+" FBA");
        				chrome.runtime.sendMessage({ data: {
        		FunctionCall: 'NumberOfSellersSaving' ,
        		asin: asin,
        		country: region,
        		fbasellers:totalFBASELLERS,
        		fbmsellers:totalsellers
        		},'FunctionCall':'NumberOfSellers' }, 
      function(result) {
      
      });
        				totalFBASELLERS=0;
						totalsellers=0;
						lastPrimevisited=false;
						lastAllvisited=false;
						
						if(typeof htmlWithQuantity !="undefined" && htmlWithQuantity.trim()!="")
						{
							$('#tableid').html(htmlWithQuantity);
							var BGurlNewAdded=$(location).attr('href');
    	//var BGasinNewAdded=parseAsinNewAdded(BGurlNewAdded);
    	var BGRegionNewAdded=extractCountryFromURLNewAdded(BGurlNewAdded);
    	var BGcartUrl='https://www.amazon.'+BGRegionNewAdded+'/gp/cart/view.html/ref=nav_cart';
		/*chrome.runtime.sendMessage({
   			method: 'get',
    		action: 'CartDELETECART',
    		url: BGcartUrl,
			}, function(response) {
				console.log("BGWORKED");
			});*/
							//$('#olpOfferList',doc).html(htmlWithQuantity);
        					//$('#olpOfferList').html(htmlWithQuantity);
        				}
        				else
        				{
        					PopUpOpen=true;
        					$('.overlaydiv').show();
        				}
						
        			}
        		}
        	}
        	else if(type=="all" || type=="Alllast")
        	{
        		var checkprime=$('[name="olpCheckbox_primeEligible"]',doc).length;
        		var pageurl="ref=olp_page_"+numberOfFBA+"?ie=UTF8&f_all=true&f_new=true&startIndex="+TotalFbaBeforeLastPage;
        		if(lastAllvisited == false)
        		{
        			$('.olpBuyColumn',doc).remove();
        			$('.a-span-last',doc).remove();
        			$('.a-span2',doc).attr("style","width:30%");
        			$('.a-span3',doc).attr("style","width:30%");
        			$('.olpSellerColumn p',doc).remove();
        			//$('.olpSellerColumn',doc).attr("style","width:100%");
        			var htmlg='<div class="a-column a-span4" role="columnheader" style="width: 100%;align-items: right;text-align: center;font-size: 16px;font-weight:  900;">Top 10 Sellers<br><font color="#B12704" style="font-size:14px">Please don\'t close page while fetching seller stock qty.</font></div>';
      				//$("[role^=columnheader]",doc).parent().html(htmlg);	
        			//$('#olpOfferList').html($('.olpOfferList',doc).html());
        			getOffersNewAdded(region, asin ,"Alllast", pageurl,0,TotalFbaBeforeLastPage,checkprime);
        			lastAllvisited=true;
        		}
        		else
        		{
        			if(typeof $('.olpOffer',doc) !== "undefined") 
      				{
        				totalnumberOfSellers=totalnumberofpagesvisited + $('.olpOffer',doc).length;
        				getOffersNewAdded(region, asin ,"prime", "",totalnumberOfSellers,0,checkprimemain);
        			}
        		}
        	}
        	
        }
        else
        {
        	if(typeof $('.olpOffer',doc) !== "undefined") 
      		{
      			if(type=="prime")
      			{
      				if(checkprimemain==1)
      				{
      				 	totalFBASELLERS=TotalFbaBeforeLastPage + $('.olpOffer',doc).length;
      				}
      				else
      				{
      					totalFBASELLERS=0;
      				}
      				  var Mfn= totalsellers - totalFBASELLERS;
      				  ScoringVar['TotalSellers']=totalsellers;
      				  console.log(globalTotalSellerCount);
      				  if(globalTotalSellerCount>0 && globalTotalSellerCount<10)
      				  {
      				  	Mfn=globalFBMCount;
        				totalFBASELLERS=globalFBACount;
      				  }
      				 
        			$('#mfnsellers').html(Mfn+" FBM");
        				$('#fbasellers').html(totalFBASELLERS+" FBA");
        				chrome.runtime.sendMessage({ data: {
        		FunctionCall: 'NumberOfSellersSaving' ,
        		asin: asin,
        		country: region,
        		fbasellers:totalFBASELLERS,
        		fbmsellers:totalsellers
        		},'FunctionCall':'NumberOfSellers' }, 
      function(result) {
      
      });
        				if(typeof htmlWithQuantity !="undefined" && htmlWithQuantity.trim()!="")
						{
							$('#tableid').html(htmlWithQuantity);
							//$('#olpOfferList',doc).html(htmlWithQuantity);
        					//$('#olpOfferList').html(htmlWithQuantity);
        					var BGurlNewAdded=$(location).attr('href');
    	//var BGasinNewAdded=parseAsinNewAdded(BGurlNewAdded);
    	var BGRegionNewAdded=extractCountryFromURLNewAdded(BGurlNewAdded);
    	var BGcartUrl='https://www.amazon.'+BGRegionNewAdded+'/gp/cart/view.html/ref=nav_cart';
		/*chrome.runtime.sendMessage({
   			method: 'get',
    		action: 'CartDELETECART',
    		url: BGcartUrl,
			}, function(response) {
				console.log("BGWORKED");
			});*/
        				}
        				else
        				{
        					PopUpOpen=true;
        					$('.overlaydiv').show();
        				}
						totalFBASELLERS=0;
						totalsellers=0;
						lastPrimevisited=false;
						lastAllvisited=false;
        		}
        		else if(type=="all")
        		{
        			var checkprime=$('[name="olpCheckbox_primeEligible"]',doc).length;
        			totalnumberOfSellers=TotalFbaBeforeLastPage + $('.olpOffer',doc).length;
        			$('.olpBuyColumn',doc).remove();
        			$('.a-span-last',doc).remove();
        			$('.a-span2',doc).attr("style","width:30%");
        			$('.a-span3',doc).attr("style","width:30%");
        			$('.olpSellerColumn p',doc).remove();
        			var htmlg='<div class="a-column a-span4" role="columnheader" style="width: 100%;align-items: right;text-align: center;font-size: 16px;font-weight:  900;">Top 10 Sellers<br><font color="#B12704" style="font-size:14px">Please don\'t close page while fetching seller stock qty.</font></div>';
        			
        			getOffersNewAdded(region, asin ,"prime", "",totalnumberOfSellers,0,checkprime);
        		}
        	}
        	
        }
      }
      doc=null;
    /*}).fail(function (e) {
      console.log(e.message)
    });*/
    });
   
}

function getData(data,locations){
	var location = locations;
	if (location.indexOf('http%3A%2F%2F') != -1){
		location = decodeURIComponent(location.substr(location.indexOf('http%3A%2F%2F'), location.length));
	}
	var asin;
	var match = new RegExp("/offer-listing/([^/]+)/*").exec(location);
	if (match){
		asin = match[1];
	} else {
		match = new RegExp("/gp/aw/ol/([^/]+)/*").exec(location);
		if (match){
			asin = match[1];
		}
	}
	if (asin.length>10){
		var match = new RegExp("B[0-9]{2}[0-9A-Z]{7}|[0-9]{9}(X|[0-9])").exec(location);
		if (match){
			asin = match[0];
		}
	}
    var ret = {};
	ret.asin = asin;
	ret.url = location;
	ret.domain = get_domain_from_url(location);
	ret.results = [];
    if (data.length>0){ 
		for ( var i = 0; i < data.length; i++) {
			ret.results.push(data[i].innerHTML);
		}
    }
	return ret;
}
function get_domain_from_url(url) {
    var a = document.createElement('a');
    a.setAttribute('href', url);
    return a.hostname;
}
function mineOfferListings(result,docobj) {
	if (!result.results){
		return;
	}
	var match = new RegExp("(www\.)*(.+)").exec(result.domain);
	domain = match[2];
	var offers = [];
	var data = result.results;
	for ( var i = 0; i < data.length; i++) {
	
		if (data[i].replace(/\s/g,'').length != 0) {
			data[i] = data[i].replace(/>\s+</g,'><');
			data[i]= data[i].replace(/EUR /g,'£');
			var offer = {};
			offer.marketPlace = domain;
			var match = new RegExp("name=\"offeringID\\.1\" value=\"([^\"]+)\"").exec(data[i]);
			if(match && match.length>0){
				offer.offerId = match[1];
				offer.asin = result.asin;
			} else {
				match = new RegExp("name=\"oid\" value=\"([^\"]+)\"").exec(data[i]);
				if(match && match.length>0){
					offer.offerId = match[1];
					offer.asin = result.asin;
				}
			}
			match = new RegExp("title=\"([^\"]+)\"").exec(data[i]);
			if (match && match.length>0 && match[1] !=null && match[1].trim().length>0){
				offer.merchantName = match[1];
			} else {
				match = new RegExp("seller=.*\">([^<]+)</a></span>").exec(data[i]);
				if (match && match.length>0 && match[1]!=null && match[1].trim().length>0){
					offer.merchantName = match[1];
				} else {
			
					match = new RegExp("olpSellerName.*\">([^<]+)</a></span>").exec(data[i]);
					if (match && match.length>0 && match[1]!=null && match[1].trim().length>0){
						offer.merchantName = match[1];
					} else {
						match = new RegExp("shops/([^/]+)/").exec(data[i]);
						if (match && match.length>1 && match[1]!=null){
							offer.merchantName = match[1];
						} else {
							match = new RegExp("olpSellerName.*\>([^<]+)</font></font></a>").exec(data[i])
							if (match && match.length>0){
								if (match[1]!=null){
									offer.merchantName = match[1];
								}
								
							}
							else
							{
								var parserNew = new DOMParser();
    							var docNew = parserNew.parseFromString(data[i], 'text/html');
    							var $offerList = $('.olpSellerName', docNew).find("img").attr('alt');
								//match = new RegExp(".olpSellerName").find("img").exec(data[i])
								if ($offerList.toLowerCase()=="amazon.com"){
									offer.merchantId = "ATVPDKIKX0DER";
									ScoringVar['AmazonSeller']=1;
								} else if ($offerList.toLowerCase()=="amazon.co.uk"){
									offer.merchantId = "A3P5ROKL5A1OLE";
									ScoringVar['AmazonSeller']=1;
								} else if ($offerList.toLowerCase()=="amazon.ca"){
									offer.merchantId = "A3DWYIK6Y9EEQB";
									ScoringVar['AmazonSeller']=1;
								} else if ($offerList.toLowerCase()=="amazon.de"){
									offer.merchantId="A3JWKAKR8XB7XF";
									ScoringVar['AmazonSeller']=1;
								} else if ($offerList.toLowerCase()=="amazon.it"){
									offer.merchantId="A11IL2PNWYJU7H";
									ScoringVar['AmazonSeller']=1;
								} else if ($offerList.toLowerCase()=="amazon.fr"){
									offer.merchantId="A1X6FK5RDHNB96";
									ScoringVar['AmazonSeller']=1;
								} else if ($offerList.toLowerCase()=="amazon.es"){
									offer.merchantId="A1AT7YVPFBWXBL";
									ScoringVar['AmazonSeller']=1;
								} else if ($offerList.toLowerCase()=="amazon.co.jp"){
									offer.merchantId="AN1VRQENFRJN5";
									ScoringVar['AmazonSeller']=1;
								}
							}
						}
					}
				}
			}
			
			match = new RegExp("[\\$|£](\\S+)\\s*</span>").exec(data[i]);
			if (match && match.length>0){
				offer.price = match[1].replace(/,/g,'.');
			} else {
				match = new RegExp('\\d{1,3}(?:[.,]\\d{3})*(?:[.,]\\d{2})').exec(data[i]);
				if (match && match.length>0){
					offer.price = match[0];
				} else {
					match = new RegExp("<span>Price not displayed").exec(data[i]);
					if (match && match.length>0){
						offer.price = -1.0;
					}
				}
			}
			match = new RegExp("olpShippingPrice\">[\\$|£](\\S+)</span>").exec(data[i]);
			if (match && match.length>0){
				offer.shippingPrice = match[1].replace(",",".");
			}
			match = new RegExp("olpShippingPrice\">[\\EUR](\\S+)</span>").exec(data[i]);
			//console.log("match----->",data[i]);
			match = new RegExp('name=\"merchantID\" value="([A-Z0-9]+)').exec(data[i]);
			if (match){
				offer.merchantId = match[1];
			} else {
				match = new RegExp('seller=([A-Z0-9]+)"').exec(data[i]);
				if(match){
					offer.merchantId = match[1];
					} else {
						match = new RegExp('olp_merch_name.*?&amp;s=([A-Z0-9]+)\\"').exec(data[i]);
						if (match) {
							offer.merchantId = match[1];
						} else {
						if (domain=="amazon.com"){
							offer.merchantId = "ATVPDKIKX0DER";
							ScoringVar['AmazonSeller']=1;
						} else if (domain=="amazon.co.uk"){
							offer.merchantId = "A3P5ROKL5A1OLE";
							ScoringVar['AmazonSeller']=1;
						} else if (domain=="amazon.ca"){
							offer.merchantId = "A3DWYIK6Y9EEQB";
							ScoringVar['AmazonSeller']=1;
						} else if (domain=="amazon.de"){
							offer.merchantId="A3JWKAKR8XB7XF";
							ScoringVar['AmazonSeller']=1;
						} else if (domain=="amazon.it"){
							offer.merchantId="A11IL2PNWYJU7H";
							ScoringVar['AmazonSeller']=1;
						} else if (domain=="amazon.fr"){
							offer.merchantId="A1X6FK5RDHNB96";
							ScoringVar['AmazonSeller']=1;
						} else if (domain=="amazon.es"){
							offer.merchantId="A1AT7YVPFBWXBL";
							ScoringVar['AmazonSeller']=1;
						} else if (domain=="amazon.co.jp"){
							offer.merchantId="AN1VRQENFRJN5";
							ScoringVar['AmazonSeller']=1;
						}
					}
				}
			}
			//console.log("FREE Super Saver Shipping=>",data[i].indexOf("FREE Super Saver Shipping"));
			//console.log("FREE Shipping=>",data[i].indexOf("FREE Shipping"));
			//console.log("isAmazonFulfilled=1=>",data[i].indexOf('isAmazonFulfilled=1'));
			//console.log("Fulfillment by Amazon=>",data[i].indexOf('Fulfillment by Amazon'));
			//console.log(".a-icon-prime=>",$(data[i]).find('.a-icon-prime').length);
			//console.log('[id^="fulfilledByAmazonPopOver"]=>',$(data[i]).find('[id^="fulfilledByAmazonPopOver"]').length);
			//console.log('================');
			//console.log(data[i]);
			//console.log('================');
			offer.pageIndex = i;
			//offer.fba = (data[i].indexOf("FREE Super Saver Shipping") > -1) || (data[i].indexOf("FREE Shipping") > -1) || data[i].indexOf('isAmazonFulfilled=1') > -1 || data[i].indexOf('Fulfillment by Amazon') > -1 || $(data[i]).find('.a-icon-prime').length > 0 || $(data[i]).find('[id^="fulfilledByAmazonPopOver"]').length > 0 || offer.merchantId=="ATVPDKIKX0DER" || offer.merchantId=="A3P5ROKL5A1OLE" || offer.merchantId=="A3DWYIK6Y9EEQB" || offer.merchantId=="A3JWKAKR8XB7XF"  || offer.merchantId=="A11IL2PNWYJU7H" || offer.merchantId=="A1X6FK5RDHNB96"   || offer.merchantId=="A1AT7YVPFBWXBL" || offer.merchantId=="AN1VRQENFRJN5";
			offer.fba = (data[i].indexOf("FREE Super Saver Shipping") > -1) ||  data[i].indexOf('isAmazonFulfilled=1') > -1 || data[i].indexOf('Fulfillment by Amazon') > -1 || $(data[i]).find('.a-icon-prime').length > 0 || $(data[i]).find('[id^="fulfilledByAmazonPopOver"]').length > 0 || offer.merchantId=="ATVPDKIKX0DER" || offer.merchantId=="A3P5ROKL5A1OLE" || offer.merchantId=="A3DWYIK6Y9EEQB" || offer.merchantId=="A3JWKAKR8XB7XF"  || offer.merchantId=="A11IL2PNWYJU7H" || offer.merchantId=="A1X6FK5RDHNB96"   || offer.merchantId=="A1AT7YVPFBWXBL" || offer.merchantId=="AN1VRQENFRJN5";
			offer.url = result.url;
			//if(FBAORFBM!="FBA")
			{
				if(typeof $("#sellerProfileTriggerId").html()!="undefined" && typeof offer.merchantName!="undefined")
				{
					if(offer.merchantName.toLowerCase()==$("#sellerProfileTriggerId").text().toLowerCase())
					{
						if(offer.fba)
						{
							FBAORFBMGOT="FBA";
							FBAORFBM="FBA";
						}
						else
						{
							FBAORFBMGOT="FBM";
						}
					}
				}
				if(lowestNewPriceGlobal<=0)
				{
					lowestNewPriceGlobal=offer.price;
					if(offer.fba)
					{
						FBAORFBMGOT="FBA";
					}
					else
					{
						FBAORFBMGOT="FBM";
					}
				}
			}
			globalTotalSellerCount=globalTotalSellerCount+1;
			if(offer.fba)
			{
				globalFBACount=globalFBACount+1;
			}
			else
			{
				globalFBMCount=globalFBMCount+1;
			}
			workingOffersAssoc[offer.merchantId]=[];
			workingOffersAssoc[offer.merchantId].push(offer);
			offers.push(offer);
		}
	}
	workingOffers = offers;
	GlobalObjects=docobj;
	delete offers;
	chrome.storage.sync.get(["DisableStockChecker","DisableStockCheckerOld"],function(DisableStockCheckerobj){
	if(typeof DisableStockCheckerobj.DisableStockChecker=="undefined" || DisableStockCheckerobj.DisableStockChecker)
	{
		if(typeof DisableStockCheckerobj.DisableStockCheckerOld=="undefined" || DisableStockCheckerobj.DisableStockCheckerOld)
		{
			newAddToCart2(1,docobj);
		}
		else
		{
			retrieveQuantitiesOBSOLUTE(docobj);
		}
		//newAddToCart2(1,docobj);
		//kkkretrieveQuantities(docobj)
		//retrieveQuantities(docobj);
	}
	});
}
function displayResults(offers,docobj)
{
	if(CartsubmitStarted)
	{
		return false;
	}
	console.log("displayResults",offers);
	var total = 0;
	var totalMessage = '';
	var parser = new DOMParser();
    var doc = parser.parseFromString(docobj, 'text/html');
    var $offerList = $('#olpOfferList', doc);
    var loadingmes='<span class="StockShownLoad">(Loading..)</span>';
    	$('#olpOfferList', doc).find('.olpCondition').append(loadingmes);
    if(typeof offers !="undefined")
    {
	for (var index = 0; index < offers.length; index++){
		if (offers[index].quantity==null){
			offers[index].quantity=0;
		}
		if(offers[index].quantity>=10)
		{
			continue;
			return false;
		}
		if (offers[index].quantity){
			var message= offers[index].quantity == 0 || offers[index].quantity == "undefined" ? "(failed)" :"(" +offers[index].quantity+ " left"+totalMessage+")";
			var text = document.createElement("span");text.innerHTML = message;
			var text = '<span class="StockShown">'+message+'</span>';
			var loadingmes='<span class="StockShownLoad">(Loading..)</span>';
			var checkindex=(offers[index].pageIndex||index);
			$offerList.find(".olpOffer").each(function( indexind ) {
			var findseller=$(this).find('.olpSellerName').find('a').attr('href');
			var sellerid=getUrlParameter("seller",findseller);
			var stockshown=$(this).find('.StockShown').html();
  			if((offers[index].merchantId==sellerid && typeof stockshown === 'undefined') || ((offers[index].merchantId=="ATVPDKIKX0DER" || offers[index].merchantId=="A3P5ROKL5A1OLE" || offers[index].merchantId=="A3DWYIK6Y9EEQB" || offers[index].merchantId=="A3JWKAKR8XB7XF" || offers[index].merchantId=="A11IL2PNWYJU7H" || offers[index].merchantId=="A1X6FK5RDHNB96" || offers[index].merchantId=="A1AT7YVPFBWXBL" || offers[index].merchantId=="AN1VRQENFRJN5") && !sellerid && typeof stockshown === 'undefined'))
  			{
  				$(this).find('.StockShownLoad').remove();
  				$(this).find(".olpCondition").append(text);
  				return false;
  			}
  			if(typeof stockshown=="undefined")
  			{
  				$(this).find('.StockShownLoad').remove();
  				$(this).find(".olpCondition").append(loadingmes);
  			}
});
		}
	}
	}
	var htmlg='<div class="a-column a-span4" id="top10sellerdata" role="columnheader" style="width: 100%;align-items: right;text-align: center;font-size: 16px;font-weight:  900;">Top 10 Sellers<br><font color="#B12704" style="font-size:14px">Please don\'t close page while fetching seller stock qty.</font></div>';
      		$("[role^=columnheader]",doc).parent().html(htmlg);	
      if ($offerList.length > 0) {
        $offerList.find('.a-span-last').remove();
        $offerList.find('.a-span2 .a-spacing-small').remove();
        $offerList.find('.a-column.a-span3:nth-child(4)').remove();
        $offerList.find('.olpDeliveryColumn').remove();
        var lastRow = $offerList.find('.a-row').get(5);
        if (lastRow) {
          //$(lastRow).nextAll().remove();
        }
        $offerList.find('.a-section').removeClass('a-spacing-double-large');

        $offerList.find('.a-column').css('width', '30%');
        $offerList.find('#top10sellerdata').css('width', '100%');
        htmlWithQuantity=$('#olpOfferList',doc).html();
        /*if(PopUpOpen)
        {
        	//$('#olpOfferList').html(htmlWithQuantity);
        	//$('.overlaydiv').hide();
        }*/
        $('#olpOfferList').html(htmlWithQuantity);
        defaultStock=true;
      }
}
function displayResults2(offers,docobj){
console.log("displayResults2",offers);
console.log("offers",offers);
	var total = 0;
	var totalMessage = '';
	var parser = new DOMParser();
    var doc = parser.parseFromString(docobj, 'text/html');
    var $offerList = $('#olpOfferList', doc);
    var loadingmes='<span class="StockShownLoad">(Loading..)</span>';
    	$('#olpOfferList', doc).find('.olpCondition').append(loadingmes);
    if(typeof offers !="undefined")
    {
	for (var key in offers) {
		if (offers[key][0].quantity==null){
			offers[key][0].quantity=0;
		}
		if (offers[key][0].quantity){
			var message= offers[key][0].quantity == 0 || offers[key][0].quantity == "undefined" ? "(failed)" :"(" +offers[key][0].quantity+ " left"+totalMessage+")";
			var text = document.createElement("span");text.innerHTML = message;
			var text = '<span class="StockShown">'+message+'</span>';
			var checkindex=(offers[key][0].pageIndex||key);
			$offerList.find(".olpOffer").each(function( indexind ) {
			var findseller=$(this).find('.olpSellerName').find('a').attr('href');
			var sellerid=getUrlParameter("seller",findseller);
			var stockshown=$(this).find('.StockShown').html();
  			if((offers[key][0].merchantId==sellerid && typeof stockshown === 'undefined') || ((offers[key][0].merchantId=="ATVPDKIKX0DER" || offers[key][0].merchantId=="A3P5ROKL5A1OLE" || offers[key][0].merchantId=="A3DWYIK6Y9EEQB" || offers[key][0].merchantId=="A3JWKAKR8XB7XF" || offers[key][0].merchantId=="A11IL2PNWYJU7H" || offers[key][0].merchantId=="A1X6FK5RDHNB96" || offers[key][0].merchantId=="A1AT7YVPFBWXBL" || offers[key][0].merchantId=="AN1VRQENFRJN5") && !sellerid && typeof stockshown === 'undefined'))
  			{
  				$(this).find(".StockShownLoad").remove();
  				$(this).find(".olpCondition").append(text);
  				return false;
  			}
});
		}
	}
	}
	var htmlg='<div class="a-column a-span4" id="top10sellerdata" role="columnheader" style="width: 100%;align-items: right;text-align: center;font-size: 16px;font-weight:  900;">Top 10 Sellers<br><font color="#B12704" style="font-size:14px">Please don\'t close page while fetching seller stock qty.</font></div>';
      		$("[role^=columnheader]",doc).parent().html(htmlg);	
      if ($offerList.length > 0) {
        $offerList.find('.a-span-last').remove();
        $offerList.find('.a-span2 .a-spacing-small').remove();
        $offerList.find('.a-column.a-span3:nth-child(4)').remove();
        $offerList.find('.olpDeliveryColumn').remove();
        var lastRow = $offerList.find('.a-row').get(5);
        if (lastRow) {
          //$(lastRow).nextAll().remove();
        }
        $offerList.find('.a-section').removeClass('a-spacing-double-large');
        $offerList.find('.a-column').css('width', '30%');
        $offerList.find('#top10sellerdata').css('width', '100%');
        htmlWithQuantity=$('#olpOfferList',doc).html();
        if(PopUpOpen)
        {
        	$('#olpOfferList').html(htmlWithQuantity);
        	$('.overlaydiv').hide();
        }
        defaultStockCheck=true;
        $('#olpOfferList').html(htmlWithQuantity);
        $('.olpOfferList').html(htmlWithQuantity);
        $('.overlaydiv').hide();
      }
}
function displayResultsAddCart(offers,docobj){
	var total = 0;
	var totalMessage = '';
	var parser = new DOMParser();
    var doc = parser.parseFromString(docobj, 'text/html');
    var urlNewAdded=$(location).attr('href');
    var currentRegion = extractCountryFromURL(location.href);
    var currencySign=CURRENCY_SIGNS[currentRegion];
    var asinNewAdded=parseAsinNewAdded(urlNewAdded);
    var htmltable="";
    //htmltable+="<tr><th><font style='color:#165074'>ASIN: "+asinNewAdded+"</font></th></tr><tr><th><font style='color:#165074'>Total Sellers:</font> "+asinNewAdded+"</th></tr><tr><th>Seller</th><th>Quantity</th><th>Price</th><th>Type</th></tr>";
    var $offerList = $('#olpOfferList', doc);
    var loadingmes='<span class="StockShownLoad">(Loading..)</span>';
    $offerList.find(".olpCondition").append(loadingmes);
    $offerList.find(".olpOffer").each(function( indexind ) {
			var findseller=$(this).find('.olpSellerName').find('a').attr('href');
			var sellerid=getUrlParameter("seller",findseller);
			var stockshown=$(this).find('.StockShown').html();
			if(!sellerid && (typeof offers['ATVPDKIKX0DER']!="undefined" || typeof offers['A3P5ROKL5A1OLE']!="undefined" || typeof offers['A3DWYIK6Y9EEQB']!="undefined" || typeof offers['A3JWKAKR8XB7XF']!="undefined" || typeof offers['A11IL2PNWYJU7H']!="undefined" || typeof offers['A1X6FK5RDHNB96']!="undefined" ||  typeof offers['A1AT7YVPFBWXBL']!="undefined" ||  typeof offers['AN1VRQENFRJN5']!="undefined") && typeof stockshown === 'undefined')
			{
				var marktId="";
				if(typeof offers['ATVPDKIKX0DER']!="undefined")
				{
					marktId="ATVPDKIKX0DER";
				}
				else if(typeof offers['A3P5ROKL5A1OLE']!="undefined")
				{
					marktId="A3P5ROKL5A1OLE";
				}
				else if(typeof offers['A3DWYIK6Y9EEQB']!="undefined")
				{
					marktId="A3DWYIK6Y9EEQB";
				}
				else if(typeof offers['A3JWKAKR8XB7XF']!="undefined")
				{
					marktId="A3JWKAKR8XB7XF";
				}
				else if(typeof offers['A11IL2PNWYJU7H']!="undefined")
				{
					marktId="A11IL2PNWYJU7H";
				}
				else if(typeof offers['A1X6FK5RDHNB96']!="undefined")
				{
					marktId="A1X6FK5RDHNB96";
				}
				else if(typeof offers['A1AT7YVPFBWXBL']!="undefined")
				{
					marktId="A1AT7YVPFBWXBL";
				}
				else if(typeof offers['AN1VRQENFRJN5']!="undefined")
				{
					marktId="AN1VRQENFRJN5";
				}
				if(marktId.trim()!="")
				{
					var lengthG;
					if(typeof offers[marktId][9]!="undefined")
					{
						lengthG=9;
					}
					else if(typeof offers[marktId][8]!="undefined")
					{
						lengthG=8;
					}
					else if(typeof offers[marktId][7]!="undefined")
					{
						lengthG=7;
					}
					else if(typeof offers[marktId][6]!="undefined")
					{
						lengthG=6;
					}
					else if(typeof offers[marktId][5]!="undefined")
					{
						lengthG=5;
					}
					else if(typeof offers[marktId][4]!="undefined")
					{
						lengthG=4;
					}
					else if(typeof offers[marktId][3]!="undefined")
					{
						lengthG=3;
					}
					else if(typeof offers[marktId][2]!="undefined")
					{
						lengthG=2;
					}
					else if(typeof offers[marktId][1]!="undefined")
					{
						lengthG=1;
					}
					else
					{
						lengthG=0;
					}
					var message= offers[marktId][lengthG].stock == 0 || offers[marktId][lengthG].stock == "undefined" ? "(failed)" :"" +offers[marktId][lengthG].stock+"";
					var text = document.createElement("span");text.innerHTML = message;
					var text = '<span class="StockShown">'+message+'</span>';
					$(this).find(".StockShownLoad").remove();
  					$(this).find(".olpCondition").append(text);
  					var SellerName=$(this).find(".olpSellerColumn").find(".olpSellerName").find("a").html();
  					if(typeof SellerName=="undefined")
  					{
  						SellerName="Amazon";
  					}
  					var curPrice=currencySign+offers[marktId][lengthG].price;
  					if(offers[marktId][lengthG].shippingPrice>0)
  					{
  						curPrice=curPrice+" + "+currencySign+offers[marktId][lengthG].shippingPrice;
  					}
  					var FbaFbm;
  					if(offers[marktId][lengthG].isNotFBA)
  					{
  						FbaFbm="FBM";
  					}
  					else
  					{
  						FbaFbm="FBA";
  					}
  					//offers[marktId].pop();
  					htmltable+="<tr><td>"+SellerName+"</td><td><font style='color:#18c187'>Qty: "+message+"</font></td><td>"+curPrice+"</td><td>"+FbaFbm+"</td></tr>";
  				}
			}
			else if(typeof offers[sellerid]!="undefined" && typeof stockshown === 'undefined')
			{
					var lengthG;
					if(typeof offers[sellerid][9]!="undefined")
					{
						lengthG=9;
					}
					else if(typeof offers[sellerid][8]!="undefined")
					{
						lengthG=8;
					}
					else if(typeof offers[sellerid][7]!="undefined")
					{
						lengthG=7;
					}
					else if(typeof offers[sellerid][6]!="undefined")
					{
						lengthG=6;
					}
					else if(typeof offers[sellerid][5]!="undefined")
					{
						lengthG=5;
					}
					else if(typeof offers[sellerid][4]!="undefined")
					{
						lengthG=4;
					}
					else if(typeof offers[sellerid][3]!="undefined")
					{
						lengthG=3;
					}
					else if(typeof offers[sellerid][2]!="undefined")
					{
						lengthG=2;
					}
					else if(typeof offers[sellerid][1]!="undefined")
					{
						lengthG=1;
					}
					else
					{
						lengthG=0;
					}
				if(typeof offers[sellerid][lengthG]!="undefined")	
				{
					var SellerName=$(this).find(".olpSellerColumn").find(".olpSellerName").find("a").html();
  					if(typeof SellerName=="undefined")
  					{
  							SellerName="Amazon";
  					}
  					if(SellerName=="Amazon" && typeof offers[sellerid][lengthG]!="undefined")
  					{
						var message= typeof offers[sellerid][lengthG].stock == "undefined" || offers[sellerid][lengthG].stock == 0  ? "999" :"" +offers[sellerid][lengthG].stock+"";
					}
					else if(typeof offers[sellerid][lengthG]!="undefined")
					{
						var message= typeof offers[sellerid][lengthG].stock == "undefined" || offers[sellerid][lengthG].stock == 0 ? "2" :"" +offers[sellerid][lengthG].stock+"";
					}
					else
					{
						var message= "4";
					}
					var text = document.createElement("span");text.innerHTML = message;
					var text = '<span class="StockShown">'+message+'</span>';
					$(this).find(".StockShownLoad").remove();
  					$(this).find(".olpCondition").append(text);
  					var SellerName=$(this).find(".olpSellerColumn").find(".olpSellerName").find("a").html();
  					if(typeof SellerName=="undefined")
  					{
  							SellerName="Amazon";
  					}
  					var curPrice=currencySign+offers[sellerid][lengthG].price;
  					if(offers[sellerid][lengthG].shippingPrice>0)
  					{
  						curPrice=curPrice+" + "+currencySign+offers[sellerid][lengthG].shippingPrice;
  					}
  					var FbaFbm;
  					if(offers[sellerid][lengthG].isNotFBA)
  					{
  						FbaFbm="FBM";
  					}
  					else
  					{
  						FbaFbm="FBA";
  					}
  					offers[sellerid].pop();
  					htmltable+="<tr><td>"+SellerName+"</td><td><font style='color:#18c187'>Qty: "+message+"</font></td><td>"+curPrice+"</td><td>"+FbaFbm+"</td></tr>";
  				}
			}
});
htmltable+="<tr><td colspan='4'>Please be aware of repricing and sellers having multiple listings this can effect results</td></tr>";
//htmltable+="</table></tbody>";
var htmlg='<div class="a-column a-span4" id="top10sellerdata" role="columnheader" style="width: 100%;align-items: right;text-align: center;font-size: 16px;font-weight:  900;">Top 10 Sellers<br><font color="#B12704" style="font-size:14px">Please don\'t close page while fetching seller stock qty.</font></div>';
      		$("[role^=columnheader]",doc).parent().html(htmlg);	
      if ($offerList.length > 0) {
        $offerList.find('.a-span-last').remove();
        $offerList.find('.a-span2 .a-spacing-small').remove();
        $offerList.find('.a-column.a-span3:nth-child(4)').remove();
        $offerList.find('.olpDeliveryColumn').remove();
        var lastRow = $offerList.find('.a-row').get(5);
        if (lastRow) {
          //$(lastRow).nextAll().remove();
        }
        $offerList.find('.a-section').removeClass('a-spacing-double-large');

        $offerList.find('.a-column').css('width', '30%');
        $offerList.find('#top10sellerdata').css('width', '100%');
        htmlWithQuantity=$('#olpOfferList',doc).html();
        /*if(PopUpOpen)
        {
        	//$('#olpOfferList').html(htmlWithQuantity);
        	//$('.overlaydiv').hide();
        }*/
        //$('#olpOfferList').html(htmlWithQuantity);
        htmlWithQuantity=htmltable;
        $('#tableid').html(htmltable);
        defaultStock=true;
      }
      chrome.storage.sync.get(["DisableStockChecker","DisableStockCheckerOld"],function(DisableStockCheckerobj){
	if(typeof DisableStockCheckerobj.DisableStockChecker=="undefined" || DisableStockCheckerobj.DisableStockChecker)
	{
		if(typeof DisableStockCheckerobj.DisableStockCheckerOld=="undefined" || DisableStockCheckerobj.DisableStockCheckerOld)
		{
			//newAddToCart2(1,docobj);
		}
		else
		{
			clearCart();
		}
		//newAddToCart2(1,docobj);
		//kkkretrieveQuantities(docobj)
		//retrieveQuantities(docobj);
	}
	});
      
}
function addIframe()
{
	var amazonUrl = 'https://www.'+domain+'/gp/cart/view.html/ref=nav_cart';
		var iframurl='https://www.'+domain;
		var frame = document.createElement("iframe");
		frame.src = 'https://www.'+domain+'/?hotty=toddy';
		frame.addEventListener("load", function i(e) {
			e.target.removeEventListener(e.type, i);
			frame.src = amazonUrl;
			
		});
		document.body.appendChild(frame);
}


function get_domain() {
    var a = document.createElement('a');
    a.setAttribute('href', window.location.href);
    return a.hostname;
}
async function DeleteCartLoop(result,loopstart)
{
	console.log("DeleteCartLoop");
		var urlNewAdded=$(location).attr('href');
    	var asinNewAdded=parseAsinNewAdded(urlNewAdded);
    	var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
		var parser = new DOMParser();
      	var doc = parser.parseFromString(result, 'text/html');
      	var items = $('div[data-asin]',doc);
      	var fromAUI=$('input[name="fromAUI"]',doc).val();
      	var requestID=$('input[name="requestID"]',doc).val();
    	var timeStamp=$('input[name="timeStamp"]',doc).val();
    	var token=$('input[name="token"]',doc).val();
    	var pageAction="delete-active";
    	var actionType="delete";
    	if(loopstart < items.length)
    	{
    		var cartDeleteUrl='https://www.amazon.'+RegionNewAdded+'/gp/cart/ajax-update.html/ref=ox_sc_cart_delete_1';
    		var offerId = items[loopstart].getAttribute('data-encoded-offering');
			var itemid=items[loopstart].getAttribute('data-itemid');
			var asin=items[loopstart].getAttribute('data-asin');
			var ajaxdata={};
			ajaxdata['asin']=asin;
			ajaxdata['encodedOffering']=offerId;
			ajaxdata['actionItemID']=itemid;
			ajaxdata['actionType']=actionType;
			ajaxdata['pageAction']=pageAction;
			ajaxdata['requestID']=requestID;
			ajaxdata['timeStamp']=timeStamp;
			ajaxdata['token']=token;
			ajaxdata['submit.delete.'+itemid]=1;
			$.ajax({
        			type: 'POST',
        			url: cartDeleteUrl,
        			data: ajaxdata,
        			dataType: 'json',
        			success: function(resultData) {
        			loopstart++;
        			if(loopstart < items.length)
        			{
        				DeleteCartLoop(result,loopstart);
        			}
        			else
        			{
        				getItemsFromCart();
        			}
        			},
        			error: function(e) {console.log(e.message)}
      				});
    	}
}
async function getItemsFromCart()
{
	var urlNewAdded=$(location).attr('href');
    var asinNewAdded=parseAsinNewAdded(urlNewAdded);
    var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
    var cartUrl='https://www.amazon.'+RegionNewAdded+'/gp/cart/view.html/ref=nav_cart';
	$.get(cartUrl).then(function (result) {
		DeleteCartLoop(result,0);
	}).fail(function (e) {
      console.log(e.message);
    });
}
function ajaxpostDeletecall(result)
{
	console.log("ajaxpostDeletecall");
	var parser = new DOMParser();
    var doc = parser.parseFromString(result, 'text/html');
    var items = $('div[data-asin]',doc);
    var fromAUI=$('input[name="fromAUI"]',doc).val();
    var requestID=$('input[name="requestID"]',doc).val();
    var timeStamp=$('input[name="timeStamp"]',doc).val();
    var token=$('input[name="token"]',doc).val();
    var pageAction="delete-active";
    var actionType="delete";
    var urlNewAdded=$(location).attr('href');
    var asinNewAdded=parseAsinNewAdded(urlNewAdded);
    var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
    var cartUrl='https://www.amazon.'+RegionNewAdded+'/gp/cart/ajax-update.html/ref=ox_sc_cart_delete_1';
    //'https://www.amazon.co.uk/gp/cart/ajax-update.html/ref=ox_sc_cart_delete_1',
    if(typeof items[0] != 'undefined')
    {
		var offerId0 = items[0].getAttribute('data-encoded-offering');
		var itemid0=items[0].getAttribute('data-itemid');
		var asin0=items[0].getAttribute('data-asin');
		var ajaxdata0={};
		ajaxdata0['asin']=asin0;
		ajaxdata0['encodedOffering']=offerId0;
		ajaxdata0['actionItemID']=itemid0;
		ajaxdata0['actionType']=actionType;
		ajaxdata0['pageAction']=pageAction;
		ajaxdata0['requestID']=requestID;
		ajaxdata0['timeStamp']=timeStamp;
		ajaxdata0['token']=token;
		ajaxdata0['submit.delete.'+itemid0]=1;
		$.ajax({
        type: 'POST',
        url: cartUrl,
        data: ajaxdata0,
        dataType: 'json',
        success: function(resultData) {
          if(typeof items[1] != 'undefined')
    		{
				var offerId1 = items[1].getAttribute('data-encoded-offering');
				var itemid1=items[1].getAttribute('data-itemid');
				var asin1=items[1].getAttribute('data-asin');
				var ajaxdata1={};
				ajaxdata1['asin']=asin1;
				ajaxdata1['encodedOffering']=offerId1;
				ajaxdata1['actionItemID']=itemid1;
				ajaxdata1['actionType']=actionType;
				ajaxdata1['pageAction']=pageAction;
				ajaxdata1['requestID']=requestID;
				ajaxdata1['timeStamp']=timeStamp;
				ajaxdata1['token']=token;
				ajaxdata1['submit.delete.'+itemid1]=1;
			    $.ajax({
        		type: 'POST',
        		url: cartUrl,
        		data: ajaxdata1,
        		dataType: 'json',
        		success: function(resultData) {
          		if(typeof items[2] != 'undefined')
    			{
					var offerId2 = items[2].getAttribute('data-encoded-offering');
					var itemid2=items[2].getAttribute('data-itemid');
					var asin2=items[2].getAttribute('data-asin');
	
					var ajaxdata2={};
					ajaxdata2['asin']=asin2;
					ajaxdata2['encodedOffering']=offerId2;
					ajaxdata2['actionItemID']=itemid2;
					ajaxdata2['actionType']=actionType;
					ajaxdata2['pageAction']=pageAction;
					ajaxdata2['requestID']=requestID;
					ajaxdata2['timeStamp']=timeStamp;
					ajaxdata2['token']=token;
					ajaxdata2['submit.delete.'+itemid2]=1;
			     	$.ajax({
        			type: 'POST',
        			url: cartUrl,
        			data: ajaxdata2,
        			dataType: 'json',
        			success: function(resultData) {
          			if(typeof items[3] != 'undefined')
    				{
						var offerId3 = items[3].getAttribute('data-encoded-offering');
						var itemid3=items[3].getAttribute('data-itemid');
						var asin3=items[3].getAttribute('data-asin');
						var ajaxdata3={};
						var ajaxsucces=false;
						ajaxdata3['asin']=asin3;
						ajaxdata3['encodedOffering']=offerId3;
						ajaxdata3['actionItemID']=itemid3;
						ajaxdata3['actionType']=actionType;
						ajaxdata3['pageAction']=pageAction;
						ajaxdata3['requestID']=requestID;
						ajaxdata3['timeStamp']=timeStamp;
						ajaxdata3['token']=token;
						ajaxdata3['submit.delete.'+itemid3]=1;
			     		$.ajax({
        				type: 'POST',
        				url: cartUrl,
        				data: ajaxdata3,
        				dataType: 'json',
        				success: function(resultData) {
          				if(typeof items[4] != 'undefined')
    					{
							var offerId4 = items[4].getAttribute('data-encoded-offering');
							var itemid4=items[4].getAttribute('data-itemid');
							var asin4=items[4].getAttribute('data-asin');
							var ajaxdata4={};
							var ajaxsucces=false;
							ajaxdata4['asin']=asin4;
							ajaxdata4['encodedOffering']=offerId4;
							ajaxdata4['actionItemID']=itemid4;
							ajaxdata4['actionType']=actionType;
							ajaxdata4['pageAction']=pageAction;
							ajaxdata4['requestID']=requestID;
							ajaxdata4['timeStamp']=timeStamp;
							ajaxdata4['token']=token;
							ajaxdata4['submit.delete.'+itemid4]=1;
			     			$.ajax({
        					type: 'POST',
        					url: cartUrl,
        					data: ajaxdata4,
        					dataType: 'json',
        					success: function(resultData) {
          					if(typeof items[5] != 'undefined')
    						{
								var offerId5 = items[5].getAttribute('data-encoded-offering');
								var itemid5=items[5].getAttribute('data-itemid');
								var asin5=items[5].getAttribute('data-asin');
								var ajaxdata5={};
								ajaxdata5['asin']=asin5;
								ajaxdata5['encodedOffering']=offerId5;
								ajaxdata5['actionItemID']=itemid5;
								ajaxdata5['actionType']=actionType;
								ajaxdata5['pageAction']=pageAction;
								ajaxdata5['requestID']=requestID;
								ajaxdata5['timeStamp']=timeStamp;
								ajaxdata5['token']=token;
								ajaxdata5['submit.delete.'+itemid5]=1;
			     				$.ajax({
        						type: 'POST',
        						url: cartUrl,
        						data: ajaxdata5,
        						dataType: 'json',
        						success: function(resultData) {
          						if(typeof items[6] != 'undefined')
    							{
									var offerId6 = items[6].getAttribute('data-encoded-offering');
									var itemid6=items[6].getAttribute('data-itemid');
									var asin6=items[6].getAttribute('data-asin');
									var ajaxdata6={};
									ajaxdata6['asin']=asin6;
									ajaxdata6['encodedOffering']=offerId6;
									ajaxdata6['actionItemID']=itemid6;
									ajaxdata6['actionType']=actionType;
									ajaxdata6['pageAction']=pageAction;
									ajaxdata6['requestID']=requestID;
									ajaxdata6['timeStamp']=timeStamp;
									ajaxdata6['token']=token;
									ajaxdata6['submit.delete.'+itemid6]=1;
			     					$.ajax({
        							type: 'POST',
        							url: cartUrl,
        							data: ajaxdata6,
        							dataType: 'json',
        							success: function(resultData) {
          							if(typeof items[7] != 'undefined')
    								{
										var offerId7 = items[7].getAttribute('data-encoded-offering');
										var itemid7=items[7].getAttribute('data-itemid');
										var asin7=items[7].getAttribute('data-asin');
										var ajaxdata7={};
										ajaxdata7['asin']=asin7;
										ajaxdata7['encodedOffering']=offerId7;
										ajaxdata7['actionItemID']=itemid7;
										ajaxdata7['actionType']=actionType;
										ajaxdata7['pageAction']=pageAction;
										ajaxdata7['requestID']=requestID;
										ajaxdata7['timeStamp']=timeStamp;
										ajaxdata7['token']=token;
										ajaxdata7['submit.delete.'+itemid7]=1;
			     						$.ajax({
        								type: 'POST',
        								url: cartUrl,
        								data: ajaxdata7,
        								dataType: 'json',
        								success: function(resultData) {
          								if(typeof items[8] != 'undefined')
    									{
											var offerId8 = items[8].getAttribute('data-encoded-offering');
											var itemid8=items[8].getAttribute('data-itemid');
											var asin8=items[8].getAttribute('data-asin');
											var ajaxdata8={};

											ajaxdata8['asin']=asin8;
											ajaxdata8['encodedOffering']=offerId8;
											ajaxdata8['actionItemID']=itemid8;
											ajaxdata8['actionType']=actionType;
											ajaxdata8['pageAction']=pageAction;
											ajaxdata8['requestID']=requestID;
											ajaxdata8['timeStamp']=timeStamp;
											ajaxdata8['token']=token;
											ajaxdata8['submit.delete.'+itemid8]=1;
			     							$.ajax({
        									type: 'POST',
        									url: cartUrl,
        									data: ajaxdata8,
        									dataType: 'json',
        									success: function(resultData) {
											if(typeof items[9] != 'undefined')
    										{
												var offerId9 = items[9].getAttribute('data-encoded-offering');
												var itemid9=items[9].getAttribute('data-itemid');
												var asin9=items[9].getAttribute('data-asin');
												var ajaxdata9={};
												ajaxdata9['asin']=asin9;
												ajaxdata9['encodedOffering']=offerId9;
												ajaxdata9['actionItemID']=itemid9;
												ajaxdata9['actionType']=actionType;
												ajaxdata9['pageAction']=pageAction;
												ajaxdata9['requestID']=requestID;
												ajaxdata9['timeStamp']=timeStamp;
												ajaxdata9['token']=token;
												ajaxdata9['submit.delete.'+itemid9]=1;
			     								$.ajax({
        										type: 'POST',
        										url: cartUrl,
        										data: ajaxdata9,
        										dataType: 'json',
        										success: function(resultData) {
        										},
        										error: function(e) {console.log(e.message)}
      											});
    										}
        									},
        									error: function(e) {console.log(e.message)}
      										});
    									}
        								},
        								error: function(e) {console.log(e.message)}
      									});
    								}
        							},
        							error: function(e) {console.log(e.message)}
      								});
    							}
        						},
        						error: function(e) {console.log(e.message)}
      							});
    						}
        				},
        				error: function(e) {console.log(e.message)}
      					});
    				}
        				},
        				error: function(e) {console.log(e.message)}
      					});
    				}
        			},
        			error: function(e) {console.log(e.message)}
      				});
    			}
        		},
        		error: function(e) {console.log(e.message)}
      			});
    		}
        },
        error: function(e) {console.log(e.message)}
      	});
    	}
}
async function ajaxCallNEWNOW(url,docobj)
{
	$.get(url).then(function (result) 
	{
		var BGurlNewAdded=$(location).attr('href');
		chrome.runtime.sendMessage({
   			method: 'get',
    		action: 'CartDELETE',
    		url: BGurlNewAdded,
			}, function(response) {
				return new Promise((resolve) => { response});
				
			});
	
	}).fail(function (e) {
      //reject({ 'error': 'networkError', 'msg': e.message });
      console.log(e.message)
      return new Promise((reject) => {e});
    });
}
async function ajaxCall(url,docobj,deleteURL)
{
	var BGurlNewAdded=$(location).attr('href');
	chrome.runtime.sendMessage({
   			method: 'get',
    		action: 'CartDELETE',
    		url: BGurlNewAdded,
			}, function(response) {
				console.log("BGWORKED");
			});
	$.get(url).then(function (result) {
	var BGurlNewAdded=$(location).attr('href');
    var BGasinNewAdded=parseAsinNewAdded(BGurlNewAdded);
    var BGRegionNewAdded=extractCountryFromURLNewAdded(BGurlNewAdded);
    var BGcartUrl='https://www.amazon.'+RegionNewAdded+'/gp/cart/view.html/ref=nav_cart';
	/*chrome.runtime.sendMessage({
   			method: 'get',
    		action: 'CartDELETE',
    		url: BGcartUrl,
			}, function(response) {
				console.log("BGWORKED");
				
			});*/
      var parser = new DOMParser();
      var doc = parser.parseFromString(result, 'text/html');
      var items = $('div[data-asin]',doc);
      var fromAUI=$('input[name="fromAUI"]',doc).val();
      var requestID=$('input[name="requestID"]',doc).val();
    	var timeStamp=$('input[name="timeStamp"]',doc).val();
    	var token=$('input[name="token"]',doc).val();
    	var pageAction="delete-active";
    	var actionType="delete";
    	//ajaxpostDeletecall(result);
	if (items.length>0){
		var offers = [];
		for(var i = 0; i<items.length;i++){
			var quantity = parseInt(items[i].getAttribute('data-quantity'));
			var offerId = items[i].getAttribute('data-encoded-offering');
			var itemid=items[i].getAttribute('data-itemid');
			var asin=items[i].getAttribute('data-asin');
			var match = new RegExp('smid=([A-Z0-9]+)').exec(items[i].innerHTML);
			var merchantId;
			//getItemsFromCart();
			if (match){
				merchantId = match[1].replace(/"/g, "");
			}
			offers.push({offerId: offerId, quantity: quantity, merchantId: merchantId});
			globalOffers.push({offerId: offerId, quantity: quantity, merchantId: merchantId});
		}
	}
	displayResults(offers,docobj);
      }).fail(function (e) {
      //reject({ 'error': 'networkError', 'msg': e.message });
      console.log(e.message)
    });
}
function findRank($rankEl)
{
	const rankRe = /([0-9,\.]+) (?:Paid)?(?:in|en) (.*?) \(/;
	var rank=0;
	var $rankEltext=$rankEl.text().replace("Clasificación en los más vendidos de Amazon:","gasamazon:");

      $rankEltext=$rankEltext.replace("&nbsp;"," ");
	  $rankEltext=$rankEltext.replace("Amazon Bestseller-Rang","gasamazon:");
	  $rankEltext=$rankEltext.replace("Classement des meilleures ventes d\'Amazon:","gasamazon:");
	  $rankEltext=$rankEltext.replace("Posizione nella classifica Bestseller di Amazon:","gasamazon:");
	  $rankEltext=$rankEltext.replace("Amazon Bestsellers Rank","gasamazon:");
      $rankEltext=$rankEltext.replace("Nr.","gasamazon:");
      $rankEltext=$rankEltext.replace("Best-sellers rank","gasamazon:");
      $rankEltext=$rankEltext.replace("gasamazon:","");
      var firstword = $rankEltext.slice(0, $rankEltext.indexOf(" "));
      if(firstword=="in")
	  {
          $rankEltext=$rankEltext.replace("in ","");
	  }

    let matches = $rankEltext.match(rankRe);
    
    var $rankELFinal=$rankEltext.trim();
    var $gotrankdata=$rankELFinal.split(" ");
    var $gotcatdata=$rankELFinal.split(">");
    if (matches) {
    matches[1]=matches[1].trim();
      rank = parseInt(matches[1].replace(/[^\d]/g, ''), 10);
}
return rank;
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function doDeleteF(){
	$('iframe').each(function( index ,obj) {
	var buttons = $('iframe').contents().find('[value=Delete]');
		buttons[index].click();
		$(this).remove();
});
}
function doDeleteBG() {
    var a = document.querySelectorAll("[value=Delete]");
    if (0 < a.length)
    {
        for (var b = 0; b < a.length; b++) a[b].click();
        }
    else if (a = document.querySelectorAll(".sc-action-delete"))
        for (b = 0; b < a.length; b++) a[b].getElementsByTagName("input")[0].click();
    (a = document.querySelectorAll("[value=Delete]")) && setTimeout(doDelete, 300);
    localStorage.clear(function() {
        console.log("cleared storage")
    })
};
async function doDelete(){
	var buttons = $('iframe').contents().find('[value=Delete]');
	if (buttons.length>0){
		for(var i=0;i<buttons.length;i++){
			buttons[i].click();
		}
	} else {
		// old amazon code?
		buttons = $('iframe').contents().find('.sc-action-delete');
		if (buttons){
			for(var i=0;i<buttons.length;i++){
				var submit = buttons[i].getElementsByTagName("input")[0];
				submit.click();
			}
		}
	}
	buttons = $('iframe').contents().find('[value=Delete]');
	if (buttons){
		setTimeout(doDelete,300);
	}
	localStorage.clear(function() {
		console.log("cleared storage");
	});
}
function DeleteQuantities(){
	var buttons = $('iframe').contents().find('[value=Delete]');
	if (buttons.length>0){
		buttoncartfound=true;
		for(var i=0;i<buttons.length;i++){
			buttons[i].click();
			if(i>0)
			{
				buttoncartfound=false;
			}
		}
		}
if((buttons.length>0 && buttoncartfound==true) || buttoncartfound==false)
{
	
		setTimeout(DeleteQuantities,700);
	}
}
async function retrieveQuantitiesOBSOLUTE(docobj){
	var offers = workingOffers;
	//console.log("workingOffers====",workingOffers);
	/*var amazonUrl = 'https://www.'+domain+'/gp/aws/cart/add.html?';
	var amazonUrlDELETE = 'https://www.'+domain+'/gp/aws/cart/add.html?';
	var amazonUrlnew = 'https://www.'+domain+'/gp/aws/cart/add.html?';
	for (var i =0;i<offers.length;i++){
		var offer = offers[i];
		amazonUrl+='OfferListingId.'+(i+1)+'='+offer.offerId+'&Quantity.'+(i+1)+'=999&';
		amazonUrlDELETE+='OfferListingId.'+(i+1)+'='+offer.offerId+'&Quantity.'+(i+1)+'=0&';
		//console.log("Call="+i);
		//await ajaxCallNEWNOW(amazonUrlnew+'OfferListingId.'+(i+1)+'='+offer.offerId+'&Quantity.'+(i+1)+'=999&SessionId='+sessionIdConfirmPage+"&confirmPage=confirm&add.x=70&add.y=12",docobj);;
	}

	var fullamazonurl="";
	var newUrl=amazonUrl+"SessionId="+sessionIdConfirmPage+"&confirmPage=confirm&add.x=70&add.y=12";
	//var newUrl=amazonUrl+"&confirmPage=confirm&add.x=70&add.y=12";
	var deleteURL=amazonUrlDELETE+"SessionId="+sessionIdConfirmPage+"&confirmPage=confirm&add.x=70&add.y=12";
	ajaxCall(newUrl,docobj,deleteURL);*/
	//responseArray[MarchantIDG]=[];
    //responseArray[MarchantIDG].push({merchantID:MarchantIDG,offeringID:OfferingID,asin:ASING,shippingPrice: shippingPrice,stock:Stock,price:PriceG,isNotFBA:MFAFBMG});
	//b = "https://www." + domain + "/gp/aws/cart/add.html?"
	for (var a = workingOffers, b = "https://www." + domain + "/gp/aws/cart/add.html?", c = 0; c < a.length; c++) b += "OfferListingId." + (c + 1) + "=" + a[c].offerId + "&Quantity." + (c + 1) + "=999&";
    b += "hotty=toddy";
        var d = document.createElement("iframe");
        //d.src = b+"&SessionId="+sessionIdConfirmPage+"&confirmPage=confirm&add.x=70&add.y=12&add=add";
        //console.log("URL=====",b+"&SessionId="+sessionIdConfirmPage+"&confirmPage=confirm&add.x=70&add.y=12&add=add");
        d.src = "https://www." + domain + "/?hotty=toddy";
        d.name = "MyIframe";
        d.id = "MyIframe";
        d.style = "z-index:-10;margin-top: -180px;position: absolute;";
        d.addEventListener("load", function h(a) {
            a.target.removeEventListener(a.type,
                h);
                d.src=b;
                var f = setInterval(function() {
                if ("complete" === document.readyState) {
            if (typeof MyIframe.document.getElementsByName("add")[0] !="undefined") {
                clearInterval(f);
                var b = MyIframe.document.getElementsByName("add")[0];
                b ? (console.log("form found and submitting: " , b), KKclickit(b,docobj)) : KKdone(docobj);
            }
            }
        }, 100)     
        });
        document.body.insertBefore(d,document.body.firstChild);
}
function clearCart() {
    fetch("/gp/cart/view.html?ref_=nav_cart", {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(function(a) {
    	console.log("delete called");
        return a.text().then(function(a) {
            a = (new DOMParser).parseFromString(a, "text/html").getElementById("activeCartViewForm");
            var b = new URLSearchParams;
            b.append(a.getElementsByClassName("sc-action-delete")[0].getElementsByTagName("input")[0].name, "1");
            b.append("requestID", a.elements.requestID.value);
            b.append("token", a.elements.token.value);
            b.append("timeStamp",
                a.elements.timeStamp.value);
            b.append("fromAUI", "1");
            b.append("pageAction", "delete-active");
            b.append("actionType", "delete");
            fetch("/gp/cart/ajax-update.html/ref=ox_sc_cart_delete_1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: b
            }).then(function(a) {
                return a.text().then(function(a) {})
            })
        })
    })
};
function newAddToCart2(num,docobj)
{
	var asinNewAdded=parseAsinNewAdded(location.href);
	chrome.runtime.sendMessage({
   			method: 'POST',
    		action: 'AddToCart',
    		data: {
          		alreadyFoundSellers: workingOffers,
          		ASIN: asinNewAdded,
          		domain: domain,
        		}
			}, function(response) {
			displayResultsAddCart(response,docobj);
			})
}
function newAddToCart(num,docobj)
{
	var asinNewAdded=parseAsinNewAdded(location.href);
	chrome.runtime.sendMessage({
   			method: 'POST',
    		action: 'AddToCart',
    		data: {
          		alreadyFoundSellers: workingOffers,
          		ASIN: asinNewAdded,
          		domain: domain,
        		}
			}, function(response) {
			delete workingOffers;
			displayResultsAddCart(response,docobj);
			})
}
async function retrieveQuantities(docobj,num=1,offersjust = []){
newAddToCart(num,docobj);
}
async function kkkretrieveQuantities(docobj,num=1,offersjust = []){
	//var offers = workingOffers;
	//newAddToCart(num);
	var offers = alreadyFoundSellers;
	console.log("alreadyFoundSellers==",alreadyFoundSellers);
	if(num>alreadyFoundSellers.length)
	{
		displayResults2(globalOffers,docobj);
	}
	else
	{
		$('#MyIframe1').remove();
		var amazonUrl = 'https://www.'+domain+'/gp/aws/cart/add.html?';
		var amazonUrl = 'https://www.'+domain+'/gp/item-dispatch/ref=dp_ebb_1?ie=UTF8&registryItemID.1=&submit.addToCart=addToCart&registryID.1=&';
		var amazonUrlDELETE = 'https://www.'+domain+'/gp/aws/cart/add.html?';
		var amazonUrlnew = 'https://www.'+domain+'/gp/aws/cart/add.html?';
		var d = document.createElement("iframe");
		var sourceURL='';
        var offer = offers[num-1];
        AmazonScript.executeNextOfferScript();
        sourceURL=amazonUrl+'OfferListingId.1='+offer.offerId+'&Quantity.1=999&SessionId='+sessionIdConfirmPage+"&itemCount=999&app=hm&messageID=" + num;
        //sourceURL=amazonUrl+'OfferListingId.1='+offer.offerId+'&Quantity.1=999&SessionId='+sessionIdConfirmPage+"&app=hm&messageID=msg" + num + "&requestID=" + num + "";
        //d.src = "https://www." + domain + "/?hotty=toddy";
        console.log("sourceURL===",sourceURL);
        d.src=sourceURL;
        d.name = "MyIframe1";
        d.id = "MyIframe1";
        d.style = "z-index:-10;margin-top: -200px;position: absolute;";
        d.addEventListener("load", function h(a) {
            /*a.target.removeEventListener(a.type,
                h);*/
               if(sourceURL.trim()!=='')
               {
                	//d.src=sourceURL;
                	
                	var f = setInterval(function() {
                	var checkdata=MyIframe1.document.querySelectorAll("div[data-asin]");
                	if(checkdata.length)
                	{
                		if(parseInt(checkdata[0].getAttribute("data-quantity"))==10)
                		{
                			var hee=0;
                			if(MyIframe1.document.querySelectorAll('.sc-product-scarcity').length)
                			{
                				clearInterval(f);
                				var extractFrom=MyIframe1.document.querySelectorAll('.sc-product-scarcity')[0].innerHTML.trim();
                				var numbers = extractFrom.match(/\d+/g).map(Number);
                				MyIframe1.document.querySelectorAll("div[data-asin]")[0].setAttribute('data-quantity',parseInt(numbers[0]));
                				KKdoneJust(docobj,num,offersjust);
                			}
                			else
                			{
                				clearInterval(f);
                				MyIframe1.document.querySelectorAll("input[name^='quantityBox']")[0].value="999";
                				var objinn=MyIframe1.document.querySelectorAll(".aok-hidden")[0];
                				var objinnToBeClicked=MyIframe1.document.querySelectorAll("[data-action^='update']")[0];
                				$(objinn).removeClass('aok-hidden');
                				KKclickitJustMore(objinnToBeClicked,docobj,num,offersjust);
                			}
                			
                		}
                		else
                		{
                			KKdoneJust(docobj,num,offersjust);
                			clearInterval(f);
                		}
                		
                	}
        }, 100)
                	
                }
                /*var f = setInterval(function() {
                
            if (typeof MyIframe.document.getElementsByName("add")[0] !="undefined") {
                clearInterval(f);
                var b = MyIframe.document.getElementsByName("add")[0];
                b ? (console.log("form found and submitting: " + b), KKclickit(b,docobj)) : KKdone(docobj);
            }
        }, 100)*/
          
        });
        document.body.insertBefore(d,document.body.firstChild);
    }

}
var KKclickitJust = function(a,docobj,num,offersjust,dataencodingoffer="testin") {
    var b = MyIframe1.document.createEvent("MouseEvents");
    b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
    a.dispatchEvent(b);
     var zaadinterval=1;
    var f = setInterval(function() {
    zaadinterval++;
    //console.log("removed 1->",MyIframe.document.querySelectorAll("div[data-encoded-offering^='"+dataencodingoffer+"']")[0].getAttribute('data-removed'));
    if(!MyIframe1.document.querySelectorAll("div[data-encoded-offering^='"+dataencodingoffer+"']").length)
    {
    	clearInterval(f);
    	$('#MyIframe1').remove();
		num++;
		retrieveQuantities(docobj,num,offersjust);
    	
    }
    else
    {
    	if(typeof MyIframe1.document.querySelectorAll("div[data-encoded-offering^='"+dataencodingoffer+"']")[0].getAttribute('data-removed')!='undefined' && MyIframe1.document.querySelectorAll("div[data-encoded-offering^='"+dataencodingoffer+"']")[0].getAttribute('data-removed')=="true")
    	{
    		clearInterval(f);
    		$('#MyIframe1').remove();
			num++;
			retrieveQuantities(docobj,num,offersjust);
    	}
    }
    if(zaadinterval>=300)
    {
    	clearInterval(f);
    	displayResults(offersjust,docobj)
    }
    },100);
    /*if(MyIframe.document.querySelectorAll("div[data-asin]").length || MyIframe.document.querySelectorAll("[data-name^='Empty']").length)
    {
		$('#MyIframe').remove();
		num++;
		retrieveQuantities(docobj,num,offersjust);
	}*/
};
var KKclickitJustMore = function(a,docobj,num,offersjust,dataencodingoffer="testin") {
    var b = MyIframe1.document.createEvent("MouseEvents");
    b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
    var zaadinterval=1;
     var f = setInterval(function() {
    a.dispatchEvent(b);
    var objt=MyIframe1.document.querySelectorAll("div[data-asin]")[0];
    zaadinterval++;
    if($(objt).find('.aok-hidden').length)
    {
    	clearInterval(f);
    	KKdoneJust(docobj,num,offersjust);
    }
    if(zaadinterval>=300)
    {
    	clearInterval(f);
    	displayResults(offersjust,docobj)
    }
    },100);
};

function KKdoneJust(docobj,num,offersjust) {
    var a = MyIframe1.document.querySelectorAll("div[data-asin]");
    var dataencodingoffer="";
    if (0 < a.length) {
        for (var b = [], c = 0; c < a.length; c++) {
            var e = parseInt(a[c].getAttribute("data-quantity")),
                g = a[c].getAttribute("data-encoded-offering"),
                f = /smid=([A-Z0-9]+)/.exec(a[c].innerHTML),
                d;
                dataencodingoffer=g;
            f && (d = f[1].replace(/"/g, ""));
            b.push({
                offerId: g,
                quantity: e,
                merchantId: d
            });
            offersjust.push({offerId: g, quantity: e, merchantId: d});
            globalOffers[d]=new Array({offerId: g, quantity: e, merchantId: d});
			//globalOffers.push({offerId: g, quantity: e, merchantId: d});
			
        }
        var tobeClicked=MyIframe1.document.querySelectorAll("input[name^='submit.delete.']")[0];
        KKclickitJust(tobeClicked,docobj,num,offersjust,dataencodingoffer);
		//displayResults(offers,docobj);
		//$('#MyIframe').remove();
    }
}
var KKclickit = function(a,docobj) {
    var b = MyIframe.document.createEvent("MouseEvents");
    MyIframe.document.querySelectorAll(".af-marker").forEach(e => e.parentNode.removeChild(e));
	MyIframe.document.querySelectorAll(".fn-marker").forEach(e => e.parentNode.removeChild(e));
	MyIframe.document.querySelectorAll(".af-marker").forEach(e => e.parentNode.removeChild(e));
	MyIframe.document.querySelectorAll("noscript").forEach(e => e.parentNode.removeChild(e));
	$('#MyIframe').contents().find('noscript').remove();;
    $('#MyIframe').contents().find(".fn-marker").remove();
    $('#MyIframe').contents().find(".af-marker").remove();
	$(MyIframe.document).find(".af-marker").remove();
	$(MyIframe.document).find(".fn-marker").remove();
	$(MyIframe.document).find("noscript").remove();
    b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
    a.dispatchEvent(b);
    //console.log( $('#MyIframe').find('[name="add"]'));
    //$('#MyIframe').find('[name="add"]').trigger("click");
   var f = setInterval(function() {
   if ("complete" === document.readyState) {
                var a = MyIframe.document.querySelectorAll("div[data-asin]");
            if (a.length>0) {
                clearInterval(f);
                 KKdone(docobj)
            }
        }
        }, 100)
};

function getForm() {
    var a = document.getElementsByTagName("form"),
        b;
    for (b in a)
        if (a[b].action && -1 < a[b].action.indexOf("cart/add")) return a[b]
}

function KKdone(docobj) {

	MyIframe.document.querySelectorAll(".af-marker").forEach(e => e.parentNode.removeChild(e));
	MyIframe.document.querySelectorAll(".fn-marker").forEach(e => e.parentNode.removeChild(e));
	$(MyIframe.document).find(".af-marker").remove();
	$(MyIframe.document).find(".fn-marker").remove();
	$(MyIframe.document).find("noscript").remove();
	$('#MyIframe').contents().find('noscript').remove();;
    $('#MyIframe').contents().find(".fn-marker").remove();
     $('#MyIframe').contents().find(".af-marker").remove();
    var a = MyIframe.document.querySelectorAll("div[data-asin]");
    var offers = [];
    if (0 < a.length) {
        for (var b = [], c = 0; c < a.length; c++) {
            var e = parseInt(a[c].getAttribute("data-quantity")),
                g = a[c].getAttribute("data-encoded-offering"),
                f = /smid=([A-Z0-9]+)/.exec(a[c].innerHTML),
                d;
            f && (d = f[1].replace(/"/g, ""));
            b.push({
                offerId: g,
                quantity: e,
                merchantId: d
            });
            if(typeof responseArrayGlobal[d]=="undefined")
            {
             	responseArrayGlobal[d]=[];
             }
             responseArrayGlobal[d].push({merchantID:d,offeringID:g,asin:workingOffersAssoc[d][0].asin,shippingPrice: workingOffersAssoc[d][0].shippingPrice,stock:e,price:workingOffersAssoc[d][0].price,isNotFBA:workingOffersAssoc[d][0].fba});
            if(e>=10 )
            {
            	if(typeof responseArrayGlobalCalled[d]=="undefined")
            	{
            		
            		responseArrayGlobalCalled[d]=1;
            		$('#MyIframe').contents().find('[data-encoded-offering="'+g+'"]').find("[name='quantityBox']").val(999);
            		$('#MyIframe').contents().find('[data-encoded-offering="'+g+'"]').find("[name='quantityBox']").attr("value",999);
            		$(a[c]).find("[name='quantityBox']").val(999);
            		$(a[c]).find("[name='quantityBox']").attr("value",999);
            		KKclickit(a[c].querySelectorAll("a[data-action='update']")[0],docobj);
            		break; 
            		return false;
            	}
            	else if(responseArrayGlobalCalled[d]==1)
            	{
            		responseArrayGlobalCalled[d]=2;
            		KKclickit(a[c].querySelectorAll("[data-action='delete']")[0],docobj);
            		break; 
            		return false;
            	}
            	responseArrayGlobal[d].push({merchantID:d,offeringID:g,asin:workingOffersAssoc[d][0].asin,shippingPrice: workingOffersAssoc[d][0].shippingPrice,stock:e+"+",price:workingOffersAssoc[d][0].price,isNotFBA:workingOffersAssoc[d][0].fba});
            	//
            	/*for (var j = 0; j < workingOffers.length; j++) 
            	{
            		if(workingOffers[j].merchantId==d)
            		{
            			alreadyFoundSellers.push({offerId: workingOffers[j].offerId, quantity: e, merchantId: d});
            			break;
            		}
            	}*/
            }
            else
            {
            	if(typeof responseArrayGlobalCalled[d]=="undefined")
            	{
            		responseArrayGlobalCalled[d]=[];
            		KKclickit(a[c].querySelectorAll("input[data-action='delete']")[0],docobj);
            		break;
            		return false;
            	}
            }
            offers.push({offerId: g, quantity: e, merchantId: d});
			//globalOffers.push({offerId: g, quantity: e, merchantId: d});
			globalOffers[d]=new Array({offerId: g, quantity: e, merchantId: d});
        }
        defaultStockObj=docobj;
		//displayResults(offers,docobj);
		displayResultsAddCart(responseArrayGlobal,docobj)
		//MyIframe.src="https://www.amazon.co.uk/gp/aw/c/";
		//$('#MyIframe').remove();
    }
}

function KKdoDelete() {
    var a = MyIframe.document.querySelectorAll("[value=Delete]");
    if (0 < a.length)
        for (var b = 0; b < a.length; b++) a[b].click();
    else if (a = MyIframe.document.querySelectorAll(".sc-action-delete"))
        for (b = 0; b < a.length; b++) a[b].getElementsByTagName("input")[0].click();
    (a = MyIframe.document.querySelectorAll("[value=Delete]")) && setTimeout(KKdoDelete, 300);
    localStorage.clear(function() {
        console.log("cleared storage")
    })
};




function parseAsin(url) {
  var asin;
  if(url.indexOf('/dp/')<0 && url.indexOf('/d/')>0)
  {
  		var splited=url.split('/');
  		for(var i=0;i<splited.length;i++)
  		{
  			if(splited[i].length==10)
  			{
  				return splited[i];
  			}
  		}
  }
  else
  {
  	return (asin = /https?:\/\/www.amazon.[\s\S]*?\/([A-Za-z0-9]{8,20})[\/?]/.exec(url + '/')) ? asin[1] : null;
  		
  }
}
function getOptions() {
  const OPTIONS_KEYS = ['taxRate','vatFlatRate','efnAdjustment','fbmflag', 'transitCost', 'feeAdjustment', 'profitAdjustment', 'inboundShipping', 'inboundShippingUS', 'fixedPrepFee'];

  return new Promise((resolve) => {
    chrome.storage.sync.get(OPTIONS_KEYS, function (localStorage) {
      resolve(localStorage);
    });
  });
}

function getExchangeRate(from, to) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ 'name': 'rates', from, to }, (rate) => {
      resolve(rate);
    });
  })
}

const COUNTRY_CODES = {
  'com': 'US',
  'co.uk': 'UK',
  'de': 'DE',
  'fr': 'FR',
  'es': 'ES',
  'it': 'IT',
}
const COUNTRY_FLAG = {
  'com': '<img src="'+chrome.extension.getURL('img/USflag1.png')+'" title="US" >',
  'co.uk': '<img src="'+chrome.extension.getURL('img/UKflag1.png')+'" title="UK" >',
  'de': '<img src="'+chrome.extension.getURL('img/DEflag1.png')+'" title="DE">',
  'fr': '<img src="'+chrome.extension.getURL('img/FRflag1.png')+'" title="FR">',
  'es': '<img src="'+chrome.extension.getURL('img/ESflag1.png')+'" title="ES">',
  'it': '<img src="'+chrome.extension.getURL('img/ITflag1.png')+'" title="IT">',
}
const CURRENCIES = {
  'com': 'USD',
  'co.uk': 'GBP',
  'de': 'EUR',
  'fr': 'EUR',
  'es': 'EUR',
  'it': 'EUR',
}

/*const CURRENCY_SIGNS = {
  'com': '$',
  'co.uk': '£',
  'de': '€',
  'fr': '€',
  'es': '€',
  'it': '€',
}*/

const LANGS = {
  'com': 'en_US',
  'co.uk': 'en_GB',
  'de': 'de_DE',
  'fr': 'fr_FR',
  'es': 'es_ES',
  'it': 'it_IT',
}

function convertPrice(price, srcCurrency, currency) {
  if (srcCurrency === currency) {
    return Promise.resolve(price);
  }
  return getExchangeRate(srcCurrency, currency)
    .then(rate => price * rate);
}

function extractCountryFromURL(url) {
  if (!url) {
    return null
  };
  var re = /.+amazon\.([a-z.]{2,6})\/.*/;
  var match = url.match(re);
	if(match==null)
	return null;
  return match.length ? match[1] : null;
}

function adjustEuropeanNumber(number) {
  number = number + ' ';
  number = number.replace(/\,/g, '_');
  number = number.replace(/\./g, ',');
  number = number.replace(/_/g, '.');
  return number
}

function isEuropeanMarket(region) {
  region = region || extractCountryFromURL(window.location.href);
  var _0x47DA = ['de', 'fr', 'es', 'it'];
  if (_0x47DA.indexOf(region) > -1) {
    return true
  };
  return false
}

function getProductURL(region, asin) {
  return 'https://www.amazon.' + region + '/dp/' + asin
}

function extractPrice(doc, region) {
var price=0;
		$("#priceblock_ourprice_ifdmsg", doc).remove();
var newPriceSc=false;
if(typeof $(".price-info-superscript",doc).html()!="undefined")
{

	var Sup="00";
	var Sub=$('#priceblock_ourprice .price-large', doc).first().text().replace(/[^\d\.,]+/g, '');
	if($('.price-info-superscript', doc).first().text().replace(/[^\d\.,]+/g, '').trim()!="")
	{
		Sup=$('.price-info-superscript', doc).first().text().replace(/[^\d\.,]+/g, '');
	}
	price = Sub+"."+Sup;
	newPriceSc=true;
}
else
{
	//var indexof=$('#priceblock_ourprice, #priceblock_saleprice, #priceblock_dealprice', doc).first().text().indexOf(" - ");
	//console.log("indexof--->",indexof);
  price = $('#priceblock_ourprice, #priceblock_saleprice, #priceblock_dealprice', doc).first().text().replace(/[^\d\.,]+/g, '');
   //var OFPOS=reviewhtml.indexOf(" de ");
   //var aftreofTop=reviewhtml.substring(OFPOS+4);
}
  if (!price) {
    price = $('.offer-price, .kindle-price', doc).first().text().replace(/[^\d\.,]+/g, '') || ''
  };
  if (isEuropeanMarket(region)) {
    price = adjustEuropeanNumber(price);
  };
  price = price.replace(/,/g, '');
  price = parseFloat(price) || 0.00;
  if (price <= 0)
  {
  	price = $('#priceblock_pospromoprice, #price_inside_buybox', doc).first().text().replace(/[^\d\.,]+/g, '');
  }
  if (price <= 0)
  {
  	$('.a-color-price[dir^="rtl"]', doc).first().find("font").remove();
  	price = $('.a-color-price[dir^="rtl"]', doc).first().text().replace(/[^\d\.,]+/g, '');
  	price = price.replace(",",".");
  	var Shipping=0;
  	if(typeof $('.a-color-price[dir^="rtl"]', doc).first().parent().prop("tagName")!="undefined" && $('.a-color-price[dir^="rtl"]', doc).first().parent().prop("tagName").toLowerCase()=="a")
  	{
  		$('.a-color-price[dir^="rtl"]', doc).first().parent().parent().find('.a-color-base').first().find("font").remove();
  		Shipping=$('.a-color-price[dir^="rtl"]', doc).first().parent().parent().find('.a-color-base').first().text().replace(/[^\d\.,]+/g, '');
  		Shipping = Shipping.replace(",",".");
  	}
  	else
  	{
  		$('.a-color-price[dir^="rtl"]', doc).first().parent().find('.a-color-base').first().find("font").remove();
  		Shipping=$('.a-color-price[dir^="rtl"]', doc).first().parent().find('.a-color-base').first().text().replace(/[^\d\.,]+/g, '');
  		Shipping = Shipping.replace(",",".");
  	}
  	if(Shipping.trim()=="")
  	{
  		Shipping=0;
  	}
  	if(!isNaN(Shipping))
  	{
  		price= parseFloat(parseFloat(price) + parseFloat(Shipping));
  	}
  }
  if (price > 0 && $('#priceblock_ourprice, #priceblock_saleprice', doc).first().hasClass('priceToPayPadding') && !newPriceSc) {
    price = price / 100
  };
  if (!price && $('#olp_feature_div', doc).length > 0) {
    var _0x351D = $('#olp_feature_div', doc).text().trim();
    _0x351D = _0x351D.replace('& FREE shipping', '+ $0.00 shipping');
    const _0x3E90 = /[.]* from \$([\d\.]+) \+ \$([\d\.]+) shipping/g;
    let _0x4855;
    while ((_0x4855 = _0x3E90.exec(_0x351D)) !== null) {
      if (_0x4855.index === _0x3E90.lastIndex) {
        _0x3E90.lastIndex++
      };
      if (isEuropeanMarket(region)) {
        _0x4855[1] = adjustEuropeanNumber(_0x4855[1]);
        _0x4855[2] = adjustEuropeanNumber(_0x4855[2])
      };
      var _0x487E = parseFloat(_0x4855[1]) || 0;
      var _0x48A7 = parseFloat(_0x4855[2]) || 0;
      price = _0x487E + _0x48A7;
      price = price.toFixed(2)
    }
  };
  if (!price) {
    price = $('#digital-button-price', doc).first().text().trim().replace(/[^\d\.\,]/g, '');
    if (isEuropeanMarket(region)) {
      price = adjustEuropeanNumber(price)
    };
    price = parseFloat(price) / 100.0
  };
  if (!price) {
    price = $('#unqualifiedBuyBox .a-color-price', doc).first().text().trim().replace(/[^\d\.\,]/g, '');
    price = parseFloat(price);
  }
	if (!price) {
    price = $(' .priceblock_vat_inc_price', doc).first().text().trim().replace(/[^\d\.\,]/g, '');
    price = parseFloat(price);
  }
  if (!price) {
    price = $(' .priceblock_vat_excl_price', doc).first().text().trim().replace(/[^\d\.\,]/g, '');
    price = parseFloat(price);
  }
  if (!price) {
    price = $('#olp-upd-new-freeshipping', doc).find(".a-color-price").first().text().trim().replace(/[^\d\.\,]/g, '');
    price = parseFloat(price);
  }
  if (!price) {
    price = $('#olp-upd-new-used-freeshipping', doc).find(".a-color-price").first().text().trim().replace(/[^\d\.\,]/g, '');
    price = parseFloat(price);
  }
   if (!price) {
    price = $('#olp-upd-new', doc).find(".a-color-price").first().text().trim().replace(/[^\d\.\,]/g, '');
    price = parseFloat(price);
  }
  if(isNaN(price))
  {
  	price=0;
  }
  return price;
}
function getPosition(string, subString, index) {
   return string.split(subString, index).join(subString).length;
}
function getProductData(doc, region) {
  //const rankRe = /([0-9,\.]+) (?:Paid)?(?:in|en) (.*?) \(/;
  const rankRe = /([0-9,\.]+) (?:Paid)?(?:in|en) (.*?) \(/;
  var category = '', rank = 0;
  const title = $('#productTitle').text().trim();
	if(typeof doc=="undefined")
	{
		doc = document
	}
	if(typeof region=="undefined")
	{
		var urlNewAdded=$(location).attr('href');
		region=extractCountryFromURLNewAdded(urlNewAdded);
	}
  doc = doc || document;

  var $rankEl;
  var $rankEl2;
  var gotrank=false;
  var gotcat=false;
  var cate='';
  $('font[style^="vertical-align"]', doc).unwrap();
  $('style', doc).remove();
  
  if ($('#SalesRank', doc).prop('tagName') === 'TR') {

    $rankEl = $('#SalesRank .value', doc);
    var $rankElCheck = $('#SalesRank .value', doc).text();
    var checkforRank=$rankElCheck.split(" in ");
    if(typeof checkforRank[0]!="undefined")
    {
    	 checkforRank=checkforRank[0].replace(",","");
    	 
    }
    console.log("checkforRank---->",checkforRank);
    if(isNaN(checkforRank))
    {
    	if($('.zg_hrsr_rank', doc).length >0)
    	{
    		$rankEl2 = $('.zg_hrsr_rank', doc).html();
    		gotrank=true;
    	}
    	if($('.zg_hrsr_ladder', doc).length >0)
    	{
    		if($('.zg_hrsr_ladder', doc).find('a'))
    		{
    			cate = $('.zg_hrsr_ladder', doc).find('a').html();
    			gotcat=true;
    		}
    	}
    }
  }
  else if ($('.attrG:contains("Amazon Bestseller-Rang:")', doc).length > 0) {
  	$('.attrG:contains("Amazon Bestseller-Rang:")', doc).find(".zg_hrsr").remove();
    $rankEl = $('.attrG:contains("Amazon Bestseller-Rang:")', doc);
  }
  else if ($('#SalesRank:contains("Amazon Bestseller-Rang:")', doc).length > 0) {
     // $('#SalesRank:contains("Amazon Bestseller-Rang:")', doc).find(".zg_hrsr").remove();
      //$rankEl = $('#SalesRank:contains("Amazon Bestseller-Rang:")', doc);
      $rankEl = $('#SalesRank:contains("Amazon Bestseller-Rang:")', doc);
      if(findRank($rankEl))
  		{
  			$('#SalesRank:contains("Amazon Bestseller-Rang:")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Amazon Bestseller-Rang:")', doc);
  		}
      else if($('#SalesRank:contains("Amazon Bestseller-Rang:")', doc).find(".zg_hrsr").prop('tagName') === 'UL')
  		{
  			if(typeof $('#SalesRank:contains("Amazon Bestseller-Rang:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1]!="undefined")
  			{
  				$('#SalesRank:contains("Amazon Bestseller-Rang:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1].remove();
  				$rankEl = $('#SalesRank:contains("Amazon Bestseller-Rang:")', doc).find(".zg_hrsr").find(".zg_hrsr_item");
  			}
  			else
  			{
  				$rankEl = $('#SalesRank:contains("Amazon Bestseller-Rang:")', doc);
  			}
  			 
  		}
  		else
  		{
      		$('#SalesRank:contains("Amazon Bestseller-Rang:")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Amazon Bestseller-Rang:")', doc);
      	}
  }
  else if ($('#SalesRank:contains("Amazon Bestsellers Rank:")', doc).length > 0) {
  //https://www.amazon.co.uk/Trust-Gaming-21187-Radius-Headset/dp/B01DDP7WAE/ref=sr_1_fkmr0_1?keywords=TRUST%2BGXT%2B310%2BRadius%2BGaming%2BHeadset%2B-%2BBlack%2B%26%2BRed%2B-%2BCurrys&qid=1585012602&sr=8-1-fkmr0&x=0&y=0&th=1
  		var humdoc=doc;
  			//$('#SalesRank:contains("Amazon Bestsellers Rank:")', humdoc).find(".zg_hrsr").remove();
      	$rankEl = $('#SalesRank:contains("Amazon Bestsellers Rank:")', humdoc);
  		if(findRank($rankEl))
  		{
  			$('#SalesRank:contains("Amazon Bestsellers Rank:")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Amazon Bestsellers Rank:")', doc);
  		}
  		else if($('#SalesRank:contains("Amazon Bestsellers Rank:")', doc).find(".zg_hrsr").prop('tagName') === 'UL')
  		{
  			if(typeof $('#SalesRank:contains("Amazon Bestsellers Rank:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1]!="undefined")
  			{
  				$('#SalesRank:contains("Amazon Bestsellers Rank:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1].remove();
  				$rankEl = $('#SalesRank:contains("Amazon Bestsellers Rank:")', doc).find(".zg_hrsr").find(".zg_hrsr_item");
  			}
  			else
  			{
  				$rankEl = $('#SalesRank:contains("Amazon Bestsellers Rank:")', doc);
  			}
  			 
  		}
  		else
  		{
      		$('#SalesRank:contains("Amazon Bestsellers Rank:")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Amazon Bestsellers Rank:")', doc);
      	}
      
  }
  else if ($('.attrG:contains("Amazon Bestseller-Rang")', doc).length > 0) {
  	$('.attrG:contains("Amazon Bestseller-Rang")', doc).find(".zg_hrsr").remove();
    $rankEl = $('.attrG:contains("Amazon Bestseller-Rang")', doc);
  }
   else if ($('.prodDetSectionEntry:contains("Amazon Bestseller-Rang")', doc).length > 0) {
   
  	$('.prodDetSectionEntry:contains("Amazon Bestseller-Rang")', doc).find(".zg_hrsr").remove();
    $rankEl = $('.prodDetSectionEntry:contains("Amazon Bestseller-Rang")', doc).parent();
  }
  else if ($('.attrG:contains("Classement des meilleures ventes d\'Amazon:")', doc).length > 0) {
  	$('.attrG:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").remove();
    $rankEl = $('.attrG:contains("Classement des meilleures ventes d\'Amazon:")', doc);
  }
  else if ($('div:contains("Classement des meilleures ventes d\'Amazon")', doc).length > 0) {
  	$('div:contains("Classement des meilleures ventes d\'Amazon")', doc).find(".zg_hrsr").remove();
    $rankEl = $('div:contains("Classement des meilleures ventes d\'Amazon")', doc);
  }
  else if ($('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).length > 0) {
  	//$('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").remove();
    //$rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc);
    $rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc);
    if(findRank($rankEl))
  		{
  			$('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc);
  		}
    else if($('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").prop('tagName') === 'UL')
  		{
  			if(typeof $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1]!="undefined")
  			{
  				$('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1].remove();
  				$rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").find(".zg_hrsr_item");
  			}
  			else
  			{
  				$rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc);
  			}
  			 
  		}
  		else
  		{
      		$('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc);
      	}
  }
   else if ($('.attrG:contains("Classement des meilleures ventes d\'Amazon :")', doc).length > 0) {
  	$('.attrG:contains("Classement des meilleures ventes d\'Amazon :")', doc).find(".zg_hrsr").remove();
    $rankEl = $('.attrG:contains("Classement des meilleures ventes d\'Amazon :")', doc);
  }
  else if ($('#SalesRank:contains("Classement des meilleures ventes d\'Amazon :")', doc).length > 0) {
  	//$('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").remove();
    //$rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc);
    $rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon :")', doc);
    if(findRank($rankEl))
  		{
  			$('#SalesRank:contains("Classement des meilleures ventes d\'Amazon :")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon :")', doc);
  		}
    else if($('#SalesRank:contains("Classement des meilleures ventes d\'Amazon :")', doc).find(".zg_hrsr").prop('tagName') === 'UL')
  		{
  			if(typeof $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon :")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1]!="undefined")
  			{
  				$('#SalesRank:contains("Classement des meilleures ventes d\'Amazon :")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1].remove();
  				$rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon :")', doc).find(".zg_hrsr").find(".zg_hrsr_item");
  			}
  			else
  			{
  				$rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon :")', doc);
  			}
  			 
  		}
  		else
  		{
      		$('#SalesRank:contains("Classement des meilleures ventes d\'Amazon :")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon :")', doc);
      	}
  }
  else if ($('.attrG:contains("Clasificación en los más vendidos de Amazon:")', doc).length > 0) {
  	$('.attrG:contains("Clasificación en los más vendidos de Amazon:")', doc).find(".zg_hrsr").remove();
  	$('.attrG:contains("Clasificación en los más vendidos de Amazon:")', doc).find("table").remove();
    $rankEl = $('.attrG:contains("Clasificación en los más vendidos de Amazon:")', doc);
  }
  else if ($('#SalesRank:contains("Clasificación en los más vendidos de Amazon:")', doc).length > 0) {
  	$('#SalesRank:contains("Clasificación en los más vendidos de Amazon:")', doc).find(".zg_hrsr").remove();
  	$('#SalesRank:contains("Clasificación en los más vendidos de Amazon:")', doc).find("table").remove();
    $rankEl = $('#SalesRank:contains("Clasificación en los más vendidos de Amazon:")', doc);
  }
  else if ($('.attrG:contains("Posizione nella classifica Bestseller di Amazon:")', doc).length > 0) {
  	$('.attrG:contains("Posizione nella classifica Bestseller di Amazon:")', doc).find(".zg_hrsr").remove();
    $rankEl = $('.attrG:contains("Posizione nella classifica Bestseller di Amazon:")', doc);
  }
  else if ($('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc).length > 0) {
  	//$('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc).find(".zg_hrsr").remove();
    //$rankEl = $('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc);
    $rankEl = $('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc);
    if(findRank($rankEl))
  		{
  			$('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc);
  		}
    else if($('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc).find(".zg_hrsr").prop('tagName') === 'UL')
  		{
  			if(typeof $('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1]!="undefined")
  			{
  				$('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1].remove();
  				$rankEl = $('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc).find(".zg_hrsr").find(".zg_hrsr_item");
  			}
  			else
  			{
  				$rankEl = $('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc);
  			}
  			 
  		}
  		else
  		{
      		$('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc);
      	}
  }
  else if ($('div:contains("Posizione nella classifica Bestseller di Amazon")', doc).length > 0) {
  	$('div:contains("Posizione nella classifica Bestseller di Amazon")', doc).find(".zg_hrsr").remove();
    $rankEl = $('div:contains("Posizione nella classifica Bestseller di Amazon")', doc);
  }
  else if ($('#SalesRank:contains("Amazon Best Sellers Rank:")', doc).length > 0) {
  	//$('#SalesRank:contains("Amazon Best Sellers Rank:")', doc).find(".zg_hrsr").remove();
    //$rankEl = $('#SalesRank:contains("Amazon Best Sellers Rank:")', doc);
    $rankEl = $('#SalesRank:contains("Amazon Best Sellers Rank:")', doc);
    if(findRank($rankEl))
  		{
  			$('#SalesRank:contains("Amazon Best Sellers Rank:")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Amazon Best Sellers Rank:")', doc);
  		}
    else if($('#SalesRank:contains("Amazon Best Sellers Rank:")', doc).find(".zg_hrsr").prop('tagName') === 'UL')
  		{
  			if(typeof $('#SalesRank:contains("Amazon Best Sellers Rank:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1]!="undefined")
  			{
  				$('#SalesRank:contains("Amazon Best Sellers Rank:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1].remove();
  				$rankEl = $('#SalesRank:contains("Amazon Best Sellers Rank:")', doc).find(".zg_hrsr").find(".zg_hrsr_item");
  			}
  			else
  			{
  				$rankEl = $('#SalesRank:contains("Amazon Best Sellers Rank:")', doc);
  			}
  			 
  		}
  		else
  		{
      		$('#SalesRank:contains("Amazon Best Sellers Rank:")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Amazon Best Sellers Rank:")', doc);
      	}
    
  }
  else if ($('.attrG:contains("Amazon Bestsellers Rank")', doc).length > 0) {
  	$('.attrG:contains("Amazon Bestsellers Rank:")', doc).find(".zg_hrsr").remove();
    $rankEl = $('.attrG:contains("Amazon Bestsellers Rank:")', doc);
  }
  else if($('#SalesRank', doc).prop('tagName')==="LI")
  {
      $rankEl = $('#SalesRank', doc);
      if(typeof $('#SalesRank', doc).find(".zg_hrsr_item").first()!="undefined")
      {
          $rankEl = $('#SalesRank', doc).find(".zg_hrsr_item").first();
      }
  }
  else if($('.zg_hrsr_rank', doc).length >0)
  {
  	if($('.zg_hrsr_rank', doc).length >0)
    {
    	$rankEl2 = $('.zg_hrsr_rank', doc).html();
    	gotrank=true;
    }
    if($('.zg_hrsr_ladder', doc).length >0)
    {
    	if($('.zg_hrsr_ladder', doc).find('a'))
    	{
    		cate = $('.zg_hrsr_ladder', doc).find('a').html();
    		gotcat=true;
    	}
    }
  } 
  else if ($('#SalesRank', doc).length > 0) {
    $rankEl = $('#SalesRank', doc);
    if($('.zg_hrsr_rank', doc).length >0)
    {
    	$rankEl2 = $('.zg_hrsr_rank', doc).html();
    	gotrank=true;
    }
    if($('.zg_hrsr_ladder', doc).length >0)
    {
    	if($('.zg_hrsr_ladder', doc).find('a'))
    	{
    		cate = $('.zg_hrsr_ladder', doc).find('a').html();
    		gotcat=true;
    	}
    }
  } else if ($('th:contains("Best Sellers Rank")',doc).length > 0) {
    $rankEl = $('th:contains("Best Sellers Rank")',doc).parent().find('td');
  }
  var Weight="";
  if ($('.pdTab .label:contains("Weight")', doc).length > 0) {
  	if(typeof $('.pdTab .label:contains("Weight")', doc).parent().find(".value").html()!="undefined")
  	{
  		Weight=$('.pdTab .label:contains("Weight")', doc).parent().find(".value").html();
  	}
  }
  else if ($('.pdTab .label:contains("Artikelgewicht")', doc).length > 0) {
  	if(typeof $('.pdTab .label:contains("Artikelgewicht")', doc).parent().find(".value").html()!="undefined")
  	{
  		Weight=$('.pdTab .label:contains("Artikelgewicht")', doc).parent().find(".value").html();
  	}
  }
  else if ($('.pdTab .label:contains("Poids de l\'article")', doc).length > 0) {
  	if(typeof $('.pdTab .label:contains("Poids de l\'article")', doc).parent().find(".value").html()!="undefined")
  	{
  		Weight=$('.pdTab .label:contains("Poids de l\'article")', doc).parent().find(".value").html();
  	}
  }
  else if ($('.pdTab .label:contains("Peso del producto")', doc).length > 0) {
  	if(typeof $('.pdTab .label:contains("Peso del producto")', doc).parent().find(".value").html()!="undefined")
  	{
  		Weight=$('.pdTab .label:contains("Peso del producto")', doc).parent().find(".value").html();
  	}
  }
   else if ($('[data-feature-name^="detailBullets"] a[href^="/gp/bestsellers/"]', doc).length > 0) 
  {
      $rankEl = $('[data-feature-name^="detailBullets"] a[href^="/gp/bestsellers/"]', doc).parent();
      if(findRank($rankEl))
  		{
  			$('[data-feature-name^="detailBullets"] a[href^="/gp/bestsellers/"]', doc).find(".zg_hrsr").remove();
      		$rankEl = $('[data-feature-name^="detailBullets"] a[href^="/gp/bestsellers/"]', doc).parent();
  		}
      else if($('[data-feature-name^="detailBullets"] a[href^="/gp/bestsellers/"]', doc).parent().find(".zg_hrsr").prop('tagName') === 'UL')
  		{
  			if(typeof $('[data-feature-name^="detailBullets"] a[href^="/gp/bestsellers/"]', doc).parent().find(".zg_hrsr").find(".zg_hrsr_item")[1]!="undefined")
  			{
  				$('[data-feature-name^="detailBullets"] a[href^="/gp/bestsellers/"]', doc).parent().find(".zg_hrsr").find(".zg_hrsr_item")[1].remove();
  				$rankEl = $('[data-feature-name^="detailBullets"] a[href^="/gp/bestsellers/"]', doc).parent().find(".zg_hrsr").find(".zg_hrsr_item");
  			}
  			else
  			{
  				$rankEl = $('[data-feature-name^="detailBullets"] a[href^="/gp/bestsellers/"]', doc).parent();
  			}
  			 
  		}
  		else
  		{
      		$('[data-feature-name^="detailBullets"] a[href^="/gp/bestsellers/"]', doc).parent().find(".zg_hrsr").remove();
      		$rankEl = $('[data-feature-name^="detailBullets"] a[href^="/gp/bestsellers/"]', doc).parent();
      	}
  }
  
  if ($rankEl) {
  	var $rankEltext=$rankEl.text().replace("Clasificación en los más vendidos de Amazon:","gasamazon:");

      $rankEltext=$rankEltext.replace("&nbsp;"," ");
	  $rankEltext=$rankEltext.replace("Amazon Bestseller-Rang","gasamazon:");
	  $rankEltext=$rankEltext.replace("Classement des meilleures ventes d\'Amazon:","gasamazon:");
	  $rankEltext=$rankEltext.replace("Posizione nella classifica Bestseller di Amazon:","gasamazon:");
	  $rankEltext=$rankEltext.replace("Amazon Bestsellers Rank","gasamazon:");
      $rankEltext=$rankEltext.replace("Nr.","gasamazon:");
      $rankEltext=$rankEltext.replace("gasamazon:","");
      var firstword = $rankEltext.slice(0, $rankEltext.indexOf(" "));
      if(firstword=="in")
	  {
          $rankEltext=$rankEltext.replace("in ","");
	  }

    let matches = $rankEltext.match(rankRe);
    
    var $rankELFinal=$rankEltext.trim();
    var $gotrankdata=$rankELFinal.split(" ");
    var $gotcatdata=$rankELFinal.split(">");
    if (matches) {
    matches[1]=matches[1].trim();
      rank = parseInt(matches[1].replace(/[^\d]/g, ''), 10);
      category = matches[2];
    }
    else if(gotrank)
    {
    	rank = parseInt($rankEl2.replace(/[^\d]/g, ''), 10);
    	if(gotcat)
    	{
    		category = cate.replace('&amp;','&');
    	}
    }
    else if(typeof $gotrankdata[0]!='undefined')
    {
    	if(typeof rank=="undefined" || rank<=0)
    	{
    		rank=$gotrankdata[0].replace("#","").replace(",","");
    	}
    	if(typeof $gotcatdata[0] !='undefined')
    	{
    		category=$gotcatdata[0].substr(getPosition($gotcatdata[0], " ", 2)).trim();
            category=category.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
            category=category.replace("--", ' ');
            category=category.replace(/-/g, ' ');
            category=category.replace(/<\/?a>/g, ' ');
            var firstword = category.slice(0, category.indexOf(" "));
            if(firstword=="in" || firstword=="en")
			{
                category=category.substr(3);
			}
    		if(category.indexOf("#") > -1)
    		{
    			category=$gotcatdata[0].substr($gotcatdata[0].indexOf("in")+3).trim();
    			
    		}
    	}
    	else if(typeof $(".zg_hrsr_rank",doc).html()!="undefined")
    	{
    		if(typeof rank=="undefined" || rank<=0)
    		{
    			rank=$(".zg_hrsr_rank",doc).html().replace("#","").replace(",","");
    		}
    		
    	}
    }
    else if(typeof $(".zg_hrsr_rank",doc).html()!="undefined")
    {
    	if(typeof rank=="undefined" || rank<=0)
    	{
    			rank=$(".zg_hrsr_rank",doc).html().replace("#","").replace(",","");
    	}
    	
    }
    
  }
  else if($rankEl2)
  {
  	if(typeof rank=="undefined" || rank<=0)
    {
    	rank=$rankEl2.replace("#","").replace(",","");
    }
  	
  }
  var FBAORFBM;
  FBAORFBM="FBM";
  //FBAORFBMGOT="FBM";
  if(typeof $('#merchant-info', doc).html()!="undefined")
  {
  		if($('#merchant-info', doc).text().indexOf("isAmazonFulfilled=1") > -1 || $('#merchant-info', doc).text().indexOf("by Amazon") > -1)
  		{
  			FBAORFBM="FBA";
  		}
  }
  if(category.trim()=="")
  {
  	cate=cate.replace("&amp;","&");
  	category=cate.trim();
  }
  if(isNaN(rank) || rank==0)
  {
  	if(typeof $(".zg_hrsr_rank",doc).html()!="undefined")
    			{
    				if(typeof rank=="undefined" || rank<=0)
    				{
    					rank=$(".zg_hrsr_rank",doc).html().replace("#","").replace(",","");
    				}
    				
    			}
  }
  if(!isNaN(rank))
  {
  	rank=numberWithCommas(rank);
  }
  else if(!isNaN(GlobalRank))
  {
  	rank=numberWithCommas(GlobalRank);
  }
  else
  {
  	rank="0";
  }
  if(typeof region=="undefined")
  {
  	var urlNewAdded=$(location).attr('href');
	region=extractCountryFromURLNewAdded(urlNewAdded);
}
  //if(region!="co.uk" && region!="com" || category.trim()=="")
if(category.trim()=="")
  {
  	if(typeof $("#nav-subnav").first().attr("data-category")!="undefined")
  	{
  		category=$("#nav-subnav").first().attr("data-category");
  	}
  	else if(typeof $(".a-breadcrumb").find(".a-link-normal").first().html()!="undefined")
  	{
  		if(typeof $(".a-breadcrumb").find(".a-link-normal").first().html()!="undefined" && $(".a-breadcrumb").find(".a-link-normal").first().html().trim()!="")
  		{
  			category=$(".a-breadcrumb").find(".a-link-normal").first().html().trim();
  			if(category.toLowerCase()=="back to results")
  			{
  				category="";
  			}
  		}
  	}
  	else if(typeof $("#nav-subnav").find(".nav-a-content").first().html()!="undefined")
  	{
  		if(typeof $("#nav-subnav").find(".nav-a-content").first().html()!="undefined" && $("#nav-subnav").find(".nav-a-content").first().html().trim()!="")
  		{
  			//category=$("#nav-subnav").attr('data-category');
  			category=$("#nav-subnav").find(".nav-a-content").first().html().trim();
  			if(category.toLowerCase()=="back to results")
  			{
  				category="";
  			}
  		}
  	}
  }
  var urlNewAdded=$(location).attr('href');
  var CurrentRegion=extractCountryFromURLNewAdded(urlNewAdded);
  var price = extractPrice(doc, region);
	if( region==CurrentRegion && price<=0)
	{
		price=lowestNewPriceGlobal
		
	}
	category=category.replace("amp;", '');
	if(category.trim()!="")
	{
		category=jsUcfirst(category);
	}
  return {
    title,
    rank,
    category,
    price,
    FBAORFBM,
    Weight,
  };
}
const PL_RISK = {
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
};

function normalizeSeller(str) {
  return str.replace(/ /gi, '').replace(/LTD/gi, '').toLowerCase();
}
function normalizeSellerLow(str) {
  return str.toLowerCase();
}

function getPLRisk(sellers, brand) {
if(brand.trim()=="")
{
	brand="nobrand";
}
var temp=brand.split("-");
if(typeof temp[1]!="undefined")
{
	brand=temp[1];
}
  var brandSeller = sellers.find(seller => {

  /*if(normalizeSeller(seller).indexOf(normalizeSellerLow(" "+brand+" "))!=-1 || normalizeSeller(seller).indexOf(normalizeSellerLow(" "+brand))!=-1 || normalizeSeller(seller).indexOf(normalizeSellerLow(brand+" "))!=-1)
  {
  	return true;
  }
  else 
  {
  	return false;
  }*/
    return normalizeSeller(seller).indexOf(normalizeSellerLow(" "+brand+" ")) !== -1 || normalizeSeller(seller).indexOf(normalizeSellerLow(" "+brand)) !== -1 || normalizeSeller(seller).indexOf(normalizeSellerLow(brand+" ")) !== -1 || normalizeSeller(seller)==normalizeSeller(brand);
  });
  if (sellers.length > 2 && !brandSeller) {
  	$(".TooltipText").html(brand+" Is Not Seller & 3+ Sellers. Safe");
    return PL_RISK.LOW;
  }

  if (sellers.length <= 2 && !brandSeller) {
  $(".TooltipText").html("Less Than 3 Sellers."+brand+" Is Not Seller.Be Cautious");
    return PL_RISK.MEDIUM;
  }
  if(sellers.length <=2 && brandSeller)
  {
  	$(".TooltipText").html(brand+" Is Also Seller. Under 3 Sellers. Avoid");
  	return PL_RISK.MEDIUM;
  }
  if(sellers.length >3 && brandSeller)
  {
  	$(".TooltipText").html(""+brand+" is on listing but 3+ sellers be cautious");
  	return PL_RISK.MEDIUM;
  }
  /*if(sellers.length > 2 && brandSeller)
  {
  	$(".TooltipText").html("Brand "+brand+" Is Used By "+brandSeller);
  	return PL_RISK.MEDIUM;
  }*/
$(".TooltipText").html(""+brand+" Is Also Seller. Avoid");
  return PL_RISK.HIGH;
}
/* globals $ */
var currencyCode = '';
var marketPlaceId = '';
var tries = 0;

var CURRENCY = {
  'de': 'EUR',
  'fr': 'EUR',
  'es': 'EUR',
  'it': 'EUR',
  'co.uk': 'GBP',
  'com': 'USD',
  'ca': 'CAD',
  'com.mx': 'MXN'
};

const MARKETPLACE_ID = {
  'co.uk': 'A1F83G8C2ARO7P',
}

function _delay(delayMs) {
  return new Promise((resolve) => setTimeout(resolve, delayMs));
}

function _requestNewToken(region) {
  return new Promise((resolve, reject) => {
    const lang = LANGS[region];
    const url = 'https://sellercentral.amazon.' + region + '/hz/fba/profitabilitycalculator/index?lang=' + lang;
    chrome.runtime.sendMessage({ data: {
          		urlProductInfo: url,
          		dataType: 'html' 
        		},'FunctionCall':'SellerCenterWeight' }, 
      function(response) 
      {
      		data = $(response);
      		if(typeof data.find("#mons-error-page-template").html()=="undefined" && response!=null)
      		{
      			marketPlaceId = data.find('#marketplaceIdHidden').val();
      			marketPlaceId = marketPlaceId || MARKETPLACE_ID[region];

      			currencyCode = data.find('#currencyCodeHidden').val();
      			currencyCode = currencyCode || CURRENCY[region];

      			data = $(data);
      			var netToken = data.find('input[name=profitcalcToken]').val();
      			resolve(netToken);
      		}
      		else
      		{
      			chrome.runtime.sendMessage({ data: {
          		urlProductInfo: 'https://sellercentral.amazon.com' + '/hz/fba/profitabilitycalculator/index?lang=' + lang,
          		dataType: 'html' 
        		},'FunctionCall':'SellerCenterWeight' }, 
      			function(response) 
      			{
      				marketPlaceId = data.find('#marketplaceIdHidden').val();
      				marketPlaceId = marketPlaceId || MARKETPLACE_ID[region];

      					currencyCode = data.find('#currencyCodeHidden').val();
      					currencyCode = currencyCode || CURRENCY[region];

      					data = $(data);
      					var netToken = data.find('input[name=profitcalcToken]').val();
      					resolve(netToken);
      			});
      		}
      })
   /* $.get(url, function (data) {
      data = $(data);
      marketPlaceId = data.find('#marketplaceIdHidden').val();
      marketPlaceId = marketPlaceId || MARKETPLACE_ID[region];

      currencyCode = data.find('#currencyCodeHidden').val();
      currencyCode = currencyCode || CURRENCY[region];

      data = $(data);
      var netToken = data.find('input[name=profitcalcToken]').val();

      resolve(netToken);
    }).fail(function () {
      reject();
    });*/
  });
}

function _getProductInfo(region, token, asin) {
if(typeof $('#mbc').attr('data-asin') !='undefined' && $('#mbc').attr('data-asin') !='')
  		{
  			asin=$('#mbc').attr('data-asin');
  		}
  var urlProductInfo = 'https://sellercentral.amazon.' + region + '/hz/fba/profitabilitycalculator/productmatches?searchKey=' + asin + '&language=en_GB&profitcalcToken=' + token;
  //console.log("urlProductInfo=>".urlProductInfo);
  return new Promise((resolve, reject) => {
     chrome.runtime.sendMessage({ data: {
          		urlProductInfo: urlProductInfo,
          		dataType: 'json' 
        		},'FunctionCall':'SellerCenterWeight' }, 
      function(response) 
      {
      	if(typeof data.find("#mons-error-page-template").html()=="undefined" && response!=null)
      	{
      		resolve(response.data[0]);
      	}
      	else
      	{
      		chrome.runtime.sendMessage({ data: {
          		urlProductInfo: 'https://sellercentral.amazon.com'+ '/hz/fba/profitabilitycalculator/productmatches?searchKey=' + asin + '&language=en_GB&profitcalcToken=' + token,
          		dataType: 'json' 
        		},'FunctionCall':'SellerCenterWeight' }, 
      			function(response) 
      			{
      				resolve(response.data[0]);
      			});
      	}
      })
    /*$.getJSON(urlProductInfo, function (result) {
      resolve(result.data[0]);
    }).fail(() => {
      reject();
    });*/
    
    
  });
}

function SellerAPI(region) {
  if (!region) {
    region = location.host.replace(/.*?amazon./gi, '')
  }

  var netToken = '';
  var productInfoCache = {};


  function getToken() {
    if (netToken && typeof netToken!="undefined") {
      return Promise.resolve(netToken);
    }

    return _requestNewToken(region)
      .then(token => {
        tries = 0;
        return token;
      })
      .catch(() => {
        tries++;

        if (tries < 10) {
          return _delay(tries * 2000)
            .then(() => getToken());
        } else {
          throw new Error('Max number of retries reached');
        }
      })
  }

  function getProductInfo(asin) {
      console.log("===call==="+region);
    if (productInfoCache[asin]) {
      return Promise.resolve(productInfoCache[asin]);
    }

    if(!gotWeightCall)
    {
    	//console.log("here we are",region);
    	return new Promise((resolve, reject) => {
    	chrome.runtime.sendMessage({data:{
  		url: "https://admin.fbamultitool.com/appapi/productDetails.php",
  		dataType:'html',
  		asin: asin,
  		country: region,
  		MWSTOKENUK: MWSTOKENUK,
  		MWSSELLERIDUK: MWSSELLERIDUK,
  		MWSTOKENUSA: MWSTOKENUSA,
  		MWSSELLERIDUSA: MWSSELLERIDUSA,
  		FunctionCall: 'ProductHistory',
  		CallType: 'Keepa',
		LicenseKey: valicenseKey
  		},'FunctionCall':'ProductHistory'},
  		function(response)
  		{
  			if(response.status=="success")
  			{
  					if(typeof response.DisableStockCheckerOld!="undefined")
  					{
  						chrome.storage.sync.get(["DisableStockChecker","DisableStockCheckerOld"],function(DisableStockCheckerobj)
  						{
							if(typeof DisableStockCheckerobj.DisableStockCheckerOld=="undefined" || DisableStockCheckerobj.DisableStockCheckerOld!=response.DisableStockCheckerOld)
							{
								chrome.storage.sync.set({ "DisableStockCheckerOld": response.DisableStockCheckerOld });
							}
						});
  						
  					}
  					var arrweight=response.data.weight.toString().split("__");
  					var Weight=0;
  					var Weightunit="";
  					if(typeof arrweight[0]!="undefined")
  					{
  						Weight=Number(arrweight[0]);
  					}
  					if(typeof arrweight[1]!="undefined")
  					{
  						Weightunit=arrweight[1];
  					}
  					var ToBeReturned= {
    				title: "",
    				rank: response.data.salesrank,
    				category: response.data.category,
    				price: Number(response.data.price),
    				weight: Number(Weight),
    				weightUnit: Weightunit,
    				FBAORFBM: "FBM",
  					};
  					if(typeof response.data.salesrankDate!="undefined")
  					{
  						ToBeReturned.salesrankDate=response.data.salesrankDate;
  					}
  					if(typeof response.data.categorySource!="undefined")
  					{
  						ToBeReturned.categorySource=response.data.categorySource;
  					}
  					if(typeof response.data.rankSource!="undefined")
  					{
  						ToBeReturned.rankSource=response.data.rankSource;
  					}
  					productInfoCache[asin] = ToBeReturned;
  					resolve(productInfoCache[asin]);
  			}
  			else
  			{
  					return getToken().then(token => _getProductInfo(region, token, asin))
     			 .then(productInfo => {
        			productInfoCache[asin] = productInfo;
        			//return productInfo;
        			resolve(productInfoCache[asin]);
      				})
  			}
  		})
  		})
  	}
  	else
  	{
		var ToBeReturned= {
    				weight: Number(GotWeight),
    				weightUnit: GotWeightUnit
  					};
  					productInfoCache[asin] = ToBeReturned;
  					return Promise.resolve(productInfoCache[asin]);
  	}
    
  }

  this.getProductInfo = getProductInfo;
}
function Calc(region) {
  
  function _getFees(asin, sellPrice, efn) {
  	sellPrice=sellPrice.toFixed(2);
    const cacheKey = [asin, sellPrice, efn].join('-');
    if (_cache[cacheKey]) {
      return Promise.resolve(_cache[cacheKey]);
    }
    return new Promise((resolve, reject) => {
     /* $.ajax({
        type: 'POST',
        url: 'https://us-central1-restriction-wizard.cloudfunctions.net/estimateFee',
        data: {
          asin: asin,
          country: region,
          efn,
          sellPrice: sellPrice,
        },
        dataType: 'json',
        success: (result) => {
        console.log("=====DATA======",sellPrice);
        console.log("=====country======",region);
        console.log("=====efn======",efn);
        console.log("=====RESULT======",result);
          _cache[cacheKey] = result;
          resolve(result);
        },
        error: (msg) => {
        console.log(msg);}
      });*/
      chrome.runtime.sendMessage({ data: {
          		asin: asin,
          		country: region,
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
  function _getFeesFBM(asin, sellPrice, efn) {
  sellPrice=sellPrice.toFixed(2);
    const cacheKey = [asin, sellPrice, efn,"FBM"].join('-');
    if (_cache[cacheKey]) {
      return Promise.resolve(_cache[cacheKey]);
    }
    return new Promise((resolve, reject) => {
     /* $.ajax({
        type: 'POST',
        url: 'https://us-central1-restriction-wizard.cloudfunctions.net/estimateFee',
        data: {
          asin: asin,
          country: region,
          efn,
          sellPrice: sellPrice,
        },
        dataType: 'json',
        success: (result) => {
        console.log("=====DATA======",sellPrice);
        console.log("=====country======",region);
        console.log("=====efn======",efn);
        console.log("=====RESULT======",result);
          _cache[cacheKey] = result;
          resolve(result);
        },
        error: (msg) => {
        console.log(msg);}
      });*/
      chrome.runtime.sendMessage({ data: {
          		asin: asin,
          		country: region,
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

  function _calcFeesFBM(sellPrice, buyPrice, weight, isKilogram, vat, vatReg, efn, p, localStorage,vatBuyPrice,shipPrice,defaultcall=true,Loaderupdate=true) {
    var referralFee = sellPrice * p.referralFeeP;
     var referralFee = parseFloat(p.referralFee)
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
//line no 1584
	
    /*if (localStorage.fixedPrepFee != '' && isNumber(localStorage.fixedPrepFee)) {
      let r = parseFloat(localStorage.fixedPrepFee);
      result.fixedPrepFee = r;
      totalFees += r;
    }

    if (localStorage.inboundShipping != '' && isNumber(localStorage.inboundShipping)) {
      result.inboundShipping = parseFloat(localStorage.inboundShipping) * weight;
      if (!isNaN(result.inboundShipping)) {
        totalFees += result.inboundShipping;
      }
    }

    if (localStorage.transitCost != '' && isNumber(localStorage.transitCost)) {
      result.transitCost = parseFloat(localStorage.transitCost);
      if (!isNaN(result.transitCost)) {
        totalFees += result.transitCost;
      }
    }

    if (localStorage.feeAdjustment != '' && isNumber(localStorage.feeAdjustment)) {
      let r = calcround(totalFees * parseFloat(localStorage.feeAdjustment) / 100);
      result.fbaFeeAdjustment = r;
      totalFees += r;
    }*/
    if (efn) {
      result.efnFee = Number(p.efnFee);
      totalFees += Number(p.efnFee);

      if (localStorage.efnAdjustment != '' && isNumber(localStorage.efnAdjustment)) {
        let r = calcround(result.efnFee * parseFloat(localStorage.efnAdjustment) / 100);
        result.efnFeeAdjustment = r;
        totalFees += r;
      }
    }
    const vatOnFees = calcround(totalFees * vat / 100);
    const vatToRemit = calcround((sellPrice - buyPrice) * (vat / 100) / (1 + vat / 100));
	var Short=((vat / 100) / (1 + vat / 100));
	if(vatReg)
	{
		var T20perSellingPrice=calcround((sellPrice-totalFees-(sellPrice*Short))/((20/100)+1-Short));
		var T30perSellingPrice=calcround((sellPrice-totalFees-(sellPrice*Short))/((30/100)+1-Short));
		var T40perSellingPrice=calcround((sellPrice-totalFees-(sellPrice*Short))/((40/100)+1-Short));
		var T50perSellingPrice=calcround((sellPrice-totalFees-(sellPrice*Short))/((50/100)+1-Short));
		var T60perSellingPrice=calcround((sellPrice-totalFees-(sellPrice*Short))/((60/100)+1-Short));
	}
	else
	{
		var T20perSellingPrice=calcround((sellPrice-totalFees-vatOnFees)/((20/100)+1));
		var T30perSellingPrice=calcround((sellPrice-totalFees-vatOnFees)/((30/100)+1));
		var T40perSellingPrice=calcround((sellPrice-totalFees-vatOnFees)/((40/100)+1));
		var T50perSellingPrice=calcround((sellPrice-totalFees-vatOnFees)/((50/100)+1));
		var T60perSellingPrice=calcround((sellPrice-totalFees-vatOnFees)/((60/100)+1));
	}
	if(Loaderupdate)
	{
		result.T20perSellingPrice=T20perSellingPrice;
		result.T30perSellingPrice=T30perSellingPrice;
		result.T40perSellingPrice=T40perSellingPrice;
		result.T40perSellingPrice=T40perSellingPrice;
		result.T50perSellingPrice=T50perSellingPrice;
		result.T60perSellingPrice=T60perSellingPrice;
	}
	if(typeof localStorage.vatFlatRate!="undefined" && localStorage.vatFlatRate)
	{
		var FlatRate=calcround(sellPrice*(vat / 100));
		result.FlatRate = totalFees;
		totalFees +=FlatRate;
	}
	else
	{
    	totalFees += vatReg ? vatToRemit : vatOnFees;
    	result.vatOnFees = calcround(vatOnFees);
    	//result.vatOnFees = vatOnFees;
    	result.vatToRemit = vatToRemit;
    }
    totalFees=totalFees+ Number(shipPrice);
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
	totalFees=calcround(totalFees);
	totalFees=totalFees;
	profit=profit;
    
    result.totalFees = totalFees;
    result.totalFBAFeesEst= result.totalFees,
    result.profit = profit;
    result.useVAT = vatReg;
    result.isEFN = efn;
    //result.profitMargin = (result.profitAdj || profit) / sellPrice * 100;
    result.profit = parseFloat(profit.toFixed(2));
    result.roi=parseFloat(result.roi.toFixed(2));
    result.profitMargin = (result.profitAdj || profit) / sellPrice * 100;
    result.profitMargin=parseFloat(result.profitMargin.toFixed(2));
     ScoringVar['Profit']=result.profit;
		ScoringVar['profitMargin']=result.profitMargin;
		ScoringVar['Roi']=result.roi;
    return result;
  }

  function _calcFeesUSFBM(sellPrice, buyPrice, weight, isKilogram, vat, vatReg, efn, p, localStorage,vatBuyPrice,shipPrice,defaultcall=true,Loaderupdate=true) {
    var referralFee = sellPrice * p.referralFeeP;
     var referralFee = parseFloat(p.referralFee)
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

    /*if (localStorage.fixedPrepFee != '' && isNumber(localStorage.fixedPrepFee)) {
      let r = parseFloat(localStorage.fixedPrepFee);
      result.fixedPrepFee = r;
      totalFees += r;
    }

    if (localStorage.inboundShippingUS != '' && isNumber(localStorage.inboundShipping)) {
      result.inboundShipping = parseFloat(localStorage.inboundShippingUS) * weight;
      if (!isNaN(result.inboundShipping)) {
        totalFees += result.inboundShipping;
      }
    }

    if (localStorage.transitCost != '' && isNumber(localStorage.transitCost)) {
      result.transitCost = parseFloat(localStorage.transitCost);
      if (!isNaN(result.transitCost)) {
        totalFees += result.transitCost;
      }
    }

    if (localStorage.feeAdjustment != '' && isNumber(localStorage.feeAdjustment)) {
      let r = totalFees * parseFloat(localStorage.feeAdjustment) / 100;
      result.fbaFeeAdjustment = r;
      totalFees += r;
    }
	*/
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
      	var T20perSellingPrice=calcround((sellPrice-totalFees-r)/((20/100)+1));
		var T30perSellingPrice=calcround((sellPrice-totalFees-r)/((30/100)+1));
		var T40perSellingPrice=calcround((sellPrice-totalFees-r)/((40/100)+1));
		var T50perSellingPrice=calcround((sellPrice-totalFees-r)/((50/100)+1));
		var T60perSellingPrice=calcround((sellPrice-totalFees-r)/((60/100)+1));
    }
    else
    {
    	var T20perSellingPrice=calcround((sellPrice-totalFees)/((20/100)+1));
		var T30perSellingPrice=calcround((sellPrice-totalFees)/((30/100)+1));
		var T40perSellingPrice=calcround((sellPrice-totalFees)/((40/100)+1));
		var T50perSellingPrice=calcround((sellPrice-totalFees)/((50/100)+1));
		var T60perSellingPrice=calcround((sellPrice-totalFees)/((60/100)+1));
    }
	/************added for new RIOBUYPRICE*******/
	
	if(Loaderupdate)
	{
		result.T20perSellingPrice=T20perSellingPrice;
		result.T30perSellingPrice=T30perSellingPrice;
		result.T40perSellingPrice=T40perSellingPrice;
		result.T40perSellingPrice=T40perSellingPrice;
		result.T50perSellingPrice=T50perSellingPrice;
		result.T60perSellingPrice=T60perSellingPrice;
	}
	/************added for new RIOBUYPRICE*******/
    result.roi = profit / buyPrice * 100;
    /*if (localStorage.profitAdjustment != '' && isNumber(localStorage.profitAdjustment)) {
      let r = profit * (1 + parseFloat(localStorage.profitAdjustment) / 100);
      result.profitAdj = r;
      result.roi = r / buyPrice * 100;
    }*/
    result.totalFees = totalFees;
    result.profit = profit;
    result.profit = parseFloat(profit.toFixed(2));
    result.roi=parseFloat(result.roi.toFixed(2));
    result.profitMargin = (result.profitAdj || profit) / sellPrice * 100;
    result.profitMargin=parseFloat(result.profitMargin.toFixed(2));
if(typeof result.totalFBAFeesEst == "undefined" && !isNaN(result.totalFees))
{
	result.totalFBAFeesEst= result.totalFees;
}
	
    return result;
  }


  function _calcFees(sellPrice, buyPrice, weight, isKilogram, vat, vatReg, efn, p, localStorage,vatBuyPrice,defaultcall=true,Loaderupdate=true) {
    //var referralFee = sellPrice * p.referralFeeP;
    var referralFee = parseFloat(p.referralFee)
    var fbaFees = p.fbaFee;
    var totalFees = referralFee + fbaFees;
    var result = {
      referralFee: referralFee,
      fbaFees: fbaFees,
      totalFBAFeesEst: totalFees,
    }
    
//line no 1584
	
    if (localStorage.fixedPrepFee != '' && isNumber(localStorage.fixedPrepFee)) {
      let r = parseFloat(localStorage.fixedPrepFee);
      result.fixedPrepFee = r;
      totalFees += r;
    }

    if (localStorage.inboundShipping != '' && isNumber(localStorage.inboundShipping)) {
      result.inboundShipping = parseFloat(localStorage.inboundShipping) * weight;
      if (!isNaN(result.inboundShipping)) {
        totalFees += result.inboundShipping;
      }
    }

    if (localStorage.transitCost != '' && isNumber(localStorage.transitCost)) {
      result.transitCost = parseFloat(localStorage.transitCost);
      if (!isNaN(result.transitCost)) {
        totalFees += result.transitCost;
      }
    }

    if (localStorage.feeAdjustment != '' && isNumber(localStorage.feeAdjustment)) {
      let r = calcround(totalFees * parseFloat(localStorage.feeAdjustment) / 100);
      result.fbaFeeAdjustment = r;
      totalFees += r;
    }
    if (efn) {
      result.efnFee = Number(p.efnFee);
      totalFees += Number(p.efnFee);

      if (localStorage.efnAdjustment != '' && isNumber(localStorage.efnAdjustment)) {
        let r = calcround(result.efnFee * parseFloat(localStorage.efnAdjustment) / 100);
        result.efnFeeAdjustment = r;
        totalFees += r;
      }
    }
    const vatOnFees = calcround(totalFees * vat / 100);
    const vatToRemit = calcround((sellPrice - buyPrice) * (vat / 100) / (1 + vat / 100));
	var Short=((vat / 100) / (1 + vat / 100));
	if(vatReg)
	{
		var T20perSellingPrice=calcround((sellPrice-totalFees-(sellPrice*Short))/((20/100)+1-Short));
		var T30perSellingPrice=calcround((sellPrice-totalFees-(sellPrice*Short))/((30/100)+1-Short));
		var T40perSellingPrice=calcround((sellPrice-totalFees-(sellPrice*Short))/((40/100)+1-Short));
		var T50perSellingPrice=calcround((sellPrice-totalFees-(sellPrice*Short))/((50/100)+1-Short));
		var T60perSellingPrice=calcround((sellPrice-totalFees-(sellPrice*Short))/((60/100)+1-Short));
	}
	else
	{
		var T20perSellingPrice=calcround((sellPrice-totalFees-vatOnFees)/((20/100)+1));
		var T30perSellingPrice=calcround((sellPrice-totalFees-vatOnFees)/((30/100)+1));
		var T40perSellingPrice=calcround((sellPrice-totalFees-vatOnFees)/((40/100)+1));
		var T50perSellingPrice=calcround((sellPrice-totalFees-vatOnFees)/((50/100)+1));
		var T60perSellingPrice=calcround((sellPrice-totalFees-vatOnFees)/((60/100)+1));
	}
	if(Loaderupdate)
	{
		result.T20perSellingPrice=T20perSellingPrice;
		result.T30perSellingPrice=T30perSellingPrice;
		result.T40perSellingPrice=T40perSellingPrice;
		result.T40perSellingPrice=T40perSellingPrice;
		result.T50perSellingPrice=T50perSellingPrice;
		result.T60perSellingPrice=T60perSellingPrice;
	}
	
	if(typeof localStorage.vatFlatRate!="undefined" && localStorage.vatFlatRate)
	{
		var FlatRate=calcround(sellPrice*(vat / 100));
		result.FlatRate = FlatRate;
		totalFees +=FlatRate;
	}
	else
	{
    	totalFees += vatReg ? vatToRemit : vatOnFees;
    	result.vatOnFees = vatOnFees;
    	result.vatToRemit = vatToRemit;
    }
    //totalFees += vatReg ? vatToRemit : vatOnFees;
    var profit = sellPrice - buyPrice - totalFees;
    //console.log("profit--->",profit);
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
	//totalFees=calcround(totalFees);
	totalFees=totalFees;
	profit=profit;
    //result.vatOnFees = calcround(vatOnFees);
    //result.vatOnFees = vatOnFees;
    //result.vatToRemit = vatToRemit;
    result.totalFees = totalFees;
    result.profit = parseFloat(profit.toFixed(2));
    result.useVAT = vatReg;
    result.isEFN = efn;
    result.roi=parseFloat(result.roi.toFixed(2));
    result.profitMargin = (result.profitAdj || profit) / sellPrice * 100;
    result.profitMargin=parseFloat(result.profitMargin.toFixed(2));
     ScoringVar['Profit']=result.profit;
		ScoringVar['profitMargin']=result.profitMargin;
		ScoringVar['Roi']=result.roi;
    return result;
  }

  function _calcFeesUS(sellPrice, buyPrice, weight, isKilogram, vat, vatReg, efn, p, localStorage,vatBuyPrice,defaultcall=true,Loaderupdate=true) {
    var referralFee = sellPrice * p.referralFeeP;
     var referralFee = parseFloat(p.referralFee)
    var fbaFees = p.fbaFee;
    var totalFees = referralFee + fbaFees;

    var result = {
      referralFee: referralFee,
      fbaFees: fbaFees,
      totalFBAFeesEst: totalFees,
    };

    if (localStorage.fixedPrepFee != '' && isNumber(localStorage.fixedPrepFee)) {
      let r = parseFloat(localStorage.fixedPrepFee);
      result.fixedPrepFee = r;
      totalFees += r;
    }

    if (localStorage.inboundShippingUS != '' && isNumber(localStorage.inboundShipping)) {
      result.inboundShipping = parseFloat(localStorage.inboundShippingUS) * weight;
      if (!isNaN(result.inboundShipping)) {
        totalFees += result.inboundShipping;
      }
    }

    if (localStorage.transitCost != '' && isNumber(localStorage.transitCost)) {
      result.transitCost = parseFloat(localStorage.transitCost);
      if (!isNaN(result.transitCost)) {
        totalFees += result.transitCost;
      }
    }

    if (localStorage.feeAdjustment != '' && isNumber(localStorage.feeAdjustment)) {
      let r = totalFees * parseFloat(localStorage.feeAdjustment) / 100;
      result.fbaFeeAdjustment = r;
      totalFees += r;
    }

    var profit = sellPrice - buyPrice - totalFees;
    if(profit.toFixed(2)==0.01 && defaultcall)
    {
    	profit=0.00;
    }
    if (localStorage.taxRate != '' && isNumber(localStorage.taxRate)) {
      let r = sellPrice * parseFloat(localStorage.taxRate) / 100;
      result.salesTax = r;
      profit -= r;
      	var T20perSellingPrice=calcround((sellPrice-totalFees-r)/((20/100)+1));
		var T30perSellingPrice=calcround((sellPrice-totalFees-r)/((30/100)+1));
		var T40perSellingPrice=calcround((sellPrice-totalFees-r)/((40/100)+1));
		var T50perSellingPrice=calcround((sellPrice-totalFees-r)/((50/100)+1));
		var T60perSellingPrice=calcround((sellPrice-totalFees-r)/((60/100)+1));
    }
    else
    {
    	var T20perSellingPrice=calcround((sellPrice-totalFees)/((20/100)+1));
		var T30perSellingPrice=calcround((sellPrice-totalFees)/((30/100)+1));
		var T40perSellingPrice=calcround((sellPrice-totalFees)/((40/100)+1));
		var T50perSellingPrice=calcround((sellPrice-totalFees)/((50/100)+1));
		var T60perSellingPrice=calcround((sellPrice-totalFees)/((60/100)+1));
    }
	/************added for new RIOBUYPRICE*******/
	
	if(Loaderupdate)
	{
		result.T20perSellingPrice=T20perSellingPrice;
		result.T30perSellingPrice=T30perSellingPrice;
		result.T40perSellingPrice=T40perSellingPrice;
		result.T40perSellingPrice=T40perSellingPrice;
		result.T50perSellingPrice=T50perSellingPrice;
		result.T60perSellingPrice=T60perSellingPrice;
	}
	/************added for new RIOBUYPRICE*******/
    result.roi = profit / buyPrice * 100;
    if (localStorage.profitAdjustment != '' && isNumber(localStorage.profitAdjustment)) {
      let r = profit * (1 + parseFloat(localStorage.profitAdjustment) / 100);
      result.profitAdj = r;
      result.roi = r / buyPrice * 100;
    }

    result.totalFees = totalFees;
    result.profit = parseFloat(profit.toFixed(2));
    result.profitMargin = (result.profitAdj || profit) / sellPrice * 100;
    result.profitMargin=parseFloat(result.profitMargin.toFixed(2));
    result.useVAT = vatReg;
    result.isEFN = efn;
    result.roi=parseFloat(result.roi.toFixed(2));
    
if(typeof result.totalFBAFeesEst == "undefined" && !isNaN(result.totalFees))
{
	result.totalFBAFeesEst= result.totalFees;
}
	
    return result;
  }

  function getFees(asin, sellPrice, buyPrice, weight, isKilogram, vat, vatReg, efn,vatBuyPrice,defaultcall=true,Loaderupdate=true) {
    if (region === 'com') {
      efn = false;
    }
    return Promise.all([
      _getFees(asin, sellPrice, efn),
      getOptions(),
    ])
      .then(([p, localStorage]) => {
		 // console.log("sellPrice--->",sellPrice);
        p.referralFeeP = Math.round(p.referralFee / sellPrice * 100) / 100;
         //p.referralFeeP = Math.round(p.referralFee / sellPrice);
        p.fbaFee = efn ? 0 : p.totalFee - p.referralFee;
        const calcFeesFunc = region === 'com' ? _calcFeesUS : _calcFees;
        const result = calcFeesFunc(sellPrice, buyPrice, weight, isKilogram, vat, vatReg, efn, p, localStorage,vatBuyPrice,defaultcall,Loaderupdate);
        /*var priceLeft = 0;
        var priceRight = Math.max(buyPrice * 100, buyPrice + 100);
        for (var i = 0; i < 20; i++) { 
          const midPrice = (priceLeft + priceRight) / 2;
          const r = calcFeesFunc(midPrice, buyPrice, weight, isKilogram, vat, vatReg, efn, p, localStorage,vatBuyPrice,false);
          if (r.profit > 0 && r.profit < 0.01 || Math.abs(priceRight - priceLeft) < 0.005) {
            break;
          }
          if (r.profit > 0) {
            priceRight = midPrice;
          } else {
            priceLeft = midPrice;
          }
        }*/
		if(typeof result.T20perSellingPrice!="undefined")
		{
			$("#Roi20per").html(result.T20perSellingPrice)
		}
		if(typeof result.T30perSellingPrice!="undefined")
		{
			$("#Roi30per").html(result.T30perSellingPrice)
		}
		if(typeof result.T40perSellingPrice!="undefined")
		{
			$("#Roi40per").html(result.T40perSellingPrice)
		}
		if(typeof result.T50perSellingPrice!="undefined")
		{
			$("#Roi50per").html(result.T50perSellingPrice)
		}
		if(typeof result.T60perSellingPrice!="undefined")
		{
			$("#Roi60per").html(result.T60perSellingPrice)
		}
		//priceLeft=Number(priceLeft.toFixed(2));
		//priceRight=Number(priceRight.toFixed(2));
        //result.breakeven = Math.round(((priceLeft + priceRight) / 2 * 100).toFixed(2)) / 100;
        result.breakeven = calcBreakEvenPoint(sellPrice,result,buyPrice);
        //result.breakeven = result.totalFees + buyPrice;
        if(result.fbaFees<=0 && !cautionAlert && result.isEFN!=true && typeof result.isEFN!="undefined" && appshown)
        {
        	cautionAlert=true;
        	alert("This Item Has No FBA Fees Please Use Caution");
        }
        ScoringVar['Profit']=result.profit;
		ScoringVar['profitMargin']=result.profitMargin;
		ScoringVar['Roi']=result.roi;
		//console.log("result--->",result);
        return result;
      });
  }
  function getFeesFBM(asin, sellPrice, buyPrice, weight, isKilogram, vat, vatReg, efn,vatBuyPrice,shipPrice,defaultcall=true,Loaderupdate=true) {
    if (region === 'com') {
      efn = false;
    }
    return Promise.all([
      _getFeesFBM(asin, sellPrice, efn),
      getOptions(),
    ])
      .then(([p, localStorage]) => {
        p.referralFeeP = Math.round(p.referralFee / sellPrice * 100) / 100;
        //p.referralFeeP = Math.round(p.referralFee / sellPrice);
        if(p.enableVariableFee)
        {
        	p.fbmVariableFee = Number(p.totalFee) - Number(p.referralFee);
        }
        else
        {
        	p.fbmVariableFee=0;
        }
        p.fbaFee=0;
        const calcFeesFunc = region === 'com' ? _calcFeesUSFBM : _calcFeesFBM;
        const result = calcFeesFunc(sellPrice, buyPrice, weight, isKilogram, vat, vatReg, efn, p, localStorage,vatBuyPrice,shipPrice,defaultcall,Loaderupdate);
        /*var priceLeft = 0;
        var priceRight = Math.max(buyPrice * 100, buyPrice + 100);
        for (var i = 0; i < 20; i++) { 
          const midPrice = (priceLeft + priceRight) / 2;
          const r = calcFeesFunc(midPrice, buyPrice, weight, isKilogram, vat, vatReg, efn, p, localStorage,vatBuyPrice,shipPrice,false);
          if (r.profit > 0 && r.profit < 0.01 || Math.abs(priceRight - priceLeft) < 0.005) {
            break;
          }
          if (r.profit > 0) {
            priceRight = midPrice;
          } else {
            priceLeft = midPrice;
          }
        }*/
		if(typeof result.T20perSellingPrice!="undefined")
		{
			$("#Roi20per").html(result.T20perSellingPrice)
		}
		if(typeof result.T30perSellingPrice!="undefined")
		{
			$("#Roi30per").html(result.T30perSellingPrice)
		}
		if(typeof result.T40perSellingPrice!="undefined")
		{
			$("#Roi40per").html(result.T40perSellingPrice)
		}
		if(typeof result.T50perSellingPrice!="undefined")
		{
			$("#Roi50per").html(result.T50perSellingPrice)
		}
		if(typeof result.T60perSellingPrice!="undefined")
		{
			$("#Roi60per").html(result.T60perSellingPrice)
		}
        //result.breakeven = Math.round((priceLeft + priceRight) / 2 * 100) / 100;
        result.breakeven = calcBreakEvenPoint(sellPrice,result,buyPrice);
        /*if(result.fbaFees<=0 && !cautionAlert && result.isEFN!=true && typeof result.isEFN!="undefined" && appshown)
        {
        	cautionAlert=true;
        	alert("This Item Has No FBA Fees Please Use Caution");
        }*/
        ScoringVar['Profit']=result.profit;
		ScoringVar['profitMargin']=result.profitMargin;
		ScoringVar['Roi']=result.roi;
		//console.log("result--->",result);
        return result;
      });
  }

  this.getFeesFBM = getFeesFBM;
  this.getFees = getFees;
}
 
function _getOffers(region, asin) {

  return new Promise((resolve, reject) => {
  if(typeof $('#mbc').attr('data-asin') !='undefined' && $('#mbc').attr('data-asin') !='')
  {
  	asin=$('#mbc').attr('data-asin');
  }
  	var scraperUrl1="http://api.scraperapi.com?api_key="+ScraperApiKey+"&url=";
	var scraperUrl1="";
    var url = 'https://www.amazon.' + region + '/gp/offer-listing/' + asin + '/ref=dp_olp_new?ie=UTF8&condition=new';
    chrome.runtime.sendMessage({ data: {
        		FunctionCall: '_getOffers' ,
        		URL: scraperUrl1+url
        		},'FunctionCall':'_getOffers' }, 
      function(result) {
   // $.get(url).then(function (result) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(result, 'text/html');
      var $offerList = $('#olpOfferList', doc);
      sessionIdConfirmPage = $('[name="session-id"]',doc).val();
    	var returngetdata=getData($('.olpOffer',doc),url);
      		mineOfferListings(returngetdata,result);
      var htmlg='<div class="a-column a-span4" id="top10sellerdata" role="columnheader" style="width: 100%;align-items: right;text-align: center;font-size: 16px;font-weight:  900;">Top 10 Sellers<br><font color="#B12704" style="font-size:14px">Please don\'t close page while fetching seller stock qty.</font></div>';
      $("[role^=columnheader]",doc).parent().html(htmlg);	
      if ($offerList.length > 0) {
        $offerList.find('.a-span-last').remove();
        $offerList.find('.a-span2 .a-spacing-small').remove();
        $offerList.find('.a-column.a-span3:nth-child(4)').remove();
        $offerList.find('.olpDeliveryColumn').remove();
        var lastRow = $offerList.find('.a-row').get(5);
        if (lastRow) {
          $(lastRow).nextAll().remove();
        }
        $offerList.find('.a-section').removeClass('a-spacing-double-large');

        $offerList.find('.a-column').css('width', '30%');
        $offerList.find('#top10sellerdata').css('width', '100%');
      }
	var loadingmes='<span class="StockShownLoad">(Loading..)</span>';
	$offerList.find('.olpCondition').append(loadingmes);
      var brand = $('#olpProductByline', doc).text();
      brand = brand.replace('by', '').trim();

      // Parse information about sellers
      var sellers = $('.olpSellerColumn', doc)
        .map((i, col) => $('h3.olpSellerName', col).text().trim()).toArray();
      resolve({
        offersHTML: $offerList.prop('outerHTML'),
        brand,
        sellers,
      })
   /* }).fail(function (e) {
    console.log("error:",e);
      //reject({ 'error': 'networkError', 'msg': e.message });
    });*/
    })
  });
}
function IsValidJSONString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
function _checkRestrictions(region, asin) {
  var productURL = 'https://sellercentral.amazon.' + region + '/productsearch?q=' + asin;
  var productURLRestriction = 'https://sellercentral.amazon.' + region + '/productsearch/search?query=' + asin+"&page=1";
  return new Promise((resolve, reject) => {
  chrome.runtime.sendMessage({ data: {
          		urlProductInfo: productURLRestriction,
          		dataType: 'html' 
        		},'FunctionCall':'SellerCenterWeight' }, 
      function(response) 
      {
      		var parser = new DOMParser();
      		var dom = parser.parseFromString(response, 'text/html');
      		//html=null;
      		//console.log("response---->",response);
      			if ($('#ap_signin1a_pagelet, #merchant-picker-auth-status, #signInSubmit', dom).length) 
      			{
      				$(".ungateButton").css({"opacity":"0.5"});
      				$(".ungateButton").attr("disabled", true);
        			return reject();
      			}
      			$(".loggedInCheck").show();
      			if(IsValidJSONString(response))
      			{
      				
      				 var $this = {
    					canSellType: ['new', 'collectible', 'used', 'refurbished'],
    					canNotSellType: ['new', 'collectible', 'used', 'refurbished'],
    					restrictedSellType: [],
    					productNotFound: true
  						};
      				var JsonPrase=$.parseJSON(response);
      				//console.log("response---->",JsonPrase);
      				if(typeof JsonPrase.products[0]!="undefined")
      				{
      					$this.productNotFound=false;
      					if(typeof JsonPrase.products[0].salesRank!="undefined")
      					{
      						GlobalRank=numberWithCommas(JsonPrase.products[0].salesRank);
      						//$("span[data-bind='text: rank']").html(GlobalRank);
      					}
      					if(typeof JsonPrase.products[0].restrictedForAllConditions!="undefined")
      					{
      						if(JsonPrase.products[0].restrictedForAllConditions)
      						{
      							index = $this.canSellType.indexOf("new");
        						if (index >= 0) 
        						{
          							$this.canSellType.splice(index, 1);
        						}
      						}
      					}
      					if(JsonPrase.products[0].qualificationMessages.length==0)
      					{
      						var results=[];
      							results[0]=$this;
      							//showBlock(results);
      							results.productURL = productURL;
        						//return resolve(results);
        						scrapeNewDesign(results, (results) => {
        						results.productURL = productURL;
        						resolve(results);
      							});
      					}
      					for(var i=0;i<JsonPrase.products[0].qualificationMessages.length;i++)
      					{
      						if(JsonPrase.products[0].qualificationMessages[i].qualificationMessage==null)
      						{
      							JsonPrase.products[0].qualificationMessages[i].qualificationMessage="";
      						}
      						if(JsonPrase.products[0].qualificationMessages[i].qualificationMessage.indexOf("You need approval to list this brand")>=0)
      						{
      							if(JsonPrase.products[0].qualificationMessages[i].conditionList!=null)
      							{
      								if(JsonPrase.products[0].qualificationMessages[i].conditionList.indexOf("new")>=0)
      								{
      									index = $this.canSellType.indexOf("new");
        								if (index >= 0) 
        								{
          									$this.canSellType.splice(index, 1);
        								}
      								}
      								else if(JsonPrase.products[0].qualificationMessages[i].conditionList.indexOf("New")>=0)
      								{
      									index = $this.canSellType.indexOf("new");
        								if (index >= 0) 
        								{
          									$this.canSellType.splice(index, 1);
        								}
      								}
      									
      							}
      							else
      							{
      								index = $this.canSellType.indexOf("new");
        							if (index >= 0) 
        							{
          								$this.canSellType.splice(index, 1);
        							}
      							}
      						}
      						else if(JsonPrase.products[0].qualificationMessages[i].qualificationMessage.indexOf("You need approval")>=0)
      						{
      							if(JsonPrase.products[0].qualificationMessages[i].conditionList!=null)
      							{
      								if(JsonPrase.products[0].qualificationMessages[i].conditionList.indexOf("new")>=0)
      								{
      									index = $this.canSellType.indexOf("new");
        								if (index >= 0) 
        								{
          									$this.canSellType.splice(index, 1);
        								}
      								}
      								else if(JsonPrase.products[0].qualificationMessages[i].conditionList.indexOf("New")>=0)
      								{
      									index = $this.canSellType.indexOf("new");
        								if (index >= 0) 
        								{
          									$this.canSellType.splice(index, 1);
        								}
      								}
      							}
      						
      						}
      						else if(JsonPrase.products[0].qualificationMessages[i].qualificationMessage.indexOf("You cannot list")>=0)
      						{
      							if(JsonPrase.products[0].qualificationMessages[i].conditionList!=null)
      							{
      								if(JsonPrase.products[0].qualificationMessages[i].conditionList.indexOf("new")>=0)
      								{
      									index = $this.canSellType.indexOf("new");
        								if (index >= 0) 
        								{
          									$this.canSellType.splice(index, 1);
        								}
      								}
      								else if(JsonPrase.products[0].qualificationMessages[i].conditionList.indexOf("New")>=0)
      								{
      									index = $this.canSellType.indexOf("new");
        								if (index >= 0) 
        								{
          									$this.canSellType.splice(index, 1);
        								}
      								}
      							}
      						}
      						else if(JsonPrase.products[0].qualificationMessages[i].qualificationMessage.indexOf("You are not approved")>=0)
      						{
      							if(JsonPrase.products[0].qualificationMessages[i].conditionList!=null)
      							{
      								if(JsonPrase.products[0].qualificationMessages[i].conditionList.indexOf("new")>=0)
      								{
      									index = $this.canSellType.indexOf("new");
        								if (index >= 0) 
        								{
          									$this.canSellType.splice(index, 1);
        								}
      								}
      								else if(JsonPrase.products[0].qualificationMessages[i].conditionList.indexOf("New")>=0)
      								{
      									index = $this.canSellType.indexOf("new");
        								if (index >= 0) 
        								{
          									$this.canSellType.splice(index, 1);
        								}
      								}
      							}
      						}
      						if(i==JsonPrase.products[0].qualificationMessages.length-1)
      						{
      							var results=[];
      							results[0]=$this;
      							//showBlock(results);
      							results.productURL = productURL;
        						//return resolve(results);
        						scrapeNewDesign(results, (results) => {
        						results.productURL = productURL;
        						resolve(results);
      							});
      						}
      					}
      				}
      				else
      				{
      					var results=[];
      					results[0]=$this;
      					//showBlock(results);
      					results.productURL = productURL;
        				//return resolve(results);
        				scrapeNewDesign(results, (results) => {
        				results.productURL = productURL;
        				resolve(results);
      					});
      				}
      				
      			}
      			else
      			{
      				scrape(dom, (results) => {
        				results.productURL = productURL;
        				resolve(results);
      				});
      			}
      });
   /*$.get(productURL).done(function (html) {
   $.get(productURL).done(function (html) {
      var parser = new DOMParser();
      var dom = parser.parseFromString(html, 'text/html');
      html=null;
      if ($('#ap_signin1a_pagelet, #merchant-picker-auth-status, #signInSubmit', dom).length) {
        return reject();
      }
      scrape(dom, (results) => {
        results.productURL = productURL;
        resolve(results);
      });
    }).fail(() => reject())
   })*/
    
  });
}

function _checkHazmat(region, asin) {
  return new Promise((resolve, reject) => {
  	var URL='https://sellercentral.amazon.' + region + '/hz/m/sourcing/inbound/eligibility?ref_=ag_src-elig_cont_src-mdp&asin=' + asin;
  	chrome.runtime.sendMessage({ data: {
          		urlProductInfo: URL,
          		dataType: 'html' 
        		},'FunctionCall':'SellerCenterWeight' }, 
      function(response) 
      {
      	var parser = new DOMParser();
      	var dom = parser.parseFromString(response, 'text/html');
      	$('.a-expander-section-content',dom).remove();
      	var returnarray={};
      	returnarray['Hazmat']=/Hazmat/.exec($('body', dom).html());
      	returnarray['NotFound']=/Product not in Amazon catalogue/.exec($('body', dom).html());
      	resolve(returnarray);
      });
    /*$.get('https://sellercentral.amazon.' + region + '/hz/m/sourcing/inbound/eligibility?ref_=ag_src-elig_cont_src-mdp&asin=' + asin).done(function (html) {
      var parser = new DOMParser();
      var dom = parser.parseFromString(html, 'text/html');
      $('.a-expander-section-content',dom).remove();
      resolve(/Hazmat/.exec($('body', dom).html()));
    });*/
  });
}
function _checkDangerous(region, asin) {
asin=parseAsinNewAdded(location.href);
  return new Promise((resolve, reject) => {
  var sif_profile="SXAugurExecuteWorkflowParamsEU";
  var diagRunIdMain="";
  if(region=="com")
  {
  	sif_profile="SXAugurExecuteWorkflowParamsNA";
  }
  
  	var URL='https://sellercentral.amazon.' + region + '/help/workflow/execute-workflow?client=FullPageHelp&addHelpConditionalProcessing=true&directAnswerWidgetId=da-intent-hazmat-paragonforsellers&workflowId=fba_dangerous_goods&mons_sel_locale=en_GB&languageSwitched=1';
  	chrome.runtime.sendMessage({ data: {
          		urlProductInfo: URL,
          		dataType: 'html' 
        		},'FunctionCall':'SellerCenterWeight' }, 
      function(response) 
      {
      	var parser = new DOMParser();
      	var dom = parser.parseFromString(response, 'text/html');
      	var Jsoneid=$('div[data-workflow-attr]',dom).attr("data-workflow-attr");
      	if(typeof Jsoneid!="undefined" && Jsoneid.trim()!=""  && isJSON(JSON.parse(Jsoneid)))
      	{
      		const u = JSON.parse(Jsoneid);
      		diagRunIdMain=u.diagRunId;
      	}
      	var URL='https://sellercentral.amazon.' + region + '/help/workflow/execute-workflow?sif_profile='+sif_profile;
      	chrome.runtime.sendMessage({ data: {
  	 workflowId: "fba_dangerous_goods",
                            requiredAttributes: ["is_asin_available"],
                            currentStepName: "determine_if_seller_has_an_asin_task_1ozyrjg",
                            "sxaugur.encrypt.newAttributes": '{"is_asin_available":"Yes"}',
                            diagRunId: diagRunIdMain,
                            client: "FullPageHelp",
                            paramountEphUser: "undefined",
                            paramountEphUuid: "undefined",
                            isResumingWorkflow: !1
        		},'FunctionCall':'SellerCenterWeightPOST',
        		'urlProductInfo': URL,
        		'dataType':'html' ,
        		 }, 
      function(response) 
      {
      	var URL='https://sellercentral.amazon.' + region + '/help/workflow/execute-workflow?sif_profile='+sif_profile;
        if(diagRunIdMain.trim()=="")
        {
        	var parser = new DOMParser();
      	var dom = parser.parseFromString(response, 'text/html');
      	var Jsoneid=$('div[data-workflow-attr]',dom).attr("data-workflow-attr");
      	if(typeof Jsoneid!="undefined" && Jsoneid.trim()!="" && isJSON(JSON.parse(Jsoneid)))
      	{
      		var  u = JSON.parse(Jsoneid);
      		diagRunIdMain=u.diagRunId;
      	}
        }            
  	chrome.runtime.sendMessage({ data: {
  	 workflowId: "fba_dangerous_goods",
                                requiredAttributes: ["item_id", "obtain_asin_blurb", "continue_task_18ie4by"],
                                currentStepName: "obtain_asin_task_18ie4by",
                                "sxaugur.encrypt.newAttributes": '{"continue_task_18ie4by":"true","item_id":"' + asin + '"}',
                                diagRunId: diagRunIdMain,
                                client: "FullPageHelp",
                                paramountEphUser: "undefined",
                                paramountEphUuid: "undefined",
                                isResumingWorkflow: !1
        		},'FunctionCall':'SellerCenterWeightPOST',
        		'urlProductInfo': URL,
        		'dataType':'html' ,
        		 }, 
      function(response) 
      {
      	var parser = new DOMParser();
      	var dom = parser.parseFromString(response, 'text/html');
      	var returnarray={};
      	if(/it is not enrolled in FBA/.exec($('body', dom).html()))
      	{
      		returnarray['Danger']=true;
      	}
      	else if(/This product is dangerous goods/.exec($('body', dom).html()))
      	{
      		returnarray['Danger']=true;
      	}
      	else
      	{
      		returnarray['Danger']=false;
      	}
      	resolve(returnarray);
      })
    })
      	
      });
  });
}
function _grabPriceAndRank(region, asin) {
  const currentRegion = extractCountryFromURL(location.href);
	const url = getProductURL(region, asin);
	var scraperUrl="";
	return new Promise((resolve, reject) => 
  	{
  chrome.runtime.sendMessage({data:{
  url: "https://admin.fbamultitool.com/appapi/productDetails.php",
  dataType:'html',
  asin: asin,
  country: region,
  MWSTOKENUK: MWSTOKENUK,
  MWSSELLERIDUK: MWSSELLERIDUK,
  MWSTOKENUSA: MWSTOKENUSA,
  MWSSELLERIDUSA: MWSSELLERIDUSA,
  CallType: 'NoKeepa',
  FunctionCall: 'ProductHistory',
  LicenseKey: valicenseKey
  },'FunctionCall':'ProductHistory'},
  function(response)
  {
  	var ItemDimensions="";
  	var ItemDimensionsInAdded="";
  	var BoxDimensions="";
  	var BoxDimensionsInAdded="";
  	if(response.status=="success")
  	{
  		var arrweight=response.data.weight.toString().split("__");
  		var Weight=0;
  		var Weightunit="";
  		if(typeof arrweight[0]!="undefined")
  		{
  			Weight=arrweight[0];
  		}
  		if(typeof arrweight[1]!="undefined")
  		{
  			Weightunit=arrweight[1];
  		}
  		if(response.data.height.toString().trim()!="" && response.data.length.toString().trim()!="" && response.data.width.toString().trim()!="")
  		{
  			var arrDimensionsH=response.data.height.toString().split("__");
  			var arrDimensionsL=response.data.length.toString().split("__");
  			var arrDimensionsW=response.data.width.toString().split("__");
  			if(typeof arrDimensionsH[1]!="undefined")
  			{
  				if(arrDimensionsH[1]=="inches"  && (arrDimensionsH[0]>0 || arrDimensionsL[0]>0 || arrDimensionsW[0]>0))
  				{
  					ItemDimensions= calcround(arrDimensionsH[0]*2.54) +" x "+ calcround(arrDimensionsL[0]*2.54) +" x "+ calcround(arrDimensionsW[0]*2.54) +" cm";
  					ItemDimensionsInAdded = calcround(arrDimensionsH[0]) +" x "+ calcround(arrDimensionsL[0]) +" x "+ calcround(arrDimensionsW[0]) +" in";
  					if(ItemDimensionsInAdded.trim()!="")
  					{
  						panelVM.ItemDimensionsInAdded(ItemDimensionsInAdded);
  						panelVM.ItemDimensions(ItemDimensions);
  					}
  				}
  			}
  			
  		}
  		if(response.data.pheight.toString().trim()!="" && response.data.plength.toString().trim()!="" && response.data.pwidth.toString().trim()!="")
  		{
  			var arrDimensionspH=response.data.pheight.toString().split("__");
  			var arrDimensionspL=response.data.plength.toString().split("__");
  			var arrDimensionspW=response.data.pwidth.toString().split("__");
  			if(typeof arrDimensionspH[1]!="undefined")
  			{
  				if(arrDimensionspH[1]=="inches"  && (arrDimensionspH[0]>0 || arrDimensionspL[0]>0 || arrDimensionspW[0]>0))
  				{
  					BoxDimensions= calcround(arrDimensionspH[0]*2.54) +" x "+ calcround(arrDimensionspL[0]*2.54) +" x "+ calcround(arrDimensionspW[0]*2.54) +" cm";
  					BoxDimensionsInAdded = calcround(arrDimensionspH[0]) +" x "+ calcround(arrDimensionspL[0]) +" x "+ calcround(arrDimensionspW[0]) +" in";
  					if(ItemDimensionsInAdded.trim()!="")
  					{
  						panelVM.BoxDimensionsInAdded(BoxDimensionsInAdded);
						panelVM.BoxDimensions(BoxDimensions);
					}
  				}
  			}
  			
  		}
  	var ToBeReturned= {
    	title: "",
    	rank: response.data.salesrank,
    	category: response.data.category,
    	price: Number(response.data.price),
    	weight: Weight,
    	weightUnit: Weightunit,
    	ItemDimensions: ItemDimensions,
    	BoxDimensions: BoxDimensions,
    	BoxDimensionsInAdded: BoxDimensionsInAdded,
    	ItemDimensionsInAdded: ItemDimensionsInAdded,
    	FBAORFBM: "FBM",
  		};
  	}
  	if((response.status=="success" && Number(response.data.salesrank)<=0) || (response.status=="success" && Number(response.data.salesrank)>0 &&  Number(response.data.price)>0))
  	{
  		
  		if(response.data.height.toString().trim()!="" && response.data.length.toString().trim()!="" && response.data.width.toString().trim()!="")
  		{
  			var arrDimensionsH=response.data.height.toString().split("__");
  			var arrDimensionsL=response.data.length.toString().split("__");
  			var arrDimensionsW=response.data.width.toString().split("__");
  			if(typeof arrDimensionsH[1]!="undefined")
  			{
  				if(arrDimensionsH[1]=="inches" && (arrDimensionsH[0]>0 || arrDimensionsL[0]>0 || arrDimensionsW[0]>0))
  				{
  					ItemDimensions= calcround(arrDimensionsH[0]*2.54) +" x "+ calcround(arrDimensionsL[0]*2.54) +" x "+ calcround(arrDimensionsW[0]*2.54) +" cm";
  					ItemDimensionsInAdded = calcround(arrDimensionsH[0]) +" x "+ calcround(arrDimensionsL[0]) +" x "+ calcround(arrDimensionsW[0]) +" in";
  					if(ItemDimensionsInAdded.trim()!="")
  					{
  						panelVM.ItemDimensionsInAdded(ItemDimensionsInAdded);
  						panelVM.ItemDimensions(ItemDimensions);
  					}
  				}
  			}
  			
  		}
  		if(response.data.pheight.toString().trim()!="" && response.data.plength.toString().trim()!="" && response.data.pwidth.toString().trim()!="")
  		{
  			var arrDimensionspH=response.data.pheight.toString().split("__");
  			var arrDimensionspL=response.data.plength.toString().split("__");
  			var arrDimensionspW=response.data.pwidth.toString().split("__");
  			if(typeof arrDimensionspH[1]!="undefined")
  			{
  				if(arrDimensionspH[1]=="inches"  && (arrDimensionspH[0]>0 || arrDimensionspL[0]>0 || arrDimensionspW[0]>0))
  				{
  					BoxDimensions= calcround(arrDimensionspH[0]*2.54) +" x "+ calcround(arrDimensionspL[0]*2.54) +" x "+ calcround(arrDimensionspW[0]*2.54) +" cm";
  					BoxDimensionsInAdded = calcround(arrDimensionspH[0]) +" x "+ calcround(arrDimensionspL[0]) +" x "+ calcround(arrDimensionspW[0]) +" in";
  					if(ItemDimensionsInAdded.trim()!="")
  					{
  						panelVM.BoxDimensionsInAdded(BoxDimensionsInAdded);
						panelVM.BoxDimensions(BoxDimensions);
					}
  				}
  			}
  			
  		}
  		
  		var ToBeReturned= {
    	title: "",
    	rank: response.data.salesrank,
    	category: response.data.category,
    	price: Number(response.data.price),
    	weight: Weight,
    	weightUnit: Weightunit,
    	ItemDimensions: ItemDimensions,
    	BoxDimensions: BoxDimensions,
    	BoxDimensionsInAdded: BoxDimensionsInAdded,
    	ItemDimensionsInAdded: ItemDimensionsInAdded,
    	FBAORFBM: "FBM",
  		};
  		if (region == currentRegion) 
  		{
    		const productData = getProductData(document, region);
    		if(productData.price>0)
    		{
    			ToBeReturned.price=productData.price;
    		}
    		gotWeightCall=true;
			GotWeight=Weight;
			GotWeightUnit=Weightunit;
    		ToBeReturned.FBAORFBM=productData.FBAORFBM;
    		
  		}
  		resolve(ToBeReturned);
  	}
  	else
  	{
  		if (region == currentRegion) 
  		{
    		const productData = getProductData(document, region);
    		resolve(productData);
  		}
  		/*chrome.runtime.sendMessage({ data: {
          		url: scraperUrl+url,
          		dataType: 'html',
          		FunctionCall: 'ScraperCall',
        		AwsAuthToken: AwsAuthToken,
        		AwsSellerId: AwsSellerId
        		},'FunctionCall':'ScraperCall' }, 
      		function(response) 
      		{
      			var parser = new DOMParser();
      			var doc = parser.parseFromString(response, 'text/html');
      			resolve(getProductData(doc, region));
      		})*/
  		
  			chrome.runtime.sendMessage({ data: {
          		urlProductInfo: scraperUrl+url,
          		dataType: 'html' 
        		},'FunctionCall':'SellerCenterWeight' }, 
      		function(response) 
      		{
      			var parser = new DOMParser();
      			var doc = parser.parseFromString(response, 'text/html');
      			var res=getProductData(doc, region);
      			//console.log("res---->",res);
      			//console.log("ToBeReturned---->",ToBeReturned);
      			if(typeof ToBeReturned=="undefined")
      			{
      				var ToBeReturned=res;
      			}
      			if(Number(res.rank)>0)
      			{
      				ToBeReturned.rank=res.rank;
      			}
      			ToBeReturned.price=res.price;
      			ToBeReturned.FBAORFBM=res.FBAORFBM;
      			resolve(ToBeReturned);
      		})
      }	
    if(ItemDimensions.trim()!="")
	{
		panelVM.ItemDimensions(ItemDimensions);
		panelVM.ItemDimensionsInAdded(ItemDimensionsInAdded);
	}
	if(BoxDimensionsInAdded.trim()!="")
	{
		panelVM.BoxDimensions(BoxDimensions);
		panelVM.BoxDimensionsInAdded(BoxDimensionsInAdded);
	}
	var coll = document.getElementsByClassName("collapsible1");
		var i;
		if(coll.length==1 && !collapscall)
		{
			collapscall=true;
			for (i = 0; i < coll.length; i++) 
			{
  				coll[i].addEventListener("click", function() {
    			this.classList.toggle("active");
    			var content = this.nextElementSibling;
    			chrome.storage.sync.set({ 'Collapsible': !Collapsible});
     			$(content).toggle();
  				});
			}
		}
		if(!collapsibleClickRegistered)
		{
		var coll1 = document.getElementsByClassName("collapsible");
		var i;
		if(coll1.length==1)
		{
			//gotthat=true;
			for (i = 0; i < coll1.length; i++) 
			{
				collapsibleClickRegistered=true;
  				coll1[i].addEventListener("click", function() {
    			this.classList.toggle("active");
    			var content = this.nextElementSibling;
     			$(content).toggle();
  				});
			}
		}
	}
  })
  }).then(data => Object.assign({ url }, data));
  
}
function _grabPriceAndRankbk(region, asin) {
	var scraperUrl="";
  const currentRegion = extractCountryFromURL(location.href);
  
  if (region == currentRegion) {
    const productData = getProductData(document, region);
    return Promise.resolve(productData);
  }
  const url = getProductURL(region, asin);
  return new Promise((resolve, reject) => {
  
  		chrome.runtime.sendMessage({ data: {
          		urlProductInfo: scraperUrl+url,
          		dataType: 'html' 
        		},'FunctionCall':'SellerCenterWeight' }, 
      function(response) 
      {
      		var parser = new DOMParser();
      		var doc = parser.parseFromString(response, 'text/html');
      		resolve(getProductData(doc, region));
      })
   
    /*$.get(url).then(function (result) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(result, 'text/html');
      resolve(getProductData(doc, region));
    }).fail((e) => {
      resolve({
        rank: undefined,
        category: undefined,
        price: undefined,
      })
    });*/
  }).then(data => Object.assign({ url }, data));
}

function Scraper(region) {
  if (!region) {
    region = location.host.replace(/.*?amazon./gi, '')
  }
  this.checkRestrictions = _checkRestrictions.bind(this, region);
  this.checkHazmat = _checkHazmat.bind(this, region);
  this.getOffers = _getOffers.bind(this, region);
  this.checkDangerous = _checkDangerous.bind(this, region);
  this.grabPriceAndRank = _grabPriceAndRank.bind(this, region)
}
function scrapeNewDesign(page, callback) {
 var variants = false;
  if (!variants) {
    callback(page);
  }
}
function scrape(page, callback) {
  var document = page;
  var variants = false;

  var collection = [];
  if( typeof $('.a-box.product', document).html()!="undefined")
  {
  	$('.a-box.product', document).each(function () {
    	var product = parseResult(this);
    	collection.push(product);
  	});
  }
  else if(typeof $('.limitation', document).html()!="undefined")
  {
  	 var $this = {
    canSellType: [],
    canNotSellType: ['new', 'collectible', 'used', 'refurbished'],
    restrictedSellType: []
  };

  }
  if (!variants) {
    callback(collection);
  }
}

function parseResult(node) {
  var $this = {
    canSellType: [],
    canNotSellType: ['new', 'collectible', 'used', 'refurbished'],
    restrictedSellType: []
  };

  $('.a-fixed-right-grid', node).each(function () {
    var syButton = $('.sell-yours-button', this);

    if (syButton.length !== 0) {
      $this.canSellType = getType(this, true);
      let i, type, index;
      for (i = 0; i < $this.canSellType.length; i++) {
        type = $this.canSellType[i];
        index = $this.canNotSellType.indexOf(type);
        if (index >= 0) {
          $this.canNotSellType.splice(index, 1);
        }
      }
    }

    var qtsButton = $('.qualify_to_sell', this);
    if (qtsButton.length !== 0) {
      $this.restrictedSellType = $this.restrictedSellType.concat(getType(this, false));
    }
    for (let i = 0; i < $this.restrictedSellType.length; i++) {
      let type = $this.restrictedSellType[i];
      let index = $this.canNotSellType.indexOf(type);
      if (index >= 0) {
        $this.canNotSellType.splice(index, 1);
      }
    }
  });

  return $this;
}

function getType(box, allIfEmpty) {
  var categories = [];
  var categoriesString = $('.a-text-bold', box).first().text();
  categoriesString = categoriesString.toLowerCase();
  var regexp = / condition(s?)/g;

  if (allIfEmpty && !categoriesString.match(regexp)) {
    categories = ['new', 'collectible', 'used', 'refurbished'];
  } else {
    categoriesString = categoriesString.replace(/ condition(s?)/g, '');

    if (categoriesString) {
      categories = categoriesString.split(', ');
    }
  }
  return categories;
}
/* global $ */

function getRank(region, category, rank) {
  return new Promise((resolve, reject) => {
    /*$.ajax({
      type: 'POST',
      url: 'https://us-central1-restriction-wizard.cloudfunctions.net/getRank',
      data: {
        category,
        region,
      },
      dataType: 'json',
      success: function (p) {
      console.log("=====category======",category);
      console.log("=====region======",region);
      console.log("=====rank======",rank);
      console.log("=====P======",p);
        const count = p.count;

        if (rank / count <= 0.01) {
          return resolve('TOP 1%');
        }
        if (rank / count <= 0.03) {
          return resolve('TOP 3%');
        }
        if (rank / count <= 0.05) {
          return resolve('TOP 5%');
        }
        if (rank / count <= 0.1) {
          return resolve('TOP 10%');
        }

        return resolve('TOP 10%+');
      },
      error: function (msg) {
      console.log("=====category======",category);
      console.log("=====region======",region);
       console.log("=====rank======",rank);
        console.log(msg.responseJSON)
      }
    });*/
    
    var combinekey=region+"__"+category;
    if(typeof _cache[combinekey]=="undefined")
    {
    chrome.runtime.sendMessage({ data: {
          		region: region,
          		category: category,
        		FunctionCall: 'getRank',
				LicenseKey: valicenseKey
        		},'FunctionCall':'getRank' }, 
      function(response) 
      {
      	 console.log("response--->",response);
      	if(response.status=="success")
      	{
      		if(typeof rank!="undefined" && rank!=null)
      		{
      			//console.log("response--->",response);
      			rank=rank.toString().replace(",","");
      		}
      		else
      		{
      			rank=0;
      			return resolve('No Rank');
      		}
      		if(rank==0)
      		{
      			return resolve('No Rank');
      		}
      		const count = response.count;
			_cache[combinekey]=response.count;
			
        	if (rank / count <= 0.01) 
        	{
        		ScoringVar['TopRank']=14;
          		return resolve('TOP 1%');
          		
        	}
        	else if (rank / count <= 0.03) 
        	{
        		ScoringVar['TopRank']=10;
          		return resolve('TOP 3%');
          		
        	}
        	else if (rank / count <= 0.05) 
        	{
        		ScoringVar['TopRank']=8;
          		return resolve('TOP 5%');
          		
        	}
        	else if (rank / count <= 0.1 || rank / count > 0.1) 
        	{
        		ScoringVar['TopRank']=5;
          		return resolve('TOP 10%');
          		
        	}
        	else
        	{
        		return resolve('N/A');
        	}
      	}
      	else
      	{
      		_cache[combinekey]="error";
      		return resolve('N/A');
      		console.log(response);
      	}
    });
}
else
{
	if(_cache[combinekey]!="error")
	{
		const count = _cache[combinekey];
		if(typeof rank!="undefined" && rank!=null)
      		{
      			rank=rank.toString().replace(",","");
      		}
      		else
      		{
      			rank=0;
      			return resolve('No Rank');
      		}
      		if(rank==0)
      		{
      			return resolve('No Rank');
      		}
		if (rank / count <= 0.01) 
        	{
        		ScoringVar['TopRank']=14;
          		return resolve('TOP 1%');
          		
        	}
        	else if (rank / count <= 0.03) 
        	{
        		ScoringVar['TopRank']=10;
          		return resolve('TOP 3%');
          		
        	}
        	else if (rank / count <= 0.05) 
        	{
        		ScoringVar['TopRank']=8;
          		return resolve('TOP 5%');
          		
        	}
        	else if (rank / count <= 0.1) 
        	{
        		ScoringVar['TopRank']=5;
          		return resolve('TOP 10%');
          		
        	}
        	else
        	{
        		return resolve('N/A');
        	}
	}
	else
	{
		return resolve('N/A');
	}
}
  });
}

function getPureNumber(first) {
  if (first && !isNumber(first)) {
    return parseFloat(first.replace(/[^\d.-]/g, ''));
  }
  return first;
};

function isNumber(v) {
  if (undefined === v || null === v) {
    return false;
  }
  if (typeof v === 'number') {
    return true;
  }
  return !isNaN(v - 0);
}
var PanelView = function (key) {
	$("#superLeafTitleFeatureGroup div").css("display","");
  var $panel = $(templates['panel.html']);
  if($("#superleafActionPanelWrapper").length)
  {
  	appshown=true;
  	$panel.prependTo('#tradeInButton_feature_div');
  }
  else if($('#snsBuyBoxAccordion').length)
  {
      appshown=true;
      $panel.prependTo('#snsBuyBoxAccordion');
  }
  else if($('#desktop_buybox').length)
  {
  	appshown=true;
  	$panel.insertBefore('#desktop_buybox');
  }
  else if($('#actionPanel').length)
  {
		appshown=true;
		$panel.prependTo('#actionPanel');
  }
  else if ($('#tellAFriendBox_feature_div').length) {
  appshown=true;
  var obj=$('#tellAFriendBox_feature_div').parent();
  
    $panel.insertAfter('#tellAFriendBox_feature_div');
  } 
  else if($('#tellAFriendBylineBox_feature_div').length)
  {
  	appshown=true;
  		$panel.insertAfter('#tellAFriendBylineBox_feature_div');
  }
  else if ($('#buybox > .a-padding-base').length) {
  appshown=true;
    $panel.prependTo('#buybox > .a-padding-base');
  }
  var $panel2 = $(templates['title-panel.html']);
  if(typeof key!="undefined")
  {
  	
  	if($('#booksTitle').length)
  	{
  		$panel2.appendTo('#booksTitle');
  		$('#booksTitle').attr('style','margin-left: 20%;');
  		//$('.rwizard-title-panel').attr('style','margin-left: 20%;');
  	}
  	if($('#centerCol').length)
  	{
  		$panel2.prependTo('#centerCol');
  		//$('#booksTitle').attr('style','margin-left: 20%;');
  		//$('.rwizard-title-panel').attr('style','margin-left: 20%;');
  	}
  	else
  	{
  		$panel2.insertAfter('#title_feature_div');
  	}
  }
  
  templates=null;
/*chrome.storage.sync.get(['Permissions'], function (data) {
if((typeof data.Permissions!="undefined" && data.Permissions=="Restricted") || typeof data.Permissions=="undefined")
{
  document.querySelector('#SaveLicenseButton').addEventListener('click', function(event) {
  chrome.runtime.sendMessage({ data: {
        		FunctionCall: 'permissions' 
        		},'FunctionCall':'permissions' }, 
      function(response) {
      console.log("response---->",response);
      if(typeof response!="undefined" && response!=null)
      {
      	if(response)
      	{
      		$("permissions").hide();
      		$("licensekey").show();
      	}
      	else
      	{
      		createCustomAlert("Please Provide Permissions To This Extension To Serve Your Purpose");
      	}
      }
      })
  
      });
    
}
});*/
      
  return [$panel.get(0), $panel2.get(0)];
}
/* global $ chrome ko */

function AppViewModel() {
  const self = this;
  const currentRegion = extractCountryFromURL(location.href);
  const currentCurrency = CURRENCIES[currentRegion];
  const currentASIN = parseAsinNewAdded(location.href);
  self.logoURL = chrome.extension.getURL('img/logo.svg');
  self.loggedIn = ko.observable(true);
  self.prepCheckhtml = ko.observable(false);
  self.Collapsible = ko.observable(false);
  self.prepCheckToShow = ko.observable(false);
  self.loggedInCheck = ko.observable(false);
  self.loading = ko.observable(true);
  self.isLicenseValid = ko.observable(false);
  self.hasLicense = ko.observable(false);
  self.data = ko.observable({});
  self.showMain = ko.observable(false);
  self.hazmatHTML = ko.observable('');
  self.dangerousHTML = ko.observable('');
  self.dangerousHTMLHover = ko.observable('');
  self.licenseKey = ko.observable('');
  self.salesRank = ko.observable('');
  self.asin = ko.observable('');
  self.fees = ko.observable({});
  self.sellPrice = ko.observable();
  self.shipPrice = ko.observable();
  self.FBAORFBM = ko.observable();
  self.buyPrice = ko.observable();
  self.buyPriceCurrency = ko.observable(currentCurrency);
  self.buyPriceConverted = ko.observable();
  self.rank = ko.observable('');
  self.SalesRankDate=ko.observable('');
  self.rankTop = ko.observable('');
  self.BoxDimensions = ko.observable('');
  self.BoxDimensionsInAdded = ko.observable('');
  self.ItemDimensions = ko.observable('');
  self.ItemDimensionsInAdded = ko.observable('');
  self.category = ko.observable('');
  self.showCalc = ko.observable(true);
  self.weight = ko.observable(undefined);
  self.weightUnit = ko.observable('');
  self.countriesData = ko.observableArray();
  self.loginURL = 'https://sellercentral.amazon.' + currentRegion + '/';
  self.currencySign = ko.observable(CURRENCY_SIGNS[currentRegion]);
  self.efn = ko.observable(false);
  self.fbmflag = ko.observable(false);
	self.BreakEvenValue = ko.observable(false);
  self.offersHTML = ko.observable(undefined);
  self.plRisk = ko.observable(undefined);
  self.productName = ko.observable('');
  self.qty = ko.observable(1);
  self.storeURL = ko.observable('');
  self.showEFNSwitch = ko.observable(currentRegion !== 'com');
  self.showFBMSwitch = ko.observable(true);

  var calc = new Calc(currentRegion);
  var scraper = new Scraper(currentRegion);

 
  self.totalFees = ko.computed(function () {
    const fees = self.fees();
    const qty = parseInt(self.qty()) || 1;

    var totalFees = {};
    Object.keys(fees).forEach((key) => {
      const nonMiltiply = ['breakeven', 'profitMargin', 'roi']
      if (typeof fees[key] === 'number' && nonMiltiply.indexOf(key) === -1) {
     
        totalFees[key] = fees[key] * qty;
      } else {

        totalFees[key] = fees[key];
      }
    });
    return totalFees;
    
  }, self);

  self.displayWeight = ko.computed(function () {
    var unit = self.weightUnit();

    if (unit === 'kilograms') {
      unit = 'Kg';
    }
    if (unit === 'LBS') {
      unit = 'lbs';
    }
    var weight = self.weight();
    
    return (weight ? weight.toFixed(2) : '') + ' ' + unit;
  }, self);

  self.showLicenseDialog = ko.computed(function () {
  	
    return !(!self.loading() && !(self.hasLicense() && self.isLicenseValid()));
  }, self);
self.VaHtml = ko.computed(function () {
if(typeof vaname!='undefined' && vaname!='')
{
	return false;

}
else
{
	return true;
}
},self);
 self.prepCheck = ko.computed(function () {
 var prepHtml="";
    if( !self.loading() && self.loggedIn() && self.hasLicense() && self.isLicenseValid() && !prepCheckT)
    {
    		var urlNewAdded=$(location).attr('href');
      		var asinNewAdded=parseAsinNewAdded(urlNewAdded);
			var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
    		var productURLRestriction = 'https://sellercentral.amazon.' + RegionNewAdded + '/hz/m/sourcing/inbound/prep?asin=' + self.asin();
    		chrome.runtime.sendMessage({ data: {
          		urlProductInfo: productURLRestriction,
          		dataType: 'html' 
        		},'FunctionCall':'SellerCenterWeight' }, 
      			function(response) 
      			{
      				//console.log("SellerCenterWeight--->",response);
      				var parser = new DOMParser();
      				var dom = parser.parseFromString(response, 'text/html');
      				prepCheckT=true;
      				if ($('.a-section-expander-container', dom).length)
      				{
      					$('.a-section-expander-container', dom).each(function(index,element){
      						
      						prepHtml+=$(element).find("[data-action='a-expander-toggle']").find(".a-color-base").html().trim().replace(" ","-");
      						prepHtml+="<br>";
      					});
      					if(prepHtml.trim()!="")
      					{
      						self.prepCheckToShow(true);
      					}
      					self.prepCheckhtml(prepHtml);
      					return prepHtml;
      				}
      			})
    }
    //return prepHtml;
  }, self);

  self.showMain = ko.computed(function () {
    return !self.loading() && self.loggedIn() && self.hasLicense() && self.isLicenseValid();
  }, self);

  self.resultHTML = ko.computed(function () {
    var data = self.data();
    var resultHTML = data.result;
    if (data.resultLink) {
      resultHTML = '<a target="_blank" href="' + data.resultLink + '">' +
        data.result + '</a>';
    }

    return resultHTML;
  }, self);

  self.showRank = ko.computed(function () {
    return !!self.rankTop();
  }, self);

  self.profitStatus = ko.computed(function () {
    return self.fees().profit > 0 ? 'restriction-wizard-green' : 'restriction-wizard-red';
  }, self);

  self.plRiskClass = ko.computed(function () {
    return ['', 'pl-risk-low', 'pl-risk-med', 'pl-risk-high'][self.plRisk()];
  }, self);

  self.toggleEFN = function () {
    const efn = !self.efn();
    chrome.storage.sync.set({ efn });
    self.efn(efn);
    if(efn)
    {
    	const fbmflag = false;
    	chrome.storage.sync.set({ fbmflag });
    	self.fbmflag(fbmflag);
    }
    if(!collapsibleClickRegistered)
	{
    var coll = document.getElementsByClassName("collapsible");
		var i;
		if(coll.length==1)
		{
			//gotthat=true;
			for (i = 0; i < coll.length; i++) 
			{
				collapsibleClickRegistered=true;
  				coll[i].addEventListener("click", function() {
    			this.classList.toggle("active");
    			var content = this.nextElementSibling;
     			$(content).toggle();
  				});
			}
		}
	}
  }
   self.toggleFBM = function () {
    const fbmflag = !self.fbmflag();
    chrome.storage.sync.set({ fbmflag });
    self.fbmflag(fbmflag);
    if(fbmflag)
    {
    	const efn = false;
    	chrome.storage.sync.set({ efn });
    	self.efn(efn);
    }
    var coll = document.getElementsByClassName("collapsible");
		var i;
		if(coll.length==1)
		{
			//gotthat=true;
			for (i = 0; i < coll.length; i++) 
			{
  				coll[i].addEventListener("click", function() {
    			this.classList.toggle("active");
    			var content = this.nextElementSibling;
     			$(content).toggle();
  				});
			}
		}
    //c//onsole.log($("#FBMInput").val());
  }
  self.shippingform = function()
  {
  	$('#myFormShipping').toggle();
  	console.log(self.shipPrice());
  }
  self.ShFormClose =function()
  {
  	$('#myFormShipping').toggle();
  }
  self.ShFormSubmit = function()
  {
  		var ShippingVal=$("#ShippingA").val();
  		chrome.storage.sync.set({ "shipPrice": self.shipPrice() });
  		//$('#myFormShipping').toggle();
  }
  self.checkHazmat = function () {
  const asin = self.asin();
  if(typeof $('#mbc').attr('data-asin') !='undefined' && $('#mbc').attr('data-asin') !='')
  		{
  			const asin =$('#mbc').attr('data-asin');
  		}

    scraper.checkHazmat(asin)
      .then((hazmat) => {
      if (hazmat.NotFound) {
      self.hazmatHTML('Hazmat: <font style="color:orange;">N/A</font>');
      }
        else if (hazmat.Hazmat) {
          //self.hazmatHTML('Hazmat Restricted<br /><div class="for-hazmat foundh"><i class="hazmat-found"></i></div>');
          self.hazmatHTML('Hazmat: <font style="color:#cf3535;">Hazmat Restricted</font>');
        } else {
          //self.hazmatHTML('No Hazmat Restriction<br /><div class="for-hazmat notfound"><i class="hazmat-notfound"></i></div>');
          self.hazmatHTML('Hazmat: <font style="color:#18c187;">No Hazmat</font>');
        }
      });
  };
  self.checkDangerous = function () {
  const asin = self.asin();
  if(typeof $('#mbc').attr('data-asin') !='undefined' && $('#mbc').attr('data-asin') !='')
  		{
  			const asin =$('#mbc').attr('data-asin');
  		}

    scraper.checkDangerous(asin)
      .then((hazmat) => {
      if (hazmat.Danger) 
      {
          self.dangerousHTML('Dangerous Goods: <font style="color:#cf3535;">Yes</font><span class="tooltip-Dangerous">This ASIN is most likely Hazmat for anyone not in the  Dangerous Goods Program.<br><br> If you\'re part of the program, then your probably fine to list this product.<br><br>It is advised that you check by creating a listing in seller central before making a purchase</span>');
    	} 
    	else 
    	{
          self.dangerousHTML('Dangerous Goods: <font style="color:#18c187;">No</font><span class="tooltip-Dangerous">This ASIN is Likely NOT Hazmat & Will be fine to send into Amazon.');
        }
        
      });
  };

  self.saveLicense = function () {
    $('#saveLicense > button').prop('disabled', true);
    $('#saveLicense > input').prop('disabled', true);
    var licensekey=self.licenseKey()+"__"+getRandomToken();
    chrome.storage.sync.set({ licenseKey: licensekey }, function () {
    	valicenseKey=self.licenseKey();
      self.checkLicense();
      window.location.reload();
    });
  };

  function calculatefirst()
  {
  	chrome.storage.sync.get(['efn', 'vatRate', 'vatRegistered','vatBuyPrice'], function (options) {
      const vat = options.vatRate;
      const vatRegistered = options.vatRegistered;
      const efn = options.efn;
      var sellPrice = parseFloat(self.sellPrice());
    	var buyPrice = parseFloat(self.buyPrice());
    	const vatBuyPrice = options.vatBuyPrice;
    	if(typeof vatBuyPrice=='undefined' && !vatBuyPrice)
		{
			var donothing='';
		}
		else
		{
			buyPrice=buyPrice+(vat/100*buyPrice);
		}
		if(isNaN(buyPrice))
		{
			buyPrice=1;
			//self.buyPrice(1);
			//$("#buypriceinput").val(buyPrice);
		}
    	const cacheKey = [self.asin(), sellPrice, efn].join('-');
    	return new Promise((resolve, reject) => {
      /*$.ajax({
        type: 'POST',
        url: 'https://us-central1-restriction-wizard.cloudfunctions.net/estimateFee',
        data: {
          asin: self.asin(),
          country: currentRegion,
          efn,
          sellPrice: sellPrice,
        },
        dataType: 'json',
        success: (result) => {
        console.log("====FIRST====",result);
          _cache[cacheKey] = result;
          resolve(result);
        },
        error: (msg) => {
        console.log(msg);}
      });*/
      chrome.runtime.sendMessage({ data: {
          		asin: self.asin(),
          		country: currentRegion,
          		sellPrice:sellPrice,
          		efn,
          		efnflag: efn,
          		LicenseKey: valicenseKey,
        		FunctionCall: 'estimateFee' 
        		},'FunctionCall':'estimateFee' }, 
      function(response) {
      _cache[cacheKey] = response;
          resolve(response);
          convertPrice(buyPrice, self.buyPriceCurrency(), currentCurrency)
        .then(buyPriceConverted => {
          self.buyPriceConverted(buyPriceConverted);
          return calc.getFees(self.asin(), sellPrice, buyPriceConverted, self.weight(), self.weightUnit(), vat, vatRegistered, efn,vatBuyPrice);
        })
    });
    });
      });
  }
  self.checkDangerous();
  self.BreakEven = function (buyPrice,sellPrice,FeesExt,buyPriceCurrency,currentCurrency,OrgFee, vat, vatRegistered, efn,vatBuyPrice) {
  	convertPrice(buyPrice, buyPriceCurrency, currentCurrency)
        .then(buyPriceConverted => {
          self.buyPriceConverted(buyPriceConverted);
          if(self.weightUnit().trim()!="")
          {
          	if(self.weightUnit().toLowerCase()=="grams" || self.weightUnit().toLowerCase()=="gram")
          	{
          		var WWW=self.weight();
          		self.weight(WWW/1000);
          		self.weightUnit("KG");
          	}
          }
          return calc.getFees(self.asin(), FeesExt.breakeven, buyPriceConverted, self.weight(), self.weightUnit(), vat, vatRegistered, efn,vatBuyPrice,true,false);;
        }).then(function(fees){
        	FeesExt=fees;
        	var TotalFeed=FeesExt.totalFees + buyPrice;
        	//if(TotalFeed.toFixed(2) != FeesExt.breakeven.toFixed(2))
        	if(FeesExt.profit>0 || TotalFeed.toFixed(2)!=FeesExt.breakeven.toFixed(2))
        	{
        		self.BreakEven(buyPrice,sellPrice,FeesExt,buyPriceCurrency,currentCurrency,OrgFee, vat, vatRegistered, efn,vatBuyPrice);
        	}
        	else
        	{	
        		//OrgFee.breakeven=FeesExt.breakeven;
        		//self.fees(OrgFee);
        		//self.totalFees().
        		self.BreakEvenValue(FeesExt.breakeven);
        	}
        })
  }
  self.BreakEvenFBM = function (buyPrice,sellPrice,FeesExt,buyPriceCurrency,currentCurrency,OrgFee, vat, vatRegistered, efn,vatBuyPrice,shipingPrice) {
  	convertPrice(buyPrice, buyPriceCurrency, currentCurrency)
        .then(buyPriceConverted => {
          self.buyPriceConverted(buyPriceConverted);
          if(self.weightUnit().trim()!="")
          {
          	if(self.weightUnit().toLowerCase()=="grams" || self.weightUnit().toLowerCase()=="gram")
          	{
          		var WWW=self.weight();
          		self.weight(WWW/1000);
          		self.weightUnit("KG");
          	}
          }
          return calc.getFeesFBM(self.asin(), FeesExt.breakeven, buyPriceConverted, self.weight(), self.weightUnit(), vat, vatRegistered, efn,vatBuyPrice,self.shipPrice(),true,false);
        }).then(function(fees){
        	FeesExt=fees;
        	var TotalFeed=FeesExt.totalFees + buyPrice;
        	//if(TotalFeed.toFixed(2) != FeesExt.breakeven.toFixed(2))
        	if(FeesExt.profit>0 || TotalFeed.toFixed(2)!=FeesExt.breakeven.toFixed(2))
        	{
        		self.BreakEvenFBM(buyPrice,sellPrice,FeesExt,buyPriceCurrency,currentCurrency,OrgFee, vat, vatRegistered, efn,vatBuyPrice,shipingPrice);
        	}
        	else
        	{	
        		//OrgFee.breakeven=FeesExt.breakeven;
        		//self.fees(OrgFee);
        		//self.totalFees().
        		self.BreakEvenValue(FeesExt.breakeven);
        	}
        })
  }
  self.calculate = function () {
  $("#scoreMainDescReason").html("");
  $("#Hamazon").find("div").css({"width":"3%"});
  $("#Hroi").find("div").css({"width":"3%"});
  $("#Hprofit").find("div").css({"width":"3%"});
  $("#Hsales").find("div").css({"width":"3%"});
  $("#Hcom").find("div").css({"width":"3%"});
  $("#Hrank").find("div").css({"width":"3%"});
  $("#Hbbstock").find("div").css({"width":"3%"});
  
  $("#Hamazon").find("div").css({"background-color":"#cf3535"});
  $("#Hroi").find("div").css({"background-color":"#cf3535"});
  $("#Hprofit").find("div").css({"background-color":"#cf3535"});
  $("#Hsales").find("div").css({"background-color":"#cf3535"});
  $("#Hcom").find("div").css({"background-color":"#cf3535"});
  $("#Hrank").find("div").css({"background-color":"#cf3535"});
  $("#Hbbstock").find("div").css({"background-color":"#cf3535"});
  
  $("#HamazonText").html("");
  $("#HroiText").html("");
  $("#HprofitText").html("");
  $("#HsalesText").html("");
  $("#HcomText").html("");
  $("#HrankText").html("");
  $("#HbbstockText").html("");
    var sellPrice = parseFloat(self.sellPrice());
    var buyPrice = parseFloat(self.buyPrice());
    if (isNaN(sellPrice) || isNaN(buyPrice)) {
    alert("Please Enter Buy Price");
      return;
    }
    if(typeof $('.outputDiscVoucher').attr("dis-Voucher")!="undefined")
    {
    	var VoucherDis=$('.outputDiscVoucher').attr("dis-Voucher").replace("%","");
    	buyPrice=buyPrice-(buyPrice*VoucherDis/100);
    }
    GCQuantity=self.qty();
automaticCall=false;
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
			convertPrice(buyPrice, self.buyPriceCurrency(), currentCurrency)
        .then(buyPriceConverted => {
          self.buyPriceConverted(buyPriceConverted);
          if(self.weightUnit().trim()!="")
          {
          	if(self.weightUnit().toLowerCase()=="grams" || self.weightUnit().toLowerCase()=="gram")
          	{
          		var WWW=self.weight();
          		self.weight(WWW/1000);
          		self.weightUnit("KG");
          	}
          }
          return calc.getFeesFBM(self.asin(), sellPrice, buyPriceConverted, self.weight(), self.weightUnit(), vat, vatRegistered, efn,vatBuyPrice,self.shipPrice());
        }).then(function(fees){ self.fees(fees);
        var TotalScore=0;
        var FeesExt=fees;
        self.BreakEvenValue("..");
        var count=0;
        self.BreakEvenFBM(buyPrice,sellPrice,FeesExt,self.buyPriceCurrency(),currentCurrency,fees, vat, vatRegistered, efn,vatBuyPrice,self.shipPrice());
        ScoringVar['Profit']=fees.profit;
		ScoringVar['profitMargin']=fees.profitMargin;
		ScoringVar['Roi']=fees.roi;
		var actualScoring={};
		var descText="";
		setTimeout(function(){
		if(typeof ScoringVar['AmazonSeller']!="undefined" && ScoringVar['AmazonSeller'])
		{
			TotalScore=TotalScore+7;
			$("#Hamazon").find("div").css({"width":"25%"});
			$("#HamazonText").html("Amazon Listing");
			$("#Hamazon").find("div").css({"background-color":"#cf3535"});
			descText=descText+"Amazon,";
			actualScoring["AmazonSeller"]=7;
		}
		else if(typeof ScoringVar['AmazonSeller']!="undefined" && !ScoringVar['AmazonSeller'])
		{
			TotalScore=TotalScore+14;
			$("#Hamazon").find("div").css({"width":"100%"});
			$("#HamazonText").html("No Amazon");
			$("#Hamazon").find("div").css({"background-color":"#18c187"});
			actualScoring["AmazonSeller"]=14;
		}
		chrome.storage.sync.get(['IdealProfit', 'IdealRoi'], function (options) 
		{
			IdealProfitSetting=options.IdealProfit;
			IdealRoiSetting=options.IdealRoi;
			if(typeof IdealProfitSetting=="undefined")
			{
				IdealProfitSetting=2.50;
			}
			if(typeof IdealRoiSetting=="undefined")
			{
				IdealRoiSetting=30;
			}
			if(IdealRoiSetting>0)
			{
				actualScoring["roi"]=0;
				if(fees.roi>(IdealRoiSetting*(110/100)))
				{
					TotalScore=TotalScore+14;
					$("#Hroi").find("div").css({"width":"100%"});
					$("#HroiText").html("Excellent");
					$("#Hroi").find("div").css({"background-color":"#18c187"});
					actualScoring["roi"]=14;
				}
				else if(fees.roi>=IdealRoiSetting)
				{
					TotalScore=TotalScore+12;
					$("#Hroi").find("div").css({"width":"75%"});
					$("#HroiText").html("Great");
					$("#Hroi").find("div").css({"background-color":"#18c187"});
					actualScoring["roi"]=12;
				}
				else if(fees.roi>=(IdealRoiSetting*(90/100)))
				{
					TotalScore=TotalScore+5;
					$("#Hroi").find("div").css({"width":"25%"});
					$("#HroiText").html("Low");
					$("#Hroi").find("div").css({"background-color":"#cf3535"});
					actualScoring["roi"]=5;
					descText=descText+"Low ROI,";
				}
				else if(fees.roi<(IdealRoiSetting*(90/100)))
				{
					TotalScore=TotalScore+5;
					$("#Hroi").find("div").css({"width":"25%"});
					$("#HroiText").html("Low");
					$("#Hroi").find("div").css({"background-color":"#cf3535"});
					actualScoring["roi"]=5;
					descText=descText+"Low ROI,";
				}
				
				/*else if(result.roi>=(IdealRoiSetting*(70/100)))
				{
					TotalScore=TotalScore+5;
				}
				else if(result.roi<(IdealRoiSetting*(70/100)))
				{
					TotalScore=TotalScore+2;
				}*/
			}
			if(IdealProfitSetting>0)
			{
				actualScoring["profit"]=0;
				if(fees.profit>(IdealProfitSetting*(110/100)))
				{
					TotalScore=TotalScore+14;
					$("#Hprofit").find("div").css({"width":"100%"});
					$("#HprofitText").html("Excellent");
					$("#Hprofit").find("div").css({"background-color":"#18c187"});
					actualScoring["profit"]=14;
				}
				else if(fees.profit>=IdealProfitSetting)
				{
					TotalScore=TotalScore+12;
					actualScoring["profit"]=12;
					$("#Hprofit").find("div").css({"width":"75%"});
					$("#HprofitText").html("Great");
					$("#Hprofit").find("div").css({"background-color":"#18c187"});
				}
				else if(fees.profit>=(IdealProfitSetting*(90/100)))
				{
					TotalScore=TotalScore+5;
					actualScoring["profit"]=5;
					$("#Hprofit").find("div").css({"width":"25%"});
					$("#HprofitText").html("Low");
					$("#Hprofit").find("div").css({"background-color":"#cf3535"});
					descText=descText+"Low Profit,";
				}
				else if(fees.profit<(IdealProfitSetting*(90/100)))
				{
					TotalScore=TotalScore+5;
					actualScoring["profit"]=5;
					$("#Hprofit").find("div").css({"width":"25%"});
					$("#HprofitText").html("Low");
					$("#Hprofit").find("div").css({"background-color":"#cf3535"});
					descText=descText+"Low Profit,";
				}
				/*else if(result.roi>=(IdealProfitSetting*(70/100)))
				{
					TotalScore=TotalScore+5;
				}
				else if(result.roi<(IdealProfitSetting*(70/100)))
				{
					TotalScore=TotalScore+2;
				}*/
			}
			//console.log("ROI 90%=",(IdealRoiSetting*(90/100)));
			//console.log("profit 90%=",(IdealProfitSetting*(90/100)));
			//console.log("ROI ACT=",fees.roi);
			//console.log("profit ACT=",fees.profit);
			
			if(ScoringVar['SalesRank']>500)
			{
				TotalScore=TotalScore+14;
				$("#Hsales").find("div").css({"width":"100%"});
				$("#HsalesText").html("Excellent");
				$("#Hsales").find("div").css({"background-color":"#18c187"});
				actualScoring["SalesRank"]=14;
			}
			else if(ScoringVar['SalesRank']>100)
			{
				TotalScore=TotalScore+13;
				$("#Hsales").find("div").css({"width":"90%"});
				$("#HsalesText").html("Excellent");
				$("#Hsales").find("div").css({"background-color":"#18c187"});
				actualScoring["SalesRank"]=13;
			}
			else if(ScoringVar['SalesRank']>50)
			{
				TotalScore=TotalScore+12;
				$("#Hsales").find("div").css({"width":"80%"});
				$("#Hsalestext").html("Excellent");
				$("#Hsales").find("div").css({"background-color":"#18c187"});
				actualScoring["SalesRank"]=12;
			}
			else if(ScoringVar['SalesRank']>30)
			{
				TotalScore=TotalScore+11;
				$("#Hsales").find("div").css({"width":"70%"});
				$("#HsalesText").html("Great");
				$("#Hsales").find("div").css({"background-color":"#18c187"});
				actualScoring["SalesRank"]=11;
			}
			else if(ScoringVar['SalesRank']>18)
			{
				TotalScore=TotalScore+10;
				$("#Hsales").find("div").css({"width":"65%"});
				$("#HsalesText").html("Great");
				$("#Hsales").find("div").css({"background-color":"#18c187"});
				actualScoring["SalesRank"]=10;
			}
			else if(ScoringVar['SalesRank']>11)
			{
				TotalScore=TotalScore+6;
				$("#Hsales").find("div").css({"width":"38%"});
				$("#HsalesText").html("Average");
				$("#Hsales").find("div").css({"background-color":"#cf3535"});
				actualScoring["SalesRank"]=6;
			}
			else
			{
				TotalScore=TotalScore+3;
				$("#Hsales").find("div").css({"width":"25%"});
				$("#HsalesText").html("Low");
				$("#Hsales").find("div").css({"background-color":"#cf3535"});
				actualScoring["SalesRank"]=3;
				descText=descText+"Low Sales,";
			}
			if(ScoringVar['TotalSellers']>25)
			{
				TotalScore=TotalScore+5;
				$("#Hcom").find("div").css({"width":"45%"});
				$("#HcomText").html("Average");
				$("#Hcom").find("div").css({"background-color":"#FFA500"});
				actualScoring["TotalSellers"]=5;
			}
			else if(ScoringVar['TotalSellers']>15)
			{
				TotalScore=TotalScore+8;
				$("#Hcom").find("div").css({"width":"65%"});
				$("#HcomText").html("Great");
				$("#Hcom").find("div").css({"background-color":"#18c187"});
				actualScoring["TotalSellers"]=8;
			}
			else if(ScoringVar['TotalSellers']>10)
			{
				TotalScore=TotalScore+10;
				$("#Hcom").find("div").css({"width":"75%"});
				$("#HcomText").html("Great");
				$("#Hcom").find("div").css({"background-color":"#18c187"});
				actualScoring["TotalSellers"]=10;
			}
			else if(ScoringVar['TotalSellers']>5)
			{
				TotalScore=TotalScore+12;
				$("#Hcom").find("div").css({"width":"85%"});
				$("#HcomText").html("Excellent");
				$("#Hcom").find("div").css({"background-color":"#18c187"});
				actualScoring["TotalSellers"]=12;
			}
			else
			{
				TotalScore=TotalScore+14;
				$("#Hcom").find("div").css({"width":"100%"});
				$("#HcomText").html("Excellent");
				$("#Hcom").find("div").css({"background-color":"#18c187"});
				actualScoring["TotalSellers"]=14;
			}
			if(ScoringVar['TotalSellers']>100)
			{
				$("#Hcom").find("div").css({"width":"25%"});
				$("#HcomText").html("Low");
				descText=descText+"High Competition,";
				$("#Hcom").find("div").css({"background-color":"#cf3535"})
			}
			actualScoring["TopRank"]=0;
			if(typeof ScoringVar['TopRank']!="undefined")
			{
				TotalScore=TotalScore+ScoringVar['TopRank'];
				actualScoring["TopRank"]=ScoringVar['TopRank'];
				if(ScoringVar['TopRank']>=14)
				{
					$("#Hrank").find("div").css({"width":"100%"});
					$("#HrankText").html("Excellent");
					$("#Hrank").find("div").css({"background-color":"#18c187"});
				}
				else if(ScoringVar['TopRank']>=10)
				{
					$("#Hrank").find("div").css({"width":"75%"});
					$("#HrankText").html("Great");
					$("#Hrank").find("div").css({"background-color":"#18c187"});
				}
				else if(ScoringVar['TopRank']>=8)
				{
					$("#Hrank").find("div").css({"width":"50%"});
					$("#HrankText").html("Good");
					$("#Hrank").find("div").css({"background-color":"#FFA500"});
				}
				else if(ScoringVar['TopRank']>=5)
				{
					$("#Hrank").find("div").css({"width":"25%"});
					$("#HrankText").html("Low");
					$("#Hrank").find("div").css({"background-color":"#cf3535"});
					descText=descText+"Low Rank%,";
				}
			}
			if(typeof ScoringVar['BuyBoxStock']!="undefined")
			{
				if(ScoringVar['BuyBoxStock']>500)
				{
					TotalScore=TotalScore+5;
					$("#Hbbstock").find("div").css({"width":"25%"});
					$("#HbbstockText").html("Low");
					descText=descText+"High Buybox Stock%,";
					$("#Hbbstock").find("div").css({"background-color":"#cf3535"});
					actualScoring["BuyBoxStock"]=5;
				}
				else if(ScoringVar['BuyBoxStock']>100)
				{
					TotalScore=TotalScore+8;
					$("#Hbbstock").find("div").css({"width":"50%"});
					$("#HbbstockText").html("Average");
					$("#Hbbstock").find("div").css({"background-color":"#FFA500"});
					actualScoring["BuyBoxStock"]=8;
				}
				else if(ScoringVar['BuyBoxStock']>50)
				{
					TotalScore=TotalScore+10;
					$("#Hbbstock").find("div").css({"width":"75%"});
					$("#HbbstockText").html("Great");
					$("#Hbbstock").find("div").css({"background-color":"#18c187"});
					actualScoring["BuyBoxStock"]=10;
				}
				else if(ScoringVar['BuyBoxStock']>20)
				{
					TotalScore=TotalScore+12;
					$("#Hbbstock").find("div").css({"width":"85%"});
					$("#HbbstockText").html("Excellent");
					$("#Hbbstock").find("div").css({"background-color":"#18c187"});
					actualScoring["BuyBoxStock"]=12;
				}
				else
				{
					TotalScore=TotalScore+14;
					$("#Hbbstock").find("div").css({"width":"100%"});
					$("#HbbstockText").html("Excellent");
					$("#Hbbstock").find("div").css({"background-color":"#18c187"});
					actualScoring["BuyBoxStock"]=12;
				}
			}
			else
			{
				TotalScore=TotalScore+14;
				$("#Hbbstock").find("div").css({"width":"100%"});
				$("#HbbstockText").html("Excellent");
				$("#Hbbstock").find("div").css({"background-color":"#18c187"});
				actualScoring["BuyBoxStock"]=14;
			}
			var beforeTotal=TotalScore;
			//console.log("actualScoring------->",actualScoring);
			//console.log("TotalScore------->",beforeTotal);
			if(ScoringVar['SalesRank']<=11 && (ScoringVar['TopRank']>=5 && ScoringVar['TopRank']<8))
			{
				TotalScore=(TotalScore*50/100);
			}
			else if(fees.roi<(IdealRoiSetting*(90/100)) && fees.profit<(IdealProfitSetting*(90/100)))
			{
				TotalScore=(TotalScore*50/100);
			}
			else if(fees.roi<(IdealRoiSetting*(90/100)))
			{
				TotalScore=(TotalScore*50/100);
			}
			else if(fees.profit<(IdealProfitSetting*(90/100)))
			{
				TotalScore=(TotalScore*50/100);
			}
			else if(ScoringVar['SalesRank']<=11 || (ScoringVar['TopRank']>=5 && ScoringVar['TopRank']<8))
			{
				TotalScore=(TotalScore*80/100);
			}
			
			//console.log("TotalScore------->",ScoringVar);
			if(TotalScore>80)
			{
				$("#scoreMainDesc").html("This Item Has a Excellent Score");
			}
			else if(TotalScore>60)
			{
				$("#scoreMainDesc").html("This Item Has a Great Score");
			}
			else if(TotalScore>50)
			{
				$("#scoreMainDesc").html("This Item Has a Good Score");
			}
			else if(TotalScore>35)
			{
				$("#scoreMainDesc").html("This Item Has a Average Score");
			}
			else
			{
				$("#scoreMainDesc").html("This Item Has a Low Score");
				descText=descText.replace(/,+$/,'');
				$("#scoreMainDescReason").html(descText);
			}
			if(!automaticCall)
			{
				$("#Hoverall").find("div").css({"width":TotalScore+"%"});
				//$("#Hoveralltext").html("Excellent");
				$("#HoverallNumber").html(TotalScore+"%");
				HoverallNumber
				if(TotalScore<=35)
				{
					$(".SEMIbar").css({"border-right-color": "#cf3535 !important","border-bottom-color": "#cf3535 !important"});
					$("#Hoverall").find("div").css({"background-color":"#cf3535"});
				}
				else if(TotalScore<=60)
				{
					$(".SEMIbar").css({"border-right-color": "#FFA500 !important","border-bottom-color": "#FFA500 !important"});
					$("#Hoverall").find("div").css({"background-color":"#FFA500"});
				}
				else if(TotalScore>60)
				{
					$(".SEMIbar").css({"border-right-color": "#18c187 !important","border-bottom-color": "#18c187 !important"});
					$("#Hoverall").find("div").css({"background-color":"#18c187"});
				}
				
			$(".SEMIprogress").find("span").html(TotalScore);
			$(".SEMIprogress").each(function(){
  
  var $bar = $(this).find(".SEMIbar");
  var $val = $(this).find("span");
  var perc = parseInt( $val.text(), 10);

  $({p:0}).animate({p:perc}, {
    duration: 3000,
    easing: "swing",
    step: function(p) {
      $bar.css({
        transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
        // 45 is to add the needed rotation to have the green borders at the bottom
      });
      $val.text(p|0);
    }
  });
});
}
		})
		},100);
        })
		}
		else
		{
      convertPrice(buyPrice, self.buyPriceCurrency(), currentCurrency)
        .then(buyPriceConverted => {
          self.buyPriceConverted(buyPriceConverted);
          if(self.weightUnit().trim()!="")
          {
          	if(self.weightUnit().toLowerCase()=="grams" || self.weightUnit().toLowerCase()=="gram")
          	{
          		var WWW=self.weight();
          		self.weight(WWW/1000);
          		self.weightUnit("KG");
          	}
          }
          return calc.getFees(self.asin(), sellPrice, buyPriceConverted, self.weight(), self.weightUnit(), vat, vatRegistered, efn,vatBuyPrice);;
        })
        .then(function(fees){ self.fees(fees);
        var TotalScore=0;
        var FeesExt=fees;
        console.log("fees=======>",fees);
        self.BreakEvenValue("..");
        var count=0;
        self.BreakEven(buyPrice,sellPrice,FeesExt,self.buyPriceCurrency(),currentCurrency,fees, vat, vatRegistered, efn,vatBuyPrice);
        /*while(FeesExt.totalFees + sellPrice != FeesExt.breakeven && count<10)
        {
        	convertPrice(buyPrice, self.buyPriceCurrency(), currentCurrency)
        .then(buyPriceConverted => {
          self.buyPriceConverted(buyPriceConverted);
          if(self.weightUnit().trim()!="")
          {
          	if(self.weightUnit().toLowerCase()=="grams" || self.weightUnit().toLowerCase()=="gram")
          	{
          		var WWW=self.weight();
          		self.weight(WWW/1000);
          		self.weightUnit("KG");
          	}
          }
          return calc.getFees(self.asin(), FeesExt.breakeven, buyPriceConverted, self.weight(), self.weightUnit(), vat, vatRegistered, efn,vatBuyPrice);;
        }).then(function(fees){
        	FeesExt=fees;
        	count++;
        	console.log("FeesExt------>",FeesExt);
        })
        count++;
        	
        }*/
        ScoringVar['Profit']=fees.profit;
		ScoringVar['profitMargin']=fees.profitMargin;
		ScoringVar['Roi']=fees.roi;
		var actualScoring={};
		var descText="";
		setTimeout(function(){
		if(typeof ScoringVar['AmazonSeller']!="undefined" && ScoringVar['AmazonSeller'])
		{
			TotalScore=TotalScore+7;
			$("#Hamazon").find("div").css({"width":"25%"});
			$("#HamazonText").html("Amazon Listing");
			$("#Hamazon").find("div").css({"background-color":"#cf3535"});
			descText=descText+"Amazon,";
			actualScoring["AmazonSeller"]=7;
		}
		else if(typeof ScoringVar['AmazonSeller']!="undefined" && !ScoringVar['AmazonSeller'])
		{
			TotalScore=TotalScore+14;
			$("#Hamazon").find("div").css({"width":"100%"});
			$("#HamazonText").html("No Amazon");
			$("#Hamazon").find("div").css({"background-color":"#18c187"});
			actualScoring["AmazonSeller"]=14;
		}
		chrome.storage.sync.get(['IdealProfit', 'IdealRoi'], function (options) 
		{
			IdealProfitSetting=options.IdealProfit;
			IdealRoiSetting=options.IdealRoi;
			if(typeof IdealProfitSetting=="undefined")
			{
				IdealProfitSetting=2.50;
			}
			if(typeof IdealRoiSetting=="undefined")
			{
				IdealRoiSetting=30;
			}
			if(IdealRoiSetting>0)
			{
				actualScoring["roi"]=0;
				if(fees.roi>(IdealRoiSetting*(110/100)))
				{
					TotalScore=TotalScore+14;
					$("#Hroi").find("div").css({"width":"100%"});
					$("#HroiText").html("Excellent");
					$("#Hroi").find("div").css({"background-color":"#18c187"});
					actualScoring["roi"]=14;
				}
				else if(fees.roi>=IdealRoiSetting)
				{
					TotalScore=TotalScore+12;
					$("#Hroi").find("div").css({"width":"75%"});
					$("#HroiText").html("Great");
					$("#Hroi").find("div").css({"background-color":"#18c187"});
					actualScoring["roi"]=12;
				}
				else if(fees.roi>=(IdealRoiSetting*(90/100)))
				{
					TotalScore=TotalScore+5;
					$("#Hroi").find("div").css({"width":"25%"});
					$("#HroiText").html("Low");
					$("#Hroi").find("div").css({"background-color":"#cf3535"});
					actualScoring["roi"]=5;
					descText=descText+"Low ROI,";
				}
				else if(fees.roi<(IdealRoiSetting*(90/100)))
				{
					TotalScore=TotalScore+5;
					$("#Hroi").find("div").css({"width":"25%"});
					$("#HroiText").html("Low");
					$("#Hroi").find("div").css({"background-color":"#cf3535"});
					actualScoring["roi"]=5;
					descText=descText+"Low ROI,";
				}
				
				/*else if(result.roi>=(IdealRoiSetting*(70/100)))
				{
					TotalScore=TotalScore+5;
				}
				else if(result.roi<(IdealRoiSetting*(70/100)))
				{
					TotalScore=TotalScore+2;
				}*/
			}
			if(IdealProfitSetting>0)
			{
				actualScoring["profit"]=0;
				if(fees.profit>(IdealProfitSetting*(110/100)))
				{
					TotalScore=TotalScore+14;
					$("#Hprofit").find("div").css({"width":"100%"});
					$("#HprofitText").html("Excellent");
					$("#Hprofit").find("div").css({"background-color":"#18c187"});
					actualScoring["profit"]=14;
				}
				else if(fees.profit>=IdealProfitSetting)
				{
					TotalScore=TotalScore+12;
					actualScoring["profit"]=12;
					$("#Hprofit").find("div").css({"width":"75%"});
					$("#HprofitText").html("Great");
					$("#Hprofit").find("div").css({"background-color":"#18c187"});
				}
				else if(fees.profit>=(IdealProfitSetting*(90/100)))
				{
					TotalScore=TotalScore+5;
					actualScoring["profit"]=5;
					$("#Hprofit").find("div").css({"width":"25%"});
					$("#HprofitText").html("Low");
					$("#Hprofit").find("div").css({"background-color":"#cf3535"});
					descText=descText+"Low Profit,";
				}
				else if(fees.profit<(IdealProfitSetting*(90/100)))
				{
					TotalScore=TotalScore+5;
					actualScoring["profit"]=5;
					$("#Hprofit").find("div").css({"width":"25%"});
					$("#HprofitText").html("Low");
					$("#Hprofit").find("div").css({"background-color":"#cf3535"});
					descText=descText+"Low Profit,";
				}
				/*else if(result.roi>=(IdealProfitSetting*(70/100)))
				{
					TotalScore=TotalScore+5;
				}
				else if(result.roi<(IdealProfitSetting*(70/100)))
				{
					TotalScore=TotalScore+2;
				}*/
			}
			//console.log("ROI 90%=",(IdealRoiSetting*(90/100)));
			//console.log("profit 90%=",(IdealProfitSetting*(90/100)));
			//console.log("ROI ACT=",fees.roi);
			//console.log("profit ACT=",fees.profit);
			
			if(ScoringVar['SalesRank']>500)
			{
				TotalScore=TotalScore+14;
				$("#Hsales").find("div").css({"width":"100%"});
				$("#HsalesText").html("Excellent");
				$("#Hsales").find("div").css({"background-color":"#18c187"});
				actualScoring["SalesRank"]=14;
			}
			else if(ScoringVar['SalesRank']>100)
			{
				TotalScore=TotalScore+13;
				$("#Hsales").find("div").css({"width":"90%"});
				$("#HsalesText").html("Excellent");
				$("#Hsales").find("div").css({"background-color":"#18c187"});
				actualScoring["SalesRank"]=13;
			}
			else if(ScoringVar['SalesRank']>50)
			{
				TotalScore=TotalScore+12;
				$("#Hsales").find("div").css({"width":"80%"});
				$("#Hsalestext").html("Excellent");
				$("#Hsales").find("div").css({"background-color":"#18c187"});
				actualScoring["SalesRank"]=12;
			}
			else if(ScoringVar['SalesRank']>30)
			{
				TotalScore=TotalScore+11;
				$("#Hsales").find("div").css({"width":"70%"});
				$("#HsalesText").html("Great");
				$("#Hsales").find("div").css({"background-color":"#18c187"});
				actualScoring["SalesRank"]=11;
			}
			else if(ScoringVar['SalesRank']>18)
			{
				TotalScore=TotalScore+10;
				$("#Hsales").find("div").css({"width":"65%"});
				$("#HsalesText").html("Great");
				$("#Hsales").find("div").css({"background-color":"#18c187"});
				actualScoring["SalesRank"]=10;
			}
			else if(ScoringVar['SalesRank']>11)
			{
				TotalScore=TotalScore+6;
				$("#Hsales").find("div").css({"width":"38%"});
				$("#HsalesText").html("Average");
				$("#Hsales").find("div").css({"background-color":"#cf3535"});
				actualScoring["SalesRank"]=6;
			}
			else
			{
				TotalScore=TotalScore+3;
				$("#Hsales").find("div").css({"width":"25%"});
				$("#HsalesText").html("Low");
				$("#Hsales").find("div").css({"background-color":"#cf3535"});
				actualScoring["SalesRank"]=3;
				descText=descText+"Low Sales,";
			}
			if(ScoringVar['TotalSellers']>25)
			{
				TotalScore=TotalScore+5;
				$("#Hcom").find("div").css({"width":"45%"});
				$("#HcomText").html("Average");
				$("#Hcom").find("div").css({"background-color":"#FFA500"});
				actualScoring["TotalSellers"]=5;
			}
			else if(ScoringVar['TotalSellers']>15)
			{
				TotalScore=TotalScore+8;
				$("#Hcom").find("div").css({"width":"65%"});
				$("#HcomText").html("Great");
				$("#Hcom").find("div").css({"background-color":"#18c187"});
				actualScoring["TotalSellers"]=8;
			}
			else if(ScoringVar['TotalSellers']>10)
			{
				TotalScore=TotalScore+10;
				$("#Hcom").find("div").css({"width":"75%"});
				$("#HcomText").html("Great");
				$("#Hcom").find("div").css({"background-color":"#18c187"});
				actualScoring["TotalSellers"]=10;
			}
			else if(ScoringVar['TotalSellers']>5)
			{
				TotalScore=TotalScore+12;
				$("#Hcom").find("div").css({"width":"85%"});
				$("#HcomText").html("Excellent");
				$("#Hcom").find("div").css({"background-color":"#18c187"});
				actualScoring["TotalSellers"]=12;
			}
			else
			{
				TotalScore=TotalScore+14;
				$("#Hcom").find("div").css({"width":"100%"});
				$("#HcomText").html("Excellent");
				$("#Hcom").find("div").css({"background-color":"#18c187"});
				actualScoring["TotalSellers"]=14;
			}
			if(ScoringVar['TotalSellers']>100)
			{
				$("#Hcom").find("div").css({"width":"25%"});
				$("#HcomText").html("Low");
				descText=descText+"High Competition,";
				$("#Hcom").find("div").css({"background-color":"#cf3535"})
			}
			actualScoring["TopRank"]=0;
			if(typeof ScoringVar['TopRank']!="undefined")
			{
				TotalScore=TotalScore+ScoringVar['TopRank'];
				actualScoring["TopRank"]=ScoringVar['TopRank'];
				if(ScoringVar['TopRank']>=14)
				{
					$("#Hrank").find("div").css({"width":"100%"});
					$("#HrankText").html("Excellent");
					$("#Hrank").find("div").css({"background-color":"#18c187"});
				}
				else if(ScoringVar['TopRank']>=10)
				{
					$("#Hrank").find("div").css({"width":"75%"});
					$("#HrankText").html("Great");
					$("#Hrank").find("div").css({"background-color":"#18c187"});
				}
				else if(ScoringVar['TopRank']>=8)
				{
					$("#Hrank").find("div").css({"width":"50%"});
					$("#HrankText").html("Good");
					$("#Hrank").find("div").css({"background-color":"#FFA500"});
				}
				else if(ScoringVar['TopRank']>=5)
				{
					$("#Hrank").find("div").css({"width":"25%"});
					$("#HrankText").html("Low");
					$("#Hrank").find("div").css({"background-color":"#cf3535"});
					descText=descText+"Low Rank%,";
				}
			}
			if(typeof ScoringVar['BuyBoxStock']!="undefined")
			{
				if(ScoringVar['BuyBoxStock']>500)
				{
					TotalScore=TotalScore+5;
					$("#Hbbstock").find("div").css({"width":"25%"});
					$("#HbbstockText").html("Low");
					descText=descText+"High Buybox Stock%,";
					$("#Hbbstock").find("div").css({"background-color":"#cf3535"});
					actualScoring["BuyBoxStock"]=5;
				}
				else if(ScoringVar['BuyBoxStock']>100)
				{
					TotalScore=TotalScore+8;
					$("#Hbbstock").find("div").css({"width":"50%"});
					$("#HbbstockText").html("Average");
					$("#Hbbstock").find("div").css({"background-color":"#FFA500"});
					actualScoring["BuyBoxStock"]=8;
				}
				else if(ScoringVar['BuyBoxStock']>50)
				{
					TotalScore=TotalScore+10;
					$("#Hbbstock").find("div").css({"width":"75%"});
					$("#HbbstockText").html("Great");
					$("#Hbbstock").find("div").css({"background-color":"#18c187"});
					actualScoring["BuyBoxStock"]=10;
				}
				else if(ScoringVar['BuyBoxStock']>20)
				{
					TotalScore=TotalScore+12;
					$("#Hbbstock").find("div").css({"width":"85%"});
					$("#HbbstockText").html("Excellent");
					$("#Hbbstock").find("div").css({"background-color":"#18c187"});
					actualScoring["BuyBoxStock"]=12;
				}
				else
				{
					TotalScore=TotalScore+14;
					$("#Hbbstock").find("div").css({"width":"100%"});
					$("#HbbstockText").html("Excellent");
					$("#Hbbstock").find("div").css({"background-color":"#18c187"});
					actualScoring["BuyBoxStock"]=12;
				}
			}
			else
			{
				TotalScore=TotalScore+14;
				$("#Hbbstock").find("div").css({"width":"100%"});
				$("#HbbstockText").html("Excellent");
				$("#Hbbstock").find("div").css({"background-color":"#18c187"});
				actualScoring["BuyBoxStock"]=14;
			}
			var beforeTotal=TotalScore;
			//console.log("actualScoring------->",actualScoring);
			//console.log("TotalScore------->",beforeTotal);
			if(ScoringVar['SalesRank']<=11 && (ScoringVar['TopRank']>=5 && ScoringVar['TopRank']<8))
			{
				TotalScore=(TotalScore*50/100);
			}
			else if(fees.roi<(IdealRoiSetting*(90/100)) && fees.profit<(IdealProfitSetting*(90/100)))
			{
				TotalScore=(TotalScore*50/100);
			}
			else if(fees.roi<(IdealRoiSetting*(90/100)))
			{
				TotalScore=(TotalScore*50/100);
			}
			else if(fees.profit<(IdealProfitSetting*(90/100)))
			{
				TotalScore=(TotalScore*50/100);
			}
			else if(ScoringVar['SalesRank']<=11 || (ScoringVar['TopRank']>=5 && ScoringVar['TopRank']<8))
			{
				TotalScore=(TotalScore*80/100);
			}
			
			//console.log("TotalScore------->",ScoringVar);
			if(TotalScore>80)
			{
				$("#scoreMainDesc").html("This Item Has a Excellent Score");
			}
			else if(TotalScore>60)
			{
				$("#scoreMainDesc").html("This Item Has a Great Score");
			}
			else if(TotalScore>50)
			{
				$("#scoreMainDesc").html("This Item Has a Good Score");
			}
			else if(TotalScore>35)
			{
				$("#scoreMainDesc").html("This Item Has a Average Score");
			}
			else
			{
				$("#scoreMainDesc").html("This Item Has a Low Score");
				descText=descText.replace(/,+$/,'');
				$("#scoreMainDescReason").html(descText);
			}
			if(!automaticCall)
			{
				$("#Hoverall").find("div").css({"width":TotalScore+"%"});
				//$("#Hoveralltext").html("Excellent");
				$("#HoverallNumber").html(TotalScore+"%");
				HoverallNumber
				if(TotalScore<=35)
				{
					$(".SEMIbar").css({"border-right-color": "#cf3535 !important","border-bottom-color": "#cf3535 !important"});
					$("#Hoverall").find("div").css({"background-color":"#cf3535"});
				}
				else if(TotalScore<=60)
				{
					$(".SEMIbar").css({"border-right-color": "#FFA500 !important","border-bottom-color": "#FFA500 !important"});
					$("#Hoverall").find("div").css({"background-color":"#FFA500"});
				}
				else if(TotalScore>60)
				{
					$(".SEMIbar").css({"border-right-color": "#18c187 !important","border-bottom-color": "#18c187 !important"});
					$("#Hoverall").find("div").css({"background-color":"#18c187"});
				}
				
			$(".SEMIprogress").find("span").html(TotalScore);
			$(".SEMIprogress").each(function(){
  
  var $bar = $(this).find(".SEMIbar");
  var $val = $(this).find("span");
  var perc = parseInt( $val.text(), 10);

  $({p:0}).animate({p:perc}, {
    duration: 3000,
    easing: "swing",
    step: function(p) {
      $bar.css({
        transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
        // 45 is to add the needed rotation to have the green borders at the bottom
      });
      $val.text(p|0);
    }
  });
});
}
		})
		},100);
        });
        }
    });
    
  }

  self.openOptions = function () {
    chrome.runtime.sendMessage({ 'name': 'options' });
  }

  var iframe = $('<iframe frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>');
  var offers = $('<div id="sendQtyHtml" style="font-family: Lato Regular;border: 5px solid #24A96B;width: 535px;border-radius: 10px 10px 10px 10px;min-height: 393px;max-height:1500px !important">');
  function resizeIframe(size) {
    var iframeHeight = Math.max(size.height - 720 + 400, 400);
    iframe.attr({ height: iframeHeight + 'px' });
  }
var iframeimg = $('<img title="keepa">');
var urlNewAdded=$(location).attr('href');
var asinNewAdded=parseAsinNewAdded(urlNewAdded);
var sellerCount="";
var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
		if(RegionNewAdded!="com")
		{
			sellerCount="<tr><th colspan='4'><font style='color:#18c187'>Total Sellers:</font>&nbsp;&nbsp;<font id='fbasellers'></font>&nbsp;&nbsp;&nbsp;&nbsp;<font id='mfnsellers'></font></th></tr>";
		}
 var fullhtml="<table style='font-size: 16px;color: #ffffff; margin: 4% 9% 9% 9%;width: 80%;border-collapse: separate;border-spacing: 0 8px;'><thead><tr><th><font style='color:#18c187'>ASIN: "+asinNewAdded+"</font></th></tr><tr><th colspan='4'><font style='color:#18c187'>Avg BB Price:</font>&nbsp;&nbsp;(30) <font style='color:#18c187' id='bb30'></font>&nbsp(60) <font style='color:#18c187' id='bb60'></font>&nbsp(90) <font style='color:#18c187' id='bb90'></font></th></tr><tr><th colspan='4'><font style='color:#18c187'>Avg Rank:</font>&nbsp;&nbsp;&nbsp;(30) <font style='color:#18c187' id='rrr30'></font>&nbsp(60) <font style='color:#18c187' id='rrr60'></font>&nbsp(90) <font style='color:#18c187' id='rrr90'></font></th></tr>"+sellerCount+"<tr><th>Seller</th><th>Quantity</th><th>Price</th><th>Type</th></tr></thead><tbody id='tableid'><tr class='firstrow'><td colspan='3'>Loading....</td></tr></tbody></table>";
//var dialog = $('<div><a  class="KeepaButton" target="_blank" href="#"><button  class="keepabuttonclass" >Investigate Further</button></a></div>').append(iframeimg).append(offers).appendTo('body').dialog({
  var dialog = $('<div id="sendQtyHtml"  style="width: 535px;min-height: 393px;max-height:1500px !important">'+fullhtml+'</div>').appendTo('body').dialog({
    autoOpen: false,
    modal: true,
    resizable: true,
    width: 620,
    dialogClass: "BorderRound",
    close: function () {
      iframe.attr('src', '');
      iframeimg.attr('src', '');
    },
    open: function( event, ui ) {
    $('.ui-dialog-titlebar').remove();
    $('.ui-widget-overlay').click(function(){
    $('.ui-widget-overlay').hide();
    $('div[role^="dialog"]').hide();
    $('[aria-describedby^="sendQtyHtml"]').hide();
    })
    $('[aria-describedby^="sendQtyHtml"]').blur(function(){
    $('.ui-widget-overlay').hide();
    $('div[role^="dialog"]').hide();
    	$('[aria-describedby^="sendQtyHtml"]').hide();
    });
    },
    resize: function (event, ui) {
      chrome.storage.sync.set({ modalSize: ui.size });
      resizeIframe(ui.size);
    }
  });
  var dialogVALogin = $('<div class="valoginform"></div>').appendTo('body').dialog({
    autoOpen: false,
    modal: true,
    resizable: true,
    width: 785,
    height: 720,
    close: function () {
    },
    resize: function (event, ui) {
      chrome.storage.sync.set({ modalSize: ui.size });
      resizeIframe(ui.size);
    }
  });
   var f = setInterval(function() {
 if(typeof $('.ungateButton').html()!="undefined")
 {
 	var urlNewAdded=$(location).attr('href');
      var asinNewAdded=parseAsinNewAdded(urlNewAdded);
		var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
 	$(".ungateButton").click(function(){
 	$(".ungateButton").html("Loading");
ungate(RegionNewAdded,self.asin());
  //button.gobutton.start();
  });
 	 clearInterval(f);
 	 
 }
 },100);
  function showkeepaatbeg(object){
  
  
  		
    const KEEPA_REGION = {
      'de': 3,
      'fr': 4,
      'es': 9,
      'it': 8,
      'co.uk': 2,
      'com': 1,
    };
    var globalAsin=document.getElementsByTagName("body")[0].getAttribute("asinatt");
    var globalRegion=document.getElementsByTagName("body")[0].getAttribute("regionatt");
    const keepaRegion = KEEPA_REGION[currentRegion];
    var urlNewAdded=$(location).attr('href');
      var asinNewAdded=parseAsinNewAdded(urlNewAdded);
		var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
		
    var src = 'https://dyn.keepa.com/pricehistory.png?asin='+ self.asin()+'&domain='+RegionNewAdded+'&width=750&height=350&amazon=1&new=1&used=1&salesrank=1&range=31';
    //var src = 'https://keepa.com/iframe_addon.html#' + keepaRegion + '-0-' + self.asin();
    var keepbuttonsrc= 'https://keepa.com/#!product/' + keepaRegion + '-' + self.asin();
    iframe.attr({
      width: '100%',
      src: src
    });
    iframeimg.attr({
      width: '100%',
      src: src
    });

    chrome.storage.sync.get(['modalSize'], function (data) {
      var modalSize = data.modalSize || { width: 785, height: 720, top: 255 };
      resizeIframe(modalSize);
      var urlNewAdded=$(location).attr('href');
      var asinNewAdded=parseAsinNewAdded(urlNewAdded);
      if(typeof $('#mbc').attr('data-asin') !='undefined' && $('#mbc').attr('data-asin') !='')
  		{
  			asinNewAdded=$('#mbc').attr('data-asin');
  		}
		var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
		totalFBASELLERS=0;
		totalnumberOfSellers=0;
		 chrome.runtime.sendMessage({ data: {
        		FunctionCall: 'NumberOfSellers' ,
        		asin: asinNewAdded,
        		country: RegionNewAdded,
        		},'FunctionCall':'NumberOfSellers' }, 
      function(result) {
      		if(result.status=="success")
      		{
      			if(result.data.tnew<=0 && result.data.total>0)
      			{
      				$('#mfnsellers').html("0 FBM");
        			$('#fbasellers').html("0 FBA");
      			}
      			else if(result.data.tnew>0 && result.data.fba>0)
      			{
      				var fbm=result.data.tnew-result.data.fba;
      				$('#mfnsellers').html(fbm+" FBM");
        			$('#fbasellers').html(result.data.fba+" FBA");
      			}
      			else if(result.data.tnew>0 || result.data.total>0)
      			{
      				//ScoringVar['TotalSellers']=totalsellers;
      				
					getOffersNewAdded(RegionNewAdded,asinNewAdded,"prime","",result.data.tnew,0,1);
				}
				else
				{
					getOffersNewAdded(RegionNewAdded,asinNewAdded,"all","",0,0,0);
				}
			}
			else
			{
				getOffersNewAdded(RegionNewAdded,asinNewAdded,"all","",0,0,0);
			}
		})
		var sellerCount="";
		if(RegionNewAdded!="com")
		{
			sellerCount="<tr><th><font style='color:#18c187>Total Sellers:</font></th><th id='fbasellers'></th><th id='mfnsellers'></th></tr>";
		}
	//style="font-size: 100%; width: 28%; color: #ffffff; position:relative; background: #059493; padding: 5px 8px; border: 0; border-radius: 5px; "
      //var fullhtml='<div class="extendDiv" id="extendDiv" style="font-size: 100%; width: 28%; position:relative; padding: 5px 8px; border: 0; border-radius: 5px; "><label id="mfnsellers" class="mfnsellers" >Loading...</label><label id="fbasellers" class="fbasellers">Loading...</label></div><div class="overlaydiv">Loading Quantity....</div>'+object;
      var fullhtml="<table style='font-size: 16px;color: #3EB0F7; margin: 9% 9% 9% 9%;width: 80%;border-collapse: separate;border-spacing: 0 8px;'><thead><tr><th><font style='color:#165074'>ASIN: "+asinNewAdded+"</font></th></tr><tr><th>BB Price:</th><th colspan='3'>(30) <font style='color:#165074' id='bb30'></font>&nbsp(60) <font style='color:#165074' id='bb60'></font>&nbsp(90) <font style='color:#165074' id='bb90'></font></th></tr><tr><th>Rank:</th><th colspan='3'>(30) <font style='color:#165074' id='rrr30'></font>&nbsp(60) <font style='color:#165074' id='rrr60'></font>&nbsp(90) <font style='color:#165074' id='rrr90'></font></th></tr>"+sellerCount+"<tr><th>Seller</th><th>Quantity</th><th>Price</th><th>Type</th></tr></thead><tbody id='tableid'><tr class='firstrow'><td colspan='3'>Loading....</td></tr></tbody></table>";
      offers.html(fullhtml);
      dialog.dialog('option', { modalSize }).dialog('open');
      dialog.find('.KeepaButton').attr('href',keepbuttonsrc);
      dialog.parent().css('z-index', '1001');
      dialog.parent().css('display', 'none');
      dialog.parent().css('top', '255px');
      $('.ui-widget-overlay').hide();
      var closebuttonhtml='<span type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close" title="Close"><span class="ui-button-icon ui-icon ui-icon-closethick"></span><span class="ui-button-icon-space"> </span>Close</span>';
      $('button[class^="ui-button"]').replaceWith(closebuttonhtml);
      /*$('.ui-button').click(function(){$('div[role^="dialog"]').hide();
      $('.ui-widget-overlay').hide();});*/
      fullhtml=null;
	closebuttonhtml	= null;
    })
  }
  function openNewBackgroundTab(){
    var a = document.createElement("a");
    a.href = PopupUrl;
    var evt = document.createEvent("MouseEvents");
    //the tenth parameter of initMouseEvent sets ctrl key
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                                true, false, false, false, 0, null);
    a.dispatchEvent(evt);
}
  self.vaCheckout=function ()
{
	chrome.extension.sendMessage({
				"msg": "setSessionTime",
				"captureData": {
          		VANAME: vaname,
          		VAEMAIL: vaemail,
          		VALICENSE: valicenseKey,
          		ReqType: totalsessiontime(),
          		}
			}, function(response) {
				
			});
	chrome.storage.sync.remove('vaname',function(){});
	chrome.storage.sync.remove('vaemail',function(){});
	chrome.storage.sync.remove( "timerclock",function(){});
	//chrome.tabs.create({url : "html/popup.html"});
	vaname='';
	vaemail='';
	$('.timer').remove();
	$('.vacheckout').hide();
	$('.vacheckin').show();
}
self.vaFormSubmit=function ()
{
	vaname=$('input[name^="vaname"]').val();
	vaemail=$('input[name^="vaemail"]').val();
	chrome.storage.sync.set({'vaname':vaname,'vaemail':vaemail}, function (key) {
	$('#myForm').hide();
	$('.vacheckin').hide();
	$('.vacheckout').show();
	startTimer=getNow();
	chrome.storage.sync.set({ "startTimer": startTimer });
	 $("body").append('<div class="timer timerbest" id="timer-"><span class="hours">00</span>:<span class="minutes">00</span>:<span class="seconds">00</span></div>');
   setAct('interval', window.setInterval(function () {
   			if((typeof vaname!='undefined' && vaname!='') && windowactive==1)
   			{
            	updateTimer();
            }
        }, 1000));
	chrome.extension.sendMessage({
				"msg": "setPageDetails",
				"size": sizeofscreen,
				"scrollBy": window.innerHeight,
				"originalParams": {
					"overflow": document.querySelector("body").style.overflow,
					"scrollTop": document.documentElement.scrollTop
				}
			}, function(response) {
				console.log("response----->",response);
			});
			})
	return false;
}
self.vaFormClose=function ()
{
	$('#myForm').toggle();
}
	self.showValogin = function (){
	$('#myForm').toggle();
	}
  self.showKeepa = function () {
  /*if(!defaultStockCheck)
  {
  var f = setInterval(function() {
  	if(defaultStock && typeof defaultStock!="undefined")
  	{
  		clearInterval(f);
  		console.log("started");
  		CartsubmitStarted=true;
  		retrieveQuantities(defaultStockObj).then(x=>{defaultStockObj=null;});
  	}
  },100);
}*/
$("#myModal").remove();
const KEEPA_REGION = {
      'de': 3,
      'fr': 4,
      'es': 9,
      'it': 8,
      'co.uk': 2,
      'com': 1,
    };
if(!CalledSalesEstimator)
{
	
	 
    var globalAsin=document.getElementsByTagName("body")[0].getAttribute("asinatt");
    var globalRegion=document.getElementsByTagName("body")[0].getAttribute("regionatt");
    const keepaRegion = KEEPA_REGION[currentRegion];
    var urlNewAdded=$(location).attr('href');
      var asinNewAdded=parseAsinNewAdded(urlNewAdded);
      /*chrome.storage.sync.get("DisableStockChecker",function(DisableStockCheckerobj){
	if((typeof DisableStockCheckerobj.DisableStockChecker=="undefined" || DisableStockCheckerobj.DisableStockChecker) && !CalledStockerChecker)
	{
		//retrieveQuantitiesOBSOLUTE(docobj);
		console.log("Stocker Checker Called");
		newAddToCart2(1,GlobalObjects);
		CalledStockerChecker=true;
		//retrieveQuantities(docobj);
	}
	});*/
      var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
      var productData = getProductData();
      SalesEstimator(asinNewAdded,RegionNewAdded,self.category(),self.rank(),"average");
	CalledSalesEstimator=true;
}

  if(typeof $('#tableid').html()!='undefined' && typeof $('.firstrow').html()=='undefined' && typeof $('[aria-describedby="sendQtyHtml"]').html()!="undefined")
  {
		$("#myModal").remove();
		$('div[aria-describedby^="sendQtyHtml"]').show();
 		//$('div[role^="dialog"]').show();
      	$('.ui-widget-overlay').show();
      	$('div[aria-describedby^="sendQtyHtml"]').css("display", "inline");
      	//$('div[role^="dialog"]').css("display", "inline");
      	$('.ui-widget-overlay').css("display", "inline");
	}
	else
	{
	 const keepaRegion = KEEPA_REGION[currentRegion];
	var keepbuttonsrc= 'https://keepa.com/#!product/' + keepaRegion + '-' + self.asin();
	 chrome.storage.sync.get(['modalSize'], function (data) {
      var modalSize = data.modalSize || { width: 785, height: 720 };
      resizeIframe(modalSize);
      var urlNewAdded=$(location).attr('href');
      var asinNewAdded=parseAsinNewAdded(urlNewAdded);
		var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
		totalFBASELLERS=0;
		totalnumberOfSellers=0;
		if(typeof $('#mbc').attr('data-asin') !='undefined' && $('#mbc').attr('data-asin') !='')
  		{
  			asinNewAdded=$('#mbc').attr('data-asin');
  		}
  		console.log("getOffersNewAdded");
		getOffersNewAdded(RegionNewAdded,asinNewAdded,"all","",0,0);
	//style="font-size: 100%; width: 28%; color: #ffffff; position:relative; background: #059493; padding: 5px 8px; border: 0; border-radius: 5px; "
      var fullhtml='<div class="extendDiv" id="extendDiv" style="font-size: 100%; width: 28%; position:relative; padding: 5px 8px; border: 0; border-radius: 5px; "><label id="mfnsellers" class="mfnsellers" >Loading...</label><label id="fbasellers" class="fbasellers">Loading...</label></div>'+self.offersHTML();
      offers.html(fullhtml);
      dialog.dialog('option', { modalSize }).dialog('open');
      dialog.find('.KeepaButton').attr('href',keepbuttonsrc);
      dialog.parent().css('z-index', '1001');
      $('div[role^="dialog"]').show();
      	$('.ui-widget-overlay').show();
      	fullhtml=null;
    })
    var productData = getProductData();
    var globalAsin=document.getElementsByTagName("body")[0].getAttribute("asinatt");
    var globalRegion=document.getElementsByTagName("body")[0].getAttribute("regionatt");
   
    var urlNewAdded=$(location).attr('href');
      var asinNewAdded=parseAsinNewAdded(urlNewAdded);
      /*chrome.storage.sync.get("DisableStockChecker",function(DisableStockCheckerobj){
	if((typeof DisableStockCheckerobj.DisableStockChecker=="undefined" || DisableStockCheckerobj.DisableStockChecker) && !CalledStockerChecker)
	{
		//retrieveQuantitiesOBSOLUTE(docobj);
		console.log("GlobalObjects--->",GlobalObjects);
		console.log("Stocker Checker Called");
		newAddToCart2(1,GlobalObjects);
		CalledStockerChecker=true;
		//retrieveQuantities(docobj);
	}
	});*/
      var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
      SalesEstimator(asinNewAdded,RegionNewAdded,productData.category,productData.rank,"average");
      if(typeof $('#mbc').attr('data-asin') !='undefined' && $('#mbc').attr('data-asin') !='')
  		{
  			asinNewAdded=$('#mbc').attr('data-asin');
  		}
		var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
    var src = 'https://dyn.keepa.com/pricehistory.png?asin='+ self.asin()+'&domain='+RegionNewAdded+'&width=750&height=350&amazon=1&new=1&used=1&salesrank=1&range=31';
    //var src = 'https://keepa.com/iframe_addon.html#' + keepaRegion + '-0-' + self.asin();
    
    iframe.attr({
      width: '100%',
      src: src
    });
    iframeimg.attr({
      width: '100%',
      src: src
    });

   
}
  }
 chrome.storage.sync.set({ showCalc: self.showCalc() });
  self.toggleCalc = function () {
    self.showCalc(!self.showCalc());
    loadsliders()
   // $("#priceSlider").simpleSlider();
    chrome.storage.sync.set({ showCalc: self.showCalc() });
    $("[data-slider]")
    .each(function () {
      var input = $(this);
      $("<span class='tooltip' style='font-size:17px;font-weight: bolder;color: #80faff;' data-title='Discount Buy Price:'><span class='tooltiptext'>Discount Buy Price:</span>")
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
    
  };

  self.checkLicense = function () {
    self.loading(true);
    chrome.storage.sync.get(['licenseKey','licensecheck','licenseDateCheck'], function (key) {
    	if(typeof key.licenseDateCheck=="undefined")
    	{
    		var now = new Date().getTime();
    		key.licenseDateCheck=now;
    		chrome.storage.sync.set({ "licenseDateCheck": now });
    	}
    	var LastLicenseCheckdays=get_time_diff(key.licenseDateCheck);
      if (!key.licenseKey) {
        self.loading(false);
        self.hasLicense(false);
      }
      /*else if(typeof key.licensecheck!="undefined" && key.licensecheck=="success" && typeof key.licenseDateCheck!="undefined" && LastLicenseCheckdays<=1)
      {
      	self.hasLicense(true);
        self.isLicenseValid(true);
        self.loading(false);
        var asin = '';
        var gotthat=false;
        var refreshAsin = function () {
        var coll = document.getElementsByClassName("collapsible");
		var i;
		if(coll.length==1 && !gotthat)
		{
			gotthat=true;
			for (i = 0; i < coll.length; i++) 
			{
  				coll[i].addEventListener("click", function() {
    			this.classList.toggle("active");
    			var content = this.nextElementSibling;
     			$(content).toggle();
  				});
			}
		}	
        var tempAsin = parseAsin(window.location.toString());
        if (!tempAsin) {
              return;
        }
        if (tempAsin !== asin) {
        asin = tempAsin;
        self.asin(asin);
        self.updateProduct(asin);
        }
    	else
        {
        	return;
        }
        setTimeout(refreshAsin, 300);
    	}
    	refreshAsin();
      }*/
       else {
      chrome.runtime.sendMessage({
   			method: 'POST',
    		action: 'license',
    		dataType: 'json',
    		url: 'https://admin.fbamultitool.com/license/index.php',
    		data: {
          		licensekey: key.licenseKey,
          		actionType: "extension",
        		}
			}, function(response) {
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
    					key.licenseDateCheck=now;
    					chrome.storage.sync.set({ "licenseDateCheck": now });
						chrome.storage.sync.set({ "licensecheck": "success" });
						/* come here chrome.storage.sync.set({ "licensecheckTime": "success" });*/
						self.hasLicense(true);
          				self.isLicenseValid(true);
          				self.loading(false);
          				var asin = '';
          				var gotthat=false;
          				var refreshAsin = function () {
          				if(!collapsibleClickRegistered)
          				{
        				var coll = document.getElementsByClassName("collapsible");
						var i;
						if(coll.length==1 && !gotthat)
						{
							gotthat=true;
							collapsibleClickRegistered=true;
							for (i = 0; i < coll.length; i++) {
  								coll[i].addEventListener("click", function() {
    							this.classList.toggle("active");
    							var content = this.nextElementSibling;
     							$(content).toggle();
  									});
								}
						}	
						}
            			var tempAsin = parseAsin(window.location.toString());
            			if (!tempAsin) {
              				return;
            			}
            			if (tempAsin !== asin) {
              				asin = tempAsin;
              				self.asin(asin);
              				self.updateProduct(asin);
           			 	}
            			else
            			{
            				return;
            			}
            			setTimeout(refreshAsin, 300);
          				};
          				refreshAsin();
					}
					else
					{
						self.loading(false);
          				self.hasLicense(true);
          				self.isLicenseValid(false);
          				self.licenseKey("");
          				createCustomAlert(response.requestmessage);
					}
				}
				else
				{
					self.loading(false);
          			self.hasLicense(true);
          			self.isLicenseValid(false);
          			self.licenseKey("");
          			createCustomAlert("Error Occured. Please Re-enter License Code OR Try Reinstalling App");
				}
				});
      }
    });
  };

  self.exportData = async function (settings) {
  var exportsettingset=false;
  chrome.storage.sync.get(OPTIONS_KEYS, function (_settings) {
  globalsettings=_settings;
  if(typeof globalsettings.asinsel!='undefined' && globalsettings.asinsel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.DateOfExport!='undefined' && globalsettings.DateOfExport!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.namesel!='undefined' && globalsettings.namesel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.catsel!='undefined' && globalsettings.catsel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.ranksel!='undefined' && globalsettings.ranksel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.feessel!='undefined' && globalsettings.feessel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.profitsel!='undefined' && globalsettings.profitsel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.riosel!='undefined' && globalsettings.riosel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.pmarginsel!='undefined' && globalsettings.pmarginsel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.bevensel!='undefined' && globalsettings.spricesel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.CQuantity!='undefined' && globalsettings.CQuantity!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.weightsel!='undefined' && globalsettings.weightsel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.storeurlsel!='undefined' && globalsettings.storeurlsel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.bpricesel!='undefined' && globalsettings.bpricesel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.spricesel!='undefined' && globalsettings.spricesel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.estsales!='undefined' && globalsettings.estsales!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.amazonLink!='undefined' && globalsettings.amazonLink!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.storeLink!='undefined' && globalsettings.storeLink!=0)
    {
    	exportsettingset=true;
    }
    if (!self.totalFees().referralFee) {
      return alert('You should do calculations first.')
    }
    var urlNewAdded=$(location).attr('href');
    var asinNewAdded=parseAsinNewAdded(urlNewAdded);
    var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
    if(RegionNewAdded == "co.uk")
	{
		RegionNewAdded="uk";
	}
	else if(RegionNewAdded == "com")
	{
		RegionNewAdded="us";
	}
	var ASINL=asinNewAdded+"_"+RegionNewAdded;
	var salsest=getCookie(ASINL);
    const currencySign = self.currencySign();

    const data = {
      asin: self.asin(),
      currencySign,
      name: self.productName(),
      category: self.category(),
      rank: self.rank(),
      fees: self.fees().totalFees,
      profit: self.fees().profit,
      roi: self.fees().roi,
      profitMargin: self.fees().profitMargin,
      breakeven: self.fees().breakeven,
      weight: self.displayWeight(),
      storeURL: self.storeURL(),
      url: location.href,
      CQuantity: GCQuantity,
      buyPrice: self.buyPriceConverted(),
      sellPrice: self.sellPrice(),
      exportsettingset: exportsettingset,
      globalsettings: globalsettings,
      SalesEstimate: salsest,
    };
    chrome.runtime.sendMessage({ name: 'export', data });
  })
  
  }
  


/****************ends here*************/
  function showBlock(results) {
  $(".ungateButton").css({"background-color":"#18c187"});
  if(results[0].productNotFound)
  {
  	 self.data({
        pic: 'notfound',
        result: '<font style="color:orange;">&nbsp;N/A</font>',
        resultLink: results.productURL,
        /*additional: 'No results found',*/
        hideHazmat: true
      });
  }
    else if (!results.length) {
      self.data({
        pic: 'notfound',
        result: '<font style="color:#9F6000;">&nbsp;Maybe</font>',
        resultLink: results.productURL,
        /*additional: 'No results found',*/
        hideHazmat: true
      });
    } else if (!results[0].canSellType.length) {
  
      self.data({
        pic: 'unavailable',
        result: '<font style="color:rgb(207, 53, 53);">&nbsp;No</font',
        resultLink: results.productURL,
        /*additional: 'You can\'t list this item',*/
        additional: '',
      });
    } else {
    	if(results[0].canSellType.indexOf("new")>=0)
    	{
    		 var f = setInterval(function() {
 if(typeof $('.ungateButton').html()!="undefined")
 {
 	 clearInterval(f);
      		$(".ungateButton").css({"opacity":"0.5"});
      		$(".ungateButton").attr("disabled", true);
}
},100);
      		self.data({
        			pic: 'available',
        			result: '<font style="color: #18c187; font-size:14px; padding-left: 10px;">Yes</font>',
        			resultLink: results.productURL,
        			/*additional: 'You can list this item new',*/
        			additional: '',
      				});
      	}
      	else
      	{

      		self.data({
        		pic: 'unavailable',
        		result: '<font style="color:rgb(207, 53, 53);">&nbsp;No</font',
        		resultLink: results.productURL,
        		/*additional: 'You can\'t list this item',*/
        		additional: '',
      				});
      	}
    }
  }
var onGetDevices = function(ports) {
  for (var i=0; i<ports.length; i++) {
    console.log(ports[i].path);
  }
}
function getbuyprice(ProductTitle)
{
	
	if(typeof ProductTitle!="undefined" && ProductTitle.trim()!='')
	{
		var productURL="https://www.argos.co.uk/search/"+ProductTitle.replace(" ","-");
		var PPrice=0;
	  	return new Promise((resolve, reject) => {
   			$.get(productURL).done(function (html) {
      		var parser = new DOMParser();
      		var dom = parser.parseFromString(html, 'text/html');
      		$('.ac-product-card--default',dom).each(function(i,val){
      			if(PPrice==0 || parseInt($(val).find('.ac-product-price').find('[itemprop="price"]').attr('content'))<PPrice)
      			{
      				PPrice=$(val).find('.ac-product-price').find('[itemprop="price"]').attr('content');
      			}
      			})
      			self.buyPrice(PPrice);
      			$('#buypriceinput').val(PPrice);
      			self.calculate();
      		resolve({PPrice: PPrice});
      		
    		}).fail(() => reject())  
  		});
  	}
  	else
  	{
  		self.buyPrice((productData.price*70/100));
  		$('#buypriceinput').val((productData.price*70/100));
      	self.calculate();
  		return {PPrice: (productData.price*70/100)};
  	}
}
  self.updateProduct = function (asin) {
    var productData = getProductData();
	self.sellPrice(productData.price);
    self.productName(productData.title);
    self.rank(productData.rank);
    self.category(productData.category);
	var urlNewAdded=$(location).attr('href');
      var asinNewAdded=parseAsinNewAdded(urlNewAdded);
	if(asinNewAdded.trim()!="" && self.sellPrice()>0)
    {
      		calculatefirst();
			FirstCalculatorCall=true;
    }
	scraper.getOffers(asinNewAdded)
      .then(x => {
        self.offersHTML(x.offersHTML);
        if(productData.price<=0)
    	{
    		self.sellPrice(lowestNewPriceGlobal);
    	}
    	else
    	{
    		self.sellPrice(productData.price);
   		 }
   		if(asinNewAdded.trim()!="" && !FirstCalculatorCall)
      	{
      		calculatefirst();
      	}
        const brand = x.brand || $('#bylineInfo').text();
        self.plRisk(getPLRisk(x.sellers, brand));
        showkeepaatbeg(self.offersHTML());
    if(FBAORFBMGOT.trim()!="" && typeof FBAORFBM!="undefined" && FBAORFBM!="FBA")
    {
    	self.FBAORFBM(FBAORFBMGOT);
    }
    else
    {
    	if(productData.FBAORFBM!="FBA" && FBAORFBMGOT.trim()!="")
    	{
    		self.FBAORFBM(FBAORFBMGOT);
    	}
    	else
    	{
   			self.FBAORFBM(productData.FBAORFBM);
   		}
   	}
      });
    BuyBokOferlistingid=$("#addToCart").find("#offerListingID").val();
    		var buyboxOffer={};
    		var buyboxOffers=[];
    		if(typeof BuyBokOferlistingid!="undefined")
    		{
    			if(BuyBokOferlistingid.trim()!="")
    			{
    				//var productData = getProductData();
    				buyboxOffer.marketPlace='amazon.' + currentRegion;
    				buyboxOffer.offerId=BuyBokOferlistingid;
    				buyboxOffer.asin=$("#addToCart").find("#ASIN").val();;
    				buyboxOffer.merchantName=$("#addToCart").find("#merchantID").val();
    				buyboxOffer.price=productData.price;
    				buyboxOffer.shippingPrice=0;
    				buyboxOffer.merchantId=$("#addToCart").find("#merchantID").val();
    				buyboxOffer.fba=false;
    				buyboxOffer.url="";
    				buyboxOffers.push(buyboxOffer)
    				var asinNewAdded=parseAsinNewAdded(location.href);
					chrome.runtime.sendMessage({
   						method: 'POST',
    					action: 'AddToCart',
    					data: {
          					alreadyFoundSellers: buyboxOffers,
          					ASIN: asinNewAdded,
          					domain: 'amazon.' + currentRegion,
        					}
						}, function(response) {
								if(typeof response[buyboxOffer.merchantId]!="undefined")
								{
									ScoringVar['BuyBoxStock']=response[buyboxOffer.merchantId][0]['stock'];
								}
							})
    			}
    		}
    const sellerAPI = new SellerAPI();
     /****Keepa Image at main page************/
      const KEEPA_REGION = {
      'de': 3,
      'fr': 4,
      'es': 9,
      'it': 8,
      'co.uk': 2,
      'com': 1
    };
     var urlNewAdded=$(location).attr('href');
      var asinNewAdded=parseAsinNewAdded(urlNewAdded);
      var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
    //var gotbuyprice=getbuyprice(productData.title);
    var PreviousDD=asinNewAdded;
     chrome.storage.sync.get(['ProductVariation', 'licenseKey'], function (settings) 
  					{
  						if((typeof settings.ProductVariation=="undefined" || settings.ProductVariation) && (typeof settings.licenseKey !='undefined' && settings.licenseKey!=null))
  						{
 var g = setInterval(function() {
    			//alert($('#native_dropdown_selected_size_name option:selected').val());
    			    chrome.storage.sync.get(['ProductVariation'], function (settingsInn) 
  					{
  						if(typeof settingsInn.ProductVariation=="undefined" || settingsInn.ProductVariation)
  						{
   			
    						if(PreviousDD!=parseAsinNewAdded(urlNewAdded))
    						{
    							 clearInterval(g);
    							location.reload();
    						}
    					}
    				})
    	
    },3000);
    }
    })
    

    
    
   
   
    const keepaRegion = KEEPA_REGION[currentRegion];
    var src = 'https://dyn.keepa.com/pricehistory.png?asin='+ self.asin()+'&domain='+RegionNewAdded+'&width=438&height=150&amazon=1&new=1&used=1&salesrank=1&range=31';
    var src = 'https://dyn.keepa.com/pricehistory.png?asin='+ self.asin()+'&domain='+RegionNewAdded+'&width=393&height=180&amazon=1&new=1&used=1&salesrank=1';

var keepbuttonsrc= 'https://keepa.com/#!product/' + keepaRegion + '-' + self.asin();
     //var html='<label class="togglekeepatext" style="cursor: pointer;width:100%;"><u>toggle keepa chart</u></label><a href="javascript:void(0)"  ><img class="fbamtkeepa" title="keepa" src="'+src+'" style="margin-left: -2%;width: 393px;height: 180px;"></a>';
     //$('.appendkeepa').append(html);
     //alert(graphBack);

     $('.fbamtkeepa').click(function(){
     	//if ((ChildWindow && ChildWindow.closed) || typeof ChildWindow=="undefined") 
     	{
			//ChildWindow=window.open(keepbuttonsrc,"Keepa",toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no,width=750,height=800,status=0, top=200, left=100,);
			window.open(keepbuttonsrc,"Keepa","width=900,height=800,0,status=0,top=400, left=50,location=yes,directories=yes,copyhistory=yes");
		}
});

     if(getCookie("fbamtkeepa")=="hidden")
     {
     	$('.fbamtkeepa').hide();
     }
     $('.togglekeepatext').click(function(){
     if($('.fbamtkeepa').is(":hidden"))
     {
     	setCookie("fbamtkeepa","nohidden",10);
     }
     else
     {
     	setCookie("fbamtkeepa","hidden",10);
     }
     $('.fbamtkeepa').toggle();
     });
      /**********KEEPA IMAGE END***************/
    	var urlNewAdded=$(location).attr('href');
      var asinNewAdded=parseAsinNewAdded(urlNewAdded);
      var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
      SalesEstimator(asinNewAdded,RegionNewAdded,productData.category,productData.rank,"basic");
	/*$('.rwizard-sales-button1').click(function(){
	 var urlNewAdded=$(location).attr('href');
      var asinNewAdded=parseAsinNewAdded(urlNewAdded);
      var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
      $('.restriction-wizard-container1').hide();
      
      
      SalesEstimator(asinNewAdded,RegionNewAdded,productData.category,productData.rank);
	});*/
    chrome.storage.sync.get('autoHazmat', function (settings) {
    self.googlesytings=settings;
    var urlNewAdded=$(location).attr('href');
      var asinNewAdded=parseAsinNewAdded(urlNewAdded);
      var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
      //SalesEstimator(asinNewAdded,RegionNewAdded,productData.category,productData.rank);
      
	
      var BSR , PRODUCTCATEGORY,salesRankFull, inPos,Brpos,classValuePos,classValuePosBEst;
    
      if (settings.autoHazmat || typeof settings.autoHazmat=='undefined') {
        self.checkHazmat();
      }
    })
chrome.storage.sync.get(["PopupShown","lastTimeShown","TokenSaved","MWSTOKENUK","MWSSELLERIDUK","MWSTOKENUSA","MWSSELLERIDUSA"],function(Popup){
	var date1 = new Date(); 
	var timeNow=date1.getTime();
	if(typeof Popup.PopupShown=="undefined" || (Popup.lastTimeShown!="undefined" && ((timeNow-Popup.lastTimeShown)/(1000 * 3600 * 24))>=7 && (typeof Popup.TokenSaved=="undefined" || Popup.TokenSaved!="true")))
	{
		chrome.storage.sync.set({ lastTimeShown: timeNow });
		createCustomAlertAws("Please Enter Your MWS Token And SellerId For Better Service");
	}
	else if((Popup.lastTimeShown!="undefined" && ((timeNow-Popup.lastTimeShown)/(1000 * 3600 * 24))>=7 ))
	{
		if(typeof Popup.MWSTOKENUK=="undefined")
		{
			Popup.MWSTOKENUK="";
		}
		if(typeof Popup.MWSSELLERIDUK=="undefined")
		{
			Popup.MWSSELLERIDUK="";
		}
		if(typeof Popup.MWSTOKENUSA=="undefined")
		{
			Popup.MWSTOKENUSA="";
		}
		if(typeof Popup.MWSSELLERIDUSA=="undefined")
		{
			Popup.MWSSELLERIDUSA="";
		}
		chrome.storage.sync.set({ lastTimeShown: timeNow });
		chrome.runtime.sendMessage({ data: {
          		MWSTOKENUK: Popup.MWSTOKENUK,
          		MWSSELLERIDUK: Popup.MWSSELLERIDUK,
          		MWSTOKENUSA: Popup.MWSTOKENUSA,
          		MWSSELLERIDUSA: Popup.MWSSELLERIDUSA,
        		FunctionCall: 'ValidateMWSKeys',
        		valicenseKey: valicenseKey
        		},'FunctionCall':'ValidateMWSKeys' }, 
      function(response) {
      console.log(response);
      if(response.status!="success")
      {
      	createCustomAlertAws(response.message);
      }
      
    });
	}
});
var WEIGHTSET=false;
if(typeof productData.Weight!="undefined")
{
	if(productData.Weight.trim()!="")
	{
		var arr=productData.Weight.split(" ");
		
		var WEIGHTunit=arr[1];
		WEIGHTSET=true;
		if(WEIGHTunit=="Kilograms")
		{
			WEIGHTunit="Kg";
		}
		else if(WEIGHTunit=="Kilogram")
		{
			WEIGHTunit="Kg";
		}
		else if(WEIGHTunit=="KG")
		{
			WEIGHTunit="Kg";
		}
		if(WEIGHTunit=="g")
		{
			WEIGHTunit="Kg";
			self.weight(Number(arr[0]/1000));
		}
		else if(WEIGHTunit.toLowerCase()=="grams")
		{
			WEIGHTunit="Kg";
			self.weight(Number(arr[0]/1000));
		}
		else
		{
			self.weight(Number(arr[0]));
		}
		
        self.weightUnit(WEIGHTunit);
	}
}
    sellerAPI.getProductInfo(asin)
      .then(x => {
      	if(!WEIGHTSET)
      	{
        	self.weight(x.weight);
        	self.weightUnit(x.weightUnit);
        }
        if(typeof x.category!="undefined" && x.category.trim()!="" && x.category.trim().toLowerCase()!="everything else" && productData.category.trim()=="")
        {
        	productData.category=x.category;
        	self.category(x.category);
        } 
        if(typeof x.rank!="undefined" && !isNaN(x.rank))
        {
        	
        	if(typeof productData.rank=="undefined" || productData.rank<=0)
        	{
        		
        		self.rank(numberWithCommas(x.rank));
        		productData.rank=x.rank;
        		SalesEstimator(asinNewAdded,RegionNewAdded,productData.category,x.rank,"basic");
        		getRank(currentRegion, productData.category, productData.rank)
      			.then(x => self.rankTop(x));
      			if(typeof x.salesrankDate!="undefined")
        		{
        			//$(".SalesRankToolTipInner").html("Sales Rank Last Update :"+productData.salesrankDate);
        			$(".SalesRankToolTip").css("color","red");
        			$(".SalesRankToolTipInner").css("color","white");
        			self.SalesRankDate("Sales Rank Last Update :"+x.salesrankDate);
        		}
        	}
        	else
        	{
        		$(".SalesRankToolTipInner").remove();
        	}
        	
        	/*if(productData.rank<=0 && x.rank<=0)
        	{
        		self.rank(340);
        	}*/
        } 
        else
        {
        	/*if(productData.rank<=0)
        	{
        		self.rank(340);
        	}*/
        }
        if(typeof x.categorySource!="undefined" && x.categorySource=="Database" && x.category.trim()!="")
        {
        	productData.category=x.category;
        	self.category(x.category);
        	SalesEstimator(asinNewAdded,RegionNewAdded,productData.category,x.rank,"basic");
        }
        if(typeof x.rankSource=="undefined" && x.rankSource=="Database" && typeof x.rank!="undefined" && !isNaN(x.rank))
        {
        	self.rank(numberWithCommas(x.rank));
        }
      });
	  if(gotWeightCall)
	  {
		self.weight(GotWeight);
		self.weightUnit(GotWeightUnit);
	  }
	
    if(typeof productData.price!="undefined" && productData.price!="")
    {
    	var numb=productData.price.toString();
    	var cmpos=numb.indexOf(".");
    	if(cmpos>=1)
    	{
    		productData.price=numb.substring(0,cmpos+3);
    	}
    }
    
    
    
 	
    getRank(currentRegion, productData.category, productData.rank)
      .then(x => self.rankTop(x));

    if (currentRegion !== 'comuk') {
      let countryPromises = ['co.uk', 'de', 'fr', 'es', 'it'].map(region => {
        const currency = CURRENCIES[region];
        var BoxDimensionsIn="";
        var ItemDimensionsIn="";
        return new Scraper(region).grabPriceAndRank(asin)
          .then(x =>
            Promise.all([
              COUNTRY_CODES[region],
              x.price ? convertPrice(x.price, currency, 'GBP') : '-',
              x.price ? convertPrice(x.price, currency, 'EUR') : '-',
              x.rank || '-',
              x.url,
              COUNTRY_FLAG[region],
              x.ItemDimensions,
              x.BoxDimensions,
              x.BoxDimensionsInAdded,
              x.ItemDimensionsInAdded,
            ])
          ).then(x => ({
            countryCode: x[0],
            priceGBP: x[1],
            priceEUR: x[2],
            rank: x[3],
            url: x[4],
            countryFlag: x[5],
            ItemDimensions:x[6],
            BoxDimensions:x[7],
            BoxDimensionsInAdded:x[8],
            ItemDimensionsInAdded:x[9],
          }));
      })
      Promise.all(countryPromises)
        .then((data) => {
        	if(typeof data[0]['ItemDimensions']!="undefined")
        	{
        		if(data[0]['ItemDimensions'].trim()!="")
        		{
        			self.ItemDimensions(data[0]['ItemDimensions']);
        			self.ItemDimensionsInAdded(data[0]['ItemDimensionsInAdded']);
        		}
        	}
        	if(typeof data[0]['BoxDimensions']!="undefined")
        	{
        		if(data[0]['BoxDimensions'].trim()!="")
        		{
        			self.BoxDimensions(data[0]['BoxDimensions']);
        			self.BoxDimensionsInAdded(data[0]['BoxDimensionsInAdded']);
        		}
        	}
        	var coll = document.getElementsByClassName("collapsible1");
		var i;
		if(coll.length==1 && !collapscall)
		{
			collapscall=true;
			for (i = 0; i < coll.length; i++) 
			{
  				coll[i].addEventListener("click", function() {
    			this.classList.toggle("active");
    			var content = this.nextElementSibling;
    			chrome.storage.sync.set({ 'Collapsible': !Collapsible});
     			$(content).toggle();
  				});
			}
		}
          self.countriesData.removeAll();
          self.countriesData.push.apply(self.countriesData, data);
        })
    }

    scraper.checkRestrictions(asin)
      .then(showBlock)
      .catch(() => self.loggedIn(false))
      .then(() => self.loading(false));
      
  };
  
   const KEEPA_REGIONnew = {
      'de': 3,
      'fr': 4,
      'es': 9,
      'it': 8,
      'co.uk': 2,
      'com': 1,
    };
    var keepaRegionnew = KEEPA_REGIONnew[currentRegion];
    var keepbuttonsrc= 'https://keepa.com/#!product/' + keepaRegionnew + '-' + currentASIN;
    $('.Wrapelinkadded').unwrap();
    $('.ASINClass').wrap('<u class="Wrapelinkadded"><a href="'+keepbuttonsrc+'" target="_blank" class="Wrapelinkadded"></a></u>');
   if($(location).attr('href').indexOf('amazon.')>0)
   {
  	self.checkLicense();
  }
  
}
$('body').contextmenu(function(e,obj) {
if($(location).attr('href').indexOf('amazon.')<=0)
   {
	var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
if(e.target.tagName!="INPUT" && e.target.tagName!="TEXTAREA" && e.target.tagName!="SELECT" && text.trim()=="")
{
let selection = window.getSelection();
let strongs = $(e.target.lastChild).parent();
if (selection.rangeCount > 0) {
		selection.removeAllRanges();
		}
		for (let i = 0; i < strongs.length; i++) {
		let range1 = document.createRange();
		range1.selectNode(strongs[i]);
		selection.addRange(range1);
		}
}
}
	})
/*$('body').mouseup(function(e) {
if(window.getSelection) {
   if (window.getSelection().empty) {  // Chrome
     window.getSelection().empty();
   } else if (window.getSelection().removeAllRanges) {  // Firefox
     window.getSelection().removeAllRanges();
   }
} else if (document.selection) {  // IE?
  document.selection.empty();
}
})*/
/*$('body').mousedown(function(e) {
var ThisObj= this;
var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
console.log("---MouseDown----",window.getSelection());
console.log("---MouseDownText----",text);
  	if(e.target.id!="quote-place" && e.target.id!="usa_search" && e.target.id!="uk_search")
  	{
  		chrome.storage.sync.get(['HighlightText','showCalc'], function (settings) 
  		{
  			if(typeof settings.HighlightText!='undefined' && settings.HighlightText)
    		{
        		switch (e.which)
	{
		case 1:
		TriggerNumber=0;
		break;
		case 2:
		TriggerNumber=0;
		break;
		case 3:
		
		if(e.target.tagName!="INPUT" && e.target.tagName!="TEXTAREA" && e.target.tagName!="SELECT")
		{
			getSelectedText(e,ThisObj);
		}
		break;
		default:
		console.log("default");
		
	}
        	}
        });
    }
	

    });*/

    function getSelectedText(e,ThisObj) {
    var sel, range, node,selectionImage,seltext;
	//if(e.target.localName=="a")
	{
		let selection = window.getSelection();
		//let strongs = e.target.className;
		//let TTT=e.toElement.innerText;
		let strongsk = document.getElementsByClassName(e.target.className);
		//let strongs = TTT;
		console.log("e---->",e);
		//console.log("e---->",e.currentTarget);
		//console.log("Parent---->",$(e.target.lastChild).parent());
		let strongs = $(e.target.lastChild).parent();
		//console.log("TTT---->",TTT);
		//console.log("strongs.length---->",strongsk);
		//console.log("strongs.length---->",strongsk.length);
		if (selection.rangeCount > 0) {
		selection.removeAllRanges();
		}
		for (let i = 0; i < strongs.length; i++) {
		let range1 = document.createRange();
		range1.selectNode(strongs[i]);
		selection.addRange(range1);
		}
		if(TriggerNumber<1)
		{
			TriggerNumber++;
			$(e.target.lastChild).parent().triggerHandler('contextmenu:hide');
			$(e.target.lastChild).parent().triggerHandler('contextmenu');
		}
	}
/*
        if (window.getSelection) 
        {
        	sel = window.getSelection();
        	console.log("sel----->",sel);
        	$('#quote-place').remove();
        	seltext=window.getSelection().toString();
        	if (sel.getRangeAt && sel.rangeCount && seltext.trim()!='') 
        	{
            	if (!selectionImage) 
            	{
            		selectionImage = $('<div>').attr({
                	title: 'Search Selected Text',
                	id: 'quote-place'

            		}).html('<button id="usa_search" style="margin-right: 8px;">US</button><button id="uk_search">UK</button><form style="display:none;" id="insertedform" target="_blank" accept-charset="utf-8" action="/s/ref=nb_sb_noss" class="nav-searchbar" method="GET" name="site-search" role="search"><input type="hidden" id="insertedtwotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="" class="nav-input" dir="auto" tabindex="6"><input type="hidden" name="url" value="search-alias=aps" id="insertedsearchDropdownBox"></form>').css({
                		"color": "red"
            		}).show();
            		$('body').append(selectionImage);
        		}
        		$("#usa_search").click(function quote() 
        		{
            		if (window.getSelection) 
            			{
            				seltext=window.getSelection().toString();
            				if(seltext.trim()!='')
            				{
            					$('#insertedform').attr('action',"https://www.amazon.com/s/ref=nb_sb_noss");
            					$('#insertedtwotabsearchtextbox').val(seltext);
            					$('#insertedform').submit();
            					
            				}
            			}
            			else if(document.selection && document.selection.createRange)
            			{
            				seltext=document.selection.createRange().text;
            				if(seltext.trim()!='')
            				{
            					$('#insertedform').attr('action',"https://www.amazon.com/s/ref=nb_sb_noss");
            					$('#insertedtwotabsearchtextbox').val(seltext);
            					$('#insertedform').submit();
            					//$('[name^="site-search"]').attr('target','_blank');
            					//$('[name^="field-keywords"]').val(seltext);
            					//$('[name^="site-search"]').submit();
            				}
            			}

        		}).mousedown(function() 
        		{
            		if (selectionImage) 
            		{
                		selectionImage.fadeOut();
            		}
        		});
        		$("#uk_search").click(function quote() 
        		{
            		if (window.getSelection) 
            			{
            				seltext=window.getSelection().toString();
            				if(seltext.trim()!='')
            				{
            					$('#insertedform').attr('action',"https://www.amazon.co.uk/s/ref=nb_sb_noss");
            					$('#insertedtwotabsearchtextbox').val(seltext);
            					$('#insertedform').submit();
            				}
            			}
            			else if(document.selection && document.selection.createRange)
            			{
            				seltext=document.selection.createRange().text;
            				if(seltext.trim()!='')
            				{
            					$('#insertedform').attr('action',"https://www.amazon.co.uk/s/ref=nb_sb_noss");
            					$('#insertedtwotabsearchtextbox').val(seltext);
            					$('#insertedform').submit();
            				}
            			}

        		}).mousedown(function() 
        		{
            		if (selectionImage) 
            		{
                		selectionImage.fadeOut();
            		}
        		});
        					selectionImage.css({
            				top: e.pageY - 60,
            				left: e.pageX - 13 //offsets
        					}).fadeIn();
        	}
        } 
        else if (document.selection && document.selection.createRange) 
        {
        	seltext=document.selection.createRange().text;
        	if (!selectionImage && seltext.trim()!='') 
            	{
            		selectionImage = $('<div>').attr({
                	title: 'Search Selected Text',
                	id: 'quote-place'

            		}).html('<button id="usa_search" style="margin-right: 8px;">US</button><button id="uk_search">UK</button><form style="display:none;" id="insertedform" target="_blank" accept-charset="utf-8" action="/s/ref=nb_sb_noss" class="nav-searchbar" method="GET" name="site-search" role="search"><input type="hidden" id="insertedtwotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="" class="nav-input" dir="auto" tabindex="6"><input type="hidden" name="url" value="search-alias=aps" id="insertedsearchDropdownBox"></form>').css({
                		"color": "red"
            		}).show();
            		$('body').append(selectionImage);
            		 
            		
        		}
        		
        		$("#usa_search").click(function quote() 
        		{
            		if (window.getSelection) 
            			{
            				seltext=window.getSelection().toString();
            				if(seltext.trim()!='')
            				{
            					$('#insertedform').attr('action',"https://www.amazon.com/s/ref=nb_sb_noss");
            					$('#insertedtwotabsearchtextbox').val(seltext);
            					$('#insertedform').submit();
            				}
            			}
            			else if(document.selection && document.selection.createRange)
            			{
            				seltext=document.selection.createRange().text;
            				if(seltext.trim()!='')
            				{
            					$('#insertedform').attr('action',"https://www.amazon.com/s/ref=nb_sb_noss");
            					$('#insertedtwotabsearchtextbox').val(seltext);
            					$('#insertedform').submit();
            				}
            			}

        		}).mousedown(function() 
        		{
            		if (selectionImage) 
            		{
                		selectionImage.fadeOut();
            		}
        		});
        		$("#uk_search").click(function quote() 
        		{
            		if (window.getSelection) 
            			{
            				seltext=window.getSelection().toString();
            				if(seltext.trim()!='')
            				{
            					$('#insertedform').attr('action',"https://www.amazon.co.uk/s/ref=nb_sb_noss");
            					$('#insertedtwotabsearchtextbox').val(seltext);
            					$('#insertedform').submit();
            				}
            			}
            			else if(document.selection && document.selection.createRange)
            			{
            				seltext=document.selection.createRange().text;
            				if(seltext.trim()!='')
            				{
            					$('#insertedform').attr('action',"https://www.amazon.co.uk/s/ref=nb_sb_noss");
            					$('#insertedtwotabsearchtextbox').val(seltext);
            					$('#insertedform').submit();
            				}
            			}

        		}).mousedown(function() 
        		{
            		if (selectionImage) 
            		{
                		selectionImage.fadeOut();
            		}
        		});
        		selectionImage.css({
            				top: e.pageY - 60,
            				left: e.pageX - 13 //offsets
        						}).fadeIn();
        }
		*/
    }
    if($(location).attr('href').indexOf('amazon.')>0 && $(location).attr('href').indexOf('cart/')>=0 )
    {
    	chrome.runtime.sendMessage({
   				method: 'get',
    			action: 'CartDELETECARTVersion',
				}, function(response) {
					if(response)
					{
						$('#sc-active-cart').hide();
    					$('#sc-active-cart').css("display","none");
					}
				});
    	if(OldVersionChrome)
    	{
    		//$('#sc-active-cart').hide();
    		//$('#sc-active-cart').css("display","none");
    		var BGurlNewAdded=$(location).attr('href');
    		//var BGasinNewAdded=parseAsinNewAdded(BGurlNewAdded);
    		var BGRegionNewAdded=extractCountryFromURLNewAdded(BGurlNewAdded);
    		var BGcartUrl='https://www.amazon.'+BGRegionNewAdded+'/gp/cart/view.html/ref=nav_cart';
			chrome.runtime.sendMessage({
   				method: 'get',
    			action: 'CartDELETECART',
    			url: BGcartUrl,
				}, function(response) {
					console.log("BGWORKED");
				});
		}
		else
		{
			var nothingtoDo="nothingToDo";
		}
    }
if($(location).attr('href').indexOf('amazon.')>0 && ($(location).attr('href').indexOf('url=search-alias')>0 || $(location).attr('href').indexOf('s/ref=sr_pg')>0 || $(location).attr('href').indexOf('s?k=')>0))
{
  var netTokenSearchPage = '';
  var productInfoCacheSearchPage = {};
  var currencyCodeSearchPage = '';
  var currencySignSearchPage='';
var marketPlaceIdSearchPage = '';
var triesSearchPage = 0;
var currentRegionSearchPage='';
var currentCalculatedResult=[];
var CurrencAsin='';
var ProductDetailsSearchpage={};
var ProductDetailsSearchpageScrap={};
var GlobalWeightVariable=[];

var CURRENCYSearchPage = {
  'de': 'EUR',
  'fr': 'EUR',
  'es': 'EUR',
  'it': 'EUR',
  'co.uk': 'GBP',
  'com': 'USD',
  'ca': 'CAD',
  'com.mx': 'MXN'
};

const MARKETPLACE_IDSearchPage = {
  'co.uk': 'A1F83G8C2ARO7P',
}

  const COUNTRY_CODESSearchPage = {
  'com': 'US',
  'co.uk': 'UK',
  'de': 'DE',
  'fr': 'FR',
  'es': 'ES',
  'it': 'IT',
}
const COUNTRY_FLAGSearchPage = {
  'com': '<img src="'+chrome.extension.getURL('img/USflag1.png')+'" title="US" >',
  'co.uk': '<img src="'+chrome.extension.getURL('img/UKflag1.png')+'" title="UK" >',
  'de': '<img src="'+chrome.extension.getURL('img/DEflag1.png')+'" title="DE">',
  'fr': '<img src="'+chrome.extension.getURL('img/FRflag1.png')+'" title="FR">',
  'es': '<img src="'+chrome.extension.getURL('img/ESflag1.png')+'" title="ES">',
  'it': '<img src="'+chrome.extension.getURL('img/ITflag1.png')+'" title="IT">',
}
const CURRENCIESSearchPage = {
  'com': 'USD',
  'co.uk': 'GBP',
  'de': 'EUR',
  'fr': 'EUR',
  'es': 'EUR',
  'it': 'EUR',
}

const CURRENCY_SIGNSSearchPage = {
  'com': '$',
  'co.uk': '£',
  'de': '€',
  'fr': '€',
  'es': '€',
  'it': '€',
}

const LANGSSearchPage = {
  'com': 'en_US',
  'co.uk': 'en_GB',
  'de': 'de_DE',
  'fr': 'fr_FR',
  'es': 'es_ES',
  'it': 'it_IT',
}
 const KEEPA_REGIONSearchPage = {
      'de': 3,
      'fr': 4,
      'es': 9,
      'it': 8,
      'co.uk': 2,
      'com': 1,
    };
function getProductURLSearchPage(region, asin) {
  return 'https://www.amazon.' + region + '/dp/' + asin
}
function getProductPageDetailsSearchPage(region, asin)
{
	const url = getProductURLSearchPage(region, asin);
  return new Promise((resolve, reject) => {
  var combine=region+"__"+asin;
  if(typeof _cache[combine]=='undefined')
  {
   $.get(url).then(function (result) {
   //console.log("=======>",url);
   //console.log(result);
      var parser = new DOMParser();
      var doc = parser.parseFromString(result, 'text/html');
      var data=getProductDataSearchPage(doc, region);
       //console.log("data=======>",data);
      if((typeof data.category=="undefined" || data.category=="") && isNaN(data.price))
      {
      chrome.runtime.sendMessage({ data: {
          		asin: asin,
          		country: region,
        		FunctionCall: 'ProductDetails' 
        		},'FunctionCall':'ProductDetails' }, 
      function(response) {
      console.log(response);
      if(response.status=="success")
      {
      	
      	_cache[combine] = {
        rank: response.data.salesRank,
        category: response.data.Category,
        price: response.data.price,
      	};
      	resolve({
        rank: response.data.salesRank,
        category: response.data.Category,
        price: response.data.price,
      	})
      }
      else
      {
      	resolve({
        rank: undefined,
        category: undefined,
        price: undefined,
      	})
      }
    });
    }
    else
    {
    	_cache[combine]=data;
    	resolve(data);
    }
      
    }).fail((e) => {
     chrome.runtime.sendMessage({ data: {
          		asin: asin,
          		country: region,
        		FunctionCall: 'ProductDetails' 
        		},'FunctionCall':'ProductDetails' }, 
      function(response) {
      if(response.status=="success")
      {
      	
      	_cache[combine] = {
        rank: response.data.salesRank,
        category: response.data.Category,
        price: response.data.price,
      	};
      	resolve({
        rank: response.data.salesRank,
        category: response.data.Category,
        price: response.data.price,
      	})
      }
      else
      {
      	resolve({
        rank: undefined,
        category: undefined,
        price: undefined,
      	})
      }
    });
    });
      
}
else
{
	ProductDetailsSearchpageScrap=_cache[combine];
	resolve(ProductDetailsSearchpageScrap);
}
  });
}

function extractPriceSearchPage(doc, region) {
    var price=0;








    $("#priceblock_ourprice_ifdmsg", doc).remove();
    var newPriceSc=false;
    if(typeof $(".price-info-superscript",doc).html()!="undefined")
    {

        var Sup="00";
        var Sub=$('#priceblock_ourprice .price-large', doc).first().text().replace(/[^\d\.,]+/g, '');
        if($('.price-info-superscript', doc).first().text().replace(/[^\d\.,]+/g, '').trim()!="")
        {
            Sup=$('.price-info-superscript', doc).first().text().replace(/[^\d\.,]+/g, '');
        }
        price = Sub+"."+Sup;
        newPriceSc=true;
    }
    else
    {
        //var indexof=$('#priceblock_ourprice, #priceblock_saleprice, #priceblock_dealprice', doc).first().text().indexOf(" - ");
        //console.log("indexof--->",indexof);
        price = $('#priceblock_ourprice, #priceblock_saleprice, #priceblock_dealprice', doc).first().text().replace(/[^\d\.,]+/g, '');
        //var OFPOS=reviewhtml.indexOf(" de ");
        //var aftreofTop=reviewhtml.substring(OFPOS+4);
    }
  //var price = $('#priceblock_ourprice, #priceblock_saleprice, #priceblock_dealprice', doc).first().text().replace(/[^\d\.,]+/g, '');
  if (!price) {
    price = $('.offer-price, .kindle-price', doc).first().text().replace(/[^\d\.,]+/g, '') || ''
  };
  if(!price)
  {
  	price = $('.priceblock_vat_inc_price', doc).first().text().replace(/[^\d\.,]+/g, '') || ''
  }

  if (price <= 0)
  {
  	$('.a-color-price[dir^="rtl"]', doc).first().find("font").remove();
  	price = $('.a-color-price[dir^="rtl"]', doc).first().text().replace(/[^\d\.,]+/g, '');
  	price = price.replace(",",".");
  	var Shipping=0;
  	if($('.a-color-price[dir^="rtl"]', doc).first().parent().prop("tagName").toLowerCase()=="a")
  	{
  		$('.a-color-price[dir^="rtl"]', doc).first().parent().parent().find('.a-color-base').first().find("font").remove();
  		Shipping=$('.a-color-price[dir^="rtl"]', doc).first().parent().parent().find('.a-color-base').first().text().replace(/[^\d\.,]+/g, '');
  		Shipping = Shipping.replace(",",".");
  	}
  	else
  	{
  		$('.a-color-price[dir^="rtl"]', doc).first().parent().find('.a-color-base').first().find("font").remove();
  		Shipping=$('.a-color-price[dir^="rtl"]', doc).first().parent().find('.a-color-base').first().text().replace(/[^\d\.,]+/g, '');
  		Shipping = Shipping.replace(",",".");
  	}
  	if(Shipping.trim()=="")
  	{
  		Shipping=0;
  	}
  	if(!isNaN(Shipping))
  	{
  		price= parseFloat(parseFloat(price) + parseFloat(Shipping));
  	}
  }
  if (isEuropeanMarket(region)) {
    price = adjustEuropeanNumber(price)
  };
  price = price.replace(/,/g, '');
  price = parseFloat(price) || 0.00;
  if (price > 0 && $('#priceblock_ourprice, #priceblock_saleprice', doc).first().hasClass('priceToPayPadding')) {
    price = price / 100
  };
  if (!price && $('#olp_feature_div', doc).length > 0) {
    var _0x351D = $('#olp_feature_div', doc).text().trim();
    _0x351D = _0x351D.replace('& FREE shipping', '+ $0.00 shipping');
    const _0x3E90 = /[.]* from \$([\d\.]+) \+ \$([\d\.]+) shipping/g;
    let _0x4855;
    while ((_0x4855 = _0x3E90.exec(_0x351D)) !== null) {
      if (_0x4855.index === _0x3E90.lastIndex) {
        _0x3E90.lastIndex++
      };
      if (isEuropeanMarket(region)) {
        _0x4855[1] = adjustEuropeanNumber(_0x4855[1]);
        _0x4855[2] = adjustEuropeanNumber(_0x4855[2])
      };
      var _0x487E = parseFloat(_0x4855[1]) || 0;
      var _0x48A7 = parseFloat(_0x4855[2]) || 0;
      price = _0x487E + _0x48A7;
      price = price.toFixed(2)
    }
  };
  if (!price) {
    price = $('#digital-button-price', doc).first().text().trim().replace(/[^\d\.\,]/g, '');
    if (isEuropeanMarket(region)) {
      price = adjustEuropeanNumber(price)
    };
    price = parseFloat(price) / 100.0
  };
  if (!price) {
    price = $('#unqualifiedBuyBox .a-color-price', doc).first().text().trim().replace(/[^\d\.\,]/g, '');
    price = parseFloat(price);
  }
  if (!price) {
    price = $(' .priceblock_vat_inc_price', doc).first().text().trim().replace(/[^\d\.\,]/g, '');
    price = parseFloat(price);
  }
  return price;
}
function getProductDataSearchPage(doc, region) {
  //const rankRe = /([0-9,\.]+) (?:Paid)?(?:in|en) (.*?) \(/;
  const rankRe = /([0-9,\.]+) (?:Paid)?(?:in|en) (.*?) \(/;
  var category = '', rank = 0;

  const title = $('#productTitle').text().trim();

  doc = doc || document;

  var $rankEl;
  var $rankEl2;
  var gotrank=false;
  var gotcat=false;
  var cate='';
  $('font[style^="vertical-align"]', doc).unwrap();
  $('style', doc).remove();
  
   if ($('#SalesRank', doc).prop('tagName') === 'TR') {

    $rankEl = $('#SalesRank .value', doc);
    var $rankElCheck = $('#SalesRank .value', doc).text();
    var checkforRank=$rankElCheck.split(" in ");
    if(typeof checkforRank[0]!="undefined")
    {
    	 checkforRank=checkforRank[0].replace(",","");
    	 
    }
    if(isNaN(checkforRank))
    {
    	if($('.zg_hrsr_rank', doc).length >0)
    	{
    		$rankEl2 = $('.zg_hrsr_rank', doc).html();
    		gotrank=true;
    	}
    	if($('.zg_hrsr_ladder', doc).length >0)
    	{
    		if($('.zg_hrsr_ladder', doc).find('a'))
    		{
    			cate = $('.zg_hrsr_ladder', doc).find('a').html();
    			gotcat=true;
    		}
    	}
    }
  }
  else if ($('.attrG:contains("Amazon Bestseller-Rang:")', doc).length > 0) {
  	$('.attrG:contains("Amazon Bestseller-Rang:")', doc).find(".zg_hrsr").remove();
    $rankEl = $('.attrG:contains("Amazon Bestseller-Rang:")', doc);
  }
  else if ($('#SalesRank:contains("Amazon Bestseller-Rang:")', doc).length > 0) {
     // $('#SalesRank:contains("Amazon Bestseller-Rang:")', doc).find(".zg_hrsr").remove();
      //$rankEl = $('#SalesRank:contains("Amazon Bestseller-Rang:")', doc);
      if($('#SalesRank:contains("Amazon Bestseller-Rang:")', doc).find(".zg_hrsr").prop('tagName') === 'UL')
  		{
  			if(typeof $('#SalesRank:contains("Amazon Bestseller-Rang:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1]!="undefined")
  			{
  				$('#SalesRank:contains("Amazon Bestseller-Rang:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1].remove();
  				$rankEl = $('#SalesRank:contains("Amazon Bestseller-Rang:")', doc).find(".zg_hrsr").find(".zg_hrsr_item");
  			}
  			else
  			{
  				$rankEl = $('#SalesRank:contains("Amazon Bestseller-Rang:")', doc);
  			}
  			 
  		}
  		else
  		{
      		$('#SalesRank:contains("Amazon Bestseller-Rang:")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Amazon Bestseller-Rang:")', doc);
      	}
  }
  else if ($('#SalesRank:contains("Amazon Bestsellers Rank:")', doc).length > 0) {
  		if($('#SalesRank:contains("Amazon Bestsellers Rank:")', doc).find(".zg_hrsr").prop('tagName') === 'UL')
  		{
  			if(typeof $('#SalesRank:contains("Amazon Bestsellers Rank:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1]!="undefined")
  			{
  				$('#SalesRank:contains("Amazon Bestsellers Rank:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1].remove();
  				$rankEl = $('#SalesRank:contains("Amazon Bestsellers Rank:")', doc).find(".zg_hrsr").find(".zg_hrsr_item");
  			}
  			else
  			{
  				$rankEl = $('#SalesRank:contains("Amazon Bestsellers Rank:")', doc);
  			}
  			 
  		}
  		else
  		{
      		$('#SalesRank:contains("Amazon Bestsellers Rank:")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Amazon Bestsellers Rank:")', doc);
      	}
      
  }
  else if ($('.attrG:contains("Amazon Bestseller-Rang")', doc).length > 0) {
  	$('.attrG:contains("Amazon Bestseller-Rang")', doc).find(".zg_hrsr").remove();
    $rankEl = $('.attrG:contains("Amazon Bestseller-Rang")', doc);
  }
   else if ($('.prodDetSectionEntry:contains("Amazon Bestseller-Rang")', doc).length > 0) {
   
  	$('.prodDetSectionEntry:contains("Amazon Bestseller-Rang")', doc).find(".zg_hrsr").remove();
    $rankEl = $('.prodDetSectionEntry:contains("Amazon Bestseller-Rang")', doc).parent();
  }
  else if ($('.attrG:contains("Classement des meilleures ventes d\'Amazon:")', doc).length > 0) {
  	$('.attrG:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").remove();
    $rankEl = $('.attrG:contains("Classement des meilleures ventes d\'Amazon:")', doc);
  }
  else if ($('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).length > 0) {
  	//$('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").remove();
    //$rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc);
    if($('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").prop('tagName') === 'UL')
  		{
  			if(typeof $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1]!="undefined")
  			{
  				$('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1].remove();
  				$rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").find(".zg_hrsr_item");
  			}
  			else
  			{
  				$rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc);
  			}
  			 
  		}
  		else
  		{
      		$('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Classement des meilleures ventes d\'Amazon:")', doc);
      	}
  }
  else if ($('.attrG:contains("Clasificación en los más vendidos de Amazon:")', doc).length > 0) {
  	$('.attrG:contains("Clasificación en los más vendidos de Amazon:")', doc).find(".zg_hrsr").remove();
  	$('.attrG:contains("Clasificación en los más vendidos de Amazon:")', doc).find("table").remove();
    $rankEl = $('.attrG:contains("Clasificación en los más vendidos de Amazon:")', doc);
  }
  else if ($('#SalesRank:contains("Clasificación en los más vendidos de Amazon:")', doc).length > 0) {
  	$('#SalesRank:contains("Clasificación en los más vendidos de Amazon:")', doc).find(".zg_hrsr").remove();
  	$('#SalesRank:contains("Clasificación en los más vendidos de Amazon:")', doc).find("table").remove();
    $rankEl = $('#SalesRank:contains("Clasificación en los más vendidos de Amazon:")', doc);
  }
  else if ($('.attrG:contains("Posizione nella classifica Bestseller di Amazon:")', doc).length > 0) {
  	$('.attrG:contains("Posizione nella classifica Bestseller di Amazon:")', doc).find(".zg_hrsr").remove();
    $rankEl = $('.attrG:contains("Posizione nella classifica Bestseller di Amazon:")', doc);
  }
  else if ($('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc).length > 0) {
  	//$('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc).find(".zg_hrsr").remove();
    //$rankEl = $('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc);
    if($('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc).find(".zg_hrsr").prop('tagName') === 'UL')
  		{
  			if(typeof $('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1]!="undefined")
  			{
  				$('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1].remove();
  				$rankEl = $('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc).find(".zg_hrsr").find(".zg_hrsr_item");
  			}
  			else
  			{
  				$rankEl = $('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc);
  			}
  			 
  		}
  		else
  		{
      		$('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Posizione nella classifica Bestseller di Amazon:")', doc);
      	}
  }
  else if ($('#SalesRank:contains("Amazon Best Sellers Rank:")', doc).length > 0) {
  	//$('#SalesRank:contains("Amazon Best Sellers Rank:")', doc).find(".zg_hrsr").remove();
    //$rankEl = $('#SalesRank:contains("Amazon Best Sellers Rank:")', doc);
    if($('#SalesRank:contains("Amazon Best Sellers Rank:")', doc).find(".zg_hrsr").prop('tagName') === 'UL')
  		{
  			if(typeof $('#SalesRank:contains("Amazon Best Sellers Rank:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1]!="undefined")
  			{
  				$('#SalesRank:contains("Amazon Best Sellers Rank:")', doc).find(".zg_hrsr").find(".zg_hrsr_item")[1].remove();
  				$rankEl = $('#SalesRank:contains("Amazon Best Sellers Rank:")', doc).find(".zg_hrsr").find(".zg_hrsr_item");
  			}
  			else
  			{
  				$rankEl = $('#SalesRank:contains("Amazon Best Sellers Rank:")', doc);
  			}
  			 
  		}
  		else
  		{
      		$('#SalesRank:contains("Amazon Best Sellers Rank:")', doc).find(".zg_hrsr").remove();
      		$rankEl = $('#SalesRank:contains("Amazon Best Sellers Rank:")', doc);
      	}
    
  }
  else if ($('.attrG:contains("Amazon Bestsellers Rank")', doc).length > 0) {
  	$('.attrG:contains("Amazon Bestsellers Rank:")', doc).find(".zg_hrsr").remove();
    $rankEl = $('.attrG:contains("Amazon Bestsellers Rank:")', doc);
  }
  else if($('#SalesRank', doc).prop('tagName')==="LI")
  {
      $rankEl = $('#SalesRank', doc);
      if(typeof $('#SalesRank', doc).find(".zg_hrsr_item").first()!="undefined")
      {
          $rankEl = $('#SalesRank', doc).find(".zg_hrsr_item").first();
      }
  }
  else if($('.zg_hrsr_rank', doc).length >0)
  {
  	if($('.zg_hrsr_rank', doc).length >0)
    {
    	$rankEl2 = $('.zg_hrsr_rank', doc).html();
    	gotrank=true;
    }
    if($('.zg_hrsr_ladder', doc).length >0)
    {
    	if($('.zg_hrsr_ladder', doc).find('a'))
    	{
    		cate = $('.zg_hrsr_ladder', doc).find('a').html();
    		gotcat=true;
    	}
    }
  } 
  else if ($('#SalesRank', doc).length > 0) {
    $rankEl = $('#SalesRank', doc);
    if($('.zg_hrsr_rank', doc).length >0)
    {
    	$rankEl2 = $('.zg_hrsr_rank', doc).html();
    	gotrank=true;
    }
    if($('.zg_hrsr_ladder', doc).length >0)
    {
    	if($('.zg_hrsr_ladder', doc).find('a'))
    	{
    		cate = $('.zg_hrsr_ladder', doc).find('a').html();
    		gotcat=true;
    	}
    }
  } else if ($('th:contains("Best Sellers Rank")',doc).length > 0) {
    $rankEl = $('th:contains("Best Sellers Rank")',doc).parent().find('td');
  }
  var Weight="";
  if ($('.pdTab .label:contains("Weight")', doc).length > 0) {
  	if(typeof $('.pdTab .label:contains("Weight")', doc).parent().find(".value").html()!="undefined")
  	{
  		Weight=$('.pdTab .label:contains("Weight")', doc).parent().find(".value").html();
  	}
  }
  else if ($('.pdTab .label:contains("Artikelgewicht")', doc).length > 0) {
  	if(typeof $('.pdTab .label:contains("Artikelgewicht")', doc).parent().find(".value").html()!="undefined")
  	{
  		Weight=$('.pdTab .label:contains("Artikelgewicht")', doc).parent().find(".value").html();
  	}
  }
  else if ($('.pdTab .label:contains("Poids de l\'article")', doc).length > 0) {
  	if(typeof $('.pdTab .label:contains("Poids de l\'article")', doc).parent().find(".value").html()!="undefined")
  	{
  		Weight=$('.pdTab .label:contains("Poids de l\'article")', doc).parent().find(".value").html();
  	}
  }
  else if ($('.pdTab .label:contains("Peso del producto")', doc).length > 0) {
  	if(typeof $('.pdTab .label:contains("Peso del producto")', doc).parent().find(".value").html()!="undefined")
  	{
  		Weight=$('.pdTab .label:contains("Peso del producto")', doc).parent().find(".value").html();
  	}
  }

  if ($rankEl) {
  	var $rankEltext=$rankEl.text().replace("Clasificación en los más vendidos de Amazon:","gasamazon:");
      $rankEltext=$rankEltext.replace("&nbsp;"," ");
      $rankEltext=$rankEltext.replace("Amazon Bestseller-Rang","gasamazon:");
      $rankEltext=$rankEltext.replace("Classement des meilleures ventes d\'Amazon:","gasamazon:");
      $rankEltext=$rankEltext.replace("Posizione nella classifica Bestseller di Amazon:","gasamazon:");
      $rankEltext=$rankEltext.replace("Amazon Bestsellers Rank","gasamazon:");
      $rankEltext=$rankEltext.replace("Nr.","gasamazon:");
      $rankEltext=$rankEltext.replace("gasamazon:","");
      var firstword = $rankEltext.slice(0, $rankEltext.indexOf(" "));
      if(firstword=="in")
      {
          $rankEltext=$rankEltext.replace("in ","");
      }

      let matches = $rankEltext.match(rankRe);
    var $rankELFinal=$rankEltext.trim();
    var $gotrankdata=$rankELFinal.split(" ");
    var $gotcatdata=$rankELFinal.split(">");
    if (matches) {
      rank = parseInt(matches[1].replace(/[^\d]/g, ''), 10);
      category = matches[2];
    }
    else if(gotrank)
    {
    	rank = parseInt($rankEl2.replace(/[^\d]/g, ''), 10);
    	if(gotcat)
    	{
    		category = cate.replace('&amp;','&');
    	}
    }
    else if(typeof $gotrankdata[0]!='undefined')
    {
    	rank=$gotrankdata[0].replace("#","").replace(",","");
    	if(typeof $gotcatdata[0] !='undefined')
    	{
    		category=$gotcatdata[0].substr(getPosition($gotcatdata[0], " ", 2)).trim();
            category=category.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
            category=category.replace("--", ' ');
            category=category.replace(/-/g, ' ');
            category=category.replace(/<\/?a>/g, ' ');
            var firstword = category.slice(0, category.indexOf(" "));
            if(firstword=="in" || firstword=="en")
            {
                category=category.substr(3);
            }
    		if(category.indexOf("#") > -1)
    		{
    			category=$gotcatdata[0].substr($gotcatdata[0].indexOf("in")+3).trim();
    			
    		}
    	}
    	else if(typeof $(".zg_hrsr_rank",doc).html()!="undefined")
    	{
    		rank=$(".zg_hrsr_rank",doc).html().replace("#","").replace(",","");
    	}
    }
    else if(typeof $(".zg_hrsr_rank",doc).html()!="undefined")
    {
    	rank=$(".zg_hrsr_rank",doc).html().replace("#","").replace(",","");
    }
    
  }
  else if($rankEl2)
  {
  	rank=$rankEl2.replace("#","").replace(",","")
  }
  var FBAORFBM;
  FBAORFBM="";
  if(typeof $('#merchant-info', doc).html()!="undefined")
  {
  		if($('#merchant-info', doc).text().indexOf("isAmazonFulfilled=1") > -1 || $('#merchant-info', doc).text().indexOf("by Amazon") > -1)
  		{
  			FBAORFBM="FBA";
  		}
  }
  if(category.trim()=="")
  {
  	cate=cate.replace("&amp;","&");
  	category=cate.trim();
  }
  if(isNaN(rank) || rank==0)
  {
  	if(typeof $(".zg_hrsr_rank",doc).html()!="undefined")
    			{
    				rank=$(".zg_hrsr_rank",doc).html().replace("#","").replace(",","");
    			}
  }
  if(!isNaN(rank))
  {
  	rank=numberWithCommas(rank);
  }
  else
  {
  	rank="0";
  }
  const price = extractPriceSearchPage(doc, region);
  return {
    title,
    rank,
    category,
    price,
    FBAORFBM,
  };
}
function CloseSearchpage()
{
	$("#CustomPopup1").remove();
}
 async function exportDataSearchPage(calculatedResult,AsinCal,ProductDetails,buyPriceConverted,sellPrice) {
  var exportsettingset=false;
  chrome.storage.sync.get(OPTIONS_KEYS, function (_settings) {
  globalsettings=_settings;
  if(typeof globalsettings.asinsel!='undefined' && globalsettings.asinsel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.namesel!='undefined' && globalsettings.namesel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.catsel!='undefined' && globalsettings.catsel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.ranksel!='undefined' && globalsettings.ranksel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.feessel!='undefined' && globalsettings.feessel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.profitsel!='undefined' && globalsettings.profitsel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.riosel!='undefined' && globalsettings.riosel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.pmarginsel!='undefined' && globalsettings.pmarginsel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.bevensel!='undefined' && globalsettings.spricesel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.weightsel!='undefined' && globalsettings.weightsel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.storeurlsel!='undefined' && globalsettings.storeurlsel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.bpricesel!='undefined' && globalsettings.bpricesel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.spricesel!='undefined' && globalsettings.spricesel!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.estsales!='undefined' && globalsettings.estsales!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.amazonLink!='undefined' && globalsettings.amazonLink!=0)
    {
    	exportsettingset=true;
    }
    if(typeof globalsettings.storeLink!='undefined' && globalsettings.storeLink!=0)
    {
    	exportsettingset=true;
    }
    if (!calculatedResult.referralFee) {
      return alert('You should do calculations first.')
    }
    const data = {
      asin: AsinCal,
      currencySign: currencySignSearchPage,
      name: GlobalWeightVariable.title,
      category: ProductDetailsSearchpageScrap.category,
      rank: ProductDetailsSearchpageScrap.rank,
      fees: calculatedResult.totalFees,
      profit: calculatedResult.profit,
      roi: calculatedResult.roi,
      profitMargin: calculatedResult.profitMargin,
      breakeven: calculatedResult.breakeven,
      weight: GlobalWeightVariable.weight+" "+GlobalWeightVariable.weightUnit,
      storeURL: '',
      url: location.href,
      buyPrice: buyPriceConverted,
      sellPrice: sellPrice,
      exportsettingset: exportsettingset,
      globalsettings: globalsettings,
      SalesEstimate: GlobalsalesRank,
    };
    chrome.runtime.sendMessage({ name: 'export', data });
    $("#CustomPopup1").remove();
  })
  
  }
function calcroundSearchPage(num) {
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
function CalcSearchPage(region) {
  
  function _getFees(asin, sellPrice, efn) {
    const cacheKey = [asin, sellPrice, efn].join('-');
    if (_cache[cacheKey]) {
      return Promise.resolve(_cache[cacheKey]);
    }
    return new Promise((resolve, reject) => {
     /* $.ajax({
        type: 'POST',
        url: 'https://us-central1-restriction-wizard.cloudfunctions.net/estimateFee',
        data: {
          asin: asin,
          country: region,
          efn,
          sellPrice: sellPrice,
        },
        dataType: 'json',
        success: (result) => {
        console.log("=====DATA======",sellPrice);
        console.log("=====country======",region);
        console.log("=====efn======",efn);
        console.log("=====RESULT======",result);
          _cache[cacheKey] = result;
          resolve(result);
        },
        error: (msg) => {
        console.log(msg);}
      });*/
      chrome.runtime.sendMessage({ data: {
          		asin: asin,
          		country: region,
          		sellPrice:sellPrice,
          		efn,
          		efnflag: efn,
        		FunctionCall: 'estimateFee',
				LicenseKey: valicenseKey				
        		},'FunctionCall':'estimateFee' }, 
      function(response) {
      _cache[cacheKey] = response;
          resolve(response);
    });
    });
  }
function _calcFeesFBM(sellPrice, buyPrice, weight, isKilogram, vat, vatReg, efn, p, localStorage,vatBuyPrice,defaultcall=true) {
    var referralFee = calcroundSearchPage(sellPrice * p.referralFeeP);
    var fbaFees = calcroundSearchPage(p.fbaFee);
    var totalFees = calcroundSearchPage(referralFee + fbmVariableFee);
    var result = {
      referralFee: referralFee,
      fbaFees: fbaFees,
      totalFBAFeesEst: totalFees,
    }
//line no 1584
	
    if (localStorage.fixedPrepFee != '' && isNumber(localStorage.fixedPrepFee)) {
      let r = parseFloat(localStorage.fixedPrepFee);
      result.fixedPrepFee = r;
      totalFees += r;
    }

    if (localStorage.inboundShipping != '' && isNumber(localStorage.inboundShipping)) {
      result.inboundShipping = parseFloat(localStorage.inboundShipping) * weight;
      if (!isNaN(result.inboundShipping)) {
        totalFees += result.inboundShipping;
      }
    }

    if (localStorage.transitCost != '' && isNumber(localStorage.transitCost)) {
      result.transitCost = parseFloat(localStorage.transitCost);
      if (!isNaN(result.transitCost)) {
        totalFees += result.transitCost;
      }
    }

    if (localStorage.feeAdjustment != '' && isNumber(localStorage.feeAdjustment)) {
      let r = calcroundSearchPage(totalFees * parseFloat(localStorage.feeAdjustment) / 100);
      result.fbaFeeAdjustment = r;
      totalFees += r;
    }

    if (efn) {
      result.efnFee = Number(p.efnFee);
      totalFees += Number(p.efnFee);

      if (localStorage.efnAdjustment != '' && isNumber(localStorage.efnAdjustment)) {
        let r = calcroundSearchPage(result.efnFee * parseFloat(localStorage.efnAdjustment) / 100);
        result.efnFeeAdjustment = r;
        totalFees += r;
      }
    }
    const vatOnFees = calcroundSearchPage(totalFees * vat / 100);
    const vatToRemit = calcroundSearchPage((sellPrice - buyPrice) * (vat / 100) / (1 + vat / 100));
    var Short=((vat / 100) / (1 + vat / 100));
	if(vatReg)
	{
		var T20perSellingPrice=calcroundSearchPage((sellPrice-totalFees-(sellPrice*Short))/((20/100)+1-Short));
		var T30perSellingPrice=calcroundSearchPage((sellPrice-totalFees-(sellPrice*Short))/((30/100)+1-Short));
		var T40perSellingPrice=calcroundSearchPage((sellPrice-totalFees-(sellPrice*Short))/((40/100)+1-Short));
		var T50perSellingPrice=calcroundSearchPage((sellPrice-totalFees-(sellPrice*Short))/((50/100)+1-Short));
		var T60perSellingPrice=calcroundSearchPage((sellPrice-totalFees-(sellPrice*Short))/((60/100)+1-Short));
	}
	else
	{
		var T20perSellingPrice=calcroundSearchPage((sellPrice-totalFees-vatOnFees)/((20/100)+1));
		var T30perSellingPrice=calcroundSearchPage((sellPrice-totalFees-vatOnFees)/((30/100)+1));
		var T40perSellingPrice=calcroundSearchPage((sellPrice-totalFees-vatOnFees)/((40/100)+1));
		var T50perSellingPrice=calcroundSearchPage((sellPrice-totalFees-vatOnFees)/((50/100)+1));
		var T60perSellingPrice=calcroundSearchPage((sellPrice-totalFees-vatOnFees)/((60/100)+1));
	}
	result.T20perSellingPrice=T20perSellingPrice;
	result.T30perSellingPrice=T30perSellingPrice;
	result.T40perSellingPrice=T40perSellingPrice;
	result.T40perSellingPrice=T40perSellingPrice;
	result.T50perSellingPrice=T50perSellingPrice;
	result.T60perSellingPrice=T60perSellingPrice;
    totalFees += vatReg ? vatToRemit : vatOnFees;
    
    var profit = calcroundSearchPage(parseFloat(sellPrice - buyPrice - totalFees).toFixed(2));
    if(profit.toFixed(2)==0.01 && defaultcall)
    {
    	profit=0.00;
    }
    result.roi = profit / buyPrice * 100;
    if (localStorage.profitAdjustment != '' && isNumber(localStorage.profitAdjustment)) {
      let r = calcroundSearchPage(profit * (1 + parseFloat(localStorage.profitAdjustment) / 100));
      result.profitAdj = r;
      result.roi = calcroundSearchPage(r / buyPrice * 100);
    }
    
	//totalFees=calcround(totalFees);
	totalFees=totalFees;
	profit=profit;
    //result.vatOnFees = calcround(vatOnFees);
    result.vatOnFees = vatOnFees;
    result.vatToRemit = vatToRemit;
    result.totalFees = totalFees;
    result.profit = profit;
    result.useVAT = vatReg;
    result.isEFN = efn;
    result.profitMargin = (result.profitAdj || profit) / sellPrice * 100;
    ScoringVar['Profit']=result.profit;
    ScoringVar['Roi']=result.roi;

    return result;
    
  }
  function _calcFees(sellPrice, buyPrice, weight, isKilogram, vat, vatReg, efn, p, localStorage,vatBuyPrice,defaultcall=true) {
    var referralFee = calcroundSearchPage(sellPrice * p.referralFeeP);
    var fbaFees = calcroundSearchPage(p.fbaFee);
    var totalFees = calcroundSearchPage(referralFee + fbaFees);
    var result = {
      referralFee: referralFee,
      fbaFees: fbaFees,
      totalFBAFeesEst: totalFees,
    }
//line no 1584
	
    if (localStorage.fixedPrepFee != '' && isNumber(localStorage.fixedPrepFee)) {
      let r = parseFloat(localStorage.fixedPrepFee);
      result.fixedPrepFee = r;
      totalFees += r;
    }

    if (localStorage.inboundShipping != '' && isNumber(localStorage.inboundShipping)) {
      result.inboundShipping = parseFloat(localStorage.inboundShipping) * weight;
      if (!isNaN(result.inboundShipping)) {
        totalFees += result.inboundShipping;
      }
    }

    if (localStorage.transitCost != '' && isNumber(localStorage.transitCost)) {
      result.transitCost = parseFloat(localStorage.transitCost);
      if (!isNaN(result.transitCost)) {
        totalFees += result.transitCost;
      }
    }

    if (localStorage.feeAdjustment != '' && isNumber(localStorage.feeAdjustment)) {
      let r = calcroundSearchPage(totalFees * parseFloat(localStorage.feeAdjustment) / 100);
      result.fbaFeeAdjustment = r;
      totalFees += r;
    }

    if (efn) {
      result.efnFee = Number(p.efnFee);
      totalFees += Number(p.efnFee);

      if (localStorage.efnAdjustment != '' && isNumber(localStorage.efnAdjustment)) {
        let r = calcroundSearchPage(result.efnFee * parseFloat(localStorage.efnAdjustment) / 100);
        result.efnFeeAdjustment = r;
        totalFees += r;
      }
    }
    const vatOnFees = calcroundSearchPage(totalFees * vat / 100);
    const vatToRemit = calcroundSearchPage((sellPrice - buyPrice) * (vat / 100) / (1 + vat / 100));
    var Short=((vat / 100) / (1 + vat / 100));
	if(vatReg)
	{
		var T20perSellingPrice=calcroundSearchPage((sellPrice-totalFees-(sellPrice*Short))/((20/100)+1-Short));
		var T30perSellingPrice=calcroundSearchPage((sellPrice-totalFees-(sellPrice*Short))/((30/100)+1-Short));
		var T40perSellingPrice=calcroundSearchPage((sellPrice-totalFees-(sellPrice*Short))/((40/100)+1-Short));
		var T50perSellingPrice=calcroundSearchPage((sellPrice-totalFees-(sellPrice*Short))/((50/100)+1-Short));
		var T60perSellingPrice=calcroundSearchPage((sellPrice-totalFees-(sellPrice*Short))/((60/100)+1-Short));
	}
	else
	{
		var T20perSellingPrice=calcroundSearchPage((sellPrice-totalFees-vatOnFees)/((20/100)+1));
		var T30perSellingPrice=calcroundSearchPage((sellPrice-totalFees-vatOnFees)/((30/100)+1));
		var T40perSellingPrice=calcroundSearchPage((sellPrice-totalFees-vatOnFees)/((40/100)+1));
		var T50perSellingPrice=calcroundSearchPage((sellPrice-totalFees-vatOnFees)/((50/100)+1));
		var T60perSellingPrice=calcroundSearchPage((sellPrice-totalFees-vatOnFees)/((60/100)+1));
	}
	result.T20perSellingPrice=T20perSellingPrice;
	result.T30perSellingPrice=T30perSellingPrice;
	result.T40perSellingPrice=T40perSellingPrice;
	result.T40perSellingPrice=T40perSellingPrice;
	result.T50perSellingPrice=T50perSellingPrice;
	result.T60perSellingPrice=T60perSellingPrice;
    totalFees += vatReg ? vatToRemit : vatOnFees;
    
    var profit = calcroundSearchPage(parseFloat(sellPrice - buyPrice - totalFees).toFixed(2));
    if(profit.toFixed(2)==0.01 && defaultcall)
    {
    	profit=0.00;
    }
    result.roi = profit / buyPrice * 100;
    if (localStorage.profitAdjustment != '' && isNumber(localStorage.profitAdjustment)) {
      let r = calcroundSearchPage(profit * (1 + parseFloat(localStorage.profitAdjustment) / 100));
      result.profitAdj = r;
      result.roi = calcroundSearchPage(r / buyPrice * 100);
    }
    
	//totalFees=calcround(totalFees);
	totalFees=totalFees;
	profit=profit;
    //result.vatOnFees = calcround(vatOnFees);
    result.vatOnFees = vatOnFees;
    result.vatToRemit = vatToRemit;
    result.totalFees = totalFees;
    result.profit = profit;
    result.useVAT = vatReg;
    result.isEFN = efn;
    result.profitMargin = (result.profitAdj || profit) / sellPrice * 100;
    ScoringVar['Profit']=result.profit;
    ScoringVar['Roi']=result.roi;

    return result;
    
  }
  function _calcFeesUSFBM(sellPrice, buyPrice, weight, isKilogram, vat, vatReg, efn, p, localStorage,vatBuyPrice,defaultcall=true) {
    var referralFee = calcroundSearchPage(sellPrice * p.referralFeeP);
    var fbaFees = calcroundSearchPage(p.fbaFee);
    var totalFees = calcroundSearchPage(referralFee + fbmVariableFee);

    var result = {
      referralFee: referralFee,
      fbaFees: fbaFees,
      totalFBAFeesEst: totalFees,
    };

    if (localStorage.fixedPrepFee != '' && isNumber(localStorage.fixedPrepFee)) {
      let r = parseFloat(localStorage.fixedPrepFee);
      result.fixedPrepFee = r;
      totalFees += r;
    }

    if (localStorage.inboundShippingUS != '' && isNumber(localStorage.inboundShipping)) {
      result.inboundShipping = parseFloat(localStorage.inboundShippingUS) * weight;
      if (!isNaN(result.inboundShipping)) {
        totalFees += result.inboundShipping;
      }
    }

    if (localStorage.transitCost != '' && isNumber(localStorage.transitCost)) {
      result.transitCost = parseFloat(localStorage.transitCost);
      if (!isNaN(result.transitCost)) {
        totalFees += result.transitCost;
      }
    }

    if (localStorage.feeAdjustment != '' && isNumber(localStorage.feeAdjustment)) {
      let r = totalFees * parseFloat(localStorage.feeAdjustment) / 100;
      result.fbaFeeAdjustment = r;
      totalFees += r;
    }
    /************added for new RIOBUYPRICE*******/
	var T20perSellingPrice=calcroundSearchPage((sellPrice-totalFees)/((20/100)+1));
	var T30perSellingPrice=calcroundSearchPage((sellPrice-totalFees)/((30/100)+1));
	var T40perSellingPrice=calcroundSearchPage((sellPrice-totalFees)/((40/100)+1));
	var T50perSellingPrice=calcroundSearchPage((sellPrice-totalFees)/((50/100)+1));
	var T60perSellingPrice=calcroundSearchPage((sellPrice-totalFees)/((60/100)+1));
	
	result.T20perSellingPrice=T20perSellingPrice;
	result.T30perSellingPrice=T30perSellingPrice;
	result.T40perSellingPrice=T40perSellingPrice;
	result.T40perSellingPrice=T40perSellingPrice;
	result.T50perSellingPrice=T50perSellingPrice;
	result.T60perSellingPrice=T60perSellingPrice;
	/************added for new RIOBUYPRICE*******/
	
    var profit = calcroundSearchPage(parseFloat(sellPrice - buyPrice - totalFees).toFixed(2));
    if(profit.toFixed(2)==0.01 && defaultcall)
    {
    	profit=0.00;
    }
    if (localStorage.taxRate != '' && isNumber(localStorage.taxRate)) {
      let r = sellPrice * parseFloat(localStorage.taxRate) / 100;
      result.salesTax = r;
      profit -= r;
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
if(typeof result.totalFBAFeesEst == "undefined" && !isNaN(result.totalFees))
{
	result.totalFBAFeesEst= result.totalFees;
}
	//console.log("result=",result);
	ScoringVar['Profit']=result.profit;
	ScoringVar['Roi']=result.roi;
	console.log("ScoringVar['Roi']===>",ScoringVar);
    return result;
  }
  function _calcFeesUS(sellPrice, buyPrice, weight, isKilogram, vat, vatReg, efn, p, localStorage,vatBuyPrice,defaultcall=true) {
    var referralFee = calcroundSearchPage(sellPrice * p.referralFeeP);
    var fbaFees = calcroundSearchPage(p.fbaFee);
    var totalFees = calcroundSearchPage(referralFee + fbaFees);

    var result = {
      referralFee: referralFee,
      fbaFees: fbaFees,
      totalFBAFeesEst: totalFees,
    };

    if (localStorage.fixedPrepFee != '' && isNumber(localStorage.fixedPrepFee)) {
      let r = parseFloat(localStorage.fixedPrepFee);
      result.fixedPrepFee = r;
      totalFees += r;
    }

    if (localStorage.inboundShippingUS != '' && isNumber(localStorage.inboundShipping)) {
      result.inboundShipping = parseFloat(localStorage.inboundShippingUS) * weight;
      if (!isNaN(result.inboundShipping)) {
        totalFees += result.inboundShipping;
      }
    }

    if (localStorage.transitCost != '' && isNumber(localStorage.transitCost)) {
      result.transitCost = parseFloat(localStorage.transitCost);
      if (!isNaN(result.transitCost)) {
        totalFees += result.transitCost;
      }
    }

    if (localStorage.feeAdjustment != '' && isNumber(localStorage.feeAdjustment)) {
      let r = totalFees * parseFloat(localStorage.feeAdjustment) / 100;
      result.fbaFeeAdjustment = r;
      totalFees += r;
    }
    /************added for new RIOBUYPRICE*******/
	var T20perSellingPrice=calcroundSearchPage((sellPrice-totalFees)/((20/100)+1));
	var T30perSellingPrice=calcroundSearchPage((sellPrice-totalFees)/((30/100)+1));
	var T40perSellingPrice=calcroundSearchPage((sellPrice-totalFees)/((40/100)+1));
	var T50perSellingPrice=calcroundSearchPage((sellPrice-totalFees)/((50/100)+1));
	var T60perSellingPrice=calcroundSearchPage((sellPrice-totalFees)/((60/100)+1));
	
	result.T20perSellingPrice=T20perSellingPrice;
	result.T30perSellingPrice=T30perSellingPrice;
	result.T40perSellingPrice=T40perSellingPrice;
	result.T40perSellingPrice=T40perSellingPrice;
	result.T50perSellingPrice=T50perSellingPrice;
	result.T60perSellingPrice=T60perSellingPrice;
	/************added for new RIOBUYPRICE*******/
	
    var profit = calcroundSearchPage(parseFloat(sellPrice - buyPrice - totalFees).toFixed(2));
    if(profit.toFixed(2)==0.01 && defaultcall)
    {
    	profit=0.00;
    }
    if (localStorage.taxRate != '' && isNumber(localStorage.taxRate)) {
      let r = sellPrice * parseFloat(localStorage.taxRate) / 100;
      result.salesTax = r;
      profit -= r;
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
if(typeof result.totalFBAFeesEst == "undefined" && !isNaN(result.totalFees))
{
	result.totalFBAFeesEst= result.totalFees;
}
	//console.log("result=",result);
	ScoringVar['Profit']=result.profit;
	ScoringVar['Roi']=result.roi;
	console.log("ScoringVar['Roi']===>",ScoringVar);
    return result;
  }

  function getFees(asin, sellPrice, buyPrice, weight, isKilogram, vat, vatReg, efn,vatBuyPrice) {
    if (region === 'com') {
      efn = false;
    }
    return Promise.all([
      _getFees(asin, sellPrice, efn),
      getOptions(),
    ])
      .then(([p, localStorage]) => {
        p.referralFeeP = Math.round(p.referralFee / sellPrice * 100) / 100;
        p.fbaFee = efn ? 0 : p.totalFee - p.referralFee;
        const calcFeesFunc = region === 'com' ? _calcFeesUS : _calcFees;
        const result = calcFeesFunc(sellPrice, buyPrice, weight, isKilogram, vat, vatReg, efn, p, localStorage,vatBuyPrice);

        var priceLeft = 0;
        var priceRight = Math.max(buyPrice * 100, buyPrice + 100);
        for (var i = 0; i < 20; i++) { 
          const midPrice = (priceLeft + priceRight) / 2;
          const r = calcFeesFunc(midPrice, buyPrice, weight, isKilogram, vat, vatReg, efn, p, localStorage,vatBuyPrice,false);
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
        return result;
      });
  }

  this.getFees = getFees;
}
function _delaySearchPage(delayMs) {
  return new Promise((resolve) => setTimeout(resolve, delayMs));
}

function _requestNewTokenSearchPage(region) {
  return new Promise((resolve, reject) => {
    const lang = LANGSSearchPage[region];
    const url = 'https://sellercentral.amazon.' + region + '/hz/fba/profitabilitycalculator/index?lang=' + lang;
    chrome.runtime.sendMessage({ data: {
          		urlProductInfo: url,
          		dataType: 'html' 
        		},'FunctionCall':'SellerCenterWeight' }, 
      function(response) 
      {
   // $.get(url, function (data) {
      data = $(response);
      marketPlaceIdSearchPage = data.find('#marketplaceIdHidden').val();
      marketPlaceIdSearchPage = marketPlaceIdSearchPage || MARKETPLACE_IDSearchPage[region];

      currencyCodeSearchPage = data.find('#currencyCodeHidden').val();
      currencyCodeSearchPage = currencyCodeSearchPage || CURRENCYSearchPage[region];

      data = $(data);
      var netToken = data.find('input[name=profitcalcToken]').val();

      resolve(netToken);
    })/*.fail(function () {
      reject();
    });*/
  });
}
function _getProductInfoSearchPage(region, token, asin) {
if(typeof $('#mbc').attr('data-asin') !='undefined' && $('#mbc').attr('data-asin') !='')
  		{
  			asin=$('#mbc').attr('data-asin');
  		}
  var urlProductInfo = 'https://sellercentral.amazon.' + region + '/hz/fba/profitabilitycalculator/productmatches?searchKey=' + asin + '&language=en_GB&profitcalcToken=' + token;
  return new Promise((resolve, reject) => {
  chrome.runtime.sendMessage({ data: {
          		urlProductInfo: urlProductInfo,
          		dataType: 'json' 
        		},'FunctionCall':'SellerCenterWeight' }, 
      function(response) 
      {
      	resolve(response.data[0]);
      })
   /* $.getJSON(urlProductInfo, function (result) {
      resolve(result.data[0]);
    }).fail(() => {
      reject();
    });*/
  });
}
  function getTokenSearchPage() {
    if (netTokenSearchPage) {
      return Promise.resolve(netTokenSearchPage);
    }

    return _requestNewTokenSearchPage(currentRegionSearchPage)
      .then(token => {
        triesSearchPage = 0;
        return token;
      })
      .catch(() => {
        triesSearchPage++;

        if (triesSearchPage < 10) {
          return _delay(tries * 2000)
            .then(() => getTokenSearchPage());
        } else {
          throw new Error('Max number of retries reached');
        }
      })
  }
 function getProductInfoSearchPage(asin) {
    if (productInfoCacheSearchPage[asin]) {
      return Promise.resolve(productInfoCacheSearchPage[asin]);
    }
    return getTokenSearchPage().then(token => _getProductInfoSearchPage(currentRegionSearchPage, token, asin))
      .then(productInfo => {
        productInfoCacheSearchPage[asin] = productInfo;
        return productInfo;
      })
  }
 function calculateSearchPage (asin,sellPrice,buyPrice,buypriceCurrency,regiongot,salesRankgot,Categorygot) {
CurrencAsin=asin;
    chrome.storage.sync.get(['efn', 'vatRate', 'vatRegistered','vatBuyPrice'], function (options) {
    SalesEstimatorSearchPage(asin,regiongot,Categorygot,salesRankgot);
      const vat = options.vatRate;
      const vatRegistered = options.vatRegistered;
      const efn = options.efn;
      const vatBuyPrice = options.vatBuyPrice;
      var weight=0;
      var weightUnit="";
    	if(typeof vatBuyPrice=='undefined' || !vatBuyPrice)
		{
			var donothing='';
		}
		else
		{
			buyPrice=buyPrice+(vat/100*buyPrice);
		}
		currentRegionSearchPage = extractCountryFromURL(location.href);
		ProductDetailsSearchpage=getProductPageDetailsSearchPage(currentRegionSearchPage,asin);
  		var currentCurrency = CURRENCIESSearchPage[currentRegionSearchPage];
  		var calc = new CalcSearchPage(currentRegionSearchPage);
  		var buyPriceConverted=0;
      convertPrice(buyPrice, buypriceCurrency, currentCurrency)
        .then(buyPriceConverted => {
        buyPriceConverted=buyPriceConverted;
       getProductInfoSearchPage(asin)
      .then(x => {
      GlobalWeightVariable=x;
          return calc.getFees(asin, sellPrice, buyPriceConverted, x.weight, x.weightUnit, vat, vatRegistered, efn,vatBuyPrice);
          
          }).then((fees) => {
          $('#CustomPopup1').remove();
          currentCalculatedResult=fees;
          
		 var f = setInterval(function() {
		 if(typeof GlobalsalesRank!='undefined' && GlobalsalesRank.trim()!='')
		 {
		 	clearInterval(f);
		 	var popuphtml='<div class="CustomPopup" id="CustomPopup1"><div class="dialogPopup"><header><h3>Calculated Results</h3><i class="fa fa-close" ></i></header>';
		popuphtml+='<div class="dialogPopup-msg" id="dialogPopup-msg1"><p style="margin-left: 25%;margin-bottom: 2%;"><b>Referral Fee: </b>'+currencySignSearchPage+''+calcroundSearchPage(fees.referralFee)+'</p>';
		if(typeof fees.isEFN=='undefined' || !fees.isEFN)
		{
			popuphtml+='<p style="margin-left: 25%;margin-bottom: 2%;"><b>FBA Fees: </b>'+currencySignSearchPage+''+calcroundSearchPage(fees.fbaFees)+'</p>';
			popuphtml+='<p style="margin-left: 25%;margin-bottom: 2%;"><b>Total FBA Fees: </b>'+currencySignSearchPage+''+calcroundSearchPage(fees.totalFBAFeesEst)+'</p>';
		}
		else
		{
			popuphtml+='<p style="margin-left: 25%;margin-bottom: 2%;"><b>EFN Fees: </b>'+currencySignSearchPage+''+calcroundSearchPage(fees.efnFee)+'</p>';
		}
		if(typeof fees.vatOnFees!="undefined")
		{
			popuphtml+='<p style="margin-left: 25%;margin-bottom: 2%;"><b>VAT On Fees: </b>'+currencySignSearchPage+''+calcroundSearchPage(fees.vatOnFees)+'</p>';
		}
		popuphtml+='<p style="margin-left: 25%;margin-bottom: 2%;"><b>Total Fees: </b>'+currencySignSearchPage+''+calcroundSearchPage(fees.totalFees)+'</p>';
		if(fees.profit>0)
		{
			popuphtml+='<p style="margin-left: 25%;margin-bottom: 2%;"><b>Your profit is: </b><font color="#1bd41b">'+currencySignSearchPage+''+calcroundSearchPage(fees.profit)+'</font></p>';
		}
		else
		{
			popuphtml+='<p style="margin-left: 25%;margin-bottom: 2%;"><b>Your profit is: </b><font color="#cf3535">'+currencySignSearchPage+''+calcroundSearchPage(fees.profit)+'</font></p>';
		}
		if(fees.roi>0)
		{
			popuphtml+='<p style="margin-left: 25%;margin-bottom: 2%;"><b>Your ROI: </b><font color="#1bd41b">'+calcroundSearchPage(fees.roi)+' %</font></p>';
		}
		else
		{
			popuphtml+='<p style="margin-left: 25%;margin-bottom: 2%;"><b>Your ROI: </b><font color="#cf3535">'+currencySignSearchPage+''+calcroundSearchPage(fees.roi)+' %</font></p>';
		}
		popuphtml+='<p style="margin-left: 25%;margin-bottom: 2%;"><b>Profit Margin: </b>'+calcroundSearchPage(fees.profitMargin)+' %</p>';
		popuphtml+='<p style="margin-left: 25%;margin-bottom: 2%;"><b>Breakeven Price: </b>'+currencySignSearchPage+''+calcroundSearchPage(fees.breakeven)+'</p>';
		popuphtml+='<br><br><p style="margin-left: 25%;margin-bottom: 2%;"><b>Sales Estimator: </b>'+GlobalsalesRank+'</p>';
		popuphtml+='<p style="margin-left: 25%;margin-bottom: 2%;"><b>Category: </b>'+ProductDetailsSearchpageScrap.category+'</p>';
		popuphtml+='</div><footer><div class="controls"><button class="button Exportbutton2 CloseSearchpage" style="margin: 0px 0px 0px 11px;" >OK</button><button class="button Exportbutton exportDataSearchPage" style="background-color:#4caf50;" >Export</button>';
		popuphtml+='</div></footer></div></div>';
		$('.loader').hide();
    	$('body').append(popuphtml);$('#CustomPopup1').show();
          $('.CloseSearchpage').click(function(){CloseSearchpage()});
          $('.exportDataSearchPage').click(function(){exportDataSearchPage(currentCalculatedResult,CurrencAsin,ProductDetailsSearchpage,buyPriceConverted,sellPrice)})
          }
          },100);
          });
        })
        
    });
    
  }
	var liinnerhtml='';
	var liinnerhtml1='';
	var selprice="";
	var buttonsset=false;
	currentRegionSearchPage = extractCountryFromURL(location.href);
	currencySignSearchPage=CURRENCY_SIGNSSearchPage[currentRegionSearchPage];
	var selectedGBP="";
	var selectedDoller="";
	if(currentRegionSearchPage=="co.uk")
	{
		selectedGBP="selected";
	}
	else if(currentRegionSearchPage=="com")
	{
		selectedDoller="selected";
	}
	chrome.storage.sync.get(["licensecheck",'ResultPageCalculator'], function(licensecheckobj){ 
	
	if(typeof licensecheckobj.licensecheck !='undefined' && licensecheckobj.licensecheck=="success" && typeof licensecheckobj.ResultPageCalculator!="undefined" && licensecheckobj.ResultPageCalculator)
	{
		$(document).ready(function(){
		var loadallcheck=0;
		var previousres={};
		totallength=$('[data-asin]').length;
		//console.log("totallength==>",totallength);
		var htmliverlaydiv='<div class="container-boxoverlay"><div class="overlay-boxoverlay">App Loading..(Please wait)</div></div>';
		
		if(totallength>0)
		{
			$("body").append(htmliverlaydiv);
		}
		$('[data-asin]').each(function(i,val){
		if(!$(val).hasClass('acs-private-brands-container-background') && !$(val).find('div:contains("Expert Recommendations")').length)
		{
			var checkselprice=$(val).find('.s-item-container').find('.a-color-price').html();
			//console.log("checkselprice1=>",$(val).html());
			if(typeof checkselprice!="undefined")
			{
				checkselprice=checkselprice.replace(/EUR|USD/gi, "");
				if(currentRegionSearchPage=="co.uk" || currentRegionSearchPage=="com")
				{
					checkselprice=checkselprice.replace(",", "");
				}
				else
				{
					checkselprice=checkselprice.replace(",", ".");
				}
				checkselprice=checkselprice.replace(" ", "");
				var firstlet=checkselprice.substring(0,1);
				if(isNaN(parseFloat(firstlet)))
				{
					selprice=checkselprice.substring(1);
					selprice=selprice.split(" - ")[0];
				}
				else
				{
					selprice=parseFloat($(val).find('.s-item-container').find('.s-price').html());
					selprice=selprice.split(" - ")[0];
				}
			}
			else if(typeof $(val).find('.a-price').find('.a-offscreen').html()!="undefined")
			{
				checkselprice=$(val).find('.a-price').find('.a-offscreen').html();
				checkselprice=checkselprice.replace(/EUR|USD/gi, "");
				if(currentRegionSearchPage=="co.uk" || currentRegionSearchPage=="com")
				{
					checkselprice=checkselprice.replace(",", "");
				}
				else
				{
					checkselprice=checkselprice.replace(",", ".");
				}
				
				checkselprice=checkselprice.replace(" ", "");
				if(isNaN(parseFloat(checkselprice)))
				{
					selprice=checkselprice.substring(1);
					selprice=selprice.split(" - ")[0];
				}
				else
				{
					selprice=checkselprice;
				}
				//console.log("checkselprice2=>",checkselprice);
			}
			else if(typeof $(val).find('span[class="a-color-base"]').html()!="undefined")
			{
                checkselprice=$(val).find('span[class="a-color-base"]').html();
                checkselprice=checkselprice.replace(/EUR|USD/gi, "");
                if(currentRegionSearchPage=="co.uk" || currentRegionSearchPage=="com")
                {
                    checkselprice=checkselprice.replace(",", "");
                }
                else
                {
                    checkselprice=checkselprice.replace(",", ".");
                }

                checkselprice=checkselprice.replace(" ", "");
                if(isNaN(parseFloat(checkselprice)))
                {
                    selprice=checkselprice.substring(1);
                    selprice=selprice.split(" - ")[0];
                }
                else
                {
                    selprice=checkselprice;
                }
			}
			selprice=selprice.split("- ")[0];
		
			//console.log("selprice=>",selprice);
			currentRegionSearchPage = extractCountryFromURL(location.href);
			var mainres=[];
			getProductPageDetailsSearchPage(currentRegionSearchPage,$(val).attr('data-asin')).
			then(res=>{
			if(typeof res.category!="undefined" && res.category!=null && typeof res.rank!="undefined" && res.rank!=null && typeof res.price!="undefined" && res.price!=null)
			{
				previousres=res;
			}
			else
			{
				res=previousres;
			}
			if(typeof res.category!="undefined" && res.category.includes("  in "))
			{
				res.category=res.category.split("  in ")[1];
			}
			console.log("res=>",res);
			mainres=res;
			getRank(currentRegionSearchPage, res.category, res.rank).then(rankres=>{
			if(!isNaN(mainres.price))
			{
				selprice=mainres.price;
			}
			varaddtoID="";
			if(typeof $("#"+$(val).attr('data-asin')+'__selprice').val()!="undefined")
			{
				varaddtoID="__1";
			}
			else if(typeof $("#"+$(val).attr('data-asin')+'__selprice__1').val()!="undefined")
			{
				varaddtoID="__2";
			}
			else if(typeof $("#"+$(val).attr('data-asin')+'__selprice__2').val()!="undefined")
			{
				varaddtoID="__3";
			}
			else if(typeof $("#"+$(val).attr('data-asin')+'__selprice__3').val()!="undefined")
			{
				varaddtoID="__4";
			}
			liinnerhtml='<div class="a-fixed-left-grid-col a-col-right" style="margin-left:2%;padding-left: 0%;float:left;background-color:#e8e4e4;width: 254px;"><div style="margin-top: 4%;"><b>Category : </b>'+titleCase(mainres.category)+'</div><div style="margin-top: 4%;"><b>Rank : </b>'+mainres.rank+'</div><div style="margin-top: 4%;"><b>BSR : </b>'+rankres+'</div><div style="margin-top: 4%;"><b>ASIN : </b>'+$(val).attr('data-asin')+'</div><div style="margin-top: 4%;"><b>Buy Price: </b><select id="'+$(val).attr('data-asin')+'__currency'+varaddtoID+'" class="SearchPageSelect"><option value="EUR">€</option><option value="GBP" '+selectedGBP+'>£</option><option '+selectedDoller+' value="USD">$</option></select><input type="text" id="'+$(val).attr('data-asin')+'__buyprice'+varaddtoID+'" value="" style="width:97px"></div><div style="margin-top: 4%;"><b>Sell Price: </b><input id="'+$(val).attr('data-asin')+'__selprice'+varaddtoID+'" type="text" value="'+selprice+'"><input id="'+$(val).attr('data-asin')+'__region'+varaddtoID+'" type="hidden" value="'+currentRegionSearchPage+'"><input id="'+$(val).attr('data-asin')+'__salesRank'+varaddtoID+'" type="hidden" value="'+mainres.rank+'"><input id="'+$(val).attr('data-asin')+'__Category'+varaddtoID+'" type="hidden" value="'+mainres.category+'"></div><div><button id="'+$(val).attr('data-asin')+'__keepa'+varaddtoID+'" class="searchpagebutton SearchPageSalesData">Keepa</button><button id="'+$(val).attr('data-asin')+'__calculate'+varaddtoID+'" class="searchpagebutton SearchPageCalculate">Calculate</button></div><div class="loader"><div class="loader-wheel"></div><div class="loader-text"></div></div></div>';
			liinnerhtml1='<div class="a-row a-spacing-mini" style="background-color:#e8e4e4;width: 254px;" ><div style="margin-top: 4%;"><b>Category : </b>'+titleCase(mainres.category)+'</div><div style="margin-top: 4%;"><b>Rank : </b>'+mainres.rank+'</div><div style="margin-top: 4%;"><b>BSR : </b>'+rankres+'</div><div style="margin-top: 4%;"><b>ASIN : </b>'+$(val).attr('data-asin')+'</div><div style="margin-top: 4%;"><b>Buy Price: </b><select id="'+$(val).attr('data-asin')+'__currency'+varaddtoID+'" class="SearchPageSelect"><option value="EUR">€</option><option value="GBP" '+selectedGBP+'>£</option><option '+selectedDoller+' value="USD">$</option></select><input style="width:96px" type="text" id="'+$(val).attr('data-asin')+'__buyprice'+varaddtoID+'" value=""></div><div style="margin-top: 4%;"><b>Sell Price: </b><input id="'+$(val).attr('data-asin')+'__selprice'+varaddtoID+'" type="text" value="'+selprice+'"><input id="'+$(val).attr('data-asin')+'__region'+varaddtoID+'" type="hidden" value="'+currentRegionSearchPage+'"><input id="'+$(val).attr('data-asin')+'__salesRank'+varaddtoID+'" type="hidden" value="'+mainres.rank+'"><input id="'+$(val).attr('data-asin')+'__Category'+varaddtoID+'" type="hidden" value="'+mainres.category+'"></div><div><button id="'+$(val).attr('data-asin')+'__keepa'+varaddtoID+'" class="searchpagebutton SearchPageSalesData">Keepa</button><button id="'+$(val).attr('data-asin')+'__calculate'+varaddtoID+'" class="searchpagebutton SearchPageCalculate">Calculate</button> </div><div class="loader"><div class="loader-wheel"></div><div class="loader-text"></div></div></div>';
			if($(val).find('.a-fixed-left-grid-inner').length)
			{
				$(val).find('.a-fixed-left-grid-inner').last().append(liinnerhtml);
			}
			else if($(val).find('.s-item-container').length)
			{
				$(val).find('.s-item-container').last().append(liinnerhtml1);
			}
			else if($(val).find('.s-expand-height').length)
			{
				$(val).find('.s-expand-height').last().append(liinnerhtml1);
			}
			else if($(val).find('.sg-col-inner').length)
			{
				$(val).find('.sg-col-inner').last().append(liinnerhtml1);
			}
			loadallcheck++;
			if(loadallcheck>=totallength)
			{
				$(".container-boxoverlay").remove();
			}
			var f = setInterval(function() {
			
			$('#'+$(val).attr('data-asin')+'__keepa'+varaddtoID).click(function(){
		$('#CustomPopup1').remove();
			var rowid=$(this).attr('id');
			var splited=rowid.split('__');
			var keepaRegionnew = KEEPA_REGIONSearchPage[currentRegionSearchPage];
    		var keepbuttonsrc= 'https://keepa.com/#!product/' + keepaRegionnew + '-' + splited[0];
    		var imgsrc = 'https://dyn.keepa.com/pricehistory.png?asin='+splited[0]+'&domain='+currentRegionSearchPage+'&width=1000&height=400&amazon=1&new=1&used=1&salesrank=1&range=31';
    		//var imgsrc = 'https://dyn.keepa.com/pricehistory.png?asin='+splited[0]+'&domain='+currentRegionSearchPage+'&width=393&height=180&amazon=1&new=1&used=1&salesrank=1';
    		var popuphtml='<div class="CustomPopup" id="CustomPopup1"><div class="dialogPopup" style="width:72%;"><header><h3>Calculated Results</h3><i class="fa fa-close" ></i></header>';
			popuphtml+='<div class="dialogPopup-msg" id="dialogPopup-msg1"><a href="'+keepbuttonsrc+'" target="_blank"><img src="'+imgsrc+'"></a>';
			popuphtml+='</div><footer><div class="controls"><button class="button Exportbutton2 CloseSearchpage" style="margin: 0px 0px 0px 11px;" >OK</button>';
			popuphtml+='</div></footer></div></div>';
			$('body').append(popuphtml);
			$('#CustomPopup1').show();
			
			$('.CloseSearchpage').click(function(){CloseSearchpage()});
		});
		$('#'+$(val).attr('data-asin')+'__calculate'+varaddtoID).click(function(){
			var rowid=$(this).attr('id');
			var splited=rowid.split('__');
			if($("#"+splited[0]+"__buyprice").val().trim()=="" || $("#"+splited[0]+"__selprice").val().trim()=="")
			{
				alert("Please Enter Buy Price And Sell Price");
				return false;
			}
			else
			{
				$('.loader').show();
				var asin=splited[0];
				var buyprice=parseFloat($("#"+splited[0]+"__buyprice").val().trim());
				var selprice=parseFloat($("#"+splited[0]+"__selprice").val().trim());
				var buypriceCurrency=$("#"+splited[0]+"__currency").val();
				var regiongot=$("#"+splited[0]+"__region").val();
				var salesRankgot=$("#"+splited[0]+"__salesRank").val();
				var Categorygot=$("#"+splited[0]+"__Category").val();
				calculateSearchPage (asin,selprice,buyprice,buypriceCurrency,regiongot,salesRankgot,Categorygot)
			}
		});
			clearInterval(f);
			},100);
			})
			})
			
		}
		else
		{
			totallength--;
		}
		});
	});
	}
});
	
}
//else if($(location).attr('href').indexOf('amazon.')>0 && $(location).attr('href').indexOf('offer-listing')<=0)
{
$(document).ready(function(){
	panelVM = new AppViewModel();
chrome.storage.sync.get(['licenseKey', 'showCalc','shipPrice', 'efn','fbmflag','Collapsible'], function (settings) {
 
  var panelViews = new PanelView(settings.licenseKey);
  panelViews.forEach(view => ko.applyBindings(panelVM, view));
  
  //$('head').append('<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">');
  if(typeof settings.Collapsible=="undefined")
  {
  	settings.Collapsible=false;
  }
$('.centerColAlign').attr('style',"margin-left: 46.5%;");
  panelVM.licenseKey(settings.licenseKey);
  panelVM.showCalc(settings.showCalc);
  panelVM.efn(!!settings.efn);
  panelVM.Collapsible(settings.Collapsible);
  Collapsible=settings.Collapsible;
  if(Collapsible)
  {
  	$(".collapsible1").toggleClass("active");
    var content = $(".collapsible1").next().toggle();
     //$(content).toggle();
  }
  if(typeof settings.fbmflag=="undefined")
  {
  	var fbmflag=false;
  	settings.fbmflag=false;
  	chrome.storage.sync.set({ fbmflag });
  }
  if(typeof settings.shipPrice=="undefined")
  {
  	
  	settings.shipPrice=0;
  	chrome.storage.sync.set({ 'shipPrice': settings.shipPrice});
  }
  panelVM.shipPrice(settings.shipPrice);
  panelVM.fbmflag(settings.fbmflag);
var numberoftimes=0;
  var f = setInterval(function() {
  numberoftimes=numberoftimes+1;
            if (typeof $("[data-slider]").attr('type') !="undefined" || numberoftimes>=10) 
            {
loadsliders();
$("#buypriceinput").keyup(function(){
if(typeof $('.outputDiscVoucher').attr("dis-Voucher")!="undefined")
    {
    	var VoucherDis=$('.outputDiscVoucher').attr("dis-Voucher").replace("%","");
    	var buyPrice=$(this).val();
    	buyPrice=buyPrice-(buyPrice*VoucherDis/100);
    	var titletext="<span class='tooltiptext'>Discount Buy Price:"+buyPrice+"</span>";
    	$("#discVoucher")
        .nextAll(".outputDiscVoucher:first")
          .html(VoucherDis+"%"+titletext);
    }
})
            	$("[data-slider]")
    .each(function () {
      var input = $(this);
      $("<span class='tooltip' style='font-size:17px;font-weight: bolder;color: #80faff;' data-title='Discount Buy Price:'><span class='tooltiptext'>Discount Buy Price:</span>")
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
                clearInterval(f);
            }
            },300);
  
  PanelView=null;
  //panelVM=null;
   chrome.storage.sync.get(OPTIONS_KEYS, function (_settings) {
  globalsettings=_settings;
  $(".SEMIprogress").each(function(){
  
  var $bar = $(this).find(".SEMIbar");
  var $val = $(this).find("span");
  var perc = parseInt( $val.text(), 10);

  $({p:0}).animate({p:perc}, {
    duration: 3000,
    easing: "swing",
    step: function(p) {
      $bar.css({
        transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
        // 45 is to add the needed rotation to have the green borders at the bottom
      });
      $val.text(p|0);
    }
  });
});
  })

});
});
}

function resetPage(originalParams) {
	//window.scrollTo(0, originalParams.scrollTop);
	//document.querySelector("body").style.overflow = originalParams.overflow;
var jj;
}
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
 if (request.action == "getDOM")
 {
 	console.log("request----->",request);
 	if(typeof $("#modalContainerCustomAlert").html()!="undefined")
 	{
 		removeCustomAlert();
 	}
   createCustomAlertProductTrack(request.messagetoshow);
}
});
chrome.runtime.onMessage.addListener(function (request, sender, callback) {
if(request.action=="RemoveSelection")
{
	if(window.getSelection) {
   if (window.getSelection().empty) {  // Chrome
     window.getSelection().empty();
   } else if (window.getSelection().removeAllRanges) {  // Firefox
     window.getSelection().removeAllRanges();
   }
} else if (document.selection) {  // IE?
  document.selection.empty();
}
}
})
chrome.runtime.onMessage.addListener(function (request, sender, callback) {
	switch (request.msg) {
		case "getPageDetails":
			var size = {
				width: Math.max(
					document.documentElement.clientWidth,
					document.body.scrollWidth,
					document.documentElement.scrollWidth,
					document.body.offsetWidth,
					document.documentElement.offsetWidth
				),
				height: Math.max(
					document.documentElement.clientHeight,
					document.body.scrollHeight,
					document.documentElement.scrollHeight,
					document.body.offsetHeight,
					document.documentElement.offsetHeight
				)
			};
			break;

		case "scrollPage":
			var lastCapture = false;
			//window.scrollTo(0, request.scrollTo);

			// first scrolling
			/*if (request.scrollTo === 0) {
				console.log("request.scrollTo---->",request.scrollTo);
				document.querySelector("body").style.overflow = "hidden";
			}

			// last scrolling
			if (request.size.height <= window.scrollY + request.scrollBy) {
				lastCapture = true;
				request.scrollTo = request.size.height - request.scrollBy;
			}*/
			chrome.storage.sync.get(['lastscreenshot'], function (shot) {
				var gotlastscreenshottime=shot.lastscreenshot;
				var shotnow=getNow();
				var minutestosend=1;
			if(typeof gotlastscreenshottime!="undefined")
			{
				minutestosend = screenshotbetween(gotlastscreenshottime);
			}
				
				chrome.storage.sync.set({ "lastscreenshot": shotnow });
			chrome.extension.sendMessage({
				"msg": "capturePage",
				"position": request.scrollTo,
				"lastCapture": lastCapture,
				"captureData": {
          		VANAME: vaname,
          		VAEMAIL: vaemail,
          		VALICENSE: valicenseKey,
          		ReqType: minutestosend,
        		}
			});
			});
			break;

		case "resetPage":
			resetPage(request.originalParams);
			break;

		case "showError":
			var errorEl = document.createElement("div");

			errorEl.innerHTML = "<div style='position: absolute; top: 10px; right: 10px; z-index: 9999; padding: 8px; background-color: #fff2f2; border: 1px solid #f03e3e; border-radius: 2px; font-size: 12px; line-height: 16px; transition: opacity .3s linear;'>An internal error occurred while taking pictures.</div>";
			document.body.appendChild(errorEl);

			setTimeout(function () {
				errorEl.firstChild.style.opacity = 0;
			}, 3000);

			resetPage(request.originalParams);
			break;
		
		case "TrackProductURL":
		console.log("hrere");
		callback($(location).attr('href'));
	}
});
function totalsessiontime()
{
	 if (startTimer !== 0 && startTimer !== undefined) {
        var diff = getNow() - startTimer;
    } else {
        var diff = 0;
    }
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var minutes = Math.floor((diff - hours * 1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor((diff - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000);
    var inseconds=(hours*60*60)+(minutes*60)+seconds;
    return inseconds;
}
function updateTimer() {
    var active = localStorage.getItem('activeTimer');
    if (startTimer !== 0 && startTimer !== undefined) {
        var diff = getNow() - startTimer;
    } else {
        var diff = 0;
    }
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var minutes = Math.floor((diff - hours * 1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor((diff - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000);
    if (isNaN(hours)) hours = 0;
    if (isNaN(minutes)) minutes = 0;
    if (isNaN(seconds)) seconds = 0;
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;
    $("#timer-").find(".hours").html(hours);
    $("#timer-").find(".minutes").html(minutes);
    $("#timer-").find(".seconds").html(seconds);
}
function screenshotbetween(lasttime)
{
	if (lasttime !== 0 && lasttime !== undefined) {
        var diff = getNow() - lasttime;
    } else {
        var diff = 0;
    }
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var minutes = Math.floor((diff - hours * 1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor((diff - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000);
    var inseconds=(hours*60*60)+(minutes*60)+seconds;
    return inseconds;
}
/*****************
 * Timer controls
 *****************/
var timer = {
    stop:function () {
        window.clearInterval(act().interval);
        setAct('stopped', getNow() - act().start);
        setAct('running', false);
    },
    reset:function () {
        removeAct('start');
        removeAct('stopped');
        updateTimer();
    }
};
/******************
 * Storage methods
 ******************/
function act() {
    var timers = localStorage.getObject('timers');
    return timers[localStorage.getItem('activeTimer')];
}

function get(i) {
    var timers = localStorage.getObject('timers');
    return timers[i];
}

function setAct(key, value) {
    var active = act();
    active[key] = value;
    update(active);
}

function removeAct(key) {
    var active = act();
    delete active[key];
    update(active);
}

function update(active, i) {
    if (i === undefined)
        i = localStorage.getItem('activeTimer');
    var timers = localStorage.getObject('timers');
    timers[i] = active;
    localStorage.setObject('timers', timers);
}

/**********
 * Helpers
 **********/
function getNow() {
    var date = new Date();
    return date.getTime();
}
$(document).ready(function(){
     var OdderpositionDown=false;
     var ColorNameTitle="Color";
	 var VariationsASINS=[];
    
    var VariationsASINS1=[];
	var VariationsFound=false;
    if(typeof $("li[data-defaultasin]").html()!="undefined")
    {
    	if(typeof $("li[data-defaultasin]").parent().parent().find(".a-form-label").html()!="undefined")
    	{
    		ColorNameTitle=$("li[data-defaultasin]").parent().parent().find(".a-form-label").html()
    	}
    	/*$("li[data-defaultasin]").each(function() {
    		var asin=$(this).attr("data-defaultasin");
    		if(asin.trim()!='')
    		{
    			if(typeof VariationsASINS[asin]=="undefined")
    			{
    				VariationsASINS1.push(asin);
    			}
    			VariationsASINS[asin]=asin;
    		}
    	})*/
		VariationsFound=true;
    	
    }
    if(typeof $("#variation_color_name").find("li[data-dp-url]").html()!="undefined")
    {
		VariationsFound=true;
    	/*$("#variation_color_name").find("li[data-dp-url]").each(function() {
    		var asin=$(this).attr("data-dp-url");
    		var cmpos=asin.indexOf("/dp/");
    		asin=asin.replace("/dp/","");
    			asin=asin.substring(cmpos,10);
    		if(asin.trim()!='')
    		{
    			if(typeof VariationsASINS[asin]=="undefined")
    			{
    				VariationsASINS1.push(asin);
    			}
    			VariationsASINS[asin]=asin;
    		}
    	})*/
    	
    }
    else if(typeof $('[name^="dropdown_selected_size_name"]').html()!="undefined")
    {
    	/*if(typeof VariationsASINS[asinNewAdded]=="undefined")
    			{
    				VariationsASINS1.push(asinNewAdded);
    			}
    			VariationsASINS[asinNewAdded]=asinNewAdded;
    	/*$('[name^="dropdown_selected_size_name"] > option').each(function() {
    		var asin=$(this).val();
    		if(asin!=-1)
    		{
    			var cmpos=asin.indexOf(",");
    			asin=asin.substring(cmpos+1);
    			if(typeof VariationsASINS[asin]=="undefined")
    			{
    				VariationsASINS1.push(asin);
    			}
    			VariationsASINS[asin]=asin;
    		}
    	})*/
		VariationsFound=true;
    }
    else if(typeof $('[name^="dropdown_selected_"]').html()!="undefined")
    {
    	/*$('[name^="dropdown_selected_"] > option').each(function() {
    		var asin=$(this).val();
    		if(asin!=-1)
    		{
    			var cmpos=asin.indexOf(",");
    			asin=asin.substring(cmpos+1);
    			if(typeof VariationsASINS[asin]=="undefined")
    			{
    				VariationsASINS1.push(asin);
    			}
    			VariationsASINS[asin]=asin;
    		}
    	})*/
		VariationsFound=true;
    }
	//console.log("VariationsASINS--->",VariationsASINS);
     setTimeout(function(){ 
     //if(!$.isEmptyObject(VariationsASINS1))
	if(VariationsFound)
     {
     	$("#variationClick").css("text-align","left");
     	$("#variationClick").after('<div class="loaderbuttonnew"></div>');
     	var urlNewAdded=$(location).attr('href');
      var asinNewAdded=parseAsinNewAdded(urlNewAdded);
      var RegionNewAdded=extractCountryFromURLNewAdded(urlNewAdded);
      ColorNameTitle=ColorNameTitle.replace(":","");
	  var PreviewTotal=0;
     chrome.runtime.sendMessage({
   			method: 'POST',
    		FunctionCall: 'variationNewData',
    		Region: RegionNewAdded,
    		mainAsin:asinNewAdded,
    		ColorNameTitle:ColorNameTitle,
			LicenseKey: valicenseKey,
    		dataType: 'json',
    		url: 'https://admin.fbamultitool.com/keepa/variations.php?marketplace='+RegionNewAdded+'&asin='+ asinNewAdded
			}, function(response) {
				var priceFilterSelect = new Array();
				var asinFilterSelect = new Array();
				var sizeFilterSelect = new Array();
				var reviewFilterSelect = new Array();
				var colorFilterSelect = new Array();
				var sizearray=[];
				var sizearray=[];
				var asinarray=[];
				var colorarray=[];
				var pricearra=[];
				response=JSON.parse(response);
				VariationCall=true;
				sizearray=response.sizearray;
				asinarray=response.asinarray;
				colorarray=response.colorarray;
				pricearray=response.pricearray;
				if(typeof response['Pasin']!="undefined")
				{
					var asinToBeSend="";
					if(typeof response['tenGroupAsin']!="undefined" && response['tenGroupAsin'].trim()!="")
					{
						asinToBeSend=response['tenGroupAsin'];
					}
				
					if(response['Pasin'].trim()!="" && Object.keys(response['review']).length)
					{
						if(RegionNewAdded=="com")
						{
							response['Pasin']=asinNewAdded;
						}
							chrome.runtime.sendMessage({
   							method: 'POST',
    						FunctionCall: 'ReviewHistoryNewTop',
    						Region: RegionNewAdded,
    						mainAsin:response['Pasin'],
    						asinToBeSend:asinToBeSend,
							LicenseKey: valicenseKey,
    						dataType: 'json',
    						url: 'https://admin.fbamultitool.com/keepa/variations.php?marketplace='
							}, 
							function(responseInn) 
							{

								if(responseInn.status="success")
								{
									console.log(responseInn);
									PreviewTotal=responseInn.data;
									//$(".TotalReviewsClass").html(responseInn.data);
									if( (typeof response['review'] === "object" || typeof response['review'] === 'function') && (response['review'] !== null) && responseInn.data>0)
									{
										for (var Rkey in response['review']) 
										{
											//console.log("response['review'][Rkey]=",response['review'][Rkey]);
											//console.log("response['review'][Rkey]=",Rkey);
											ReviewHistory=response['review'][Rkey];
    										getReviewCall(VariationsASINS1,ReviewHistory,RegionNewAdded,Rkey,PreviewTotal)
										}
									}
									else
									{
										$(".TotalReviewsClass").html("0");
										$(".TotalReviewsPerClass").html("0%");
										$(".TotalReviews30Class").html("0");
										$(".TotalReviews60Class").html("0");
										$(".TotalReviews90Class").html("0");
									}
								}
							});
					}
				}
				if(typeof response.tenGroup!="undefined" && response.tenGroup.length)
				{
						/*Object.keys(response.tenGroup).forEach( (element) => {
							
						})*/
						$.each(response.tenGroup, function( Nindex, Nvalue ) 
						{
								chrome.runtime.sendMessage({
   							method: 'POST',
    						FunctionCall: 'TenGroup',
    						Region: RegionNewAdded,
							sizearray: sizearray,
							asinarray: asinarray,
							colorarray: colorarray,
							pricearray: pricearray,
							LicenseKey: valicenseKey,
    						asinList:Nvalue,
    						dataType: 'json',
    						url: 'https://admin.fbamultitool.com/keepa/variations.php?marketplace='
							}, 
							function(NresponseInn) 
							{
								//console.log("NresponseInn------>",NresponseInn);
								if(NresponseInn.data=="yes")
								{
									sizearray=response.sizearray;
									asinarray=response.asinarray;
									colorarray=response.colorarray;
									pricearray=response.pricearray;
									$("#variationTableB").append(NresponseInn.html);
									//$(".TotalReviewsClass").html(responseInn.data);
									if((typeof NresponseInn['review'] === "object" || typeof NresponseInn['review'] === 'function') && (NresponseInn['review'] !== null))
									{
										for (var NRkey in NresponseInn['review']) 
										{
											console.log("response['review'][Rkey]=",NresponseInn['review'][NRkey]);
											console.log("response['review'][Rkey]=",NRkey);
											ReviewHistory=NresponseInn['review'][NRkey];
											getReviewCall(VariationsASINS1,ReviewHistory,RegionNewAdded,NRkey,PreviewTotal)
										}
									}
									/*else
									{
										$(".TotalReviewsClass").html("0");
										$(".TotalReviewsPerClass").html("0%");
										$(".TotalReviews30Class").html("0");
										$(".TotalReviews60Class").html("0");
										$(".TotalReviews90Class").html("0");
									}*/
								}
							})
						});
						
				}
				$(".loaderbuttonnew").remove();
				$("#variationClick").css("text-align","center");
				if(typeof $("#titleBlock").html()!="undefined")
				{
					$("#titleBlock").after(response.html);
					$("#variationClick").css({'opacity': '1'});
					$("#variationClick").removeAttr("disabled");
					if(typeof response['reviewPer']!="undefined")
					{
						var TotalREviews=response['reviewPer']['newTotal'];
						if(response['reviewPer']['newTotal']!=response['reviewPer']['actualTotal'])
						{
							for (var RPkey in response['reviewPer']['asin']) 
							{
								var reviewPercentage=0;
								reviewPercentage=(response['reviewPer']['asin'][RPkey]/TotalREviews*100);
 								reviewPercentage=reviewPercentage.toFixed(2);
 								reviewPercentage=reviewPercentage+"%";
 								$("#reviewPer_"+RPkey).html(reviewPercentage);
							}
						}
					}
					$("#reviewSort").click(function(){
					if(typeof $(this).find(".downiii").html()!="undefined")
    				{
						$(this).find("iii").removeClass("downiii");
						$(this).find("iii").addClass("upiii");
					}
					else
					{
						$(this).find("iii").removeClass("upiii");
						$(this).find("iii").addClass("downiii");
					}
						var tableOr, rowsOR, switching, i,j, x, y,valcur,valnex,shouldSwitch;
  tableOR = document.getElementById("variationTableID");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  rowsOr = tableOR.rows;
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    for (i = 2; i < (rowsOr.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      x = rowsOr[i].getElementsByTagName("TD")[4];
      y = rowsOr[i + 1].getElementsByTagName("TD")[4];
	  
      valcur=x.innerHTML;
      valnex=y.innerHTML;
	  if(isNaN(valcur))
	  {
		  valcur="0";
	  }
	  if(isNaN(valnex))
	  {
		  valnex="0";
	  }
	  
      var CurrentValue = Number(valcur.replace(/[^0-9\.]+/g,""));
      var NextValue =  Number(valnex.replace(/[^0-9\.]+/g,""));
      if(typeof $(this).find(".downiii").html()!="undefined")
      {
      	if (CurrentValue >  NextValue) {
        	//if so, mark as a switch and break the loop:
        	shouldSwitch = true;
        	break;
      	}
      }
      else
      {
      		if (CurrentValue <  NextValue) {
        	//if so, mark as a switch and break the loop:
        	shouldSwitch = true;
        	break;
      		}
      }
    }
    if (shouldSwitch) {
      if(typeof $(this).find(".downiii").html()!="undefined")
      {
      	rowsOr[i].parentNode.insertBefore(rowsOr[i + 1], rowsOr[i]);
      }
      else
      {
      	//console.log("else1",rowsOr[i].parentNode);
      	rowsOr[i].parentNode.insertBefore(rowsOr[i + 1], rowsOr[i]);
      }
      switching = true;
    }
    
  }
					});
					
					
					$("#sizeSort").click(function(){
					if(typeof $(this).find(".downiii").html()!="undefined")
    				{
						$(this).find("iii").removeClass("downiii");
						$(this).find("iii").addClass("upiii");
					}
					else
					{
						$(this).find("iii").removeClass("upiii");
						$(this).find("iii").addClass("downiii");
					}
						var tableOr, rowsOR, switching, i,j, x, y,valcur,valnex,shouldSwitch;
  tableOR = document.getElementById("variationTableID");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  rowsOr = tableOR.rows;
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    for (i = 2; i < (rowsOr.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      x = rowsOr[i].getElementsByTagName("TD")[3];
      y = rowsOr[i + 1].getElementsByTagName("TD")[3];
      valcur=x.innerHTML;
      valnex=y.innerHTML;
      var CurrentValue = Number(valcur.replace(/[^0-9\.]+/g,""));
      var NextValue =  Number(valnex.replace(/[^0-9\.]+/g,""));
      if(typeof $(this).find(".downiii").html()!="undefined")
      {
      	if (CurrentValue >  NextValue) {
        	//if so, mark as a switch and break the loop:
        	shouldSwitch = true;
        	break;
      	}
      }
      else
      {
      		if (CurrentValue <  NextValue) {
        	//if so, mark as a switch and break the loop:
        	shouldSwitch = true;
        	break;
      		}
      }
    }
    if (shouldSwitch) {
      if(typeof $(this).find(".downiii").html()!="undefined")
      {
      	rowsOr[i].parentNode.insertBefore(rowsOr[i + 1], rowsOr[i]);
      }
      else
      {
      	//console.log("else1",rowsOr[i].parentNode);
      	rowsOr[i].parentNode.insertBefore(rowsOr[i + 1], rowsOr[i]);
      }
      switching = true;
    }
    
  }
					});
					
					
					$("#priceSort").click(function(){
					if(typeof $(this).find(".downiii").html()!="undefined")
    				{
						$(this).find("iii").removeClass("downiii");
						$(this).find("iii").addClass("upiii");
					}
					else
					{
						$(this).find("iii").removeClass("upiii");
						$(this).find("iii").addClass("downiii");
					}
						var tableOr, rowsOR, switching, i,j, x, y,valcur,valnex,shouldSwitch;
  tableOR = document.getElementById("variationTableID");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  rowsOr = tableOR.rows;
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    for (i = 2; i < (rowsOr.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      x = rowsOr[i].getElementsByTagName("TD")[2];
      y = rowsOr[i + 1].getElementsByTagName("TD")[2];
      valcur=x.innerHTML;
      valnex=y.innerHTML;
      var CurrentValue = Number(valcur.replace(/[^0-9\.]+/g,""));
      var NextValue =  Number(valnex.replace(/[^0-9\.]+/g,""));
      if(typeof $(this).find(".downiii").html()!="undefined")
      {
      	if (CurrentValue >  NextValue) {
        	//if so, mark as a switch and break the loop:
        	shouldSwitch = true;
        	break;
      	}
      }
      else
      {
      		if (CurrentValue <  NextValue) {
        	//if so, mark as a switch and break the loop:
        	shouldSwitch = true;
        	break;
      		}
      }
    }
    if (shouldSwitch) {
      if(typeof $(this).find(".downiii").html()!="undefined")
      {
      	rowsOr[i].parentNode.insertBefore(rowsOr[i + 1], rowsOr[i]);
      }
      else
      {
      	//console.log("else1",rowsOr[i].parentNode);
      	rowsOr[i].parentNode.insertBefore(rowsOr[i + 1], rowsOr[i]);
      }
      switching = true;
    }
    
  }
					});
					
					
					
				}
				else if($('[data-feature-name^="zeitgeistBadge"]').html()!="undefined")
				{
					$('[data-feature-name^="zeitgeistBadge"]').after(response.html);
					//$("#variationClick").show();
					$("#variationClick").css({'opacity': '1'});
					$("#variationClick").removeAttr("disabled");
					if(typeof response['reviewPer']!="undefined")
					{
						var TotalREviews=response['reviewPer']['newTotal'];
						if(response['reviewPer']['newTotal']!=response['reviewPer']['actualTotal'])
						{
							for (var RPkey in response['reviewPer']['asin']) 
							{
								var reviewPercentage=0;
								reviewPercentage=(response['reviewPer']['asin'][RPkey]/TotalREviews*100);
 								reviewPercentage=reviewPercentage.toFixed(2);
 								reviewPercentage=reviewPercentage+"%";
 								$("#reviewPer_"+RPkey).html(reviewPercentage);
							}
						}
					}
					$("#reviewSort").click(function(){
					if(typeof $(this).find(".downiii").html()!="undefined")
    				{
						$(this).find("iii").removeClass("downiii");
						$(this).find("iii").addClass("upiii");
					}
					else
					{
						$(this).find("iii").removeClass("upiii");
						$(this).find("iii").addClass("downiii");
					}
						var tableOr, rowsOR, switching, i,j, x, y,valcur,valnex,shouldSwitch;
  tableOR = document.getElementById("variationTableID");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  rowsOr = tableOR.rows;
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    for (i = 2; i < (rowsOr.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      x = rowsOr[i].getElementsByTagName("TD")[4];
      y = rowsOr[i + 1].getElementsByTagName("TD")[4];
      valcur=x.innerHTML;
      valnex=y.innerHTML;
      var CurrentValue = Number(valcur.replace(/[^0-9\.]+/g,""));
      var NextValue =  Number(valnex.replace(/[^0-9\.]+/g,""));
      if(typeof $(this).find(".downiii").html()!="undefined")
      {
      	if (CurrentValue >  NextValue) {
        	//if so, mark as a switch and break the loop:
        	shouldSwitch = true;
        	break;
      	}
      }
      else
      {
      		if (CurrentValue <  NextValue) {
        	//if so, mark as a switch and break the loop:
        	shouldSwitch = true;
        	break;
      		}
      }
    }
    if (shouldSwitch) {
      if(typeof $(this).find(".downiii").html()!="undefined")
      {
      	rowsOr[i].parentNode.insertBefore(rowsOr[i + 1], rowsOr[i]);
      }
      else
      {
      	//console.log("else1",rowsOr[i].parentNode);
      	rowsOr[i].parentNode.insertBefore(rowsOr[i + 1], rowsOr[i]);
      }
      switching = true;
    }
    
  }
					});
					
					
					$("#sizeSort").click(function(){
					if(typeof $(this).find(".downiii").html()!="undefined")
    				{
						$(this).find("iii").removeClass("downiii");
						$(this).find("iii").addClass("upiii");
					}
					else
					{
						$(this).find("iii").removeClass("upiii");
						$(this).find("iii").addClass("downiii");
					}
						var tableOr, rowsOR, switching, i,j, x, y,valcur,valnex,shouldSwitch;
  tableOR = document.getElementById("variationTableID");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  rowsOr = tableOR.rows;
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    for (i = 2; i < (rowsOr.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      x = rowsOr[i].getElementsByTagName("TD")[3];
      y = rowsOr[i + 1].getElementsByTagName("TD")[3];
      valcur=x.innerHTML;
      valnex=y.innerHTML;
      var CurrentValue = Number(valcur.replace(/[^0-9\.]+/g,""));
      var NextValue =  Number(valnex.replace(/[^0-9\.]+/g,""));
      if(typeof $(this).find(".downiii").html()!="undefined")
      {
      	if (CurrentValue >  NextValue) {
        	//if so, mark as a switch and break the loop:
        	shouldSwitch = true;
        	break;
      	}
      }
      else
      {
      		if (CurrentValue <  NextValue) {
        	//if so, mark as a switch and break the loop:
        	shouldSwitch = true;
        	break;
      		}
      }
    }
    if (shouldSwitch) {
      if(typeof $(this).find(".downiii").html()!="undefined")
      {
      	rowsOr[i].parentNode.insertBefore(rowsOr[i + 1], rowsOr[i]);
      }
      else
      {
      	//console.log("else1",rowsOr[i].parentNode);
      	rowsOr[i].parentNode.insertBefore(rowsOr[i + 1], rowsOr[i]);
      }
      switching = true;
    }
    
  }
					});
					
					
					$("#priceSort").click(function(){
					if(typeof $(this).find(".downiii").html()!="undefined")
    				{
						$(this).find("iii").removeClass("downiii");
						$(this).find("iii").addClass("upiii");
					}
					else
					{
						$(this).find("iii").removeClass("upiii");
						$(this).find("iii").addClass("downiii");
					}
						var tableOr, rowsOR, switching, i,j, x, y,valcur,valnex,shouldSwitch;
  tableOR = document.getElementById("variationTableID");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  rowsOr = tableOR.rows;
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    for (i = 2; i < (rowsOr.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      x = rowsOr[i].getElementsByTagName("TD")[2];
      y = rowsOr[i + 1].getElementsByTagName("TD")[2];
      valcur=x.innerHTML;
      valnex=y.innerHTML;
      var CurrentValue = Number(valcur.replace(/[^0-9\.]+/g,""));
      var NextValue =  Number(valnex.replace(/[^0-9\.]+/g,""));
      if(typeof $(this).find(".downiii").html()!="undefined")
      {
      	if (CurrentValue >  NextValue) {
        	//if so, mark as a switch and break the loop:
        	shouldSwitch = true;
        	break;
      	}
      }
      else
      {
      		if (CurrentValue <  NextValue) {
        	//if so, mark as a switch and break the loop:
        	shouldSwitch = true;
        	break;
      		}
      }
    }
    if (shouldSwitch) {
      if(typeof $(this).find(".downiii").html()!="undefined")
      {
      	rowsOr[i].parentNode.insertBefore(rowsOr[i + 1], rowsOr[i]);
      }
      else
      {
      	//console.log("else1",rowsOr[i].parentNode);
      	rowsOr[i].parentNode.insertBefore(rowsOr[i + 1], rowsOr[i]);
      }
      switching = true;
    }
    
  }
					});
					
					
					
					
				}
				
				// Get the modal
			var variationModel = document.getElementById("variationModel");

			// Get the button that opens the modal
			var variationClick = document.getElementById("variationClick");

			// Get the <span> element that closes the modal
			var variationModelClass = document.getElementsByClassName("variationModelclose")[0];

			// When the user clicks on the button, open the modal
			variationClick.onclick = function() {
  				variationModel.style.display = "block";
			}

			// When the user clicks on <span> (x), close the modal
			variationModelClass.onclick = function() {
  				variationModel.style.display = "none";
				}

			// When the user clicks anywhere outside of the modal, close it
			/*window.onclick = function(event) {
  				if (event.target == variationModel) {
    				variationModel.style.display = "none";
  				}
			}*/
				/*$("#variationClick").click(function () {
					$('.table-variations').toggle()
                })*/
                $('.nothiddenli').click(function(){
                	$(this).parent().find('.hiddenli').toggle();
                });
                var table = document.getElementById("variationTableID");
  				var tr = table.getElementsByClassName("tblrow");
  				$('[name^="reviewfilter"]').change(function(){

                	if($(this).is(":checked"))
                	{
                		reviewFilterSelect[$(this).val()] = $(this).val();
                	}
                	else
                	{
                		delete reviewFilterSelect[$(this).val()];
                	}
                	
					for (i = 2; i < tr.length; i++) 
  					{
    					var td1 = tr[i].getElementsByTagName("td")[0];
    					var td3 = tr[i].getElementsByTagName("td")[2];
    					var td4 = tr[i].getElementsByTagName("td")[3];
    					var td5 = tr[i].getElementsByTagName("td")[5];
    					var td6 = tr[i].getElementsByTagName("td")[4];
    					console.log("---tr["+i+"]---",tr[i]);
    					if(!$.isEmptyObject(priceFilterSelect) || !$.isEmptyObject(asinFilterSelect) ||!$.isEmptyObject(sizeFilterSelect) || !$.isEmptyObject(colorFilterSelect)  || !$.isEmptyObject(reviewFilterSelect))
    					{
    						var txtValue1 = td1.textContent || td1.innerText;
    						var txtValue3 = td3.textContent || td3.innerText;
    						var txtValue4 = td4.textContent || td4.innerText;
    						var txtValue5 = td5.textContent || td5.innerText;
    						var txtValue6 = td6.textContent || td6.innerText;
    						if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined")
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof colorFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						
    						
    						
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect) && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof colorFilterSelect[txtValue5]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else
    						{
    							tr[i].style.display = "none";
    						}
    					}
    					else
    					{
    						$("#variationTableID").find("tr").show();
    					}
  					}
                });
  				
  				
                $('[name^="pricefilter"]').change(function(){

                	if($(this).is(":checked"))
                	{
                		priceFilterSelect[$(this).val()] = $(this).val();
                	}
                	else
                	{
                		delete priceFilterSelect[$(this).val()];
                	}
					for (i = 2; i < tr.length; i++) 
  					{
    					var td1 = tr[i].getElementsByTagName("td")[0];
    					var td3 = tr[i].getElementsByTagName("td")[2];
    					var td4 = tr[i].getElementsByTagName("td")[3];
    					var td5 = tr[i].getElementsByTagName("td")[5];
    					var td6 = tr[i].getElementsByTagName("td")[4];
    					if(!$.isEmptyObject(priceFilterSelect) || !$.isEmptyObject(asinFilterSelect) ||!$.isEmptyObject(sizeFilterSelect) || !$.isEmptyObject(colorFilterSelect)  || !$.isEmptyObject(reviewFilterSelect))
    					{
    						var txtValue1 = td1.textContent || td1.innerText;
    						var txtValue3 = td3.textContent || td3.innerText;
    						var txtValue4 = td4.textContent || td4.innerText;
    						var txtValue5 = td5.textContent || td5.innerText;
    						var txtValue6 = td6.textContent || td6.innerText;
    						if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined")
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof colorFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						
    						
    						
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect) && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof colorFilterSelect[txtValue5]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else
    						{
    							tr[i].style.display = "none";
    						}
    					}
    					else
    					{
    						$("#variationTableID").find("tr").show();
    					}
  					}
                });
                
                 $('[name^="asinfilter"]').change(function(){
                	if($(this).is(":checked"))
                	{
                		asinFilterSelect[$(this).val()] = $(this).val();
                	}
                	else
                	{
                		delete asinFilterSelect[$(this).val()];
                	}
                	for (i = 2; i < tr.length; i++) 
  					{
  						var td1 = tr[i].getElementsByTagName("td")[0];
    					var td3 = tr[i].getElementsByTagName("td")[2];
    					var td4 = tr[i].getElementsByTagName("td")[3];
    					var td5 = tr[i].getElementsByTagName("td")[5];
    					var td6 = tr[i].getElementsByTagName("td")[4];
    					if(!$.isEmptyObject(priceFilterSelect) || !$.isEmptyObject(asinFilterSelect) ||!$.isEmptyObject(sizeFilterSelect) || !$.isEmptyObject(colorFilterSelect)  || !$.isEmptyObject(reviewFilterSelect))
    					{
    						var txtValue1 = td1.textContent || td1.innerText;
    						var txtValue3 = td3.textContent || td3.innerText;
    						var txtValue4 = td4.textContent || td4.innerText;
    						var txtValue5 = td5.textContent || td5.innerText;
    						var txtValue6 = td6.textContent || td6.innerText;
    						if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined")
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof colorFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						
    						
    						
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect) && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof colorFilterSelect[txtValue5]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else
    						{
    							tr[i].style.display = "none";
    						}
    					}
    					else
    					{
    						$("#variationTableID").find("tr").show();
    					}
    					}
                });
                
                $('[name^="sizefilter"]').change(function(){
                	if($(this).is(":checked"))
                	{
                		sizeFilterSelect[$(this).val()] = $(this).val();
                	}
                	else
                	{
                		delete sizeFilterSelect[$(this).val()];
                	}
                	for (i = 2; i < tr.length; i++) 
  					{
  						var td1 = tr[i].getElementsByTagName("td")[0];
    					var td3 = tr[i].getElementsByTagName("td")[2];
    					var td4 = tr[i].getElementsByTagName("td")[3];
    					var td5 = tr[i].getElementsByTagName("td")[5];
    					var td6 = tr[i].getElementsByTagName("td")[4];
    					if(!$.isEmptyObject(priceFilterSelect) || !$.isEmptyObject(asinFilterSelect) ||!$.isEmptyObject(sizeFilterSelect) || !$.isEmptyObject(colorFilterSelect)  || !$.isEmptyObject(reviewFilterSelect))
    					{
    						var txtValue1 = td1.textContent || td1.innerText;
    						var txtValue3 = td3.textContent || td3.innerText;
    						var txtValue4 = td4.textContent || td4.innerText;
    						var txtValue5 = td5.textContent || td5.innerText;
    						var txtValue6 = td6.textContent || td6.innerText;
    						if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined")
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof colorFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						
    						
    						
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect) && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof colorFilterSelect[txtValue5]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else
    						{
    							tr[i].style.display = "none";
    						}
    					}
    					else
    					{
    						$("#variationTableID").find("tr").show();
    					}
    					}
                });
                
                 $('[name^="colorfilter"]').change(function(){
                	if($(this).is(":checked"))
                	{
                		colorFilterSelect[$(this).val()] = $(this).val();
                	}
                	else
                	{
                		delete colorFilterSelect[$(this).val()];
                	}
                	for (i = 2; i < tr.length; i++) 
  					{
  						var td1 = tr[i].getElementsByTagName("td")[0];
    					var td3 = tr[i].getElementsByTagName("td")[2];
    					var td4 = tr[i].getElementsByTagName("td")[3];
    					var td5 = tr[i].getElementsByTagName("td")[5];
    					var td6 = tr[i].getElementsByTagName("td")[4];
    					if(!$.isEmptyObject(priceFilterSelect) || !$.isEmptyObject(asinFilterSelect) ||!$.isEmptyObject(sizeFilterSelect) || !$.isEmptyObject(colorFilterSelect)  || !$.isEmptyObject(reviewFilterSelect))
    					{
    						var txtValue1 = td1.textContent || td1.innerText;
    						var txtValue3 = td3.textContent || td3.innerText;
    						var txtValue4 = td4.textContent || td4.innerText;
    						var txtValue5 = td5.textContent || td5.innerText;
    						var txtValue6 = td6.textContent || td6.innerText;
    						if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined")
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof colorFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"   && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						
    						
    						
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined"  && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined"  && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof priceFilterSelect[txtValue3]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect) && $.isEmptyObject(sizeFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(reviewFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof colorFilterSelect[txtValue5]!="undefined" && typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(priceFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						
    						
    						
    						
    						
    						else if(typeof asinFilterSelect[txtValue1]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof priceFilterSelect[txtValue3]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof sizeFilterSelect[txtValue4]!="undefined" && $.isEmptyObject(colorFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof colorFilterSelect[txtValue5]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(reviewFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else if(typeof reviewFilterSelect[txtValue6]!="undefined" && $.isEmptyObject(sizeFilterSelect) && $.isEmptyObject(asinFilterSelect) && $.isEmptyObject(priceFilterSelect) && $.isEmptyObject(colorFilterSelect))
    						{
    							tr[i].style.display = "";
    						}
    						else
    						{
    							tr[i].style.display = "none";
    						}
    					}
    					else
    					{
    						$("#variationTableID").find("tr").show();
    					}
    					
    					}
                });
                
                
			});
			
			}
			
			},1000);
})

function isJSON (something) {
    if (typeof something != 'string')
        something = JSON.stringify(something);

    try {
        JSON.parse(something);
        return true;
    } catch (e) {
        return false;
    }
}
function getReviewCall(VariationsASINS1,ReviewHistory,RegionNewAdded,Rkey,PreviewTotal)
{
	chrome.runtime.sendMessage({
   											method: 'POST',
    										FunctionCall: 'ReviewHistoryNew',
    										Region: RegionNewAdded,
    										mainAsin:Rkey,
    										ReviewHistory: ReviewHistory,
    										VariationsAsin: VariationsASINS1,
    										PreviewTotal: PreviewTotal,
    										dataType: 'json',
    										url: 'https://admin.fbamultitool.com/keepa/variations.php?marketplace='+RegionNewAdded+'&asin='+ Rkey
											}, 
											function(responseVar) 
											{
												responseVar=JSON.parse(responseVar);
												if(responseVar.status=="yes")
												{
													$("#reviewHistory_"+responseVar.asin).html(responseVar.html);
													$("#reviewPer_"+responseVar.asin).html(responseVar.per+"%");
													$("#TotalReviews_"+responseVar.asin).html(responseVar.total);
												}
											});
}