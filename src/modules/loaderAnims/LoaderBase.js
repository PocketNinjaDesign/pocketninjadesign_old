import $ from 'jQuery';
import Overlay from '../Overlay';

class LoaderBase {
  constructor(_options) {
    this.options = $.extend({
      $container: 'body',
      positionType: 'absolute'
    }, _options);

    this.$animation;
    this.setContainer(this.options.$container);
    this.overlay = new Overlay();
  }

  setContainer(_container) {
    this.options.$container = $(_container);
  }

  create() {
    // Create a Loader Animation
    this.$animation = $(this.getAnimWrapper());
  }

  show() {
    this.options.$container.append(this.$animation);
    this.overlay.show();
  }

  hide() {
    // Hide the Loader Animation
  }

  remove() {
    // Remove the Loader Animation
    this.$animation.remove();
    this.overlay.remove();
  }

  getAnimWrapper() {
    return `
      <div class="anim-wrapper anim-wrapper-${this.options.positionType}">
        ${this.getAnimTemplate()}
      </div>
    `;
  }

  getAnimTemplate() {
    return `<div class="anim-default"></div>`;
  }
};

export default LoaderBase;