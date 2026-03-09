export const Auth = {
    async login(email, password) {
        // 呼叫 Supabase Auth API 的簡化邏輯
        alert('開發中：串接 Supabase Auth');
    },
    logout() {
        localStorage.removeItem('sb-token');
        location.href = 'index.html';
    }
};
