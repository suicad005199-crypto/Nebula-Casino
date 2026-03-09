export const formatCurrency = (val) => new Intl.NumberFormat('zh-TW').format(val);
export const showToast = (msg) => alert(msg); // 可改為 iOS Style Toast
