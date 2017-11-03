import globals from '../globals';
import $ from 'jQuery';
import Axios from 'axios';

import PanelService from './Panel.service';
import LoaderAnim from '../modules/loaderAnims/LoaderAnim';

export default {
  getPage: (options) => {
    options = $.extend({}, {
      panelName: '',
      cleanContent: true
    }, options);

    const panelNameClass = `.${options.panelName}`;
    const URL = `${globals.urlPrefix}${options.panelName}.html`;

    // If Panel is loaded
    if(!PanelService.isPanelLoaded(options.panelName)) {
      let panelLoader = new LoaderAnim({
        $container: panelNameClass,
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
        let $pagePanel = $('.' + options.panelName + ' .content');

        if(options.cleanContent) {
          $pagePanel.html('');
        }

        let $wrapper = $(
          `<div style="border: 5px dotted #fff;">
          </div>`
        );

        $wrapper.append($temp.find('#content').html()).appendTo($pagePanel);
        $temp.remove();
        PanelService.setPanelLoadedState(options.panelName, true);

        panelLoader.remove();
      })
      .catch(function() {
        let $pagePanel = $('.' + options.panelName + ' .content');
        $pagePanel
          .html('')
          .append('<h1 style="font-size: 60px;">Sorry a template was attempted to load but nothing! :-(</h1>');
      });
    }

    return false;
  }
};