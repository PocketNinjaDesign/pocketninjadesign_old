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

    this.test1 = new Peekaboo({
      $element: $('#test1'),
    });
    this.test1.init();

    this.test2 = new Peekaboo({
      $element: $('#test2'),
    });
    this.test2.init();
  }
}

export default new PageHolding();