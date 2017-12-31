import $ from 'jQuery';
import Panel from './Panel';

class PanelExperiments extends Panel {
  constructor() {
    super();
    this.$base = $('#panelExperiments');
  }
}

export default PanelExperiments;