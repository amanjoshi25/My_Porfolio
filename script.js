function createTypingEffect() {
    const textElement = document.getElementById('text');
    const cursorElement = document.getElementById('cursor');
    const textsToType = [
      "Student@LPU",
      "Web Developer",
      "Coder",
      "Enthusiastic"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isErasing = false;
  
    function typeText() {
      if (isErasing) {
        textElement.textContent = textsToType[textIndex].substring(0, charIndex - 1);
        charIndex--;
  
        if (charIndex > 0) {
          setTimeout(typeText, 50); // Adjust the erasing speed here
        } else {
          isErasing = false;
          textIndex = (textIndex + 1) % textsToType.length;
          setTimeout(typeText, 500); // Time between text changes
        }
      } else {
        textElement.textContent = textsToType[textIndex].substring(0, charIndex + 1);
        charIndex++;
  
        if (charIndex < textsToType[textIndex].length) {
          setTimeout(typeText, 100); // Adjust the typing speed here
        } else {
          isErasing = true;
          setTimeout(typeText, 1000); // Time before erasing starts
        }
      }
    }
  
    typeText();
  }
  
  createTypingEffect();
  
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        } 
        if(this.scroll>500){
          $('.scroll-up-btn').addClass('show');
        }else{
          $('.scroll-up-btn').removeClass('show');
        }
    });
    //slide up script
    $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
  
    // owl carousel script
    $('.carousel').owlCarousel({
         margin:10,
         loop:true,
         autoplayTimeOut:2000,
         autoplayHoverPause:true,
         responsive:{
            0:{items:1,
            nav:false
            },
             600:{
                items:2,
                nav:false
                },
                1000:{items:1,
                    nav:false
                    }
         }
    }) ;
});