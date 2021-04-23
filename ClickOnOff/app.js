const closedHand = document.querySelector('.closed');
const openHand = document.querySelector('.open');

// add event listener
closedHand.addEventListener('click', () => {
  openHand.classList.add('active');
  closedHand.classList.remove('active');
}
);

openHand.addEventListener('click', () => {
  closedHand.classList.add('active');
  openHand.classList.remove('active');
}
);