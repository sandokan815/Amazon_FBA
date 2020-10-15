class FBAMULTITOOLSEARCHWINDOWHEALPERCLASS {

    constructor() {

    }

    get SearchWindowFrame() {

        return $("#FBAMT");
    }

    get iframe() {

        return $("#FBAMTSearchFrame");
    }

    GenerateFrameURL(keyword, country) {

        return "chrome-extension://" + chrome.runtime.id + "/search/index.html?keyword=" + encodeURIComponent(keyword) + "&country=" + country;
    }

    remove() {

        this.SearchWindowFrame.fadeOut(300, function () {
            $(this).remove();
        });
    }
	
    AppendSearchWindow(keyword, country) {

        const _root = this;
        this.remove();
        $("body").append('<div id="FBAMT" class="FBAMTSearchWindow"><button id="FBAMTCloseButton">X</button><iframe src="' + this.GenerateFrameURL(keyword, country) + '"  id="FBAMTSearchFrame" name="FBAMTSearchFrame" class="FBAMTSearchFrame" allow="geolocation"></iframe></div>');
        $("#FBAMTCloseButton").on("click", function () {
            _root.remove();
        });
    }
	AppendKeepaWindow(keyword, country) {
		let url="chrome-extension://" + chrome.runtime.id + "/keepa/index.html?asin=" + keyword + "&country=" + country;
        $("#FBAMTKeepa").remove();
        $("body").append('<div id="FBAMTKeepa" data-asin="'+keyword+'" data-country="'+country+'" class="FBAMTKeepaWindow" style="width: 43%;height:300px;z-index: 9999;top: 20%;position: fixed;right: 33%;"><button id="FBAMTKeepaCloseButton" style="display: block;width: 31px;height: 32px;line-height: 33px;border: none;font-size: 22px;text-align: center;position: relative;top: 40px;left: 95%;z-index: 9999;background-color: transparent;color: black;cursor: pointer;font-weight: bold;">X</button><iframe src="' + url+ '"  id="FBAMTKeepaFrame" name="FBAMTKeepaFrame" class="FBAMTKeepaFrame" allow="geolocation" style="width: 100%;height: 100%;"></iframe></div>');
        $("#FBAMTKeepaCloseButton").on("click", function () {
            $("#FBAMTKeepa").remove();
        });
    }
    show(keyword, country) {
        if (!this.SearchWindowFrame.length) {

            this.AppendSearchWindow(keyword, country);
        }
        else {

            this.iframe.attr("src", this.GenerateFrameURL(keyword, country));
        }
    }
}
const SearchWindowFBAMULTITOOL = new FBAMULTITOOLSEARCHWINDOWHEALPERCLASS();

chrome.runtime.onMessage.addListener(function (request, sender, response) {

    var action = request.hasOwnProperty("action") && request.action ? request.action : false;

    if (request.hasOwnProperty("to") && request.to == "content") {

        if (action == "showFBAMTSearchWindow") {
console.log("showFBAMTSearchWindow");
            if (!CheckIfNotAmazon()) {

                alert("You can't search on this page");
                return;
            }

            SearchWindowFBAMULTITOOL.show(request.keyword, request.country);
        }

            // Fake Amazon Product page fetch. 
        else if (action == "getPageHtml") {
            response(false);
        }

            // Response true to let background.js knows I'm already injected to page
        else if (action == "isFBAMTSearchWindowInjected") {
            response(true);
        }
    }

    return true;
});

function CheckIfNotAmazon() {

    const restrictedUrls = ["amazon.co.uk", "amazon.com", "amazon.de", "amazon.fr", "amazon.es", "amazon.it"];
    const currentUrl = document.location.href;

    for (let r of restrictedUrls) {

        if (currentUrl.indexOf(r) > -1) return false;
    }

    return true;
}
window.addEventListener('message', function (event) { 

    let eventType = event.data.type || "";

    if (eventType == "FBAMTshowKeepaGraphs") {

        SearchWindowFBAMULTITOOL.AppendKeepaWindow(event.data.asin, event.data.country);
    }

});
