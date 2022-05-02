let cells = document.querySelectorAll('.cell')
cells = Array.from(cells) // create an array containing all of the boxes

let currentPlayer = 'X' // the game starts with player X

//The winning combinations for tic-tac-toe is below
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

cells.forEach(function(cell){ //forEach loop to run for each item in our cells array that we created in line 2
    cell.addEventListener('click', function(){ // if we click a cell, run the function below
        if(cell.innerText !== '') return // function will check if cell is empty, if NOT empty, leave it alone
        cell.innerText = currentPlayer // on first run, this line will input an X
        checkForWinner() // run this function which starts on line 28 to see if we have a winner
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X' // if current player is 'X', then swap to 'O' and keep cycling
    })
})

function checkForWinner(){ // we call this function on line 22 initially and every time a player enters their move
    winningCombinations.forEach(function(combination){ //forEach loop to run for every array in our variable on line 7
        let check = combination.every(idx => cells[idx].innerText == currentPlayer) // check if the inner text in each winning combo array is equal to current player, does [0,1,2] == [x, x, x], etc?
        if(check){ // if the above returns true, then we execute the code below on line 31, otherwise we exit out of this function for now
            document.querySelector('h4').innerText = `${currentPlayer} has won!`
        }
    })
}

//Button to refresh page and play again
document.querySelector('button').addEventListener('click', playAgain)
function playAgain(){
    location.reload()
}

// let cells = document.querySelectorAll('.cell')
// cells = Array.from(cells) // create an array containing all of the boxes
// cells.forEach(function(cell){
//     cell.addEventListener('click', play)
// })

// let game = {

//     currentPlayer: 'X',
//     winningCombinations: [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ],
//     play(){
//         if(cell.innerText !== '') return
//         cell.innerText = this.currentPlayer
//         checkForWinner()
//         this.currentPlayer = this.currentPlayer = 'X' ? 'O' : 'X'
//     },
//     checkForWinner(){
//         winningCombinations.forEach(function(combination){
//             let check = combination.every(idx=>cells[idx].innerText==currentPlayer)
//             if(check){
//                 document.querySelector('h4').innerText = `${currentPlayer} has won!`
//             }
//         })
//     }



// }