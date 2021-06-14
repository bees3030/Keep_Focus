var urlArray = new Array();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    if (request.greeting === 'backgroundhello') {
        console.log("[background] request:" + request.greeting);
        // TODO
        GetUrl();
        sendResponse({ farewell: urlArray });
      } else{
        urlArray = request.action;
        console.log(urlArray);
    
        localStorage.removeItem("url");
        localStorage.setItem("url", urlArray);
      }
});

function GetUrl(){
    urlArray = localStorage.getItem("url").split(',');
    console.log(urlArray);
}

