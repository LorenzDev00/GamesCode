const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

//Global variabeles
let userChoice
let computerChoice
let result


const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {

    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice()
    getResult()

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    //console.log(randomNumber)
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    else if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    else {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw'
    } else if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win'
    } else if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lost'
    } else if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win'
    } else if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose'
    } else if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win'
    } else if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lose'
    }

    resultDisplay.innerHTML = result
}