function alarmIt(data) {    
    browser.notifications.create({
    type: "basic",
    title: "TickStop",
    message: data
  });
}

browser.runtime.onMessage.addListener(alarmIt);


