// declare global variables

const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const container = document.querySelector(".container");
const height = container.clientHeight;
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

// add event listeners to buttons
upBtn.addEventListener("click", () => changeSlideUp());
downBtn.addEventListener("click", () => changeSlideDown());

// runs on button up
function changeSlideUp() {
  activeSlideIndex++;
  if (activeSlideIndex === slidesCount) {
    activeSlideIndex = 0;
  }
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

// runs on button down
function changeSlideDown() {
  activeSlideIndex--;
  if (activeSlideIndex < 0) {
    activeSlideIndex = slidesCount - 1;
  }
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
