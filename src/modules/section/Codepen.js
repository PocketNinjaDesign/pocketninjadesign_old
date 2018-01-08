import $ from 'jQuery';
import Section from './Section';
import LoadDataService from '../../services/LoadData.service';

const $codepenList = $('#codepenList');

export default new class Codepen extends Section {
  constructor() {
    super();
  }

  init() {
    LoadDataService
      .load('https://cpv2api.com/pens/public/pocketninjadesign')
      .then((response) => {
        response.data.data.map((element) => {
          $codepenList.append(this.getTemplate(element));
        });
      });
  }

  getTemplate(content) {
    return $(`
      <li class="grid-item">
        <a class="codepen-item" href="${content.link}" title="${content.title}" target="_blank">
          <span class="codepen-item-inner">
            <img src="${content.images.small}">
            <span class="codepen-item-detail">
              <span class="codepen-item-title">${content.title}</span>
            </span>
          </span>
        </a>
      </li>
    `);
  }
}