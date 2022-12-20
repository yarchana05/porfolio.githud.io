/*$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    
    $('.carousel').owlCarousel({
        margin :20,
        loop:true,
        autoplayTimeOut : 2000,
        autoplayMoverPause:true,
        responsive:{
            0:{
                item:1,
                nav:false
        
            },
            600:{
                item:2,
                nav:false
        
            },
            1000:{
                item:3,
                nav:false
        
            },
        }

    });
});*/

var swiper = new swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });