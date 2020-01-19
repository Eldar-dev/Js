function openHmnPage(){
    document.location.href = "http://www.hmn.ru/index.php?index=56";
}


function changeStyle(){
    var divs = document.querySelectorAll("div");
    for(var div of divs){
        div.style.backgroundColor = "blue";
        div.style.borderColor = "black";
    }
}


function displayFlexbox(){
    var body = document.querySelector("body");
    body.innerHTML = "<section id='content'></section>";

    var section = document.getElementById("content");
    for(var i = 1; i <= 6; i++){
        section.innerHTML += "<article>" + "News " + i + "</article>";
    }
    section.style.display = "flex";

    var articles = document.querySelectorAll("article");
    for(var article of articles){
        article.style.marginRight = "40px";
        article.style.padding = "20px";
        article.style.backgroundColor = "red";
    }
}