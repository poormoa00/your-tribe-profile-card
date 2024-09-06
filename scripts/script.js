//const expandButton = document.querySelector('header button') //dit is de knop om het te vergroten
//expandButton.addEventListener('click', expand)    //dit vergroot het visite kaartje

//function expand () {
  //document.querySelector("p").textContent = 'oude student fdnd'  //dit is de functie dat als je erop drukt dat het vergoot 

let btn = document.querySelectorAll("button");
let detail = document.querySelectorAll("span");



let cleanbtn = function () {
    btn.forEach(function (element) {
        element.classList.remove("active");
    });
}


let cleaninfo = function () {
  detail.forEach(function (element) {
    element.classList.remove("active");
});
}

let setInfo = function (i) {
  detail[i].classList.add("active");
}

btn.forEach(function(element, index ){
element.addEventListener("click",function(evt){
cleanbtn();
element.classList.add("active");

cleaninfo();

switch(index){
  case 0: setInfo(0)
  break;

  case 1: setInfo(2)
  break;

  case 2: setInfo(0);
  setInfo(1);
  setInfo(2);
  setinfo(3)
  break;
  
  case 3: setInfo(1);
  break;

  case 4: setInfo(2);
  setinfo(3)
  break;
}
});
});