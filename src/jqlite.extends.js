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
$.fn.findFromAjax = function(responseData, elementQuery) {
  return $('<div />').html(responseData).findLite(elementQuery);
}



/**
 * @param {string} selector any 'element', '.class' or '#id'
 * @returns {object} jqlite objects
 * @description Finds 1 or many elements within a single element
 */
$.fn.findLite = function(selector) {
  return $(this[0].querySelectorAll(selector));
}



$.fn.getSizeFromHidden = function() {
  let sizes = {};
  let $this = $(this);
  let $parent = $this.parent();
  let $hiddenElement = $(`<div style="position: absolute; visibility: hidden;"></div>`);

  $hiddenElement.appendTo('body');
  $this.appendTo($hiddenElement);

  sizes = {
    width: $this.innerWidth(),
    height: $this.innerHeight(),
  }
  $this.appendTo($parent);
  $hiddenElement.remove();

  //console.log('asas as', sizes.width, sizes.height, $this);

  return sizes;
}



// $.fn.hide = function() {
//   // Add the check for what it originally
//   // was if it was hidden last
//   for (let i = 0; i <= this.length; i++) {
//     this[i].css({
//       display: 'none'
//     });
//   }

//   return this;
// }



$.fn.innerWidth = function() {
  return this[0].clientWidth;
}



$.fn.innerHeight = function() {
  return this[0].clientHeight;
}



$.fn.outerWidth = function() {
  return this[0].offsetWidth;
}



$.fn.outerHeight = function() {
  return this[0].offsetHeight;
}



$.fn.setSizeFromHidden = function() {
  for(let i = 0; i < this.length; i++) {
    let sizes = $(this[i]).getSizeFromHidden();
    $(this[i]).css({
      width: `${sizes.width / 16}em`,
      height: `${sizes.height / 16}em`,
    });
  }

  return this;
}



$.fn.scrollLeft = function() {
  return ( this[0].scrollLeft || document.documentElement.scrollLeft ) - ( document.documentElement.clientLeft || 0 );
}



$.fn.scrollTop = function() {
  return ( this[0].scrollTop || document.documentElement.scrollTop ) - ( document.documentElement.clientTop || 0 );
}



// $.fn.show = function() {
//   // Add the check for what it originally
//   // was if it was hidden last
//   for (let i = 0; i <= this.length; i++) {
//     this[i].css({
//       display: 'block'
//     });
//   }

//   return this;
// }



export default $;