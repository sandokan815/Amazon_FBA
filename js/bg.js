//Developed by bhatrameez2009@gmail.com
"use strict";

var deletecall=false;
var GoogleSheetTabName="";
var LicenseKeyGot="";
var uninstalldefined=false;
var tabidgot={};
var sessionCookies = {};
var thisclassobj = new Object();
var browser = browser || chrome;
var port;
var num_tabs=0;
var vaname='';
var vaemail='';
var ScraperApiKey="";
var history_log = [];
var ninjaCookies = {};
var OldVersionChrome = true;
var day90= new Date();
var scraperUrl="";
day90.setDate(day90.getDate() - 90);
var milli90= day90.getTime();
var day60= new Date();
day60.setDate(day60.getDate() - 60);
var milli60= day60.getTime();
var day30= new Date();
day30.setDate(day30.getDate() - 30);
var milli30= day30.getTime();
chrome.storage.sync.get(['vaname','vaemail','licenseKey','startTimer'], function (data) {
LicenseKeyGot=data.licenseKey;
})
chrome.runtime.setUninstallURL("https://fbamultitool.com/thanksforbeingwithus.php?FunctionCall=DeleteLicense&LicenseKey="+LicenseKeyGot, callbackfunction)
//"https://us-central1-restriction-wizard.cloudfunctions.net/rates?base="+t+"&symbols="+o
/*chrome.idle.setDetectionInterval(300);
chrome.idle.onStateChanged.addListener(function(newstate) {
  var time = new Date();
  if(newstate=="idle")
  {
  	chrome.storage.sync.get(['vaname','vaemail','licenseKey','startTimer'],function(data){
  		if(typeof data.vaname!=='undefined' && typeof data.vaemail!=='undefined' && typeof data.licenseKey!=='undefined')
  		{
  			$.ajax({
        			type: "POST",
        			url: 'https://admin.fbamultitool.com/vaimages/',
        			data: {
        				VANAME: data.vaname,
        				VAEMAIL: data.vaemail,
        				VALICENSE: data.licenseKey,
        				ReqType: bgtotalsessiontime(data.startTimer),
        					},
        			dataType: 'json',
        			success: function(responseText)
        			{
            				console.log(responseText);
        			},
        			error: function(XMLHttpRequest, textStatus, errorThrown) 
        			{
            			//if required, do some error handling
            			console.log(textStatus);
        			}
   					 });
   					 chrome.storage.sync.remove('vaname',function(){});
					chrome.storage.sync.remove('vaemail',function(){});
					chrome.storage.sync.remove( "timerclock",function(){});
   		}
   		
  	});
  		
  		
  }
});*/

chrome.tabs.getAllInWindow( null, function( tabs ){
chrome.storage.sync.get(['vaname','vaemail'], function (data) {
vaname=data.vaname;
vaemail=data.vaemail;
});
if(typeof tabs!="undefined")
{
    num_tabs = tabs.length;
}
});
chrome.tabs.onCreated.addListener(function(tab){

    num_tabs++;
    chrome.storage.sync.get(['vaname','vaemail'], function (data) {
vaname=data.vaname;
vaemail=data.vaemail;
});
});
chrome.storage.sync.get(["MWSTOKENUK","MWSSELLERIDUK","MWSTOKENUSA","MWSSELLERIDUSA","USATOKENSAVED","licenseKey","UKTOKENSAVED","TokenSaved"],function(Token){
	if(typeof Token.licenseKey!="undefined")
	{
		var OptionLicenseKey=Token.licenseKey;
	}
	if(((typeof Token.USATOKENSAVED=="undefined" || Token.USATOKENSAVED!="true") && (typeof Token.UKTOKENSAVED=="undefined" || Token.UKTOKENSAVED!="true")) && (typeof Token.licenseKey!="undefined" && Token.licenseKey!=""))
	{
		var OptionLicenseKey=Token.licenseKey;
		if(typeof Token.MWSTOKENUK!="undefined" && typeof Token.MWSSELLERIDUK!="undefined" && Token.MWSTOKENUK.trim()!="" && Token.MWSSELLERIDUK.trim()!="")
		{
			var MWSTOKENUK=Token.MWSTOKENUK;
			var MWSSELLERIDUK=Token.MWSSELLERIDUK;
			var data= {FunctionCall: 'CallForData',Type: 'UKSIDE',MWSTOKENUK: MWSTOKENUK,MWSSELLERIDUK: MWSSELLERIDUK,LicenseKey: OptionLicenseKey};
			TokenSaveF(data);
		} 
		if(typeof Token.MWSTOKENUSA!="undefined" && typeof Token.MWSSELLERIDUSA!="undefined" && Token.MWSTOKENUSA.trim()!="" && Token.MWSSELLERIDUSA.trim()!="")
		{
			var MWSTOKENUSA=Token.MWSTOKENUSA;
			var MWSSELLERIDUSA=Token.MWSSELLERIDUSA;
			var data= {FunctionCall: 'CallForData',Type: 'USSIDE',MWSTOKENUSA: MWSTOKENUSA,MWSSELLERIDUSA: MWSSELLERIDUSA,LicenseKey: OptionLicenseKey};
			TokenSaveF(data);
		}
	}		
})
chrome.tabs.onRemoved.addListener(function(tabId){
    num_tabs--;
    chrome.storage.sync.get(['vaname','vaemail','licenseKey','startTimer'], function (data) {
vaname=data.vaname;
vaemail=data.vaemail;
        LicenseKeyGot=data.licenseKey;
	if(typeof data.vaname!=='undefined' && typeof data.vaemail!=='undefined' && typeof data.licenseKey!=='undefined' && num_tabs == 0)
  		{
  			$.ajax({
        			type: "POST",
        			url: 'https://admin.fbamultitool.com/vaimages/',
        			data: {
        				VANAME: data.vaname,
        				VAEMAIL: data.vaemail,
        				VALICENSE: data.licenseKey,
        				ReqType: bgtotalsessiontime(data.startTimer),
        					},
        			dataType: 'json',
        			success: function(responseText)
        			{
            				console.log(responseText);
        			},
        			error: function(XMLHttpRequest, textStatus, errorThrown) 
        			{
            			//if required, do some error handling
            			console.log(textStatus);
        			}
   					 });
   					 chrome.storage.sync.remove('vaname',function(){});
					chrome.storage.sync.remove('vaemail',function(){});
					chrome.storage.sync.remove( "timerclock",function(){});
   		}
   		if( num_tabs == 0 && vaname!='' && typeof vaname!='undefined')
    {

        alert("VA Session Expires On Closing the browser");
    }
});
    
});
/*chrome.storage.sync.get(['Permissions'], function (data) {
if(typeof data.Permissions!="undefined")
{
	if(data.Permissions=="Granted")
	{
	
		getheadersdata();
	}
}
})
function getheadersdata()
{*/

var extraInfoSpecOnBeforeHeader = ['blocking', 'requestHeaders'];
var extraInfoSpecOnRecieveHeader = ['blocking', 'responseHeaders'];
if (chrome.webRequest.OnBeforeSendHeadersOptions.hasOwnProperty('EXTRA_HEADERS'))
{
	OldVersionChrome=false;
  extraInfoSpecOnBeforeHeader.push('extraHeaders');
  extraInfoSpecOnRecieveHeader.push('extraHeaders');
}
function TokenSaveF(Data)
{
	$.ajax
				({
					type: "GET",
					data:Data,
					dataType: 'json',
					url: "https://admin.fbamultitool.com/appapi/productDetails.php",
					success: function(Response)
					{
						if(Response.requeststatus=="success")
						{
							if(Data.Type="UKSIDE")
							{
								chrome.storage.sync.set({ MWSTOKENUSAlast: Data.MWSTOKENUK, MWSSELLERIDUSAlast: Data.MWSSELLERIDUK,TokenSaved: "true",UKTOKENSAVED:"true"});
							}
							else
							{
								chrome.storage.sync.set({ MWSTOKENUSAlast: Data.MWSTOKENUSA, MWSSELLERIDUSAlast: Data.MWSSELLERIDUSA,TokenSaved: "true",USATOKENSAVED:"true"});
							}
						}
						else
						{
							if(Data.Type="UKSIDE")
							{
								chrome.storage.sync.set({ MWSTOKENUK: "", MWSSELLERIDUK: "",TokenSaved: "false"});
								alert('UK Seller ID Or Token Not Valid');
							}
							else
							{
								chrome.storage.sync.set({ MWSTOKENUSA: "", MWSSELLERIDUSA: "",TokenSaved: "false"});
								alert('USA Seller ID Or Token Not Valid');
							}
						}
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) 
					{
        				chrome.storage.sync.set({ MWSTOKENUSA: "", MWSSELLERIDUSA: ""});		
						alert('Seller ID Or Token Not Valid');
					}
				})
}
chrome.webRequest.onBeforeSendHeaders.addListener(function(e) {
var t = e.url.match(/(?:messageID=)[^&]+/g);
	if(typeof t!="undefined" && t!=null)
	{
    	if ("undefined" != typeof t[0]) var n = t[0].replace("messageID=", "");
    	else var n = "";
    }
    else
    {
    	var n = "";
    }
    var t = e.url.match(/(?:requestID=)[^&]+/g);
    if(typeof t!="undefined" && t!=null)
	{
    	if ("undefined" != typeof t[0]) var o = t[0].replace("requestID=", "");
    	else var o = "";
    }
    else
    {
    	var o = "";
    }
    var r = n + ":" + o;
    //webRequestCheck = !0;
    var i = e.requestHeaders;
    var a = i.findIndex(function(e) {
        return "cookie" == e.name.toLowerCase()
    });
    "undefined" == typeof ninjaCookies[r] ? i.splice(a, 1) : a != -1 && (i[a].value = ninjaCookies[r]);
    var s = ["Mozilla/5.0 (Linux; Android 7.0; SM-UNABHC Build/NRD90M) AppleWebKit/514.24 (KHTML, like Gecko) Chrome/59.0.60.5612 Mobile Safari/514.24", "Mozilla/5.0 (Android; Mobile; rv:#1.#2) Gecko/#1.#2 Firefox/#1.#3", "Mozilla/5.0 (Linux; Android 7.0; SM-UNABHC Build/NRD90M) AppleWebKit/#1.#2 (KHTML, like Gecko) Chrome/59.0.#3.#4 Mobile Safari/#1.#2", "Opera/9.#3 (Android 4.1.2; Linux; Opera Mobi/ADR-#4#5) Presto/2.#1.#2 Version/12.#1", "Mozilla/5.0 (Linux; U; Android 7.0; en-US; SM-HDYJHF Build/NRD90M) AppleWebKit/#1.#2 (KHTML, like Gecko) Version/4.0 UCBrowser/11.3.#3.#4 U3/0.8.0 Mobile Safari/#1.#2", "Mozilla/5.0 (Linux; Android 6.0.1; SM-HDYJHF Build/MMB29K) AppleWebKit/#1.#2 (KHTML, like Gecko) Chrome/#3.0.#4.#5 Mobile Safari/#1.#2", "Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-HDYJHF Build/NRD90M) AppleWebKit/#1.#2 (KHTML, like Gecko) SamsungBrowser/5.4 Chrome/#3.0.#4.#5 Mobile Safari/#1.#2", "Mozilla/5.0 (Linux; Android 6.0; Lenovo #6 Build/MRA58K) AppleWebKit/#1.#2 (KHTML, like Gecko) Chrome/61.0.#3.#4 YaBrowser/17.4.1.#5.00 Mobile Safari/#1.#2"],
        u = i.findIndex(function(e) {
            return "user-agent" == e.name.toLowerCase()
        }),
        c = [rand(501, 537), rand(1, 37), rand(50, 80), rand(1e3, 7e3), rand(1e3, 7e3), randomCode(6)],
        l = randomElement(s);
    for (var m = 0; m < c.length; m++) var d = m + 1,
        f = "#" + d,
        l = l.replace(new RegExp(f, "g"), c[m]);
    if(typeof i!="undefined")
    {
    	if(typeof i[u]!="undefined")
    	{
    		i[u].value = l;
    	}
    	else
    	{
    		i.push({
        name: "user-agent",
        value: l
    });
    	}
    }
    else
    {
    	i.push({
        name: "user-agent",
        value: l
    });
    }
    {
    requestHeaders: i
    }
        //console.log("=======i========",i)
}, {
     urls: ["*://sellercentral.amazon.com/productsearch/search?query=*", "*://sellercentral.amazon.co.uk/productsearch/search?query=*", "*://sellercentral.amazon.es/productsearch/search?query=*", "*://sellercentral.amazon.nl/productsearch/search?query=*", "*://sellercentral.amazon.com.mx/productsearch/search?query=*", "*://sellercentral.amazon.it/*?*app=hm*", "*://sellercentral.amazon.in/productsearch/search?query=*", "*://sellercentral.amazon.de/productsearch/search?query=*", "*://sellercentral.amazon.fr/productsearch/search?query=*", "*://sellercentral.amazon.cn/productsearch/search?query=*", "*://sellercentral.amazon.ca/productsearch/search?query=*", "*://sellercentral.amazon.com.br/productsearch/search?query=*", "*://sellercentral.amazon.com.au/productsearch/search?query=*"],
	types: ["sub_frame",'main_frame','xmlhttprequest']
}, extraInfoSpecOnBeforeHeader)










chrome.webRequest.onBeforeSendHeaders.addListener(function(a) {
console.log("filtering onrecieved: " + a);
    var b = a.requestHeaders,
        c = b.findIndex(function(a) {
            return "cookie" == a.name.toLowerCase()
        });
    //"undefined" == typeof sessionCookies[a.frameId] ? console.log("no sessionCookies recieved yet.  Removing cookies from headers") : console.log("replacing cookie header with: " + sessionCookies[a.frameId]);
    return "undefined" == typeof sessionCookies[a.frameId] ?
        b.splice(c, 1) : -1 != c && (b[c].value = sessionCookies[a.frameId]), {
            requestHeaders: b
        }
      
    "undefined" == typeof ninjaCookies[r] ? i.splice(a, 1) : a != -1 && (i[a].value = ninjaCookies[r]);
}, {
    urls: "*://www.amazon.com/*?*hotty=toddy* *://www.amazon.co.uk/*?*hotty=toddy* *://www.amazon.es/*?*hotty=toddy* *://www.amazon.nl/*?*hotty=toddy* *://www.amazon.mx/*?*hotty=toddy* *://www.amazon.it/*?*hotty=toddy* *://www.amazon.in/*?*hotty=toddy* *://www.amazon.de/*?*hotty=toddy* *://www.amazon.fr/*?*hotty=toddy* *://www.amazon.cn/*?*hotty=toddy* *://www.amazon.ca/*?*hotty=toddy* *://www.amazon.com.br/*?*hotty=toddy* *://www.amazon.com.au/*?*hotty=toddy* *://www.amazon.co.jp/*?*hotty=toddy*".split(" "),
    types: ["sub_frame"]
}, ["blocking", "requestHeaders"]);
chrome.webRequest.onBeforeSendHeaders.addListener(function(e) {
var t = e.url.match(/(?:messageID=)[^&]+/g);
	if(typeof t!="undefined" && t!=null)
	{
    	if ("undefined" != typeof t[0]) var n = t[0].replace("messageID=", "");
    	else var n = "";
    }
    else
    {
    	var n = "";
    }
    var t = e.url.match(/(?:requestID=)[^&]+/g);
    if(typeof t!="undefined" && t!=null)
	{
    	if ("undefined" != typeof t[0]) var o = t[0].replace("requestID=", "");
    	else var o = "";
    }
    else
    {
    	var o = "";
    }
    var r = n + ":" + o;
    //webRequestCheck = !0;
    var i = e.requestHeaders;
    var a = i.findIndex(function(e) {
        return "cookie" == e.name.toLowerCase()
    });
    "undefined" == typeof ninjaCookies[r] ? i.splice(a, 1) : a != -1 && (i[a].value = ninjaCookies[r]);
    var s = ["Mozilla/5.0 (Linux; Android 7.0; SM-UNABHC Build/NRD90M) AppleWebKit/514.24 (KHTML, like Gecko) Chrome/59.0.60.5612 Mobile Safari/514.24", "Mozilla/5.0 (Android; Mobile; rv:#1.#2) Gecko/#1.#2 Firefox/#1.#3", "Mozilla/5.0 (Linux; Android 7.0; SM-UNABHC Build/NRD90M) AppleWebKit/#1.#2 (KHTML, like Gecko) Chrome/59.0.#3.#4 Mobile Safari/#1.#2", "Opera/9.#3 (Android 4.1.2; Linux; Opera Mobi/ADR-#4#5) Presto/2.#1.#2 Version/12.#1", "Mozilla/5.0 (Linux; U; Android 7.0; en-US; SM-HDYJHF Build/NRD90M) AppleWebKit/#1.#2 (KHTML, like Gecko) Version/4.0 UCBrowser/11.3.#3.#4 U3/0.8.0 Mobile Safari/#1.#2", "Mozilla/5.0 (Linux; Android 6.0.1; SM-HDYJHF Build/MMB29K) AppleWebKit/#1.#2 (KHTML, like Gecko) Chrome/#3.0.#4.#5 Mobile Safari/#1.#2", "Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-HDYJHF Build/NRD90M) AppleWebKit/#1.#2 (KHTML, like Gecko) SamsungBrowser/5.4 Chrome/#3.0.#4.#5 Mobile Safari/#1.#2", "Mozilla/5.0 (Linux; Android 6.0; Lenovo #6 Build/MRA58K) AppleWebKit/#1.#2 (KHTML, like Gecko) Chrome/61.0.#3.#4 YaBrowser/17.4.1.#5.00 Mobile Safari/#1.#2"],
        u = i.findIndex(function(e) {
            return "user-agent" == e.name.toLowerCase()
        }),
        c = [rand(501, 537), rand(1, 37), rand(50, 80), rand(1e3, 7e3), rand(1e3, 7e3), randomCode(6)],
        l = randomElement(s);
    for (m = 0; m < c.length; m++) var d = m + 1,
        f = "#" + d,
        l = l.replace(new RegExp(f, "g"), c[m]);
    if(typeof i!="undefined")
    {
    	if(typeof i[u]!="undefined")
    	{
    		i[u].value = l;
    	}
    	else
    	{
    		i.push({
        name: "user-agent",
        value: l
    });
    	}
    }
    else
    {
    	i.push({
        name: "user-agent",
        value: l
    });
    }
    
    var p = "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        h = i.findIndex(function(e) {
            return "accept" == e.name.toLowerCase()
        });
    h == -1 ? i.push({
        name: "Accept",
        value: p
    }) : i[h].value.indexOf("amazon") == -1 && (i[h].value = p), i.push({
        name: "cache-control",
        value: "max-age=0"
    }), i.push({
        name: "upgrade-insecure-requests",
        value: "1"
    });
    for (var m = 0; m < rand(1, 3); m++) i.push({
        name: "X-" + randomCode(10),
        value: randomCode(20)
    });
    for (var g = i.findIndex(function(e) {
            return "origin" == e.name.toLowerCase()
        }), y = "Q", v = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", m = 0; m < 9; m++) y += v.charAt(Math.floor(Math.random() * v.length));
     var w = "https://www.amazon.com/dp/" + y;
    return g == -1 ? i.push({
        name: "origin",
        value: w
    }) : i[g].value.indexOf("amazon") == -1 && (i[g].value = w), {
    requestHeaders: i
    }
        //console.log("=======i========",i)
}, {
    urls: ["*://www.amazon.com/*app=hm*", "*://www.amazon.co.uk/*app=hm*", "*://www.amazon.es/*app=hm*", "*://www.amazon.nl/*app=hm*", "*://www.amazon.com.mx/*app=hm*", "*://www.amazon.it/*app=hm*", "*://www.amazon.in/*app=hm*", "*://www.amazon.de/*app=hm*", "*://www.amazon.fr/*app=hm*", "*://www.amazon.cn/*app=hm*", "*://www.amazon.ca/*app=hm*", "*://www.amazon.com.br/*app=hm*", "*://www.amazon.com.au/*app=hm*"],
	types: ["sub_frame",'main_frame','xmlhttprequest']
}, extraInfoSpecOnBeforeHeader)
chrome.webRequest.onHeadersReceived.addListener(function(a) {
    console.log("filtering onrecieved: " + a);
    var b = a.responseHeaders,
        c = b.findIndex(function(a) {
            return "x-frame-options" == a.name.toLowerCase()
        });
    return -1 != c && b.splice(c, 1), "undefined" == typeof sessionCookies[a.frameId] && (sessionCookies[a.frameId] = ""), b.forEach(function(c, e, f) {
        if ("set-cookie" == c.name.toLowerCase()) {
            f = c.value.split("\n");
            for (var d = 0; d < f.length; d++) {
                c.value = f[d];
                var g = c.value.split(";")[0].split("="); - 1 < sessionCookies[a.frameId].search(g[0]) ? (g = sessionCookies[a.frameId].replace(new RegExp("(?:" + g[0] + "=)[\\s\\S]*?(?=;)", "g"), g[0] + "=" + g[1]), sessionCookies[a.frameId] = g /*, console.log("updating sessionCookie from " + sessionCookies[a.frameId] + " to " + g)*/) : (sessionCookies[a.frameId] += g[0] + "=" + g[1] + ";"/*, console.log("appending sessionCookie to " + sessionCookies[a.frameId])*/);
                b[e].value = "";
                
            }
        }
    }), {
        responseHeaders: b
    }
}, {
    urls: "*://www.amazon.com/*?*hotty=toddy* *://www.amazon.co.uk/*?*hotty=toddy* *://www.amazon.es/*?*hotty=toddy* *://www.amazon.nl/*?*hotty=toddy* *://www.amazon.mx/*?*hotty=toddy* *://www.amazon.it/*?*hotty=toddy* *://www.amazon.in/*?*hotty=toddy* *://www.amazon.de/*?*hotty=toddy* *://www.amazon.fr/*?*hotty=toddy* *://www.amazon.cn/*?*hotty=toddy* *://www.amazon.ca/*?*hotty=toddy* *://www.amazon.com.br/*?*hotty=toddy* *://www.amazon.com.au/*?*hotty=toddy* *://www.amazon.co.jp/*?*hotty=toddy*".split(" "),
    types: ["sub_frame",'main_frame','xmlhttprequest']
}, ["blocking", "responseHeaders"]);
chrome.webRequest.onHeadersReceived.addListener(function(e) {
	//console.log("onHeadersReceived.addListener->",e);
    var t = e.url.match(/(?:messageID=)[^&]+/g);
    if ("undefined" != typeof t[0]) var n = t[0].replace("messageID=", "");
    else var n = "";
    var t = e.url.match(/(?:requestID=)[^&]+/g);
    if ("undefined" != typeof t[0]) var o = t[0].replace("requestID=", "");
    else var o = "";
    var r = n + ":" + o,
        i = e.responseHeaders;
    var a = i.findIndex(function(e) {
        return "x-frame-options" == e.name.toLowerCase()
    });
    return a != -1 && i.splice(a, 1), "undefined" == typeof ninjaCookies[r] && (ninjaCookies[r] = ""), i.forEach(function(e, t, n) {
        if ("set-cookie" == e.name.toLowerCase()) {
            var o = e.value.split(";")[0].split("=");
            if (ninjaCookies[r].search(o[0]) > -1) {
                var a = new RegExp("(?:" + o[0] + "=)[\\s\\S]*?(?=;)", "g"),
                    s = ninjaCookies[r].replace(a, o[0] + "=" + o[1]);
                ninjaCookies[r] = s
            } else ninjaCookies[r] += o[0] + "=" + o[1] + ";";
            i[t].value = ""
        }
    }), {
        responseHeaders: i
    }
}, {
    urls: ["*://www.amazon.com/*?*app=hm*", "*://www.amazon.co.uk/*?*app=hm*", "*://www.amazon.es/*?*app=hm*", "*://www.amazon.nl/*?*app=hm*", "*://www.amazon.com.mx/*?*app=hm*", "*://www.amazon.it/*?*app=hm*", "*://www.amazon.in/*?*app=hm*", "*://www.amazon.de/*?*app=hm*", "*://www.amazon.fr/*?*app=hm*", "*://www.amazon.cn/*?*app=hm*", "*://www.amazon.ca/*?*app=hm*", "*://www.amazon.com.br/*?*app=hm*", "*://www.amazon.com.au/*?*app=hm*"],
	types: ["sub_frame",'main_frame','xmlhttprequest']
}, extraInfoSpecOnRecieveHeader)
 chrome.webRequest.onCompleted.addListener(function(e) {
//console.log("=====completee=====",e);
    var t = e.url.match(/(?:messageID=)[^&]+/g);
    if(typeof t!="undefined" && t!=null)
	{
    	if ("undefined" != typeof t[0]) var n = t[0].replace("messageID=", "");
    	else var n = "";
    }
    else
    {
    	var n="";
    }
    var t = e.url.match(/(?:requestID=)[^&]+/g);
    if(typeof t!="undefined" && t!=null)
	{
    	if ("undefined" != typeof t[0]) var o = t[0].replace("requestID=", "");
    	else var o = "";
    }
    else
    {
    	var o="";
    }
    var r = n + ":" + o,
        i = e.responseHeaders,
        a = i.findIndex(function(e) {
            return "set-cookie" == e.name.toLowerCase()
        });
    if (a !== -1 && "" == i[a].value) var knockknock;
    else var n = e.url.substring(e.url.indexOf("messageID=") + 10, e.url.indexOf("&"));
    return  console.log("ninjaCookies " + ninjaCookies[r]), !0
}, {
    urls: ["*://www.amazon.com/*?*app=hm*", "*://www.amazon.co.uk/*?*app=hm*", "*://www.amazon.es/*?*app=hm*", "*://www.amazon.nl/*?*app=hm*", "*://www.amazon.com.mx/*?*app=hm*", "*://www.amazon.it/*?*app=hm*", "*://www.amazon.in/*?*app=hm*", "*://www.amazon.de/*?*app=hm*", "*://www.amazon.fr/*?*app=hm*", "*://www.amazon.cn/*?*app=hm*", "*://www.amazon.ca/*?*app=hm*", "*://www.amazon.com.br/*?*app=hm*", "*://www.amazon.com.au/*?*app=hm*"],
	types: ["sub_frame",'main_frame','xmlhttprequest']
}, [ "responseHeaders"])
chrome.webRequest.onSendHeaders.addListener(function(e) {
    var t = e.url.match(/(?:messageID=)[^&]+/g);
    if(typeof t!="undefined" && t!=null)
	{
    	if ("undefined" != typeof t[0]) var n = t[0].replace("messageID=", "");
    	else var n = "";
    }
    else
    {
    	var n="";
    }
    var t = e.url.match(/(?:requestID=)[^&]+/g);
    if(typeof t!="undefined" && t!=null)
	{
    	if ("undefined" != typeof t[0]) var o = t[0].replace("requestID=", "");
    	else var o = "";
    }
    else
    {
    	var o="";
    }
    var r = n + ":" + o,
        i = e.requestHeaders,
        a = i.findIndex(function(e) {
            return "cookie" == e.name.toLowerCase()
        });
    if ("undefined" == typeof ninjaCookies[r] && a == -1) var knockknock;
    else if (typeof i[a]!="undefined" && typeof ninjaCookies[r]!="undefined")
    {
    	if (ninjaCookies[r] == i[a].value) var knockknock;
    	else
    	var n = e.url.substring(e.url.indexOf("messageID=") + 10, e.url.indexOf("&"));
    }
    else {
        var n = e.url.substring(e.url.indexOf("messageID=") + 10, e.url.indexOf("&"));
    }
    return  {
        requestHeaders: i
    }
}, {
    urls: ["*://www.amazon.com/*?*app=hm*", "*://www.amazon.co.uk/*?*app=hm*", "*://www.amazon.es/*?*app=hm*", "*://www.amazon.nl/*?*app=hm*", "*://www.amazon.com.mx/*?*app=hm*", "*://www.amazon.it/*?*app=hm*", "*://www.amazon.in/*?*app=hm*", "*://www.amazon.de/*?*app=hm*", "*://www.amazon.fr/*?*app=hm*", "*://www.amazon.cn/*?*app=hm*", "*://www.amazon.ca/*?*app=hm*", "*://www.amazon.com.br/*?*app=hm*", "*://www.amazon.com.au/*?*app=hm*"],
	types: ["sub_frame",'main_frame','xmlhttprequest']
},["requestHeaders"]);
//}
function rand(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e
}
function callbackfunction()
{
     chrome.storage.sync.get(['ScraperApiKey','licenseKey'], function (KEY) {
		 if(LicenseKeyGot=="")
		 {
			LicenseKeyGot=KEY.licenseKey;
		 }
     if(typeof KEY.ScraperApiKey=="undefined")
     {
    $.ajax({
        type: 'POST',
        //url: request.url,
        url: "https://admin.fbamultitool.com/appapi/productDetails.php",
        dataType: 'json',
         data: {FunctionCall: 'ScraperApiKey'},
        success: function(OuterHtml){
        	if(OuterHtml.status=="success")
        	{	
        		ScraperApiKey=OuterHtml.key;
        		chrome.storage.sync.set({ "ScraperApiKey": OuterHtml.key});
        	}
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) 
        			{
            			//if required, do some error handling
            			console.log(textStatus);
        			}
   					 });
   		}
   		else
   		{
   			ScraperApiKey=KEY.ScraperApiKey;
   		}
   		})
}

