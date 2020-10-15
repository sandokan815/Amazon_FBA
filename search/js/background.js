/// <reference path="../../../assets/js/lh.js" />
const CONTEXT_MENU_ID = "MY_CONTEXT_MENU";

const menuItems = [ "co.uk", "com", "de", "fr", "it", "es"];

menuItems.forEach(menuItem => {
        					chrome.contextMenus.create({
            				title: ' Search on Amazon.' + menuItem + ' "%s"',
            				id: 'fbaMultitool_search_' + menuItem,
           				 	contexts: ['selection']
        					});
    					});

//****************************************************************************************************************************************************
//                                              CONTEXT MENU
//****************************************************************************************************************************************************
/*const menuItems = ["com", "co.uk", "de", "fr", "it", "es"];
const _lh1 = new LicenseHelper();

_lh1.loadAsync().then(x=> {

    if (_lh1.license.isActive) {
        appendBbpSearchContextMenuItems();
    }
});

function appendBbpSearchContextMenuItems() {

    menuItems.forEach(menuItem => {

        chrome.contextMenus.create({
            title: ' Search on Amazon.' + menuItem + ' "%s"',
            id: 'bbp_search_' + menuItem,
            contexts: ['selection']
        });

    });
}*/

//****************************************************************************************************************************************************
//                                              CONTEXT MENU - CLICK
//****************************************************************************************************************************************************
chrome.contextMenus.onClicked.addListener(function (itemData, activeTab) {
    if (itemData.menuItemId.startsWith("fbaMultitool")) {

        const params = itemData.menuItemId.split('_');

        if (params[1] == "search") {
			 chrome.tabs.sendMessage(activeTab.id, {
            to: "content",
            action: "RemoveSelection"
        	}, function (response) 
        	{
        	});
            const baseUrl = new URL(activeTab.url).origin + "/*";
            FBAcheckPermissionAsync(baseUrl)
                .then(() => {
                    FBAMultitooladdScriptFile(activeTab.id).then(() => {

                        callClick(activeTab.id, itemData.selectionText, params[2]);
                    });
                })
                .catch(err => { console.log("FBAMultitooladdScriptFile---->",err)});
        }
    }
});

function FBAMultitooladdScriptFile(tabId) {

    return new Promise((resolve) => {

        chrome.tabs.sendMessage(tabId, {
            to: "content",
            action: "isFBAMTSearchWindowInjected"
        }, function (response) {

            if (response !== true) {

                chrome.tabs.insertCSS(tabId, { file: "/search/css/content.css" });
                chrome.tabs.executeScript(tabId, { file: "/vendor/jquery.js" });
                chrome.tabs.executeScript(tabId, { file: "/search/js/content.js" }, function () {
                    resolve();
                });
            }
            else resolve();
        });
    });
}

function callClick(tabId, selectionText, country) {

    chrome.tabs.sendMessage(tabId, {
        to: "content",
        action: "showFBAMTSearchWindow",
        keyword: selectionText,
        country: country
    },
    function (response) { });
}

function FBAcheckPermissionAsync(url) {

    return new Promise((resolve, reject) => {

        // Check
        chrome.storage.sync.get(['HighlightText'] , function (setting) 
			{
        		if(typeof setting.HighlightText!="undefined")
        		{
        			if(setting.HighlightText)
        			{
        				resolve();
        			}
        			else
        			{
        				reject();
        			}
        		}
        		else
        		{
        			reject();
        		}
        	});
    });
}

//****************************************************************************************************************************************************
//                                              AJAX HEADER MODIFIER
//****************************************************************************************************************************************************
/*function setOrGetheader(headers, name, value) {

    if (!headers || !name) {
        return;
    }
    if (value === undefined) {
        var a = headers.filter(function (h) {
            return equals(h.name, name);
        }).map(function (h) {
            return h.value;
        });
        return a.length <= 1 ? a[0] : a;
    } else if (value === null) {
        return headers.filter(function (h) {
            return !equals(h.name, name);
        });
    } else {
        headers = headers.filter(function (h) {
            return !equals(h.name, name);
        });
        if (typeof value === 'object' && value.length !== undefined) {
            value.forEach(function (v) {
                return headers.push({
                    name: name,
                    value: v
                });
            });
        } else {
            headers.push({
                name: name,
                value: value
            });
        }
        return headers;
    }
}
const BEFORE_SEND_OPTIONS1 = ["blocking", "requestHeaders"];

if (chrome.webRequest.OnBeforeSendHeadersOptions.hasOwnProperty('EXTRA_HEADERS')) {
    BEFORE_SEND_OPTIONS1.push('extraHeaders');
}
chrome.webRequest.onBeforeSendHeaders.addListener(d => {

    let result;
    let headers = d.requestHeaders;
    const customUserAgent = setOrGetheader(headers, "CustomUserAgent");

    if (customUserAgent) {
     
        headers = setOrGetheader(headers, 'User-Agent', customUserAgent);
        result = { requestHeaders: headers };
    }

    return result;

*/
//****************************************************************************************************************************************************
//                                              
//****************************************************************************************************************************************************