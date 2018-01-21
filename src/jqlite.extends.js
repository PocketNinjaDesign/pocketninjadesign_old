import $ from 'jqlite';

$.fn.innerWidth = function() {
  return this[0].clientWidth;
}

$.fn.innerHeight = function() {
  return this[0].clientWidth;
}

$.fn.outerWidth = function() {
  return this[0].offsetWidth;
}

$.fn.outerHeight = function() {
  return this[0].offsetHeight;
}

//console.log($.fn);

export default $;