function randomCode(e, t) {
    t = t || "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var n = "", o = 0; o < e; o++) {
        var r = Math.floor(Math.random() * t.length);
        n += t.substring(r, r + 1)
    }
    return n
}
function SaveProductVariations(Region,mainAsin,Treview,PreviewTotal)
{
	$.ajax({
        			type: 'POST',
       				 //url: request.url,
        			url: "https://admin.fbamultitool.com/appapi/productDetails.php",
        			dataType: 'json',
        			data: {FunctionCall: 'SaveProductVariations',
            		country: Region,
            		asin: mainAsin,
            		Preview: PreviewTotal,
            		Treview: Treview,
            		Call: "bottom"
            		},
            		
        			success: function(OuterHtml){
        			//console.log(OuterHtml);
        		},
        		 error: function(XMLHttpRequest, textStatus, errorThrown) {
           			console.log("SaveProductVariations");
        			}
        		})
}
function _getOfferFunction(request,callback,HowManyTimes=0)
{
	 $.ajax({
        type: 'GET',
        url: request.data.URL,
        dataType: "html",
		/*headers: {'Referrer Policy': 'no-referrer-when-downgrade','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.108 Safari/537.36' },*/
        success: function(responseText){
        //console.log("SellerCenterWeight",responseText);
            callback(responseText);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
			HowManyTimes++;
			if(HowManyTimes>=2)
			{
				callback();
			}
			else
			{
				_getOfferFunction(request,callback,HowManyTimes);
			}
        }
    });
}
function GetReviewHistoryNew(ReviewHistory,Region,ReviewPagenumber=1,mainAsin,callback,TotalReviewsParam=0,PreviewTotalTop,HowManyTimes=0)
{
	//var scraperUrl="http://api.scraperapi.com?api_key="+ScraperApiKey+"&url=";
	var scraperUrl="";
	//console.log("https://www.amazon." + Region+  "/product-reviews/"+mainAsin+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber);
	$.ajax({
            type: "GET",
            url: scraperUrl+"https://www.amazon." + Region+  "/product-reviews/"+mainAsin+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
          
            success: function(Innerhtml){
            var returndata={};
            if(typeof returndata['TotalReviewsMain']=="undefined")
            {
            	returndata['TotalReviewsMain']=0;
            }
            	var InnerhtmlObj = $(Innerhtml);
				//console.log("TotalReviewsParam--->",TotalReviewsParam);
            	if(TotalReviewsParam<=0)
            	{
            		var reviewhtmlTop=InnerhtmlObj.find("[data-hook='cr-filter-info-review-count']").html();
					if(typeof reviewhtmlTop=="undefined")
        			{
        				reviewhtmlTop=InnerhtmlObj.find("[data-hook^='cr-filter-info-review-rating-count']").find("span").html();
        				var OFPOSTop=reviewhtmlTop.indexOf("global");
        				var aftreofTop=reviewhtmlTop.substring(0,OFPOSTop);
        				aftreofTop=parseInt(aftreofTop.trim().replace(/,/g, ''));
        				reviewhtmlTop="2 of "+aftreofTop+" reviews";
        			}
        			if(Region=="co.uk" || Region=="com")
        			{
        				if(typeof reviewhtmlTop=="undefined")
        				{
        					reviewhtmlTop="0 of 0 reviews";
        				}
        				var OFPOSTop=reviewhtmlTop.indexOf("of");
        				var aftreofTop=reviewhtmlTop.substring(OFPOSTop+2);
        			}
        			else
        			{
        				if(typeof reviewhtmlTop=="undefined")
        				{
        					reviewhtmlTop="0 de 0 reviews";
        				}
						if(reviewhtmlTop.indexOf(" su ")>=0)
						{
							var OFPOSTop=reviewhtmlTop.indexOf(" su ");
						}
						else
						{
							var OFPOSTop=reviewhtmlTop.indexOf(" de ");
						}
        				var aftreofTop=reviewhtmlTop.substring(OFPOSTop+4);
        			}
        			var replacedreviewTop=aftreofTop.replace("reviews", "");
        			var replacedreviewTop=aftreofTop.replace("opiniones", "");
        			reviewhtmlTop=replacedreviewTop.replace(" ", "");
        			reviewhtmlTop=replacedreviewTop.replace(",", "");
        			var noOfReviewsTop = parseInt(reviewhtmlTop);
        			TotalReviewsParam=noOfReviewsTop;
        		}
        		//console.log("Lenght->",InnerhtmlObj.find("[data-hook='review']").length);
				//console.log("TotalReviewsParam--->",TotalReviewsParam);
            	var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        		if(reviewlength==0)
        		{
        			returndata['status']="yes";
        			returndata['asin']=mainAsin;
        			returndata['TotalReviewsMain']=returndata['TotalReviewsMain'] + TotalReviewsParam;
        			returndata['html']="<td>"+ReviewHistory.review30+"</td><td>"+ReviewHistory.review60+"</td><td>"+ReviewHistory.review90+"</td>";
        			var TReview={};
        				TReview['Totalreview']=TotalReviewsParam;
        				TReview['Day30']=ReviewHistory.review30;
        				TReview['Day60']=ReviewHistory.review60;
        				TReview['Day90']=ReviewHistory.review90;
        				returndata['total']=TotalReviewsParam;
        				if(PreviewTotalTop>0)
        				{
        					returndata['per']=((TotalReviewsParam/PreviewTotalTop)*100).toFixed(2);
        				}
        				SaveProductVariations(Region,mainAsin,TReview,PreviewTotalTop);
        			callback(JSON.stringify(returndata));
        		}
        		InnerhtmlObj.find("[data-hook='review']").each(function(){
        			reviewlength--;
        			var DateText=$(this).find("[data-hook='review-date']").html();
        			DateText=DateText.split(" on ");
        			
        			DateText=DateText[1];
        			//console.log("DateText------->",DateText);
        			var dateobj= new Date(DateText);
        			//console.log("dateobj------->",dateobj);
        			//console.log("mainAsin------->",mainAsin);
        			var currentmilli=dateobj.getTime();
        			if(currentmilli>=milli30)
        			{
        				ReviewHistory.review90=ReviewHistory.review90+1;
        				ReviewHistory.review60=ReviewHistory.review60+1;
        				ReviewHistory.review30=ReviewHistory.review30+1;
        				if(!reviewlength && ReviewPagenumber<ReviewHistory.numberOfPages)
        				{
        					ReviewPagenumber=ReviewPagenumber+1;
        					GetReviewHistoryNew(ReviewHistory,Region,ReviewPagenumber,mainAsin,callback,TotalReviewsParam,PreviewTotalTop,HowManyTimes);
        				}
        			}
        			else if(currentmilli>=milli60)
        			{
        				ReviewHistory.review90=ReviewHistory.review90+1;
        				ReviewHistory.review60=ReviewHistory.review60+1;
        				if(!reviewlength && ReviewPagenumber<ReviewHistory.numberOfPages)
        				{
        					ReviewPagenumber=ReviewPagenumber+1;
        					GetReviewHistoryNew(ReviewHistory,Region,ReviewPagenumber,mainAsin,callback,TotalReviewsParam,PreviewTotalTop,HowManyTimes);
        				}
        			}
        			else if(currentmilli>=milli90)
        			{
        				ReviewHistory.review90=ReviewHistory.review90+1;
        				if(!reviewlength && ReviewPagenumber<ReviewHistory.numberOfPages)
        				{
        					ReviewPagenumber=ReviewPagenumber+1;
        					GetReviewHistoryNew(ReviewHistory,Region,ReviewPagenumber,mainAsin,callback,TotalReviewsParam,PreviewTotalTop,HowManyTimes);
        				}
        			}
        			else
        			{
        				//console.log("Less Than 10");
        				returndata['status']="yes";
        				returndata['asin']=mainAsin;
        				returndata['TotalReviewsMain']=returndata['TotalReviewsMain'] + TotalReviewsParam;
        				returndata['html']="<td>"+ReviewHistory.review30+"</td><td>"+ReviewHistory.review60+"</td><td>"+ReviewHistory.review90+"</td>";
        				var TReview={};
        				returndata['total']=TotalReviewsParam;
        				TReview['Totalreview']=TotalReviewsParam;
        				TReview['Day30']=ReviewHistory.review30;
        				TReview['Day60']=ReviewHistory.review60;
        				TReview['Day90']=ReviewHistory.review90;
        				if(PreviewTotalTop>0)
        				{
        					returndata['per']=((TotalReviewsParam/PreviewTotalTop)*100).toFixed(2);
        				}
        				SaveProductVariations(Region,mainAsin,TReview,PreviewTotalTop);
        				//console.log("returndata------>",returndata);
        				callback(JSON.stringify(returndata));
						//return false;
        			}
        			if(!reviewlength && InnerhtmlObj.find("[data-hook='review']").length<=10)
        			{
        				returndata['status']="yes";
        				returndata['asin']=mainAsin;
        				returndata['TotalReviewsMain']=returndata['TotalReviewsMain'] + TotalReviewsParam;
        				returndata['html']="<td>"+ReviewHistory.review30+"</td><td>"+ReviewHistory.review60+"</td><td>"+ReviewHistory.review90+"</td>";
        				var TReview={};
						returndata['total']=TotalReviewsParam;
        				TReview['Totalreview']=TotalReviewsParam;
        				TReview['Day30']=ReviewHistory.review30;
        				TReview['Day60']=ReviewHistory.review60;
        				TReview['Day90']=ReviewHistory.review90;
        				returndata['total']=TotalReviewsParam;
        				if(PreviewTotalTop>0)
        				{
        					returndata['per']=((TotalReviewsParam/PreviewTotalTop)*100).toFixed(2);
        				}
        				SaveProductVariations(Region,mainAsin,TReview,PreviewTotalTop);
        				//console.log("returndata------>",returndata);
        				callback(JSON.stringify(returndata));
        			}
        		})
            },
        	error: function(XMLHttpRequest, textStatus, errorThrown) {
        				console.log("Error------>",mainAsin);
						HowManyTimes++;
						var returndata={};
						returndata['status']="yes";
						returndata['asin']=mainAsin;
						returndata['per']="0";
						returndata['html']="<td>"+ReviewHistory.review30+"</td><td>"+ReviewHistory.review60+"</td><td>"+ReviewHistory.review90+"</td>";
						if(HowManyTimes>=2)
						{
							callback(JSON.stringify(returndata));
						}
						else
						{
							GetReviewHistoryNew(ReviewHistory,Region,ReviewPagenumber,mainAsin,callback,TotalReviewsParam,PreviewTotalTop,HowManyTimes);
						}
        	}
		})
	
}
function GetReviewHistory(ReviewHistory,Region,ReviewPagenumber=2,mainAsin,callback)
{
	//console.log("https://www.amazon." + Region+  "/product-reviews/"+mainAsin+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber);
	$.ajax({
            type: "GET",
            url: scraperUrl+"https://www.amazon." + Region+  "/product-reviews/"+mainAsin+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            data: {FunctionCall: 'ReviewHistory',
            	country: Region,
            	asin: mainAsin},
            success: function(Innerhtml){
            var returndata={};
            	var InnerhtmlObj = $(Innerhtml);
            	var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        		if(reviewlength==0)
        		{
        			returndata['status']="yes";
        			returndata['asin']=mainAsin;
        			returndata['html']="<td>"+ReviewHistory.review30+"</td><td>"+ReviewHistory.review60+"</td><td>"+ReviewHistory.review90+"</td>";
        			callback(JSON.stringify(returndata));
        		}
        		InnerhtmlObj.find("[data-hook='review']").each(function(){
        			reviewlength--;
        			var DateText=$(this).find("[data-hook='review-date']").html();
        			var dateobj= new Date(DateText);
        			var currentmilli=dateobj.getTime();
        			if(currentmilli>=milli30)
        			{
        				ReviewHistory.review90=ReviewHistory.review90+1;
        				ReviewHistory.review60=ReviewHistory.review60+1;
        				ReviewHistory.review30=ReviewHistory.review30+1;
        				if(!reviewlength && ReviewPagenumber<ReviewHistory.numberOfPages)
        				{
        					ReviewPagenumber=ReviewPagenumber+1;
        					GetReviewHistory(ReviewHistory,Region,ReviewPagenumber,mainAsin,callback);
        				}
        			}
        			else if(currentmilli>=milli60)
        			{
        				ReviewHistory.review90=ReviewHistory.review90+1;
        				ReviewHistory.review60=ReviewHistory.review60+1;
        				if(!reviewlength && ReviewPagenumber<ReviewHistory.numberOfPages)
        				{
        					ReviewPagenumber=ReviewPagenumber+1;
        					GetReviewHistory(ReviewHistory,Region,ReviewPagenumber,mainAsin,callback);
        				}
        			}
        			else if(currentmilli>=milli90)
        			{
        				ReviewHistory.review90=ReviewHistory.review90+1;
        				if(!reviewlength && ReviewPagenumber<ReviewHistory.numberOfPages)
        				{
        					ReviewPagenumber=ReviewPagenumber+1;
        					GetReviewHistory(ReviewHistory,Region,ReviewPagenumber,mainAsin,callback);
        				}
        			}
        			else
        			{
        				returndata['status']="yes";
        				returndata['asin']=mainAsin;
        				returndata['html']="<td>"+ReviewHistory.review30+"</td><td>"+ReviewHistory.review60+"</td><td>"+ReviewHistory.review90+"</td>";
        				callback(JSON.stringify(returndata));
						return false;
        			}
        			if(!reviewlength && ReviewPagenumber==ReviewHistory.numberOfPages)
        			{
        				returndata['status']="yes";
        				returndata['asin']=mainAsin;
        				returndata['html']="<td>"+ReviewHistory.review30+"</td><td>"+ReviewHistory.review60+"</td><td>"+ReviewHistory.review90+"</td>";
        				callback(JSON.stringify(returndata));
        			}
        		})
            },
        	error: function(XMLHttpRequest, textStatus, errorThrown) {
           				returndata['status']="yes";
           				returndata['asin']=mainAsin;
        				returndata['html']="<td>"+ReviewHistory.review30+"</td><td>"+ReviewHistory.review60+"</td><td>"+ReviewHistory.review90+"</td>";
        				callback(JSON.stringify(returndata));
        	}
		})
	
}
function randomElement(e) {
    return e[Math.floor(Math.random() * e.length)]
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
function gSheetAppend(e,t,n,GoogleSheetTabName=""){let o={method:"POST",async:!0,headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},contentType:"json",body:JSON.stringify({values:[n]})};fetch("https://sheets.googleapis.com/v4/spreadsheets/"+t+"/values/"+GoogleSheetTabName+"A1:C1:append?valueInputOption=USER_ENTERED",o).then(e=>e.json()).then(function(e){ })}function formatMoney(e,t){return(e<0?"-":"")+t+Math.abs(e).toFixed(2)}function extractName(e){const t=(e=e||"").match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+?)\./im);return t?t[1]:""}
function doExport(e){
    chrome.storage.sync.get("spreadsheetURL",function(t){const{spreadsheetURL:n}=t;if(!n)return;const o=n.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)[1]; console.log("o=====>",o); console.log("n=====>",n);chrome.identity.getAuthToken({interactive:!0},function(t){
 var exp=[];
  			chrome.storage.sync.get(["googleSheetName"],function(googleSheetNameobj)
  						{
  							console.log("googleSheetNameobj.googleSheetName====>",googleSheetNameobj.googleSheetName) 
							if(typeof googleSheetNameobj.googleSheetName!="undefined" && googleSheetNameobj.googleSheetName.trim()!="")
							{
								GoogleSheetTabName=googleSheetNameobj.googleSheetName.trim()+"!";
							}
							else
							{
								GoogleSheetTabName="";
							}
						});
 			if(typeof e.globalsettings.HstoreUrl=='undefined')
 			{
 				var bPriceStor='=HYPERLINK("' + e.storeURL + '", "' + formatMoney(e.buyPrice, e.currencySign) + '")';
 			}
 			else
 			{
 				if(e.globalsettings.HstoreUrl)
 				{
 					var bPriceStor='=HYPERLINK("' + e.storeURL + '", "' + formatMoney(e.buyPrice, e.currencySign) + '")';
 				}
 				else
 				{
 					var bPriceStor=formatMoney(e.buyPrice, e.currencySign);
 				}
 			}
 			if(typeof e.globalsettings.HamazonUrl=='undefined')
 			{
 				var sPriceAmazon='=HYPERLINK("' + e.url + '", "' + formatMoney(e.sellPrice, e.currencySign) + '")';
 			}
 			else
 			{
 				if(e.globalsettings.HstoreUrl)
 				{
 					var sPriceAmazon='=HYPERLINK("' + e.url + '", "' + formatMoney(e.sellPrice, e.currencySign) + '")';
 				}
 				else
 				{
 					var sPriceAmazon=formatMoney(e.sellPrice, e.currencySign);
 				}
 			}
        	if(e.exportsettingset)
        	{
        		if(typeof e.globalsettings.asinsel=='undefined')
        		{
        			e.globalsettings.asinsel=0;
        		}
        		if(typeof e.globalsettings.DateOfExport=='undefined')
        		{
        			e.globalsettings.DateOfExport=0;
        		}
        		if(typeof e.globalsettings.namesel=='undefined')
        		{
        			e.globalsettings.namesel=0;
        		}
        		if(typeof e.globalsettings.catsel=='undefined')
        		{
        			e.globalsettings.catsel=0;
        		}
        		if(typeof e.globalsettings.ranksel=='undefined')
        		{
        			e.globalsettings.ranksel=0;
        		}
        		if(typeof e.globalsettings.feessel=='undefined')
        		{
        			e.globalsettings.feessel=0;
        		}
        		if(typeof e.globalsettings.profitsel=='undefined')
        		{
        			e.globalsettings.profitsel=0;
        		}
        		if(typeof e.globalsettings.riosel=='undefined')
        		{
        			e.globalsettings.riosel=0;
        		}
        		if(typeof e.globalsettings.pmarginsel=='undefined')
        		{
        			e.globalsettings.pmarginsel=0;
        		}
        		if(typeof e.globalsettings.bevensel=='undefined')
        		{
        			e.globalsettings.bevensel=0;
        		}
        		if(typeof e.globalsettings.weightsel=='undefined')
        		{
        			e.globalsettings.weightsel=0;
        		}
        		if(typeof e.globalsettings.storeurlsel=='undefined')
        		{
        			e.globalsettings.storeurlsel=0;
        		}
        		if(typeof e.globalsettings.urlsel=='undefined')
        		{
        			e.globalsettings.urlsel=0;
        		}
        		if(typeof e.globalsettings.bpricesel=='undefined')
        		{
        			e.globalsettings.bpricesel=0;
        		}
        		if(typeof e.globalsettings.spricesel=='undefined')
        		{
        			e.globalsettings.spricesel=0;
        		}
        		if(typeof e.globalsettings.estsales=='undefined')
        		{
        			e.globalsettings.estsales=0;
        		}
        		if(typeof e.globalsettings.amazonLink=='undefined')
        		{
        			e.globalsettings.amazonLink=0;
        		}
        		if(typeof e.globalsettings.storeLink=='undefined')
        		{
        			e.globalsettings.storeLink=0;
        		}
        		if(typeof e.globalsettings.CQuantity=='undefined')
        		{
        			e.globalsettings.CQuantity=0;
        		}
        		exp[e.globalsettings.asinsel]=e.asin;
        		exp[e.globalsettings.namesel]=e.name;
        		exp[e.globalsettings.catsel]=e.category;
        		exp[e.globalsettings.ranksel]=e.rank;
        		exp[e.globalsettings.feessel]=formatMoney(e.fees, e.currencySign);
        		exp[e.globalsettings.profitsel]=formatMoney(e.profit, e.currencySign);
        		exp[e.globalsettings.riosel]=e.roi.toFixed(2) + "%";
        		exp[e.globalsettings.pmarginsel]=e.profitMargin.toFixed(2) + "%";
        		exp[e.globalsettings.bevensel]=formatMoney(e.breakeven, e.currencySign);
        		exp[e.globalsettings.weightsel]=e.weight;
        		exp[e.globalsettings.storeurlsel]=extractName(e.storeURL);
        		//exp[e.globalsettings.urlsel]=e.url;
				exp[e.globalsettings.bpricesel]=bPriceStor;
				exp[e.globalsettings.spricesel]=sPriceAmazon;
				exp[e.globalsettings.estsales]=e.SalesEstimate;
				exp[e.globalsettings.amazonLink]=e.url;
				exp[e.globalsettings.storeLink]=e.storeURL;
				exp[e.globalsettings.CQuantity]=e.CQuantity;
				var currentdate = new Date(); 
var datetime = "" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear();
                /*+ " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds()*/
                exp[e.globalsettings.DateOfExport]=datetime;
				if(typeof exp[1]=='undefined')
				{
					exp[1]="";
				}
				if(typeof exp[2]=='undefined')
				{
					exp[2]="";
				}
				if(typeof exp[3]=='undefined')
				{
					exp[3]="";
				}
				if(typeof exp[4]=='undefined')
				{
					exp[4]="";
				}
				if(typeof exp[5]=='undefined')
				{
					exp[5]="";
				}
				if(typeof exp[6]=='undefined')
				{
					exp[6]="";
				}
				if(typeof exp[7]=='undefined')
				{
					exp[7]="";
				}
				if(typeof exp[8]=='undefined')
				{
					exp[8]="";
				}
				if(typeof exp[9]=='undefined')
				{
					exp[9]="";
				}
				if(typeof exp[10]=='undefined')
				{
					exp[10]="";
				}
				if(typeof exp[11]=='undefined')
				{
					exp[11]="";
				}
				if(typeof exp[12]=='undefined')
				{
					exp[12]="";
				}
				if(typeof exp[13]=='undefined')
				{
					exp[13]="";
				}
				if(typeof exp[14]=='undefined')
				{
					exp[14]="";
				}
				if(typeof exp[15]=='undefined')
				{
					exp[15]="";
				}
				if(typeof exp[16]=='undefined')
				{
					exp[16]="";
				}
				if(typeof exp[17]=='undefined')
				{
					exp[17]="";
				}
				if(typeof exp[18]=='undefined')
				{
					exp[18]="";
				}
				var n;
				var maxvalue=1;
				if(typeof exp[1]!='undefined' && exp[1]!='')
				{
					n = [exp[1]];
				}
				if(typeof exp[2]!='undefined' && exp[2]!='')
				{
					n = [exp[1],exp[2]];
				}
				if(typeof exp[3]!='undefined' && exp[3]!='')
				{
					n = [exp[1],exp[2],exp[3]];
				}
				if(typeof exp[4]!='undefined' && exp[4]!='')
				{
					n = [exp[1],exp[2],exp[3],exp[4]];
				}
				if(typeof exp[5]!='undefined' && exp[5]!='')
				{
					n = [exp[1],exp[2],exp[3],exp[4],exp[5]];
				}
				if(typeof exp[6]!='undefined' && exp[6]!='')
				{
					n = [exp[1],exp[2],exp[3],exp[4],exp[5],exp[6]];
				}
				if(typeof exp[7]!='undefined' && exp[7]!='')
				{
					n = [exp[1],exp[2],exp[3],exp[4],exp[5],exp[6],exp[7]];
				}
				if(typeof exp[8]!='undefined'&& exp[8]!='')
				{
					n = [exp[1],exp[2],exp[3],exp[4],exp[5],exp[6],exp[7],exp[8]];
				}
				if(typeof exp[9]!='undefined' && exp[9]!='')
				{
					n = [exp[1],exp[2],exp[3],exp[4],exp[5],exp[6],exp[7],exp[8],exp[9]];
				}
				if(typeof exp[10]!='undefined' && exp[10]!='')
				{
					n = [exp[1],exp[2],exp[3],exp[4],exp[5],exp[6],exp[7],exp[8],exp[9],exp[10]];
				}
				if(typeof exp[11]!='undefined' && exp[11]!='')
				{
					n = [exp[1],exp[2],exp[3],exp[4],exp[5],exp[6],exp[7],exp[8],exp[9],exp[10],exp[11]];
				}
				if(typeof exp[12]!='undefined' && exp[12]!='')
				{
					n = [exp[1],exp[2],exp[3],exp[4],exp[5],exp[6],exp[7],exp[8],exp[9],exp[10],exp[11],exp[12]];
				}
				if(typeof exp[13]!='undefined' && exp[13]!='')
				{
					n = [exp[1],exp[2],exp[3],exp[4],exp[5],exp[6],exp[7],exp[8],exp[9],exp[10],exp[11],exp[12],exp[13]];
				}
				if(typeof exp[14]!='undefined' && exp[14]!='')
				{
					n = [exp[1],exp[2],exp[3],exp[4],exp[5],exp[6],exp[7],exp[8],exp[9],exp[10],exp[11],exp[12],exp[13],exp[14]];
				}
				if(typeof exp[15]!='undefined' && exp[15]!='')
				{
					n = [exp[1],exp[2],exp[3],exp[4],exp[5],exp[6],exp[7],exp[8],exp[9],exp[10],exp[11],exp[12],exp[13],exp[14],exp[15]];
				}
				if(typeof exp[16]!='undefined' && exp[16]!='')
				{
					n = [exp[1],exp[2],exp[3],exp[4],exp[5],exp[6],exp[7],exp[8],exp[9],exp[10],exp[11],exp[12],exp[13],exp[14],exp[15],exp[16]];
				}
				if(typeof exp[17]!='undefined' && exp[17]!='')
				{
					n = [exp[1],exp[2],exp[3],exp[4],exp[5],exp[6],exp[7],exp[8],exp[9],exp[10],exp[11],exp[12],exp[13],exp[14],exp[15],exp[16],exp[17]];
				}
				if(typeof exp[18]!='undefined' && exp[18]!='')
				{
					n = [exp[1],exp[2],exp[3],exp[4],exp[5],exp[6],exp[7],exp[8],exp[9],exp[10],exp[11],exp[12],exp[13],exp[14],exp[15],exp[16],exp[17],exp[18]];
				}

        	}
        	else
        	{
            	var n = [ e.asin,e.name, bPriceStor, sPriceAmazon, formatMoney(e.fees, e.currencySign), formatMoney(e.profit, e.currencySign), e.roi.toFixed(2) + "%", e.profitMargin.toFixed(2) + "%", formatMoney(e.breakeven, e.currencySign), e.rank, e.weight, e.category, extractName(e.storeURL),e.CQuantity];
            	//const n=[];
            }
         console.log("GoogleSheetTabName====>",GoogleSheetTabName)  
gSheetAppend(t,o,n,GoogleSheetTabName)})})}chrome.runtime.onMessage.addListener(function(e,t,n){switch(e.name){case"options": var tabid="";if(typeof e.tabid!="undefined")tabid=e.tabid;openOrFocusOptionsPage(tabid);break;case"rates":const t=e.from,o=e.to;return $.get("https://admin.fbamultitool.com/appapi/index.php?FunctionCall=Rates&base="+t+"&symbols="+o).done(function(e){e=JSON.parse(e);n(e.val)}),!0;case"export":doExport(e.data);case"xhttp":}}),chrome.storage.sync.get(["vatRate"],function(e){void 0===e.vatRate&&(e.vatRate=20),chrome.storage.sync.set(e)});
chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    if (request.action == "xhttp") {

    $.ajax({
        type: request.method,
        url: request.url,
        data: request.data,
        dataType: request.dataType,
        success: function(responseText){
            callback(responseText);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            callback();
        }
    });

    return true; // prevents the callback from being called too early on return
  }
  if (request.FunctionCall == "NumberOfSellers") {

    $.ajax({
        type: 'POST',
        url: 'https://admin.fbamultitool.com/appapi/productDetails.php',
        data: request.data,
        dataType: 'json',
        success: function(responseText){
        console.log("=====estimateFee=======",responseText)
            callback(responseText);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            callback();
        }
    });

    return true; // prevents the callback from being called too early on return
  }
  if (request.FunctionCall == "estimateFee") {

    $.ajax({
        type: 'POST',
        url: 'https://admin.fbamultitool.com/appapi/',
        data: request.data,
        dataType: 'json',
        success: function(responseText){
        //console.log("=====estimateFee=======",responseText)
            callback(responseText);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            callback();
        }
    });

    return true; // prevents the callback from being called too early on return
  }
  if (request.FunctionCall == "estimateFeeFBM") {

    $.ajax({
        type: 'POST',
        url: 'https://admin.fbamultitool.com/appapi/',
        data: request.data,
        dataType: 'json',
        success: function(responseText){
        //console.log("=====estimateFee=======",responseText)
            callback(responseText);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            callback();
        }
    });

    return true; // prevents the callback from being called too early on return
  }
  if (request.FunctionCall == "ProductDetails") {

    $.ajax({
        type: 'POST',
        url: 'https://admin.fbamultitool.com/appapi/',
        data: request.data,
        dataType: 'json',
        success: function(responseText){
            callback(responseText);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            callback();
        }
    });

    return true; // prevents the callback from being called too early on return
  }
  if(request.FunctionCall == "ReviewHistory")
  {
  	var Region=request.Region;
  	var ReviewHistory=request.ReviewHistory;
  	var mainAsin=request.mainAsin;
  	GetReviewHistory(ReviewHistory,Region,2,mainAsin,callback);
  	return true;
  }
  if(request.FunctionCall == "ScraperApiKey")
  {
  		$.ajax({
        type: 'POST',
        //url: request.url,
        url: "https://admin.fbamultitool.com/appapi/productDetails.php",
        dataType: 'json',
         data: {FunctionCall: 'ScraperApiKey'},
        success: function(OuterHtml){
        	if(OuterHtml.status=="success")
        	{	
        		ScraperApiKey=OuterHtml.key;
        		chrome.storage.sync.set({ "ScraperApiKey": OuterHtml.key});
        		callback(OuterHtml);
        	}
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) 
        			{
            			//if required, do some error handling
            			console.log(textStatus);
        			}
   					 });
return true;
  }
  if(request.FunctionCall == "ReviewHistoryNewTop"){

  	//var scraperUrl="http://api.scraperapi.com?api_key="+ScraperApiKey+"&url=";
	var scraperUrl="";
	var AsinToBeSend=request.mainAsin;
	if(typeof request.asinToBeSend!="undefined" && request.asinToBeSend.trim()!="")
	{
		AsinToBeSend=request.asinToBeSend;
	}
    $.ajax({
        type: 'GET',
        //url: request.url,
        url: scraperUrl+"https://www.amazon." + request.Region+  "/product-reviews/"+request.mainAsin+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=all_formats",
        dataType: 'html',
        success: function(OuterHtml){
        var InnerhtmlObj = $(OuterHtml);
        	var reviewhtmlTop=InnerhtmlObj.find("[data-hook^='cr-filter-info-review-count']").html();
        	if(typeof reviewhtmlTop=="undefined")
        	{
        		reviewhtmlTop=InnerhtmlObj.find("[data-hook^='cr-filter-info-review-rating-count']").find("span").html();
        		var OFPOSTop=reviewhtmlTop.indexOf("global");
        		var aftreofTop=reviewhtmlTop.substring(0,OFPOSTop);
        		aftreofTop=parseInt(aftreofTop.trim().replace(/,/g, ''));
        		reviewhtmlTop="2 of "+aftreofTop+" reviews";
        	}
        	if(request.Region=="co.uk" || request.Region=="com")
        	{
        		
        		if(typeof reviewhtmlTop=="undefined")
        		{
        			reviewhtmlTop="0 of 0 reviews";
        		}
        		var OFPOSTop=reviewhtmlTop.indexOf("of");
        		var aftreofTop=reviewhtmlTop.substring(OFPOSTop+2);
        	}
        	else
        	{
        		if(typeof reviewhtmlTop=="undefined")
        		{
        			reviewhtmlTop="0 de 0 reviews";
        		}
				if(reviewhtmlTop.indexOf(" su ")>=0)
				{
					var OFPOSTop=reviewhtmlTop.indexOf(" su ");
				}
				else
				{
					var OFPOSTop=reviewhtmlTop.indexOf(" de ");
				}
				
        		var aftreofTop=reviewhtmlTop.substring(OFPOSTop+4);
        	}
        	var replacedreviewTop=aftreofTop.replace("reviews", "");
        	var replacedreviewTop=aftreofTop.replace("opiniones", "");
        	reviewhtmlTop=replacedreviewTop.replace(" ", "");
        	reviewhtmlTop=replacedreviewTop.replace(",", "");
        	var noOfReviewsTop = parseInt(reviewhtmlTop);
        	var returned={};
        	returned['status']='error';
        	returned['data']='';
        	if(typeof noOfReviewsTop!="undefined")
        	{
        		returned['status']='success';
        		returned['data']=noOfReviewsTop;
        		if(noOfReviewsTop<=0)
        		{
        			$.ajax({
        			type: 'POST',
       				 //url: request.url,
        			url: "https://admin.fbamultitool.com/appapi/productDetails.php",
        			dataType: 'json',
        			data: {FunctionCall: 'SaveProductVariations',
            		country: request.Region,
            		asin: request.mainAsin,
            		Treview: noOfReviewsTop,
            		Call: "top"
            		},
            		
        			success: function(OuterHtml){
        			//console.log("llll");
        		},
        		 error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            var htmltable="<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th></tr></thead><tbody><tr><td colspan='8'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
            var returnvar={};
        	returnvar['status']='error';;
        	returnvar['data']="";
            //callback(returnvar);
        			}
        		})
        	}
        }

        	callback(returned);
        console.log("noOfReviewsTop---->",returned);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            var htmltable="<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th></tr></thead><tbody><tr><td colspan='8'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
            var returnvar={};
        	returnvar['status']='error';;
        	returnvar['data']="";
            callback(returnvar);
        }
        })
        return true;
    }
  if(request.FunctionCall == "ReviewHistoryNew")
  {
  	var Region=request.Region;
  	var ReviewHistory=request.ReviewHistory;
  	var mainAsin=request.mainAsin;
  	var PreviewTotal=request.PreviewTotal
  	GetReviewHistoryNew(ReviewHistory,Region,1,mainAsin,callback,0,PreviewTotal);
  	return true;
  }
   if(request.FunctionCall == "JustProductVariations")
  {
  	$.ajax({
        type: 'POST',
        //url: request.url,
        url: "https://admin.fbamultitool.com/appapi/productDetails.php",
        dataType: 'json',
         data: {FunctionCall: 'JustProductVariations',
            	country: request.Region,
            	asin: request.mainAsin},
        success: function(Response){
			console.log("Response---->",Response);
			var TotalLength=Object.keys(Response.data.child).length;
        	var htmltable="<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th></tr></thead><tbody><tr><td colspan='8'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
		},
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
			var htmltable="<div id='variationModel' class='variationModelClass'><div class='table-variations'><span class='variationModelclose'>&times;</span><table id='variationTableID'><thead><tr class='tblrow'><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th><th>Review %</th><th style='text-align: center !important;'>History<table style='margin-top:-10px'><thead><tr><th>30 Days</th><th>60 Days</th><th>90 Days</th></tr></thead></table></th></tr></thead><tbody><td colspan='8'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
           // "<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th></tr></thead><tbody><tr><td colspan='8'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
            var returnvar={};
        	returnvar['html']=htmltable;
        	returnvar['data']="no";
            callback(JSON.stringify(returnvar));
        }
        })
  }
   if(request.FunctionCall == "TenGroup")
  {
	 var Preview="";
     var PASIN="";
	 var sizearray=request.sizearray;
	 var asinarray=request.asinarray;
	 var colorarray=request.colorarray;
	 var pricearray=request.pricearray;
	 var pricetext="";
	 var sizetext="";
	 var asintext="";
	 var colortext="";
	 var innerhtmltable="";
	 var CheckAllParsed=1;
	 var newWayReview={};
  	$.ajax({
        type: 'POST',
        //url: request.url,
        url: "https://admin.fbamultitool.com/appapi/productDetails.php",
        dataType: 'json',
         data: {FunctionCall: 'TenGroup',
            	country: request.Region,
            	asin: request.asinList,
				LicenseKey: request.LicenseKey,
				},
        success: function(OuterHtml){
			//console.log("TenGroup----->",OuterHtml);
			var TotalLength=Object.keys(OuterHtml.data.child).length;
			if(OuterHtml.status=="success")
        	{
				if(typeof OuterHtml.data.parentasin!="undefined")
        		{
					if(OuterHtml.data.parentasin.trim()!="")
					{
						if(typeof OuterHtml.data.Preview !="undefined")
						{
							Preview=OuterHtml.data.Preview;
						}
						PASIN=OuterHtml.data.parentasin;
					}
        		}
        		Object.keys(OuterHtml.data.child).forEach( (element) => 
				{
					var Price=0;
					var Sizein="";
					var Image="";
					if(typeof OuterHtml.data.child[element].price !="undefined")
					{
						Price=OuterHtml.data.child[element].price;
					}
					Sizein=OuterHtml.data.child[element].Size;
					var asin1=element;
					var Color=OuterHtml.data.child[element].Color;
					if(typeof OuterHtml.data.child[element].image !="undefined")
					{
						Image=OuterHtml.data.child[element].image;
					}
					var pageurl="https://www.amazon." + request.Region+  "/dp/"+asin1+"?th=1&psc=1";
					if(typeof pricearray[Price]=="undefined" && Price>0 && pricearray[Price]!=null)
					{
						pricearray[Price]=Price;
						pricetext=pricetext+"<li class='hiddenli'><label><input type='checkbox' name='pricefilter[]' value='"+Price+"'>"+Price+"</label></li>";
					}
					if(typeof sizearray[Sizein]=="undefined" && Sizein.trim()!=""  && sizearray[Sizein]!=null)
					{
						sizearray[Sizein]=Sizein;
						sizetext=sizetext+"<li class='hiddenli'><label><input type='checkbox' name='sizefilter[]' value='"+Sizein+"'>"+Sizein+"</label></li>";
					}
					if(typeof asinarray[asin1]=="undefined"   && asinarray[asin1]!=null)
					{
						asinarray[asin1]=asin1;
						asintext=asintext+"<li class='hiddenli'><label><input type='checkbox' name='asinfilter[]' value='"+asin1+"'>"+asin1+"</label></li>";
					}
					if(typeof colorarray[Color]=="undefined" && colorarray[Color]!=null)
					{
                		colorarray[Color]=Color;
                		colortext=colortext+"<li class='hiddenli'><label><input type='checkbox' name='colorfilter[]' value='"+Color+"'>"+Color+"</label></li>";
					}
					var noOfReviews=0;
					var noOfReviewsorg=0;
					var reviewPercentage=0;
					var review30=0;
					var review60=0;
					var review90=0;
					var numberOfPages=0;
					if(typeof OuterHtml.data.child[element].reviewConsider!="undefined" && OuterHtml.data.child[element].reviewConsider=="true")
					{
						noOfReviewsorg=OuterHtml.data.child[element].review.Totalreview
						noOfReviews=OuterHtml.data.child[element].Preview;
						reviewPercentage=0;
						if(noOfReviews>0)
						{
							reviewPercentage=((OuterHtml.data.child[element].review.Totalreview/noOfReviews)*100).toFixed(2);
						}	
						review30=OuterHtml.data.child[element].review.Day30;
						review60=OuterHtml.data.child[element].review.Day60;
						review90=OuterHtml.data.child[element].review.Day90;
					}
					else
					{
						newWayReview[asin1]={};
						newWayReview[asin1]["numberOfPages"]=0;
						newWayReview[asin1]["noOfReviews"]=0;
						newWayReview[asin1]["review90"]=0;
						newWayReview[asin1]["review60"]=0;
						newWayReview[asin1]["review30"]=0;
					}
					if(typeof OuterHtml.data.child[element].reviewConsider!="undefined" && OuterHtml.data.child[element].reviewConsider=="true")
					{
						reviewPercentage=reviewPercentage+"%";
					}
					else
					{
						noOfReviewsorg="<div class='LoaderRC_"+asin1+" loaderR'></div>";	
						reviewPercentage="<div class='LoaderRC_"+asin1+" loaderR'></div>";
						review30="<div class='LoaderRC_"+asin1+" loaderR'></div>";
						review60="<div class='LoaderRC_"+asin1+" loaderR'></div>";
						review90="<div class='LoaderRC_"+asin1+" loaderR'></div>";
					}
					innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"' id='ImageV_"+asin1+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td class='TotalReviewsClass' id='TotalReviews_"+asin1+"'>"+noOfReviewsorg+"</td><td>"+Color+"</td><td id='reviewPer_"+asin1+"' class='TotalReviewsPerClass'>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr id='reviewHistory_"+asin1+"'><td class='TotalReviews30Class'>"+review30+"</td><td class='TotalReviews60Class'>"+review60+"</td><td class='TotalReviews90Class'>"+review90+"</td></tr></tbody></table></td></tr>";
                
					CheckAllParsed++;
				})
				var g = setInterval(function() {
        		if(CheckAllParsed>=TotalLength)
        		{
        			var returnvar={};
        				returnvar['data']="yes";
 						if(innerhtmltable.trim()=="")
 						{
 							returnvar['data']="no";
 							innerhtmltable="";
 						}
        				returnvar['html']=innerhtmltable;
        				returnvar['Preview']=Preview;
        				returnvar['Pasin']=PASIN;
        				returnvar['review']=newWayReview;
						returnvar['pricearray']=pricearray;
						returnvar['sizearray']=sizearray;
						returnvar['asinarray']=asinarray;
						returnvar['colorarray']=colorarray;
        				//console.log("JSON.stringify(returnvar)--->",JSON.stringify(returnvar));
 						 callback(returnvar);
 	 					clearInterval(g);	 
 					}
 							},200); 
			}
			else
			{
				var returnvar={};
				returnvar['html']="";
				returnvar['data']="no";
				callback(JSON.stringify(returnvar));
			}
		},
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
			var htmltable="<div id='variationModel' class='variationModelClass'><div class='table-variations'><span class='variationModelclose'>&times;</span><table id='variationTableID'><thead><tr class='tblrow'><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th><th>Review %</th><th style='text-align: center !important;'>History<table style='margin-top:-10px'><thead><tr><th>30 Days</th><th>60 Days</th><th>90 Days</th></tr></thead></table></th></tr></thead><tbody><td colspan='8'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
           // "<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th></tr></thead><tbody><tr><td colspan='8'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
            var returnvar={};
        	returnvar['html']="";
        	returnvar['data']="no";
            callback(returnvar);
        }
        })
        return true;
  }
  if(request.FunctionCall == "variationNewData")
  {
  	$.ajax({
        type: 'POST',
        //url: request.url,
        url: "https://admin.fbamultitool.com/appapi/productDetails.php",
        dataType: 'json',
         data: {FunctionCall: 'ProductVariations',
            	country: request.Region,
            	asin: request.mainAsin},
        success: function(OuterHtml){
        	//console.log("OuterHtml====>",OuterHtml);
        	var TotalLength=Object.keys(OuterHtml.data.child).length;
        	var ColorNameTitle="Color";
        	if(request.ColorNameTitle.trim()!="" && request.ColorNameTitle.trim().toLowerCase()!="size")
        	{
        		ColorNameTitle=request.ColorNameTitle;
        	}
        	var htmltable="<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table id='variationTableB'><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>"+ColorNameTitle+"</th></tr></thead><tbody><tr><td colspan='8'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
            var returnvar={};
            var Preview="";
            var PASIN=""
			var increamental=0;
			var increamentalCont=0;
        	returnvar['html']=htmltable;
        	var varationpercentagefix={};
        	varationpercentagefix['actualTotal']=0;
        	varationpercentagefix['newTotal']=0;
        	varationpercentagefix['asin']={};
        	returnvar['data']="no";
        	var innerhtmltable="";
        	var newWayReview={};
        	var asintext="";
        	var asinarray=[];
        	var pricetext="";
        	var pricearray=[];
        	var sizetext="";
        	var topAsinNew="";
        	var sizearray=[];
        	var reviewtext="";
        	var reviewarray=[];
			var tenGroup=[];
        	var colortext="";
        	var colorarray=[];
        	var CheckAllParsed=1;
        	var htmltable="<div id='variationModel' class='variationModelClass'><div class='table-variations'><span class='variationModelclose'>&times;</span><table id='variationTableID'><thead><tr class='tblrow'><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>"+ColorNameTitle+"</th><th>Review %</th><th style='text-align: center !important;'>History<table style='margin-top:-10px'><thead><tr><th>30 Days</th><th>60 Days</th><th>90 Days</th></tr></thead></table></th></tr></thead><tbody id='variationTableB'>";
        	if(OuterHtml.status=="success")
        	{
        		if(typeof OuterHtml.data.parentasin!="undefined")
        		{
					if(OuterHtml.data.parentasin.trim()!="")
					{
						if(typeof OuterHtml.data.Preview !="undefined")
						{
							Preview=OuterHtml.data.Preview;
						}
						PASIN=OuterHtml.data.parentasin;
					}
        		}
        		Object.keys(OuterHtml.data.child).forEach( (element) => {
				var Price=0;
				var Sizein="";
				var Image="";
				if(typeof OuterHtml.data.child[element].price !="undefined")
				{
					Price=OuterHtml.data.child[element].price;
				}
    			Sizein=OuterHtml.data.child[element].Size;
    			var asin1=element;
    			topAsinNew=asin1;
    			var Color=OuterHtml.data.child[element].Color;
				if(typeof OuterHtml.data.child[element].image !="undefined")
				{
					Image=OuterHtml.data.child[element].image;
				}
    			var pageurl="https://www.amazon." + request.Region+  "/dp/"+asin1+"?th=1&psc=1";
    			if(typeof pricearray[Price]=="undefined" && Price>0)
                {
                	pricearray[Price]=Price;
                	pricetext=pricetext+"<li class='hiddenli'><label><input type='checkbox' name='pricefilter[]' value='"+Price+"'>"+Price+"</label></li>";
                }
                if(typeof sizearray[Sizein]=="undefined" && Sizein.trim()!="" )
                {
                	sizearray[Sizein]=Sizein;
                	sizetext=sizetext+"<li class='hiddenli'><label><input type='checkbox' name='sizefilter[]' value='"+Sizein+"'>"+Sizein+"</label></li>";
                }
                if(typeof asinarray[asin1]=="undefined")
                {
                	asinarray[asin1]=asin1;
                	asintext=asintext+"<li class='hiddenli'><label><input type='checkbox' name='asinfilter[]' value='"+asin1+"'>"+asin1+"</label></li>";
            	}
            	if(typeof colorarray[Color]=="undefined")
                {
                		colorarray[Color]=Color;
                		colortext=colortext+"<li class='hiddenli'><label><input type='checkbox' name='colorfilter[]' value='"+Color+"'>"+Color+"</label></li>";
                }
                var noOfReviews=0;
                var noOfReviewsorg=0;
                var reviewPercentage=0;
                var review30=0;
                var review60=0;
                var review90=0;
                var numberOfPages=0;
				
                if(typeof OuterHtml.data.child[element].reviewConsider!="undefined" && OuterHtml.data.child[element].reviewConsider=="true")
                {
                	noOfReviewsorg=OuterHtml.data.child[element].review.Totalreview
                	noOfReviews=OuterHtml.data.child[element].Preview;
					reviewPercentage=0;
					if(noOfReviews>0)
					{
						reviewPercentage=((OuterHtml.data.child[element].review.Totalreview/noOfReviews)*100).toFixed(2);
					}	
                	review30=OuterHtml.data.child[element].review.Day30;
                	review60=OuterHtml.data.child[element].review.Day60;
                	review90=OuterHtml.data.child[element].review.Day90;
                }
                else
                {
					if(typeof OuterHtml.data.child[element].image !="undefined")
					{
						newWayReview[asin1]={};
						newWayReview[asin1]["numberOfPages"]=0;
						newWayReview[asin1]["noOfReviews"]=0;
						newWayReview[asin1]["review90"]=0;
						newWayReview[asin1]["review60"]=0;
						newWayReview[asin1]["review30"]=0;
					}
					else
					{
						
						if(typeof tenGroup[increamental]=="undefined")
						{
							tenGroup[increamental]=[];
						}
						tenGroup[increamental].push(asin1);
						if(tenGroup[increamental].length>=10)
						{
							increamental++;
						}
					}
        		}
				
        		varationpercentagefix['asin'][asin1]=noOfReviews;
 				varationpercentagefix['newTotal']=0;
				if(typeof OuterHtml.data.child[element].reviewConsider!="undefined" && OuterHtml.data.child[element].reviewConsider=="true")
                {
					reviewPercentage=reviewPercentage+"%";
					
				}
				else
				{
					noOfReviewsorg="<div class='LoaderRC_"+asin1+" loaderR'></div>";	
					reviewPercentage="<div class='LoaderRC_"+asin1+" loaderR'></div>";
					review30="<div class='LoaderRC_"+asin1+" loaderR'></div>";
					review60="<div class='LoaderRC_"+asin1+" loaderR'></div>";
					review90="<div class='LoaderRC_"+asin1+" loaderR'></div>";
				}
				/*if(CheckAllParsed>=3)
				{
					noOfReviewsorg="<div class='LoaderRC_"+asin1+" loaderR'></div>";
				}*/
				      
				if(typeof OuterHtml.data.child[element].image !="undefined")
				{
					innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><svg width='60' height='60' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <image href='"+Image+"' id='ImageV_"+asin1+"'\></svg></td><td>"+Price+"</td><td>"+Sizein+"</td><td class='TotalReviewsClass' id='TotalReviews_"+asin1+"'>"+noOfReviewsorg+"</td><td>"+Color+"</td><td id='reviewPer_"+asin1+"' class='TotalReviewsPerClass'>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr id='reviewHistory_"+asin1+"'><td class='TotalReviews30Class'>"+review30+"</td><td class='TotalReviews60Class'>"+review60+"</td><td class='TotalReviews90Class'>"+review90+"</td></tr></tbody></table></td></tr>";
                }
				CheckAllParsed++;
})
        	
        	
        	var g = setInterval(function() {
        		if(CheckAllParsed>=TotalLength)
        		{
        			var returnvar={};
        				returnvar['data']="yes";
 						if(innerhtmltable.trim()=="")
 						{
 							returnvar['data']="no";
 							innerhtmltable="<tr class='tblrow'><td colspan='8'>NO VARIATIONS FOUND</td></tr>";
 						}
 						
 						var returneddata=htmltable+"<tr class='tblrow'><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli' id='asinFileterB'>"+asintext+"</ul></div></td><td></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli' id='priceFileterB'>"+pricetext+"</ul></div><label id='priceSort'>Sort<iii class='arrowii downiii'></iii></label></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli' id='sizeFileterB'>"+sizetext+"</ul></div><label id='sizeSort'>Sort<iii class='arrowii downiii'></iii></label></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+reviewtext+"</ul></div><label id='reviewSort'>Sort<iii class='arrowii downiii'></iii></label ></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli' id='colorFileterB'>"+colortext+"</ul></div></td><td></td><td></td></tr>"+innerhtmltable+"</tbody></table></div></div>";
 						//var returneddata=htmltable+"<tr><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+asintext+"</ul></div></td><td></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+pricetext+"</ul></div><label id='priceSort'>Sort<iii class='arrowii downiii'></iii></label></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+sizetext+"</ul></div><label id='sizeSort'>Sort<iii class='arrowii downiii'></iii></label></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+reviewtext+"</ul></div><label id='reviewSort'>Sort<iii class='arrowii downiii'></iii></label ></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+colortext+"</ul></div></td><td></td></tr>"+innerhtmltable+"</tbody></table></div></div>";
 						 
        				returnvar['html']=returneddata;
        				returnvar['Preview']=Preview;
        				returnvar['Pasin']=PASIN;
        				returnvar['tenGroupAsin']=topAsinNew;
        				returnvar['review']=newWayReview;
						returnvar['tenGroup']=tenGroup;
						returnvar['pricearray']=pricearray;
						returnvar['sizearray']=sizearray;
						returnvar['asinarray']=asinarray;
						returnvar['colorarray']=colorarray;
        				returnvar['reviewPer']=varationpercentagefix;
        				//console.log("JSON.stringify(returnvar)--->",JSON.stringify(returnvar));
 						 callback(JSON.stringify(returnvar));
 	 					clearInterval(g);	 
 					}
 							},200); 
 		}
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
			var htmltable="<div id='variationModel' class='variationModelClass'><div class='table-variations'><span class='variationModelclose'>&times;</span><table id='variationTableID'><thead><tr class='tblrow'><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th><th>Review %</th><th style='text-align: center !important;'>History<table style='margin-top:-10px'><thead><tr><th>30 Days</th><th>60 Days</th><th>90 Days</th></tr></thead></table></th></tr></thead><tbody><td colspan='8'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
           // "<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th></tr></thead><tbody><tr><td colspan='8'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
            var returnvar={};
        	returnvar['html']=htmltable;
        	returnvar['data']="no";
            callback(JSON.stringify(returnvar));
        }
        })
        return true;
  }
  if(request.FunctionCall == "variationNew"){
  	
    $.ajax({
        type: 'GET',
        //url: request.url,
        url: scraperUrl+"https://www.amazon." + request.Region+  "/product-reviews/"+request.mainAsin+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=all_formats",
        dataType: 'html',
         data: {FunctionCall: 'VariationHistory',
            	country: request.Region,
            	asin: request.mainAsin},
        success: function(OuterHtml){
        	var ExecutionTimeObj= new Date();
        	var StartExecutionTime= ExecutionTimeObj.getTime();
        	var responseText={};
        	var day90= new Date();
        	day90.setDate(day90.getDate() - 90);
        	var milli90= day90.getTime();
        	//console.log("90--->",day90.getFullYear()+":"+day90.toLocaleString('default', { month: 'long' })+":"+day90.getDate());
        	var day60= new Date();
        	day60.setDate(day60.getDate() - 60);
        	var milli60= day60.getTime();
        	//console.log("60--->",day60.getFullYear()+":"+day60.toLocaleString('default', { month: 'long' })+":"+day60.getDate());
        	var day30= new Date();
        	day30.setDate(day30.getDate() - 30);
        	var milli30= day30.getTime();
        	var currencySymbol;
        	if(request.Region=="co.uk")
        	{
        		currencySymbol="£";
        	}
        	else if(request.Region=="com")
        	{
        		currencySymbol="$";
        	}
        	else
        	{
        		currencySymbol="€";
        	}
        						
        	var InnerhtmlObj = $(OuterHtml);
        	var reviewhtmlTop=InnerhtmlObj.find("[data-hook^='cr-filter-info-review-count']").html();
        	
        	if(request.Region=="co.uk" || request.Region=="co.uk")
        	{
        		if(typeof reviewhtmlTop=="undefined")
        		{
        			reviewhtmlTop="0 of 0 reviews";
        		}
        		var OFPOSTop=reviewhtmlTop.indexOf("of");
        		var aftreofTop=reviewhtmlTop.substring(OFPOSTop+2);
        	}
        	else
        	{
        		if(typeof reviewhtmlTop=="undefined")
        		{
        			reviewhtmlTop="0 de 0 reviews";
        		}
        		var OFPOSTop=reviewhtmlTop.indexOf(" de ");
        		var aftreofTop=reviewhtmlTop.substring(OFPOSTop+4);
        	}
        	
        	var replacedreviewTop=aftreofTop.replace("reviews", "");
        	var replacedreviewTop=aftreofTop.replace("opiniones", "");
        	reviewhtmlTop=replacedreviewTop.replace(" ", "");
        	reviewhtmlTop=replacedreviewTop.replace(",", "");
        	var noOfReviewsTop = parseInt(reviewhtmlTop);
        	var newWayReview={};
        	var varationpercentagefix={};
        	varationpercentagefix['actualTotal']=noOfReviewsTop;
        	varationpercentagefix['newTotal']=0;
        	varationpercentagefix['asin']={};	
        	var Shipping="No";			
        /*if(!responseText.message.length && request.VariationsAsin.length)
        {
        	responseText.status="success";
        	responseText.message=request.VariationsAsin;
        }*/
        //B00K2U5XFK,B0759N6YPJ,B00PIQXWVK
        /*var index = request.VariationsAsin.indexOf("B00K2U5XFK");
        if (index >= 0) 
        {
          	request.VariationsAsin.splice(index, 1);
        }
        index = request.VariationsAsin.indexOf("B0759N6YPJ");
        if (index >= 0) 
        {
          	request.VariationsAsin.splice(index, 1);
        }
        index = request.VariationsAsin.indexOf("B00PIQXWVK");
        if (index >= 0) 
        {
          	request.VariationsAsin.splice(index, 1);
        }*/
        if(request.VariationsAsin.length)
        {
        	responseText.status="success";
        	responseText.message=request.VariationsAsin;
        }
        console.log("request.VariationsAsin",request.VariationsAsin);
        console.log("responseText.message",responseText.message);
        if(responseText.status="success")
        {
        	var responsedataarray=[];
        	var responsedata={};
        	var loopite=0;
        	var innerhtmltable="";
        	var asintext="";
        	var asinarray=[];
        	var pricetext="";
        	var pricearray=[];
        	var sizetext="";
        	var sizearray=[];
        	var reviewtext="";
        	var reviewarray=[];
        	var colortext="";
        	var colorarray=[];
        	var cmpos;
        	var innerarraylength=request.VariationsAsin.length;
        	var removeddropdown=false;
        	var htmltable="<div id='variationModel' class='variationModelClass'><div class='table-variations'><span class='variationModelclose'>&times;</span><table id='variationTableID'><thead><tr class='tblrow'><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th><th>Review %</th><th style='text-align: center !important;'>History<table style='margin-top:-10px'><thead><tr><th>30 Days</th><th>60 Days</th><th>90 Days</th></tr></thead></table></th></tr></thead><tbody>";
        	//var htmltable="<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table id='variationTableID'><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th><th>Review %</th></tr></thead><tbody>";
        	if(responseText.message.length)
        	{
        	var TableB=2;
        	responseText.message.forEach(function(item, index){
        	var responsedata={};
        		 $.ajax({
            type: "GET",
            url: scraperUrl+"https://www.amazon." + request.Region+  "/dp/"+item+"?th=1&psc=1",
            data: {FunctionCall: 'VariationHistory',
            	country: request.Region,
            	asin: item},
        }).always(function(html) {
        		var innerarr=[];
        		var htmlObj = $(html);
        		var Price="No Buy Box";
        		htmlObj.find('[data-feature-name^="cerberus"]').remove();
        		if(typeof htmlObj.find("#priceblock_ourprice").html()!="undefined")
        		{
                	Price = htmlObj.find("#priceblock_ourprice").html();
                }
                else if(typeof htmlObj.find(".priceblock_vat_inc_price").html()!="undefined")
                {
                	Price = htmlObj.find(".priceblock_vat_inc_price").html();
                }
                else if(typeof htmlObj.find(".priceblock_vat_excl_price").html()!="undefined")
                {
                	Price = htmlObj.find(".priceblock_vat_excl_price").html();
                }
                else if(typeof htmlObj.find("#olp_feature_div").html()!="undefined" && typeof htmlObj.find("#olp_feature_div").find(".a-color-price").html()!="undefined" && !htmlObj.find(".a-color-price").hasClass("error-message"))
                {
                	Price = htmlObj.find("#olp_feature_div").find(".a-color-price").html();
                }
                else if(typeof htmlObj.find(".a-color-price").html()!="undefined" && !htmlObj.find(".a-color-price").hasClass("error-message"))
                { 	
                	Price = htmlObj.find(".a-color-price").html();
                }
                else if(typeof htmlObj.find("#priceblock_dealprice").html()!="undefined")
                {   
                	Price = htmlObj.find("#priceblock_dealprice").html();
                }
                
                if(typeof htmlObj.find("#priceblock_ourprice").html()!="undefined")
        		{
                	Price = htmlObj.find("#priceblock_ourprice").html();
                }
                else if(typeof htmlObj.find(".priceblock_vat_inc_price").html()!="undefined")
                {
                	Price = htmlObj.find(".priceblock_vat_inc_price").html();
                }
                else if(typeof htmlObj.find(".priceblock_vat_excl_price").html()!="undefined")
                {
                	Price = htmlObj.find(".priceblock_vat_excl_price").html();
                }
                else if(typeof htmlObj.find("#olp_feature_div").html()!="undefined" && typeof htmlObj.find("#olp_feature_div").find(".a-color-price").html()!="undefined" && !htmlObj.find(".a-color-price").hasClass("error-message") && htmlObj.find(".a-color-price").hasClass("priceBlockSalePriceString"))
                {
                	Price = htmlObj.find("#olp_feature_div").find(".a-color-price").html();
                }
                else if(typeof htmlObj.find("#price_inside_buybox").html()!="undefined")
                {
                	Price = htmlObj.find("#price_inside_buybox").html();
                }
                else if(typeof htmlObj.find(".priceBlockSalePriceString").html()!="undefined")
                {
                	Price = htmlObj.find(".priceBlockSalePriceString").html();
                }
                else if(typeof htmlObj.find(".a-color-price").html()!="undefined" && !htmlObj.find(".a-color-price").hasClass("error-message") && htmlObj.find(".a-color-price").hasClass("priceBlockSalePriceString"))
                { 	
                	Price = htmlObj.find(".a-color-price").html();
                }
                else if(typeof htmlObj.find(".a-color-price").html()!="undefined" && !htmlObj.find(".a-color-price").hasClass("error-message"))
                { 	
                	Price = htmlObj.find(".a-color-price").html();
                	if(typeof htmlObj.find('.a-color-price[dir^="rtl"]').first().parent().find('.a-color-base').html()!="undefined")
                	{
                		Shipping=htmlObj.find('.a-color-price[dir^="rtl"]').first().parent().find('.a-color-base').first().text().replace(/[^\d\.,]+/g, '');
  						Shipping = Shipping.toString().replace(",",".");
  					}
                }
                else if(typeof htmlObj.find("#priceblock_dealprice").html()!="undefined")
                {  
                	Price = htmlObj.find("#priceblock_dealprice").html();
                }
                Price=Price.replace(/Currently unavailable./ig, '');
                Price=Price.replace(/No disponible./ig, '');
                Price=Price.replace(/Actuellement indisponible./ig, '');
                Price=Price.replace(/<span class="p13n-sc-price">/ig, '');
                Price=Price.replace(/&nbsp;€/ig, '');
               	Price=Price.replace(/Currently unavailable ./ig, '');
                Price=Price.replace(" ","");
                Price=Price.replace(/[^\d\.,]+/g, '');
                if(Price.trim()!="")
                {
                	if(typeof Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)!="undefined" && Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)!=null)
                	Price = Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
                }
                if(Shipping.toString().trim()=="")
  				{
  					Shipping=0;
  				}
                if(!isNaN(Shipping))
  				{
  					Price=Price.replace(/[^\d\.,]+/g, '');
  					Price= parseFloat(parseFloat(Price) + parseFloat(Shipping));
  				}
  				Price=Price.toString().replace(/[^\d\.,]+/g, '');
                Price=Price.toString().replace(/$/g, '');
                Price=Price.toString().replace(/£/g, '');
                Price=Price.toString().replace(/€/g, '');
                if(Price.toString().trim()!="")
                {
                	if(typeof Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)!="undefined" && Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)!=null)
                	Price = Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
                	Price= parseFloat(Price).toFixed(2);
                }
                else
                {
                	Price="N/A";
                }
               
                
                
                
                
                
                
                
                
                Price=Price.toString().trim();
                if(Price!="N/A")
                Price = currencySymbol+""+Price;
                if(typeof pricearray[Price]=="undefined")
                {
                	pricearray[Price]=Price;
                	pricetext=pricetext+"<li class='hiddenli'><label><input type='checkbox' name='pricefilter[]' value='"+Price+"'>"+Price+"</label></li>";
                }
                var Size="";
                var Image="";
                if(typeof htmlObj.find("#imgTagWrapperId").find("img")!="undefined")
                {
                	Image = htmlObj.find("#imgTagWrapperId").find("img").attr("src");
                }
               
                var Color="";
                if(typeof htmlObj.find('[name^="dropdown_selected_"]').html()!="undefined")
                {
                	Color=htmlObj.find('[name^="dropdown_selected_"] option:selected').attr('data-a-html-content');
                }
                if(typeof htmlObj.find('[id^="variation_"]')!="undefined")
                {
                	if(typeof htmlObj.find('[id^="variation_"]').find(".selection").html()!="undefined")
                	{
                 		Color = htmlObj.find('[id^="variation_"]').find(".selection").html().replace(" ","");
                 	}
                }
                else if(typeof htmlObj.find("#variation_color_name")!="undefined")
                {
                	if(typeof htmlObj.find("#variation_color_name").find(".selection").html()!="undefined")
                	{
                 		Color = htmlObj.find("#variation_color_name").find(".selection").html().replace(" ","");
                 	}
                }
                 if(typeof  htmlObj.find("#variation_size_name")!="undefined")
                {
                	if(typeof  htmlObj.find("#variation_size_name").find("select[name^='dropdown_selected_size_name']").html()!="undefined")
                	{
                		innerarraylength=innerarraylength+htmlObj.find("#variation_size_name").find("select[name^='dropdown_selected_size_name']").find("[data-a-css-class='dropdownAvailable']").length;
                		htmlObj.find("#variation_size_name").find("select[name^='dropdown_selected_size_name']").find("[data-a-css-class='dropdownAvailable']").each(function(index,val){
                		
                			var Sizein=$(this).attr("data-a-html-content");
                			if(typeof Sizein!="undefined")
                			{
                					Sizein=Sizein.replace(' ','');
                			}
                			else
                			{
                				Sizein="";
                			}
                			var asin1=$(this).val();
                			var cmpos=asin1.indexOf(",");
    							asin1=asin1.substring(cmpos+1);
    							if(typeof responsedataarray[asin1]!="undefined")
    							{
    								var vcontinue;
    							}
    							else
    							{
    							responsedataarray[asin1]=asin1;
    							if(typeof sizearray[Sizein]=="undefined")
                				{
                					sizearray[Sizein]=Sizein;
                					sizetext=sizetext+"<li class='hiddenli'><label><input type='checkbox' name='sizefilter[]' value='"+Sizein+"'>"+Sizein+"</label></li>";
                				}
                				if(typeof asinarray[asin1]=="undefined")
                				{
                					asinarray[asin1]=asin1;
                					asintext=asintext+"<li class='hiddenli'><label><input type='checkbox' name='asinfilter[]' value='"+asin1+"'>"+asin1+"</label></li>";
                				}
                					
        						//console.log("30--->",day30.getFullYear()+":"+day30.toLocaleString('default', { month: 'long' })+":"+day30.getDate());
        						var review90=0;
        						var review60=0;
        						var review30=0;
        						var ReviewPagenumber=1;
                				$.ajax({
            type: "GET",
            url: scraperUrl+"https://www.amazon." + request.Region+  "/product-reviews/"+asin1+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            data: {FunctionCall: 'VariationHistory',
            	country: request.Region,
            	asin: asin1},
            success: function(Innerhtml){

       								var CurrentPageNumber=ReviewPagenumber;
        							var InnerhtmlObj = $(Innerhtml);
        							var ReviewHistoryTable="";
        							var reviewhtml=InnerhtmlObj.find("[data-hook^='cr-filter-info-review-count']").html();
        							var PriceNew="N/A";
        							if(typeof InnerhtmlObj.find(".product-price-line").html()!="undefined")
        							{
        								if(typeof InnerhtmlObj.find(".product-price-line").find(".arp-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".arp-price").html();
        									PriceNew= Price;
        									cmpos=Price.indexOf("-");
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        										PriceNew= Price;
        									}

        								}
        								else if(typeof InnerhtmlObj.find(".product-price-line").find(".a-color-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".a-color-price").html();
        									cmpos=Price.indexOf("-");
        									PriceNew= Price;
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        										PriceNew= Price;
        									}

        								}
        								
        							}
        							else if(typeof InnerhtmlObj.find(".product-price-line").html()!="undefined")
        							{
        								if(typeof InnerhtmlObj.find(".product-price-line").find(".arp-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".arp-price").html();
        									cmpos=Price.indexOf("-");
        									PriceNew= Price;
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        										PriceNew= Price;
        									}
        								}
        								else if(typeof InnerhtmlObj.find(".product-price-line").find(".a-color-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".a-color-price").html();
        									cmpos=Price.indexOf("-");
        									PriceNew= Price;
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        										PriceNew= Price;
        									}

        								}
        								
        							}
        							if(request.Region.trim()=="co.uk" || request.Region.trim()=="com")
        							{
        								if(typeof reviewhtml=="undefined")
        								{
        								reviewhtml="0 of 0 reviews";
        								}
        								var OFPOS=reviewhtml.indexOf("of");
        								var aftreofTop=reviewhtml.substring(OFPOS+2);
        							}
        							else
        							{
        								if(typeof reviewhtml=="undefined")
        								{
        								reviewhtml="0 de 0 reviews";
        								}
        								var OFPOS=reviewhtml.indexOf(" de ");
        								var aftreofTop=reviewhtml.substring(OFPOS+4);
        							}
        							
        							var replacedreview=aftreofTop.replace("reviews", "");
        							var replacedreview=aftreofTop.replace("opiniones", "");
        							
        							reviewhtml=replacedreview.replace(" ", "");
        							var noOfReviews = reviewhtml;
        							if(typeof reviewarray[noOfReviews]=="undefined")
                					{
                						reviewarray[noOfReviews]=noOfReviews;
                						reviewtext=reviewtext+"<li class='hiddenli'><label><input type='checkbox' name='reviewfilter[]' value='"+noOfReviews+"'>"+noOfReviews+"</label></li>";
                					}
        							var pageurl="https://www.amazon." + request.Region+  "/dp/"+asin1+"?th=1&psc=1";
    								var reviewPercentage="0%";
    								noOfReviews=parseInt(noOfReviews);	
    								var numberOfPages=Math.ceil(noOfReviews/10);
 									if(!isNaN(noOfReviews) && noOfReviewsTop>0)
 									{
 										varationpercentagefix['asin'][asin1]=noOfReviews;
 										varationpercentagefix['newTotal']=varationpercentagefix['newTotal']+noOfReviews;
 										reviewPercentage=(noOfReviews/noOfReviewsTop*100);
 										reviewPercentage=reviewPercentage.toFixed(2);
 										reviewPercentage=reviewPercentage+"%";
 									}
 									if(isNaN(noOfReviews))
 									{
 										noOfReviews=0;
 									}
        							if(Price.toString().trim()!="")
        							{
        								Price=Price.toString().trim();
        							}
        							
            
        							//if(PriceNew=="N/A")
        							{
        							$.ajax({
            type: "GET",
            url: scraperUrl+"https://www.amazon." + request.Region+  "/dp/"+asin1+"?th=1&psc=1",
            data: {FunctionCall: 'VariationHistory',
            	country: request.Region,
            	asin: asin1},
            success: function(Innerhtmlsup){
        		var InnerhtmlsupObj = $(Innerhtmlsup);
        		var parser = new DOMParser();
      		var InnerhtmlsupObjdoc = parser.parseFromString(Innerhtmlsup, 'text/html');
        		var Price="No Buy Box";
        		var Shipping="No";
        		InnerhtmlsupObj.find('[data-feature-name^="cerberus"]').remove();
        		if(typeof InnerhtmlsupObj.find("#priceblock_ourprice").html()!="undefined")
        		{
                	Price = InnerhtmlsupObj.find("#priceblock_ourprice").html();
                }
                else if(typeof InnerhtmlsupObj.find(".priceblock_vat_inc_price").html()!="undefined")
                {
                	Price = InnerhtmlsupObj.find(".priceblock_vat_inc_price").html();
                }
                else if(typeof InnerhtmlsupObj.find(".priceblock_vat_excl_price").html()!="undefined")
                {
                	Price = InnerhtmlsupObj.find(".priceblock_vat_excl_price").html();
                }
                else if(typeof InnerhtmlsupObj.find("#olp_feature_div").html()!="undefined" && typeof InnerhtmlsupObj.find("#olp_feature_div").find(".a-color-price").html()!="undefined" && !InnerhtmlsupObj.find(".a-color-price").hasClass("error-message") && InnerhtmlsupObj.find(".a-color-price").hasClass("priceBlockSalePriceString"))
                {
                	Price = InnerhtmlsupObj.find("#olp_feature_div").find(".a-color-price").html();
                }
                else if(typeof InnerhtmlsupObj.find("#price_inside_buybox").html()!="undefined")
                {
                	Price = InnerhtmlsupObj.find("#price_inside_buybox").html();
                }
                else if(typeof InnerhtmlsupObj.find(".priceBlockSalePriceString").html()!="undefined")
                {
                	Price = InnerhtmlsupObj.find(".priceBlockSalePriceString").html();
                }
                else if(typeof InnerhtmlsupObj.find(".a-color-price").html()!="undefined" && !InnerhtmlsupObj.find(".a-color-price").hasClass("error-message") && InnerhtmlsupObj.find(".a-color-price").hasClass("priceBlockSalePriceString"))
                { 	
                	Price = InnerhtmlsupObj.find(".a-color-price").html();
                }
                else if(typeof InnerhtmlsupObj.find(".a-color-price").html()!="undefined" && !InnerhtmlsupObj.find(".a-color-price").hasClass("error-message"))
                { 	
                	Price = InnerhtmlsupObj.find(".a-color-price").html();
                	if(typeof InnerhtmlsupObj.find('.a-color-price[dir^="rtl"]').first().parent().find('.a-color-base').html()!="undefined")
                	{
                		Shipping=InnerhtmlsupObj.find('.a-color-price[dir^="rtl"]').first().parent().find('.a-color-base').first().text().replace(/[^\d\.,]+/g, '');
  						Shipping = Shipping.toString().replace(",",".");
  					}
                }
                else if(typeof InnerhtmlsupObj.find("#priceblock_dealprice").html()!="undefined")
                {
                	Price = InnerhtmlsupObj.find("#priceblock_dealprice").html();
                }
                Price=Price.replace(/Currently unavailable./ig, '');
                Price=Price.replace(/No disponible./ig, '');
                Price=Price.replace(/Actuellement indisponible./ig, '');
                Price=Price.replace(/<span class="p13n-sc-price">/ig, '');
                Price=Price.replace(/&nbsp;€/ig, '');
               	Price=Price.replace(/Currently unavailable ./ig, '');
                Price=Price.replace(" ","");
                Price=Price.replace(/[^\d\.,]+/g, '');
                if(Price.trim()!="")
                {	
                	if(typeof Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)!="undefined" && Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)!=null)
                	Price = Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
                }
                if(Shipping.toString().trim()=="")
  				{
  					Shipping=0;
  				}
                if(!isNaN(Shipping))
  				{
  					Price=Price.replace(/[^\d\.,]+/g, '');
  					Price= parseFloat(parseFloat(Price) + parseFloat(Shipping));
  				}
  				Price=Price.toString().replace(/[^\d\.,]+/g, '');
                Price=Price.toString().replace(/$/g, '');
                Price=Price.toString().replace(/£/g, '');
                Price=Price.toString().replace(/€/g, '');
                if(Price.toString().trim()!="")
                {
                	if(typeof Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)!="undefined" && Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)!=null)
                	Price = Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
                	Price= parseFloat(Price).toFixed(2);
                }
                else
                {
                	Price="N/A";
                }
               
                
                
                
                
                Price=Price.toString().trim();
                if(Price!="N/A")
                Price = currencySymbol+""+Price;
                if(typeof pricearray[Price]=="undefined")
                {
                	pricearray[Price]=Price;
                	pricetext=pricetext+"<li class='hiddenli'><label><input type='checkbox' name='pricefilter[]' value='"+Price+"'>"+Price+"</label></li>";
                }
            
            
            
            
            
            
        							var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        							if(reviewlength==0)
        							{
        								innerarraylength--;
        								responsedataarray.push(asin1);
        								if(TableB%2!=0)
 										{
											innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+asin1+"'>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
										}
										else
										{
											innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+asin1+"'>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
										}
										TableB++;
        							}
        							InnerhtmlObj.find("[data-hook='review']").each(function(){
        								reviewlength--;
        								var DateText=$(this).find("[data-hook='review-date']").html();
        								var dateobj= new Date(DateText);
        								var currentmilli=dateobj.getTime();
        								if(currentmilli>=milli30)
        								{
        									review90=review90+1;
        									review60=review60+1;
        									review30=review30+1;
        									if(!reviewlength && ReviewPagenumber<numberOfPages)
        									{}
        								}
        								else if(currentmilli>=milli60)
        								{
        									review90=review90+1;
        									review60=review60+1;
        									if(!reviewlength && ReviewPagenumber<numberOfPages)
        									{}
        								}
        								else if(currentmilli>=milli90)
        								{
        									review90=review90+1;
        									if(!reviewlength && ReviewPagenumber<numberOfPages)
        									{}
        								}
        								else
        								{
                							innerarraylength--;
        									responsedataarray.push(asin1);
        									
 											if(TableB%2!=0)
 											{
 												if(numberOfPages<=ReviewPagenumber)
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table>";
        										}
        										else
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr id='Asin_"+asin1+"'><td colspan='3'>Loading..</td></tr></tbody></table>";
        										}
												innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+asin1+"'>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
											}
											else
											{
												if(numberOfPages<=ReviewPagenumber)
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr id='Asin_"+asin1+"'><td colspan='3'>Loading..</td></tr></tbody></table>";
        										}
        										else
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr id='Asin_"+asin1+"'><td colspan='3'>Loading..</td></tr></tbody></table>";
        										}
												innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+asin1+"'>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
											}
											TableB++;
											return false;
        								}
        								if(!reviewlength)
        								{
        									innerarraylength--;
        									responsedataarray.push(asin1);
        									if(numberOfPages>ReviewPagenumber)
        									{
        										newWayReview[asin1]={};
        										newWayReview[asin1]["numberOfPages"]=numberOfPages;
        										newWayReview[asin1]["noOfReviews"]=noOfReviews;
        										newWayReview[asin1]["review90"]=review90;
        										newWayReview[asin1]["review60"]=review60;
        										newWayReview[asin1]["review30"]=review30;
        									}
 											if(TableB%2!=0)
 											{
 												if(numberOfPages<=ReviewPagenumber)
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table>";
        										}
        										else
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr id='Asin_"+asin1+"'><td colspan='3'>Loading..</td></tr></tbody></table>";
        										}
												innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+asin1+"'>"+reviewPercentage+"</td><td>"+ReviewHistoryTable+"</td></tr>";
											}
											else
											{
												if(numberOfPages<=ReviewPagenumber)
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table>";
        										}
        										else
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr id='Asin_"+asin1+"'><td colspan='3'>Loading..</td></tr></tbody></table>";
        										}
												innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+asin1+"'>"+reviewPercentage+"</td><td>"+ReviewHistoryTable+"</td></tr>";
											}
											TableB++;
        								}
        							})
        							},
        						error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 console.log("errorThrown--->",errorThrown);
        							}
								})
								}
								/*else
								{
									var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        							if(reviewlength==0)
        							{
        								innerarraylength--;
        								responsedataarray.push(asin1);
        								if(TableB%2!=0)
 										{
											innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+asin1+"'>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
										}
										else
										{
											innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+asin1+"'>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
										}
										TableB++;
        							}
        							InnerhtmlObj.find("[data-hook='review']").each(function(){
        								reviewlength--;
        								var DateText=$(this).find("[data-hook='review-date']").html();
        								var dateobj= new Date(DateText);
        								var currentmilli=dateobj.getTime();
        								if(currentmilli>=milli30)
        								{
        									review90=review90+1;
        									review60=review60+1;
        									review30=review30+1;
        									if(!reviewlength && ReviewPagenumber<numberOfPages)
        									{}
        								}
        								else if(currentmilli>=milli60)
        								{
        									review90=review90+1;
        									review60=review60+1;
        									if(!reviewlength && ReviewPagenumber<numberOfPages)
        									{}
        								}
        								else if(currentmilli>=milli90)
        								{
        									review90=review90+1;
        									if(!reviewlength && ReviewPagenumber<numberOfPages)
        									{}
        								}
        								else
        								{
                							innerarraylength--;
        									responsedataarray.push(asin1);
        									
 											if(TableB%2!=0)
 											{
 												if(numberOfPages<=ReviewPagenumber)
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table>";
        										}
        										else
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr id='Asin_"+asin1+"'><td colspan='3'>Loading..</td></tr></tbody></table>";
        										}
												innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+asin1+"'>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
											}
											else
											{
												if(numberOfPages<=ReviewPagenumber)
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr></tr><tr id='Asin_"+asin1+"'><td colspan='3'>Loading..</td></tr></tbody></table>";
        										}
        										else
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr></tr><tr id='Asin_"+asin1+"'><td colspan='3'>Loading..</td></tr></tbody></table>";
        										}
												innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+asin1+"'>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
											}
											TableB++;
											return false;
        								}
        								if(!reviewlength)
        								{
        									innerarraylength--;
        									responsedataarray.push(asin1);
        									if(numberOfPages>ReviewPagenumber)
        									{
        										newWayReview[asin1]={};
        										newWayReview[asin1]["numberOfPages"]=numberOfPages;
        										newWayReview[asin1]["noOfReviews"]=noOfReviews;
        										newWayReview[asin1]["review90"]=review90;
        										newWayReview[asin1]["review60"]=review60;
        										newWayReview[asin1]["review30"]=review30;
        									}
 											if(TableB%2!=0)
 											{
 												if(numberOfPages<=ReviewPagenumber)
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table>";
        										}
        										else
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr id='Asin_"+asin1+"'><td colspan='3'>Loading..</td></tr></tbody></table>";
        										}
												innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+asin1+"'>"+reviewPercentage+"</td><td>"+ReviewHistoryTable+"</td></tr>";
											}
											else
											{
												if(numberOfPages<=ReviewPagenumber)
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table>";
        										}
        										else
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr></tr><tr id='Asin_"+asin1+"'><td colspan='3'>Loading..</td></tr></tbody></table>";
        										}
												innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td id='reviewPer_"+asin1+"'>"+ReviewHistoryTable+"</td></tr>";
											}
											TableB++;
        								}
        							})
								}*/
								},
        						error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 console.log("errorThrown--->",errorThrown);
        							}
								})
							}
                		})
                		if(typeof htmlObj.find("#variation_size_name").find("select[name^='dropdown_selected_size_name'] option:selected").attr('data-a-html-content')!="undefined")
                		{
                			Size = htmlObj.find("#variation_size_name").find("select[name^='dropdown_selected_size_name'] option:selected").attr('data-a-html-content').replace(" ","");
                			if(typeof Size!="undefined")
                			{
                				Size=Size.replace(' ','');
                			}
                			else
                			{
                				Size="";
                			}
                			
                			var pageurl="https://www.amazon." + request.Region+  "/dp/"+item+"?th=1&psc=1";
								//innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+Color+"</td></tr>";
                		}
                	}
                	else if(typeof  htmlObj.find("#variation_size_name").find(".selection")!="undefined")
                	{
                		Size = htmlObj.find("#variation_size_name").find(".selection").html();
                		if(typeof Size!="undefined")
                			{
                				Size=Size.replace(' ','');
                			}
                			else
                			{
                				Size="";
                			}
                			var pageurl="https://www.amazon." + request.Region+  "/dp/"+item+"?th=1&psc=1";
								//innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+Color+"</td></tr>";
                	}
                }
                else if(typeof  htmlObj.find("#variation_flavor_name")!="undefined")
                {
                	Size = htmlObj.find("#variation_flavor_name").find(".selection").html();
                	if(typeof Size!="undefined")
                			{
                				Size=Size.replace(' ','');
                			}
                			else
                			{
                				Size="";
                			}
                			var pageurl="https://www.amazon." + request.Region+  "/dp/"+item+"?th=1&psc=1";
								//innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+Color+"</td></tr>";
                }
                	if(typeof sizearray[Size]=="undefined")
                	{
                		sizearray[Size]=Size;
                		sizetext=sizetext+"<li class='hiddenli'><label><input type='checkbox' name='sizefilter[]' value='"+Size+"'>"+Size+"</label></li>";
                	}
                	if(typeof asinarray[item]=="undefined")
                	{
                		asinarray[item]=item;
                		asintext=asintext+"<li class='hiddenli'><label><input type='checkbox' name='asinfilter[]' value='"+item+"'>"+item+"</label></li>";
                	}
                	if(typeof colorarray[Color]=="undefined")
                	{
                		colorarray[Color]=Color;
                		colortext=colortext+"<li class='hiddenli'><label><input type='checkbox' name='colorfilter[]' value='"+Color+"'>"+Color+"</label></li>";
                	}
                	if(index==responseText.message.length-1)
                	{
                		loopite=responseText.message.length;
                	}
                	var review90=0;
        			var review60=0;
        			var review30=0;
        			var ReviewPagenumber=1;
                	$.ajax({
            type: "GET",
            url: scraperUrl+"https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            data: {FunctionCall: 'VariationHistory',
            	country: request.Region,
            	asin: item},
            success: function(Innerhtml){
        							
        							var InnerhtmlObj = $(Innerhtml);
        							var ReviewHistoryTable="";
        							var CurrentPageNumber=ReviewPagenumber;
        							var reviewhtml=InnerhtmlObj.find("[data-hook^='cr-filter-info-review-count']").html();
        							if(typeof InnerhtmlObj.find(".product-price-line").html()!="undefined")
        							{
        								if(typeof InnerhtmlObj.find(".product-price-line").find(".arp-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".arp-price").html();
        									cmpos=Price.indexOf("-");
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        									}

        								}
        								else if(typeof InnerhtmlObj.find(".product-price-line").find(".a-color-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".a-color-price").html();
        									cmpos=Price.indexOf("-");
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        									}

        								}
        								
        							}
        							else if(typeof InnerhtmlObj.find(".product-price-line").html()!="undefined")
        							{
        								if(typeof InnerhtmlObj.find(".product-price-line").find(".arp-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".arp-price").html();
        									cmpos=Price.indexOf("-");
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        									}
        								}
        								else if(typeof InnerhtmlObj.find(".product-price-line").find(".a-color-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".a-color-price").html();
        									cmpos=Price.indexOf("-");
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        									}

        								}
        								
        							}
        							
        							$.ajax({
            type: "GET",
            url: scraperUrl+"https://www.amazon." + request.Region+  "/dp/"+item+"?th=1&psc=1",
            data: {FunctionCall: 'VariationHistory',
            	country: request.Region,
            	asin: item},
            success: function(Innerhtmlsup){
            Innerhtmlsup=$(Innerhtmlsup);
            	if(typeof Innerhtmlsup.find("#priceblock_ourprice").html()!="undefined")
        		{
                	Price = Innerhtmlsup.find("#priceblock_ourprice").html();
                }
                else if(typeof Innerhtmlsup.find(".priceblock_vat_inc_price").html()!="undefined")
                {
                	Price = Innerhtmlsup.find(".priceblock_vat_inc_price").html();
                }
                else if(typeof Innerhtmlsup.find(".priceblock_vat_excl_price").html()!="undefined")
                {
                	Price = Innerhtmlsup.find(".priceblock_vat_excl_price").html();
                }
                else if(typeof Innerhtmlsup.find("#olp_feature_div").html()!="undefined" && typeof Innerhtmlsup.find("#olp_feature_div").find(".a-color-price").html()!="undefined" && !Innerhtmlsup.find(".a-color-price").hasClass("error-message") && Innerhtmlsup.find(".a-color-price").hasClass("priceBlockSalePriceString"))
                {
                	Price = Innerhtmlsup.find("#olp_feature_div").find(".a-color-price").html();
                }
                else if(typeof Innerhtmlsup.find("#price_inside_buybox").html()!="undefined")
                {
                	Price = Innerhtmlsup.find("#price_inside_buybox").html();
                }
                else if(typeof Innerhtmlsup.find(".priceBlockSalePriceString").html()!="undefined")
                {
                	Price = Innerhtmlsup.find(".priceBlockSalePriceString").html();
                }
                else if(typeof Innerhtmlsup.find(".a-color-price").html()!="undefined" && !Innerhtmlsup.find(".a-color-price").hasClass("error-message") && Innerhtmlsup.find(".a-color-price").hasClass("priceBlockSalePriceString"))
                { 	
                	Price = Innerhtmlsup.find(".a-color-price").html();
                }
                else if(typeof Innerhtmlsup.find(".a-color-price").html()!="undefined" && !Innerhtmlsup.find(".a-color-price").hasClass("error-message"))
                { 	
                	Price = Innerhtmlsup.find(".a-color-price").html();
                	if(typeof Innerhtmlsup.find('.a-color-price[dir^="rtl"]').first().parent().find('.a-color-base').html()!="undefined")
                	{
                		Shipping=Innerhtmlsup.find('.a-color-price[dir^="rtl"]').first().parent().find('.a-color-base').first().text().replace(/[^\d\.,]+/g, '');
  						Shipping = Shipping.toString().replace(",",".");
  					}
                }
                else if(typeof Innerhtmlsup.find("#priceblock_dealprice").html()!="undefined")
                {  
                	Price = Innerhtmlsup.find("#priceblock_dealprice").html();
                }
                Price=Price.replace(/Currently unavailable./ig, '');
                Price=Price.replace(/No disponible./ig, '');
                Price=Price.replace(/&nbsp;€/ig, '');
                Price=Price.replace(/Actuellement indisponible./ig, '');
                Price=Price.replace(/<span class="p13n-sc-price">/ig, '');
               	Price=Price.replace(/Currently unavailable ./ig, '');
                Price=Price.replace(" ","");
                Price=Price.replace(/[^\d\.,]+/g, '');
                if(Price.trim()!="")
                {
                	if(typeof Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)!="undefined" && Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)!=null)
                	Price = Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
                }
                if(Shipping.toString().trim()=="")
  				{
  					Shipping=0;
  				}
                if(!isNaN(Shipping))
  				{
  					Price=Price.replace(/[^\d\.,]+/g, '');
  					Price= parseFloat(parseFloat(Price) + parseFloat(Shipping));
  				}
  				Price=Price.toString().replace(/[^\d\.,]+/g, '');
                Price=Price.toString().replace(/$/g, '');
                Price=Price.toString().replace(/£/g, '');
                Price=Price.toString().replace(/€/g, '');
                if(Price.toString().trim()!="")
                {
                	if(typeof Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)!="undefined" && Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)!=null)
                	Price = Price.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
                	Price= parseFloat(Price).toFixed(2);
                }
                else
                {
                	Price="N/A";
                }
            Price=Price.toString().trim();
            if(Price!="N/A")
            Price = currencySymbol+""+Price;
            if(typeof pricearray[Price]=="undefined")
            {
                pricearray[Price]=Price;
                pricetext=pricetext+"<li class='hiddenli'><label><input type='checkbox' name='pricefilter[]' value='"+Price+"'>"+Price+"</label></li>";
            }
            
            
            
            
            
        							
        							//var OFPOS=reviewhtml.indexOf("of");
        							if(request.Region.trim()=="co.uk" || request.Region.trim()=="com")
        							{
        								if(typeof reviewhtml=="undefined")
        								{
        									reviewhtml="0 of 0 reviews";
        								}
        								var OFPOS=reviewhtml.indexOf("of");
        								var aftreofTop=reviewhtml.substring(OFPOS+2);
        							}
        							else
        							{
        								if(typeof reviewhtml=="undefined")
        								{
        									reviewhtml="0 de 0 reviews";
        								}
        								var OFPOS=reviewhtml.indexOf(" de ");
        								var aftreofTop=reviewhtml.substring(OFPOS+4);
        							}
        	
        							var replacedreview=aftreofTop.replace("reviews", "");
        							var replacedreview=aftreofTop.replace("opiniones", "");
        							
        							reviewhtml=replacedreview.replace(" ", "");
        							reviewhtml=replacedreview.replace(",", "");
        							var noOfReviews = reviewhtml;
    								var pageurl="https://www.amazon." + request.Region+  "/dp/"+item+"?th=1&psc=1";
    								var reviewPercentage="0%";
    								noOfReviews=parseInt(noOfReviews);
    								var numberOfPages=Math.ceil(noOfReviews/10);
 									if(!isNaN(noOfReviews) && noOfReviewsTop>0)
 									{
 										varationpercentagefix['newTotal']=varationpercentagefix['newTotal']+noOfReviews;
 										varationpercentagefix['asin'][item]=noOfReviews;
 										reviewPercentage=(noOfReviews/noOfReviewsTop*100);
 										reviewPercentage=reviewPercentage.toFixed(2);
 										reviewPercentage=reviewPercentage+"%";
 									}
 									if(isNaN(noOfReviews))
 									{
 										noOfReviews=0;
 									}
 									
        							var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        							if(reviewlength==0)
        							{
        								innerarraylength--;
        								responsedataarray.push(item);
        								if(TableB%2!=0)
 										{
											innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+item+"'>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
										}
										else
										{
											innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+item+"'>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
										}
										TableB++;
        							}
        							InnerhtmlObj.find("[data-hook='review']").each(function(){
        								reviewlength--;
        								var DateText=$(this).find("[data-hook='review-date']").html();
        								var dateobj= new Date(DateText);
        								var currentmilli=dateobj.getTime();
        								if(currentmilli>=milli30)
        								{
        									review90=review90+1;
        									review60=review60+1;
        									review30=review30+1;
        									if(!reviewlength && ReviewPagenumber<numberOfPages)
        									{}
        								}
        								else if(currentmilli>=milli60)
        								{
        									review90=review90+1;
        									review60=review60+1;
        									if(!reviewlength && ReviewPagenumber<numberOfPages)
        									{}
        								}
        								else if(currentmilli>=milli90)
        								{
        									review90=review90+1;
        									if(!reviewlength && ReviewPagenumber<numberOfPages)
        									{}
        								}
        								else
        								{
        									innerarraylength--;
        									responsedataarray.push(item);
        									if(TableB%2!=0)
 											{
												innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+item+"'>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
											}
											else
											{
												innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+item+"'>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
											}
											TableB++;
											return false;
        								}
        								//if(!reviewlength && CurrentPageNumber==numberOfPages)
        								if(!reviewlength)
        								{
        									innerarraylength--;
        									responsedataarray.push(item);
        									if(numberOfPages>ReviewPagenumber)
        									{
        										newWayReview[item]={};
        										newWayReview[item]["numberOfPages"]=numberOfPages;
        										newWayReview[item]["noOfReviews"]=noOfReviews;
        										newWayReview[item]["review90"]=review90;
        										newWayReview[item]["review60"]=review60;
        										newWayReview[item]["review30"]=review30;
        									}
 											if(TableB%2!=0)
 											{
 												if(numberOfPages<=ReviewPagenumber)
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table>";
        										}
        										else
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr id='Asin_"+item+"'><td colspan='3'>Loading..</td></tr></tbody></table>";
        										}
												innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+item+"'>"+reviewPercentage+"</td><td>"+ReviewHistoryTable+"</td></tr>";
											}
											else
											{
												if(numberOfPages<=ReviewPagenumber)
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table>";
        										}
        										else
        										{
        											ReviewHistoryTable="<table style='margin-top: -10px;'><tbody><tr id='Asin_"+item+"'><td colspan='3'>Loading..</td></tr></tbody></table>";
        										}
												innerhtmltable=innerhtmltable+"<tr class='tblrow'><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td id='reviewPer_"+item+"'>"+reviewPercentage+"</td><td>"+ReviewHistoryTable+"</td></tr>";
											}
											TableB++;
        								}
        							})
        						},
								error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 console.log("errorThrown--->",errorThrown);
        							}
								})	
        							
        							
								},
								error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 console.log("errorThrown--->",errorThrown);
        							}
								})
        })
        	})
        	var g = setInterval(function() {
        			//console.log("responsedataarray.length----->",responsedataarray.length);
        			//console.log("responseText.message.length----->",responseText.message.length);
        			//console.log("innerarraylength----->",innerarraylength);
        			//var ExecutionTimeObj= new Date();
        			//var StartExecutionTime= ExecutionTimeObj.getTime();
        			var ExecutionTimeNowObj= new Date();
        			var CurrentExecutionTime= ExecutionTimeNowObj.getTime();
        			//console.log("CurrentExecutionTime-->",CurrentExecutionTime);
 					if((responsedataarray.length>=responseText.message.length && !innerarraylength) || (CurrentExecutionTime-StartExecutionTime>50000 && innerhtmltable.trim()!=""))
 					{
 						var returnvar={};
        				returnvar['data']="yes";
 						$('.canvasjs-chart-toolbar').remove();
 						if(innerhtmltable.trim()=="")
 						{
 							returnvar['data']="no";
 							innerhtmltable="<tr class='tblrow'><td colspan='6'>NO VARIATIONS FOUND</td></tr>";
 						}
 						
 						var returneddata=htmltable+"<tr class='tblrow'><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+asintext+"</ul></div></td><td></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+pricetext+"</ul></div><label id='priceSort'>Sort<iii class='arrowii downiii'></iii></label></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+sizetext+"</ul></div><label id='sizeSort'>Sort<iii class='arrowii downiii'></iii></label></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+reviewtext+"</ul></div><label id='reviewSort'>Sort<iii class='arrowii downiii'></iii></label ></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+colortext+"</ul></div></td><td></td><td></td></tr>"+innerhtmltable+"</tbody></table></div></div>";
 						//var returneddata=htmltable+"<tr><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+asintext+"</ul></div></td><td></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+pricetext+"</ul></div><label id='priceSort'>Sort<iii class='arrowii downiii'></iii></label></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+sizetext+"</ul></div><label id='sizeSort'>Sort<iii class='arrowii downiii'></iii></label></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+reviewtext+"</ul></div><label id='reviewSort'>Sort<iii class='arrowii downiii'></iii></label ></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+colortext+"</ul></div></td><td></td></tr>"+innerhtmltable+"</tbody></table></div></div>";
 						 
        				returnvar['html']=returneddata;
        				returnvar['review']=newWayReview;
        				returnvar['reviewPer']=varationpercentagefix;
        				//console.log("JSON.stringify(returnvar)--->",JSON.stringify(returnvar));
 						 callback(JSON.stringify(returnvar));
 	 					clearInterval(g);	 
 					}
 							},200); 
        	 
 			}
 			else
        	{
        			var htmltable="<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th></tr></thead><tbody><tr><td colspan='6'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
        			var returnvar={};
        			returnvar['html']=htmltable;
        			returnvar['data']="no";
            		callback(JSON.stringify(returnvar));
        	}
        }
        else
        {
        	var htmltable="<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th></tr></thead><tbody><tr><td colspan='6'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
           var returnvar={};
        	returnvar['html']=htmltable;
        	returnvar['data']="no";
            callback(JSON.stringify(returnvar));
        }
           
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            var htmltable="<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th></tr></thead><tbody><tr><td colspan='6'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
            var returnvar={};
        	returnvar['html']=htmltable;
        	returnvar['data']="no";
            callback(JSON.stringify(returnvar));
        }
    });

    return true; // prevents the callback from being called too early on return
  
  }
  if (request.FunctionCall == "variation") {
    $.ajax({
        type: 'GET',
        //url: request.url,
        url: "https://www.amazon." + request.Region+  "/product-reviews/"+request.mainAsin+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=all_formats",
        dataType: 'html',
        success: function(OuterHtml){
        	var responseText={};
        	var day90= new Date();
        	day90.setDate(day90.getDate() - 90);
        	var milli90= day90.getTime();
        	//console.log("90--->",day90.getFullYear()+":"+day90.toLocaleString('default', { month: 'long' })+":"+day90.getDate());
        	var day60= new Date();
        	day60.setDate(day60.getDate() - 60);
        	var milli60= day60.getTime();
        	//console.log("60--->",day60.getFullYear()+":"+day60.toLocaleString('default', { month: 'long' })+":"+day60.getDate());
        	var day30= new Date();
        	day30.setDate(day30.getDate() - 30);
        	var milli30= day30.getTime();
        						
        	var InnerhtmlObj = $(OuterHtml);
        	var reviewhtmlTop=InnerhtmlObj.find("[data-hook^='cr-filter-info-review-count']").html();
        	if(typeof reviewhtmlTop=="undefined")
        	{
        		reviewhtmlTop="0 of 0 reviews";
        	}
        	var OFPOSTop=reviewhtmlTop.indexOf("of");
        	var aftreofTop=reviewhtmlTop.substring(OFPOSTop+2);
        	var replacedreviewTop=aftreofTop.replace("reviews", "");
        	reviewhtmlTop=replacedreviewTop.replace(" ", "");
        	reviewhtmlTop=replacedreviewTop.replace(",", "");
        	var noOfReviewsTop = parseInt(reviewhtmlTop);
        	console.log("======noOfReviewsTop=======",noOfReviewsTop);
        							
        /*if(!responseText.message.length && request.VariationsAsin.length)
        {
        	responseText.status="success";
        	responseText.message=request.VariationsAsin;
        }*/
        //B00K2U5XFK,B0759N6YPJ,B00PIQXWVK
        /*var index = request.VariationsAsin.indexOf("B00K2U5XFK");
        if (index >= 0) 
        {
          	request.VariationsAsin.splice(index, 1);
        }
        index = request.VariationsAsin.indexOf("B0759N6YPJ");
        if (index >= 0) 
        {
          	request.VariationsAsin.splice(index, 1);
        }
        index = request.VariationsAsin.indexOf("B00PIQXWVK");
        if (index >= 0) 
        {
          	request.VariationsAsin.splice(index, 1);
        }*/
        if(request.VariationsAsin.length)
        {
        	responseText.status="success";
        	responseText.message=request.VariationsAsin;
        }
        console.log("request.VariationsAsin",request.VariationsAsin);
        console.log("responseText.message",responseText.message);
        if(responseText.status="success")
        {
        	var responsedataarray=[];
        	var responsedata={};
        	var loopite=0;
        	var innerhtmltable="";
        	var asintext="";
        	var asinarray=[];
        	var pricetext="";
        	var pricearray=[];
        	var sizetext="";
        	var sizearray=[];
        	var reviewtext="";
        	var reviewarray=[];
        	var colortext="";
        	var colorarray=[];
        	var innerarraylength=request.VariationsAsin.length;
        	var removeddropdown=false;
        	var htmltable="<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table id='variationTableID'><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th><th>Review %</th><th style='text-align: center !important;'>History<table style='margin-top:-10px'><thead><tr><th>30 Days</th><th>60 Days</th><th>90 Days</th></tr></thead></table></th></tr></thead><tbody>";
        	//var htmltable="<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table id='variationTableID'><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th><th>Review %</th></tr></thead><tbody>";
        	if(responseText.message.length)
        	{
        	var TableB=2;
        	responseText.message.forEach(function(item, index){
        	var responsedata={};
        		 $.ajax({
            type: "GET",
            url: "https://www.amazon." + request.Region+  "/dp/"+item+"?th=1&psc=1",
            
        }).always(function(html) {
        		var innerarr=[];
        		var htmlObj = $(html);
        		var Price="No Buy Box";
        		if(typeof htmlObj.find("#priceblock_ourprice").html()!="undefined")
        		{
                	Price = htmlObj.find("#priceblock_ourprice").html();
                }
                else if(typeof htmlObj.find(".priceblock_vat_inc_price").html()!="undefined")
                {
                	Price = htmlObj.find(".priceblock_vat_inc_price").html();
                }
                else if(typeof htmlObj.find(".priceblock_vat_excl_price").html()!="undefined")
                {
                	Price = htmlObj.find(".priceblock_vat_excl_price").html();
                }
                else if(typeof htmlObj.find(".a-color-price").html()!="undefined" && !htmlObj.find(".a-color-price").hasClass("error-message"))
                { 	
                	Price = htmlObj.find(".a-color-price").html();
                }
                else if(typeof htmlObj.find("#priceblock_dealprice").html()!="undefined")
                {   	
                	Price = htmlObj.find("#priceblock_dealprice").html();
                }
                if(typeof pricearray[Price]=="undefined")
                {
                	pricearray[Price]=Price;
                	pricetext=pricetext+"<li class='hiddenli'><label><input type='checkbox' name='pricefilter[]' value='"+Price+"'>"+Price+"</label></li>";
                }
                var Size="";
                var Image="";
                if(typeof htmlObj.find("#imgTagWrapperId").find("img")!="undefined")
                {
                	Image = htmlObj.find("#imgTagWrapperId").find("img").attr("src");
                }
               
                var Color="";
                if(typeof htmlObj.find('[name^="dropdown_selected_"]').html()!="undefined")
                {
                	Color=htmlObj.find('[name^="dropdown_selected_"] option:selected').attr('data-a-html-content');
                }
                if(typeof htmlObj.find('[id^="variation_"]')!="undefined")
                {
                	if(typeof htmlObj.find('[id^="variation_"]').find(".selection").html()!="undefined")
                	{
                 		Color = htmlObj.find('[id^="variation_"]').find(".selection").html().replace(" ","");
                 	}
                }
                else if(typeof htmlObj.find("#variation_color_name")!="undefined")
                {
                	if(typeof htmlObj.find("#variation_color_name").find(".selection").html()!="undefined")
                	{
                 		Color = htmlObj.find("#variation_color_name").find(".selection").html().replace(" ","");
                 	}
                }
                 if(typeof  htmlObj.find("#variation_size_name")!="undefined")
                {
                	if(typeof  htmlObj.find("#variation_size_name").find("select[name^='dropdown_selected_size_name']").html()!="undefined")
                	{
                		innerarraylength=innerarraylength+htmlObj.find("#variation_size_name").find("select[name^='dropdown_selected_size_name']").find("[data-a-css-class='dropdownAvailable']").length;
                		htmlObj.find("#variation_size_name").find("select[name^='dropdown_selected_size_name']").find("[data-a-css-class='dropdownAvailable']").each(function(index,val){
                		
                			var Sizein=$(this).attr("data-a-html-content");
                			if(typeof Sizein!="undefined")
                			{
                					Sizein=Sizein.replace(' ','');
                			}
                			else
                			{
                				Sizein="";
                			}
                			var asin1=$(this).val();
                			var cmpos=asin1.indexOf(",");
    							asin1=asin1.substring(cmpos+1);
    							if(typeof responsedataarray[asin1]!="undefined")
    							{
    								var vcontinue;
    							}
    							else
    							{
    							responsedataarray[asin1]=asin1;
    							if(typeof sizearray[Sizein]=="undefined")
                				{
                					sizearray[Sizein]=Sizein;
                					sizetext=sizetext+"<li class='hiddenli'><label><input type='checkbox' name='sizefilter[]' value='"+Sizein+"'>"+Sizein+"</label></li>";
                				}
                				if(typeof asinarray[asin1]=="undefined")
                				{
                					asinarray[asin1]=asin1;
                					asintext=asintext+"<li class='hiddenli'><label><input type='checkbox' name='asinfilter[]' value='"+asin1+"'>"+asin1+"</label></li>";
                				}
                					
        						//console.log("30--->",day30.getFullYear()+":"+day30.toLocaleString('default', { month: 'long' })+":"+day30.getDate());
        						var review90=0;
        						var review60=0;
        						var review30=0;
        						var ReviewPagenumber=1;
                				$.ajax({
            type: "GET",
            url: "https://www.amazon." + request.Region+  "/product-reviews/"+asin1+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            
            success: function(Innerhtml){

       								var CurrentPageNumber=ReviewPagenumber;
        							var InnerhtmlObj = $(Innerhtml);
        							var reviewhtml=InnerhtmlObj.find("[data-hook^='cr-filter-info-review-count']").html();
        							if(typeof InnerhtmlObj.find(".product-price-line").html()!="undefined")
        							{
        								if(typeof InnerhtmlObj.find(".product-price-line").find(".arp-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".arp-price").html();
        									cmpos=Price.indexOf("-");
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        									}

        								}
        								else if(typeof InnerhtmlObj.find(".product-price-line").find(".a-color-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".a-color-price").html();
        									cmpos=Price.indexOf("-");
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        									}

        								}
        								
        							}
        							else if(typeof InnerhtmlObj.find(".product-price-line").html()!="undefined")
        							{
        								if(typeof InnerhtmlObj.find(".product-price-line").find(".arp-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".arp-price").html();
        									cmpos=Price.indexOf("-");
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        									}
        								}
        								else if(typeof InnerhtmlObj.find(".product-price-line").find(".a-color-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".a-color-price").html();
        									cmpos=Price.indexOf("-");
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        									}

        								}
        								
        							}
        							if(typeof reviewhtml=="undefined")
        							{
        								reviewhtml="0 of 0 reviews";
        							}
        							var OFPOS=reviewhtml.indexOf("of");
        							var aftreof=reviewhtml.substring(OFPOS+2);
        							var replacedreview=aftreof.replace("reviews", "");
        							reviewhtml=replacedreview.replace(" ", "");
        							var noOfReviews = reviewhtml;
        							if(typeof reviewarray[noOfReviews]=="undefined")
                					{
                						reviewarray[noOfReviews]=noOfReviews;
                						reviewtext=reviewtext+"<li class='hiddenli'><label><input type='checkbox' name='reviewfilter[]' value='"+noOfReviews+"'>"+noOfReviews+"</label></li>";
                					}
        							var pageurl="https://www.amazon." + request.Region+  "/dp/"+asin1+"?th=1&psc=1";
    								var reviewPercentage="0%";
    								noOfReviews=parseInt(noOfReviews);	
    								var numberOfPages=Math.ceil(noOfReviews/10);
 									if(!isNaN(noOfReviews))
 									{
 										reviewPercentage=(noOfReviews/noOfReviewsTop*100);
 										reviewPercentage=reviewPercentage.toFixed(2);
 										reviewPercentage=reviewPercentage+"%";
 									}
        							
        							
        							
        						
        							
        							var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        							if(reviewlength==0)
        							{
        								innerarraylength--;
        								responsedataarray.push(asin1);
        								if(TableB%2!=0)
 										{
											innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
										}
										else
										{
											innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
										}
										TableB++;
        								console.log("====no====Reviews");
        							}
        							InnerhtmlObj.find("[data-hook='review']").each(function(){
        								reviewlength--;
        								var DateText=$(this).find("[data-hook='review-date']").html();
        								var dateobj= new Date(DateText);
        								var currentmilli=dateobj.getTime();
        								console.log("90--->",dateobj.getFullYear()+":"+dateobj.toLocaleString('default', { month: 'long' })+":"+dateobj.getDate());
        								if(currentmilli>=milli30)
        								{
        									review90=review90+1;
        									review60=review60+1;
        									review30=review30+1;
        									if(!reviewlength && ReviewPagenumber<numberOfPages)
        									{
        										ReviewPagenumber++;
        										$.ajax({
            										type: "GET",
            										url: "https://www.amazon." + request.Region+  "/product-reviews/"+asin1+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            										success: function(Innerhtml){
            											var CurrentPageNumber=ReviewPagenumber;
            											var InnerhtmlObj = $(Innerhtml);
            											var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        												if(reviewlength==0)
        												{
        													innerarraylength--;
        													responsedataarray.push(asin1);
        													if(TableB%2!=0)
 															{
																innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
															}
															else
															{
																innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
															}
															TableB++;
        													console.log("====no====Reviews");
        												}
        												InnerhtmlObj.find("[data-hook='review']").each(function(){
        													reviewlength--;
        													var DateText=$(this).find("[data-hook='review-date']").html();
        													var dateobj= new Date(DateText);
        													var currentmilli=dateobj.getTime();
        													if(currentmilli>=milli30)
        													{
        														review90=review90+1;
        														review60=review60+1;
        														review30=review30+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        															$.ajax({
            															type: "GET",
            															url: "https://www.amazon." + request.Region+  "/product-reviews/"+asin1+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            															success: function(Innerhtml){
            																var CurrentPageNumber=ReviewPagenumber;
            																var InnerhtmlObj = $(Innerhtml);
            																var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        																	if(reviewlength==0)
        																	{
        																		innerarraylength--;
        																		responsedataarray.push(asin1);
        																		if(TableB%2!=0)
 																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				else
																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				TableB++;
        																		console.log("====no====Reviews");
        																	}
        																	InnerhtmlObj.find("[data-hook='review']").each(function(){
        																		reviewlength--;
        																		var DateText=$(this).find("[data-hook='review-date']").html();
        																		var dateobj= new Date(DateText);
        																		var currentmilli=dateobj.getTime();
        																		if(currentmilli>=milli30)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			review30=review30+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli60)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli90)
        																		{
        																			review90=review90+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(item);
        																			if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
																					return false;
        																		}
        																		if(!reviewlength)
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(asin1);
 																					if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
        																		}
        																	})
        																	},
            															error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 										console.log("errorThrown--->",errorThrown);
        																}
																	})
        														}
        													}
        													else if(currentmilli>=milli60)
        													{
        														review90=review90+1;
        														review60=review60+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        															$.ajax({
            															type: "GET",
            															url: "https://www.amazon." + request.Region+  "/product-reviews/"+asin1+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            															success: function(Innerhtml){
            																var CurrentPageNumber=ReviewPagenumber;
            																var InnerhtmlObj = $(Innerhtml);
            																var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        																	if(reviewlength==0)
        																	{
        																		innerarraylength--;
        																		responsedataarray.push(asin1);
        																		if(TableB%2!=0)
 																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				else
																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				TableB++;
        																	}
        																	InnerhtmlObj.find("[data-hook='review']").each(function(){
        																		reviewlength--;
        																		var DateText=$(this).find("[data-hook='review-date']").html();
        																		var dateobj= new Date(DateText);
        																		var currentmilli=dateobj.getTime();
        																		if(currentmilli>=milli30)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			review30=review30+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli60)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli90)
        																		{
        																			review90=review90+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else
        																		{	
        																			innerarraylength--;
        																			responsedataarray.push(asin1);
        																			if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
																					return false;
        																		}
        																		if(!reviewlength)
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(asin1);
 																					if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
        																		}
        																	})
        																	},
            															error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 										console.log("errorThrown--->",errorThrown);
        																}
																	})
        														}
        													}
        													else if(currentmilli>=milli90)
        													{
        														review90=review90+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        															$.ajax({
            															type: "GET",
            															url: "https://www.amazon." + request.Region+  "/product-reviews/"+asin1+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            															success: function(Innerhtml){
            																var CurrentPageNumber=ReviewPagenumber;
            																var InnerhtmlObj = $(Innerhtml);
            																var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        																	if(reviewlength==0)
        																	{
        																		innerarraylength--;
        																		responsedataarray.push(asin1);
        																		if(TableB%2!=0)
 																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				else
																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				TableB++;
        																	}
        																	InnerhtmlObj.find("[data-hook='review']").each(function(){
        																		reviewlength--;
        																		var DateText=$(this).find("[data-hook='review-date']").html();
        																		var dateobj= new Date(DateText);
        																		var currentmilli=dateobj.getTime();
        																		if(currentmilli>=milli30)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			review30=review30+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli60)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli90)
        																		{
        																			review90=review90+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(asin1);
        																			if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
																					return false;
        																		}
        																		if(!reviewlength)
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(asin1);
 																					if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
        																		}
        																	})
        																	},
            															error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 										console.log("errorThrown--->",errorThrown);
        																}
																	})
        														}
        													}
        													else
        													{
        														innerarraylength--;
        														responsedataarray.push(asin1);
        														if(TableB%2!=0)
 																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																else
																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																TableB++;
																return false;
        													}
        													if(!reviewlength && CurrentPageNumber==numberOfPages)
        													{
        														innerarraylength--;
        														responsedataarray.push(asin1);
 																if(TableB%2!=0)
 																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																else
																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																TableB++;
        													}
        												})
            										},
            										error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 					console.log("errorThrown--->",errorThrown);
        											}
												})
        									}
        								}
        								else if(currentmilli>=milli60)
        								{
        									review90=review90+1;
        									review60=review60+1;
        									if(!reviewlength && ReviewPagenumber<numberOfPages)
        									{
        										ReviewPagenumber++;
        										$.ajax({
            										type: "GET",
            										url: "https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            										success: function(Innerhtml){
            											var CurrentPageNumber=ReviewPagenumber;
            											var InnerhtmlObj = $(Innerhtml);
            											var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        												if(reviewlength==0)
        												{
        													innerarraylength--;
        													responsedataarray.push(asin1);
        													if(TableB%2!=0)
 															{
																innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
															}
															else
															{
																innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
															}
															TableB++;
        												}
        												InnerhtmlObj.find("[data-hook='review']").each(function(){
        													reviewlength--;
        													var DateText=$(this).find("[data-hook='review-date']").html();
        													var dateobj= new Date(DateText);
        													var currentmilli=dateobj.getTime();
        													if(currentmilli>=milli30)
        													{
        														review90=review90+1;
        														review60=review60+1;
        														review30=review30+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        														}
        													}
        													else if(currentmilli>=milli60)
        													{
        														review90=review90+1;
        														review60=review60+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        															$.ajax({
            															type: "GET",
            															url: "https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            															success: function(Innerhtml){
            																var CurrentPageNumber=ReviewPagenumber;
            																var InnerhtmlObj = $(Innerhtml);
            																var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        																	if(reviewlength==0)
        																	{
        																		innerarraylength--;
        																		responsedataarray.push(asin1);
        																		if(TableB%2!=0)
 																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				else
																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				TableB++;
        																	}
        																	InnerhtmlObj.find("[data-hook='review']").each(function(){
        																		reviewlength--;
        																		var DateText=$(this).find("[data-hook='review-date']").html();
        																		var dateobj= new Date(DateText);
        																		var currentmilli=dateobj.getTime();
        																		if(currentmilli>=milli30)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			review30=review30+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli60)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli90)
        																		{
        																			review90=review90+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(asin1);
        																			if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
																					return false;
        																		}
        																		if(!reviewlength)
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(asin1);
 																					if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
        																		}
        																	})
        																},
            															error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 										console.log("errorThrown--->",errorThrown);
        																}
																	})
        														}
        													}
        													else if(currentmilli>=milli90)
        													{
        														review90=review90+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        															$.ajax({
            															type: "GET",
            															url: "https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            															success: function(Innerhtml){
            																var CurrentPageNumber=ReviewPagenumber;
            																var InnerhtmlObj = $(Innerhtml);
            																var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        																	if(reviewlength==0)
        																	{
        																		innerarraylength--;
        																		responsedataarray.push(asin1);
        																		if(TableB%2!=0)
 																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				else
																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				TableB++;
        																	}
        																	InnerhtmlObj.find("[data-hook='review']").each(function(){
        																		reviewlength--;
        																		var DateText=$(this).find("[data-hook='review-date']").html();
        																		var dateobj= new Date(DateText);
        																		var currentmilli=dateobj.getTime();
        																		if(currentmilli>=milli30)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			review30=review30+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli60)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli90)
        																		{
        																			review90=review90+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else
        																		{	
        																			innerarraylength--;
        																			responsedataarray.push(asin1);
        																			if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
																					return false;
        																		}
        																		if(!reviewlength)
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(asin1);
 																					if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
        																		}
        																	})
        																},
            															error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 										console.log("errorThrown--->",errorThrown);
        																}
																	})
        														}
        													}
        													else
        													{	
        														innerarraylength--;
        														responsedataarray.push(asin1);
        														if(TableB%2!=0)
 																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																else
																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																TableB++;
																return false;
        													}
        													if(!reviewlength && CurrentPageNumber==numberOfPages)
        													{
        														innerarraylength--;
        														responsedataarray.push(asin1);
 																if(TableB%2!=0)
 																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																else
																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																TableB++;
        													}
        												})
        											},
            										error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 					console.log("errorThrown--->",errorThrown);
        											}
												})
        									}
        								}
        								else if(currentmilli>=milli90)
        								{
        									review90=review90+1;
        									if(!reviewlength && ReviewPagenumber<numberOfPages)
        									{
        										ReviewPagenumber++;
        										$.ajax({
            										type: "GET",
            										url: "https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            										success: function(Innerhtml){
            											var CurrentPageNumber=ReviewPagenumber;
            											var elseworked=false;
            											var InnerhtmlObj = $(Innerhtml);
            											var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        												if(reviewlength==0)
        												{
        													innerarraylength--;
        													responsedataarray.push(asin1);
        													if(TableB%2!=0)
 															{
																innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
															}
															else
															{
																innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
															}
															TableB++;
        												}
        												InnerhtmlObj.find("[data-hook='review']").each(function(){
        													reviewlength--;
        													var DateText=$(this).find("[data-hook='review-date']").html();
        													var dateobj= new Date(DateText);
        													var currentmilli=dateobj.getTime();
        													if(currentmilli>=milli30)
        													{
        														review90=review90+1;
        														review60=review60+1;
        														review30=review30+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        														}
        													}
        													else if(currentmilli>=milli60)
        													{
        														review90=review90+1;
        														review60=review60+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        														}
        													}
        													else if(currentmilli>=milli90)
        													{
        														review90=review90+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        															$.ajax({
            															type: "GET",
            															url: "https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            															success: function(Innerhtml){
            																var CurrentPageNumber=ReviewPagenumber;
            																var elseworked=false;
            																var InnerhtmlObj = $(Innerhtml);
            																var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        																	if(reviewlength==0)
        																	{
        																		innerarraylength--;
        																		responsedataarray.push(asin1);
        																		if(TableB%2!=0)
 																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				else
																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				TableB++;
        																	}
        																	InnerhtmlObj.find("[data-hook='review']").each(function(){
        																		reviewlength--;
        																		var DateText=$(this).find("[data-hook='review-date']").html();
        																		var dateobj= new Date(DateText);
        																		var currentmilli=dateobj.getTime();
        																		if(currentmilli>=milli30)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			review30=review30+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli60)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli90)
        																		{
        																			review90=review90+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else
        																		{	
        																			
        																			innerarraylength--;
        																			responsedataarray.push(asin1);
        																			if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
																					return false;
        																		}
        																		if(!reviewlength)
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(asin1);
 																					if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
        																		}
        																	})
        																},
            															error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 										console.log("errorThrown--->",errorThrown);
        																}
																	})
        														
        														}
        													}
        													else
        													{	
        														
        														innerarraylength--;
        														responsedataarray.push(asin1);
        														if(TableB%2!=0)
 																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																else
																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																TableB++;
																return false;
        													}
        													if(!reviewlength && CurrentPageNumber==numberOfPages)
        													{
        														innerarraylength--;
        														responsedataarray.push(asin1);
 																if(TableB%2!=0)
 																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																else
																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																TableB++;
        													}
        												})
        											},
            										error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 					console.log("errorThrown--->",errorThrown);
        											}
												})
        														
        									}
        								}
        								else
        								{
                							innerarraylength--;
        									responsedataarray.push(asin1);
 											if(TableB%2!=0)
 											{
												innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
											}
											else
											{
												innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
											}
											TableB++;
											return false;
        								}
        								if(!reviewlength && CurrentPageNumber==numberOfPages)
        								{
        									innerarraylength--;
        									responsedataarray.push(asin1);
 											if(TableB%2!=0)
 											{
												innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
											}
											else
											{
												innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
											}
											TableB++;
        								}
        							})
        							
        							
        							
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        							/*var InnerhtmlObj = $(Innerhtml);
        							var reviewhtml=InnerhtmlObj.find("[data-hook^='cr-filter-info-review-count']").html();
        							if(typeof InnerhtmlObj.find(".product-price-line").html()!="undefined")
        							{
        								if(typeof InnerhtmlObj.find(".product-price-line").find(".arp-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".arp-price").html();
        									cmpos=Price.indexOf("-");
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        									}

        								}
        								else if(typeof InnerhtmlObj.find(".product-price-line").find(".a-color-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".a-color-price").html();
        									cmpos=Price.indexOf("-");
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        									}

        								}
        								
        							}
        							else if(typeof InnerhtmlObj.find(".product-price-line").html()!="undefined")
        							{
        								if(typeof InnerhtmlObj.find(".product-price-line").find(".arp-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".arp-price").html();
        									cmpos=Price.indexOf("-");
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        									}
        								}
        								else if(typeof InnerhtmlObj.find(".product-price-line").find(".a-color-price").html()!="undefined")
        								{
        									Price = InnerhtmlObj.find(".product-price-line").find(".a-color-price").html();
        									cmpos=Price.indexOf("-");
        									if(cmpos > 1)
        									{
        										Price=Price.substring(0,cmpos);
        									}

        								}
        								
        							}
        							if(typeof reviewhtml=="undefined")
        							{
        								reviewhtml="0 of 0 reviews";
        							}
        							var OFPOS=reviewhtml.indexOf("of");
        							var aftreof=reviewhtml.substring(OFPOS+2);
        							var replacedreview=aftreof.replace("reviews", "");
        							reviewhtml=replacedreview.replace(" ", "");
        							var noOfReviews = reviewhtml;
        							if(typeof reviewarray[noOfReviews]=="undefined")
                					{
                						reviewarray[noOfReviews]=noOfReviews;
                						reviewtext=reviewtext+"<li class='hiddenli'><label><input type='checkbox' name='reviewfilter[]' value='"+noOfReviews+"'>"+noOfReviews+"</label></li>";
                					}
                					innerarraylength--;
    							var pageurl="https://www.amazon." + request.Region+  "/dp/"+asin1+"?th=1&psc=1";
    							
    							var reviewPercentage="0%";
    							noOfReviews=parseInt(noOfReviews);
 						if(!isNaN(noOfReviews))
 						{
 							
 							reviewPercentage=(noOfReviews/noOfReviewsTop*100);
 							reviewPercentage=reviewPercentage.toFixed(2);
 							reviewPercentage=reviewPercentage+"%";
 						}
								innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+asin1+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Sizein+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td></tr>";
								
								
								*/
								
								
								
								},
        						error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 console.log("errorThrown--->",errorThrown);
        							}
								})
							}
                		})
                		if(typeof htmlObj.find("#variation_size_name").find("select[name^='dropdown_selected_size_name'] option:selected").attr('data-a-html-content')!="undefined")
                		{
                			Size = htmlObj.find("#variation_size_name").find("select[name^='dropdown_selected_size_name'] option:selected").attr('data-a-html-content').replace(" ","");
                			if(typeof Size!="undefined")
                			{
                				Size=Size.replace(' ','');
                			}
                			else
                			{
                				Size="";
                			}
                			
                			var pageurl="https://www.amazon." + request.Region+  "/dp/"+item+"?th=1&psc=1";
								//innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+Color+"</td></tr>";
                		}
                	}
                	else if(typeof  htmlObj.find("#variation_size_name").find(".selection")!="undefined")
                	{
                		Size = htmlObj.find("#variation_size_name").find(".selection").html();
                		if(typeof Size!="undefined")
                			{
                				Size=Size.replace(' ','');
                			}
                			else
                			{
                				Size="";
                			}
                			var pageurl="https://www.amazon." + request.Region+  "/dp/"+item+"?th=1&psc=1";
								//innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+Color+"</td></tr>";
                	}
                }
                else if(typeof  htmlObj.find("#variation_flavor_name")!="undefined")
                {
                	Size = htmlObj.find("#variation_flavor_name").find(".selection").html();
                	if(typeof Size!="undefined")
                			{
                				Size=Size.replace(' ','');
                			}
                			else
                			{
                				Size="";
                			}
                			var pageurl="https://www.amazon." + request.Region+  "/dp/"+item+"?th=1&psc=1";
								//innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+Color+"</td></tr>";
                }
                	if(typeof sizearray[Size]=="undefined")
                	{
                		sizearray[Size]=Size;
                		sizetext=sizetext+"<li class='hiddenli'><label><input type='checkbox' name='sizefilter[]' value='"+Size+"'>"+Size+"</label></li>";
                	}
                	if(typeof asinarray[item]=="undefined")
                	{
                		asinarray[item]=item;
                		asintext=asintext+"<li class='hiddenli'><label><input type='checkbox' name='asinfilter[]' value='"+item+"'>"+item+"</label></li>";
                	}
                	if(typeof colorarray[Color]=="undefined")
                	{
                		colorarray[Color]=Color;
                		colortext=colortext+"<li class='hiddenli'><label><input type='checkbox' name='colorfilter[]' value='"+Color+"'>"+Color+"</label></li>";
                	}
                	if(index==responseText.message.length-1)
                	{
                		loopite=responseText.message.length;
                	}
                	var review90=0;
        			var review60=0;
        			var review30=0;
        			var ReviewPagenumber=1;
                	$.ajax({
            type: "GET",
            url: "https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            success: function(Innerhtml){
        							
        							var InnerhtmlObj = $(Innerhtml);
        							var CurrentPageNumber=ReviewPagenumber;
        							var reviewhtml=InnerhtmlObj.find("[data-hook^='cr-filter-info-review-count']").html();
        							if(typeof reviewhtml=="undefined")
        							{
        								reviewhtml="0 of 0 reviews";
        							}
        							var OFPOS=reviewhtml.indexOf("of");
        							var aftreof=reviewhtml.substring(OFPOS+2);
        							var replacedreview=aftreof.replace("reviews", "");
        							reviewhtml=replacedreview.replace(" ", "");
        							reviewhtml=replacedreview.replace(",", "");
        							var noOfReviews = reviewhtml;
    								var pageurl="https://www.amazon." + request.Region+  "/dp/"+item+"?th=1&psc=1";
    								var reviewPercentage="0%";
    								noOfReviews=parseInt(noOfReviews);
    								var numberOfPages=Math.ceil(noOfReviews/10);
 									if(!isNaN(noOfReviews))
 									{
 										reviewPercentage=(noOfReviews/noOfReviewsTop*100);
 										reviewPercentage=reviewPercentage.toFixed(2);
 										reviewPercentage=reviewPercentage+"%";
 									}
        							var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        							if(reviewlength==0)
        							{
        								innerarraylength--;
        								responsedataarray.push(item);
        								if(TableB%2!=0)
 										{
											innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
										}
										else
										{
											innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
										}
										TableB++;
        							}
        							InnerhtmlObj.find("[data-hook='review']").each(function(){
        								reviewlength--;
        								var DateText=$(this).find("[data-hook='review-date']").html();
        								var dateobj= new Date(DateText);
        								var currentmilli=dateobj.getTime();
        								if(currentmilli>=milli30)
        								{
        									review90=review90+1;
        									review60=review60+1;
        									review30=review30+1;
        									if(!reviewlength && ReviewPagenumber<numberOfPages)
        									{
        										ReviewPagenumber++;
        										$.ajax({
            										type: "GET",
            										url: "https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            										success: function(Innerhtml){
            											var CurrentPageNumber=ReviewPagenumber;
            											var InnerhtmlObj = $(Innerhtml);
            											var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        												if(reviewlength==0)
        												{
        													innerarraylength--;
        													responsedataarray.push(item);
        													if(TableB%2!=0)
 															{
																innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
															}
															else
															{
																innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
															}
															TableB++;
        												}
        												InnerhtmlObj.find("[data-hook='review']").each(function(){
        													reviewlength--;
        													var DateText=$(this).find("[data-hook='review-date']").html();
        													var dateobj= new Date(DateText);
        													var currentmilli=dateobj.getTime();
        													if(currentmilli>=milli30)
        													{
        														review90=review90+1;
        														review60=review60+1;
        														review30=review30+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        															$.ajax({
            															type: "GET",
            															url: "https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            															success: function(Innerhtml){
            																var CurrentPageNumber=ReviewPagenumber;
            																var InnerhtmlObj = $(Innerhtml);
            																var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        																	if(reviewlength==0)
        																	{
        																		innerarraylength--;
        																		responsedataarray.push(item);
        																		if(TableB%2!=0)
 																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				else
																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				TableB++;
        																	}
        																	InnerhtmlObj.find("[data-hook='review']").each(function(){
        																		reviewlength--;
        																		var DateText=$(this).find("[data-hook='review-date']").html();
        																		var dateobj= new Date(DateText);
        																		var currentmilli=dateobj.getTime();
        																		if(currentmilli>=milli30)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			review30=review30+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli60)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli90)
        																		{
        																			review90=review90+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else
        																		{	
        																			innerarraylength--;
        																			responsedataarray.push(item);
        																			if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
																					return false;
        																		}
        																		if(!reviewlength)
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(item);
 																					if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
        																		}
        																	})
        																	},
            															error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 										console.log("errorThrown--->",errorThrown);
        																}
																	})
        														}
        													}
        													else if(currentmilli>=milli60)
        													{
        														review90=review90+1;
        														review60=review60+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        															$.ajax({
            															type: "GET",
            															url: "https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            															success: function(Innerhtml){
            																var CurrentPageNumber=ReviewPagenumber;
            																var InnerhtmlObj = $(Innerhtml);
            																var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        																	if(reviewlength==0)
        																	{
        																		innerarraylength--;
        																		responsedataarray.push(item);
        																		if(TableB%2!=0)
 																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				else
																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				TableB++;
        																	}
        																	InnerhtmlObj.find("[data-hook='review']").each(function(){
        																		reviewlength--;
        																		var DateText=$(this).find("[data-hook='review-date']").html();
        																		var dateobj= new Date(DateText);
        																		var currentmilli=dateobj.getTime();
        																		if(currentmilli>=milli30)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			review30=review30+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli60)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli90)
        																		{
        																			review90=review90+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(item);
        																			if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
																					return false;
        																		}
        																		if(!reviewlength)
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(item);
 																					if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
        																		}
        																	})
        																	},
            															error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 										console.log("errorThrown--->",errorThrown);
        																}
																	})
        														}
        													}
        													else if(currentmilli>=milli90)
        													{
        														review90=review90+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        															$.ajax({
            															type: "GET",
            															url: "https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            															success: function(Innerhtml){
            																var CurrentPageNumber=ReviewPagenumber;
            																var InnerhtmlObj = $(Innerhtml);
            																var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        																	if(reviewlength==0)
        																	{
        																		innerarraylength--;
        																		responsedataarray.push(item);
        																		if(TableB%2!=0)
 																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				else
																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				TableB++;
        																	}
        																	InnerhtmlObj.find("[data-hook='review']").each(function(){
        																		reviewlength--;
        																		var DateText=$(this).find("[data-hook='review-date']").html();
        																		var dateobj= new Date(DateText);
        																		var currentmilli=dateobj.getTime();
        																		if(currentmilli>=milli30)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			review30=review30+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli60)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli90)
        																		{
        																			review90=review90+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(item);
        																			if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
																					return false;
        																		}
        																		if(!reviewlength)
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(item);
 																					if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
        																		}
        																	})
        																	},
            															error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 										console.log("errorThrown--->",errorThrown);
        																}
																	})
        														}
        													}
        													else
        													{
        														innerarraylength--;
        														responsedataarray.push(item);
        														if(TableB%2!=0)
 																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																else
																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																TableB++;
																return false;
        													}
        													if(!reviewlength && CurrentPageNumber==numberOfPages)
        													{
        														innerarraylength--;
        														responsedataarray.push(item);
 																if(TableB%2!=0)
 																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																else
																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																TableB++;
        													}
        												})
            										},
            										error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 					console.log("errorThrown--->",errorThrown);
        											}
												})
        									}
        								}
        								else if(currentmilli>=milli60)
        								{
        									review90=review90+1;
        									review60=review60+1;
        									if(!reviewlength && ReviewPagenumber<numberOfPages)
        									{
        										ReviewPagenumber++;
        										$.ajax({
            										type: "GET",
            										url: "https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            										success: function(Innerhtml){
            											var CurrentPageNumber=ReviewPagenumber;
            											var InnerhtmlObj = $(Innerhtml);
            											var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        												if(reviewlength==0)
        												{
        													innerarraylength--;
        													responsedataarray.push(item);
        													if(TableB%2!=0)
 															{
																innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
															}
															else
															{
																innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
															}
															TableB++;
        												}
        												InnerhtmlObj.find("[data-hook='review']").each(function(){
        													reviewlength--;
        													var DateText=$(this).find("[data-hook='review-date']").html();
        													var dateobj= new Date(DateText);
        													var currentmilli=dateobj.getTime();
        													if(currentmilli>=milli30)
        													{
        														review90=review90+1;
        														review60=review60+1;
        														review30=review30+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        														}
        													}
        													else if(currentmilli>=milli60)
        													{
        														review90=review90+1;
        														review60=review60+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        															$.ajax({
            															type: "GET",
            															url: "https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            															success: function(Innerhtml){
            																var CurrentPageNumber=ReviewPagenumber;
            																var InnerhtmlObj = $(Innerhtml);
            																var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        																	if(reviewlength==0)
        																	{
        																		innerarraylength--;
        																		responsedataarray.push(item);
        																		if(TableB%2!=0)
 																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				else
																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				TableB++;
        																	}
        																	InnerhtmlObj.find("[data-hook='review']").each(function(){
        																		reviewlength--;
        																		var DateText=$(this).find("[data-hook='review-date']").html();
        																		var dateobj= new Date(DateText);
        																		var currentmilli=dateobj.getTime();
        																		if(currentmilli>=milli30)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			review30=review30+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli60)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli90)
        																		{
        																			review90=review90+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(item);
        																			if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
																					return false;
        																		}
        																		if(!reviewlength)
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(item);
 																					if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
        																		}
        																	})
        																},
            															error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 										console.log("errorThrown--->",errorThrown);
        																}
																	})
        														}
        													}
        													else if(currentmilli>=milli90)
        													{
        														review90=review90+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        															$.ajax({
            															type: "GET",
            															url: "https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            															success: function(Innerhtml){
            																var CurrentPageNumber=ReviewPagenumber;
            																var InnerhtmlObj = $(Innerhtml);
            																var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        																	if(reviewlength==0)
        																	{
        																		innerarraylength--;
        																		responsedataarray.push(item);
        																		if(TableB%2!=0)
 																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				else
																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				TableB++;
        																	}
        																	InnerhtmlObj.find("[data-hook='review']").each(function(){
        																		reviewlength--;
        																		var DateText=$(this).find("[data-hook='review-date']").html();
        																		var dateobj= new Date(DateText);
        																		var currentmilli=dateobj.getTime();
        																		if(currentmilli>=milli30)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			review30=review30+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli60)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli90)
        																		{
        																			review90=review90+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(item);
        																			if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
																					return false;
        																		}
        																		if(!reviewlength)
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(item);
 																					if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
        																		}
        																	})
        																},
            															error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 										console.log("errorThrown--->",errorThrown);
        																}
																	})
        														}
        													}
        													else
        													{
        														innerarraylength--;
        														responsedataarray.push(item);
        														if(TableB%2!=0)
 																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																else
																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																TableB++;
																return false;
        													}
        													if(!reviewlength && CurrentPageNumber==numberOfPages)
        													{
        														innerarraylength--;
        														responsedataarray.push(item);
 																if(TableB%2!=0)
 																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																else
																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																TableB++;
        													}
        												})
        											},
            										error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 					console.log("errorThrown--->",errorThrown);
        											}
												})
        									}
        								}
        								else if(currentmilli>=milli90)
        								{
        									review90=review90+1;
        									if(!reviewlength && ReviewPagenumber<numberOfPages)
        									{
        										ReviewPagenumber++;
        										$.ajax({
            										type: "GET",
            										url: "https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            										success: function(Innerhtml){
            											var CurrentPageNumber=ReviewPagenumber;
            											var elseworked=false;
            											var InnerhtmlObj = $(Innerhtml);
            											var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        												if(reviewlength==0)
        												{
        													innerarraylength--;
        													responsedataarray.push(item);
        													if(TableB%2!=0)
 															{
																innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
															}
															else
															{
																innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
															}
															TableB++;
        												}
        												InnerhtmlObj.find("[data-hook='review']").each(function(){
        													reviewlength--;
        													var DateText=$(this).find("[data-hook='review-date']").html();
        													var dateobj= new Date(DateText);
        													var currentmilli=dateobj.getTime();
        													if(currentmilli>=milli30)
        													{
        														review90=review90+1;
        														review60=review60+1;
        														review30=review30+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        														}
        													}
        													else if(currentmilli>=milli60)
        													{
        														review90=review90+1;
        														review60=review60+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        														}
        													}
        													else if(currentmilli>=milli90)
        													{
        														review90=review90+1;
        														if(!reviewlength && ReviewPagenumber<numberOfPages)
        														{
        															ReviewPagenumber++;
        															$.ajax({
            															type: "GET",
            															url: "https://www.amazon." + request.Region+  "/product-reviews/"+item+"/ref=cm_cr_arp_d_rvw_fmt?ie=UTF8&filterByStar=all_stars&reviewerType=all_reviews&formatType=current_format&sortBy=recent&pageNumber="+ReviewPagenumber,
            															success: function(Innerhtml){
            																var CurrentPageNumber=ReviewPagenumber;
            																var elseworked=false;
            																var InnerhtmlObj = $(Innerhtml);
            																var reviewlength=InnerhtmlObj.find("[data-hook='review']").length;
        																	if(reviewlength==0)
        																	{
        																		innerarraylength--;
        																		responsedataarray.push(item);
        																		if(TableB%2!=0)
 																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				else
																				{
																					innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																				}
																				TableB++;
        																	}
        																	InnerhtmlObj.find("[data-hook='review']").each(function(){
        																		reviewlength--;
        																		var DateText=$(this).find("[data-hook='review-date']").html();
        																		var dateobj= new Date(DateText);
        																		var currentmilli=dateobj.getTime();
        																		if(currentmilli>=milli30)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			review30=review30+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli60)
        																		{
        																			review90=review90+1;
        																			review60=review60+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else if(currentmilli>=milli90)
        																		{
        																			review90=review90+1;
        																			if(!reviewlength && ReviewPagenumber<numberOfPages)
        																			{
        																				ReviewPagenumber++;
        																			}
        																		}
        																		else
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(item);
        																			if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
																					return false;
        																		}
        																		if(!reviewlength)
        																		{
        																			innerarraylength--;
        																			responsedataarray.push(item);
 																					if(TableB%2!=0)
 																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					else
																					{
																						innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																					}
																					TableB++;
        																		}
        																	})
        																},
            															error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 										console.log("errorThrown--->",errorThrown);
        																}
																	})
        														
        														}
        													}
        													else
        													{
        														innerarraylength--;
        														responsedataarray.push(item);
        														if(TableB%2!=0)
 																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																else
																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																TableB++;
																return false;
        													}
        													if(!reviewlength && CurrentPageNumber==numberOfPages)
        													{
        														innerarraylength--;
        														responsedataarray.push(item);
 																if(TableB%2!=0)
 																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																else
																{
																	innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
																}
																TableB++;
        													}
        												})
        											},
            										error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 					console.log("errorThrown--->",errorThrown);
        											}
												})
        														
        									}
        								}
        								else
        								{
        									innerarraylength--;
        									responsedataarray.push(item);
        									if(TableB%2!=0)
 											{
												innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
											}
											else
											{
												innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
											}
											TableB++;
											return false;
        								}
        								if(!reviewlength && CurrentPageNumber==numberOfPages)
        								{
        									innerarraylength--;
        									responsedataarray.push(item);
 											if(TableB%2!=0)
 											{
												innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
											}
											else
											{
												innerhtmltable=innerhtmltable+"<tr><td><a href='"+pageurl+"'>"+item+"</a></td><td><img src='"+Image+"'></td><td>"+Price+"</td><td>"+Size+"</td><td>"+noOfReviews+"</td><td>"+Color+"</td><td>"+reviewPercentage+"</td><td><table style='margin-top: -10px;'><tbody><tr></tr><tr><td>"+review30+"</td><td>"+review60+"</td><td>"+review90+"</td></tr></tbody></table></td></tr>";
											}
											TableB++;
        								}
        							})
        							
        							
        							
								},
								error: function(XMLHttpRequest, textStatus, errorThrown) {
           							 console.log("errorThrown--->",errorThrown);
        							}
								})
        })
        	})
        	var g = setInterval(function() {
        			//console.log("responsedataarray.length----->",responsedataarray.length);
        			//console.log("responseText.message.length----->",responseText.message.length);
        			//console.log("innerarraylength----->",innerarraylength);
 					if(responsedataarray.length>=responseText.message.length && !innerarraylength)
 					{
 						var returnvar={};
        				returnvar['data']="yes";
 						$('.canvasjs-chart-toolbar').remove();
 						if(innerhtmltable.trim()=="")
 						{
 							returnvar['data']="no";
 							innerhtmltable="<tr><td colspan='6'>NO VARIATIONS FOUND</td></tr>";
 						}
 						
 						var returneddata=htmltable+"<tr><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+asintext+"</ul></div></td><td></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+pricetext+"</ul></div><label id='priceSort'>Sort<iii class='arrowii downiii'></iii></label></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+sizetext+"</ul></div><label id='sizeSort'>Sort<iii class='arrowii downiii'></iii></label></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+reviewtext+"</ul></div><label id='reviewSort'>Sort<iii class='arrowii downiii'></iii></label ></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+colortext+"</ul></div></td><td></td><td></td></tr>"+innerhtmltable+"</tbody></table></div></div>";
 						//var returneddata=htmltable+"<tr><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+asintext+"</ul></div></td><td></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+pricetext+"</ul></div><label id='priceSort'>Sort<iii class='arrowii downiii'></iii></label></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+sizetext+"</ul></div><label id='sizeSort'>Sort<iii class='arrowii downiii'></iii></label></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+reviewtext+"</ul></div><label id='reviewSort'>Sort<iii class='arrowii downiii'></iii></label ></td><td><div class='insidetd'><label class='nothiddenli'>Filter <ii class='arrowii downii'></ii></label><ul class='insideul1 hiddenli'>"+colortext+"</ul></div></td><td></td></tr>"+innerhtmltable+"</tbody></table></div></div>";
 						 
        				returnvar['html']=returneddata;
        				//console.log("JSON.stringify(returnvar)--->",JSON.stringify(returnvar));
 						 callback(JSON.stringify(returnvar));
 	 					clearInterval(g);	 
 					}
 							},200); 
        	 
 			}
 			else
        	{
        			var htmltable="<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th></tr></thead><tbody><tr><td colspan='6'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
        			var returnvar={};
        			returnvar['html']=htmltable;
        			returnvar['data']="no";
            		callback(JSON.stringify(returnvar));
        	}
        }
        else
        {
        	var htmltable="<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th></tr></thead><tbody><tr><td colspan='6'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
           var returnvar={};
        	returnvar['html']=htmltable;
        	returnvar['data']="no";
            callback(JSON.stringify(returnvar));
        }
           
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            var htmltable="<div id='variationModel' class='variationModelClass'><span class='variationModelclose'>&times;</span><div class='table-variations'><table><thead><tr><th>ASIN</th><th>Image</th><th>PRICE</th><th>SIZE</th><th>Total Reviews</th><th>COLOR</th></tr></thead><tbody><tr><td colspan='6'>NO VARIATIONS FOUND</td></tr></tbody></table></div></div>";
            var returnvar={};
        	returnvar['html']=htmltable;
        	returnvar['data']="no";
            callback(JSON.stringify(returnvar));
        }
    });

    return true; // prevents the callback from being called too early on return
  }
  if (request.FunctionCall == "permissions") {
  chrome.permissions.request({
          permissions: ["cookies", "webRequest", "webRequestBlocking"],
          origins: ["http://*/*","https://*/*","<all_urls>"]
        }, function(granted) {
          // The callback argument will be true if the user granted the permissions.
          if (granted) {
            chrome.storage.sync.set({ "Permissions": "Granted" });
            getheadersdata();
          } else {
             chrome.storage.sync.set({ "Permissions": "Restricted" });
          }
          callback(granted);
        });
  return true;
  }
  if (request.FunctionCall == "Keepa") {

    $.ajax({
        type: 'GET',
        url: request.url,
        dataType: 'json',
        success: function(responseText){
            callback(responseText);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            callback();
        }
    });

    return true; // prevents the callback from being called too early on return
  }
  if (request.FunctionCall == "ValidateMWSKeys") {
  			var newSettings=request.data;
  			var sendResponse={};
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
						LicenseKey: newSettings.valicenseKey
						},
					dataType: 'json',
					url: "https://admin.fbamultitool.com/appapi/productDetails.php",
					success: function(Response)
					{
						if(Response.UK.requeststatus=="success" && Response.US.requeststatus=="success")
						{
							chrome.storage.sync.set({ MWSTOKENUSAlast: newSettings.MWSTOKENUSA, MWSSELLERIDUSAlast: newSettings.MWSSELLERIDUSA,MWSTOKENUKlast: newSettings.MWSTOKENUK, MWSSELLERIDUKlast: newSettings.MWSSELLERIDUK,TokenSaved: "true",UKTOKENSAVED:"true",USATOKENSAVED:"true"});
							//alert("Saved!");
							sendResponse['status']="success";
							sendResponse['message']="success";
						}
						else if(Response.UK.requeststatus=="success")
						{
							chrome.storage.sync.set({ MWSTOKENUKlast: newSettings.MWSTOKENUK, MWSSELLERIDUKlast: newSettings.MWSSELLERIDUK,TokenSaved: "true",UKTOKENSAVED:"true"});
							sendResponse['status']="error";
							sendResponse['message']="USA Seller ID Or Token Not Valid";
						}
						else if(Response.US.requeststatus=="success")
						{
							chrome.storage.sync.set({ MWSTOKENUSAlast: newSettings.MWSTOKENUSA, MWSSELLERIDUSAlast: newSettings.MWSSELLERIDUSA,TokenSaved: "true",USATOKENSAVED:"true"});
							sendResponse['status']="error";
							sendResponse['message']="UK Seller ID Or Token Not Valid";
						}
						else
						{
							chrome.storage.sync.set({ MWSTOKENUK: "", MWSSELLERIDUK: "",MWSTOKENUSA:"",MWSSELLERIDUSA:""});
							sendResponse['status']="error";
							sendResponse['message']="Both USA and UK Seller ID Or Token Not Valid";
						}
						callback(sendResponse);
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) 
					{
        					sendResponse['status']="success";
							sendResponse['message']="Both USA and UK Seller ID Or Token Not Valid";	
							callback(sendResponse);	
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
						LicenseKey: newSettings.valicenseKey,
						},
					dataType: 'json',
					url: "https://admin.fbamultitool.com/appapi/productDetails.php",
					success: function(Response)
					{
						$("#overlay").hide();
						$(".loaderOptionPage").hide();
						if(Response.requeststatus=="success")
						{
							chrome.storage.sync.set({ MWSTOKENUSAlast: newSettings.MWSTOKENUSA, MWSSELLERIDUSAlast: newSettings.MWSSELLERIDUSA,TokenSaved: "true",UKTOKENSAVED:"true"});
							sendResponse['status']="success";
							sendResponse['message']="Both USA and UK Seller ID Or Token Not Valid";	
						}
						else
						{
							chrome.storage.sync.set({ MWSTOKENUK: "", MWSSELLERIDUK: "",TokenSaved: "false"});
							sendResponse['status']="error";
							sendResponse['message']="Seller ID Or Token Not Valid";
						}
						callback(sendResponse);
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) 
					{
        				chrome.storage.sync.set({ MWSTOKENUK: "", MWSSELLERIDUK: ""});		
						sendResponse['status']="success";
						sendResponse['message']="Seller ID Or Token Not Valid";	
						callback(sendResponse);	
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
						LicenseKey: newSettings.valicenseKey
						},
					dataType: 'json',
					url: "https://admin.fbamultitool.com/appapi/productDetails.php",
					success: function(Response)
					{
						if(Response.requeststatus=="success")
						{
							chrome.storage.sync.set({ MWSTOKENUSAlast: newSettings.MWSTOKENUSA, MWSSELLERIDUSAlast: newSettings.MWSSELLERIDUSA,TokenSaved: "true",USATOKENSAVED:"true"});
							sendResponse['status']="success";
							sendResponse['message']="Seller ID Or Token Not Valid";	
						}
						else
						{
							chrome.storage.sync.set({ MWSTOKENUSA: "", MWSSELLERIDUSA: "",TokenSaved: "false"});
							sendResponse['status']="error";
							sendResponse['message']="Seller ID Or Token Not Valid";	
						}
						callback(sendResponse);
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) 
					{
						sendResponse['status']="success";
						sendResponse['message']="Seller ID Or Token Not Valid";
        				chrome.storage.sync.set({ MWSTOKENUSA: "", MWSSELLERIDUSA: ""});
        				callback(sendResponse);
					}
				})
			}
			else
			{
				sendResponse['status']="success";
				sendResponse['message']="Seller ID Or Token Not Valid";
				callback(sendResponse);
			}
    	return true;
  }
  if (request.FunctionCall == "getRank") {

    $.ajax({
        type: 'POST',
        url: 'https://admin.fbamultitool.com/appapi/',
        data: request.data,
        dataType: 'json',
        success: function(responseText){
            callback(responseText);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            callback();
        }
    });

    return true; // prevents the callback from being called too early on return
  }
  if (request.FunctionCall == "ProductHistory")
    {

        $.ajax({
            type: 'POST',
            url: request.data.url,
            data: request.data,
            dataType: "json",
            success: function(responseText){
                callback(responseText);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                //if required, do some error handling
                console.log("productHistory-->",XMLHttpRequest);
                callback();
            }
        });

        return true; // prevents the callback from being called too early on return
    }
    if (request.FunctionCall == "NewsFeeds")
    {

        $.ajax({
            type: 'POST',
            url: request.url,
            data: request.data,
            dataType: "json",
            success: function(responseText){
                callback(responseText);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                //if required, do some error handling
                console.log("NewsFeedsError-->",XMLHttpRequest);
                callback();
            }
        });

        return true; // prevents the callback from being called too early on return
    }
     if (request.FunctionCall == "NewsFeedsMark")
    {

        $.ajax({
            type: 'POST',
            url: request.url,
            data: request.data,
            dataType: "json",
            success: function(responseText){
                callback(responseText);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                //if required, do some error handling
                console.log("NewsFeedsError-->",XMLHttpRequest);
                callback();
            }
        });

        return true; // prevents the callback from being called too early on return
    }
    if (request.FunctionCall == "ScraperCall")
    {

        $.ajax({
            type: 'POST',
            url: request.url,
            data: request.data,
            dataType: request.data.dataType,
            success: function(responseText){
                callback(responseText);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                //if required, do some error handling
                console.log("ScraperCall-->",XMLHttpRequest);
                callback();
            }
        });

        return true; // prevents the callback from being called too early on return
    }
 if (request.FunctionCall == "_getOffers") {

   _getOfferFunction(request,callback);

    return true; // prevents the callback from being called too early on return
  }
  if (request.FunctionCall == "SellerCenterWeight") {

    $.ajax({
        type: 'GET',
        url: request.data.urlProductInfo,
        dataType: request.data.dataType,
        success: function(responseText){
        //console.log("SellerCenterWeight",responseText);
            callback(responseText);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            callback();
        }
    });

    return true; // prevents the callback from being called too early on return
  }
  if (request.FunctionCall == "SellerCenterWeightPOST") {

    $.ajax({
        type: 'POST',
        url: request.urlProductInfo,
        data: request.data,
        dataType: request.dataType,
        success: function(responseText){
        //console.log("SellerCenterWeight",responseText);
            callback(responseText);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            callback();
        }
    });

    return true; // prevents the callback from being called too early on return
  }
  if (request.FunctionCall == "TrackProductURL") {

    $.ajax({
        type: 'POST',
        url: "https://admin.fbamultitool.com/appapi/productDetails.php",
        dataType: request.dataType,
        data: request.data,
        success: function(responseText){
        //console.log("SellerCenterWeight",responseText);
            callback(responseText);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            var responseText={};
            responseText.status="error";
            responseText.message="Unable to process your request ,please try again";
            callback(responseText);
        }
    });

    return true; // prevents the callback from being called too early on return
  }
  if (request.action == "sendimage") {
    $.ajax({
        type: request.method,
        url: request.url,
        data: request.data,
        dataType: request.dataType,
        success: function(responseText){
            callback(responseText);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            callback();
        }
    });

    return true; // prevents the callback from being called too early on return
  }
  if (request.action == "AddToCart") {
  
  var responseArray={};
  var responseArray1=new Array();
  var domain=request.data.domain;
  var BGcartUrl='https://www.'+domain+'/gp/cart/view.html/ref=nav_cart';
	//RemoveAllCookies(BGcartUrl);
  var alreadyFoundSellers=request.data.alreadyFoundSellers;
  var asinNewAdded=request.data.ASIN;
  var SessionID;
  var totalP=0;
  		alreadyFoundSellers.forEach(function(o, r) {
  		totalP++;
var t = "https://www." + domain + "/gp/aw/c?app=hm&messageID=msg0";
	for (var i = "Q", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", s = 0; s < 9; s++) i += a.charAt(Math.floor(Math.random() * a.length));
        var OfferingID=o.offerId;
        var MarchantIDG=o.merchantId;
        var ASING=o.asin;
        var MFAFBMG=o.fba;
        var PriceG=o.price;
        var shippingPrice=0;
        if(MFAFBMG)
        {
            MFAFBMG=false;
        }
        else
        {
        	MFAFBMG=true;
        }
        if(typeof o.shippingPrice !="undefined")
        {
        	shippingPrice=o.shippingPrice;
        }
        $.ajax({
            type: "GET",
            url: "https://www." + domain + "/dp/"+i+"?messageID=msg0&requestID=" + r + "&app=hm"
            //url: "https://www." + domain + "/s?k=QBJI04OXV4
            
        }).always(function() {
       
        var i = ninjaCookies["msg0:" + r].match(/(?:session-id=)[^;]+/g);
        	if("undefined" != typeof i && i!=null)
        	{
            	if ("undefined" != typeof i[0])
            	{
             		var a = i[0].replace("session-id=", "");
             		SessionID=a;
            	}
            	else
            	{
             		var a = "";
             		SessionID=a;
             		getCookies("https://www." + domain + "/dp/"+i+"?messageID=msg0&requestID=" + r + "&app=hm", "session-id", function(id) {
   					 a=id;
					});
					SessionID=a;
            	}
            }
            else
            	{
             		var a = "";
             		SessionID=a;
             		getCookies("https://www." + domain + "/dp/"+i+"?messageID=msg0&requestID=" + r + "&app=hm", "session-id", function(id) {
   					 a=id;
					});
					SessionID=a;
            	}
        	var c = {
                oid: OfferingID,
                quantity: 999,
                o: "add",
                a: asinNewAdded,
                verificationSessionID: a
            };
            if(a.trim()=='')
            {
            getCookies("https://www." + domain + "/dp/"+i+"?messageID=msg0&requestID=" + r + "&app=hm", "session-id", function(ssid) {
            //ninjaCookies["msg0:" + r]="session-id="+ssid;
            SessionID=ssid;
            var c = {
                oid: OfferingID,
                quantity: 999,
                o: "add",
                a: asinNewAdded,
                verificationSessionID: ssid
            };
            $.ajax({
                type: "POST",
                url: t + "&requestID=" + r,
                data: c
            }).always(function(t) {
            	 var o = $(t);
                var i = o.find("div[data-asin]").first();
                console.log("=====i=====",i);
                 console.log("=====i=====",i.data);
                if (0 != i.length) {
                    var u = "",
                        c = o.find("a.sc-product-link").first().attr("href");
                    "undefined" != typeof c && (u = c.match(/(?:smid=)[^&]+/g)[0].replace("smid=", ""));
                    var l = {
                        index: r,
                        merchantID: u,
                        offeringID: OfferingID,
                        asin: i.data("asin"),
                        stock: i.data("quantity"),
                        shippingPrice: shippingPrice,
                        price: i.data("price"),
                        isNotFBA: i.find(".sc-seller").length,
                        condition: i.find(".sc-product-condition").first().text().split(",\n").map(function(e) {
                            return e.trim()
                        }).join(" - ")
                    };
                    if(typeof l.price=="undefined")
                                    {
                                    	l.price=PriceG;
                                    }
                    if(typeof responseArray[u]=="undefined")
                        	responseArray[u]=[];
                    responseArray[u].push({merchantID:u,offeringID:OfferingID,asin:l.asin,shippingPrice: shippingPrice,stock:l.stock,price:PriceG,isNotFBA:MFAFBMG,condition:l.condition});
                    responseArray1.push({offeringID:OfferingID});
  					var BGcartUrl='https://www.'+domain+'/gp/cart/view.html/ref=nav_cart';
    						//BGgetItemsFromCartChange(BGcartUrl);
    						//RemoveAllCookies(BGcartUrl);
                }
                else if (0 == o.find("div.sc-empty-cart").length) {
                    var d = "https://www." + domain + "/gp/item-dispatch/ref=dp_ebb_1?ie=UTF8&registryItemID.1=&submit.addToCart=addToCart&registryID.1=&offeringID.1=" + OfferingID + "&session-id=" + SessionID + "&itemCount=999&app=hm&messageID=msg0";
                    $.ajax({
                        type: "GET",
                        url: d + "&requestID=" + r
                    }).done(function(t) {
                        var o = $(t);
                        
                        if(typeof o.find("div[data-asin]").html() !="undefined")
                        {
                            var i = o.find("div[data-asin]").first();
                        var a = "",
                            u = o.find("a.sc-product-link").first().attr("href");
                        "undefined" != typeof u && (a = u.match(/(?:smid=)[^&]+/g)[0].replace("smid=", ""));
                        var l = {
                            index: r,
                            merchantID: a,
                            offeringID: OfferingID,
                            asin: i.data("asin"),
                            stock: i.data("quantity"),
                            price: i.data("price"),
                            shippingPrice: shippingPrice,
                            isNotFBA: i.find(".sc-seller").length,
                            condition: i.find(".sc-product-condition").first().text().split(",\n").map(function(e) {
                                return e.trim()
                            }).join(" - ")
                        };
                        if(typeof l.price=="undefined")
                                    {
                                    	l.price=PriceG;
                                    }
                       
                        if(typeof responseArray[a]=="undefined")
                        	responseArray[a]=[];
                        responseArray[a].push({merchantID:a,offeringID:OfferingID,asin:l.asin,shippingPrice: shippingPrice,stock:l.stock,price:PriceG,isNotFBA:MFAFBMG,condition:l.condition});
                        var BGcartUrl='https://www.'+domain+'/gp/cart/view.html/ref=nav_cart';
                         responseArray1.push({offeringID:OfferingID});
    						//BGgetItemsFromCartChange(BGcartUrl);
    						//RemoveAllCookies(BGcartUrl);
                        }
                        else
                        {
                        	var Stock=o.find("#nav-cart-count").html();
                        	if(typeof l!="undefined")
                        	{
                        		if(typeof l.price=="undefined")
                            	{
                                    	l.price=PriceG;
                            	}
                            }
                        	if(typeof responseArray[MarchantIDG]=="undefined")
                        	responseArray[MarchantIDG]=[];
                        	responseArray[MarchantIDG].push({merchantID:MarchantIDG,offeringID:OfferingID,asin:ASING,shippingPrice: shippingPrice,stock:Stock,price:PriceG,isNotFBA:MFAFBMG});
                        	var BGcartUrl='https://www.'+domain+'/gp/cart/view.html/ref=nav_cart';
                        	
                        	responseArray1.push({offeringID:OfferingID});
    						//BGgetItemsFromCartChange(BGcartUrl);
    						//RemoveAllCookies(BGcartUrl);
                        }
                    })
                }
                else
                {
                	$.ajax({
                    type: "GET",
                    url: "https://www." + domain + "/gp/aws/cart/add.html?OfferListingId.1=" + OfferingID + "&Quantity.1=995&app=hm&messageID=msg0&requestID=" + r
                }).always(function(t) {
                    var o = $(t),
                        i = o.find('input[name="OfferListingId.1"]').first().val(),
                        a = o.find('input[name="SessionId"]').first().val();
                    $.ajax({
                        type: "GET",
                        url: "https://www." + domain + "/gp/aws/cart/add.html?OfferListingId.1=" + OfferingID + "&Quantity.1=995&SessionId=" + SessionID + "&app=hm&messageID=msg0&requestID=" + r + "&confirmPage=confirm&add=add"
                    }).always(function(t) {
                        console.log("pass add check");
                        var o = $(t),
                            i = o.find("div[data-asin]").first();
                            var Quantity=i.data("quantity");
                            if(typeof Quantity=="undefined")
                            {
                            	Quantity=o.find('#nav-cart-count').html();
                            }
                        if (10 == Quantity) {
                            var a = o.find("#activeCartViewForm").first(),
                                c = i.data("itemid"),
                                l = {};
                            l.requestID = a.find('input[name="requestID"]').val(), l.timeStamp = a.find('input[name="requestID"]').val(), l.token = a.find('input[name="requestID"]').val(), l["quantity." + c] = "995", l["submit.update-quantity." + c] = "Update", $.ajax({
                                type: "POST",
                                url: "https://www." + domain + "/gp/cart/view.html/ref=ord_cart_shr?app-nav-type=none&dc=df&app=hm&messageID=msg0&requestID=" + r,
                                data: l
                            }).always(function(t) {
                                console.log("10 breaker");
                                var o = $(t),
                                    i = o.find("div[data-asin]").first(),
                                    l = {
                                        index: r,
                                        merchantID: u,
                                        offeringID: OfferingID,
                                        asin: i.data("asin"),
                                        stock: i.data("quantity"),
                                        price: i.data("price"),
                                        isNotFBA: i.find(".sc-seller").length,
                                        condition: i.find(".sc-product-condition").first().text().split(",\n").map(function(e) {
                                            return e.trim()
                                        }).join(" - ")
                                    };
                                    if(typeof l.price=="undefined")
                                    {
                                    	l.price=PriceG;
                                    }
                                    if(typeof l.stock=="undefined")
                                    {
                                    	l.stock=Quantity;
                                    }
                                    
                                    if(typeof responseArray[MarchantIDG]=="undefined")
                        			responseArray[MarchantIDG]=[];
                                responseArray[MarchantIDG].push({merchantID:MarchantIDG,offeringID:OfferingID,asin:l.asin,shippingPrice: shippingPrice,stock:l.stock,price:PriceG,isNotFBA:MFAFBMG,condition:l.condition});
                                var BGcartUrl='https://www.'+domain+'/gp/cart/view.html/ref=nav_cart';
                                responseArray1.push({offeringID:OfferingID});
    						//BGgetItemsFromCartChange(BGcartUrl);
    						//RemoveAllCookies(BGcartUrl);
                            })
                        } else {
                            var l = {
                                index: r,
                                merchantID: u,
                                offeringID: s,
                                asin: i.data("asin"),
                                stock: Quantity,
                                price: i.data("price"),
                                isNotFBA: i.find(".sc-seller").length,
                                condition: i.find(".sc-product-condition").first().text().split(",\n").map(function(e) {
                                    return e.trim()
                                }).join(" - ")
                            };
                            if(typeof l.price=="undefined")
                                    {
                                    	l.price=PriceG;
                                    }
                            
                            if(typeof responseArray[MarchantIDG]=="undefined")
                        			responseArray[MarchantIDG]=[];
                            responseArray[MarchantIDG].push({merchantID:MarchantIDG,offeringID:OfferingID,asin:l.asin,shippingPrice: shippingPrice,stock:l.stock,price:PriceG,isNotFBA:MFAFBMG,condition:l.condition});
                            var BGcartUrl='https://www.'+domain+'/gp/cart/view.html/ref=nav_cart';
                            responseArray1.push({offeringID:OfferingID});
    						//BGgetItemsFromCartChange(BGcartUrl);
    						//RemoveAllCookies(BGcartUrl);
                        }
                    })
                })
                }
            })
            })
            }
            else
            {
            	$.ajax({
                type: "POST",
                url: t + "&requestID=" + r,
                data: c
            }).always(function(t) {
            	 var o = $(t);
                var i = o.find("div[data-asin]").first();
                 var positionof=t.indexOf("warrantyQuantity");
                 var warrantyQuantity="";
                 if(positionof>0)
                 {
                 warrantyQuantity=t.substr(positionof+18, 5);
                 warrantyQuantity=warrantyQuantity.replace(/"/g,'');
                 warrantyQuantity=warrantyQuantity.replace(/,/g,'');
                 warrantyQuantity=warrantyQuantity.replace(' ','');
                 warrantyQuantity=warrantyQuantity.replace('"','');
                }
                if (0 != i.length) {
                    var u = "",
                        c = o.find("a.sc-product-link").first().attr("href");
                    "undefined" != typeof c && (u = c.match(/(?:smid=)[^&]+/g)[0].replace("smid=", ""));
                    var l = {
                        index: r,
                        merchantID: u,
                        offeringID: OfferingID,
                        asin: i.data("asin"),
                        stock: i.data("quantity"),
                        shippingPrice: shippingPrice,
                        price: PriceG,
                        isNotFBA: i.find(".sc-seller").length,
                        condition: i.find(".sc-product-condition").first().text().split(",\n").map(function(e) {
                            return e.trim()
                        }).join(" - ")
                    };
                    if(typeof l.price=="undefined")
                                    {
                                    	l.price=PriceG;
                                    }
                    if(typeof responseArray[u]=="undefined")
                        	responseArray[u]=[];
                    responseArray[u].push({merchantID:u,offeringID:OfferingID,asin:l.asin,shippingPrice: shippingPrice,stock:l.stock,price:PriceG,isNotFBA:MFAFBMG,condition:l.condition});
                    responseArray1.push({offeringID:OfferingID});
                    var BGcartUrl='https://www.'+domain+'/gp/cart/view.html/ref=nav_cart';
    						//BGgetItemsFromCartChange(BGcartUrl);
    						//RemoveAllCookies(BGcartUrl);
                }
                else if(warrantyQuantity.trim()!='')
                {
                	var l = {
                        index: r,
                        merchantID: MarchantIDG,
                        offeringID: OfferingID,
                        asin: ASING,
                        stock: warrantyQuantity,
                        shippingPrice: shippingPrice,
                        price: PriceG,
                        isNotFBA: MFAFBMG,
                        condition: "NEW"
                    };
                    if(typeof responseArray[MarchantIDG]=="undefined")
                        	responseArray[MarchantIDG]=[];
                    responseArray[MarchantIDG].push({merchantID:MarchantIDG,offeringID:OfferingID,asin:l.asin,shippingPrice: shippingPrice,stock:l.stock,price:PriceG,isNotFBA:MFAFBMG,condition:l.condition});
                    responseArray1.push({offeringID:OfferingID});
                    var BGcartUrl='https://www.'+domain+'/gp/cart/view.html/ref=nav_cart';
                }
                else
                {
                	$.ajax({
                type: "POST",
                url: t + "&requestID=" + r,
                data: c
            }).always(function(t) {
            	 var o = $(t);
                var i = o.find("div[data-asin]").first();
                if (0 != i.length) {
                    var u = "",
                        c = o.find("a.sc-product-link").first().attr("href");
                    "undefined" != typeof c && (u = c.match(/(?:smid=)[^&]+/g)[0].replace("smid=", ""));
                    var l = {
                        index: r,
                        merchantID: u,
                        offeringID: OfferingID,
                        asin: i.data("asin"),
                        stock: i.data("quantity"),
                        shippingPrice: shippingPrice,
                        price: i.data("price"),
                        isNotFBA: i.find(".sc-seller").length,
                        condition: i.find(".sc-product-condition").first().text().split(",\n").map(function(e) {
                            return e.trim()
                        }).join(" - ")
                    };
                    if(typeof l.price=="undefined")
                                    {
                                    	l.price=PriceG;
                                    }
                    if(typeof responseArray[u]=="undefined")
                        	responseArray[u]=[];
                    responseArray[u].push({merchantID:u,offeringID:OfferingID,asin:l.asin,shippingPrice: shippingPrice,stock:l.stock,price:PriceG,isNotFBA:MFAFBMG,condition:l.condition});
                    responseArray1.push({offeringID:OfferingID});
                    var BGcartUrl='https://www.'+domain+'/gp/cart/view.html/ref=nav_cart';
    						//BGgetItemsFromCartChange(BGcartUrl);
    						//RemoveAllCookies(BGcartUrl);
                }	
                else if (0 == o.find("div.sc-empty-cart").length) {
                    var d = "https://www." + domain + "/gp/item-dispatch/ref=dp_ebb_1?ie=UTF8&registryItemID.1=&submit.addToCart=addToCart&registryID.1=&offeringID.1=" + OfferingID + "&session-id=" + SessionID + "&itemCount=999&app=hm&messageID=msg0";
                    $.ajax({
                        type: "GET",
                        url: d + "&requestID=" + r
                    }).done(function(t) {
                        var o = $(t);
                        
                        if(typeof o.find("div[data-asin]").html() !="undefined")
                        {
                            var i = o.find("div[data-asin]").first();
                        var a = "",
                            u = o.find("a.sc-product-link").first().attr("href");
                        "undefined" != typeof u && (a = u.match(/(?:smid=)[^&]+/g)[0].replace("smid=", ""));
                        var l = {
                            index: r,
                            merchantID: a,
                            offeringID: OfferingID,
                            asin: i.data("asin"),
                            stock: i.data("quantity"),
                            price: i.data("price"),
                            shippingPrice: shippingPrice,
                            isNotFBA: i.find(".sc-seller").length,
                            condition: i.find(".sc-product-condition").first().text().split(",\n").map(function(e) {
                                return e.trim()
                            }).join(" - ")
                        };
                        if(typeof l.price=="undefined")
                                    {
                                    	l.price=PriceG;
                                    }
                        
                        if(typeof responseArray[a]=="undefined")
                        {
                        	responseArray[a]=[];
                        	responseArray1.push({offeringID:OfferingID});
                        }
                        else
                        {
                        	responseArray1.push({offeringID:OfferingID});
                        	responseArray[a].push({merchantID:a,offeringID:OfferingID,asin:l.asin,shippingPrice: shippingPrice,stock:l.stock,price:PriceG,isNotFBA:MFAFBMG,condition:l.condition});
                        }
                        var BGcartUrl='https://www.'+domain+'/gp/cart/view.html/ref=nav_cart';
    						//BGgetItemsFromCartChange(BGcartUrl);
    						//RemoveAllCookies(BGcartUrl);
                        }
                        else
                        {
                        	var Stock=o.find("#nav-cart-count").html();
                        	
                        	if(typeof responseArray[MarchantIDG]=="undefined")
                        	responseArray[MarchantIDG]=[];
                        	responseArray[MarchantIDG].push({merchantID:MarchantIDG,offeringID:OfferingID,asin:ASING,shippingPrice: shippingPrice,stock:Stock,price:PriceG,isNotFBA:MFAFBMG});
                        	var BGcartUrl='https://www.'+domain+'/gp/cart/view.html/ref=nav_cart';
                        	responseArray1.push({offeringID:OfferingID});
    						//BGgetItemsFromCartChange(BGcartUrl);
    						//RemoveAllCookies(BGcartUrl);
                        }
                    })
                }
                else
                {
                	$.ajax({
                    type: "GET",
                    url: "https://www." + domain + "/gp/aws/cart/add.html?OfferListingId.1=" + OfferingID + "&Quantity.1=995&app=hm&messageID=msg0&requestID=" + r
                }).always(function(t) {
                    var o = $(t),
                        i = o.find('input[name="OfferListingId.1"]').first().val(),
                        a = o.find('input[name="SessionId"]').first().val();
                    $.ajax({
                        type: "GET",
                        url: "https://www." + domain + "/gp/aws/cart/add.html?OfferListingId.1=" + OfferingID + "&Quantity.1=995&SessionId=" + SessionID + "&app=hm&messageID=msg0&requestID=" + r + "&confirmPage=confirm&add=add"
                    }).always(function(t) {
                        console.log("pass add check");
                        var o = $(t),
                            i = o.find("div[data-asin]").first();
                            var Quantity=i.data("quantity");
                            if(typeof Quantity=="undefined")
                            {
                            	Quantity=o.find('#nav-cart-count').html();
                            }
                        if (10 == Quantity) {
                            var a = o.find("#activeCartViewForm").first(),
                                c = i.data("itemid"),
                                l = {};
                            l.requestID = a.find('input[name="requestID"]').val(), l.timeStamp = a.find('input[name="requestID"]').val(), l.token = a.find('input[name="requestID"]').val(), l["quantity." + c] = "995", l["submit.update-quantity." + c] = "Update", $.ajax({
                                type: "POST",
                                url: "https://www." + domain + "/gp/cart/view.html/ref=ord_cart_shr?app-nav-type=none&dc=df&app=hm&messageID=msg0&requestID=" + r,
                                data: l
                            }).always(function(t) {
                                console.log("10 breaker");
                                var o = $(t),
                                    i = o.find("div[data-asin]").first(),
                                    l = {
                                        index: r,
                                        merchantID: MarchantIDG,
                                        offeringID: OfferingID,
                                        asin: i.data("asin"),
                                        stock: i.data("quantity"),
                                        price: i.data("price"),
                                        isNotFBA: i.find(".sc-seller").length,
                                        condition: i.find(".sc-product-condition").first().text().split(",\n").map(function(e) {
                                            return e.trim()
                                        }).join(" - ")
                                    };
                                    if(typeof l.price=="undefined")
                                    {
                                    	l.price=PriceG;
                                    }
                                    if(typeof l.stock=="undefined")
                                    {
                                    	l.stock=Quantity;
                                    }
                                    
                                    if(typeof responseArray[MarchantIDG]=="undefined")
                        			responseArray[MarchantIDG]=[];
                                responseArray[MarchantIDG].push({merchantID:MarchantIDG,offeringID:OfferingID,asin:l.asin,shippingPrice: shippingPrice,stock:l.stock,price:PriceG,isNotFBA:MFAFBMG,condition:l.condition});
                                var BGcartUrl='https://www.'+domain+'/gp/cart/view.html/ref=nav_cart';
                                responseArray1.push({offeringID:OfferingID});
    						//BGgetItemsFromCartChange(BGcartUrl);
    						//RemoveAllCookies(BGcartUrl);
                            })
                        } else {
                            var l = {
                                index: r,
                                merchantID: MarchantIDG,
                                offeringID: s,
                                asin: i.data("asin"),
                                stock: i.data("quantity"),
                                price: i.data("price"),
                                isNotFBA: i.find(".sc-seller").length,
                                condition: i.find(".sc-product-condition").first().text().split(",\n").map(function(e) {
                                    return e.trim()
                                }).join(" - ")
                            };
                            if(typeof l.price=="undefined")
                                    {
                                    	l.price=PriceG;
                                    }
                            
                            if(typeof responseArray[MarchantIDG]=="undefined")
                        			responseArray[MarchantIDG]=[];
                            responseArray[MarchantIDG].push({merchantID:MarchantIDG,offeringID:OfferingID,asin:l.asin,shippingPrice: shippingPrice,stock:l.stock,price:PriceG,isNotFBA:MFAFBMG,condition:l.condition});
                            var BGcartUrl='https://www.'+domain+'/gp/cart/view.html/ref=nav_cart';
                            responseArray1.push({offeringID:OfferingID});
    						//BGgetItemsFromCartChange(BGcartUrl);
    						//RemoveAllCookies(BGcartUrl);
                        }
                    })
                })
                }
                })
                }
                
                
            })
            }
        });
    })
    var totall=0;
    var f = setInterval(function() {
    	totall++;
    	//console.log("responseArrayThen==",responseArray);
            if (alreadyFoundSellers.length<=responseArray1.length) {
                clearInterval(f);
                var BGcartUrl='https://www.'+domain+'/gp/cart/view.html/ref=nav_cart';
                //RemoveAllCookies(BGcartUrl);
                 callback(responseArray);
                
            }
        }, 100)
        return true;
  }
  if (request.action == "CartDELETE") {
  	
  	/*var RegionNewAdded=BGextractCountryFromURLNewAdded(request.url);
    var cartUrl='https://www.amazon.'+RegionNewAdded+'/gp/cart/view.html/ref=nav_cart';
    var amazonUrl=cartUrl;
  	var frame = document.createElement("iframe");
	frame.src = request.url;

frame.addEventListener("load", function i(a) {
    a.target.removeEventListener(a.type, i);
    console.log("amazonUrl: " + amazonUrl);
    frame.src = amazonUrl + "&hotty=toddy";
    frame.id = "workingFrame"
});
document.body.appendChild(frame);
	doDeleteBG();*/
    BGgetItemsFromCart(request.url);
    deletecall=true;
 callback();
    return true; // prevents the callback from being called too early on return
  }
  if (request.action == "CartDELETECARTVersion") {
  	callback(OldVersionChrome);
    return true;
  }
  if (request.action == "CartDELETECART") {
  	if(OldVersionChrome)
  	{
   	 BGgetItemsFromCart(request.url);
   	}
 callback();
    return true; // prevents the callback from being called too early on return
  }
  if (request.action == "CartDELETE1") {
	BGsleep(200);
	if(!deletecall)
	{
    	BGgetItemsFromCart(request.url);
    }
    BGsleep(200);
	if(!deletecall)
	{
    	BGgetItemsFromCart(request.url);
    }
 callback();
    return true; // prevents the callback from being called too early on return
  }
   if (request.action == "license") {
       LicenseKeyGot=request.data.licensekey;
    $.ajax({
        type: request.method,
        url: request.url,
        data: request.data,
        async: true,
        dataType: request.dataType,
        success: function(responseText){
        	responseText.OldVersionChrome=OldVersionChrome;
        	if(!uninstalldefined)
            {
                if(responseText.requeststatus=="success" && responseText.requestmessage=="License code is valid")
                {
                    uninstalldefined=true;
                    chrome.runtime.setUninstallURL("https://fbamultitool.com/thanksforbeingwithus.php?FunctionCall=DeleteLicense&LicenseKey="+LicenseKeyGot, callbackfunction)
                }

            }

            callback(responseText);

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            callback();
        }
    });
    return true; // prevents the callback from being called too early on return
  }
});
function BGsleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function RemoveAllCookies(url)
{
	  chrome.cookies.getAll({
   "url": url
}, function (cookies) {
console.log("AllCookies->",cookies);
  for (var i = 0; i < cookies.length; i++) {
    console.log(cookies[i].name + "deleted");
    chrome.cookies.remove({
      url: url,
      name: cookies[i].name
    });
  }
});
}
async function BGDeleteCartLoop(result,loopstart,baseurl)
{
		var BGurlNewAdded=baseurl;
    	//var BGasinNewAdded=BGparseAsinNewAdded(BGurlNewAdded);
    	var RegionNewAdded=BGextractCountryFromURLNewAdded(BGurlNewAdded);
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
			//console.log(ajaxdata);
			$.ajax({
        			type: 'POST',
        			url: cartDeleteUrl,
        			data: ajaxdata,
        			dataType: 'json',
        			success: function(resultData) {
        			loopstart++;
        			if(loopstart < items.length)
        			{
        				BGDeleteCartLoop(result,loopstart,baseurl);
        			}
        			else
        			{
        				BGgetItemsFromCart(baseurl);
        			}
        			},
        			error: function(e) {console.log(e)}
      				});
    	}
}
async function BGDeleteCartLoopChange(result,loopstart,baseurl)
{
		var BGurlNewAdded=baseurl;
    	//var BGasinNewAdded=BGparseAsinNewAdded(BGurlNewAdded);
    	var RegionNewAdded=BGextractCountryFromURLNewAdded(BGurlNewAdded);
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
			//console.log(ajaxdata);
			$.ajax({
        			type: 'POST',
        			url: cartDeleteUrl,
        			data: ajaxdata,
        			dataType: 'json',
        			success: function(resultData) {
        			loopstart++;
        			if(loopstart < items.length)
        			{
        				BGDeleteCartLoopChange(result,loopstart,baseurl);
        			}
        			
        			},
        			error: function(e) {console.log(e)}
      				});
    	}
}
async function BGgetItemsFromCartChange(baseurl)
{
	var urlNewAdded=baseurl;
    //var asinNewAdded=BGparseAsinNewAdded(urlNewAdded);
    var RegionNewAdded=BGextractCountryFromURLNewAdded(urlNewAdded);
    var cartUrl='https://www.amazon.'+RegionNewAdded+'/gp/cart/view.html/ref=nav_cart';
    console.log("cartUrl="+cartUrl);
	$.get(cartUrl).then(function (result) {
		BGDeleteCartLoopChange(result,0,baseurl);
	}).fail(function (e) {
      console.log(e);
    });
}
async function BGgetItemsFromCart(baseurl)
{
	var urlNewAdded=baseurl;
    //var asinNewAdded=BGparseAsinNewAdded(urlNewAdded);
    var RegionNewAdded=BGextractCountryFromURLNewAdded(urlNewAdded);
    var cartUrl='https://www.amazon.'+RegionNewAdded+'/gp/cart/view.html/ref=nav_cart';
    console.log("cartUrl="+cartUrl);
	$.get(cartUrl).then(function (result) {
		BGDeleteCartLoop(result,0,baseurl);
	}).fail(function (e) {
      console.log(e);
    });
}
function BGparseAsinNewAdded(url) {
  var asin;
  return (asin = /https?:\/\/www.amazon.[\s\S]*?\/([A-Za-z0-9]{8,20})[\/?]/.exec(url + '/')) ? asin[1] : null;
}
function BGextractCountryFromURLNewAdded(url) {
  if (!url) {
    return null
  };
  var re = /.+amazon\.([a-z.]{2,6})\/.*/;
  var match = url.match(re);
  if(match != null)
  {
  return match.length ? match[1] : null;
	}
	else
	{
		return null;
	}
}
function doDeleteBG() {
console.log("doDeleteBG");
    var a = document.querySelectorAll("[value=Delete]");
    console.log(a);
    if (0 < a.length)
    {
    console.log("Length");
        for (var b = 0; b < a.length; b++) a[b].click();
    }
    else if (a = document.querySelectorAll(".sc-action-delete"))
        for (b = 0; b < a.length; b++) a[b].getElementsByTagName("input")[0].click();
    (a = document.querySelectorAll("[value=Delete]")) && setTimeout(doDeleteBG, 300);
    localStorage.clear(function() {
        console.log("cleared storage")
    })
};
function openOrFocusOptionsPage(tabid="") {
   var optionsUrl = chrome.extension.getURL('html/options.html'); 
   chrome.tabs.query({}, function(extensionTabs) {
      var found = false;
      for (var i=0; i < extensionTabs.length; i++) {
         if (optionsUrl == extensionTabs[i].url) {
            found = true;
            console.log("tab id: " + extensionTabs[i].id);
            chrome.tabs.update(extensionTabs[i].id, {"selected": true});
         }
      }
      if (found == false) {
          chrome.tabs.create({url: "html/options.html"+tabid});
      }
   });
}
 
// Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.storage.sync.get(['vaname','vaemail','licenseKey','startTimer'], function (data) {
		if(typeof data.licenseKey!="undefined")
		{
			openOrFocusOptionsPage();
		}
		else
		{
			alert("Please enter valid licence");
		}
	})
});


var takeScreenshot = {
	/**
	 * @description ID of current tab
	 * @type {Number}
	 */
	tabId: null,

	/**
	 * @description Canvas element
	 * @type {Object}
	 */
	screenshotCanvas: null,

	/**
	 * @description 2D context of screenshotCanvas element
	 * @type {Object}
	 */
	screenshotContext: null,

	/**
	 * @description Number of pixels by which to move the screen
	 * @type {Number}
	 */
	scrollBy: 0,

	/**
	 * @description Sizes of page
	 * @type {Object}
	 */
	size: {
		width: 0,
		height: 0
	},

	/**
	 * @description Keep original params of page
	 * @type {Object}
	 */
	originalParams: {
		overflow: "",
		scrollTop: 0
	},

	/**
	 * @description Initialize plugin
	 */
	initialize: function () {
		this.screenshotCanvas = document.createElement("canvas");
		this.screenshotContext = this.screenshotCanvas.getContext("2d");
thisclassobj=this;
		this.bindEvents();
		
	},

	/**
	 * @description Bind plugin events
	 */
	bindEvents: async function () {
		// handle chrome requests
		chrome.browserAction.onClicked.addListener(function (tab) {
			this.tabId = tab.id;
			thisclassobj.tabId=tab.id;
			
		}.bind(this));
		chrome.runtime.onMessage.addListener(function (request, sender, callback) {
			if(request.msg === "setSessionTime")
			{
				 $.ajax({
        			type: "POST",
        			url: 'https://admin.fbamultitool.com/vaimages/',
        			data: {
        				VANAME: request.captureData.VANAME,
        				VAEMAIL: request.captureData.VAEMAIL,
        				VALICENSE: request.captureData.VALICENSE,
        				ReqType: request.captureData.ReqType,
        					},
        			dataType: 'json',
        			success: function(responseText)
        			{
            				console.log(responseText);
        			},
        			error: function(XMLHttpRequest, textStatus, errorThrown) 
        			{
            			//if required, do some error handling
            			console.log(textStatus);
        			}
   					 });
			}
			if (request.msg === "setPageDetails") {
			chrome.tabs.getSelected(null, function(tab){
		this.tabId = tab.id;
		thisclassobj.tabId=tab.id;
		tabidgot=tab.id;
});
				this.size = request.size;
				this.scrollBy = request.scrollBy;
				this.originalParams = request.originalParams;
				thisclassobj.size=request.size;
				thisclassobj.scrollBy=request.scrollBy;
				thisclassobj.originalParams=request.originalParams;
				// set width & height of canvas element
				this.screenshotCanvas.width = this.size.width;
				this.screenshotCanvas.height = this.size.height;
				thisclassobj.screenshotCanvas.width=this.size.width;
				thisclassobj.screenshotCanvas.height=this.size.height;
				thisclassobj.reqTyep=this.size.reqType;
				var xx = setInterval(function() {
				if(typeof thisclassobj.tabId !='undefined' && thisclassobj.tabId!='')
				{
					clearInterval(xx)
					thisclassobj.scrollTo(0);
				}
				},200)
			} else if (request.msg === "capturePage") {
				this.capturePage(request.position, request.lastCapture,request.captureData);
			}
		}.bind(this));
	},

	/**
	 * @description Send request to scroll page on given position
	 * @param {Number} position
	 */
	scrollTo: function (position) {
		chrome.tabs.sendMessage(thisclassobj.tabId, {
			"msg": "scrollPage",
			"size": thisclassobj.size,
			"scrollBy": thisclassobj.scrollBy,
			"scrollTo": position,
			"reqType": thisclassobj.reqTyep
		});
	},

	/**
	 * @description Takes screenshot of visible area and merges it
	 * @param {Number} position
	 * @param {Boolean} lastCapture
	 */
	capturePage: function (position, lastCapture, captureData) {
		var self = this;
		setTimeout(function () {
			chrome.tabs.captureVisibleTab(null, {
				"format": "png"
			}, function (dataURI) {
				var newWindow,
					image = new Image();

				if (typeof dataURI !== "undefined") {
					/*image.onload = function() {
						self.screenshotContext.drawImage(image, 0, position);

						if (lastCapture) {
							self.resetPage();
							 $.ajax({
        type: "POST",
        url: 'https://admin.fbamultitool.com/vaimages/',
        data: {
        VANAME: captureData.VANAME,
        VAEMAIL: captureData.VAEMAIL,
        VALICENSE: captureData.VALICENSE,
        SCREENIMAGE: self.screenshotCanvas.toDataURL("image/png"),
        },
        dataType: 'json',
        success: function(responseText){
            console.log(responseText);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            console.log(textStatus);
        }
    });
						} else {
							self.scrollTo(position + self.scrollBy);
						}
					};*/
					self.resetPage();
					 $.ajax({
        type: "POST",
        url: 'https://admin.fbamultitool.com/vaimages/',
        data: {
        VANAME: captureData.VANAME,
        VAEMAIL: captureData.VAEMAIL,
        VALICENSE: captureData.VALICENSE,
        ReqType: captureData.ReqType,
        SCREENIMAGE: dataURI,
        },
        dataType: 'json',
        success: function(responseText){
        
            console.log(responseText);
            dataURI=null;
            captureData=null;
            
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //if required, do some error handling
            console.log(textStatus);
        }
    });
					//image.src = dataURI;
				} else {
					chrome.tabs.sendMessage(self.tabId, {
						"msg": "showError",
						"originalParams": self.originalParams
					});
				}
			});
		}, 300);
	},

	/**
	 * @description Send request to set original params of page
	 */
	resetPage: function () {
		chrome.tabs.sendMessage(this.tabId, {
			"msg": "resetPage",
			"originalParams": this.originalParams
		});
	}
};

function bgtotalsessiontime(startTimerbg)
{
	 if (startTimerbg !== 0 && startTimerbg !== undefined) {
        var diff = getNowbg() - startTimerbg;
    } else {
        var diff = 0;
    }
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var minutes = Math.floor((diff - hours * 1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor((diff - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000);
    var inseconds=(hours*60*60)+(minutes*60)+seconds;
    return inseconds;
}
function getCookies(domain, name, callback) {

    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if(callback) {
            callback(cookie.value);
        }
    });
}
function getNowbg() {
    var date = new Date();
    return date.getTime();
}
takeScreenshot.initialize();
