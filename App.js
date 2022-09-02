const image = document.getElementById("img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const title = document.getElementById("title");
const text = document.getElementById("text");
const img = document.querySelector(".image");

let photos = ["Caption Text", "Caption Two", "Caption Three", "Caption Four"];
let numerator = 0;

function addPhoto(photo) {
  image.src = `images/${photo}.jpg`;
  title.textContent = numerator + 1;
  text.textContent = photo;
}

addPhoto(photos[numerator])

function addBlack() {
  let i = document.querySelectorAll(".chiziq i ")
  for (let a = 0; a < i.length; a++) {
    i[a].style.color = "#000"
  }
  document.querySelector(".text").style.color = "#000"
  document.querySelector(".firstTitle").style.color = "#000"
}

function addWhite() {
  setTimeout(() => {
    let i = document.querySelectorAll(".chiziq i ")
    for (let a = 0; a < i.length; a++) {
      i[a].style.color = "#fff"
    }
    document.querySelector(".text").style.color = "#fff"
    document.querySelector(".firstTitle").style.color = "#fff"
  }, 750);
}

prev.addEventListener("click", () => {
  setTimeout(() => {
    numerator -= 1;

    if (numerator < 0) {
      numerator = photos.length - 1;
    }

    addPhoto(photos[numerator])

    image.style.marginLeft = "0rem"
    image.classList.add("anima")
  }, 400)

  setTimeout(() => {
    image.classList.remove("anima")
  }, 1000);

  addWhite()


  image.style.marginLeft = "-50rem"
  image.style.transition = "all 0.5s ease"

  addBlack()
})

next.addEventListener("click", () => {
  setTimeout(() => {
    numerator -= 1;

    if (numerator < 0) {
      numerator = photos.length - 1;
    }

    addPhoto(photos[numerator])

    image.style.marginLeft = "0rem"
    image.classList.add("anima-2")

  }, 500)

  setTimeout(() => {
    image.classList.remove("anima-2")
  }, 1000);

  addWhite()


  image.style.marginLeft = "50rem"
  image.style.transition = "all 0.5s ease"
  addBlack()
})
