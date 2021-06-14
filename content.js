var urlArray = new Array();
var first = true;

var elements = document.getElementsByTagName("*");
var highest_index = 0;

for (var i = 0; i < elements.length - 1; i++) {
    if (parseInt(elements[i].style.zIndex) > highest_index) {
        highest_index = parseInt(elements[i].style.zIndex);
    }
}

// chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
//     urlArray = msg.url;

//     console.log(urlArray);

//     urlArray.map(function(element, index, array){
//         if(window.location.href.includes(element)){
//             document.body.style.setProperty('pointer-events', 'none');

//             if(first){
//                 let dark = document.createElement('div');
//                 dark.id = 'overlay' 
//                 document.body.appendChild(dark);
                
//                 var s=document.createElement('style');
//                 s.style.zIndex = highest_index + 1;
//                 console.log(highest_index);
//                 s.innerHTML="#overlay {position: fixed; width: 100%; height: 100%; left: 0; top: 0; background-color: rgba(0,0,0, 0.5); overflow-x: hidden;}";
//                 document.body.appendChild(s);

//                 first = false;
//             }
//         }
//     });
// }); 

function BlockSite(){
    console.log(urlArray);

    urlArray.map(function(element, index, array){
      if(window.location.href.includes(element)){
          document.body.style.setProperty('pointer-events', 'none');
          alert('이 사이트를 사용할 수 없습니다');
          if(first){
              let dark = document.createElement('div');
              dark.id = 'overlay' 
              document.body.appendChild(dark);
              
              var s=document.createElement('style');
              s.style.zIndex = highest_index + 1;
              console.log(highest_index);
              s.innerHTML="#overlay {position: fixed; width: 100%; height: 100%; left: 0; top: 0; background-color: rgba(0,0,0, 0.5); overflow-x: hidden;}";
              document.body.appendChild(s);

              first = false;
          }
      }
  });
}


window.onload = function(){
    console.log(urlArray);

    chrome.runtime.sendMessage({greeting: 'backgroundhello'}, (response) => {
        console.log("[contentscript] chrome.runtime.sendMessage()");
        console.log(response.farewell);

        urlArray = response.farewell;

        BlockSite();
      });  
}

