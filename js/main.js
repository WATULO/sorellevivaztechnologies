// scroll indicator start
window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
      let winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
  });
});
// scroll indicator end

//back to top start
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//back to top end

//Preloader start
const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}
//Preloader end

//hide secondary menu on scroll start
$(document).ready(function () {
    var secondaryMenu = $('.secondary-menu');
    var primaryMenu = $('.navbar');
  
    $(window).scroll(function () {
        if ($(this).scrollTop() > secondaryMenu.height()) {
            secondaryMenu.addClass('hidden-secondary-menu');
            primaryMenu.addClass('fixed-top-menu');
        } else {
            secondaryMenu.removeClass('hidden-secondary-menu');
            primaryMenu.removeClass('fixed-top-menu');
        }
    });
  });
//hide secondary menu on scroll end

//change navbar background color on scroll start
$(window).scroll(function(){
    $("nav").toggleClass("scrolled", $(this).scrollTop()>50);
  })
//change navbar background color on scroll end
  
//navbar toggler icon start
  function myFunction(x) {
    x.classList.toggle("change");
  }
//navbar toggler icon end

//Initiate Pure Counter start
new PureCounter();
//Initiate Pure Counter end


//Frequently Asked Questions Toggle start
document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
  faqItem.addEventListener('click', () => {
    faqItem.parentNode.classList.toggle('faq-active');
  });
});
//Frequently Asked Questions Toggle end

//testimonials start
function initSwiper() {
  document.querySelectorAll('.swiper').forEach(function(swiper) {
    let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
    new Swiper(swiper, config);
  });
}
window.addEventListener('load', initSwiper);
//testimonials end