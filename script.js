if(window.innerWidth > 1200){
  navHeight = document.getElementById("navbar1").clientHeight
}
else{
  navHeight = document.getElementById("navbar2").clientHeight
}


document.getElementById("main").style.marginTop = navHeight + "px";


function displayNextImg() {
  x = x === 2 ? 0 : x + 1;
  ads.style.right = `${x * 100}vw`;
}

function displayPreviousImg() {
  x = x < 0 ? 2 : x - 1;
  ads.style.right = `${x * 100}vw`;
}

function startTimer() {
  setInterval(() => {
    displayNextImg();
  }, 5000);
}

startTimer();

var x = -1;
var ads = document.getElementById("ads");


var y = [-1, -1];

var m = 0;

function moreBoxes() {
  if(window.innerWidth > 1000){
    if(m < 1){
        document.getElementById("insideAboutBoxes").style.right = "31vw";
        m++;
        console.log("yoo")
    }
    else {
      document.getElementById("insideAboutBoxes").style.right = '0vw';
      m--;
    }
  }
  else{
    if(m < 2){
      m++;
      document.getElementById("insideAboutBoxes").style.right = 90 * m + `vw`;
    }
    else{
      document.getElementById("insideAboutBoxes").style.right = "0vw";
      m = 0;
    }
  }
}

function lessBoxes() {
  if(window.innerWidth > 1000){
    if(m > 0){
      m--;
      document.getElementById("insideAboutBoxes").style.right = "0vw";
    }
    else {
      document.getElementById("insideAboutBoxes").style.right = '31vw';
      m++;
    }
  }
  else{
    if(m > 0){
      m--;
      document.getElementById("insideAboutBoxes").style.right = 90 * m + `vw`;
    }
    else{
      m = 2
      document.getElementById("insideAboutBoxes").style.right = 90 * m + `vw`;
    }
  }
}

setInterval(() => {
    moreBoxes();
}, 3000);

function show() {
  yo = document.getElementsByClassName("menu")[0];
  yo.style.display = (yo.style.display === 'block') ? 'none' : 'block';
}
