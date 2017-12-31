import $ from 'jQuery';
import Panel from './Panel';

class PanelAbout extends Panel {
  constructor() {
    super();
    this.$base = $('#panelAbout');
  }
}

export default PanelAbout;