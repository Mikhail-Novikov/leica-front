
export default adapt_table;

function adapt_table() {
  var t = $(".js-adapt-table"),
    h = t.find('th'),
    r = t.find('tr'),
    d = t.find('td'),
    p = d.find('p'),
    cc = t.find('.cell-container'),
    ad,
    screen;

  function e(screen){
    screen = $(document).width();     
    if (screen < 768) {
      adapt_t();
      ad = true;
    } else {
      adapt_no_t();
      ad = false;
    }
  }

  e(screen);  
  $(window).on('resize', function() {
    e();
  });

  function adapt_t() {
    if (ad == true) return;
    t.fadeTo(2000,1);    
    console.log('mobile');
    h.fadeOut(0);

    r.each(function(index) {
      var $this = $(this);
      $this.find(".js-open-adapt-w ").on('click', function() {
        console.log('click');
        $('.cell-container').find('.adapt-w.active').slideUp(0);
        $this.find(".cell-container .adapt-w").slideDown(100).addClass('active');
      });
      $this.find(".js-close-adapt-w").on('click', function() {
        d.not('.adapt-table--none').fadeIn(0);
        $(".cell-container .adapt-w").slideUp(0);
      });
    })
    $(document).on('click', function(event) {
      if ($(event.target).closest(".cell-container, .js-open-adapt-w").length) return;
      $('.cell-container .adapt-w').slideUp(0).removeClass('active');
    })
  }

  function adapt_no_t() {
    if (ad == false) return;
    t.fadeTo(500,1);
    console.log('desktop');
    h.fadeIn();
    cc.fadeOut();
    d.not('.cell-container .adapt-w').fadeIn();
    $(".js-open-adapt-w").unbind('click');
    $(".js-close-adapt-w").unbind('click');
  }
}