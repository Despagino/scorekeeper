let player1 = {
    count: 0,
    score: document.querySelector("#score1"),
    p1: document.querySelector("#p1")
}

let player2 = {
    count: 0,
    score: document.querySelector("#score2"),
    p2: document.querySelector("#p2")
}

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.count += 1;
        if (player.count === winningScore) {
            isGameOver = true;
            player.score.style.color = "green"
            opponent.score.style.color = "red"
        }
        player.score.innerText = player.count;
    }
}

let reset = document.querySelector("#reset")
let isGameOver = false;
let playto = document.querySelector("#playto")
let winningScore = 3


player1.p1.addEventListener('click', function () {
    updateScores(player1, player2)
})
player2.p2.addEventListener('click', function () {
    updateScores(player2, player1)
})

let resetplay = () => {
    for (let p of [player1, player2]) {
        p.count = 0
        p.score.innerText = 0
        p.score.removeAttribute("style")
    }
    isGameOver = false;
}
reset.addEventListener("click", resetplay)
playto.addEventListener('change', () => {
    winningScore = parseInt(playto.value)
    resetplay()
})


//----------------------------------------------------------

// CODE I REFACTORED
// let score1 = document.querySelector("#score1")
// let score2 = document.querySelector("#score2")
// let p1 = document.querySelector("#p1")
// let p2 = document.querySelector("#p2")
// let count1 = 0;
// let count2 = 0;

// function addScore1() {
//     if (!isGameOver) {
//         player.count += 1;
//     } if (player.count === winningScore) {
//         isGameOver = true;
//         player.score1.style.color = "green"
//         opponent.score2.style.color = "red"
//     }
//     score1.innerText = count1;
// }


// function addScore2() {
//     if (!isGameOver) {
//         count2 += 1;
//     } if (count2 === winningScore) {
//         isGameOver = true;
//         score2.style.color = "green"
//         score1.style.color = "red"
//     }
//     score2.innerText = count2;
// }
    // player1.score.innerText = "0"
    // player2.score.innerText = "0"
    // player1.count = 0;
    // player2.count = 0;
    // player1.score.removeAttribute("style")
    // player2.score.removeAttribute("style")