// Active page links
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

// Hamburger menu
const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
});

// // Modal Items
// const modal = document.getElementById('log-modal');
// const btn = document.getElementById('logbtn');
// const span = document.getElementsByClassName('close')[0];

// // Click events
// btn.onclick = function(){
//     modal.style.display = "block";
// }
// span.onclick = function(){
//     modal.style.display = "none";
// }
// window.onclick = function(event){
//     if(event.target == modal){
//         modal.style.display = "none";
//     }
// }
