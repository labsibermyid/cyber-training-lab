/* Pilihan tampilan: Neon (tema GTA) atau Biasa (warna polos, lebih nyaman di mata).
   Pilihan tersimpan di browser (localStorage 'cl-tema') dan berlaku di semua halaman lab.

   Pemakaian:
   - Lab (CTI, Malware Analysis, Digital Forensic): taruh tepat SETELAH link neon.css
       <link rel="stylesheet" href="../tema/neon.css?v=3">
       <script src="../tema/tema.js?v=1"></script>
     Tombol "Tampilan" otomatis muncul di pojok kanan bawah.
   - Halaman lain cukup memberi atribut data-tema-toggle pada tombol sendiri;
     tombol otomatis tidak dibuat bila sudah ada elemen [data-tema-toggle].
     Untuk mematikan tombol otomatis: <script src="..." data-no-btn></script>
*/
(function () {
  var KEY = 'cl-tema', d = document.documentElement;
  var me = document.currentScript;
  function get() { try { return localStorage.getItem(KEY) === 'biasa' ? 'biasa' : 'neon'; } catch (e) { return 'neon'; } }
  function links() { return document.querySelectorAll('link[href*="tema/neon.css"]'); }
  function label(m) { return m === 'biasa' ? 'Tampilan: Biasa' : 'Tampilan: Neon'; }
  function apply(m) {
    d.classList.toggle('tema-biasa', m === 'biasa');
    d.setAttribute('data-tema', m);
    links().forEach(function (l) { l.disabled = (m === 'biasa'); });
    document.querySelectorAll('[data-tema-toggle]').forEach(function (b) {
      b.setAttribute('aria-pressed', m === 'biasa' ? 'true' : 'false');
      b.title = m === 'biasa' ? 'Ganti ke tampilan Neon' : 'Ganti ke tampilan Biasa (warna polos)';
      var t = b.querySelector('[data-tema-label]') || (b.hasAttribute('data-tema-auto') ? b : null);
      if (t) t.textContent = label(m);
    });
  }
  function set(m) { try { localStorage.setItem(KEY, m); } catch (e) {} apply(m); }
  function toggle() { set(get() === 'biasa' ? 'neon' : 'biasa'); }
  window.ClTema = { get: get, set: set, toggle: toggle };
  apply(get());

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-tema-toggle]');
    if (b) { e.preventDefault(); e.stopPropagation(); toggle(); }
  }, true);
  window.addEventListener('storage', function (e) { if (e.key === KEY) apply(get()); });

  function ready() {
    if (!(me && me.hasAttribute('data-no-btn')) && !document.querySelector('[data-tema-toggle]')) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'cl-tema-btn';
      b.setAttribute('data-tema-toggle', ''); b.setAttribute('data-tema-auto', '');
      var st = document.createElement('style');
      st.textContent = '.cl-tema-btn{position:fixed;right:14px;bottom:14px;z-index:2147483000;font:600 13px/1 system-ui,-apple-system,"Segoe UI",sans-serif;padding:9px 13px;border-radius:999px;cursor:pointer;border:1px solid rgba(240,71,158,.6);background:#21123a;color:#f1e9f7;box-shadow:0 6px 18px rgba(0,0,0,.35);opacity:.85}' +
        '.cl-tema-btn:hover,.cl-tema-btn:focus-visible{opacity:1}' +
        'html.tema-biasa .cl-tema-btn{border-color:#c5cbd3;background:#fff;color:#1f2430;box-shadow:0 4px 14px rgba(0,0,0,.15)}' +
        '@media (prefers-color-scheme:dark){html.tema-biasa .cl-tema-btn{border-color:#3a404a;background:#1f2229;color:#e6e8ec}}' +
        '@media print{.cl-tema-btn{display:none}}';
      st.textContent += 'html.tema-biasa #lsb-home{background:#2f3542!important;box-shadow:0 4px 14px rgba(0,0,0,.18)!important}html.tema-biasa #lsb-home:hover{background:#2f5fd0!important}';
      document.head.appendChild(st);
      document.body.appendChild(b);
      var home = document.getElementById('lsb-home');
      if (home) {  /* taruh di kiri tombol Beranda */
        var place = function () { var r = home.getBoundingClientRect(); b.style.right = (innerWidth - r.left + 8) + 'px'; b.style.bottom = (innerHeight - r.bottom) + 'px'; b.style.height = r.height + 'px'; b.style.padding = '0 13px'; };
        place(); addEventListener('resize', place);
      }
    }
    apply(get());
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready); else ready();
})();
