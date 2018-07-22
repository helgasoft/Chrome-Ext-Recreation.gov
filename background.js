// Chrome extension - fix for recreation.gov;  invoked from manifest.json
var pattern = 'https://www.recreation.gov/*';
chrome.tabs.onUpdated.addListener(function(tab) {
  chrome.tabs.query({ active: true, currentWindow: true, url: pattern }, function(tabs) {
	chrome.tabs.executeScript(tabs[0].id, (
          {code: 
          	//"alert('p='+document.getElementById('footerall').style.position);" +
		"document.getElementById('footerall').style.position='relative';"
          }));
  });
});
