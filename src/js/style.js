const hamburger = document.querySelector(".header__hamburger");
const ul = document.querySelector(".header__ul");
const body = document.querySelector("body");
const form = document.querySelector(".center__form");
const checkBox = document.querySelector("#checkBox");
const img = document.querySelector(".img");
styles = window.getComputedStyle(ul);
body.addEventListener("click", (e) => {
  img.classList.remove("img__form");
  if (e.target === hamburger || e.target.parentNode == hamburger) {
    ul.classList.toggle("header__ul-active");
  } else if (e.target !== ul) {
    ul.classList.remove("header__ul-active");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    ul.classList.remove("header__ul-active");
    img.classList.remove("img__form");
  }
});
function validation(form) {
  let res = true;
  form.querySelectorAll("input").forEach((element) => {
    if (element.value == "" || checkBox.checked === false) {
      res = false;
    }
  });
  return res;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validation(this) === true) {
    img.classList.add("img__form");
  } else {
    alert("false");
  }
});
