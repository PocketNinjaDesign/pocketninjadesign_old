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
      $element: $('<div class="eggsa"></div>'),
    });
    this.mainNinja.init();

    this.test1 = new Peekaboo({
      $element: $('#test1'),
      targets: [{ element: 'body' }, { element: '#block' }]
    });
    this.test1.init();

    this.test2 = new Peekaboo({
      $element: $('#test2'),
    });
    this.test2.init();


    // test
    let $block = $('#block');
    let t1 = new TimelineLite();
    t1
      .to($block, 1, {x: 50, y: 0})
      .to($block, 1, {x: 50, y: 50})
      .to($block, 1, {x: -50, y: 50})
      .to($block, 1, {x: -50, y: 0});
    t1.pause();

    $block.on('click', () => {
      t1.play();
    });
  }
}

export default new PageHolding();