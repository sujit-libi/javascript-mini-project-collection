const letters = document.querySelectorAll('.letters span');

letters.forEach((letter) => {
  letter.addEventListener('click', (e) => {
    e.target.classList.remove('active');
    // Force reflow so re-adding the class restarts the animation
    void e.target.offsetWidth;
    e.target.classList.add('active');
  });

  letter.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });
});
