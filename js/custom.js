// variables:
let slide = document.querySelectorAll(".slide__item");
let slideArr = Array.from(slide);
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");

function prevNext() {
  let activeSlide = document.querySelector(".active");
  let currentIndex = slideArr.indexOf(activeSlide);
  let prev;
  let next;

  if (currentIndex == 0) {
    prev = slideArr[slideArr.length - 1];
    next = slideArr[currentIndex + 1];
  } else if (currentIndex == slideArr.length - 1) {
    next = slideArr[0];
    prev = slideArr[currentIndex - 1];
  } else {
    prev = slideArr[currentIndex - 1];
    next = slideArr[currentIndex + 1];
  }

  return [prev, next];
}

function myFun() {
  let activeSlide = document.querySelector(".active");
  let currentIndex = slideArr.indexOf(activeSlide);
  let [prev, next] = prevNext();

  slideArr.map((slideItem, index) => {
    // eikhane logic ta bujhi nai..!
    if (currentIndex == index) {
      slideItem.style.transform = "translateX(0)";
    } else if (slideItem == prev) {
      slideItem.style.transform = "translateX(-100%)";
    } else if (slideItem == next) {
      slideItem.style.transform = "translateX(100%)";
    }
  });
}

prevButton.addEventListener("click", () => {
  let [prev, next] = prevNext();
  let activeSlide = document.querySelector(".active");

  activeSlide.classList.remove("active");
  activeSlide.style.transform = "translateX(100%)";
  prev.classList.add("active");
  prev.style.transform = "translateX(0)";

  // "myFun()" ke baad diye last e ei "2 line" add korlew to same kaj kore, tahole extra 1 ta function add kore lav ki...?
  // next.classList.remove("active");
  // next.style.transform = "translateX(-100%)";
  myFun();
});

nextButton.addEventListener("click", () => {
  let [prev, next] = prevNext();
  let activeSlide = document.querySelector(".active");

  activeSlide.classList.remove("active");
  activeSlide.style.transform = "translateX(-100%)";
  next.classList.add("active");
  next.style.transform = "translateX(0)";

  // "myFun()" ke baad diye last e ei "2 line" add korlew to same kaj kore, tahole extra 1 ta function add kore lav ki...?
  // prev.classList.remove("active");
  // prev.style.transform = "translateX(100%)";
  myFun();
});
