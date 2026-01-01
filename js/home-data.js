// js/home-data.js

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderAbout();
  renderSkills();
  renderTools();
  renderExperience();
  renderWebsites();
  renderImageGrid(DATA.excel, "excelGrid");
  renderImageGrid(DATA.powerbi, "powerbiGrid");
});

/* =====================
   PROFILE
===================== */

function renderProfile() {
  const nameEl = document.getElementById("profileName");
  const titleEl = document.getElementById("profileTitle");

  if (!nameEl || !titleEl) return;

  nameEl.textContent = DATA.profile.name;
  titleEl.textContent = DATA.profile.title;
}

/* =====================
   ABOUT
===================== */

function renderAbout() {
  const aboutEl = document.getElementById("aboutText");
  if (!aboutEl) return;

  aboutEl.textContent = DATA.profile.about.trim();
}

/* =====================
   SKILLS
===================== */

function renderSkills() {
  const container = document.getElementById("skillList");
  if (!container) return;

  container.innerHTML = "";

  DATA.skills.forEach(skill => {
    container.innerHTML += `
      <div class="skill">
        <span>${skill.name}</span>
        <div class="skill-bar">
          <div class="skill-level" style="width:${skill.level}%"></div>
        </div>
      </div>
    `;
  });
}

/* =====================
   TOOLS
===================== */

function renderTools() {
  const container = document.getElementById("toolList");
  if (!container) return;

  container.innerHTML = "";

  DATA.tools.forEach(tool => {
    const span = document.createElement("span");
    span.textContent = tool;
    container.appendChild(span);
  });
}

/* =====================
   EXPERIENCE
===================== */

function renderExperience() {
  const list = document.getElementById("experienceList");
  if (!list) return;

  list.innerHTML = "";

  DATA.experience.forEach(exp => {
    list.innerHTML += `
      <li>
        <strong>${exp.title}</strong>
        <span>${exp.period}</span>
        <p>${exp.desc}</p>
      </li>
    `;
  });
}

/* =====================
   WEBSITES
===================== */

function renderWebsites() {
  const grid = document.getElementById("websiteGrid");
  if (!grid) return;

  grid.innerHTML = "";

  DATA.websites.forEach(site => {
    grid.innerHTML += `
      <article class="site-card">
        <div class="site-frame">
          <img src="${site.image}" alt="${site.title}">
        </div>
        <div class="site-body">
          <h3>${site.title}</h3>
          <p>${site.desc}</p>
          <a class="site-btn ${site.disabled ? "disabled" : ""}"
             href="${site.url}"
             ${site.disabled ? "tabindex='-1'" : "target='_blank'"}>Open</a>
        </div>
      </article>
    `;
  });
}

/* =====================
   EXCEL / POWER BI
===================== */

function renderImageGrid(items, containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  grid.innerHTML = "";

  items.forEach(item => {
    grid.innerHTML += `
      <div class="excel-card">
        <img src="${item.thumb}" data-full="${item.full}" alt="">
        <p>${item.desc}</p>
      </div>
    `;
  });
}

/* =====================
   LIGHTBOX
===================== */

document.addEventListener("click", e => {
  const img = e.target.closest(".excel-card img");
  if (!img) return;

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (!lightbox || !lightboxImg) return;

  lightboxImg.src = img.dataset.full;
  lightbox.classList.add("active");
});

const lightboxEl = document.getElementById("lightbox");
if (lightboxEl) {
  lightboxEl.addEventListener("click", () => {
    lightboxEl.classList.remove("active");
    document.getElementById("lightbox-img").src = "";
  });
}
