document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.produto-card');
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease';
      card.style.opacity = 1;
    }, 200 * index);
  });
});
