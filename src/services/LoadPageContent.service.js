import globals from '../globals';
import $ from 'jQuery';
import Axios from 'axios';

import LoaderAnim from '../modules/loaderAnims/LoaderAnim';
import PanelBase from '../panels/PanelBase';
import PanelService from './Panel.service';

export default {

  getPage(options) {
    options = $.extend({}, {
      panelName: '',
      cleanContent: true
    }, options);

    const PANEL_NAME = options.panelName;
    const PANEL_NAME_CLASS = `.${PANEL_NAME}`;
    const URL = `${globals.urlPrefix}${PANEL_NAME}.html`;

    // If Panel is loaded
    if(!PanelService.isPanelLoaded(PANEL_NAME)) {

      // Create new loaderAnim
      let panelLoader = new LoaderAnim({
        $container: PANEL_NAME_CLASS,
        positionType: 'fixed'
      });
      panelLoader.create();
      panelLoader.show();

      return Axios({
        method:'get',
        url: URL
      })
      .then(function(response) {
        let $temp = $('<div/>').html(response.data);
        let $pagePanel = $('.' + PANEL_NAME + ' .content');

        if(options.cleanContent) {
          $pagePanel.html('');
        }

        let $wrapper = $(
          `<div style="border: 5px dotted #fff;"></div>`
        );

        $wrapper
          .append($temp.find('#content').html())
          .appendTo($pagePanel);

        $temp.remove();

        // Initialise the page script if the function exists
        if(PanelBase[PANEL_NAME].init) {
          PanelBase[PANEL_NAME].init();
        }

        // Set the loaded state of the panel
        PanelService.setPanelLoadedState(PANEL_NAME, true);

        // Remove Panel animation
        panelLoader.remove();
      })
      .catch(function() {
        let $pagePanel = $('.' + PANEL_NAME + ' .content');
        $pagePanel
          .html('')
          .append('<h1 style="font-size: 60px;">Sorry a template was attempted to load but nothing! :-(</h1>');

        // Remove Panel animation
        panelLoader.remove();
      });
    }

    return false;
  }
};