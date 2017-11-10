import $ from 'jQuery';
import Panel from './Panel';
import boxEnlarger from '../modules/BoxEnlarger';

class PanelStyleguide extends Panel {
  constructor() {
    super();
    this.boxEnlargerBatch;
    this.$base = $('#panelStyleguide');
  }

  init() {
    this.boxEnlargerBatch = new boxEnlarger(this.$base, '.swatch');
    this.boxEnlargerBatch.init();
  }
}

export default PanelStyleguide;