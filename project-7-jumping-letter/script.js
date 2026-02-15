const letters = document.querySelectorAll('.letters span');

letters.forEach((letter) => {
  letter.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
});
