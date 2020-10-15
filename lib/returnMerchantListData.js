var browser = browser || chrome;

function getData() {
    var c = document.getElementsByClassName("olpOffer"),
        a = window.location.href; - 1 != a.indexOf("http%3A%2F%2F") && (a = decodeURIComponent(a.substr(a.indexOf("http%3A%2F%2F"), a.length)));
    var b = /\/offer-listing\/([^/]+)\/*/.exec(a);
    if (b) var d = b[1];
    else(b = /\/gp\/aw\/ol\/([^/]+)\/*/.exec(a)) && (d = b[1]);
    10 < d.length && (b = /B[0-9]{2}[0-9A-Z]{7}|[0-9]{9}(X|[0-9])/.exec(a)) && (d = b[0]);
    b = {};
    b.asin = d;
    b.url = a;
    b.domain = get_domain_from_url(a);
    b.results = [];
    if (0 < c.length)
        for (a = 0; a < c.length; a++) b.results.push(c[a].innerHTML);
    c = document.getElementsByClassName("olpSecondaryPage");
    if (0 < c.length)
        for (a = 0; a < b.results.length; a++) b.results[a] += c[a].innerHTML;
    return b
}

function get_domain_from_url(c) {
    var a = document.createElement("a");
    a.setAttribute("href", c);
    return a.hostname
}
browser.runtime.sendMessage({
    action: "getData",
    source: getData(document)
});