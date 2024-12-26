browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Received request: ", request);

  if (request.greeting === "hello")
    return Promise.resolve({ farewell: "goodbye" });
});

browser.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "toggle") {
    // Send the message to the active tab's content script
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, message);
    });
  }
});
