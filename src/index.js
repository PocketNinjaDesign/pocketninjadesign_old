const css = require('../styles/primary.scss');

import $ from 'jQuery';
import globals from './globals';

// Modules
import PanelScroll from './modules/PanelScroll';
import PanelNavigation from './modules/PanelNavigation';
import LoadPageContentService from './services/LoadPageContent.service';


// Panels
import PanelLanding from './panels/PanelLanding';
import PanelAbout from './panels/PanelAbout';
import PanelHome from './panels/PanelHome';
import PanelPortfolio from './panels/PanelPortfolio';



$(() => {
  // Create base scrolling mechanism
  let basePanel = new PanelScroll();
  basePanel.init();

  // save instance of scrolling to globals
  // for use by all scripts
  globals.setPanelScroll(basePanel);

  //
  // Top Left Navigation
  // Don't really like this bit, will need to clean this up!!!
  //
  let panelNavFunction = function(_panelName) {
    basePanel.goToPanel(_panelName);

    LoadPageContentService.getPage({
      panelName: _panelName,
      cleanContent: false
    });
  }

  let panelNav = new PanelNavigation('#nav', panelNavFunction);



  //
  // Panels pages
  //
  let Landing = new PanelLanding({
    panelNavFunc: panelNavFunction
  });
  Landing.init();
});