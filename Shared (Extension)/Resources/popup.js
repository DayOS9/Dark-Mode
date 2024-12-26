document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggleButton");
  button.addEventListener("click", () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode");
    browser.runtime.sendMessage({ action: "toggle" });
  });
});
