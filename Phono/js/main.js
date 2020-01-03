$(function() {
    const $gallery = $('.gallery a').simpleLightbox();
  });



  // Scroll Reveal
  const sr = ScrollReveal({reset: true});

  sr.reveal('.section-a', {
    origin: 'top',
    distance: '85px',
    duration: 3000,
    useDelay: 'always',
  });
  sr.reveal('.section-b-inner', {
    origin: 'right',
    distance: '85px',
    duration: 3000,
    useDelay: 'always',
  });
 