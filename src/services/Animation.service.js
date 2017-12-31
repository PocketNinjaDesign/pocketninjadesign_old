import $ from 'jQuery';

export default {

  checkComplete($element, animationName) {
    return new Promise((resolve, reject) => {
      $element
        .on('animationend', function(e) {
          if (animationName === e.originalEvent.animationName) {
            resolve(e);
          }
        });
    });
  },

  sayHello() {
    console.log('Helloo Animation Service');
  }
};