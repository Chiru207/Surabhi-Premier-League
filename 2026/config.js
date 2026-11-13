// SPL 2026 web app switch. Only the address assigned below is used.
// Account 1 is the current sender. Account 2 is the second Gmail deployment.
// When the daily email limit is crossed, set SPL2026_SCRIPT_URL to SPL2026_URL_2
// and raise the config.js?v= number in the 2026 pages by one.
var SPL2026_URL_1 = 'https://script.google.com/macros/s/AKfycbySAf1rruBqW80e8TlXwMgYXCrfbxl10K2UAMO5HvWI1lPZEK_6MlffDA4vZlba8c82/exec';
var SPL2026_URL_2 = 'https://script.google.com/macros/s/AKfycbwcglJ9EHiuQntXfG2iQieq9-rn6P0eeJvEY3Y2eH1pxENm-mT9pJH30hOpmb9rZKddqQ/exec';
window.SPL2026_SCRIPT_URL = SPL2026_URL_1;
