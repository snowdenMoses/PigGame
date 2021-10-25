


const popup = document.querySelector('.popup')
const closeModal = document.querySelector('.close')
const hold = document.querySelector('.hold')
const overlay = document.querySelector('.overlay')
const score0 = document.querySelector('.score0')
const score1 = document.querySelector('.score1')
const diceImg = document.querySelector('.dice')
const roll = document.querySelector('.roll')
const current0 = document.querySelector('.current0')
const current1 = document.querySelector('.current1')
const player0 = document.querySelector('.player0')
const player1 = document.querySelector('.player1')
const winnerMessage = document.querySelector('.winner_message')
const newGame = document.querySelector('.newgame')

let currentScore, score, activePlayer, player

const init = function(){
        score = [0,0]
        currentScore = 0;
        activePlayer = 0
        winnerMessage.classList.add('hidden');
        playing = true;
        score0.textContent = 0;
        score1.textContent = 0;
        score[activePlayer] = 0
        diceImg.classList.add('hidden')
        current0.textContent = 0
        current1.textContent = 0
        document.querySelector(`.player0`).classList.remove('player--winner')
        document.querySelector(`.player1`).classList.remove('player--winner')
        document.querySelector(`.player0`).classList.add('player-active')
        document.querySelector(`.player1`).classList.remove('player-active')

        diceImg.classList.remove("hidden")
        hold.classList.remove("hidden")
        roll.classList.remove("hidden")
        winnerMessage.classList.add("hidden")

}

init();

const switchPlayer = function(){
        //diceImg.classList.add("hidden")
        player0.classList.toggle('player-active')
        player1.classList.toggle('player-active')
        document.querySelector(`.current${activePlayer}`).textContent=0;
        activePlayer = activePlayer === 0 ? 1 : 0
        currentScore = 0;
       
}

window.onload  = function(){
    setTimeout(function(){
        popup.classList.toggle("popup2")
      
    },2000)
}

closeModal.addEventListener('click', ()=>{
    popup.classList.toggle("popup2")
    overlay.classList.add("hidden")
})

score0.textContent = 0;
score1.textContent = 0;
diceImg.classList.add('hidden')

//Generate random number from 1-6

roll.addEventListener('click',()=>{

    if(playing){

        const randNumber = Math.trunc(Math.random()*6)+1
        diceImg.classList.remove("hidden")
        diceImg.src = `images/dice-${randNumber}.png`
    
    
        if(randNumber!==1){
    
            currentScore+=randNumber
            document.querySelector(`.current${activePlayer}`).textContent=currentScore;
           
    
        }else{
            //switch player
            switchPlayer();
            
        }


    }
    
    

    
})


hold.addEventListener('click', ()=>{

    if(playing){


            score[activePlayer] += currentScore;
            document.querySelector(`.score${activePlayer}`).textContent = score[activePlayer]

            if(score[activePlayer] >= 100){
                playing=false
                document.querySelector(`.player${activePlayer}`).classList.remove('player-active')
                document.querySelector(`.player${activePlayer}`).classList.add('player--winner')
                diceImg.classList.add("hidden")
                winnerMessage.classList.remove("hidden")
                winnerMessage.textContent = `🏆🏆🏆Player ${activePlayer + 1} Won!!!`
                current0.textContent = 0
                current1.textContent = 0

            }
            else{
                switchPlayer();
            }


    }
   
   

})

newGame.addEventListener('click', init)