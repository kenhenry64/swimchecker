const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-nav-toggle]');
const links = document.querySelector('[data-nav-links]');

function updateHeader() {
  header?.classList.toggle('is-scrolled', window.scrollY > 12);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

toggle?.addEventListener('click', () => {
  const isOpen = links.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

links?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    links.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  }
});

const items = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

items.forEach((item) => observer.observe(item));
