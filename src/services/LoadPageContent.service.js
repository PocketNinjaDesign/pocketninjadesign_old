import globals from '../globals';
import $ from 'jQuery';
import Axios from 'axios';
import PanelService from './Panel.service';

export default {
  getPage: (options) => {
    options = $.extend({}, {
      panelName: '',
      cleanContent: true
    }, options);

    const panelNameClass = `.${options.panelName}`;

    // If Panel is loaded
    if(!PanelService.isPanelLoaded(options.panelName)) {
      return Axios({
        method:'get',
        url: `${globals.urlPrefix}/${options.panelName}.html`
      })
      .then(function(response) {
        let $temp = $('<div/>').html(response.data);
        let $pagePanel = $('.' + options.panelName + ' .content');
  
        if(options.cleanContent) {
          $pagePanel.html('');
        }
  
        let $wrapper = $(
          `<div style="border: 5px dotted #fff;">
            <h1 style="font-size: 60px;">Ajax Pulled Content</h1>
          </div>`
        );
  
        $wrapper.append($temp.find('#content').html()).appendTo($pagePanel);
        $temp.remove();
        PanelService.setPanelLoaded(options.panelName);
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