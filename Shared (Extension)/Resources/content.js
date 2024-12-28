const observer = new MutationObserver(() => {
  affect();
});

observer.observe(document.getRootNode(), {
  subtree: true,
  childList: true,
});

async function affect() {
  try {
    let state = await browser.storage.local.get("Dark");
    if (state.Dark === 1) {
      var element = document.body;
      element.style.backgroundColor = "black";
    }
  } catch (error) {
    console.log(error);
    console.log("Perhaps state was not found or its first time ?");
  }
}

//affect();
