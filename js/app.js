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
        ? 'assets/images/favicon_dark.webp' 
        : 'assets/images/favicon_light.webp';
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
    card.addEventListener('click', () => {
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
    modalSlot.innerHTML = `
      <div style="margin-bottom: 16px;">
        <span class="tag" style="margin-bottom: 8px; display: inline-block;">${p.category}</span>
        <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 4px;">${p.title}</h2>
        <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">${p.duration}</span>
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
