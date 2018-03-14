import $ from '../../jqlite.extends';
import Overlay from '../Overlay';


const DEFAULT_OPTIONS = {
  $container: 'body',
  positionType: 'absolute',
};


class LoaderBase {
  constructor(_options) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, _options);

    this.$animation = $(this.getAnimWrapper());
    this.setContainer(this.options.$container);
    this.overlay = new Overlay({
      animate: true,
    });
  }

  setContainer(_container) {
    this.options.$container = $(_container);
  }

  init() {
    this.overlay.show().then(() => {
      this.options.$container.append(this.$animation);
    });
  }

  hide() {
    this.$animation.hide();

    return new Promise((resolve) => {
      this.overlay.hide().then(() => resolve());
    });
  }

  show() {
    this.overlay.show().then(() => this.$animation.show());
  }

  remove() {
    // Remove the Loader Animation
    // Add a Promise for an animation here
    this.$animation.remove();

    return new Promise((resolve) => {
      this.overlay.remove().then(() => {
        resolve();
      });
    });
  }

  getAnimWrapper() {
    return `<div class="anim-wrapper anim-wrapper-${this.options.positionType}">
      ${this.getAnimTemplate()}
    </div>`;
  }

  getAnimTemplate() {
    return '<div class="anim-default"></div>';
  }
}

export default LoaderBase;
