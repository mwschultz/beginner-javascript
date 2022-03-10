const myParagraph = document.createElement('p');

myParagraph.textContent = 'Hello, there I am!';

myParagraph.classList.add('special');
const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/500x500';
myImage.alt = 'Nice!';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool things';

myDiv.insertAdjacentElement('beforebegin', heading);

const myList = document.createElement('ul');

const item1 = document.createElement('li');
item1.textContent = 'one';
myList.appendChild(item1);

const item2 = document.createElement('li');
item2.textContent = 'two';
myList.appendChild(item2);

const item3 = document.createElement('li');
item3.textContent = 'three';
myList.appendChild(item3);

const item4 = document.createElement('li');
item4.textContent = 'four';
myList.appendChild(item4);

const item5 = document.createElement('li');
item5.textContent = 'five';
myList.appendChild(item5);

myDiv.insertAdjacentElement('afterend', myList);
