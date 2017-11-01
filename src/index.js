const css = require('../styles/primary.scss');

import $ from 'jQuery';

// Modules
import PanelScroll from './modules/PanelScroll';
import PanelNavigation from './modules/PanelNavigation';
import LoadPageContentService from './services/LoadPageContent.service';
import LoaderAnim from './modules/loaderAnims/LoaderAnim';

// Panels
import PanelLanding from './panels/PanelLanding';
import PanelAbout from './panels/PanelAbout';
import PanelHome from './panels/PanelHome';
import PanelPortfolio from './panels/PanelPortfolio';



$(() => {
  let basePanel = new PanelScroll();
  basePanel.init();


  //
  // Loader
  //
  let panelLoader = new LoaderAnim({
    positionType: 'fixed'
  });
  panelLoader.create();
  panelLoader.show();


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

    panelLoader.setContainer(`.${_panelName}`);
    panelLoader.show();
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