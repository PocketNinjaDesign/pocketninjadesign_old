import $ from 'jqlite';

/**
 * @example
 * // returns jqlite object using class
 * $.fn.findFromAjax(response.data, '.some-class-name');
 * @example
 * // returns jqlite object using id
 * $.fn.findFromAjax(response.data, '.someId');
 * @example
 * // return jqlite object using element name
 * $.fn.findFromAjax(response.data, 'span')
 *
 * @param {string} responseData Ajax data retreived
 * @param {string} elementQuery element(s) to search for
 * @description Returns a jqlite object from ajax data containing markup
 */
$.fn.findFromAjax = (responseData, elementQuery) => (
  $('<div />').html(responseData).findLite(elementQuery)
);


/**
 * @param {string} selector any 'element', '.class' or '#id'
 * @returns {object} jqlite objects
 * @description Finds 1 or many elements within a single element
 */
$.fn.findLite = function (selector) {
  return $(this[0].querySelectorAll(selector));
};


$.fn.getSizeFromHidden = function () {
  let sizes = {};
  const $this = $(this);
  const $parent = $this.parent();
  const $hiddenElement = $('<div style="position: absolute; visibility: hidden;"></div>');

  $hiddenElement.appendTo('body');
  $this.appendTo($hiddenElement);

  sizes = {
    width: $this.innerWidth(),
    height: $this.innerHeight(),
  };

  $this.appendTo($parent);
  $hiddenElement.remove();

  return sizes;
};


$.fn.innerWidth = function () {
  return this[0].clientWidth;
};


$.fn.innerHeight = function () {
  return this[0].clientHeight;
};


$.fn.outerWidth = function () {
  return this[0].offsetWidth;
};


$.fn.outerHeight = function () {
  return this[0].offsetHeight;
};


$.fn.setSizeFromHidden = function () {
  for (let i = 0; i < this.length; i += 1) {
    const sizes = $(this[i]).getSizeFromHidden();
    $(this[i]).css({
      width: `${sizes.width / 16}em`,
      height: `${sizes.height / 16}em`,
    });
  }

  return this;
};


$.fn.scrollLeft = function () {
  const docScrollLeft = document.documentElement.scrollLeft;
  const docClientLeft = document.documentElement.clientLeft;
  return (this[0].scrollLeft || docScrollLeft) - (docClientLeft || 0);
};


$.fn.scrollTop = function () {
  const docScrollTop = document.documentElement.scrollTop;
  const docClientTop = document.documentElement.clientTop;
  return (this[0].scrollTop || docScrollTop) - (docClientTop || 0);
};


/**
 * Code taken from http://youmightnotneedjquery.com/ works just like the
 * standard $.extend from jQuery
 * @param {Object} _out 
 */
$.extend = function (_out) {
  const out = _out || {};

  for (let i = 1; i < arguments.length; i += 1) {
    const obj = arguments[i];

    if (!obj) {
      continue;
    }

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          out[key] = $.extend(out[key], obj[key]);
        } else {
          out[key] = obj[key];
        }
      }
    }
  }

  return out;
};

export default $;
