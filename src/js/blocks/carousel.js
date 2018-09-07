'use strict';

import Swiper from 'swiper'; // получить от модуля swiper Swiper конструктор

export default swiper; // отдаём функцию swiper_default в глобальную обл видимости


function swiper() {
  var screenWidth = $(window).width();;

  $(window).on('resize', ()=> {
    initSwiper();
    screenWidth = $(window).width();
  });


  initSwiper();


  function initSwiper() {
     // console.log('init swiper');

    $('.slider').each(function(index) { 
      var slider = $(this);

      if (slider.hasClass('slider-five')) {

        var set = {
          speed: 1000,
          slidesPerView: 5,
          centeredSlides: true,
          spaceBetween: 0,
          loop: true,
          dots: true,
          centeredSlides: true,
          watchOverflow: true,
          autoplay: {
            delay: 50000,
          },
          watchOverflow: true,
          breakpoints: {
            1200: {
              slidesPerView: 5,
              spaceBetween: 20,                     
            },

            850: {
              slidesPerView: 5,
              spaceBetween: 15,              
            },
            650: {
              slidesPerView: 3,
              spaceBetween: 15,              
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 15,              
            },                       
          },
          pagination: {
              el: '.swiper-pagination',
              clickable: true, 
          }
        } 

      }else if(slider.hasClass('slider-two')){
        var set = {
          speed: 500,
          slidesPerView: 2,
          spaceBetween: 30,
          watchOverflow: true,          
          autoplay: {
            delay: 50000,
          },
          watchOverflow: true,
          breakpoints: {
            768: {
              spaceBetween: 15,
              nav: false,
                         
            },
            650: {
              slidesPerView: 1,
              spaceBetween: 15,
              centeredSlides: true,
              slidesPerColumn: 1,                
            }            
          },
          pagination: {
              el: '.swiper-pagination',
              clickable: true, 
          },            
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          } 
        }        
      }
      var chSlider = new Swiper(slider,set);

      chSlider.on('slideChange', function () {
        $('.js-wrap-center-p').fadeTo(500,0);
        $('.js-wrap-center-p').text($('.home-reviews-items .swiper-slide-active').find('.home-reviews-items__text').text()).fadeTo(1000,1);
        //$('.js-wrap-center-p').fadeIn(100);        
      }); 

    });

  }
}