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
    let contactForm = new Form($('#contactForm'), 'contact-form.php');
    contactForm.init();
  }
}

export default PanelContact;