export const Utils = {
    formatCurrency: (num) => new Intl.NumberFormat('zh-TW', { minimumFractionDigits: 2 }).format(num),
    showLoading: () => console.log('Loading...'),
    hideLoading: () => console.log('Done.')
};
