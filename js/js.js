const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

function myFunction() {
  let drop = document.getElementById("drop")
  drop.classList.toggle("fail");
     let but = document.getElementById('but')
    but.style.display = "none"
}

function myFunctionn() {
  let dropp = document.getElementById("dropp")
  dropp.classList.toggle("faill");
     let butt = document.getElementById('butt')
    butt.style.display = "none"
}


function myFunctionnn() {
  let droppp = document.getElementById("droppp")
  droppp.classList.toggle("failll");
     let buttt = document.getElementById('buttt')
    buttt.style.display = "none"
}



function myFunctionheart() {
  let heart = document.getElementById("heart")
  heart.classList.toggle("faillll");
}

function myFunctionheartt() {
  let heartt = document.getElementById("heartt")
  heartt.classList.toggle("failllll");
}

function myFunctionhearttt() {
  let hearttt = document.getElementById("hearttt")
  hearttt.classList.toggle("faillllll");
}