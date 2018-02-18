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
      .fromTo('#sideNavigation .logo', 0.3, { y: -30, opacity: 0 }, { y: 0, opacity: 1, ease: Linear.easeOut })
      .staggerFromTo('.side-link', 0.2, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: Linear.easeOut }, 0.2, 0.5)
      .staggerFromTo('#sideSocialLinks .social-media-link', 0.2, { y: -30, opacity: 0 }, { y: 0, opacity: 1, ease: Linear.easeOut }, 0.2, 0.5, () => {
        // Remove demanding style attributes so media
        // queries in the css can take control again
        this.$sideNav.removeAttr('style');
        $('.side-link').removeAttr('style');
        $('#sideSocialLinks .social-media-link').removeAttr('style');
      });
  }

  showMediumSideBar() {
    let t1 = new TimelineLite({ delay: 0 });

    t1
      .add(() => {
        this.$sideNav.show();
      })
      .staggerFromTo('#sideSocialLinks .social-media-link', 0.2, { opacity: 0 }, { opacity: 1, ease: Linear.easeOut }, 0.2, 0.5, () => {
        // Remove demanding style attributes so media
        // queries in the css can take control again
        $('#sideSocialLinks .social-media-link').removeAttr('style');
      });
  }

  showSmallestSideBar() {

  }
}