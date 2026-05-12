// ═══ SHARED NAVIGATION + UTILITIES ═══

export function initNav() {
  // Scroll effect
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // Mobile toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.classList.toggle('active');
    });
    // Close on link click
    links.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html') ||
        (currentPage === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Scroll-reveal animation
export function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Counter animation for stat cards
export function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = prefix + Math.floor(current) + suffix;
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

// Shared nav HTML
export function getNavHTML() {
  return `
  <nav class="nav" id="navbar">
    <div class="container">
      <a href="index.html" class="nav-logo">Elite Master Plan</a>
      <div class="nav-links" id="navLinks">
        <a href="index.html" class="nav-link">Home</a>
        <a href="battleplan.html" class="nav-link">Battle Plan</a>
        <a href="universities.html" class="nav-link">Universities</a>
        <a href="scholarships.html" class="nav-link">Scholarships</a>
        <a href="finance.html" class="nav-link">Finance</a>
        <a href="application.html" class="nav-link">Application</a>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}

export function getFooterHTML() {
  return `
  <footer class="footer">
    <div class="container">
      <p class="footer-quote">"Build → Share → Network → Consistency = Freedom"</p>
      <p class="footer-text">Shubham Mhaske's Elite Master Plan · 2026–2030 · Last updated May 2026</p>
    </div>
  </footer>`;
}
