// const p = document.querySelector('p');
// console.log(p);
// const item = document.querySelector('.items');
// const img = item.querySelector('img');
// console.log(img);

const pic = document.querySelector('.neat');

pic.classList.toggle('round');

console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cool';
pic.width = 250;
console.log(pic.naturalWidth);

pic.addEventListener('load', () => {
    console.log(pic.naturalWidth);
});

const custom = document.querySelector('.custom');
console.log(custom);

custom.addEventListener('click', () => {
    alert(`Welcome ${custom.dataset.country}!`);
});