var browser = browser || chrome,
    isFF = -1 < navigator.userAgent.toLowerCase().indexOf("firefox");
console.log("inserted results.js");
console.log("In Iframe? " + (window.parent != window));
var requestId;
document.addEventListener("load", function() {
console.log("===============loaded============");
    if (window.parent != window && (isFF || -1 != window.location.ancestorOrigins[0].indexOf("chrome-extension")) && -1 < window.location.href.indexOf("cart/add")) {
        console.log("Frame URL: " + window.location.href);
        console.log("Document Title: " + document.title);
        var a = setInterval(function() {
            if ("complete" === document.readyState) {
                clearInterval(a);
                var b = document.getElementsByName("add")[0];
                b ? (console.log("form found and submitting: " + b), KKclickit(b)) : KKdone()
            }
        }, 100)
    }
});
var KKclickit = function(a) {
    console.log("init click on");
    console.log(a);
    var b = document.createEvent("MouseEvents");
    b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
    a.dispatchEvent(b);
    console.log("click displatched")
};

function getForm() {
    var a = document.getElementsByTagName("form"),
        b;
    for (b in a)
        if (a[b].action && -1 < a[b].action.indexOf("cart/add")) return a[b]
}

function KKdone() {
    var a = document.querySelectorAll("div[data-asin]");
    console.log("items length: " + a.length);
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
            console.log("quanity: " + e + ", merchantId: " + d)
        }
        /*browser.runtime.sendMessage({
            action: "displayResults",
            source: {
                offers: b
            }
        });*/
        KKdoDelete()
    } else browser.runtime.sendMessage({
        action: "displayResults",
        source: {
            offers: []
        }
    })
}

function KKdoDelete() {
    var a = document.querySelectorAll("[value=Delete]");
    if (0 < a.length)
        for (var b = 0; b < a.length; b++) a[b].click();
    else if (a = document.querySelectorAll(".sc-action-delete"))
        for (b = 0; b < a.length; b++) a[b].getElementsByTagName("input")[0].click();
    (a = document.querySelectorAll("[value=Delete]")) && setTimeout(KKdoDelete, 300);
    localStorage.clear(function() {
        console.log("cleared storage")
    })
};