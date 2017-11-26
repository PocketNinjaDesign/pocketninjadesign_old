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
    this.boxEnlargerBatch = new boxEnlarger({
      base: this.$base,
      targetString: '.portfolio-swatch',
    });
    this.boxEnlargerBatch.init();
  }
}

export default PanelPortfolio;