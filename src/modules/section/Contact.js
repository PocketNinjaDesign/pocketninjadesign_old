import $ from 'jQuery';
import Section from './Section';
import Form from '../form/Form';

export default new class Contact extends Section {
  constructor() {
    super();
    this.$form = $('#contactForm');
    this.form = new Form(this.$form, '/contact-form.php', $('<div/>').html('Form has been submitted'));
    this.form.init();
  }
}