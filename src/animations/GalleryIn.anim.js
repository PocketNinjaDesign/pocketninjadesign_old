import $ from '../jqlite.extends.js';
import {TweenMax, Power2, TimelineLite} from 'gsap';

export default new class GalleryInAnimation {
  constructor() {
    this.$primaryLogo = $('#primaryLogo');
    this.$sideNav = $('#sideNavigation');
    //this.$block2 = $('.body-block-2');
  }

  start() {
    // Firstly do some resets of pieces
    //this.$block2.removeAttr('style');
    this.$primaryLogo.removeAttr('style');

    let t1 = new TimelineLite();

    t1
      .fromTo(this.$primaryLogo, 0.2, {
        opacity: 0,
      }, {
        opacity: 1,
      })

      .staggerFromTo('.portfolio-list-item', 0.2, {
        opacity: 0,
        rotation: -360,
        scale: 0,
        y: 200
      }, {
        opacity: 1,
        rotation: 0,
        scale: 1,
        y: 0,
        ease: Elastic.easeOut.config(1, 0.9)
      }, 0.05)

      .fromTo('.portfolio-section-title', 0.4, {
        x: -30,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        ease: Power2.easeOut,
      }, 0)

      .fromTo('.portfolio-information-title', 0.4, {
        x: -30,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        ease: Power2.easeOut,
      }, 0.2)

      .fromTo('.portfolio-information-text', 0.7, {
        y: 200,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        ease: Power2.easeOut,
      }, 0.2)
  }
}