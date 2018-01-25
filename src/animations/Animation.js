import $ from '../jqlite.extends';
import {TweenMax, Power2, TimelineLite} from 'gsap';

class Animation {
  constructor(className = '') {
    this.className = className;
    this.$animation = this.getTemplate();
  }

  start(newClass) {
    this.$animation.appendTo('body');
    return this.setAnimationPiece();
  }

  setAnimationPiece() {
    let t1 = new TimelineLite();

    let $tl = this.$animation.find('.u-l');
    let $tr = this.$animation.find('.u-r');
    let $bl = this.$animation.find('.b-l');
    let $br = this.$animation.find('.b-r');

    let width = $tl.innerWidth();
    let height = $tl.innerHeight();

    return new Promise((resolve, reject) => {
      t1
      .fromTo($tl.find('div'), 0.4,
        { y: (height * 2), x: width },
        { y: 0, x: 0, onComplete: () => {
          resolve();
        }}
      )
      .fromTo($tr.find('div'), 0.4,
        { y: (height * 2), x: -width },
        { y: 0, x: 0 },
        "-=0.3"
      )
      .fromTo($bl.find('div'), 0.4,
        { y: -height, x: width },
        { y: 0, x: 0 },
        "-=0.3"
      )
      .fromTo($br.find('div'), 0.4,
        { y: -height, x: -width },
        { y: 0, x: 0 },
        "-=0.3"
      );
    });
  }

  getTemplate() {
    return $(
      `<div class="full-animation-1 ${this.className}">
        <div class="u-l"><div></div></div>
        <div class="u-r"><div></div></div>
        <div class="b-l"><div></div></div>
        <div class="b-r"><div></div></div>
      </div>`
    );
  }
}

export default Animation;