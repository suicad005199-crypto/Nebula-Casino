import { Games } from './games.js';
import { Utils } from './utils.js';

export async function initLobby() {
    const list = await Games.getList();
    const grid = document.getElementById('game-grid');
    grid.innerHTML = list.map(g => `
        <div class="game-card">
            <div class="game-img" style="background-image:url('/assets/images/games/${g.img}')"></div>
            <div style="padding:8px; font-size:12px;">${g.title}</div>
        </div>
    `).join('');
}
