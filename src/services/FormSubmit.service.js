import $ from 'jQuery';

import globals from '../globals';
import Axios from 'axios';

class FormSubmit {
  constructor(formPath) {
    this.URL = `${globals.urlPrefix}${formPath}?`;
  }

  run(data = {}) {
    return Axios({
      method:'post',
      url: `${this.URL}${$.param(data)}`,
    })
    .then(function(response) {
      return response;
    });
  }
}

export default FormSubmit;