import $ from 'jQuery';
import PnModule from './PnModule';

let counter = 1;

const ANIMATION_FADE_OUT = 'fadeOut';
const ACTIVE_CLASSNAME = 'active';
const CLICK_ENABLED_CLASSNAME = 'click-enabled';

const DEFAULT_OPTIONS = {
  container: 'body',
  onClick: undefined,
  addedClass: '',
  isToggle: false,
};

class Overlay extends PnModule {
  constructor(options) {
    super();
    this.options = $.extend({}, DEFAULT_OPTIONS, options);
    this.$overlay = $('<div/>', {
      id: `overlay-${counter}`,
      class: `overlay ${this.options.addedClass}`
    });
    counter++;
  }

  init() {
    if(this.hasClick()) {
      setClick(this.options.onClick, this.options.isToggle);
    }
    this.$overlay.appendTo(this.options.container);
  }

  /**
   * setClick
   * 
   * @param {function} fn 
   * @param {Boolean} isToggle
   */
  setClick(fn = function() {}, isToggle = false) {
    this.$overlay
      .addClass(CLICK_ENABLED_CLASSNAME)
      .on('click', function() {
        fn();
        if(isToggle) {
          this.toggle();
        }
      });
  }

  hasClick() {
    return this.options.onClick !== undefined;
  }

  clearClick() {
    if(this.hasClick()) {
      this.options.onClick = undefined;
    }
  }

  toggle() {
    this.$overlay.toggleClass(ACTIVE_CLASSNAME);
  }

  show() {
    this.$overlay.addClass(ACTIVE_CLASSNAME);
  }

  hide() {
    this.$overlay.removeClass(ACTIVE_CLASSNAME);
  }

  remove() {
    let root = this;
    this.$overlay.addClass(ANIMATION_FADE_OUT);

    this.clearClick();

    this.AnimationService.checkComplete(this.$overlay, ANIMATION_FADE_OUT).then((e) => {
      //console.log(`animation ${e.originalEvent.animationName} complete`);
      this.$overlay.remove();
    });
  }
}

export default Overlay;