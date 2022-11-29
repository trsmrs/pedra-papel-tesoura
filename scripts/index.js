const player_name = document.querySelector('#player-name')
const player_score = document.querySelector('#player-score')
const comp_score = document.querySelector('#computer-score')

let playerChoose
let playerScore = 0


let comp_choose
let comScore = 0




const player_select_1 = document.getElementById('player-select-1')
const player_select_2 = document.getElementById('player-select-2')
const player_select_3 = document.getElementById('player-select-3')

const message = document.querySelector('#message')





player_select_1.onclick = function () {
    play(1)
    
}

player_select_2.onclick = function () {
    play(2)
}

player_select_3.onclick = function () {
    play(3)
}

// Nome do Jogador
function playerName() {
    message.innerHTML = `Oi ${player_name.textContent}, Vamos jogar?<br>
  Escolha entre pedra, papel, ou tesoura!

`
}

playerName()


// Sortear entre dois números
function raffle(min, max) {
    let valor = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(valor)
    return valor
}


// Somando os pontos do jogador
function sunScorePlayer() {
    playerScore ++
    player_score.innerHTML = playerScore
}

// Somando os pontos do Computador
function sunScoreComp() {
    comScore ++
    comp_score.innerHTML = comScore
}

function selectedHand(type, choose){
    document.getElementById(type + '-select-' + choose).classList.add('selected')
}

function deselectHand(type, choose){
    document.getElementById(type + '-select-' + choose).classList.remove('selected')
}



function play(choose) {
    playerChoose = choose

    selectedHand('player', playerChoose)
    comp_choose = raffle(1, 3)

    selectedHand('computer', comp_choose)

    let winner = sortChoose(playerChoose, comp_choose)


    if (winner === 0) {
        messageWinner(`${player_name.textContent}, Você Empatou!`)
    } 
    else if (winner === 1) {
        messageWinner(`${player_name.textContent}, Você Ganhou!!!!`)
        sunScorePlayer()
    } 
    else if (winner === 2) {
        messageWinner(`${player_name.textContent}, O computador ganhou!`)
        sunScoreComp()
    }

    setTimeout(function(){
        deselectHand('player', playerChoose)
        deselectHand('computer', comp_choose)
        messageWinner('Escolha a sua jogada!')
    
    },1500)
    

}

// calcula e retorna o ganhador
function sortChoose(player, comp) {
    if (player === 1 && comp === 1) {
        return 0;
    } 
    else if (player === 1 && comp === 2) {
        return 2;
    } 
    else if (player === 1 && comp === 3) {
        return 1;
    }


    if (player === 2 && comp === 1) {
        return 1;
    } 
    else if (player === 2 && comp === 2) {
        return 0;
    } 
    else if (player === 2 && comp === 3) {
        return 2;
    }

    if (player === 3 && comp === 1) {
        return 2;
    } 
    else if (player === 3 && comp === 2) {
        return 1;
    } 
    else if (player === 3 && comp === 3) {
        return 0;
    }

}


function messageWinner(text) {
    message.innerHTML = text
}


