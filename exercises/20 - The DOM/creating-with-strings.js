const item = document.querySelector('.item');
const width = 250;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup <img onload="alert('HI')" src="https://picsum.photos/50">`;
const myHTML = `
<div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}"alt="${desc}"/>
</div>
`;

const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment.querySelector('img'));

document.body.appendChild(myFragment);
