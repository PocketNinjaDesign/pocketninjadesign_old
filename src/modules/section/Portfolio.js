import $ from 'jQuery';
import Section from './Section';
import Carousel from '../Carousel';

export default new class extends Section {
  constructor() {
    super();
    this.$portfolio = $('#portfolio');
    this.$portfolioNavigation = $('#portfolioNavigation');
    this.$carousel = $('#portfolioCarousel');

    this.carousel = new Carousel({
      $carousel: this.$carousel
    });
    this.carousel.init();
  }
}