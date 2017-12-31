import $ from 'jQuery';

import Panel from './Panel';
import Form from '../modules/form/Form';
import FormBlock from '../modules/form/FormBlock';
import FormSubmitService from '../services/FormSubmit.service';

class PanelContact extends Panel {
  constructor() {
    super();
    this.$base = $('#panelContact');
  }

  init() {
    let $modalSuccessTemplate = $(`<div class="modal-success">Your message is in transit by digital pigeon and a ninja will be dispatched as soon as possible.  Just listen for a rusting in the trees,  and if there are no trees!  We apologize for the sudden appearence.</div>`);

    let contactForm = new Form($('#contactForm'), 'contact-form.php', $modalSuccessTemplate);
    contactForm.init();
  }
}

export default PanelContact;