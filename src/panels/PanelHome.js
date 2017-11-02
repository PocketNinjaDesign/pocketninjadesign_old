import $ from 'jQuery';
import Panel from './Panel';

class PanelHome extends Panel {
  constructor() {
    super();
    this.$base = $('#panelHome');
  }
}

export default PanelHome;