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
    { id: 'teams', label: 'Teams', href: root + '2026.html?view=teams', hidden: true },
    { id: 'schedule', label: 'Schedule', href: root + '2026.html?view=schedule', hidden: true },
    { id: 'points', label: 'Points Table', href: root + '2026.html?view=points', hidden: true },
    { id: 'year', label: 'SPL-2025', href: root + '2025.html' }
  ];

  var active = '';
  if (file === 'serial-verify.html' || file === 'register.html' || file === 'email-verify.html') active = 'register';
  else if (file === 'players.html') active = 'players';
  else if (file === '2026.html' || file === '') active = view;

  var style = document.createElement('style');
  style.textContent = [
    '.menu-toggle{position:fixed;top:clamp(10px,2vh,20px);left:clamp(10px,2vw,20px);z-index:10002;width:clamp(40px,6vw,50px);height:clamp(40px,6vw,50px);box-sizing:border-box;padding:8px;border:2px solid #eadff5;border-radius:8px;background:linear-gradient(135deg,#ffffff 0%,#f8f4fb 100%);display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;cursor:pointer;transition:all .3s ease;}',
    '.menu-toggle:hover{border-color:#6a35a8;background:linear-gradient(135deg,#f3eafb 0%,#ffffff 100%);}',
    '.menu-toggle span{width:70%;height:3px;background:#6a35a8;border-radius:2px;transition:all .3s ease;}',
    '.menu-toggle:hover span{background:#5b2d91;}',
    '.sidebar{position:fixed;top:0;left:0;z-index:10001;height:100vh;width:clamp(240px,22vw,300px);box-sizing:border-box;background:linear-gradient(180deg,#ffffff 0%,#f8f4fb 100%);border-right:2px solid #eadff5;padding:clamp(10px,2vh,20px) clamp(15px,2vw,25px) clamp(20px,3vh,40px);transform:translateX(-100%);transition:transform .3s ease;display:flex;flex-direction:column;gap:clamp(15px,2vh,25px);overflow-y:auto;overflow-x:hidden;}',
    '.menu-toggle:hover ~ .sidebar,.sidebar:hover,.sidebar.open{transform:translateX(0);}',
    '.sidebar-title{color:#5b2d91;font-size:clamp(18px,2.5vw,24px);font-weight:700;margin:0 0 clamp(12px,2vh,18px);min-height:clamp(40px,6vw,50px);padding-left:calc(clamp(40px,6vw,50px) + 10px);box-sizing:border-box;display:flex;align-items:center;justify-content:center;text-align:center;border-bottom:2px solid #eadff5;}',
    '.menu-link{display:block;box-sizing:border-box;color:#3c2460;background:linear-gradient(135deg,#ffffff 0%,#f8f4fb 100%);border:2px solid #eadff5;text-align:center;padding:clamp(12px,2vh,18px) clamp(15px,2vw,25px);border-radius:12px;cursor:pointer;font-size:clamp(14px,2vw,18px);font-weight:600;text-decoration:none;font-family:inherit;transition:all .3s ease;}',
    '.menu-link:hover{background:linear-gradient(135deg,#f3eafb 0%,#ffffff 100%);border-color:#6a35a8;color:#5b2d91;transform:translateX(5px);}',
    '.menu-link.active{background:linear-gradient(135deg,#f3eafb 0%,#ffffff 100%);border-color:#6a35a8;color:#5b2d91;box-shadow:0 4px 12px rgba(106,53,168,.3);}',
    '.sidebar-backdrop{display:none;position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.5);opacity:0;transition:opacity .3s ease;}',
    '.sidebar-backdrop.open{display:block;opacity:1;}',
    '@media (max-width:768px){.menu-toggle:hover ~ .sidebar,.sidebar:hover{transform:translateX(-100%);}.sidebar.open,.menu-toggle:hover ~ .sidebar.open,.sidebar.open:hover{transform:translateX(0);z-index:10001;}.menu-toggle{width:clamp(35px,6vw,45px);height:clamp(35px,6vw,45px);top:clamp(5px,1vh,10px);left:clamp(5px,1vw,10px);z-index:10002;pointer-events:auto;}.sidebar{width:80%;max-width:280px;height:100vh;height:100dvh;max-height:100dvh;padding:clamp(20px,3vh,30px) clamp(15px,2vw,20px);}.sidebar-title{display:block;min-height:0;margin:0 0 clamp(10px,2vh,20px);padding:0 0 clamp(10px,2vh,20px);text-align:center;}.menu-link{white-space:normal;}}',
    '.visitor-count{position:fixed;right:16px;bottom:16px;z-index:10002;max-width:calc(100vw - 32px);box-sizing:border-box;background:#fff;color:#5b2d91;border:2px solid #eadff5;border-radius:999px;padding:8px 14px;font:700 14px/1.3 inherit;box-shadow:0 8px 20px rgba(106,53,168,.18);pointer-events:none;}'
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
  nav.innerHTML = '<div class="sidebar-title">SPL 2026</div>' + items.filter(function (item) { return !item.hidden; }).map(function (item) {
    var current = item.id === active ? ' active' : '';
    return '<a class="menu-link' + current + '" href="' + item.href + '">' + item.label + '</a>';
  }).join('');

  function closeMenu() {
    nav.classList.remove('open');
    backdrop.classList.remove('open');
  }
  function toggleMenu(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    var open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    backdrop.classList.toggle('open', open);
  }
  toggle.addEventListener('click', toggleMenu);
  toggle.addEventListener('touchstart', function (event) {
    event.preventDefault();
    toggleMenu(event);
  }, { passive: false });
  backdrop.addEventListener('click', closeMenu);
  backdrop.addEventListener('touchstart', closeMenu);
  nav.addEventListener('click', function (event) {
    if (window.innerWidth <= 768 && event.target.closest && event.target.closest('a')) closeMenu();
  });
  document.addEventListener('click', function (event) {
    if (window.innerWidth > 768 || !nav.classList.contains('open')) return;
    if (nav.contains(event.target) || toggle.contains(event.target) || backdrop.contains(event.target)) return;
    closeMenu();
  });

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
