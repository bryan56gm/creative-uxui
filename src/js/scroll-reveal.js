/*=============== SKILLS ===============*/
ScrollReveal().reveal('.skills', {
  duration: 2500,
  opacity: 0,
  distance: "50%",
  scale: 0.5,
});

/*=============== MAIN - PROJECTS ===============*/
ScrollReveal().reveal('.main-projects__card', {
  duration: 3500,
  opacity: 0,
  distance: "60%",
});

/*=============== PROJECTS ===============*/
ScrollReveal().reveal('.projects__card', {
  duration: 2500,
  opacity: 0,
  distance: "60%",
});

ScrollReveal().reveal('.projects__card:nth-child(odd)', {
  origin: 'left',
});

ScrollReveal().reveal('.projects__card:nth-child(even)', {
  origin: 'right',
});

/*=============== PROJECTS ===============*/
ScrollReveal().reveal('.project__card', {
  duration: 2500,
  opacity: 0,
  distance: "60%",
});


ScrollReveal().reveal('.banner-project__figma', {
  duration: 3000,
  origin: 'left',
  distance: '50%',
  opacity: .8
});

ScrollReveal().reveal('.banner-project__illustrator', {
  duration: 3000,
  origin: 'top',
  distance: '50%',
  opacity: .8,
  scale: 0.8
});
