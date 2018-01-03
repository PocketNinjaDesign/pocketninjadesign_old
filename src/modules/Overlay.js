import $ from 'jQuery';
import PnModule from './PnModule';

let counter = 1;

const ANIMATION_FADE_OUT_CLASSNAME = 'fadeOut';
const ANIMATION_FADE_OUT_NAME = 'fadeOut';
const ACTIVE_CLASSNAME = 'active';
const CLICK_ENABLED_CLASSNAME = 'click-enabled';

const DEFAULT_OPTIONS = {
  container: 'body',
  onClick: undefined,
  addedClass: '',
  isToggle: false,
  fullBody: true,
};

class Overlay extends PnModule {
  constructor(options) {
    super();
    this.options = $.extend({}, DEFAULT_OPTIONS, options);
    this.$overlay = $('<div/>', {
      id: `overlay-${counter}`,
      class: `overlay ${this.options.addedClass}`
    });
    this.scrollTop;
    this.active = false;
    counter++;
  }

  init() {
    if(this.hasClick()) {
      this.setClick(this.options.onClick, this.options.isToggle);
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
    let root = this;

    this.$overlay
      .addClass(CLICK_ENABLED_CLASSNAME)
      .on('click', function() {
        fn();
        if(isToggle) {
          root.toggle();
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
    this.active = !this.active;

    this.toggleFullBody();
  }

  show() {
    console.log('scrolltop = ' + $(window).scrollTop());
    this.active = true;
    this.$overlay.addClass(ACTIVE_CLASSNAME);

    this.addFullBodyMode();
  }

  hide() {
    this.active = false;
    this.$overlay.removeClass(ACTIVE_CLASSNAME);

    this.removeFullBodyMode();
  }

  toggleFullBody() {
    if(this.active) {
      this.addFullBodyMode();
    }
    else {
      this.removeFullBodyMode();
    }
  }

  addFullBodyMode() {
    if (this.options.fullBody) {
      this.scrollTop = $(window).scrollTop();
      $('.main').css('top', -this.scrollTop);
      $('html').addClass('full-overlay-mode');
    }
  }

  removeFullBodyMode() {
    if (this.options.fullBody) {
      $('html').removeClass('full-overlay-mode');
      $('.main').removeAttr('style');
      $(window).scrollTop(this.scrollTop);
    }
  }

  remove() {
    this.$overlay.addClass(ANIMATION_FADE_OUT_CLASSNAME);
    this.clearClick();

    this.AnimationService.checkComplete(this.$overlay, ANIMATION_FADE_OUT_NAME).then((e) => {
      this.hide();
      this.$overlay.remove();
    });
  }
}

export default Overlay;