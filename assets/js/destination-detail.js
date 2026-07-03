(() => {
  const destId = document.body.dataset.dest;
  const data = window.DEST_DATA?.[destId];
  if (!data) return;

  const { dict } = window.I18N;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  let currentLang = localStorage.getItem("lang") || "ja";

  function htmlLang(lang) {
    return lang === "zh" ? "zh-CN" : lang;
  }

  function t(key, lang = currentLang) {
    return dict[lang]?.[key] ?? dict.ja[key] ?? "";
  }

  function renderDayCard(day, lang) {
    const scheduleHtml = (day.schedule || [])
      .map(
        (item) =>
          `<li><time>${item.time}</time><span>${item.text}</span></li>`
      )
      .join("");

    const tags = [
      day.meals && `<span class="day-tag">${t("detailMeals", lang)}: ${day.meals}</span>`,
      day.hotel && day.hotel !== "—" && `<span class="day-tag">${t("detailHotel", lang)}: ${day.hotel}</span>`,
      day.transport && `<span class="day-tag">${t("detailTransport", lang)}: ${day.transport}</span>`
    ]
      .filter(Boolean)
      .join("");

    return `
      <article class="itinerary-card">
        <div class="itinerary-card-head">
          <span class="itinerary-day-label">${day.label}</span>
          <h3>${day.title || ""}</h3>
        </div>
        <ol class="itinerary-schedule">${scheduleHtml}</ol>
        ${tags ? `<div class="day-tags">${tags}</div>` : ""}
      </article>
    `;
  }

  function renderIncludes(content, lang) {
    const el = $("#destIncludes");
    if (!el || !content.includes?.length) {
      el?.closest(".dest-includes-block")?.remove();
      return;
    }
    el.innerHTML = content.includes.map((item) => `<li>${item}</li>`).join("");
  }

  function renderSpots(lang) {
    const el = $("#destSpots");
    if (!el || !data.spots?.length) {
      el?.closest(".dest-spots-block")?.remove();
      return;
    }
    el.innerHTML = data.spots.map((spot) => `<span class="tag">${spot}</span>`).join("");
  }

  function renderDestination(lang) {
    const content = data[lang] || data.ja;
    document.title = `${content.title} | ${t("company", lang)}`;

    const heroImg = $("#destHeroImg");
    if (heroImg) {
      heroImg.src = data.image;
      heroImg.alt = content.title;
    }

    const posterImg = $("#destPosterImg");
    if (posterImg) {
      posterImg.src = data.poster || data.image;
      posterImg.alt = content.posterHeadline || content.title;
    }

    const posterDownload = $("#destPosterDownload");
    if (posterDownload) {
      posterDownload.href = data.poster || data.image;
      const ext = (data.poster || "").includes(".png") ? "png" : "svg";
      posterDownload.download = `${destId}-poster.${ext}`;
    }

    $("#destTitle").textContent = content.title;
    $("#destSubtitle").textContent = content.subtitle;
    $("#destPosterHeadline").textContent = content.posterHeadline || content.title;
    $("#destPosterTagline").textContent = content.posterTagline || content.lead;
    $("#destLead").textContent = content.lead;
    $("#destPosterBadge").textContent = content.duration;
    $("#destDuration").textContent = `${t("detailDurationLabel", lang)}: ${content.duration}`;
    $("#destGroup").textContent = `${t("detailGroupLabel", lang)}: ${content.group}`;
    $("#destSeason").textContent = `${t("detailSeasonLabel", lang)}: ${content.season}`;

    $("#destHighlights").innerHTML = content.highlights
      .map((item) => `<li>${item}</li>`)
      .join("");

    $("#destTimeline").innerHTML = content.days
      .map((day) => renderDayCard(day, lang))
      .join("");

    renderIncludes(content, lang);
    renderSpots(lang);
  }

  function applyI18n(lang) {
    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[lang]?.[key]) el.textContent = dict[lang][key];
    });
  }

  function setLanguage(lang) {
    if (!dict[lang]) return;
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = htmlLang(lang);

    $$(".lang button").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    applyI18n(lang);
    renderDestination(lang);
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

  $$(".lang button").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  initNav();
  setLanguage(currentLang);
})();
