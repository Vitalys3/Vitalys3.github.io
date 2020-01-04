// Autocomplete
$(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Aruba": 'https://media-cdn.tripadvisor.com/media/photo-s/11/8d/ce/1d/rodgers-beach-stairs.jpg',
        "France": 'https://s-english.ru/images/albion/207.jpg',
        "Hawaii": 'https://www.oyster.com/uploads/sites/35/2019/10/Hanauma-Bay-Oahu-Hawaii.jpg'
      },
    });
  });

//   Scroll spy
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
        
// Material Boxes
$(document).ready(function(){
    $('.materialboxed').materialbox();
  });

// Sidenav
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

// SLider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 5000,
  interval: 6000
});



