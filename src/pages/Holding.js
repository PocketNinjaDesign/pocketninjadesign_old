import $ from 'jqlite';
//import $ from 'jQuery';

import Peekaboo from '../modules/Peekaboo';
import NinjaList from '../modules/ninja/NinjaList';
import Modal from '../modules/Modal';
import Animation from '../animations/Animation';

class PageHolding {
  constructor() {
    // Primary Popup character
    this.mainNinja;
    this.ninjas;
    this.modal = new Modal();
  }

  init() {
    this.mainNinja = new Peekaboo({
      $element: $('#ninja'),
      targets: [{ element: 'body' }, { element: '#branch', sides: ['bottom'] }],
      fixedTimes: false,
      emScale: true,
    });
    this.mainNinja.init();

    // Generate a load of random ninjas
    // For now it is the list only, I'll figure out
    // what I want from a ninja class later.
    this.ninjas = new NinjaList();
    this.ninjas.generateNinjas(10);

    // Show test modal
    this.modal.init();

    // Animation test activation
    let anim = new Animation();
    let anim2 = new Animation('swatch2');

    $('#animationLink').on('click', () => {
      anim.start().then(() => {
        anim2.start().then(() => {
          // Show Something
          this.modal.show();
        });
      });
    });

  }
}

export default new PageHolding();