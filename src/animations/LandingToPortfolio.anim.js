import $ from '../jqlite.extends.js';
import {TweenMax, Power2, TimelineLite} from 'gsap';

import SideNavigationAnim from './SideNavigation.anim';

const sizeGuide = new Map([
  ['large', {
    bodyBlock1: '19%',
    bodyBlock2: '50%',
    navShowAnim() {
      SideNavigationAnim.showFullSideBar();
    },
  }],
  ['medium', {
    bodyBlock1: 60,
    bodyBlock2: '50%',
    navShowAnim() {
      SideNavigationAnim.showMediumSideBar();
    },
  }],
  ['small', {
    bodyBlock1: 0,
    bodyBlock2: 0,
    navShowAnim() {
      SideNavigationAnim.showSmallestSideBar();
    },
  }],
]);


export default new class LandingToPortfolio {
  constructor() {
    this.$holdingPage = $('.under-construction');
    this.$primarySocialMedia = $('#holdingSocialLinks');
    this.$primaryLogo = $('#primaryLogo');
    this.$sideNav = $('#sideNavigation');
    this.$tree = $('#tree');

    this.sizeType = 'large';
  }

  start() {
    return new Promise((resolve, reject) => {
      this.checkSize();
      this.holdingContentOut().then(() => {
        resolve();
      });
    });
  }

  checkSize() {
    if (window.innerWidth < 701) {
      this.sizeType = 'small';
    }
    else if (window.innerWidth > 700 && window.innerWidth < 1025) {
      this.sizeType = 'medium';
    }
    else if (window.innerWidth > 1024) {
      this.sizeType = 'large';
    }
  }

  holdingContentOut() {
    return new Promise((resolve, reject) => {
      let timelineHoldingLeave = new TimelineLite({ delay: 0 });

      timelineHoldingLeave // 2.75
        .to(this.$primaryLogo, 0.6, { opacity: 0, ease: Linear.easeOut }, 0.2)
        .to('h1', 0.5, { opacity: 0, ease: Linear.easeOut }, 0.3)
        .to('h3', 0.5, { opacity: 0, ease: Linear.easeOut }, 0.45)
        .to(this.$primarySocialMedia, 0.5, { opacity: 0, ease: Linear.easeOut }, 0.75)
        .to(this.$tree, 0.5, { opacity: 0, ease: Linear.easeOut, onComplete: () => {
          this.$holdingPage.hide();
          this.$primaryLogo.hide();
          this.$tree.hide();
        } }, 0.75)
        .add(() => {
          // Start Rending the Side Navigation
          sizeGuide.get(this.sizeType).navShowAnim();
        }, 1.5)
        .add(() => {
          return this.bodyBlocks();
        }, 1)
        .add(() => {
          // End Of Everything
          resolve();
        }, "+=1");
    });
  }

  bodyBlocks() {
    let bodyBlock1NewWidth = sizeGuide.get(this.sizeType).bodyBlock1;
    let bodyBlock2NewWidth = sizeGuide.get(this.sizeType).bodyBlock2;
    let t1 = new TimelineLite();

    return t1
      .to('.body-block', 1.5, { width: bodyBlock1NewWidth, ease: Elastic.easeOut.config(1, 0.3) })
      .to('.body-block-2', 1.5, { width: bodyBlock2NewWidth, ease: Elastic.easeOut.config(1, 0.3), onComplete: () => {
        $('.body-block').hide();
        this.$sideNav.addClass('bg-color-1');
      } }, "-=1.25");
  }
};