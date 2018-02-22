import $ from '../jqlite.extends.js';
import {TweenMax, Power2, TimelineLite} from 'gsap';

import BreakPointService from '../services/BreakPoint.service';

export default new class SideNavigation {
  constructor() {
    let root = this;

    this.$sideNav = $('#sideNavigation');
    this.$sideNavLink = this.$sideNav.find('.side-link');
    this.$logo = this.$sideNav.findLite('.logo');
    this.$socialMediaLink = $('#sideSocialLinks .social-media-link');

    this.sizeGuide = new Map([
      ['large', {
        inactiveWidth: '19%',
        activeWidth: '40%',
        showAnim() { root.showFullSideBar() }
      }],
      ['medium', {
        inactiveWidth: 60,
        activeWidth: '40%',
        showAnim() { root.showMediumSideBar() }
      }],
      ['small', {
        inactiveWidth: 0,
        activeWidth: '100%',
        showAnim() { root.showSmallestSideBar() }
      }],
    ]);
  }

  showActiveSideBar() {
    let width = BreakPointService.getWidth();
    let sizes = this.sizeGuide.get(width);

    return new Promise((resolve) => {
      if (width !== 'large') {
        let t1 = new TimelineLite();
        t1
          .fromTo(this.$sideNav, 0.5, { width: sizes.inactiveWidth }, { width: sizes.activeWidth, ease: Power2.easeOut })
          .add(this.logo_AnimationIn(), 0.3)
          .add(this.sideNavLink_AnimationIn(), 0.35)
          .add(this.socialMedia_AnimationIn(), 0.35)
          .add(() => {
            this.removeStyles();
            resolve();
          });
      }
    });
  }

  hideActiveSideBar(callBack = () => {}) {
    let t1 = new TimelineLite();
    const bpWidth = BreakPointService.getWidth();
    const sizes = this.sizeGuide.get(bpWidth);

    return new Promise((resolve) => {
      t1
        .fromTo(this.$sideNav, 0.5, { width: sizes.activeWidth }, { width: sizes.inactiveWidth, ease: Power2.easeOut });

      if (bpWidth !== 'large') {
        t1
          .add(this.logo_AnimationOut(), 0.1)
          .add(this.sideNavLink_AnimationOut(), 0.1)
          .add(this.socialMedia_AnimationOut(), 0.1);
      }

      t1
        .add(() => {
          callBack();
          this.removeStyles();
        })
    });
  }


  //
  // FIRST TIME REVEAL ANIMATIONS 
  //

  showLargeSideBar() {
    let t1 = new TimelineLite({ delay: 0 });

    t1
      .add(() => { this.$sideNav.show() })
      .add(this.logo_AnimationIn())
      .add(this.sideNavLink_AnimationIn(), 0.5)
      .add(this.socialMedia_AnimationIn(), 0.2)
      .add(() => {
        this.removeStyles();
      });
  }

  showMediumSideBar() {
    let t1 = new TimelineLite({ delay: 0 });

    t1
      .add(() => { this.$sideNav.show() })
      .add(this.socialMedia_AnimationIn(), 0.2)
      .add(() => {
        this.removeStyles();
      });
  }

  showSmallSideBar() {
    this.removeStyles();
  }

  removeStyles() {
    // Remove !important style attributes so media
    // queries in the css can take back control
    this.$logo.removeAttr('style');
    this.$sideNav.removeAttr('style');
    this.$sideNavLink.removeAttr('style');
    this.$socialMediaLink.removeAttr('style');
  }



  //
  // Single Component Animations
  //

  // Logo
  logo_AnimationIn(onComplete = () => {}) {
    return new TimelineLite().fromTo(this.$logo, 0.3, { y: -30, opacity: 0 }, { y: 0, opacity: 1, ease: Power2.easeOut, onComplete });
  }
  logo_AnimationOut(onComplete = () => {}) {
    return new TimelineLite().fromTo(this.$logo, 0.1, { opacity: 1 }, { opacity: 0 });
  }


  // SideNav Links
  sideNavLink_AnimationIn(onCompleteAll = () => {}) {
    return new TimelineLite().staggerFromTo(this.$sideNavLink, 0.5, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: Power2.easeOut }, 0.2, 0);
  }
  sideNavLink_AnimationOut(onCompleteAll = () => {}) {
    return new TimelineLite().to(this.$sideNavLink, 0.1, { opacity: 0 });
  }


  // Social Media
  socialMedia_AnimationIn(onCompleteAll = () => {}) {
    return new TimelineLite().staggerFromTo(this.$socialMediaLink, 0.01, { y: -20, opacity: 0 }, { y: 0, opacity: 1, ease: Power2.easeOut }, 0.1, 0, onCompleteAll);
  }
  socialMedia_AnimationOut(onCompleteAll = () => {}) {
    return new TimelineLite().to(this.$socialMediaLink, 0.1, { opacity: 0 });
  }
}