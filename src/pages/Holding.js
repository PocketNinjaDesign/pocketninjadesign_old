import $ from 'jqlite';
// import $ from 'jQuery';

import Peekaboo from '../modules/Peekaboo';
import NinjaList from '../modules/ninja/NinjaList';

class PageHolding {
  constructor() {
    // Primary Popup character
    this.mainNinja;
    this.ninjas;
  }

  init() {
    this.mainNinja = new Peekaboo({
      $element: $('#ninja'),
      targets: [{ element: 'body' }, { element: '#branch', sides: ['bottom'] }],
      fixedTimes: false,
    });
    this.mainNinja.init();

    // Generate a load of random ninjas
    // For now it is the list only, I'll figure out
    // what I want from a ninja class later.
    this.ninjas = new NinjaList();
    this.ninjas.generateNinjas(2);
  }
}

export default new PageHolding();