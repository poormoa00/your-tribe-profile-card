const expandButton = document.querySelector('header button') //dit is de knop om het te vergroten
expandButton.addEventListener('click', expand)    //dit vergroot het visite kaartje

function expand () {
  document.body.classList.toggle('expand')  //dit is de functie dat als je erop drukt dat het vergoot 
}
