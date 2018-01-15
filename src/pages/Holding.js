import $ from 'jQuery';
import Peekaboo from '../modules/Peekaboo';
import {TweenMax, Power2, TimelineLite} from 'gsap';

class PageHolding {
  constructor() {
    // Primary Popup character
    this.mainNinja;
  }

  init() {
    this.mainNinja = new Peekaboo({
      $element: $('#ninja'),
      targets: [{ element: 'body' }, { element: '#branch', sides: ['bottom'] }],
      fixedTimes: false,
    });
    this.mainNinja.init();
  }
}

export default new PageHolding();