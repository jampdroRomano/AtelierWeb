import './styles/base/reset.css';
import './styles/tokens/colors.css';
import './styles/tokens/typography.css';
import './styles/themes/light.css';
import './styles/themes/dark.css';
import './styles/base/global.css';
import './pages/home/sections/services.css'
import { initTheme } from './utils/themeManager.js';
import { startSlideshow } from './utils/services.js'

function init() {
  initTheme();
  startSlideshow();
}

init();
