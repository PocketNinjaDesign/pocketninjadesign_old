import $ from 'jQuery';

import FormBlock from './FormBlock';
import FormSubmitService from '../../services/FormSubmit.service';
import LoaderAnim from '../loaderAnims/LoaderAnim';
import Overlay from '../Overlay';

class Form {
  constructor($form, formPathname) {
    this.$form = $form;
    this.formPathname = formPathname;
    this.formElementList = [];
  }

  init() {
    let root = this;

    // Find all form blocks and push to formElementList
    this.$form.find('[data-form-block]').map(function(index, element) {
      let $element = $(element);

      root.formElementList.push(new FormBlock({
        $formBlock: $element,
        type: $element.data('form-block').type,
        name: $element.find('[data-form-element]').attr('name'),
      }));
    });

    this.$form.submit(function(e) {
      e.preventDefault();

      if(root.allFormElementsValid()) {
        let contactForm = new FormSubmitService(root.formPathname);
        let postData = {};

        root.formElementList.forEach(function(element) {
          postData[element.getName()] = element.getValue();
        });

        // Create new loaderAnim
        let panelLoader = new LoaderAnim({
          positionType: 'fixed'
        });
        panelLoader.create();
        panelLoader.show();

        contactForm.run(postData).then(function(response) {
          panelLoader.remove();
          // Show Model of success
          // or
          // Nothing as you shouldn't be able to submit if it is invalid
        });
      }
    });
  }

  allFormElementsValid() {
    let result = true;

    this.formElementList.forEach(function(element) {
      if(!element.isValid()) {
        result = false;
      }
    });

    // if all not false then return true
    return result;
  }
}

export default Form;