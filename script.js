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
            <img
              class="dialog-main-image"
              <img src="${myImages[index]}" alt="Weltraum Bilder">"
              alt=""
            />
          </section>
          <footer>
            <button><img src="/img/buttonleft.png" alt="" /></button>
            <p>1/12</p>
            <button onclick=(nextPicture(${index}))><img src="/img/buttonright.png" alt="" /></button>
          </footer>`;
}
function nextPicture(index) {
  dialogRef.replaceChildren();
  dialogRef.showModal();
  dialogRef.innerHTML += renderDialog(index + 1);
}
