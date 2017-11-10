const css = require('../styles/primary.scss');

import $ from 'jQuery';
import Hammer from 'Hammerjs';
import globals from './globals';

// Modules
import PrimaryNavigation from './modules/PrimaryNavigation';
import PanelScrollBase from './modules/panel/PanelScrollBase';

// Services
import LoadPageContentService from './services/LoadPageContent.service';

// Panels
import PanelBase from './panels/PanelBase';



$(() => {
  PanelBase.landing.init();
});