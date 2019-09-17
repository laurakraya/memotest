//Store the amount of cards by lvl in an array
const AmountOfCardsbyLvl = [6, 12, 20];

//Select grid from DOM
const grid = document.querySelector('.grid');

//Need to get this info from the click event
const currentLvl = 1;

//Create card div with back image
const card = document.createElement('div');
card.classList.add('card');
const cardBack = document.createElement('img');
cardBack.src = './app/img/question-mark.png';
card.appendChild(cardBack);
console.log(card);

//Create deck array with all image urls
let deck = [];
for (let i = 0; i < AmountOfCardsbyLvl[currentLvl]; i++) {
  deck.push("https://api.adorable.io/avatars/" + i);
}

//Duplicate elements in deck and shuffle it
deck = deck.concat(deck).sort(function () {
  return 0.5 - Math.random();
});

//Append cards to grid
deck.forEach(function (elem) {

  //Create card div
  const card = document.createElement('div');
  card.classList.add('card');

  //Create card back, add src and class
  const cardBack = document.createElement('img');
  cardBack.src = './app/img/question-mark.png';
  cardBack.classList.add('card__side');
  cardBack.classList.add('card__side--back');

  //Create card front, add src and class
  const cardFront = document.createElement('img');
  cardFront.src = elem;
  cardFront.classList.add('card__side');
  cardFront.classList.add('card__side--front');

  //Append back and front to card
  card.appendChild(cardBack);
  card.appendChild(cardFront);

  //Append card to grid
  grid.appendChild(card);

});


console.log(deck);

/* function setBoard() {

} */

let cards = document.querySelectorAll('.card');

cards.forEach(function (elem) {

  elem.addEventListener('click', function () {

    elem.classList.toggle('card--flipped');

  });

});

/* function flipCard() {

} */

/* function checkMatch() {

} */