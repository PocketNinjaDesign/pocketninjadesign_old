import Axios from 'axios';

// import $ from '../jqlite.extends';

export default {
  load(url) {
    return Axios({
      method: 'get',
      url,
    }).then(response => response);
  },

  /**
   * Load a page and returns a promise with a jqlite
   * object of a selected element from the page
   *
   * @param {string} url :Path to the page to load
   * @param {string} element :element to load from the page
   */
  loadElement(url, element) {
    return this.load(url).then((response) => {
      const temp = document.createElement('div');
      temp.innerHTML = response.data;
      return temp.querySelector(element);
      // return $.fn.findFromAjax(response.data, element);
    });
  },
};