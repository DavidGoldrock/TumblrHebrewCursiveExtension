browser.webNavigation.onCompleted.addListener((details) => {
    if (/^http/.test(details.url)) {
      browser.tabs.executeScript(details.tabId, {
        file: 'TumblrHebrewCursiveExtension.js'
      });
    }
  });