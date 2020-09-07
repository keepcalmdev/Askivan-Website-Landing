//popup

$('.show_popup').click(function() {
  //var popup_id = $('#' + $(this).attr("rel"));
  $('.popup').show();
  $('.overlay_popup').show();
})
  $('.close-popup').click(function(){
    $('.popup').hide();
    $('.overlay_popup').hide();
  // $('overlay_popup, .popup').hide();
  // $('div').removeClass('overlay_popup');
})

//scroll to top page

window.onload = function() {

  var scrolled;
  var timer;

  document.getElementById('top').onclick = function(){
    //console.log(window.pageYOffset);
    scrolled = window.pageYOffset;
    //window.scrollTo(0,0);
    scrollToTop();
  }
  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 500;
      timer = setTimeout(scrollToTop, 100);
    }
    else {
      clearTimeout(timer);
      window.scrollTo(0,0);
    }
  }
}


//slick slider
  $('.your-class').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  centerPadding: '120px',
  prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '40px',
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        centerPadding: '-400px',
      }
    }
  ]
});