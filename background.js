chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        name: "spoiler alert!!!"
    });
});