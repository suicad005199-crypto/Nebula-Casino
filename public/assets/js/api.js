export const API_URL = import.meta.env?.VITE_SUPABASE_URL || '';
export const API_KEY = import.meta.env?.VITE_SUPABASE_ANON_KEY || '';

export const apiFetch = async (path, options = {}) => {
    const res = await fetch(`${API_URL}/rest/v1/${path}`, {
        ...options,
        headers: {
            'apikey': API_KEY,
            'Authorization': `Bearer ${localStorage.getItem('sb-token') || API_KEY}`,
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
    return res.json();
};
