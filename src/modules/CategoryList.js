import globals from '../globals';
import LoadDataService from '../services/LoadData.service';
import CategoryService from '../services/Category.service';

import $ from 'jQuery';
import CategoryItem from './CategoryItem';

export default {
  generate(categoryName, $tabContent) {
    if (!CategoryService[categoryName].activated) {
      let url = `${globals.urlPrefix}data.php?portfolio=${categoryName}`;

      LoadDataService.load(url).then((response) => {
        let $categoryContent = $tabContent.find(`[data-portfolio-view="${categoryName}"]`).children();
        CategoryService[categoryName].data = response.data;

        for (let i = 0; i < response.data.length; i++) {
          let item = response.data[i];
          $categoryContent.append(CategoryItem.getTemplateSmallItem(item));
        }

        CategoryService[categoryName].activated = true;
      });
    }
    else {
      // console.log('already activated!');
    }
  },
};