import $ from 'jQuery';
import Overlay from './Overlay';

let counter = function() {
  let counter = 1;

  return function() {
    counter += 1;
  }
}();

const DEFAULT_OPTIONS = {
  addedClassName: '',
  $modalContent: $('<div>Action was successful, a ninja has been dispatched!</div>'),
};

class Modal {
  constructor(_options) {
    this.options = $.extend({}, DEFAULT_OPTIONS, _options);
    this.id = `model${counter()}`;
    this.overlay = new Overlay();
    this.$modal;
    this.$modalInner;
  }

  init() {
    let root = this;

    this.$modal = $(this.getBaseTemplate());
    this.$modalInner = $(this.getInnerTemplate());
    this.$modal.append(this.$modalInner);

    this.overlay.setClick(function() {
      root.hide();
    }, false);
  }

  show() {
    let root = this;
    let animation = this.$modal.find('.animation-1')
      .on('animationstart', function(e) {
        console.log(e);
        //console.log(`animation started ${e.originalEvent.animationName} testing`);
      })
      .on('animationend', function(e) {
        console.log(e);
        //console.log(`animation finished ${e.originalEvent.animationName} testing`);
        root.$modalInner.find('.modal-content').append(root.options.$modalContent);
      });

    // Show Model
    this.overlay.show();
    $('body').append(this.$modal);

    // setTimeout(function() {
    //   root.$modalInner.find('.modal-content').append(root.options.$modalContent);
    // }, 2000);
  }

  hide() {
    let root = this;
    this.$modal.find('.animation-1')
      .removeClass('animation-1-in')
      .addClass('animation-1-out');

    this.$modalInner.hide();

    // Hide Model
    setTimeout(function() {
      root.overlay.remove();
      root.$modal.remove();
    }, 150);
  }

  getBaseTemplate() {
    return `
      <div id="${this.id}" class="modal ${this.options.addedClassName}">
        <div class="animation-1 animation-1-in">
          <div class="anim-piece piece-1"></div>
          <div class="anim-piece piece-2"></div>
          <div class="anim-piece piece-3"></div>
          <div class="anim-piece piece-4"></div>
        </div>
      </div>
    `;
  }

  getInnerTemplate() {
    return `
      <div class="modal-inner">
        <header class="modal-content-head"></header>
        <div class="modal-content"></div>
        <footer class="modal-content-footer"><span class="btn"></span></footer>
      </div>
    `;
  }
}

export default Modal;