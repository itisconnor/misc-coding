document.addEventListener('DOMContentLoaded', () => {
    console.log("JS Loaded")

    const buttons = document.querySelectorAll('.choice')
    for(let button of buttons){
        button.addEventListener('click', handleChoice)
    }
})



const handleChoice = function(event){
    const playerChoice = event.target.value
    const computerChoice = getRandomChoice()
    const winner = play(playerChoice, computerChoice)
    showWinner(playerChoice, computerChoice, winner)
    addScore(winner)
}

const addScore = function(winner){
    if(winner === "Victory is yours."){
        const playerScore = document.querySelector('#p-score')
        playerScore.innerHTML++
    }else if(winner === "Alas! You have lost."){
        const computerScore = document.querySelector('#c-score')
        computerScore.innerHTML++
    }
}

const showWinner = function(player, computer, winner){
    const resultDiv = document.querySelector('#winner')
    resultDiv.innerHTML = ''

    const choiceElement = document.createElement('p')
    choiceElement.textContent = "You chose "+player+". Computer chose "+computer+"."
    resultDiv.appendChild(choiceElement) 

    const winnerElement = document.createElement('h2')
    winnerElement.textContent = winner
    if(winner === "Victory is yours."){
        winnerElement.classList.add('win')
    }else if(winner === "Alas! You have lost."){
        winnerElement.classList.add('lose')
    }
    resultDiv.appendChild(winnerElement)
}

const play = function(player, computer){
    if(player === "rock" && computer === "paper"){
        return "Alas! You have lost."
    }
    if(player === "rock" && computer === "scissors"){
        return "Victory is yours."
    }
    if(player === "paper" && computer === "scissors"){
        return "Alas! You have lost."
    }
    if(player === "paper" && computer === "rock"){
        return "Victory is yours."
    }
    if(player === "paper" && computer === "spock"){
        return "Victory is yours."
    }
    if(player === "paper" && computer === "lizard"){
        return "Alas! You have lost."
    }
    if(player === "scissors" && computer === "rock"){
        return "Alas! You have lost."
    }
    if(player === "scissors" && computer === "paper"){
        return "Victory is yours."
    }
    if(player === "scissors" && computer === "lizard"){
        return "Victory is yours."
    }
    if(player === "rock" && computer === "lizard"){
        return "Victory is yours."
    }
    if(player === "lizard" && computer === "spock"){
        return "Victory is yours."
    }
    if(player === "lizard" && computer === "paper"){
        return "Victory is yours."
    }
    if(player === "spock" && computer === "rock"){
        return "Victory is yours."
    }
    if(player === "spock" && computer === "scissors"){
        return "Victory is yours."
    }
    if(player === "spock" && computer === "lizard"){
        return "Alas! You have lost."
    }
    if(player === "spock" && computer === "paper"){
        return "Alas! You have lost."
    }
    if(player === "lizard" && computer === "scissors"){
        return "Alas! You have lost."
    }
    if(player === "lizard" && computer === "rock"){
        return "Alas! You have lost."
    }
    if(player === "lizard" && computer === "scissors"){
        return "Alas! You have lost."
    }
    if(player === "scissors" && computer === "spock"){
        return "Alas! You have lost."
    }
    if(player === "rock" && computer === "spock"){
        return "Alas! You have lost."
    }
    if(player === computer){
        return "A draw! You live to fight another day."
    }
}

const getRandomChoice = function(){
    const choices = ["rock", "paper", "scissors", "spock", "lizard"]
    const choice = choices[Math.floor(Math.random()* choices.length)]
    return choice
}