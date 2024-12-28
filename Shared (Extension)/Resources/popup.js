document.addEventListener("DOMContentLoaded", async () => {
  // check the last saved state and update accordingly
  try {
    let state = await browser.storage.local.get("Dark");
    if (state.Dark === 1) {
      var element = document.body;
      element.classList.toggle("dark-mode");
    }
  } catch (error) {
    console.log(error);
    console.log("This is probably the first time it is being ran");
  }
  const button = document.getElementById("toggleButton");
  button.addEventListener("click", () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode");
    browser.runtime.sendMessage({ action: "toggle" });
  });
});
