const css = require('../styles/primary.scss');

import $ from 'jQuery';
import PanelScroll from './modules/PanelScroll';
import PanelNavigation from './modules/PanelNavigation';

$(() => {
  let basePanel = new PanelScroll();
  basePanel.init();

  let panelNav = new PanelNavigation('#nav', (_panelName) => {
    basePanel.goToPanel(_panelName);
  });
});