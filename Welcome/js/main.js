
// Button
$(document).ready(function() {
  $(".fixed-action-btn").floatingActionButton();
});

//   Modal window
$(document).ready(function() {
  $(".modal").modal({});
});

var typed = new Typed('.type', {
    strings: ['I AM DEVELOPER','I AM DESIGNER'],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
  });