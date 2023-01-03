const yourScore = document.getElementById("y-score")
const robotScore = document.getElementById("r-score")
const vs = document.getElementById("vs")
const result = document.getElementById("result")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const reset = document.getElementById("reset")
let game = ["rock", "Paper", "Scissor"]
let yourGame = ""
let randoNumber = ""
let robotGame = ""

let yScore = 0
let rScore = 0

// player options 
rock.addEventListener("click",function(){
    yourGame = game[0]
    rGame()
    renderGame()
    return yourGame 
})
paper.addEventListener("click",function(){
    yourGame = game[1]
    rGame()
    renderGame()
    return yourGame
})
scissor.addEventListener("click",function(){
    yourGame = game[2]
    rGame()
    renderGame()
    return yourGame
})

// random element 
const rGame = () =>{
    randoNumber = Math.floor(Math.random()*game.length)
    robotGame = game[randoNumber]
    return robotGame
}

const renderGame = () =>{
    vs.innerText =`${yourGame} vs ${robotGame}`
    if (yourGame === game[0] && robotGame === game[1]){
        result.innerText = `You lose`
        result.style.color = "red"
        rScore += 1
        robotScore.innerText = `${rScore}`
    } else if ( yourGame === game[0] && robotGame === game[2]){
        result.innerText = `You win`
        result.style.color = "gold"
        yScore += 1
        yourScore.innerText = `${yScore}`
    }else if(yourGame === game[1] && robotGame === game[2]){
        result.innerText = `You lose`
        result.style.color = "red"
        rScore += 1
        robotScore.innerText = `${rScore}`
    }else if(yourGame === game[1] && robotGame === game[0]){
        result.innerText = `You win`
        result.style.color = "gold"
        yScore += 1
        yourScore.innerText = `${yScore}`
    }else if(yourGame === game[2] && robotGame === game[0]){
        result.innerText = `You lose`
        result.style.color = "red"
        rScore += 1
        robotScore.innerText = `${rScore}`
    }else if(yourGame === game[2] && robotGame === game[1]){
        result.innerText = `You win`
        result.style.color = "gold"
        yScore += 1
        yourScore.innerText = `${yScore}`
    }else {
        result.innerText = `Draw`
        result.style.color = "green"
    }
}

reset.addEventListener("click",function(){
    yScore = 0
    rScore = 0
    robotScore.innerText = `0`
    yourScore.innerText = `0`
    result.innerText = ``
    vs.innerText = `vs`
})
