var frame = document.createElement("iframe");
var FFurlNewAdded=$(location).attr('href');
var FFRegionNewAdded=FFextractCountryFromURLNewAdded(FFurlNewAdded);
frame.src = "https://" + get_domain() + "/?hotty=toddy";
frame.addEventListener("load", function i(a) {
    a.target.removeEventListener(a.type, i);
    console.log("amazonUrl: " + amazonUrl);
    frame.src = amazonUrl + "/?hotty=toddy";
    frame.id = "workingFrame"
});
document.body.appendChild(frame);

function get_domain() {
    var a = document.createElement("a");
    a.setAttribute("href", window.location.href);
    return a.hostname
};

var cartUrl='https://www.amazon.'+RegionNewAdded+'/gp/cart/view.html/ref=nav_cart';
function FFextractCountryFromURLNewAdded(url) {
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