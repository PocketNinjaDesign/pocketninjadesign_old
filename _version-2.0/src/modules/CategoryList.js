import globals from '../globals';
import LoadDataService from '../services/LoadData.service';
import CategoryService from '../services/Category.service';

import $ from 'jQuery';
import CategoryItem from './CategoryItem';

export default {
  generate(categoryName, $tabContent) {
    let url = `${globals.urlPrefix}data.php?portfolio=${categoryName}`;

    CategoryService.load(url, categoryName, false).then((data) => {
      for (let i = 0; i < data.length; i++) {
        $tabContent.find(`[data-portfolio-view="${categoryName}"]`)
          .children()
          .append(CategoryItem.getTemplateSmallItem(data[i]));
      }
    });
  },
};