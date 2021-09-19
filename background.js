// JavaScript source code
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        name: "spoiler alert!!!"
    });
});