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

  setClick(fn = function() {}, isToggle) {
    this.$overlay
      .addClass('click-enabled')
      .on('click', () => {
        fn();
        if(isToggle) {
          this.toggle();
        }
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
    let root = this;
    this.$overlay.addClass('fadeOut');

    setTimeout(function() {
      root.$overlay.remove();
    }, 300);
  }
}

export default Overlay;