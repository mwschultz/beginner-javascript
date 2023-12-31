const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a p!';
myParagraph.classList.add('special');


const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/200x200';
const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
myDiv.insertAdjacentElement('afterbegin', heading);
document.body.appendChild(myDiv);


const unorderedList = document.createElement('ul');

const itemOne = document.createElement('li');
itemOne.textContent = 'One';

const itemTwo = document.createElement('li');
itemTwo.textContent = 'Two';

const itemThree = document.createElement('li');
itemThree.textContent = 'Three';

const itemFour = document.createElement('li');
itemFour.textContent = 'Four';

const itemFive = document.createElement('li');
itemFive.textContent = 'Five';

unorderedList.appendChild(itemThree);
itemThree.insertAdjacentElement('beforebegin', itemTwo);
itemThree.insertAdjacentElement('afterend', itemFour);
itemFour.insertAdjacentElement('afterend', itemFive);
itemTwo.insertAdjacentElement('beforebegin', itemOne);

document.body.appendChild(unorderedList);