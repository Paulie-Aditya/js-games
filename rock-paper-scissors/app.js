const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

let userChoice
let computerChoice
let result
const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const choices = ['rock','paper','scissors']
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    computerChoice = choices[randomNumber]
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice == userChoice){
        result = 'Draw'
    }
    else{
        if(computerChoice == 'rock'){
            if(userChoice == 'scissors'){
                result = 'You Lose!'
            }
            else if(userChoice == 'paper'){
                result = 'You Win!'
            }
        }
        else if(computerChoice == 'scissors'){
            if(userChoice == 'rock'){
                result = 'You Win!'
            }
            else if(userChoice == 'paper'){
                result = 'You Lose!'
            }
        }
        else if(computerChoice == 'paper'){
            if(userChoice == 'rock'){
                result = 'You Lose!'
            }
            else if(result = 'scissors'){
                result = 'You Win!'
            }
        }
    }

    resultDisplay.innerHTML = result
}
