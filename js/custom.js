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
  //   console.log("prev", prev);
  //   console.log("next", next);

  slideArr.map((slideItem, index) => {
    // console.log("slide item", slideItem);

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
  prev.classList.add("active");
  activeSlide.style.transform = "translateX(100%)";
  prev.style.transform = "translateX(0)";
  myFun();
});

nextButton.addEventListener("click", () => {
  let [prev, next] = prevNext();
  let activeSlide = document.querySelector(".active");

  activeSlide.classList.remove("active");
  next.classList.add("active");
  activeSlide.style.transform = "translateX(-100%)";
  next.style.transform = "translateX(0)";
  myFun();
});
