import $ from 'jQuery';
import Overlay from '../Overlay';


const DEFAULT_OPTIONS = {
  $container: 'body',
  positionType: 'absolute',
};


class LoaderBase {
  constructor(_options) {
    this.options = $.extend({}, DEFAULT_OPTIONS, _options);

    this.$animation = $(this.getAnimWrapper())
    this.setContainer(this.options.$container);
    this.overlay = new Overlay({
      animate: true,
    });
  }

  setContainer(_container) {
    this.options.$container = $(_container);
  }

  init() {
    this.overlay.show().then((response) => {
      // Wait for overlay anim in
      //console.log(response, 'will now append the loader container');
      this.options.$container.append(this.$animation);
    });
  }

  remove() {
    // Remove the Loader Animation
    // Add a Promise for an animation here
    this.$animation.remove();

    return new Promise((resolve, reject) => {
      this.overlay.remove().then(() => {
        resolve();
      });
    });
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