const css = require('../styles/primary.scss');

import $ from 'jQuery';
import PanelScroll from './modules/PanelScroll';
import PanelNavigation from './modules/PanelNavigation';
import PageAjax from './services/LoadPageContent';

$(() => {
  let basePanel = new PanelScroll();
  basePanel.init();

  let panelNav = new PanelNavigation('#nav', (_panelName) => {
    basePanel.goToPanel(_panelName);

    PageAjax.getPage({
      pageName: _panelName,
      cleanContent: false
    });
  });
});