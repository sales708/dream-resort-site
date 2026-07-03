(() => {
  const { dict, meta, formOptions } = window.I18N;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  let currentLang = localStorage.getItem("lang") || "ja";

  function htmlLang(lang) {
    return lang === "zh" ? "zh-CN" : lang;
  }

  function t(key, lang = currentLang) {
    return dict[lang]?.[key] ?? dict.ja[key] ?? "";
  }

  function applyMeta(lang) {
    const m = meta[lang] || meta.ja;
    document.title = m.title;
    $('meta[name="description"]').setAttribute("content", m.description);
    $('meta[property="og:title"]').setAttribute("content", m.title);
    $('meta[property="og:description"]').setAttribute("content", m.description);
    $('meta[name="twitter:title"]').setAttribute("content", m.title);
    $('meta[name="twitter:description"]').setAttribute("content", m.description);
    document.documentElement.lang = htmlLang(lang);
  }

  function renderFormOptions(lang) {
    const select = $("#inquiryType");
    if (!select) return;
    const current = select.value;
    select.innerHTML = formOptions[lang]
      .map((label, i) => `<option value="option-${i}">${label}</option>`)
      .join("");
    if (current) select.value = current;
    $("#formLang").value = lang;
  }

  function setLanguage(lang) {
    if (!dict[lang]) return;
    currentLang = lang;
    localStorage.setItem("lang", lang);

    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[lang][key]) el.textContent = dict[lang][key];
    });

    $$("[data-i18n-alt]").forEach((el) => {
      const key = el.dataset.i18nAlt;
      if (dict[lang][key]) el.alt = dict[lang][key];
    });

    $$("[data-i18n-aria]").forEach((el) => {
      const key = el.dataset.i18nAria;
      if (dict[lang][key]) el.setAttribute("aria-label", dict[lang][key]);
    });

    $$(".lang button").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    applyMeta(lang);
    renderFormOptions(lang);
  }

  function initTabs() {
    $$(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;
        $$(".tab-btn").forEach((b) => {
          const active = b === btn;
          b.classList.toggle("active", active);
          b.setAttribute("aria-selected", String(active));
        });
        $$(".tab-panel").forEach((panel) => {
          const active = panel.id === tab;
          panel.classList.toggle("active", active);
          panel.hidden = !active;
        });
      });
    });
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

    const sections = $$("main section[id]");
    const navItems = $$(".nav-links a");

    window.addEventListener("scroll", () => {
      let current = "home";
      sections.forEach((sec) => {
        if (scrollY >= sec.offsetTop - 110) current = sec.id;
      });
      navItems.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
      });
      $("#backTop")?.classList.toggle("show", scrollY > 600);
    });

    $("#backTop")?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function initLang() {
    $$(".lang button").forEach((btn) => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
    setLanguage(currentLang);
  }

  function initForm() {
    const form = $("#contactForm");
    const status = $("#formStatus");
    const submitBtn = $("#formSubmitBtn");
    const typeSelect = $("#inquiryType");

    form?.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.textContent = "";
      status.className = "form-status full";

      submitBtn.disabled = true;
      submitBtn.textContent = t("formSubmitting");

      const payload = new FormData(form);
      if (typeSelect?.selectedIndex >= 0) {
        payload.set("inquiry_type", typeSelect.options[typeSelect.selectedIndex].text);
      }
      payload.set("language", currentLang);

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: payload,
          headers: { Accept: "application/json" }
        });

        const data = await res.json().catch(() => ({}));
        const ok = res.ok && data.success !== false && data.success !== "false";

        if (ok) {
          status.textContent = t("formSuccess");
          status.classList.add("success");
          form.reset();
          renderFormOptions(currentLang);
        } else {
          throw new Error(data.message || "submit failed");
        }
      } catch {
        status.textContent = t("formError");
        status.classList.add("error");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = t("formSubmit");
      }
    });
  }

  function initHeroSlideshow() {
    const slides = $$(".hero-slide");
    if (slides.length < 2) return;

    const cardImg = $(".hero-card .hero-media img");
    let idx = 0;
    let timer;

    function show(next) {
      slides[idx].classList.remove("is-active");
      idx = next;
      slides[idx].classList.add("is-active");
      if (cardImg) cardImg.src = slides[idx].getAttribute("src");
    }

    function schedule() {
      clearInterval(timer);
      timer = setInterval(() => {
        show((idx + 1) % slides.length);
      }, 5500);
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    schedule();
  }

  initLang();
  initTabs();
  initNav();
  initForm();
  initHeroSlideshow();
})();
