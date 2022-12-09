let menuIcon = document.querySelector(".menuIcon");

let navButton = document.querySelectorAll(".navButton");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("menuIcon");
  menuIcon.classList.toggle("menuIconToggle");
  setTimeout(function () {
    menuIcon.classList.toggle("menuIcon");
    menuIcon.classList.toggle("menuIconToggle");
  }, 7000);
});

menuIcon.addEventListener("click", () => {
  for (let i = 0; i < navButton.length; i++) {
    navButton[i].classList.toggle("navButton");
    navButton[i].classList.toggle("navButtonToggle");
    setTimeout(function () {
      navButton[i].classList.toggle("navButton");
      navButton[i].classList.toggle("navButtonToggle");
    }, 7000);
  }
});


