/* Header shrinker */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  	document.getElementById('fixed-header').classList.add('shrinked-header');
  } else {
  	document.getElementById('fixed-header').classList.remove('shrinked-header');
  }
}

/* Smooth scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
