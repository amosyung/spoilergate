chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        phrases: ["Levar Burton", "Chicago"]
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["./foreground.js"]
        })
            .then(() => {
                console.log("Injecting foreground script");
            })
            .catch(err => console.log(err));
    }
});