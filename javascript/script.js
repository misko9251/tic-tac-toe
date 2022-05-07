// We will use this variable to loop through node list and add event listener
const boxes = document.querySelectorAll('.cell')

// We will use this variable to change the inner text and show who wins the game
const display = document.querySelector('.display')

// We will use this variable as our container for our hidden pop-up and toggle it later
const pop = document.querySelector('.hide')

// We will use this variable to keep track of which turn it is
let count = 0;

// We will use this variable to loop through winning scenarios
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// We will loop through these variables to check for a draw
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
let draw = [one, two, three, four, five, six, seven, eight, nine]

// A little syntactical sugar to build our game below
class Game{
    constructor(playerOne, playerTwo){
        this._playerOne = playerOne
        this._playerTwo = playerTwo
        this.boxClicked()
    }
    //Getters so player is not changed when game launches
    get playerOne(){
        return this._playerOne
    }
    get playerTwo(){
        return this._playerTwo
    }
    //Loop through each box, if box is clicked, fire the playGame function
    boxClicked(){
        for(let box of boxes){
            box.addEventListener('click', this.playGame) 
        }
    }
    //Function fires when a box is clicked
    playGame(){
        //If a box is NOT an empty string, do not allow other player to overwrite their move
        if(document.getElementById(this.id).innerText !== ''){
            return
        }else if(count % 2 == 0){
            document.getElementById(this.id).innerText = `${game.playerOne}`
            count++
            //Check for winner function will fire after each move
            game.checkForWinner()
        }else if(count % 2 !== 0){
            document.getElementById(this.id).innerText = `${game.playerTwo}`
            count++
            //Check for winner function will fire after each move
            game.checkForWinner()
        }
    }
    checkForWinner(){
        //Loop through array to check if the game is a draw/tie
        let tie = draw.every(item => item.innerText !== '')
        if(tie){
            pop.style.display = 'block'
            display.innerText = 'ITS A DRAW!'
        }
        //Loop through each array of our winning combinations, if EVERY condition is 
        //satisfied then the game will end and a pop-up will appear
        winningCombinations.forEach((answer)=>{
            let check = answer.every(item=>boxes[item].innerText == `${game.playerOne}`)
            let check2 = answer.every(item=>boxes[item].innerText == `${game.playerTwo}`)
            if(check){
                pop.style.display = 'block'
                display.innerText = 'PLAYER ONE WINS!'
            }if(check2){
                pop.style.display = 'block'
                display.innerText = 'PLAYER TWO WINS!'
            }
        })
    }    
}

//Create game
let game = new Game('X', 'O')

//Refresh page when game is complete
document.querySelector('button').addEventListener('click', playAgain)
function playAgain(){
    location.reload()
}