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
        showAnim() { root.showFullSideBar() }
      }],
      ['medium', {
        showAnim() { root.showMediumSideBar() }
      }],
      ['small', {
        showAnim() { root.showSmallestSideBar() }
      }],
    ]);
  }

  showActiveSideBar() {
    //this.sizeGuide.get(BreakPointService.getWidth()).showAnim();
  }

  hideActiveSideBar() {
    //this.sizeGuide.get(BreakPointService.getWidth()).showAnim();
  }

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
    // Remove demanding style attributes so media
    // queries in the css can take control again
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
  }


  // SideNav Links
  sideNavLink_AnimationIn(onCompleteAll = () => {}) {
    return new TimelineLite().staggerFromTo(this.$sideNavLink, 0.5, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: Power2.easeOut }, 0.2, 0);
  }
  sideNavLink_AnimationOut(onCompleteAll = () => {}) {
  }


  // Social Media
  socialMedia_AnimationIn(onCompleteAll = () => {}) {
    return new TimelineLite().staggerFromTo(this.$socialMediaLink, 0.01, { y: -20, opacity: 0 }, { y: 0, opacity: 1, ease: Power2.easeOut }, 0.1, 0, onCompleteAll);
  }
  socialMedia_AnimationOut(onCompleteAll = () => {}) {
  }
}