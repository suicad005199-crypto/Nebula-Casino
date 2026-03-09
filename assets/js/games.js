export const Games = {
    async getList(category = 'all') {
        // 假設從 Supabase 獲取遊戲清單
        return [
            { id: 1, title: '百家樂', category: 'LIVE', img: 'game1.jpg' },
            { id: 2, title: '雷神之錘', category: '老虎機', img: 'game2.jpg' }
        ];
    }
};
