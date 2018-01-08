import Axios from 'axios';

export default {
  load(url) {
    return Axios({
      method:'get',
      url: url
    })
    .then(function(response) {
      return response;
    });
  }
};