import globals from '../globals';
import $ from 'jQuery';
import Axios from 'axios';

export default {
  getPage: (options) => {
    options = $.extend({}, {
      pageName: '',
      cleanContent: true
    }, options);

    return Axios({
      method:'get',
      url: `${globals.urlPrefix}/${options.pageName}.html`
    })
    .then(function(response) {
      let $temp = $('<div/>').html(response.data);
      let $pagePanel = $('.' + options.pageName + ' .content');
      
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
    })
    .catch(function() {
      let $pagePanel = $('.' + options.pageName + ' .content');
      $pagePanel.append('<h1 style="font-size: 60px;">Sorry a template was attempted to load but nothing! :-(</h1>');
    });
  }
};