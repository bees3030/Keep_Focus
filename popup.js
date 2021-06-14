var urlArray = new Array();

function GetUrl(){
    //urlArray = localStorage.getItem("url").split(',');
    urlArray = localStorage.getItem("url").split(',');
    console.log(urlArray);
}

function DeleteUrl(event){
    console.log(event.target.parentElement);

    var parent = event.target.parentElement;
    parent.remove();

    urlArray.splice(parent.id, 1);
    localStorage.removeItem("url");
    localStorage.setItem("url", urlArray);

    sendData();

    window.location.reload();
}

function sendData(){
    chrome.runtime.sendMessage({action: urlArray}, function(response) {
        
    });
}

$('#addBtn').click(function() {
    var inputUrl = $('#inputUrl').val();
    $('#inputUrl').val('');

    urlArray.push(inputUrl);
    console.log(urlArray);
    localStorage.removeItem("url");
    localStorage.setItem("url", urlArray);

    window.location.reload();

    sendData();
});

window.onload = function() {
    GetUrl();

    urlArray.map(function(element, index, array){
        console.log(`${array}의 ${index}번째 인자 : ${element}`);
        let node = document.createElement('li'); // li태그 생성
        let button = document.createElement('button');

        node.id= index;
        let buttontext = document.createTextNode('삭제');
        let textnode = document.createTextNode(element); // 텍스트 생성
        node.appendChild(textnode); // 텍스트를 li태그에 부착
        button.appendChild(buttontext);

        button.onclick = function(){
            DeleteUrl(event);
        };

        document.getElementById('urlList').appendChild(node);
        document.getElementById(index).appendChild(button);
    });
  }


  


 