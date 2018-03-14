import { TimelineLite, Elastic } from 'gsap';
import $ from '../jqlite.extends';

class Tree {
  constructor() {
    this.$tree = $('#tree1');
    this.branch1 = $('#branch-1');
    this.branch2 = $('#branch-2');
    this.branch3 = $('#branch-3');
    this.branch4 = $('#branch-4');
    this.branch5 = $('#branch-5');
    this.branch1Shadow = $('#branch-1-shadow');
    this.branch2Shadow = $('#branch-2-shadow');
    this.branch3Shadow = $('#branch-3-shadow');
    this.branch4Shadow = $('#branch-4-shadow');
    this.branch5Shadow = $('#branch-5-shadow');
  }

  animateTo() {
    const t1 = new TimelineLite({ delay: 0.2 });

    // console.log('animateTo');

    t1
      .to(this.branch1, 0.5, { x: -15, y: 15, ease: Elastic.easeOut.config(1, 0.3) })
      .to(this.branch1Shadow, 0.5, { x: -15, y: 15, ease: Elastic.easeOut.config(1, 0.3) }, 0)

      .to(this.branch4, 0.5, { x: 15, y: 15, ease: Elastic.easeOut.config(1, 0.3) }, 0)
      .to(this.branch4Shadow, 0.5, { x: 15, y: 15, ease: Elastic.easeOut.config(1, 0.3) }, 0)

      .to(this.branch5, 1, { x: 0, y: 20, ease: Elastic.easeOut.config(1, 0.3) }, 0)
      .to(this.branch5Shadow, 1, { x: 0, y: 20, ease: Elastic.easeOut.config(1, 0.3) }, 0)

      .to(this.branch2, 0.8, { x: -10, y: 10, ease: Elastic.easeOut.config(1, 0.3) }, 0)
      .to(this.branch2Shadow, 0.8, { x: -10, y: 10, ease: Elastic.easeOut.config(1, 0.3) }, 0)

      .to(this.branch3, 0.7, { x: 10, y: 10, ease: Elastic.easeOut.config(1, 0.3) }, 0)
      .to(this.branch3Shadow, 0.7, { x: 10, y: 10, ease: Elastic.easeOut.config(1, 0.3) }, 0);
  }

  animateFrom() {
    const t1 = new TimelineLite();

    // console.log('animateFrom');

    t1
      .to(this.branch1, 1, { x: 0, y: 0, ease: Elastic.easeOut.config(1, 0.3) })
      .to(this.branch1Shadow, 1, { x: 0, y: 0, ease: Elastic.easeOut.config(1, 0.3) }, 0)

      .to(this.branch4, 1, { x: 0, y: 0, ease: Elastic.easeOut.config(1, 0.3) }, 0)
      .to(this.branch4Shadow, 1, { x: 0, y: 0, ease: Elastic.easeOut.config(1, 0.3) }, 0)

      .to(this.branch5, 1.5, { x: 0, y: 0, ease: Elastic.easeOut.config(1, 0.3) }, 0)
      .to(this.branch5Shadow, 1.5, { x: 0, y: 0, ease: Elastic.easeOut.config(1, 0.3) }, 0)

      .to(this.branch2, 1.2, { x: 0, y: 0, ease: Elastic.easeOut.config(1, 0.3) }, 0)
      .to(this.branch2Shadow, 1.2, { x: 0, y: 0, ease: Elastic.easeOut.config(1, 0.3) }, 0)

      .to(this.branch3, 1.4, { x: 0, y: 0, ease: Elastic.easeOut.config(1, 0.3) }, 0)
      .to(this.branch3Shadow, 1.4, { x: 0, y: 0, ease: Elastic.easeOut.config(1, 0.3) }, 0);
  }
}

export default Tree;
