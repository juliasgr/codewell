let currentCard = 0;
const cards = document.querySelectorAll('.feedback-card');

function showNextCard() {
  cards[currentCard].classList.remove('active');
  currentCard = (currentCard + 1) % cards.length;
  cards[currentCard].classList.add('active');
}

setInterval(showNextCard, 5000); 
