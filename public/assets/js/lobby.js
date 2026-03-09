import { apiFetch } from './api.js';

export const renderLobby = async () => {
    const grid = document.getElementById('game-grid');
    try {
        const games = await apiFetch('games?is_active=eq.true&select=*');
        grid.innerHTML = games.map(g => `
            <div class="card">
                <div style="height:100px; background:#333; border-radius:8px;"></div>
                <p style="font-size:14px; margin-top:8px;">${g.title}</p>
                <small style="color:#8e8e93;">${g.provider}</small>
            </div>
        `).join('');
    } catch (e) { grid.innerHTML = "載入失敗"; }
};
