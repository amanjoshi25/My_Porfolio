const textsToType = [
  "Student@LPU",
  "Web Developer",
  "Coder",
  "Freelancer"
];
let textIndex = 0;
let charIndex = 0;
let isErasing = false;

function typeText() {
  const textElement = document.getElementById('text');
  
  if (isErasing) {
    textElement.textContent = textsToType[textIndex].substring(0, charIndex - 1);
    charIndex--;

    if (charIndex > 0) {
      requestAnimationFrame(typeText);
    } else {
      isErasing = false;
      textIndex = (textIndex + 1) % textsToType.length;
      setTimeout(typeText, 1000); // Time between text changes
    }
  } else {
    textElement.textContent = textsToType[textIndex].substring(0, charIndex + 1);
    charIndex++;

    if (charIndex < textsToType[textIndex].length) {
      requestAnimationFrame(typeText);
    } else {
      isErasing = true;
      setTimeout(typeText, 1500); // Time before erasing starts
    }
  }
}

function init() {
  typeText();
  addEventListeners();
}

function addEventListeners() {
  const navbar = $('.navbar');
  const scrollUpBtn = $('.scroll-up-btn');

  $(window).scroll(function(){
    navbar.toggleClass('sticky', this.scrollY > 20);
    scrollUpBtn.toggleClass('show', this.scrollY > 500);
  });

  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
    $('html').css("scrollBehavior", "smooth");
  });

  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
}

$(document).ready(init);

// owl carousel script
$('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
    0:{
      items: 1,
      nav: false
    },
    600:{
      items: 2,
      nav: false
    },
    1000:{
      items: 3,
      nav: false
    }
  }
});
//context menu script
// document.addEventListener("contextmenu", function(event) {
//   event.preventDefault(); // Prevent the default context menu from appearing
//   alert("You are not Authorized.");
// });