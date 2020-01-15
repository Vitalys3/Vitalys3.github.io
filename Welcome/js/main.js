
new WOW().init();




$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('fixed');
        
    }
    else {
        $('header').removeClass('fixed')
    }
})


// Modal
$(document).ready(function(){
    $('.modal').modal();
  });
          