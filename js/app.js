/**
 * NORDEN PORTFOLIO & RESUME INTERACTIVITY
 * Engineered for Manpreeth N
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMenu();
  initFaq();
  initProjectModals();
  initPrintResume();
  initSmoothScroll();
});

/* ==========================================================================
   1. THEME MANAGEMENT (Light / Dark Mode with Persistence)
   ========================================================================== */
function initTheme() {
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const favicon = document.getElementById('dynamic-favicon');

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('manuresume-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  setTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('manuresume-theme', theme);
    
    // Dynamic Favicon sync
    if (favicon) {
      favicon.href = theme === 'dark' 
        ? 'assets/images/favicon_dark.svg' 
        : 'assets/images/favicon_light.svg';
    }
  }
}

/* ==========================================================================
   2. SIGNATURE NORDEN MENU DROPDOWN
   ========================================================================== */
function initMenu() {
  const menuBtn = document.getElementById('menu-toggle-btn');
  const menuBtnText = document.getElementById('menu-btn-text');
  const dropdown = document.getElementById('menu-dropdown');
  const menuLinks = document.querySelectorAll('.menu-card');

  if (!menuBtn || !dropdown) return;

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  function toggleMenu(forceClose = false) {
    const isActive = forceClose ? false : !dropdown.classList.contains('active');
    
    if (isActive) {
      dropdown.classList.add('active');
      menuBtn.setAttribute('aria-expanded', 'true');
      if (menuBtnText) menuBtnText.textContent = 'Close';
    } else {
      dropdown.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      if (menuBtnText) menuBtnText.textContent = 'Menu';
    }
  }

  // Close menu on navigation click
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(true);
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (dropdown.classList.contains('active') && !dropdown.contains(e.target) && !menuBtn.contains(e.target)) {
      toggleMenu(true);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dropdown.classList.contains('active')) {
      toggleMenu(true);
    }
  });
}

/* ==========================================================================
   3. INTERACTIVE FAQ ACCORDION
   ========================================================================== */
function initFaq() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const icon = item.querySelector('.faq-icon');

    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isCurrentlyActive = item.classList.contains('active');

      // Close other accordion items for clean accordion behavior
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBtn = otherItem.querySelector('.faq-question');
        const otherIcon = otherItem.querySelector('.faq-icon');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        if (otherIcon) otherIcon.textContent = '+';
      });

      if (!isCurrentlyActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        if (icon) icon.textContent = '−';
      }
    });
  });
}

/* ==========================================================================
   4. PROJECT MODALS / DEEP-DIVE CASE STUDIES
   ========================================================================== */
function initProjectModals() {
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('project-modal');
  const modalSlot = document.getElementById('modal-content-slot');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (!modal || !modalSlot) return;

  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // If user clicked directly on an action link (Live / Code), don't trigger modal
      if (e.target.closest('.project-action-link') || e.target.closest('a')) return;

      const projectId = card.getAttribute('data-project-id');
      const projectData = (typeof SITE_DATA !== 'undefined' && SITE_DATA.projects) 
        ? SITE_DATA.projects.find(p => p.id === projectId) 
        : null;

      if (projectData) {
        renderModalContent(projectData);
        openModal();
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderModalContent(p) {
    const liveBtn = p.liveUrl 
      ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link live" style="padding: 8px 18px; font-size: 0.82rem;">
          <span class="status-dot"></span>
          <span>Visit Live App</span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>`
      : '';

    const githubBtn = p.githubUrl 
      ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link code" style="padding: 8px 18px; font-size: 0.82rem;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span>Source Code</span>
        </a>`
      : '';

    const privatePill = p.isPrivate 
      ? `<span class="project-private-pill">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span>Enterprise Platform • Case Study Only</span>
        </span>`
      : '';

    modalSlot.innerHTML = `
      <div style="margin-bottom: 16px;">
        <span class="tag" style="margin-bottom: 8px; display: inline-block;">${p.category}</span>
        <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 4px;">${p.title}</h2>
        <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">${p.duration}</span>
      </div>

      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px;">
        ${liveBtn}
        ${githubBtn}
        ${privatePill}
      </div>

      <div style="width: 100%; aspect-ratio: 16/9; border-radius: 14px; overflow: hidden; margin-bottom: 18px; border: 1px solid var(--border-subtle);">
        <img src="${p.image}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div style="margin-bottom: 18px;">
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">Overview</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.55;">${p.summary}</p>
      </div>

      <div style="margin-bottom: 18px;">
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">Key Contributions & Architecture</h4>
        <ul style="list-style: disc; margin-left: 18px; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
          ${p.highlights.map(h => `<li style="margin-bottom: 6px;">${h}</li>`).join('')}
        </ul>
      </div>

      <div>
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">Technologies Deployed</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    `;
  }
}

/* ==========================================================================
   5. PRINT ATS RESUME TRIGGER
   ========================================================================== */
function initPrintResume() {
  const printBtn = document.getElementById('btn-print-resume');
  const heroResumeBtn = document.getElementById('btn-download-resume');

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (heroResumeBtn) {
    heroResumeBtn.addEventListener('click', (e) => {
      // If user clicks on desktop, smooth scroll to experience section
      // and offer print option
      const expSec = document.getElementById('experience');
      if (expSec) {
        expSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

/* ==========================================================================
   6. SMOOTH SCROLLING FOR IN-PAGE ANCHORS
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
