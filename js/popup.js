// Improving storage
// Improving storage




// Improving storage


var valicenseKey="";
function getRandomTokenPopup() {
 function chr4Popup(){
    return Math.random().toString(16).slice(-4);
  }
  return chr4Popup() + chr4Popup() +
    '-' + chr4Popup() +
    '-' + chr4Popup() +
    '-' + chr4Popup() +
    '-' + chr4Popup() + chr4Popup() + chr4Popup();
}
chrome.storage.sync.get(["licenseKey","TrackPostalCode"],function(va){
if(typeof va.licenseKey !='undefined' && va.licenseKey!='null' && va.licenseKey.trim()!="")
{
	valicenseKey=va.licenseKey;
	$(".menulistj").show();
	$(".messagelicense").hide();
}
if(typeof va.TrackPostalCode !='undefined' && va.TrackPostalCode!='null' && va.TrackPostalCode.trim()!="")
{
	$("#TrackPostalCode").val(va.TrackPostalCode);
}
})
document.addEventListener('DOMContentLoaded', function () {
		chrome.storage.sync.get(["licenseKey"],function(va){
if(typeof va.licenseKey !='undefined' && va.licenseKey!='null' && va.licenseKey.trim()!="")
{
	valicenseKey=va.licenseKey;
}
})
		chrome.storage.sync.get(["vaname","vaemail","licenseKey"],function(va){
if(typeof va.licenseKey !='undefined' && va.licenseKey!='null' && va.licenseKey.trim()!="")
{
	valicenseKey=va.licenseKey;
}
})
$("#recentSitesMenuItem").click(function(){
    chrome.runtime.sendMessage({ 'name': 'options' });
  });
  $("#identitiesMenuItem").click(function(){
  $(".loading").show();
  chrome.windows.getCurrent(function(w) {
    chrome.tabs.getSelected(w.id,
    function (responseurl){
        if($("#TrackPostalCode").val().trim()!="")
        {
        	chrome.storage.sync.set({ 'TrackPostalCode': $("#TrackPostalCode").val()});
        }
        if(!responseurl.url.includes("argos.co.uk") || (responseurl.url.includes("argos.co.uk") && $("#TrackPostalCode").val().trim()!=""))
        {
         chrome.runtime.sendMessage({
   			method: 'POST',
    		FunctionCall: 'TrackProductURL',
    		data: {
          		pageUrl: responseurl.url,
				LicenseKey: valicenseKey,
				Price: 0,
				PostalCode: $("#TrackPostalCode").val(),
				FunctionCall: 'TrackProductURL',
        		},
    		dataType: 'json',
    		url: ''
			}, function(response) {
			if(response.status=="success")
			{
				chrome.tabs.getSelected(null, function(tab) 
						{
  							chrome.tabs.sendRequest(tab.id, {action: "getDOM",messagetoshow: response.message}, function(response) 
  							{
  								$(".loading").hide();
  							});
						});
			}
			else
			{
					chrome.tabs.getSelected(null, function(tab) 
						{
  							chrome.tabs.sendRequest(tab.id, {action: "getDOM",messagetoshow: response.message}, function(response) 
  							{
  								$(".loading").hide();
  							});
						});
			}
			$(".ParentDiv").show();
  			$("#childViews").hide();
			})
		}
		else
		{
			chrome.tabs.getSelected(null, function(tab) 
						{
  							chrome.tabs.sendRequest(tab.id, {action: "getDOM",messagetoshow: "Please Enter Postal Code"}, function(response) 
  							{
  							});
						});
		}
			
    });
});
  });
  $("#favoritesMenuItem").click(function(){
  if($("#TrackPrice").val().trim()!="")
  {
  		$(".loading").show();
  		 chrome.windows.getCurrent(function(w) {
    chrome.tabs.getSelected(w.id,
    function (responseurl){
        if($("#TrackPostalCode").val().trim()!="")
        {
        	chrome.storage.sync.set({ 'TrackPostalCode': $("#TrackPostalCode").val()});
        }
        if(!responseurl.url.includes("argos.co.uk") || (responseurl.url.includes("argos.co.uk") && $("#TrackPostalCode").val().trim()!=""))
        {
         chrome.runtime.sendMessage({
   			method: 'POST',
    		FunctionCall: 'TrackProductURL',
    		data: {
          		pageUrl: responseurl.url,
				LicenseKey: valicenseKey,
				PostalCode: $("#TrackPostalCode").val(),
				Price: $("#TrackPrice").val(),
				FunctionCall: 'TrackProductURL',
        		},
    		dataType: 'json',
    		url: ''
			}, function(response) {
			if(response.status=="success")
			{
				chrome.tabs.getSelected(null, function(tab) 
						{
  							chrome.tabs.sendRequest(tab.id, {action: "getDOM",messagetoshow: response.message}, function(response) 
  							{
  								$(".loading").hide();
  							});
						});
			}
			else
			{
					chrome.tabs.getSelected(null, function(tab) 
						{
  							chrome.tabs.sendRequest(tab.id, {action: "getDOM",messagetoshow: response.message}, function(response) 
  							{
  								$(".loading").hide();
  							});
						});
			}
			$(".ParentDiv").show();
  			$("#childViews").hide();
			})
		}
		else
		{
			chrome.tabs.getSelected(null, function(tab) 
						{
  							chrome.tabs.sendRequest(tab.id, {action: "getDOM",messagetoshow: "Please Enter Postal Code"}, function(response) 
  							{
  							});
						});
		}
    });
});
  }
  else
  {
  		chrome.tabs.getSelected(null, function(tab) 
						{
  							chrome.tabs.sendRequest(tab.id, {action: "getDOM",messagetoshow: "Please Enter Price"}, function(response) 
  							{
  							});
						});
  }
  });
  $("#allItemsMenuItem").click(function(){
  $(".ParentDiv").hide();
  $("#childViews").show();
  $(".footer").show();
  //alert("hi");
  //console.log($(location).attr('href'));//return false;
  /*chrome.windows.getCurrent(function(w) {
    chrome.tabs.getSelected(w.id,
    function (responseurl){
        console.log(responseurl);
         chrome.runtime.sendMessage({
   			method: 'POST',
    		FunctionCall: 'TrackProductURL',
    		data: {
          		pageUrl: responseurl.url,
				LicenseKey: valicenseKey,
				FunctionCall: 'TrackProductURL',
        		},
    		dataType: 'json',
    		url: ''
			}, function(response) {
			console.log(response);
			})
    });
});*/
   
  });
  $("#backButton").click(function(){
   $(".ParentDiv").show();
  $("#childViews").hide();
  })
$("#PopupLicenseSubmit").click(function(){

if($("#LicensePopupInput").val().trim()!="")
{
	$(".loading").show();
	var randomKey=getRandomTokenPopup();
      chrome.runtime.sendMessage({
   			method: 'POST',
    		action: 'license',
    		dataType: 'json',
    		url: 'https://admin.fbamultitool.com/license/index.php',
    		data: {
          		licensekey: $("#LicensePopupInput").val()+"__"+randomKey,
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
						chrome.storage.sync.set({'licenseKey': $("#LicensePopupInput").val()+"__"+randomKey});
						var now = new Date().getTime();
    					valicenseKey=$("#LicensePopupInput").val()+"__"+randomKey;
    					chrome.storage.sync.set({ "licenseDateCheck": now });
						chrome.storage.sync.set({ "licensecheck": "success" });
          				var asin = '';
          				var gotthat=false;
          				$(".menulistj").show();
						$(".messagelicense").hide();
					}
					else
					{
          				chrome.tabs.getSelected(null, function(tab) 
						{
  							chrome.tabs.sendRequest(tab.id, {action: "getDOM",messagetoshow: response.requestmessage}, function(response) 
  							{
  							});
						});
					}
				}
				else
				{
					chrome.tabs.getSelected(null, function(tab) 
						{
  							chrome.tabs.sendRequest(tab.id, {action: "getDOM",messagetoshow: "Error Occured. Please Re-enter License Code OR Try Reinstalling App"}, function(response) 
  							{
  							});
						});
				}
				$(".loading").hide();
				});
			}
			else
			{
				chrome.tabs.getSelected(null, function(tab) 
						{
  							chrome.tabs.sendRequest(tab.id, {action: "getDOM",messagetoshow: "Please Enter License Code"}, function(response) 
  							{
  							});
						});
				
			}
			});
      
  if(valicenseKey.trim()=="")
{
	console.log($(".menulistj"));
	$(".menulistj").hide();
	$(".messagelicense").show();
}
});
$(document).ready(function(){
if(valicenseKey.trim()=="")
{
	$(".menulistj").hide();
	$(".messagelicense").show();
}
else
{
	$(".menulistj").show();
	$(".messagelicense").hide();
}
})
var logoURL = chrome.extension.getURL('img/logo.svg');
$(".restriction-wizard-logo").attr("src",logoURL);
	



var startTimer=0;
