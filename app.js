// banner

let SliderBtnLeft = document.getElementById("left-btn");
let SliderBtnRight = document.getElementById("right-btn");
let SliderImages = document.querySelectorAll(".image-item");

let currentImageIndex = 0;

function showImage(index) {
  SliderImages.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

showImage(currentImageIndex);

SliderBtnLeft.addEventListener("click", () => {
  currentImageIndex =
    currentImageIndex === 0 ? SliderImages.length - 1 : currentImageIndex - 1;
  showImage(currentImageIndex);
});

SliderBtnRight.addEventListener("click", () => {
  currentImageIndex =
    currentImageIndex === SliderImages.length - 1 ? 0 : currentImageIndex + 1;
  showImage(currentImageIndex);
});

setInterval(() => {
  currentImageIndex =
    currentImageIndex === SliderImages.length - 1 ? 0 : currentImageIndex + 1;
  showImage(currentImageIndex);
}, 2500);

// SLIDER-1

document.getElementById("scroll-left").addEventListener("click", function () {
  const container = document.querySelector(".products-container");
  container.scrollBy({
    left: -200, 
    behavior: "smooth",
  });
});

document.getElementById("scroll-right").addEventListener("click", function () {
  const container = document.querySelector(".products-container");
  container.scrollBy({
    left: 200, 
    behavior: "smooth",
  });
});

// SLIDER-2

let currentIndex2 = 0;

function slide(direction) {
  const slider = document.querySelector(".slider");
  const boxCol = document.querySelector(".box-col-2");
  const boxWidth = boxCol.offsetWidth;
  const visibleItems = Math.floor(slider.offsetWidth / boxWidth);
  const totalItems = document.querySelectorAll(".box-col-2").length;
  console.log(visibleItems);
  // Prevent the user from scrolling when at the ends
  if (direction === -1 && currentIndex2 === 0) return;
  if (direction === 1 && currentIndex2 === totalItems - visibleItems) return;

  
  currentIndex2 += direction;

  
  if (currentIndex2 < 0) {
    currentIndex2 = totalItems - visibleItems;
  } else if (currentIndex2 > totalItems - visibleItems) {
    currentIndex2 = 0;
  }

  
  slider.style.transform = `translateX(-${currentIndex2 * boxWidth}px)`;
}
