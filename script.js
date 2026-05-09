document.addEventListener('DOMContentLoaded', () => {
  // 1. Custom Cursor
  const cursor = document.querySelector('.cursor');
  if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  }

  // 2. Mobile Menu Toggle
  const menuBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // 3. Scroll Animations (Intersection Observer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // 4. Parallax Hero Background
  const heroBg = document.querySelector('.hero-bg');
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      const offset = window.scrollY * 0.3;
      heroBg.style.transform = `translateY(${offset}px)`;
    }
  });

  // 5. Countdown Timer (Placeholder)
  const timerEl = document.getElementById('timer');
  if (timerEl) {
    let time = 7 * 24 * 60 * 60; // 7 days in seconds
    const updateTimer = () => {
      const d = Math.floor(time / (3600 * 24));
      const h = Math.floor((time % (3600 * 24)) / 3600);
      const m = Math.floor((time % 3600) / 60);
      timerEl.textContent = `${String(d).padStart(2,'0')}:${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
      if (time > 0) time--;
    };
    updateTimer();
    setInterval(updateTimer, 1000);
  }
});