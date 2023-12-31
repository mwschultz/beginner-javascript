console.log('works');
const item = document.querySelector('.item');

const width = 100;
const src = `https://picsum.photos/${width}`;
const desc = 'Cute pup';
const myHTML = `
<div class="wrapper">
<h2>Big ${desc}</h2>
<img src="${src}" alt="${desc}" />
</div>
`;


// item.innerHTML = myHTML;
// console.log(item.innerHTML);
// const itemImage = document.querySelector('.wrapper img');
// console.log(itemImage);
// itemImage.classList.add('round');

const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);