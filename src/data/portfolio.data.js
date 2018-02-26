// Import data and convert into new Maps
let data = require('./siteData');

// Convert siteData into a set of Maps
let galleryMap = new Map();
let setGalleryItemsToMap = (itemsList) => {
  let itemMap = new Map();

  for (let i = 0; i < itemsList.length; i++) {
    let title = itemsList[i].title;
    itemMap.set(title, itemsList[i]);
  }

  return itemMap;
};

for (let i = 0; i < data.navigation.length; i++) {
  let galleryTitle = data.navigation[i].title;
  galleryMap.set(galleryTitle, setGalleryItemsToMap(data.gallery[i].items));
}

export { galleryMap, data };