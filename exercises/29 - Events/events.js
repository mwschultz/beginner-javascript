console.log('It works!');

const button = document.querySelector('.butts');
const cool = document.querySelector('.cool');

function handleClick() {
  console.log('🐞 Clicked!');
}

button.addEventListener('click', handleClick);
cool.addEventListener('click', handleClick);

button.removeEventListener('click', handleClick);

function buyItem() {
  console.log('Buy now!');
}

const buyButtons = document.querySelectorAll('.buy');

function handleBuyButtonClick(event) {
  console.log('YOU CLICKED THE BUTTON');
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // event.stopPropagation();
}

buyButtons.forEach(buyButton => {
  buyButton.addEventListener('click', handleBuyButtonClick)
});

window.addEventListener('click', (event) => {
  console.log(event.target);
  console.log('YOU CLICKED THE WINDOW');
  console.log(event.bubbles);
});

const photoEl = document.querySelector('.photos');

photoEl.addEventListener('mousemove', function (e) {
  console.log(e.currentTarget);
  console.log(this);
});