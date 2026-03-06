let myImages = [
  "img/pictures/All_1.png",
  "img/pictures/All_2.png",
  "img/pictures/All_3.png",
  "img/pictures/All_4.png",
  "img/pictures/All_5.png",
  "img/pictures/All_6.png",
  "img/pictures/All_7.png",
  "img/pictures/All_8.png",
];
const imagesRef = document.getElementById("main-images");
const dialogRef = document.getElementById("imageDialog");

function render() {
  for (let index = 0; index < myImages.length; index++) {
    imagesRef.innerHTML += getImages(index);
  }
}

function getImages(index) {
  return `
        <img onclick=("openDialog()") class="main-images" src= "${myImages[index]}" alt="Weltraum Bilder">
        `;
}

function openDialog() {
    dialogRef.showModal();
}
openDialog();