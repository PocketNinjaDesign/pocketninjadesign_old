import $ from 'jQuery';

import FormBlock from './FormBlock';
import FormSubmitService from '../../services/FormSubmit.service';
import LoaderAnim from '../loaderAnims/LoaderAnim';
import Overlay from '../Overlay';
import Modal from '../Modal';

class Form {
  constructor($form, formPathname, $modalSuccessTemplate) {
    this.$form = $form;
    this.formPathname = formPathname;
    this.formElementList = [];
    this.$modalSuccessTemplate = $modalSuccessTemplate || undefined;
  }

  init() {
    this.setFormBlocks();
    this.setFormAction();
  }

  setFormBlocks() {
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
  }

  setFormAction() {
    let root = this;

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

        // Create Modal
        let modalSuccess = new Modal({
          addedClassName: 'modal-contact-form-success',
          $modalContent: root.$modalSuccessTemplate,
        });
        modalSuccess.init();

        contactForm.run(postData).then(function(response) {
          // Add removeCallback function for when the overlay has
          // finished animating out
          panelLoader.setRemoveCallBack(function() {
            modalSuccess.show();
            root.resetForm();
          });

          panelLoader.remove();
        });
      }
    });
  }

  formIsEmpty() {
    return this.formElementList.length < 1;
  }

  allFormElementsValid() {
    if(this.formIsEmpty()) {
      return false;
    }

    let result = true;

    this.formElementList.forEach(function(element) {
      if(!element.isValid()) {
        result = false;
      }
    });

    // if all not false then return true
    return result;
  }

  resetForm() {
    // loop through form blocks and reset
    this.formElementList.forEach(function(elementItem) {
      elementItem.reset();
    });

    // clear formElementList and remove
    this.formElementList = [];
    this.setFormBlocks();
  }
}

export default Form;