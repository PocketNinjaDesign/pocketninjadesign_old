import globals from '../globals';
import $ from 'jQuery';
import Axios from 'axios';

export default {
  getPage: (pageName) => {
    return Axios({
      method:'get',
      url: `${globals.urlPrefix}/${pageName}.html`
    }).then(function(response) {
      let temp = $('<div/>').html(response.data);
      $('.' + pageName + ' .content').append(temp.find('#content').html());
      temp.remove();
    });
  }
};