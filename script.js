function onGot(tabInfo) {
  document.getElementById('alarmIt').addEventListener('click', function() {
    var message = parseFloat(document.getElementById("time").value);
    browser.runtime.sendMessage({
    	minutes: message,
    	tab: tabInfo
    });
  });	
}

function onError(error) {
  console.log('Error: ', error);
}

var gettingCurrent = browser.tabs.getCurrent();
gettingCurrent.then(onGot, onError);