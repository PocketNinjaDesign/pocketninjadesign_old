const css = require('../styles/primary.scss');

import $ from 'jQuery';
import globals from './globals';

// Modules
import PanelScrollBase from './modules/panel/PanelScrollBase';
import PanelNavigation from './modules/panel/PanelNavigation';

// Services
import LoadPageContentService from './services/LoadPageContent.service';

// Panels
import PanelLandingPage from './panels/PanelLanding';
import PanelAbout from './panels/PanelAbout';
import PanelHome from './panels/PanelHome';
import PanelPortfolio from './panels/PanelPortfolio';
import PanelStyleguide from './panels/PanelStyleguide';



$(() => {
  // Create the panel Navigation
  let panelNav = new PanelNavigation('#nav');
  panelNav.init();

  // Create the landingpage script
  let LandingPage = new PanelLandingPage();
  LandingPage.init();
});