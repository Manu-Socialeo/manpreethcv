/**
 * NORDEN / HANSSEN — MINIMAL PORTFOLIO APP CONTROLLER
 * Full interactive controller for the Website View layout, Menu Dropdown,
 * Theme toggling, Tab routing, and Dynamic Certifications registry.
 */

(function() {
  'use strict';

  // --- STATE ---
  const state = {
    theme: localStorage.getItem('norden-theme') || 'light',
    currentTab: 'home',
    activeProfile: 'hanssen',
    slideIndex: 0,
    slides: [
      { img: 'assets/images/hanssen_selected_work.jpg', badge: 'Selected Work' },
      { img: 'assets/images/hanssen_darkness_1.jpg', badge: 'Darkness Editorial' },
      { img: 'assets/images/hanssen_beige.jpg', badge: 'Beige Collection' }
    ]
  };

  // --- DOM ELEMENTS ---
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const dropdownThemeToggle = document.getElementById('dropdown-theme-toggle');
  const menuDropdownOverlay = document.getElementById('menu-dropdown-overlay');
  const menuDropdownToggle = document.getElementById('menu-dropdown-toggle');
  const menuDropdownClose = document.getElementById('menu-dropdown-close');
  const websiteToast = document.getElementById('website-toast');
  const heroSliderImg = document.getElementById('hero-slider-img');
  const heroBadgeLabel = document.getElementById('hero-badge-label');
  const sliderDots = document.querySelectorAll('.slider-dot');
  const certListContainer = document.getElementById('cert-list-container');
  const certPreviewImg = document.getElementById('cert-preview-img');
  const certBadgeLabel = document.getElementById('cert-badge-label');
  const certCountText = document.getElementById('cert-count-text');

  // --- THEME MANAGEMENT ---
  function applyTheme(theme) {
    state.theme = theme;
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('norden-theme', theme);

    const faviconEl = document.getElementById('dynamic-favicon');
    if (faviconEl) {
      faviconEl.href = theme === 'dark' 
        ? 'assets/images/favicon_dark.webp' 
        : 'assets/images/favicon_light.webp';
    }
  }

  function toggleTheme() {
    const nextTheme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
    showToast(`Switched to ${nextTheme.toUpperCase()} mode`);
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (dropdownThemeToggle) dropdownThemeToggle.addEventListener('click', toggleTheme);

  // --- TOAST NOTIFICATIONS ---
  function showToast(msg) {
    if (!websiteToast) return;
    websiteToast.textContent = msg;
    websiteToast.classList.add('show');
    setTimeout(() => {
      websiteToast.classList.remove('show');
    }, 2800);
  }

  // --- MENU DROPDOWN CONTROLLER (Matches User Screenshot) ---
  function openMenuDropdown() {
    if (menuDropdownOverlay) {
      menuDropdownOverlay.classList.add('open');
    }
  }

  function closeMenuDropdown() {
    if (menuDropdownOverlay) {
      menuDropdownOverlay.classList.remove('open');
    }
  }

  function toggleMenuDropdown(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (menuDropdownOverlay) {
      const isOpen = menuDropdownOverlay.classList.contains('open');
      if (isOpen) {
        closeMenuDropdown();
      } else {
        openMenuDropdown();
      }
    }
  }

  if (menuDropdownToggle) {
    menuDropdownToggle.onclick = toggleMenuDropdown;
  }

  if (menuDropdownClose) {
    menuDropdownClose.onclick = function(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      closeMenuDropdown();
    };
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (menuDropdownOverlay && menuDropdownOverlay.classList.contains('open')) {
      const isClickInside = menuDropdownOverlay.contains(e.target);
      const isClickToggle = menuDropdownToggle && (menuDropdownToggle === e.target || menuDropdownToggle.contains(e.target));
      if (!isClickInside && !isClickToggle) {
        closeMenuDropdown();
      }
    }
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenuDropdown();
  });

  // --- TAB ROUTING ---
  function switchTab(tabId) {
    state.currentTab = tabId;

    // Switch view containers
    document.querySelectorAll('.website-view-tab').forEach(tab => {
      tab.classList.remove('active');
    });

    const targetTab = document.getElementById(`tab-${tabId}`);
    if (targetTab) {
      targetTab.classList.add('active');
    }

    // Update active nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
      if (link.getAttribute('data-tab') === tabId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update active dropdown items
    document.querySelectorAll('.menu-dropdown-item').forEach(item => {
      if (item.getAttribute('data-tab') === tabId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Close dropdown on navigation
    closeMenuDropdown();

    // Smoothly scroll window
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Global click delegate for [data-tab]
  document.addEventListener('click', (e) => {
    const tabTrigger = e.target.closest('[data-tab]');
    if (tabTrigger) {
      const tabName = tabTrigger.getAttribute('data-tab');
      if (tabName) {
        e.preventDefault();
        switchTab(tabName);
      }
    }
  });

  // --- SLIDER CONTROLLER (Selected Work) ---
  function setSlide(index) {
    state.slideIndex = index;
    const cur = state.slides[index];
    if (heroSliderImg && cur) {
      heroSliderImg.style.opacity = '0.4';
      setTimeout(() => {
        heroSliderImg.src = cur.img;
        heroSliderImg.style.opacity = '1';
      }, 150);
    }
    if (heroBadgeLabel && cur) heroBadgeLabel.textContent = cur.badge;

    sliderDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  }

  const prevBtn = document.getElementById('slider-prev-btn');
  const nextBtn = document.getElementById('slider-next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const nextIdx = (state.slideIndex - 1 + state.slides.length) % state.slides.length;
      setSlide(nextIdx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const nextIdx = (state.slideIndex + 1) % state.slides.length;
      setSlide(nextIdx);
    });
  }

  sliderDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIdx = parseInt(dot.getAttribute('data-slide'), 10);
      if (!isNaN(slideIdx)) setSlide(slideIdx);
    });
  });

  // --- DYNAMIC CERTIFICATIONS RENDERER ---
  function renderCertifications() {
    if (!certListContainer) return;

    const certs = (window.SITE_DATA && window.SITE_DATA.certifications) || [];

    if (certCountText) {
      certCountText.textContent = `${certs.length} Verified`;
    }

    certListContainer.innerHTML = '';

    certs.forEach((cert, idx) => {
      const card = document.createElement('div');
      card.className = `cert-item-card ${idx === 0 ? 'selected' : ''}`;
      card.setAttribute('data-cert-id', cert.id);

      const skillsHtml = (cert.skills || []).map(skill => `<span class="cert-skill-tag">${skill}</span>`).join('');

      const logoHtml = (cert.issuer.includes('Anthropic') || cert.issuer.includes('Claude'))
        ? `<span style="color:#d47656; font-size:20px; font-weight:900; line-height:1;">✱</span>`
        : (cert.issuer.includes('Canva')
          ? `<span style="color:#00C4CC; font-size:20px; font-weight:900; font-style:italic; font-family:'DM Sans', sans-serif;">C</span>`
          : (cert.issuer.includes('Notion') ? `<span style="font-weight:900; font-size:18px; font-family:'DM Sans', sans-serif;">N</span>` : '★'));

      card.innerHTML = `
        <div class="cert-item-top">
          <div class="cert-issuer-group">
            <div class="cert-issuer-logo">
              ${logoHtml}
            </div>
            <div class="cert-titles">
              <h3>${cert.title}</h3>
              <p>${cert.issuer} • ${cert.course}</p>
            </div>
          </div>
          <span class="cert-status-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            ${cert.status}
          </span>
        </div>

        <div class="cert-skills-tags">
          ${skillsHtml}
        </div>

        <div class="cert-meta-row">
          <div class="cert-meta-item">
            <strong>Issued:</strong> ${cert.issueDate}
          </div>
          <div class="cert-meta-item">
            <strong>Valid Until:</strong> ${cert.expiryDate}
          </div>
          <div class="cert-meta-item">
            <strong>Credential ID:</strong> ${cert.credentialId}
          </div>
        </div>

        <div class="cert-actions-row">
          <span style="font-size:11.5px; color:var(--text-secondary);">Issued to: <strong>${cert.recipient}</strong></span>
          <a href="${cert.verifyUrl}" target="_blank" class="cert-verify-link">
            <span>Verify on ${cert.platform}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        document.querySelectorAll('.cert-item-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        if (certPreviewImg && cert.image) {
          certPreviewImg.src = cert.image;
        }
        if (certBadgeLabel) {
          certBadgeLabel.textContent = `${cert.title} • ${cert.platform}`;
        }
      });

      certListContainer.appendChild(card);
    });

    // Set initial preview
    if (certs.length > 0 && certPreviewImg && certs[0].image) {
      certPreviewImg.src = certs[0].image;
    }
    if (certs.length > 0 && certBadgeLabel) {
      certBadgeLabel.textContent = `${certs[0].title} • ${certs[0].platform}`;
    }
  }

  // --- PROFILE SWITCHER (Hanssen View vs. Manpreeth View) ---
  const toggleHanssenBtn = document.getElementById('profile-toggle-hanssen');
  const toggleManuBtn = document.getElementById('profile-toggle-manu');
  const brandText = document.getElementById('nav-brand-text');
  const dropdownBrandText = document.getElementById('dropdown-brand-text');
  const creatorAvatar = document.getElementById('creator-avatar');
  const creatorName = document.getElementById('creator-name');
  const creatorRole = document.getElementById('creator-role');
  const creatorBio = document.getElementById('creator-bio');

  function setProfile(profile) {
    state.activeProfile = profile;
    if (toggleHanssenBtn) toggleHanssenBtn.classList.toggle('active', profile === 'hanssen');
    if (toggleManuBtn) toggleManuBtn.classList.toggle('active', profile === 'manu');

    if (profile === 'manu') {
      if (brandText) brandText.textContent = 'Manpreeth';
      if (dropdownBrandText) dropdownBrandText.textContent = 'Manpreeth';
      if (creatorAvatar) creatorAvatar.src = 'assets/images/manu_photo.png';
      if (creatorName) creatorName.textContent = 'Manpreeth N';
      if (creatorRole) creatorRole.textContent = 'AI Generalist & Full-Stack Developer';
      if (creatorBio) creatorBio.textContent = 'Founder at Socialeo. Building autonomous AI automation systems, high-converting web applications in Framer & React, and bespoke software solutions.';
      showToast('Switched to Manpreeth Founder View');
    } else {
      if (brandText) brandText.textContent = 'Norden';
      if (dropdownBrandText) dropdownBrandText.textContent = 'Norden';
      if (creatorAvatar) creatorAvatar.src = 'assets/images/ema_hanssen_avatar.jpg';
      if (creatorName) creatorName.textContent = 'Ema Hanssen';
      if (creatorRole) creatorRole.textContent = 'Photographer & Art Director';
      if (creatorBio) creatorBio.textContent = "I'm Ema, a photographer based in Prague. I capture authentic moments and tell stories through my images, blending creativity and emotion in each shot.";
      showToast('Switched to Hanssen View');
    }
  }

  if (toggleHanssenBtn) toggleHanssenBtn.addEventListener('click', () => setProfile('hanssen'));
  if (toggleManuBtn) toggleManuBtn.addEventListener('click', () => setProfile('manu'));

  // --- CONTACT FORM HANDLER ---
  const contactForm = document.getElementById('website-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('form-name');
      const name = nameInput ? nameInput.value.trim() : 'Friend';
      showToast(`Thank you, ${name}! Your inquiry has been dispatched.`);
      contactForm.reset();
    });
  }

  // --- INITIALIZE ---
  applyTheme(state.theme);
  renderCertifications();

})();
