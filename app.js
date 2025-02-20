import Game from './game.js';

document.addEventListener('DOMContentLoaded', function() {

    const myGame = new Game('FirstGame');
  
























    let playersDiv = document.getElementById('players');

    playersDiv.innerHTML = 'Loading...';

    const myHTML=` <button id="deal">Deal</button>
    <button id="hit">Hit</button>
    <button id="stand">Stand</button>  <button id="deal">Deal</button>
    <button id="hit">Hit</button>
    <button id="stand">Stand</button>`

    playersDiv.innerHTML = myHTML;

    
});
