import { apiFetch } from './api.js';

export const getGames = async (category = 'all') => {
    const filter = category === 'all' ? '' : `category=eq.${category}&`;
    return apiFetch(`games?${filter}is_active=eq.true&select=*`);
};
