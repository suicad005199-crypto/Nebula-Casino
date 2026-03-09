export const API = {
    // 這裡替換成你的 Supabase URL 與 Key
    URL: 'https://your-project.supabase.co',
    KEY: 'your-anon-key',

    async fetch(path, options = {}) {
        const res = await fetch(`${this.URL}/rest/v1/${path}`, {
            ...options,
            headers: {
                'apikey': this.KEY,
                'Authorization': `Bearer ${localStorage.getItem('sb-token') || this.KEY}`,
                'Content-Type': 'application/json',
                ...options.headers
            }
        });
        return res.json();
    }
};
