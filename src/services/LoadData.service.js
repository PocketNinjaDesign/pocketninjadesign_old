import $ from '../jqlite.extends';
import Axios from 'axios';

export default {
  load(url) {
    return Axios({
      method:'get',
      url: url,
    })
    .then(function(response) {
      return response;
    });
  },

  loadElement(url, element) {
    return this.load(url).then(function(response) {
      return $.fn.findFromAjax(response.data, '#pageContent');
    });
  }
};