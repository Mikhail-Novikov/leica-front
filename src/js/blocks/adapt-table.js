'use strict';

export default adapt_table;

function adapt_table(){
  console.log('adapt-table');

  var t = $(".js-adapt-table"),
      h = t.find('th'),  
      r = t.find('tr'),
      d = t.find('td'),
      p = d.find('p'),      
      cc = t.find('.cell-container'),      
      ad,
      screen;
 
      console.log(t);
      console.log(h);        
      console.log(r);           

      $(window).on('resize load', function(){
        screen = $(this).width();
        if ( screen < 768) {
          adapt_t();
          ad = true ;          
        }else{
          adapt_no_t();
          ad = false;          
        }        

      });

    function adapt_t(){
      if (ad == true) return;
      console.log('mobile');
      h.fadeOut(0);
     



      $(".js-open-adapt-w ").on('click',function(){

        d.not('.cell-container').fadeOut(0);
        $(".cell-container").slideDown(100);

      });

      $(".js-close-adapt-w").on('click',function(){

        d.not('.adapt-table--none').fadeIn(0); 
         $(".cell-container").slideUp(200);
      });

    }

    function adapt_no_t(){
      if (ad == false) return;
      console.log('desktop');
      h.fadeIn();
      cc.fadeOut();
      d.not('.cell-container').fadeIn();

    }



}



/*        p.each(function(indx, element){
          var $this = $(this);
          var scw = $this[0].scrollWidth,
          w = $this[0].offsetWidth;*/

/*          console.log(scw);
          console.log(w); */
/*          setTimeout(clearCell, 500)   
          function clearCell(){
            (scw +1) < w ? $this.fadeOut(0): $this.fadeIn(0);            
          }
        });*/