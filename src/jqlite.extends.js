import $ from 'jqlite';

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

export default $;