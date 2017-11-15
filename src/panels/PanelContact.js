import $ from 'jQuery';
import Panel from './Panel';
import FormValidation from '../modules/FormValidation';

class PanelContact extends Panel {
  constructor() {
    super();
    this.$base = $('#panelContact');
    this.$form;
  }

  init() {
    this.$form = $('#contactForm');
    this.$form.submit(function(e) {
      // Write all Form validation here
      console.log('Form submit called and stopped');
      console.log(FormValidation.sayHello());
      e.preventDefault();
    });
  }
}

export default PanelContact;