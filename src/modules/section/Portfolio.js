import globals from '../../globals';
import LoadDataService from '../../services/LoadData.service';
import CategoryService from '../../services/Category.service';

import $ from 'jQuery';
import Section from './Section';
import Tab from '../Tab';

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
    this.startTab();
    this.loadCategory('websites');
    this.activateNavigation();
  }

  startTab() {
    this.portfolioTab = new Tab({
      $tab: this.$tab
    });
    this.portfolioTab.init();
  }

  loadCategory(categoryName) {
    if (!CategoryService[categoryName].activated) {
      let url = `${globals.urlPrefix}data.php?portfolio=${categoryName}`;

      LoadDataService.load(url).then((response) => {
        let $categoryContent = this.$tabContent.find(`[data-portfolio-view="${categoryName}"]`).children();
        CategoryService[categoryName].data = response.data;

        for (let i = 0; i < response.data.length; i++) {
          let item = response.data[i];
          $categoryContent.append(this.getTemplateSmallItem(item));
        }

        CategoryService[categoryName].activated = true;
      });
    }
    else {
      console.log('already activated!');
    }
  }

  activateNavigation() {
    let root = this;

    this.$portfolioNavigation.find('li').on('click', function() {
      root.loadCategory($(this).data('portfolio-cat'));
    });
  }

  getTemplateSmallItem(item) {
    return $(`
      <li class="grid-item portfolio-swatch">
        <div class="inner">
          <img src="${item.small_image}">
        </div>
      </li>
    `);
  }
}