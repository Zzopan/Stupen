import './components/search-bar.js';
import './components/player-list.js';
import './components/player-card.js';

document.addEventListener('DOMContenLoaded',()=> {
    const searchBar = document.createElement('search-bar');
    document.body.appendChild(searchBar);

    const playerList = document.createElement('player-list');
    document.body.appendChild(playerList);
});