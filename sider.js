//script for the image slider

"use strict";

var otherImages = [
  "bnature.jpg",
  "boo.jpg",
  "CC.png",
  "chris.jpg",
  "DE_JOHNSON.png",
  "healthybite.png",
  "imy.jpg",
  "peluis.png",
];

let currentImage = 0;
let image = document.getElementById("myImage");
let nextImage = document.getElementById("next");
let previousImage = this.document.getElementById("previous");

nextImage.addEventListener("click", function () {
  currentImage++;
  if (currentImage > otherImages.length - 1) {
    currentImage = 0;
  }
  swap();
});

previousImage.addEventListener('click', function(){
  currentImage--;
  if(currentImage<0){
    currentImage=otherImages.length-1
  }
swap();
});

function swap(){
  image.src=otherImages[currentImage];
}
