import $ from 'jQuery';
import Panel from './Panel';

class PanelStyleguide extends Panel {
  constructor() {
    super();
    this.$base = $('#panelStyleguide');
  }
}

export default PanelStyleguide;