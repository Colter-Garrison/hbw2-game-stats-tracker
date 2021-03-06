import { renderStat, renderGame } from './utils.js';

const form = document.getElementById('add-stat');
const statsList = document.getElementById('stats-list');
const gameList = document.getElementById('game-list');

const remove = document.getElementById('remove');
const save = document.getElementById('save-game');

let stats = [];
let games = [];

// IMPURE RENDER FUNCTIONS
// YOUR CODE MUST CALL THESE FUNCTIONS
function renderGames() {
    gameList.textContent = '';
    for (let game of games) {
        const li = renderGame(game);
        gameList.append(li);
    }
}

function renderStats() {
    statsList.textContent = '';
    for (let item of stats) {
        const li = renderStat(item);
        statsList.appendChild(li);
    }
}

function resetStats() {
    stats = [];
    statsList.textContent = '';
}

form.addEventListener('submit', (e) => {
    // Step 1 - add code to track each submission to the stats
    // Create an object to "model" you statistic like the following:
    // { player: 'Bob', points: 2 }
    // Hint -- create the object from the form, push it onto the stats array, then call renderStats

    e.preventDefault();
    // console.log('Adding stat');

    const playerData = new FormData(form);
    // console.log(playerData.get('player'));
    // console.log(playerData.get('points'));

    let player = {
        player: playerData.get('player'),
        points: playerData.get('points')
    };

    stats.push(player);
    console.log('list of players and stats', stats);

    renderStats();
    // form.reset();
});

remove.addEventListener('click', () => {
    // Step 2 -- add code to allow users to remove the most recent stat
    // Hint -- how do you remove an element from an array?
    // Hint -- how can we rerender the stats using a function above?

    // console.log('clicking remove');
    stats.pop();
    renderStats();
});

save.addEventListener('click', () => {
    // Step 3 - add code to allow users to save the state
    // Loop through the list of stats and add up the total points scored
    // Create a new object with the game number and the total points
    // { number: games.length + 1, totalPoints: totalPoints }
    // Push the new object onto the games array then call renderGames
    // reset the stats with resetStats

    // console.log('saving game');
    let totalPoints = 0;
    for (let stat of stats) {
        let gamePoint = Number(stat.points);
        totalPoints += gamePoint;
    }
    let game = {
        number: games.length + 1,
        totalPoints
    };
    
    console.log(game);
    games.push(game);
    renderGames();
    resetStats();
});
