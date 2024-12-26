console.log("checking if everything is okay");
// on start up, create a new var (if it doesnt exist) to store state
// if an entry already exists, just skip
async function setState() {
  try {
    let state = await browser.storage.local.get("Dark");
    console.log("An entry exists!");
  } catch (error) {
    console.log(
      "No entry was found; Will be creating an entry with default value",
    );
    await browser.storage.local.set({ Dark: 0 });
  }
}

browser.runtime.onMessage.addListener(async (message) => {
  await setState();
  if (message.action === "toggle") {
    // reflect the change in the local storage
    let state = await browser.storage.local.get("Dark");
    if (state.Dark === 0) {
      console.log("Dark mode is now enabled");
      await browser.storage.local.set({ Dark: 1 });
    } else {
      console.log("Dark mode is now disabled");
      await browser.storage.local.set({ Dark: 0 });
    }
  }
});
