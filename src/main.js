import './styles/base/reset.css'; 
import './styles/tokens/colors.css'; 
import './styles/themes/light.css'; 
import './styles/themes/dark.css'; 
import './styles/base/global.css'; 
import { loadComponent } from './utils/loadComponent.js';
import { initTheme } from './utils/themeManager.js'; 

async function init() {   
  initTheme(); 
  
  await loadComponent('/src/components/navbar/navbar.html', '#app');   
  await loadComponent('/src/pages/home/home.html', '#app'); 
}

init();