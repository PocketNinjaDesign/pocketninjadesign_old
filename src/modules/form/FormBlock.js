import $ from 'jQuery';

const DEFAULT_OPTIONS = {
  keyUpCheckMode: false,
  overrideRegex: undefined,
  type: 'text',
  name: undefined, // required
  $formBlock: undefined, // required
  $formElement: undefined, // required
};

class FormBlock {
  constructor(newOptions) {
    this.options = $.extend({}, DEFAULT_OPTIONS, newOptions);

    // Check every time the key is pressed
    this.type = this.options.type;
    this.regex;
    this.setRegEx();
    this.isElementValid = false;

    this.$formBlock = this.options.$formBlock;
    this.$formElement = this.$formBlock.find('[data-form-element]');

    this.prepareForValidating();
  }

  // Set regex based on type or using the overrideRegex
  setRegEx() {
    if(this.options.overrideRegex === undefined) {
      switch(this.type) {
        case 'email':
          this.regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          break;
        case 'textarea':
          this.regex = /^[\w\s\r?!,@$#\.\-]*$/;
          break
        default:
          this.regex = /^[\w\s]+$/;
      }
    }
    else {
      this.regex = this.options.overrideRegex;
    }
  }

  // Start Validating after focus out
  prepareForValidating() {
    let root = this;

    this.$formBlock.on('focusout', function(e) {
      root.$formBlock.off('focusout');
      root.options.keyUpCheckMode = true;
      root.startValidating();
    });
  }

  startValidating() {
    // Begin validaton of the form block
    let root = this;

    let keyUpHandler = (e) => {
      root.isElementValid = root.checkValidation();

      if(root.isElementValid) {
        root.$formElement
          .removeClass('is-not-valid')
          .addClass('is-valid');
      }
      else {
        root.$formElement
          .removeClass('is-valid')
          .addClass('is-not-valid');
      }
    }

    this.$formBlock.on('keyup', function(e) {
      keyUpHandler(e);
    });

    keyUpHandler();
  }

  checkValidation() {
    // Check if the content of the form block is correct
    let result = false;
    let value = this.$formElement.val();

    if(value.length > 0) {
      result = this.regex.test(value);
    }

    return result;
  }

  getValue() {
    return this.$formElement.val();
  }

  isValid() {
    return this.isElementValid;
  }

  getName() {
    return this.options.name;
  }
}

export default FormBlock;