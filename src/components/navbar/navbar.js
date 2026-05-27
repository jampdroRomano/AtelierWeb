import { toggleTheme } from '../../utils/themeManager.js';

export function initNavbar() {
  initThemeToggle();
  initMobileMenu();
}

function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  themeToggle.addEventListener('click', () => {
    toggleTheme();
  });
}

function initMobileMenu() {
  const menuToggle = document.querySelector('.navbar__menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    const icon = menuToggle.querySelector('.material-symbols-outlined');
    if (icon) {
      icon.textContent = isOpen ? 'close' : 'menu';
    }
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeMobileMenu(menuToggle, mobileMenu));
  });

  document.addEventListener('click', (event) => {
    if (!mobileMenu.classList.contains('open')) return;

    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedOnToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedOnToggle) {
      closeMobileMenu(menuToggle, mobileMenu);
    }
  });
}

function closeMobileMenu(menuToggle, mobileMenu) {
  mobileMenu.classList.remove('open');
  const icon = menuToggle.querySelector('.material-symbols-outlined');
  if (icon) {
    icon.textContent = 'menu';
  }
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
}
