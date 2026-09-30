(function() {
  'use strict';

  // ================================================================
  // 0. THEME TOGGLE
  // ================================================================
  const THEME_KEY = 'sp-theme-preference';
  const themeToggle = document.getElementById('themeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (saved === 'dark' || saved === 'light') applyTheme(saved);
    else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }
  }

  function toggleTheme(e) {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
    const btn = (e && e.currentTarget) ? e.currentTarget : themeToggle;
    if (btn) {
      btn.style.transform = 'rotate(360deg) scale(1.15)';
      setTimeout(() => { btn.style.transform = ''; }, 400);
    }
  }

  initTheme();
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (err) {}
    if (!saved) applyTheme(e.matches ? 'dark' : 'light');
  });

  // ================================================================
  // 1. PORTFOLIO DATA
  // ================================================================
  const projects = [
    { number: '01', category: 'SaaS / Education', title: 'School Management System',
      description: 'A full-stack School Management System designed to digitize and streamline core school operations. The system manages students, teachers, attendance, fees, academic records, notices, and administrative workflows through a centralized, user-friendly platform.',
      tags: ['PostgreSQL', 'JavaScript', 'ERP', 'UI/UX'], link: '#', demo: '#',
      image: 'https://img.sanishtech.com/u/599637777ddaa85fa20e395dfcb3e5c8.png', badge: 'ERP' },
    { number: '02', category: 'NGO / Social Impact', title: 'Lifeline Achham',
      description: 'A centralized NGO Management System designed to streamline organizational operations, including member management, blood donor records, digital ID cards, certificates, payments, and administrative workflows. Built to improve data management, verification, and overall operational efficiency for Lifeline Achham.',
      tags: ['Web', 'Accessibility', 'Community'], link: '#', demo: 'https://web-sudeep8.vercel.app',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=375&fit=crop&auto=format', badge: 'NGO' },
    { number: '03', category: 'Media / Publishing', title: 'News Media Platform',
      description: 'A modern digital news media platform designed to manage and publish news content efficiently. Features include article management, categories, authors and roles, advertisements, media uploads, and a centralized admin dashboard for streamlined editorial and content operations.',
      tags: ['TypeScript', 'Node.js', 'CMS'], link: '#', demo: '#',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=375&fit=crop&auto=format', badge: 'CMS' },
    { number: '04', category: 'AI / ML', title: 'AI-powered Applications',
      description: 'A collection of intelligent applications integrating AI and machine learning to solve real-world problems. Focused on building practical AI features such as automation, intelligent data processing, prediction, and AI-assisted user experiences.',
      tags: ['Python', 'ML', 'APIs'], link: '#', demo: '#',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=375&fit=crop&auto=format', badge: 'AI / ML' }
  ];

  const experiences = [
    { organization: 'Kinder Garden Academy', role: 'Administrator', date: '2025 — Present',
      description: 'Take technical ownership of a database-driven School ERP, managing system configuration, data, user access, student records, attendance, fees, and academic workflows. Lead troubleshooting, system support, and process optimization to ensure reliable and efficient digital school operations.',
      website: 'https://www.kindergardenacademy.edu.np',
      logo: 'https://play-lh.googleusercontent.com/9elBC4Ippx69hzVP7SXznr9GZpryM4JTzIDp8M6tAk2UA6W2Jxfe2wZwb1o7mHB6TjrbLGoxttLVTYYJ1La8' },
    { organization: 'Ingrails', role: 'Designer', date: '2024 — 2025',
      description: 'Design and develop engaging visual experiences across digital platforms, including UI/UX interfaces, branding, social media creatives, and marketing materials. Focus on creating clean, modern, and user-centered designs while maintaining strong visual consistency and brand identity.',
      website: 'https://ingrails.com',
      logo: 'https://ingrails.com/android-chrome-512x512.png' }
  ];

  const education = [
    { institution: 'Coventry University', degree: 'BSc Computer Science with AI', date: '2026 — Present',
      description: 'Studying core computer science foundations alongside specialised artificial intelligence modules — covering machine learning, data structures, algorithms, intelligent systems, and software engineering. Developing both theoretical understanding and practical skills to build AI-driven applications.',
      website: 'https://www.coventry.ac.uk/', initials: 'CU',
      logo: 'http://embedsocial.com/admin/source-cover-photo-link/instagram-business/17841400972544598.jpeg' },
    { institution: 'Prasadi Academy', degree: 'High School — Science', date: '2022 — 2024',
      description: 'Completed high school with a focus on Science and Biology, while developing a strong passion for Computer Science and technology. Alongside academics, explored programming, web development, design, and software projects, building a foundation for a future in technology and AI.',
      website: 'https://prasadi.edu.np', initials: 'PA',
      logo: 'https://play-lh.googleusercontent.com/50U8-YWsfNi9UWcVyoKz6AV7VEL4118Dpq_2haGeB2jhUcV5MBczsRDtpr767ew-ni-4Kj9qrJ0uxJ3EZell' }
  ];

  const writings = [
    { category: 'Technology', date: '2026', title: 'Learning AI in the age of AI-assisted development', excerpt: 'Thoughts on learning computer science while artificial intelligence rapidly changes software development.', link: '#' },
    { category: 'Journey', date: '2025', title: 'My journey into Computer Science', excerpt: 'From early curiosity to building my first projects — a personal reflection on finding my path.', link: '#' },
    { category: 'Building', date: '2025', title: 'Building useful software for real-world problems', excerpt: 'Why the most meaningful projects often start with listening rather than coding.', link: '#' }
  ];

  // ================================================================
  // 2. WELCOME SCREEN
  // ================================================================
  const greetings = [
    { text: 'Welcome', sub: 'English' },
    { text: 'Bienvenue', sub: 'Français' },
    { text: 'Willkommen', sub: 'Deutsch' },
    { text: 'Bienvenido', sub: 'Español' },
    { text: '欢迎', sub: '中文' },
    { text: 'स्वागत छ', sub: 'नेपाली' }
  ];

  const welcomeScreen = document.getElementById('welcomeScreen');
  const welcomeText = document.getElementById('welcomeText');
  const welcomeBarInner = document.getElementById('welcomeBarInner');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function runWelcome() {
    const totalDuration = 4200;
    const stepDuration = totalDuration / greetings.length;
    welcomeBarInner.style.transition = `transform ${totalDuration}ms linear`;
    requestAnimationFrame(() => { welcomeBarInner.style.transform = 'scaleX(1)'; });

    function showGreeting(i) {
      if (i >= greetings.length) {
        setTimeout(() => {
          welcomeScreen.classList.add('hidden');
          document.body.classList.remove('no-scroll');
          setTimeout(initReveal, 200);
          startHeroAnimations();
          startTypingGreeting();
        }, 400);
        return;
      }
      const g = greetings[i];
      welcomeText.innerHTML = `${g.text}<span class="lang-sub">${g.sub}</span>`;
      welcomeText.classList.remove('hide');
      void welcomeText.offsetWidth;
      welcomeText.classList.add('show');
      setTimeout(() => {
        welcomeText.classList.remove('show');
        welcomeText.classList.add('hide');
        setTimeout(() => showGreeting(i + 1), 280);
      }, stepDuration - 280);
    }
    showGreeting(0);
  }

  if (prefersReducedMotion) {
    welcomeScreen.classList.add('hidden');
    document.body.classList.remove('no-scroll');
    setTimeout(() => { initReveal(); startHeroAnimations(); startTypingGreeting(); }, 100);
  } else {
    runWelcome();
  }

  // ================================================================
  // 3. TYPING ANIMATION
  // ================================================================
  function startTypingGreeting() {
    const typedEl = document.getElementById('typedText');
    const container = document.getElementById('typingGreeting');
    if (!typedEl || !container) return;
    const fullText = "Hello, I'm";
    typedEl.textContent = '';
    if (prefersReducedMotion) { typedEl.textContent = fullText; container.classList.add('done'); return; }
    let i = 0;
    const typeSpeed = 95;
    setTimeout(function typeNext() {
      if (i < fullText.length) {
        typedEl.textContent += fullText.charAt(i);
        i++;
        setTimeout(typeNext, typeSpeed);
      } else {
        setTimeout(() => container.classList.add('done'), 700);
      }
    }, 350);
  }

  // ================================================================
  // 4. HERO ANIMATIONS
  // ================================================================
  function startHeroAnimations() {
    document.querySelectorAll('[data-animate="chars"]').forEach(el => {
      if (el.dataset.animated === 'true') return;
      el.dataset.animated = 'true';
      const text = el.textContent;
      el.textContent = '';
      [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${0.05 + i * 0.035}s`;
        el.appendChild(span);
      });
    });

    document.querySelectorAll('[data-animate="words"]').forEach(el => {
      if (el.dataset.animated === 'true') return;
      el.dataset.animated = 'true';
      const html = el.innerHTML;
      const temp = document.createElement('div');
      temp.innerHTML = html;
      function processNode(node) {
        if (node.nodeType === 3) {
          const words = node.textContent.split(/(\s+)/);
          const frag = document.createDocumentFragment();
          words.forEach(w => {
            if (w.trim() === '') frag.appendChild(document.createTextNode(w));
            else {
              const span = document.createElement('span');
              span.className = 'word';
              span.textContent = w;
              span.style.animationDelay = `${0.4 + Math.random() * 0.3}s`;
              frag.appendChild(span);
            }
          });
          node.parentNode.replaceChild(frag, node);
        } else if (node.nodeType === 1) {
          [...node.childNodes].forEach(processNode);
        }
      }
      [...temp.childNodes].forEach(processNode);
      el.innerHTML = temp.innerHTML;
    });
  }

  // ================================================================
  // 5. RENDER CONTENT
  // ================================================================
  const projectsGrid = document.getElementById('projectsGrid');
  if (projectsGrid) {
    projectsGrid.innerHTML = projects.map((p, idx) => {
      const imageHTML = p.image
        ? `<div class="project-image"><img src="${p.image}" alt="${p.title} preview" loading="lazy">${p.badge ? `<span class="image-badge">${p.badge}</span>` : ''}</div>`
        : `<div class="project-image"><div class="placeholder-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>No image</div></div>`;
      return `
      <article class="project-card reveal-scale" style="transition-delay: ${idx * 0.1}s">
        ${imageHTML}
        <div class="project-top">
          <span class="project-number">${p.number}</span>
          <span class="project-category">${p.category}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="project-actions">
          <a href="${p.demo}" class="project-link demo" aria-label="Live demo of ${p.title}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
            </svg>
            Demo
          </a>
          <a href="${p.link}" class="project-link" aria-label="View ${p.title} project" target="_blank" rel="noopener">
            View project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
          </a>
        </div>
      </article>`;
    }).join('');
  }

  function renderLogo(item) {
    if (item.logo && item.logo.trim() !== '') {
      return `<div class="timeline-logo"><img src="${item.logo}" alt="${item.organization || item.institution} logo" loading="lazy"></div>`;
    }
    return `<div class="timeline-logo">${item.initials}</div>`;
  }

  const expTimeline = document.getElementById('experienceTimeline');
  if (expTimeline) {
    expTimeline.innerHTML = experiences.map((e, idx) => `
      <div class="timeline-item reveal-left" style="transition-delay: ${idx * 0.15}s">
        <div class="timeline-dot"></div>
        <div class="timeline-header">
          ${renderLogo(e)}
          <div>
            <div class="timeline-title"><a href="${e.website}" target="_blank" rel="noopener">${e.organization}</a></div>
            <div class="timeline-role">${e.role}</div>
          </div>
        </div>
        <div class="timeline-meta"><span>${e.date}</span></div>
        <div class="timeline-content">
          <p>${e.description}</p>
          <a href="${e.website}" class="timeline-visit" target="_blank" rel="noopener">Visit website<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></a>
        </div>
      </div>`).join('');
  }

  const eduTimeline = document.getElementById('educationTimeline');
  if (eduTimeline) {
    eduTimeline.innerHTML = education.map((e, idx) => `
      <div class="timeline-item reveal-left" style="transition-delay: ${idx * 0.15}s">
        <div class="timeline-dot"></div>
        <div class="timeline-header">
          ${renderLogo(e)}
          <div>
            <div class="timeline-title"><a href="${e.website}" target="_blank" rel="noopener">${e.institution}</a></div>
            <div class="timeline-role">${e.degree}</div>
          </div>
        </div>
        <div class="timeline-meta"><span>${e.date}</span></div>
        <div class="timeline-content">
          <p>${e.description}</p>
          <a href="${e.website}" class="timeline-visit" target="_blank" rel="noopener">Visit website<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></a>
        </div>
      </div>`).join('');
  }

  const writingList = document.getElementById('writingList');
  if (writingList) {
    writingList.innerHTML = writings.map((w, idx) => `
      <a href="${w.link}" class="writing-item reveal-right" style="transition-delay: ${idx * 0.1}s">
        <div class="writing-meta">
          <div class="writing-category">${w.category}</div>
          <div>${w.date}</div>
        </div>
        <div class="writing-content">
          <h3>${w.title}</h3>
          <p>${w.excerpt}</p>
        </div>
        <div class="writing-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </a>`).join('');
  }

  // ================================================================
  // 6. AMBIENT CANVAS
  // ================================================================
  const canvas = document.getElementById('ambientCanvas');
  const ctx = canvas.getContext('2d');
  let width, height;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX, currentY = mouseY;
  let previousMouseX = mouseX, previousMouseY = mouseY;
  let velocityX = 0, velocityY = 0;
  let time = 0;
  let animationFrameId = null;
  let isTabVisible = true;
  let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  function getPalette() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return isDark
      ? { primary: [60, 100, 140], secondary: [80, 110, 150], tertiary: [40, 70, 110] }
      : { primary: [46, 107, 158], secondary: [110, 160, 200], tertiary: [190, 215, 235] };
  }

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawAmbient() {
    if (!ctx) return;
    currentX += (mouseX - currentX) * 0.055;
    currentY += (mouseY - currentY) * 0.055;
    velocityX = mouseX - previousMouseX;
    velocityY = mouseY - previousMouseY;
    previousMouseX = mouseX;
    previousMouseY = mouseY;
    const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
    const speedFactor = Math.min(speed / 30, 1);
    ctx.clearRect(0, 0, width, height);
    const palette = getPalette();
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    // In dark mode, keep opacity low so nothing glows white
    const opacityMul = isDark ? 0.5 : 1;

    const fields = [
      { x: 0.3,  y: 0.35, r: 0.42, speed: 0.00030, offset: 0, color: 'primary',   opacity: 0.055 * opacityMul },
      { x: 0.7,  y: 0.6,  r: 0.48, speed: 0.00040, offset: 2, color: 'secondary', opacity: 0.045 * opacityMul },
      { x: 0.5,  y: 0.25, r: 0.40, speed: 0.00035, offset: 4, color: 'tertiary',  opacity: 0.04 * opacityMul },
      { x: 0.2,  y: 0.7,  r: 0.46, speed: 0.00045, offset: 1, color: 'primary',   opacity: 0.035 * opacityMul },
      { x: 0.8,  y: 0.3,  r: 0.44, speed: 0.00038, offset: 3, color: 'secondary', opacity: 0.04 * opacityMul },
      { x: 0.55, y: 0.85, r: 0.38, speed: 0.00042, offset: 5, color: 'tertiary',  opacity: 0.035 * opacityMul }
    ];

    fields.forEach((field, i) => {
      const baseX = width * (field.x + Math.sin(time * field.speed + field.offset) * 0.12);
      const baseY = height * (field.y + Math.cos(time * field.speed * 0.8 + field.offset) * 0.1);
      const dx = (currentX - baseX) * 0.08;
      const dy = (currentY - baseY) * 0.08;
      const disturbance = speedFactor * 0.15;
      const finalX = baseX + dx * (0.3 + disturbance) + Math.sin(time * 0.001 + i) * 20 * (1 + disturbance);
      const finalY = baseY + dy * (0.3 + disturbance) + Math.cos(time * 0.0012 + i) * 20 * (1 + disturbance);
      const radius = Math.min(width, height) * field.r * (1 + Math.sin(time * 0.0005 + i) * 0.1 + disturbance * 0.2);
      const color = palette[field.color];
      const alpha = field.opacity * (0.7 + Math.sin(time * 0.0008 + i) * 0.3);
      const gradient = ctx.createRadialGradient(finalX, finalY, 0, finalX, finalY, radius);
      gradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`);
      gradient.addColorStop(0.5, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha * 0.4})`);
      gradient.addColorStop(1, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(finalX, finalY, radius, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let w = 0; w < 3; w++) {
      const paletteKey = w === 0 ? 'primary' : (w === 1 ? 'secondary' : 'tertiary');
      const waveColor = palette[paletteKey];
      const waveAlpha = 0.02 * (0.5 + speedFactor * 0.5) * opacityMul;
      const amplitude = 15 + w * 8 + speedFactor * 30;
      const frequency = 0.0015 + w * 0.0005;
      const yBase = height * (0.3 + w * 0.2) + (currentY - height * 0.5) * 0.08;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${waveColor[0]}, ${waveColor[1]}, ${waveColor[2]}, ${waveAlpha})`;
      ctx.lineWidth = 0.9 + w * 0.4;
      for (let x = 0; x <= width; x += 6) {
        const y = yBase +
                 Math.sin(x * frequency + time * 0.001 + w * 2) * amplitude +
                 Math.sin(x * frequency * 2.1 + time * 0.0008) * amplitude * 0.3 +
                 (currentY - height * 0.5) * 0.02 * Math.sin(x * 0.002);
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }

  function animationLoop(timestamp) {
    if (!isTabVisible) { animationFrameId = requestAnimationFrame(animationLoop); return; }
    time = timestamp;
    drawAmbient();
    animationFrameId = requestAnimationFrame(animationLoop);
  }

  function handleMouseMove(e) { mouseX = e.clientX; mouseY = e.clientY; }
  function handleMouseLeave() { mouseX = window.innerWidth / 2; mouseY = window.innerHeight / 2; }
  function handleVisibilityChange() {
    isTabVisible = !document.hidden;
    if (isTabVisible && !animationFrameId) animationFrameId = requestAnimationFrame(animationLoop);
  }

  function initCanvas() {
    resizeCanvas();
    window.addEventListener('resize', () => { dpr = Math.min(window.devicePixelRatio || 1, 2); resizeCanvas(); }, { passive: true });
    if (!isTouchDevice && !prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }
    document.addEventListener('visibilitychange', handleVisibilityChange);
    animationFrameId = requestAnimationFrame(animationLoop);
  }

  // ================================================================
  // 7. WAVY CURSOR
  // ================================================================
  const wavyCanvas = document.getElementById('wavyCursorCanvas');
  const wavyCtx = wavyCanvas.getContext('2d');
  const WAVY_CONFIG = {
    trailCount: 20, nodesPerLine: 50, baseSpring: 0.4, friction: 0.5,
    dampening: 0.25, tension: 0.98, hueFrequency: 0.0015, hueOffset: 285,
    strokeAlpha: 0.22, lineWidth: 1.2,
  };
  let wavyWidth, wavyHeight;
  let pointerWX = window.innerWidth / 2;
  let pointerWY = window.innerHeight / 2;
  let oscPhase = Math.random() * Math.PI * 2;
  let wavyLines = [];
  let wavyRafId = null;
  let wavyRunning = true;

  function resizeWavyCanvas() {
    wavyWidth = window.innerWidth;
    wavyHeight = window.innerHeight;
    wavyCanvas.width = wavyWidth * dpr;
    wavyCanvas.height = wavyHeight * dpr;
    wavyCanvas.style.width = wavyWidth + 'px';
    wavyCanvas.style.height = wavyHeight + 'px';
    wavyCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function WavyNode(x, y) { this.x = x; this.y = y; this.vx = 0; this.vy = 0; }
  function WavyLine(springBase) {
    this.spring = springBase + (0.1 * Math.random() - 0.02);
    this.friction = WAVY_CONFIG.friction + (0.01 * Math.random() - 0.002);
    this.nodes = [];
    for (let i = 0; i < WAVY_CONFIG.nodesPerLine; i++) this.nodes.push(new WavyNode(pointerWX, pointerWY));
  }

  WavyLine.prototype.update = function() {
    let spring = this.spring;
    let node = this.nodes[0];
    node.vx += (pointerWX - node.x) * spring;
    node.vy += (pointerWY - node.y) * spring;
    for (let i = 0, len = this.nodes.length; i < len; i++) {
      node = this.nodes[i];
      if (i > 0) {
        const prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * WAVY_CONFIG.dampening;
        node.vy += prev.vy * WAVY_CONFIG.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= WAVY_CONFIG.tension;
    }
  };

  WavyLine.prototype.draw = function(hue, alpha) {
    if (this.nodes.length < 3) return;
    const nodes = this.nodes;
    wavyCtx.beginPath();
    wavyCtx.moveTo(nodes[0].x, nodes[0].y);
    for (let i = 1; i < nodes.length - 2; i++) {
      const cur = nodes[i], next = nodes[i + 1];
      wavyCtx.quadraticCurveTo(cur.x, cur.y, 0.5 * (cur.x + next.x), 0.5 * (cur.y + next.y));
    }
    if (nodes.length > 2) {
      const i = nodes.length - 2;
      wavyCtx.quadraticCurveTo(nodes[i].x, nodes[i].y, nodes[i + 1].x, nodes[i + 1].y);
    }
    wavyCtx.strokeStyle = `hsla(${hue}, 50%, 55%, ${alpha})`;
    wavyCtx.lineWidth = WAVY_CONFIG.lineWidth;
    wavyCtx.stroke();
    wavyCtx.closePath();
  };

  function initWavyLines() {
    wavyLines = [];
    for (let i = 0; i < WAVY_CONFIG.trailCount; i++) {
      wavyLines.push(new WavyLine(0.4 + (i / WAVY_CONFIG.trailCount) * 0.025));
    }
  }

  function wavyRender() {
    if (!wavyRunning) return;
    wavyCtx.globalCompositeOperation = 'source-over';
    wavyCtx.clearRect(0, 0, wavyWidth, wavyHeight);
    wavyCtx.globalCompositeOperation = 'lighter';
    oscPhase += WAVY_CONFIG.hueFrequency;
    const hue = Math.round(WAVY_CONFIG.hueOffset + Math.sin(oscPhase) * 70);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const alpha = isDark ? 0.12 : WAVY_CONFIG.strokeAlpha;
    for (let i = 0; i < wavyLines.length; i++) {
      wavyLines[i].update();
      wavyLines[i].draw(hue, alpha);
    }
    wavyRafId = requestAnimationFrame(wavyRender);
  }

  function handleWavyPointer(e) {
    if (e.clientX !== undefined && e.clientY !== undefined) { pointerWX = e.clientX; pointerWY = e.clientY; }
    else if (e.touches && e.touches.length > 0) { pointerWX = e.touches[0].clientX; pointerWY = e.touches[0].clientY; }
  }

  function handleWavyVisibility() {
    if (document.hidden) {
      wavyRunning = false;
      if (wavyRafId) { cancelAnimationFrame(wavyRafId); wavyRafId = null; }
    } else if (!wavyRunning) {
      wavyRunning = true;
      initWavyLines();
      wavyRender();
    }
  }

  function initWavyCursor() {
    if (prefersReducedMotion) return;
    resizeWavyCanvas();
    pointerWX = wavyWidth / 2;
    pointerWY = wavyHeight / 2;
    initWavyLines();
    window.addEventListener('resize', () => { dpr = Math.min(window.devicePixelRatio || 1, 2); resizeWavyCanvas(); initWavyLines(); }, { passive: true });
    window.addEventListener('mousemove', handleWavyPointer, { passive: true });
    window.addEventListener('touchmove', handleWavyPointer, { passive: true });
    window.addEventListener('touchstart', handleWavyPointer, { passive: true });
    document.addEventListener('visibilitychange', handleWavyVisibility);
    wavyRender();
  }

  // ================================================================
  // 8. LOGIN MODAL
  // ================================================================
  const loginModal = document.getElementById('loginModal');
  const loginBtn = document.getElementById('loginBtn');
  const mobileLoginBtn = document.getElementById('mobileLoginBtn');
  const modalClose = document.getElementById('modalClose');
  const loginForm = document.getElementById('loginForm');
  const signupLink = document.getElementById('signupLink');

  function openLogin() {
    if (!loginModal) return;
    loginModal.classList.add('open');
    document.body.classList.add('no-scroll');
    setTimeout(() => { const f = document.getElementById('loginEmail'); if (f) f.focus(); }, 300);
  }

  function closeLogin() {
    if (!loginModal) return;
    loginModal.classList.remove('open');
    if (welcomeScreen.classList.contains('hidden')) document.body.classList.remove('no-scroll');
  }

  if (loginBtn) loginBtn.addEventListener('click', openLogin);
  if (mobileLoginBtn) mobileLoginBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    openLogin();
  });
  if (modalClose) modalClose.addEventListener('click', closeLogin);
  if (loginModal) loginModal.addEventListener('click', (e) => { if (e.target === loginModal) closeLogin(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && loginModal && loginModal.classList.contains('open')) closeLogin();
  });

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('loginEmail');
      const passInput = document.getElementById('loginPassword');
      if (emailInput && passInput && emailInput.value.trim() && passInput.value.trim()) {
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        if (submitBtn) {
          const orig = submitBtn.innerHTML;
          submitBtn.textContent = 'Logging in…';
          setTimeout(() => { closeLogin(); loginForm.reset(); submitBtn.innerHTML = orig; }, 700);
        }
      }
    });
  }

  if (signupLink) signupLink.addEventListener('click', (e) => e.preventDefault());

  // ================================================================
  // 9. NAVIGATION
  // ================================================================
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  }

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }

  // ================================================================
  // 10. SCROLL REVEAL
  // ================================================================
  let revealObserverInstance = null;
  function initReveal() {
    if (revealObserverInstance) return;
    const revealElements = document.querySelectorAll('.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible), .reveal-scale:not(.visible)');
    if (!revealElements.length) return;
    revealObserverInstance = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserverInstance.unobserve(entry.target);
          if (entry.target.id === 'accentWord' || entry.target.querySelector('#accentWord')) {
            const word = document.getElementById('accentWord');
            if (word) word.classList.add('visible');
          }
        }
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 });
    revealElements.forEach(el => revealObserverInstance.observe(el));
  }

  // ================================================================
  // 11. CONTACT FORM
  // ================================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formMessage = document.getElementById('formMessage');

    function validateEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
    function validateField(input, errorEl, condition) {
      if (condition) { errorEl.classList.remove('visible'); input.style.borderColor = ''; return true; }
      errorEl.classList.add('visible'); input.style.borderColor = '#b33e3e'; return false;
    }

    nameInput.addEventListener('input', () => validateField(nameInput, nameError, nameInput.value.trim().length > 0));
    emailInput.addEventListener('input', () => validateField(emailInput, emailError, validateEmail(emailInput.value.trim())));
    messageInput.addEventListener('input', () => validateField(messageInput, messageError, messageInput.value.trim().length > 0));

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isNameValid = validateField(nameInput, nameError, nameInput.value.trim().length > 0);
      const isEmailValid = validateField(emailInput, emailError, validateEmail(emailInput.value.trim()));
      const isMessageValid = validateField(messageInput, messageError, messageInput.value.trim().length > 0);
      if (isNameValid && isEmailValid && isMessageValid) {
        formMessage.classList.add('visible');
        contactForm.reset();
        nameInput.style.borderColor = ''; emailInput.style.borderColor = ''; messageInput.style.borderColor = '';
        setTimeout(() => formMessage.classList.remove('visible'), 5000);
      }
    });
  }

  // ================================================================
  // 12. BACK TO TOP
  // ================================================================
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => { backToTop.classList.toggle('visible', window.scrollY > 700); }, { passive: true });
    backToTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  // ================================================================
  // 13. BUTTON RIPPLE (light mode only)
  // ================================================================
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty('--x', ((e.clientX - rect.left) / rect.width) * 100 + '%');
      btn.style.setProperty('--y', ((e.clientY - rect.top) / rect.height) * 100 + '%');
    });
  });

  // ================================================================
  // 14. TECH CHIP MOUSE TRACKING
  // ================================================================
  document.querySelectorAll('.tech-chip').forEach(chip => {
    chip.addEventListener('mousemove', (e) => {
      const rect = chip.getBoundingClientRect();
      chip.style.setProperty('--x', ((e.clientX - rect.left) / rect.width) * 100 + '%');
      chip.style.setProperty('--y', ((e.clientY - rect.top) / rect.height) * 100 + '%');
    });
  });

  // ================================================================
  // 15. INIT
  // ================================================================
  initCanvas();
  initWavyCursor();
  if (prefersReducedMotion) setTimeout(initReveal, 100);

  window.addEventListener('beforeunload', () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    if (wavyRafId) cancelAnimationFrame(wavyRafId);
  });

})();