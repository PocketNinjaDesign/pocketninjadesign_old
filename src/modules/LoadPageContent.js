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
    }).then(function(response) {
      let $temp = $('<div/>').html(response.data);
      let $pagePanel = $('.' + options.pageName + ' .content');
      
      if(options.cleanContent) {
        $pagePanel.html('');
      }

      $pagePanel.append($temp.find('#content').html());
      $temp.remove();
    });
  }
};