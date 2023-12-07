const plusOne = document.querySelector("#plusOne");
const plusTwo = document.querySelector("#plusTwo");
const plusThree = document.querySelector("#plusThree");
const plusFour = document.querySelector("#plusFour");

const firstAnswer = document.querySelector("#firstAnswer");
const secAnswer = document.querySelector("#secAnswer");
const thrAnswer = document.querySelector("#thrAnswer");
const furAnswer = document.querySelector("#furAnswer");
const fix = document.querySelector(".Ques");
var imageOne = 0;
var imageTwo = 0;
var imageThree = 0;
var imageFour = 0;

plusOne.addEventListener("click", () => {
  firstAnswer.classList.toggle("open");
  secAnswer.classList.remove("open");
  thrAnswer.classList.remove("open");
  furAnswer.classList.remove("open");
  plusOne.classList.toggle("minus");
  fix.classList.toggle("fix");
  plusTwo.src = "assets/images/icon-plus.svg";
  plusThree.src = "assets/images/icon-plus.svg";
  plusFour.src = "assets/images/icon-plus.svg";

  if (imageOne === 0) {
    plusOne.src = "assets/images/icon-minus.svg";
    imageOne = 1;
  } else {
    plusOne.src = "assets/images/icon-plus.svg";
    imageOne = 0;
  }
});

plusTwo.addEventListener("click", () => {
  secAnswer.classList.toggle("open");
  firstAnswer.classList.remove("open");
  thrAnswer.classList.remove("open");
  furAnswer.classList.remove("open");
  plusTwo.classList.toggle("minus");
  fix.classList.toggle("fix");
  plusOne.src = "assets/images/icon-plus.svg";
  plusThree.src = "assets/images/icon-plus.svg";
  plusFour.src = "assets/images/icon-plus.svg";

  if (imageTwo === 0) {
    plusTwo.src = "assets/images/icon-minus.svg";
    imageTwo = 1;
  } else {
    plusTwo.src = "assets/images/icon-plus.svg";
    imageTwo = 0;
  }
});
plusThree.addEventListener("click", () => {
  thrAnswer.classList.toggle("open");
  firstAnswer.classList.remove("open");
  secAnswer.classList.remove("open");
  furAnswer.classList.remove("open");
  plusThree.classList.toggle("minus");
  fix.classList.toggle("fix");
  plusOne.src = "assets/images/icon-plus.svg";
  plusTwo.src = "assets/images/icon-plus.svg";
  plusFour.src = "assets/images/icon-plus.svg";

  if (imageThree === 0) {
    plusThree.src = "assets/images/icon-minus.svg";
    imageThree = 1;
  } else {
    plusThree.src = "assets/images/icon-plus.svg";
    imageThree = 0;
  }
});
plusFour.addEventListener("click", () => {
  furAnswer.classList.toggle("open");
  firstAnswer.classList.remove("open");
  secAnswer.classList.remove("open");
  thrAnswer.classList.remove("open");
  plusFour.classList.toggle("minus");
  fix.classList.toggle("fix");
  plusOne.src = "assets/images/icon-plus.svg";
  plusTwo.src = "assets/images/icon-plus.svg";
  plusThree.src = "assets/images/icon-plus.svg";

  if (imageFour === 0) {
    plusFour.src = "assets/images/icon-minus.svg";
    imageFour = 1;
  } else {
    plusFour.src = "assets/images/icon-plus.svg";
    imageFour = 0;
  }
});
