import $ from 'jQuery';
import Panel from './Panel';
import boxEnlarger from '../modules/BoxEnlarger';

class PanelPortfolio extends Panel {
  constructor() {
    super();
    this.boxEnlargerBatch;
    this.$base = $('#panelPortfolio');
  }

  init() {
    this.boxEnlargerBatch = new boxEnlarger(this.$base, '.portfolio-swatch', false);
    this.boxEnlargerBatch.init();
  }
}

export default PanelPortfolio;