import $ from '../jqlite.extends.js';
import {TweenMax, Power2, TimelineLite, TimelineMax} from 'gsap';

export default new class EnterButtonAnimation {
  constructor() {
    this.$bttn;
    this.$tl;
    this.$tr;
    this.$bl;
    this.$br;

    this.TLmainAnimation;
  }

  start(id) {
    this.$bttn = $(id);
    this.$tl = this.$bttn.find('.one');
    this.$tr = this.$bttn.find('.two');
    this.$bl = this.$bttn.find('.three');
    this.$br = this.$bttn.find('.four');
    this.$text = this.$bttn.find('.enter-button-message');

    const animDuration = 1;

    // this.TLmainAnimation = new TimelineLite();
    // this.TLmainAnimation
    //   // .fromTo(this.$bttn, animDuration, { rotation: 0 }, { rotation: 360, ease: Power2.easeOut })
    //   .to(this.$bttn, animDuration/2, { scale: 2, ease: Power2.easeOut }, 0)
    //   .to(this.$bttn, animDuration/2, { scale: 1, ease: Power2.easeIn }, animDuration/2)

    //   .to(this.$tl, animDuration/2, { x: -10, y: -10, ease: Power2.easeOut }, 0)
    //   .to(this.$tl, animDuration/2, { x: 0, y: 0, ease: Power2.easeIn }, animDuration/2)

    //   .to(this.$tr, animDuration/2, { x: 10, y: -10, ease: Power2.easeOut }, 0)
    //   .to(this.$tr, animDuration/2, { x: 0, y: 0, ease: Power2.easeIn }, animDuration/2)

    //   .to(this.$bl, animDuration/2, { x: -10, y: 10, ease: Power2.easeOut }, 0)
    //   .to(this.$bl, animDuration/2, { x: 0, y: 0, ease: Power2.easeIn }, animDuration/2)

    //   .to(this.$br, animDuration/2, { x: 10, y: 10, ease: Power2.easeOut }, 0)
    //   .to(this.$br, animDuration/2, { x: 0, y: 0, ease: Power2.easeIn }, animDuration/2)

    //   .to(this.$text, animDuration/2, { opacity: 1 }, 0)
    //   .to(this.$text, animDuration/2, { opacity: 0 }, animDuration/2)
    
    // let tm1 = new TimelineMax({ repeat: -1 });
    // tm1.add(this.TLmainAnimation);

    this.$bttn.on('mouseenter', () => {
      // tm1.stop();
      // this.TLLeave.stop();
      this.TLEnter = new TimelineMax();
      this.TLEnter
        // .fromTo(this.$bttn, animDuration, { rotation: 0 }, { rotation: 360, ease: Power2.easeOut })
        .to(this.$bttn, animDuration/2, { scale: 2, ease: Elastic.easeOut.config(1, 0.3) }, 0)
        .to(this.$tl, animDuration/2, { x: -10, y: -10, ease: Elastic.easeOut.config(1, 0.3) }, 0)
        .to(this.$tr, animDuration/2, { x: 10, y: -10, ease: Elastic.easeOut.config(1, 0.3) }, 0)
        .to(this.$bl, animDuration/2, { x: -10, y: 10, ease: Elastic.easeOut.config(1, 0.3) }, 0)
        .to(this.$br, animDuration/2, { x: 10, y: 10, ease: Elastic.easeOut.config(1, 0.3) }, 0)
        .to(this.$text, animDuration/2, { opacity: 1 }, 0)
    });

    this.$bttn.on('mouseleave', () => {
      // this.TLEnter.stop();
      this.TLLeave = new TimelineMax();
      this.TLLeave
        // .fromTo(this.$bttn, animDuration, { rotation: 0 }, { rotation: 360, ease: Power2.easeOut })
        .to(this.$bttn, animDuration/2, { scale: 1, ease: Power2.easeIn }, animDuration/2)
        .to(this.$tl, animDuration/2, { x: 0, y: 0, ease: Power2.easeIn }, animDuration/2)
        .to(this.$tr, animDuration/2, { x: 0, y: 0, ease: Power2.easeIn }, animDuration/2)
        .to(this.$bl, animDuration/2, { x: 0, y: 0, ease: Power2.easeIn }, animDuration/2)
        .to(this.$br, animDuration/2, { x: 0, y: 0, ease: Power2.easeIn }, animDuration/2)
        .to(this.$text, animDuration/2, { opacity: 0 }, animDuration/2);
    });

    this.$bttn.on('click', () => {
      this.TLAnimOut = new TimelineMax();
      this.TLAnimOut
        .to(this.$bttn, 0.3, { scale: 0, onComplete: () => {
          this.$bttn.hide();
        } });
    });
  }
}