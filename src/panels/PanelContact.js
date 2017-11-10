import $ from 'jQuery';
import Panel from './Panel';

class PanelContact extends Panel {
  constructor() {
    super();
    this.$base = $('#panelContact');
  }
}

export default PanelContact;