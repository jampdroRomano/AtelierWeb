import './styles/base/reset.css';
import './styles/tokens/colors.css';
import './styles/tokens/typography.css';
import './styles/themes/light.css';
import './styles/themes/dark.css';
import './styles/base/global.css';
import './pages/home/sections/services.css'
import './pages/home/sections/sobre.css'
import './pages/home/sections/galeria.css'
import './pages/home/sections/home.css'
import './pages/home/sections/testimonials.css';
import './pages/home/sections/contato.css';
import './pages/home/sections/footer.css';
import './components/navbar/navbar.css';

import { initTheme } from './utils/themeManager.js';
import { initNavbar } from './components/navbar/navbar.js';
import { startSlideshow } from './utils/services.js';
import { initTestimonials } from './utils/testimonials.js';
import { initContactForm } from './utils/contactForm.js';

function init() {
  initTheme();
  initNavbar();
  startSlideshow();
  initTestimonials();
  initContactForm();
}

init();
