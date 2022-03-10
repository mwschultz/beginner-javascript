// Make a div
const cDiv = document.createElement('div');

// add a class of wrapper to it
cDiv.classList.add('wrapper');

// put it into the body

document.body.insertAdjacentElement('afterbegin', cDiv);

// make an unordered list

function returnCardinal(number) {
  if (number === 0) {
    return 'one';
  }
  if (number === 1) {
    return 'two';
  }
  return 'three';
}
const cList = document.createElement('ul');
function createList() {
  for (let i = 0; i < 3; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = returnCardinal(i);
    cList.appendChild(listItem);
  }
  cDiv.insertAdjacentElement('beforeend', cList);
}

createList();

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

// create an image

const cImage = document.createElement('img');

// set the source to an image
cImage.src = `https://picsum.photos/${250}`;
cImage.width = 250;
cImage.classList.add('cute');
cImage.alt = 'Cute Puppy!';
cDiv.insertAdjacentElement('beforeend', cImage);
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

const divHTML = `
<div>
    <p>Para one</p>
    <p>Para two</p>
</div>
`;

const divHTMLR = document.createRange().createContextualFragment(divHTML);
cDiv.insertBefore(divHTMLR, cList);

// add a class to the second paragraph called warning
console.log(document.querySelectorAll('p')[1].classList.add('warning'));

// remove the first paragraph
document.querySelector('p').remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const playerHTML = `<div class="playerCard">
                    <h2> ${name} ${age}</h2>
                    <p>They are ${height} and ${age} years old. In Dog years, this person would be 
                    ${age * 7}. That would be a tall dog!</p>
                     </div>`;
  return playerHTML;
}

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');
// make 4 player cards using generatePlayerCard

const html1 = generatePlayerCard('Matt', 36, 6);
const html2 = generatePlayerCard('Steve', 20, 5);
const html3 = generatePlayerCard('Dave', 41, 7);
const html4 = generatePlayerCard('Stein', 55, 6.4);

// append those cards to the div
const htmlArray = [html1, html2, html3, html4];

htmlArray.forEach((element) => {
  cardDiv.appendChild(document.createRange().createContextualFragment(element));
});

// put the div into the DOM just before the wrapper element
document
  .querySelector('.wrapper')
  .insertAdjacentElement('beforebegin', cardDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

const cards = document.querySelectorAll('.playerCard');
const cardsArray = Array.from(cards);

cardsArray.forEach((card) => {
  const button = document.createElement('button');
  button.innerText = 'Click Me To Delete';
  button.addEventListener('click', () => {
    card.remove();
  });
  card.appendChild(button);
});
// select all the buttons!
// make out delete function
// loop over them and attach a listener
