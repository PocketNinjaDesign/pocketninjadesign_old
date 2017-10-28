const css = require('../styles/primary.scss');

import $ from 'jQuery';
import PanelScroll from './modules/PanelScroll';
import PanelNavigation from './modules/PanelNavigation';
import LoadPageContentService from './services/LoadPageContent.service';

import LoaderAnim from './modules/loaderAnims/LoaderAnim';

$(() => {
  let basePanel = new PanelScroll();
  basePanel.init();

  let panelLoader = new LoaderAnim({
    positionType: 'fixed'
  });
  panelLoader.create();
  panelLoader.show();

  let panelNav = new PanelNavigation('#nav', (_panelName) => {
    basePanel.goToPanel(_panelName);

    LoadPageContentService.getPage({
      panelName: _panelName,
      cleanContent: false
    });

    panelLoader.setContainer(`.${_panelName}`);
    panelLoader.show();
  });
});