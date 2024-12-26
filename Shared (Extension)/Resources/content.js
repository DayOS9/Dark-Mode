browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
  console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Received request: ", request);
});

browser.runtime.onMessage.addListener((message) => {
  if (message.action === "toggle") {
    console.log("Changing background color of the main page...");
    var element = document.body;
    if (element.style.backgroundColor != "black") {
      element.style.backgroundColor = "black";
    } else {
      element.style.backgroundColor = "white";
    }
  }
});
