import $ from 'jQuery';

export default {
  getTemplateSmallItem(item) {
    return $(`
      <li class="grid-item portfolio-swatch">
        <div class="inner">
          <img src="${item.small_image}">
        </div>
      </li>
    `);
  },
};