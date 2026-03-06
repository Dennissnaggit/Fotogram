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
const valueRef = document.getElementById("indexNumber");

function render() {
  for (let index = 0; index < myImages.length; index++) {
    imagesRef.innerHTML += getImages(index);
  }
}

function getImages(index) {
  return `
        <img onclick=(openDialog(${index})) class="main-images" src= "${myImages[index]}" alt="Weltraum Bilder">
        `;
}

function openDialog(index) {
  dialogRef.replaceChildren();
  dialogRef.showModal();
  dialogRef.innerHTML += renderDialog(index);
}

function renderDialog(index) {
  return ` 
          <header class="dialog-header">
            <h2>Image Name</h2>
            <a href="#close"><img src="/img/Close icon.svg" alt="schliessen button" /></a>
          </header>
          <section class="dialog-image">
        <img class="dialog-main-image" src="${myImages[index]}" alt="Weltraum Bilder" />
          </section>
          <footer>
            <button onclick="previousPicture(${index})">
            <img src="/img/buttonleft.png" alt="" />
            </button>
            <div class="value-image" id="indexNumber"><p>${index + 1} / ${myImages.length}</p></div>
            <button onclick="nextPicture(${index})"">
            <img src="/img/buttonright.png" alt="" />
            </button>
          </footer>`;
}
function nextPicture(index) {
  if (index >= myImages.length - 1) {
    dialogRef.replaceChildren();
    dialogRef.showModal();
    dialogRef.innerHTML += renderDialog(0);
  } else {
    dialogRef.replaceChildren();
    dialogRef.showModal();
    dialogRef.innerHTML += renderDialog(index + 1);
  }
}
function previousPicture(index) {
  if (index <= 0) {
    dialogRef.replaceChildren();
    dialogRef.showModal();
    dialogRef.innerHTML += renderDialog(7);
    
  } else{
  dialogRef.replaceChildren();
  dialogRef.showModal();
  dialogRef.innerHTML += renderDialog(index - 1);
}}

