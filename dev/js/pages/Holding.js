import $ from '../jqlite.extends';

import EnterButtonAnim from '../animations/EnterButton.anim';
import LandingToPortfolioAnim from '../animations/LandingToPortfolio.anim';
import NinjaList from '../modules/ninja/NinjaList';
import Peekaboo from '../modules/Peekaboo';
import Portfolio from '../pages/Portfolio';
import Tree from '../modules/Tree';

class PageHolding {
  constructor() {
    // Primary Popup character
    this.mainNinja = undefined;
    this.ninjas = undefined;
    this.tree = new Tree();
    this.ninjas = new NinjaList();
  }

  init() {
    // Create the main Pocketninja who can
    // appear in the body and the tree while adding
    // popout callbacks
    this.mainNinja = new Peekaboo({
      $element: $('#ninja'),
      targets: [{
        element: 'body',
      }, {
        element: '#branch',
        sides: ['bottom'],
        popOutCallback: () => {
          this.tree.animateTo();
        },
        popBackCallback: () => {
          this.tree.animateFrom();
        },
      }],
      animationHideSpeed: 0.2,
      animationShowSpeed: 0.2,
      fixedTimes: false,
      emScale: true,
    });
    this.mainNinja.init();

    // Generate a load of random ninjas
    // For now it is the list only, I'll figure out
    // what I want from a ninja class later.
    // this.ninjas.generateNinjas(3);

    // Start Enter Button Animation
    EnterButtonAnim.start('#holdingEnterButton');

    // Animation Testing button
    $('#holdingEnterButton').on('click', () => {
      $('#holdingEnterButton').off('click');
      LandingToPortfolioAnim
        .start()
        .then(() => {
          // Animation Finished
          // 1. Remove the Holding content
          // 2. Get Loading Portfolio
          $('.under-contruction').remove();
          $('body').removeClass('page-holding');
          Portfolio.init();
        });
    });
  }
}

export default new PageHolding();
