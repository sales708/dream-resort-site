(() => {
  const { dict } = window.I18N;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  let currentLang = localStorage.getItem("lang") || "ja";

  function htmlLang(lang) {
    return lang === "zh" ? "zh-CN" : lang;
  }

  function applyI18n(lang) {
    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[lang]?.[key]) el.textContent = dict[lang][key];
    });
    $$("[data-i18n-alt]").forEach((el) => {
      const key = el.dataset.i18nAlt;
      if (dict[lang]?.[key]) el.alt = dict[lang][key];
    });
    document.documentElement.lang = htmlLang(lang);
  }

  function setLanguage(lang) {
    if (!dict[lang]) return;
    currentLang = lang;
    localStorage.setItem("lang", lang);
    $$(".lang button").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    applyI18n(lang);
  }

  function initNav() {
    const navLinks = $("#navLinks");
    const menuBtn = $("#menuBtn");
    menuBtn?.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    $$("#navLinks a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn?.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initExpoCover() {
    const slides = $$(".expo-cover-slide");
    const captions = $$(".expo-cover-caption");
    const dots = $$(".expo-cover-dot");
    if (slides.length < 2) return;

    let idx = 0;
    let timer;

    function show(n) {
      slides[idx]?.classList.remove("is-active");
      captions[idx]?.classList.remove("is-active");
      dots[idx]?.classList.remove("is-active");
      dots[idx]?.setAttribute("aria-selected", "false");

      idx = n;

      slides[idx]?.classList.add("is-active");
      captions[idx]?.classList.add("is-active");
      dots[idx]?.classList.add("is-active");
      dots[idx]?.setAttribute("aria-selected", "true");
    }

    function next() {
      show((idx + 1) % slides.length);
    }

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(next, 5000);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        show(i);
        resetTimer();
      });
    });

    resetTimer();
  }

  $$(".lang button").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  initNav();
  setLanguage(currentLang);
  initExpoCover();
})();
