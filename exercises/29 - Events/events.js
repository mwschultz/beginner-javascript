function buyItem() {
  console.log('Spying an item!');
}
const buyButtons = document.querySelectorAll('button.buy');

function callMe(event) {
  console.log(event.target.dataset.price);
}

buyButtons.forEach((element) => {
  element.addEventListener('click', callMe);
});

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function (e) {
  console.log(e);
  console.log(e.currentTarget);
  console.log(this);
});
