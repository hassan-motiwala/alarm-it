function justDoIt(alarmIt) {    
    browser.notifications.create({
    type: "basic",
    title: "TickStop",
    message: data
  });
}

browser.runtime.onMessage.addListener(alarmIt);


