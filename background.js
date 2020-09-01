var rule1 = {
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'www.youtube.com', schemes: ['https'] }
        })
    ],
    actions: [ new chrome.declarativeContent.ShowPageAction() ]
};

chrome.runtime.onInstalled.addListener(function(details) {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([rule1]);
    });
});


function handleUpdate(tabId, changeInfo, tab){
    if (changeInfo.status == 'complete') {
        chrome.tabs.executeScript({
            file: 'contentScript.js'
        });
    }
}

chrome.tabs.onUpdated.addListener(handleUpdate);
