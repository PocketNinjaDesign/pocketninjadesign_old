import $ from 'jqlite';

import Peekaboo from '../modules/Peekaboo';
import NinjaList from '../modules/ninja/NinjaList';
import Tree from '../modules/Tree';

class PageHolding {
  constructor() {

    // Primary Popup character
    this.mainNinja;
    this.ninjas;
  }

  init() {
    let tree = new Tree();

    this.mainNinja = new Peekaboo({
      $element: $('#ninja'),
      targets: [
        { element: 'body' }, {
          element: '#branch',
          sides: ['bottom'],
          popOutCallback: function() {
            tree.animateTo();
          },
          popBackCallback: function() {
            tree.animateFrom();
          },
        }
      ],
      fixedTimes: false,
      emScale: true,
    });
    this.mainNinja.init();

    // Generate a load of random ninjas
    // For now it is the list only, I'll figure out
    // what I want from a ninja class later.
    this.ninjas = new NinjaList();
    this.ninjas.generateNinjas(3);
  }
}

export default new PageHolding();