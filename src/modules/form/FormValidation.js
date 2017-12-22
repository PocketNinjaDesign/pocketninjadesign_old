import $ from 'jQuery';

// Form validation

export default {
  sayHello() {
    return "Hello";
  },

  formBlock($formBlock) {
    $formBlock.find('.input').on('keyup', function(e) {
      console.log($(this).val());
    });
  }
};