import { getGames } from './games.js';

export const renderLobby = async (category) => {
    const grid = document.getElementById('game-grid');
    grid.innerHTML = '<div class="loader">Loading...</div>';
    const games = await getGames(category);
    grid.innerHTML = games.map(g => `
        <div class="card game-card">
            <img src="${g.image_url}" alt="${g.title}">
            <p>${g.title}</p>
            <span class="provider">${g.provider}</span>
        </div>
    `).join('');
};
