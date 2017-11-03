const css = require('../styles/primary.scss');

import $ from 'jQuery';
import Hammer from 'Hammerjs';
import globals from './globals';

// Modules
import PanelScrollBase from './modules/panel/PanelScrollBase';
import PanelNavigation from './modules/panel/PanelNavigation';

// Services
import LoadPageContentService from './services/LoadPageContent.service';

// Panels
import PanelLandingPage from './panels/PanelLanding';
import PanelAboutPage from './panels/PanelAbout';
import PanelHomePage from './panels/PanelHome';
import PanelPortfolioPage from './panels/PanelPortfolio';
import PanelStyleguidePage from './panels/PanelStyleguide';


// Quick Hammer test
// Will be using this on my carousel but also
// on anything really whacky :-D Will
// remove this block very soon
let panel = document.getElementById('panelLanding');
let test = new Hammer(panel);

test.on('swipe', function(e) {
  console.log('You swiped me');
  console.log(e);
});


$(() => {
  // Create the panel Navigation
  let panelNav = new PanelNavigation('#nav');
  panelNav.init();

  // Create the landingpage script
  let LandingPage = new PanelLandingPage();
  LandingPage.init();
});