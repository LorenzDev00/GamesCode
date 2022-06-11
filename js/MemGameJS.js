const cardArray = [
  {
    name: 'fries',
    img: '../img/square.png'
  },
  {
    name: 'cheeseburger',
    img: '../img/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: '../img/ice-cream.png'
  },
  {
    name: 'pizza',
    img: '../img/pizza.png'
  },
  {
    name: 'milkshake',
    img: '../img/milkshake.png'
  },
  {
    name: 'hotdog',
    img: '../img/hotdog.png'
  },
  {
    name: 'fries',
    img: '../img/fries.png'
  },
  {
    name: 'cheeseburger',
    img: '../img/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: '../img/ice-cream.png'
  },
  {
    name: 'pizza',
    img: '../img/pizza.png'
  },
  {
    name: 'milkshake',
    img: '../img/milkshake.png'
  },
  {
    name: 'hotdog',
    img: '../img/hotdog.png'
  }
]


cardArray.sort(() => 0.5 - Math.random())

const gridDsiplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', '../img/square.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDsiplay.appendChild(card)
  }
}

createBoard()

function checkMatch() {

  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]

  console.log('check for a match!')
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', '../img/square.png')
    cards[optionTwoId].setAttribute('src', '../img/suqare.png')
    alert('You cicked the same image!')
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert('You found a match!')
    cards[optionOneId].setAttribute('src', '../img/white.png')
    cards[optionTwoId].setAttribute('src', '../img/white.png')

    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)

    cardsWon.push(cardsChosen)
  } else {

    cards[optionOneId].setAttribute('src', '../img/square.png')
    cards[optionTwoId].setAttribute('src', '../img/square.png')

    alert('Try again!')
  }
  resultDisplay.textContent = cardsWon.length
  cardsChosen = []
  cardsChosenIds = []

  if (cardsWon.length == (cardArray.length / 2)) {
    resultDisplay.innerHTML = 'Cool, you found them all!'
  }
}

function flipCard() {
  console.log(cardArray)
  const cardId = this.getAttribute('data-id')
  //console.log(cardArray[cardId].name)
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  console.log(cardsChosen)
  console.log(cardsChosenIds)
  //console.log('clicked', cardId)                        
  this.setAttribute('src', cardArray[cardId].img)       //setting attribute img with food-image by passing id form cardID
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
}