import $ from 'jQuery';
import Section from './Section';
import Axios from 'axios';

const $codepenList = $('#codepenList');

export default new class Codepen extends Section {
  constructor() {
    super();

    // load codepen data
    return Axios({
      method:'get',
      url: 'https://cpv2api.com/pens/public/pocketninjadesign'
    })
    .then(function(response) {
      // display the data on the page
      // response;
      response.data.data.map(function(element) {
        console.log(element);
        $codepenList.append($(`
          <li class="grid-item">
            <a href="${element.link}" target="_blank">
              <img src="${element.images.small}">
            </a>
          </li>
        `));
      });
    });
  }
}