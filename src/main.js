import './style.css';
import { projects } from './data/projects.js';
import { initNavigation } from './modules/navigation.js';
import { initAnimations } from './modules/animations.js';
import { initContactForm } from './modules/contact-form.js';

function renderProjects() {
  const grid = document.querySelector('[data-projects-grid]');
  if (!grid) return;
  grid.innerHTML = projects.map((project) => `
    <article class="project-card" data-reveal>
      <div class="browser-frame">
        <div class="browser-bar" aria-hidden="true"><i></i><i></i><i></i><span>${new URL(project.liveUrl).hostname}</span></div>
        <img src="${project.image}" alt="${project.imageAlt}" width="1200" height="750" loading="lazy">
      </div>
      <div class="project-content">
        <p class="eyebrow">${project.category}</p>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tag-list" aria-label="Použité technologie">${project.technologies.map((tech) => `<span>${tech}</span>`).join('')}</div>
        <div class="project-role"><strong>Moje role</strong><p>${project.role}</p></div>
        <div class="project-links">
          <a class="button button-primary" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Zobrazit web <span aria-hidden="true">↗</span></a>
          <a class="button button-secondary" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">Zdrojový kód <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>`).join('');
}

document.documentElement.classList.add('js');
renderProjects();
initNavigation();
initContactForm();
requestAnimationFrame(initAnimations);
const year = document.querySelector('[data-current-year]');
if (year) year.textContent = new Date().getFullYear();
