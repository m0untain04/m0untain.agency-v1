function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function pSleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function extractURLSelector(url, returnBool = false) {
  var rx = /#(.+)/g;
  var arr = rx.exec(url);
  if(returnBool)
	return arr ? true:false;
  else
	return arr[1] ? arr[1]:null; 
}

function removeURLParams(event)
{
	window.history.replaceState({}, document.title, "/");
}

$( document ).ready(function() {
	$( "#joinNow" ).click(function() {
		openInNewTab("https://yeete.rs/discord");
	});
	
	$("a").click(function() { //Handle Anchors
        if($(this).is("[data-toggle]"))
		{
			var selector = $(this).attr("href");
			if(selector == "#home")
				window.history.pushState({}, document.title, "/");
			else
				window.history.pushState({}, document.title, "/" + selector);
		}
    });
	
	//window.onpopstate = removeURLParams;
	
	if(extractURLSelector(location.href.toString(), true)) //parse the url if it's the case
	{
		switch(extractURLSelector(location.href.toString()))
		{
			case 'home':
				document.querySelector("#nav > li:nth-child(1) > a").click();
				break;
			case 'pricing':
				document.querySelector("#nav > li:nth-child(2) > a").click();
				break;
			case 'faq':
				document.querySelector("#nav > li:nth-child(3) > a").click();
				break;
			case 'changelog':
				document.querySelector("#nav > li:nth-child(4) > a").click();
				break;
			default:
				break;
		}
		//window.history.pushState({}, document.title, "/");
	}
});