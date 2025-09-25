document.querySelectorAll('.card').forEach(card => {
  const progress = card.querySelector('.progress');
  let width = 0;
  let interval;

  function startAnimation() {
    interval = setInterval(() => {
      width += 1;
      if (width > 100) width = 0;
      progress.style.width = width + '%';
    }, 50); // adjust speed
  }

  function pauseAnimation() {
    clearInterval(interval);
  }

  card.addEventListener('mouseenter', pauseAnimation);
  card.addEventListener('mouseleave', startAnimation);

  startAnimation(); // start initially
});
