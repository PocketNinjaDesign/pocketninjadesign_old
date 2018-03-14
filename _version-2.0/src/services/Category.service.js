import LoadDataService from './LoadData.service';

export default {
  websites: {
    activated: false,
    data: [],
  },
  graphics: {
    activated: false,
    data: [],
  },
  illustrations: {
    activated: false,
    data: [],
  },

  load(url, categoryName, AllReturn = true) {
    const category = this[categoryName];

    return new Promise((resolve) => {
      if (!category.activated) {
        LoadDataService.load(url).then((response) => {
          category.data = response.data;
          category.activated = true;
          resolve(response.data);
        });
      } else {
        if(AllReturn) {
          resolve(category.data);
        }
      }
    });
  }
};