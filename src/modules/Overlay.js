import $ from 'jQuery';

let counter = 1;

class Overlay {
  constructor(container = 'body') {
    this.container = container;
    this.$overlay = $('<div/>', {
      id: `overlay${counter}`,
      class: 'overlay'
    });
    this.$overlay.appendTo(this.container);
    counter++;
  }

  setClick(fn = function() {}) {
    this.$overlay.on('click', () => {
      fn();
      this.toggle();
    });
  }

  toggle() {
    this.$overlay.toggleClass("active");
  }

  show() {
    this.$overlay.addClass('active');
  }

  hide() {
    this.$overlay.removeClass('active');
  }

  remove() {
    this.$overlay.remove();
  }
}

export default Overlay;