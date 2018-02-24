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



  /**
   * Load a page and returns a promise with a jqlite
   * object of a selected element from the page
   * 
   * @param {string} url :Path to the page to load
   * @param {string} element :element to load from the page 
   */
  loadElement(url, element) {
    return this.load(url).then(function(response) {
      return $.fn.findFromAjax(response.data, element);
    });
  }
};