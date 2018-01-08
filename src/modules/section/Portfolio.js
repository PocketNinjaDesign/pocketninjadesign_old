
import $ from 'jQuery';
import Section from './Section';
import Tab from '../Tab';
import CategoryList from '../CategoryList';

export default new class extends Section {
  constructor() {
    super();

    this.$portfolio = $('#portfolio');
    this.$portfolioNavigation = $('#portfolioNavigation');
    this.$tab = $('#portfolioTab');
    this.$tabContent = $('#portfolioTabContent');

    this.portfolioTab;
  }

  init() {
    this.portfolioTab = new Tab({ $tab: this.$tab }).init();

    CategoryList.generate('websites', this.$tabContent);
    this.activateNavigation();
  }

  activateNavigation() {
    let root = this;

    this.$portfolioNavigation.find('li').on('click', function() {
      CategoryList.generate($(this).data('portfolio-cat'), root.$tabContent);
    });
  }
}