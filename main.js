menuBar = document.querySelector("div.menuBar");
menuicon = document.querySelector(".fa-bars");
menucircle = document.querySelector(".fa-circle-xmark ");
ul = document.querySelector("header .container ul");
li = document.querySelectorAll("header .container ul li");
a = document.querySelectorAll("header .container ul li a");
text = document.querySelector(".main-section .container .text");
abouUs = document.querySelector(".aboutUs");
text2 = document.querySelector(".aboutUs .container .text");
image = document.querySelector(".aboutUs .container .image");
menu = document.querySelector(".menu");
menuli = document.querySelectorAll(".menu .title li");
special = document.querySelectorAll(".menu .special");
conteneurMenu = document.querySelector(".menu .conteneur");
statistics = document.querySelector(".statistics");
numbers = document.querySelectorAll(".statistics .number");
started = false;
menuH1 = document.querySelector(".menu h1");
chef = document.querySelector(".menu");
chefBox = document.querySelector(".chef .container");
socilamedia = document.querySelectorAll(".chef .box .socialMedia");
services = document.querySelector(".services .container");
serviceBoxes = document.querySelectorAll(".services .container .box");
menucircle.style.display = "none";
menuicon.onclick = function () {
  ul.classList.add("response");
  menuicon.style.display = "none";
  console.log(menuicon);
  menucircle.style.display = "block";
  console.log(menucircle);
};
menucircle.onclick = function () {
  ul.classList.remove("response");
  menuicon.style.display = "block";
  menucircle.style.display = "none";
};
li.forEach((el) => {
  el.onclick = function () {
    ul.classList.remove("response");
    menuicon.style.display = "block";
    menucircle.style.display = "none";
  };
});
window.onload = function () {
  text.style.transform = "translateX(0%)";
};
const startCount = (el) => {
  var goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
};
window.onscroll = () => {
  const sectionTop = abouUs.offsetTop;
  if (pageYOffset >= sectionTop - 500) {
    text2.style.transform = "translateX(0%)";
    image.style.transform = "translateX(0%)";
  }
  if (pageYOffset >= statistics.offsetTop - 400) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
  if (pageYOffset >= menu.offsetTop - 700) {
    menuH1.style.transform = "translateY(0%)";
  }
  if (pageYOffset >= menu.offsetTop - 500) {
    document.querySelector(".menu .title").style.transform = "translateY(0%)";
  }
  if (pageYOffset >= menu.offsetTop - 200) {
    document.querySelector(".menu .special").style.transform = "translateY(0%)";
  }

  if (pageYOffset >= chef.offsetTop + 400) {
    socilamedia[0].style.transform = "translateY(0%)";
    socilamedia[1].style.transform = "translateY(0%)";
    socilamedia[1].style.transitionDelay = "0.2s";
    socilamedia[2].style.transform = "translateY(0%)";
    socilamedia[2].style.transitionDelay = "0.4s";
    socilamedia[3].style.transform = "translateY(0%)";
    socilamedia[3].style.transitionDelay = "0.6s";
  }
  if (pageYOffset >= services.offsetTop - 600) {
    serviceBoxes[0].style.transform = "translateY(0%)";
    serviceBoxes[1].style.transform = "translateY(0%)";
    serviceBoxes[2].style.transform = "translateY(0%)";
  }
};
menuli[0].onclick = function () {
  special[0].style.transform = "translate(0%,0%)";
  special[1].style.transform = "translate(100%,-100%)";
  special[2].style.transform = "translate(200%,-200%)";
  menuli[0].classList.add("active");
  menuli[1].classList.remove("active");
  menuli[2].classList.remove("active");
};
menuli[1].onclick = function () {
  special[0].style.transform = "translate(-100%,0%)";
  special[1].style.transform = "translate(00%,-100%)";
  special[2].style.transform = "translate(100%,-200%)";
  menuli[1].classList.add("active");
  menuli[2].classList.remove("active");
  menuli[0].classList.remove("active");
};

menuli[2].onclick = function () {
  special[0].style.transform = "translate(-200%,0%)";
  special[1].style.transform = "translate(-100%,-100%)";
  special[2].style.transform = "translate(0%,-200%)";
  menuli[2].classList.add("active");
  menuli[1].classList.remove("active");
  menuli[0].classList.remove("active");
};
function addActive(el) {
  el.onclick = function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active");
    }
    this.classList.add("active");
  };
}
a.forEach((elem) => addActive(elem));
