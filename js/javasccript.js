
hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function () {
  nav.classList.toggle("active");
}
function mobileMenu(){
  if(document.querySelector('.navbar-nav').style.display == 'block'){
    document.querySelector('.navbar-nav').style.display == 'none'
  }
  else{
    document.querySelector('.navbar-nav').style.display='block';
  }
}


