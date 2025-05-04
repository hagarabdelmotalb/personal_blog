var typed = new Typed('#element', {
  strings: ['Larry Daniels', 'Developer','Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});

window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".mynav");
  if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});



