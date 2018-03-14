//import $ from 'jqlite';
import $ from 'jQuery';
import Overlay from './Overlay';
import AnimationService from '../services/Animation.service';

let counter = 1;

const DEFAULT_OPTIONS = {
  addedClassName: '',
  $modalContent: $('<div>Action was successful, a ninja has been dispatched!</div>'),
  removeCallback: function(){},
  okayCallback: function(){},
};

class Modal {
  constructor(_options) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, _options);
    this.id = `model${counter}`;
    this.overlay;
    this.$modal;
    this.$modalInner;
    this.$closeButton;
    this.$confirmButton;

    counter++;
  }

  init() {
    let root = this;

    this.$modal = $(this.getBaseTemplate());
    this.$modalInner = $(this.getInnerTemplate());
    this.$modal.append(this.$modalInner);
    this.$closeButton = this.$modal.find('.close-bttn');
    this.$closeButton.on('click', () => {
      root.remove();
    });

    this.$confirmButton = this.$modal.find('.modal-btn-confirm');
    this.$confirmButton.on('click', () => {
      root.remove();
    });

    this.overlay = new Overlay({
      animateOut: true
    });
    this.overlay.init();
    this.overlay.setClick(function() {
      root.remove();
    });
  }

  show() {
    let root = this;
    let $animElement = this.$modal.find('.animation-1');

    // Show Model
    $('body').append(this.$modal);
    this.$modalInner.find('.modal-content').append(this.options.$modalContent);

    // $animElement.addClass('animation-1-in');
    // this.overlay.show();

    // AnimationService
    //   .checkComplete($animElement, 'rotateOncePiece1')
    //   .then((e) => {
    //     // Add the content to the body of the modal
    //     this.$modalInner.find('.modal-content').append(this.options.$modalContent);
    //   });
  }

  remove() {
    let root = this;
    let $animElement = this.$modal.find('.animation-1');

    $animElement
      .removeClass('animation-1-in')
      .addClass('animation-1-out');

    // empty the modal content before animating out
    this.$modalInner.find('.modal-content').html('');

    return new Promise((resolve, reject) => {
      AnimationService
        .checkComplete($animElement, 'animation1Out')
        .then((e) => {
          root.$modal.remove();
          root.overlay.remove().then(() => {
            root.removeActionComplete(e);
            resolve(e);
          });
        });
    });
  }

  removeActionComplete(e) {
    this.options.removeCallback();
  }

  getBaseTemplate() {
    return `
      <div id="${this.id}" class="modal ${this.options.addedClassName}">
        <div class="close-bttn">X</div>
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
        <div class="modal-content"></div>
        <footer class="modal-content-footer">
          <span class="btn modal-btn-confirm">okay</span>
        </footer>
      </div>
    `;
  }
}

export default Modal;