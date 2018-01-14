import $ from 'jQuery';
import Peekaboo from '../modules/Peekaboo';

class PageHolding {
  constructor() {
    // Primary Popup character
    this.mainNinja;
  }

  init() {
    this.mainNinja = new Peekaboo({
      $element: $('<div class="eggsa"></div>'),
    });
    this.mainNinja.init();
  }
}

export default new PageHolding();