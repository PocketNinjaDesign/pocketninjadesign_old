import $ from 'jqlite';

$.fn.innerWidth = function() {
  return this[0].clientWidth;
}

$.fn.innerHeight = function() {
  return this[0].clientWidth;
}

//console.log($.fn);

export default $;