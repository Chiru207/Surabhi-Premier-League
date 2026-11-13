(function () {
  var path = window.location.pathname;
  var inFolder = /\/2026\//.test(path);
  var root = inFolder ? '../' : '';
  var sub = inFolder ? '' : '2026/';
  var file = path.split('/').pop() || '2026.html';
  var view = new URLSearchParams(window.location.search).get('view') || 'home';

  var items = [
    { id: 'home', label: 'Home', href: root + '2026.html' },
    { id: 'register', label: 'Register', href: sub + 'serial-verify.html' },
    { id: 'players', label: 'Registered Players', href: sub + 'players.html' },
    { id: 'sponsors', label: 'Sponsors', href: root + '2026.html?view=sponsors' },
    { id: 'playing-conditions', label: 'Playing Conditions', href: root + '2026.html?view=playing-conditions' },
    { id: 'organizing-team', label: 'Organizing Team', href: root + '2026.html?view=organizing-team' },
    { id: 'teams', label: 'Teams', href: root + '2026.html?view=teams' },
    { id: 'schedule', label: 'Schedule', href: root + '2026.html?view=schedule' },
    { id: 'points', label: 'Points Table', href: root + '2026.html?view=points' },
    { id: 'year', label: 'SPL-2025', href: root + '2025.html' }
  ];

  var active = '';
  if (file === 'serial-verify.html' || file === 'register.html' || file === 'email-verify.html') active = 'register';
  else if (file === 'players.html') active = 'players';
  else if (file === '2026.html' || file === '') active = view;

  var style = document.createElement('style');
  style.textContent = [
    '.menu-toggle{position:fixed;top:16px;left:16px;z-index:10002;width:46px;height:46px;border:2px solid #eadff5;border-radius:8px;background:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;cursor:pointer;}',
    '.menu-toggle span{width:22px;height:3px;background:#6a35a8;border-radius:2px;}',
    '.sidebar{position:fixed;top:0;left:0;z-index:10001;height:100vh;width:min(280px,82vw);box-sizing:border-box;background:#fff;border-right:2px solid #eadff5;padding:84px 18px 24px;transform:translateX(-105%);transition:transform .25s ease;display:flex;flex-direction:column;gap:8px;overflow-y:auto;}',
    '.sidebar.open{transform:translateX(0);}',
    '.sidebar-title{color:#5b2d91;font-weight:700;margin-bottom:8px;}',
    '.menu-link{color:#3c2460;background:transparent;border:0;text-align:left;padding:12px 14px;border-radius:10px;cursor:pointer;font-size:16px;text-decoration:none;font-family:inherit;}',
    '.menu-link.active,.menu-link:hover{background:#f3eafb;}',
    '.sidebar-backdrop{display:none;position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.45);}',
    '.sidebar-backdrop.open{display:block;}',
    '.visitor-count{position:fixed;right:16px;bottom:16px;z-index:10002;max-width:calc(100vw - 32px);box-sizing:border-box;background:#fff;color:#5b2d91;border:2px solid #eadff5;border-radius:999px;padding:8px 14px;font:700 14px/1.3 inherit;box-shadow:0 8px 20px rgba(106,53,168,.18);pointer-events:none;}',
    '.home-copy{padding-bottom:120px;}'
  ].join('');
  document.head.appendChild(style);

  var toggle = document.createElement('button');
  toggle.className = 'menu-toggle';
  toggle.setAttribute('aria-label', 'Open menu');
  toggle.innerHTML = '<span></span><span></span><span></span>';

  var backdrop = document.createElement('div');
  backdrop.className = 'sidebar-backdrop';

  var nav = document.createElement('nav');
  nav.className = 'sidebar';
  nav.innerHTML = '<div class="sidebar-title">SPL 2026</div>' + items.map(function (item) {
    var current = item.id === active ? ' active' : '';
    return '<a class="menu-link' + current + '" href="' + item.href + '">' + item.label + '</a>';
  }).join('');

  function closeMenu() {
    nav.classList.remove('open');
    backdrop.classList.remove('open');
  }
  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    backdrop.classList.toggle('open');
  });
  backdrop.addEventListener('click', closeMenu);

  document.body.insertBefore(backdrop, document.body.firstChild);
  document.body.insertBefore(nav, document.body.firstChild);
  document.body.insertBefore(toggle, document.body.firstChild);

  var badge = document.createElement('div');
  badge.className = 'visitor-count';
  badge.textContent = '2026 Visitors count';
  document.body.appendChild(badge);

  function showVisitCount() {
    if (!window.SPL2026_SCRIPT_URL) return;
    var callbackName = 'spl2026_visit_' + Date.now();
    var script = document.createElement('script');
    var finished = false;
    function finish(data) {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      try { delete window[callbackName]; } catch (ignored) {}
      if (script.parentNode) script.parentNode.removeChild(script);
      if (data && data.success && typeof data.count === 'number') {
        badge.textContent = '2026 Visitors count: ' + data.count;
      }
    }
    var timer = setTimeout(function () { finish(null); }, 20000);
    window[callbackName] = function (data) { finish(data); };
    script.onerror = function () { finish(null); };
    var url = new URL(window.SPL2026_SCRIPT_URL);
    url.searchParams.set('action', 'visit');
    url.searchParams.set('callback', callbackName);
    script.src = url.toString();
    document.body.appendChild(script);
  }

  if (window.SPL2026_SCRIPT_URL) {
    showVisitCount();
  } else {
    var configScript = document.createElement('script');
    configScript.src = (inFolder ? '' : '2026/') + 'config.js?v=4';
    configScript.onload = showVisitCount;
    document.body.appendChild(configScript);
  }

  var sections = document.querySelectorAll('.view');
  if (!sections.length) return;
  if (!document.getElementById(view)) view = 'home';
  sections.forEach(function (section) {
    section.classList.toggle('active', section.id === view);
  });
})();
