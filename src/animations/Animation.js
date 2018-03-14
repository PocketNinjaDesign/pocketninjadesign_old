import { TimelineLite } from 'gsap';
import $ from '../jqlite.extends';

class Animation {
  constructor(className = '') {
    this.className = className;
    this.$animation = this.getTemplate();
  }

  start() {
    this.$animation.appendTo('body');
    return this.setAnimationPiece();
  }

  setAnimationPiece() {
    const t1 = new TimelineLite();

    const $tl = this.$animation.find('.u-l');
    const $tr = this.$animation.find('.u-r');
    const $bl = this.$animation.find('.b-l');
    const $br = this.$animation.find('.b-r');

    const width = $tl.innerWidth();
    const height = $tl.innerHeight();

    return new Promise((resolve) => {
      t1
        .fromTo($tl.find('div'), 0.4, { y: (height * 2), x: width }, {
          y: 0,
          x: 0,
          onComplete: () => {
            resolve();
          },
        })
        .fromTo($tr.find('div'), 0.4, { y: (height * 2), x: -width }, { y: 0, x: 0 }, '-=0.3')
        .fromTo($bl.find('div'), 0.4, { y: -height, x: width }, { y: 0, x: 0 }, '-=0.3')
        .fromTo($br.find('div'), 0.4, { y: -height, x: -width }, { y: 0, x: 0 }, '-=0.3');
    });
  }

  getTemplate() {
    return $(`<div class="full-animation-1 ${this.className}">
      <div class="u-l"><div></div></div>
      <div class="u-r"><div></div></div>
      <div class="b-l"><div></div></div>
      <div class="b-r"><div></div></div>
    </div>`);
  }
}

export default Animation;
