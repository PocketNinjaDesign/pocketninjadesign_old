import $ from '../jqlite.extends';
import { TweenMax } from 'gsap';

let counter = 1;

// Active mode applied without animation
const ACTIVE_CLASSNAME = 'active';

// Active mode applied with animation
const ACTIVE_CLASSNAME_ANIMATION_MODE = 'active-in-animate-mode';

// If click enabled apply styles
const CLICK_ENABLED_CLASSNAME = 'click-enabled';



const DEFAULT_OPTIONS = {
  container: 'body',
  onClick: undefined,
  addedClass: '',
  isToggle: false,
  fullBody: true,
  animate: false,
  animationDurationIn: 0.5,
  animationDurationOut: 0.5,
  zIndex: undefined,
};



class Overlay {
  constructor(options) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    this.$overlay = $('<div/>', {
      id: `overlay-${counter}`,
      class: `overlay ${this.options.addedClass}`,
    });

    if (this.options.zIndex !== undefined) {
      this.$overlay.css('z-index', this.options.zIndex);
    }

    this.scrollTop;
    this.active = false;
    counter++;

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
  setClick(fn = () => {}, isToggle = false) {
    this.$overlay
      .addClass(CLICK_ENABLED_CLASSNAME)
      .on('click', () => {
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
    this.active = !this.active;
    
    if(this.active) {
      this.addFullBodyMode();
    }
    else {
      this.removeFullBodyMode();
    }
  }

  show() {
    return new Promise((resolve, reject) => {

      if (this.options.animate) {

        TweenMax.to(this.$overlay, this.options.animationDurationIn, {
          opacity: 1,
          onStart: () => { 
            // Show the overlay
            this.active = true;
            this.$overlay.addClass(ACTIVE_CLASSNAME_ANIMATION_MODE);
            this.addFullBodyMode();
          },
          onComplete: () => {
            resolve('Overlay animated in.');
          }
        });

      }
      else {

        this.active = true;
        this.$overlay.addClass(ACTIVE_CLASSNAME);
        this.addFullBodyMode();
        resolve('Overlay appeared without animation.');

      }
    });
  }

  hide() {
    this.active = false;
    this.$overlay.removeClass(ACTIVE_CLASSNAME, ACTIVE_CLASSNAME_ANIMATION_MODE);
    this.removeFullBodyMode();
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
    return new Promise((resolve, reject) => {
      this.clearClick();

      if (this.options.animate) {
        TweenMax.to(this.$overlay, this.options.animationDurationOut, { opacity: 0, onComplete: () => {
          this.removeActionComplete();
          resolve();
        }});
      }
      else {
        this.removeActionComplete();
        resolve();
      }
    });
  }

  removeActionComplete() {
    this.hide();
    this.$overlay.remove();
  }
}

export default Overlay;