import $ from '../jqlite.extends.js';
import {TweenMax, Power2, TimelineLite} from 'gsap';

export default new class SideNavigation {
  constructor() {
    this.$sideNav = $('#sideNavigation');
  }

  showFullSideBar() {
    let t1 = new TimelineLite({ delay: 0 });

    t1
      .add(() => {
        this.$sideNav.show();
      })
      .fromTo('#sideNavigation .logo', 0.3, { y: -30, opacity: 0 }, { y: 0, opacity: 1, ease: Power2.easeOut })
      .staggerFromTo('.side-link', 0.5, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: Power2.easeOut }, 0.2, 0.5)
      .staggerFromTo('#sideSocialLinks .social-media-link', 0.3, { y: -30, opacity: 0 }, { y: 0, opacity: 1, ease: Power2.easeOut }, 0.2, 0.5, () => {
        this.removeStyles();
      });
  }

  showMediumSideBar() {
    let t1 = new TimelineLite({ delay: 0 });

    t1
      .add(() => {
        this.$sideNav.show();
      })
      .staggerFromTo('#sideSocialLinks .social-media-link', 0.2, { opacity: 0 }, { opacity: 1, ease: Power2.easeOut }, 0.2, 0.5, () => {
        this.removeStyles();
      });
  }

  showSmallestSideBar() {
    this.removeStyles();
  }

  removeStyles() {
    // Remove demanding style attributes so media
    // queries in the css can take control again
    this.$sideNav.removeAttr('style');
    $('.side-link').removeAttr('style');
    $('#sideSocialLinks .social-media-link').removeAttr('style');
  }
}