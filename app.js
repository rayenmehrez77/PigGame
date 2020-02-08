
/*                                             // The Pig Game //
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 
var scores, roundScore, activePlayer,gamePlaying;


init();

document.querySelector('.btn-roll').addEventListener('click', function() { // anonymous function (without a name)
    if(gamePlaying) {
     // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1; 
    // 2.Display the result 
    var diceDOM = document.querySelector('.dice'); 
    diceDOM.style.display = 'block'; 
    diceDOM.src = 'dice-' + dice + '.png';  
    
    // 3- Update the round score IF the rolled number was not 1 
        if (dice !== 1) {
            // Add score 
        roundScore += dice; 
        document.querySelector('#current-' + activePlayer).textContent = roundScore; 
        } 
        else {
            // Nex player  
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
        if(gamePlaying) {
        // Add Current score to global score 
        scores[activePlayer] += roundScore; 

        // Update the UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 
        // check if player won the game 
        if(scores[activePlayer] >= 100) {
                 whoIsTheWinner()
                document.querySelector('.dice').style.display = 'none'; 
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                document.querySelector('.dice').style.display = 'none';
                gamePlaying = false;
        } else
        // nextPlayer
        nextPlayer(); 
        document.querySelector('.dice').style.display = 'none';

    }
        

});
 
// New game 

    document.querySelector('.btn-new').addEventListener('click', init);
            

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0; 

    document.getElementById('current-0').textContent = '0'; 
    document.getElementById('current-1').textContent = '0'; 

    document.querySelector('.player-0-panel').classList.toggle('active'); 
    document.querySelector('.player-1-panel').classList.toggle('active'); 
    //document.querySelector('.player-0-panel').classList.remove('active'); 
    //document.querySelector('.player-1-panel').classList.add('active');  

    document.querySelector('.dice').style.display = 'none';
}


function whoIsTheWinner() {
    if(activePlayer === 0) {
        document.querySelector('#name-' + activePlayer).textContent = 'Rayen Won!' ;
    } 
    else {
        document.querySelector('#name-' + activePlayer).textContent = 'Mayssa Won!' ;
    }
}

function init() {
    scores = [0,0]; 
    activePlayer = 0; 
    roundScore = 0; 
    gamePlaying = true; 
    document.querySelector('.dice').style.display = 'none'; 
    document.getElementById('score-0').textContent = '0'; 
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0'; 
    document.getElementById('current-1').textContent = '0'; 
    document.getElementById('name-0').textContent = 'Rayen';
    document.getElementById('name-1').textContent = 'Mayssa';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
   

}











// document.querySelector('#current-' + activePlayer).textContent = dice;  
// document.querySelector("#current-" + activePlayer).innerHTML = '<em>' + dice + '</em>'; 
//var x = document.querySelector('#score-0').textContent = dice; 




















