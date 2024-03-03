function displayNextImg() {
  x = x === 2 ? 0 : x + 1;
  ads.style.right = `${x * 100}%`;
}

function displayPreviousImg() {
  x = x < 0 ? 2 : x - 1;
  ads.style.right = `${x * 100}%`;
}

function startTimer() {
  setInterval(() => {
    displayNextImg();
  }, 5000);
}

startTimer();

var x = -1;
var ads = document.getElementById("ads");

products = [
  ["src/4.jpg", "src/21.jpg", "src/3.jpg", "src/4.jpg", "src/21.jpg"],
  ["src/20.png", "src/10.png", "src/asset-1.png", "src/20.png", "src/10.png"]
];

// function addImages(i, products, n) {
//   var productImages = document.getElementById("productImages" + n);
//   productImages.innerHTML = `
//     <img src="${products[i]}" class="h-full scale-75 mt-auto" />
//     `;
//   i = i === products.length - 1 ? 0 : i + 1;
//   productImages.innerHTML += `
//     <img src="${products[i]}" class="h-full scale-75 mt-auto" />
//     `;
//   i = i === products.length - 1 ? 0 : i + 1;
//   productImages.innerHTML += `
//     <img src="${products[i]}" class="h-full scale-75 mt-auto" />
//     `;
// }

function imageAdd(n) {
  var productImages = document.getElementById("productImages" + n);
  for (let i = 0; i < products[n].length; i++) {
    productImages.innerHTML += `
    <img src="${products[n][i]}" class="h-full scale-90 mt-auto" />
    `;
  }
  changeNextImage(n)
}

function changeNextImage(n) {
    var productImages = document.getElementById("productImages" + n);
    f[n] = (f[n] === products[n].length - 3) ? 0 : f[n] + 1;
    productImages.style.right = `${30 * f[n]}vw`;
}

function changePreviousImage(n) {
    var productImages = document.getElementById("productImages" + n);
    f[n] = (f[n] === 0) ? products[n].length - 3 : f[n] - 1;
    productImages.style.right = `${29 * f[n]}vw`;
}

// changeNextImage();
var f = [0, 0];

imageAdd(0);
imageAdd(1);

// function nextProduct(n) {
//   y[n] = y[n] === products[n].length - 1 ? 0 : y[n] + 1;
//   addImages(y[n], products[n], n);
// }

// function previousProduct(n) {
//   y[n] = y[n] === 0 ? products[n].length - 1 : y[n] - 1;
//   addImages(y[n], products[n], n);
// }

var y = [-1, -1];

var m = 0;

function moreBoxes() {
    if(m < 1){
        document.getElementById("insideAboutBoxes").style.right = '31vw';
        m++;
        console.log("yoo")
    }
    else {
        lessBoxes()
    }
}

function lessBoxes() {
    if(m > 0){
        document.getElementById("insideAboutBoxes").style.right = '0vw';
        m--;
    }
}

setInterval(() => {
    moreBoxes();
}, 3000);