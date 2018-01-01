import $ from 'jQuery';
import Section from './Section';
import Tab from '../Tab';

export default new class extends Section {
  constructor() {
    super();
    this.$portfolio = $('#portfolio');
    this.$portfolioNavigation = $('#portfolioNavigation');
    this.$tab = $('#portfolioTab');
    this.portfolioTab = new Tab({
      $tab: this.$tab
    });
    this.portfolioTab.init();
  }
}