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
          spaceBetween: 35,
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
              slidesPerView: 2,
              spaceBetween: 20,                     
            },

            850: {
              slidesPerView: 2,
              spaceBetween: 15,              
            },
            650: {
              slidesPerView: 1,
              spaceBetween: 15,              
            }            
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
      var chSlider = new Swiper(slider,set)
    });

  }
}