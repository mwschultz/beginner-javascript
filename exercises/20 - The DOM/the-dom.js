// const p = document.querySelector('p');
// const divs = document.querySelectorAll('.items');
// const heading = document.querySelector('h2');
// heading.textContent = 'yooo';

// const pizzaList = document.querySelector('.pizza');

// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');

const pic = document.querySelector('.pic');
pic.classList.add('open');

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'image description';
pic.width = 100;
console.log(pic.naturalWidth);

pic.addEventListener('load', () => {
  console.log(pic.naturalWidth);
});

// pic.setAttribute('alt', 'hmmm....');
// console.log(pic.getAttribute('alt'));
const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', () => {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
