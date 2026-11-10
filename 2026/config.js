// Paste the deployed SPL 2026 Apps Script web app URL between the quotes.
// Create a new Apps Script project from google-apps-script-2026.js. Do not replace the 2025 script.
window.SPL2026_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySAf1rruBqW80e8TlXwMgYXCrfbxl10K2UAMO5HvWI1lPZEK_6MlffDA4vZlba8c82/exec';

document.addEventListener('DOMContentLoaded', function () {
  if (!window.SPL2026_SCRIPT_URL || String(window.SPL2026_SCRIPT_URL).indexOf('PASTE_') === 0) {
    var bar = document.createElement('div');
    bar.textContent = 'SPL 2026 registration is not connected yet. Deploy google-apps-script-2026.js as a new Apps Script web app, then paste its URL into this file.';
    bar.style.cssText = 'position:fixed;left:0;right:0;bottom:0;background:#7f1d1d;color:#fecaca;padding:12px 16px;z-index:100000;text-align:center;font-size:14px;';
    document.body.appendChild(bar);
  }
});
