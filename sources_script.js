let ticking = false;

document.addEventListener('scroll', function () {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollFraction = scrollTop / scrollableHeight;

      document.body.style.backgroundPosition = `center ${scrollFraction * 100}%`;
      // document.querySelector('.parallax-layer').style.backgroundPosition = `center ${scrollFraction * 90}%`;

      ticking = false;
    });
    ticking = true;
  }
});