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
    this.boxEnlargerTest1 = new boxEnlarger({
      base: this.$base,
      targetString: '#EnlargementTest1',
    });
    this.boxEnlargerTest1.init();

    this.boxEnlargerTest2 = new boxEnlarger({
      base: this.$base,
      targetString: '.widget-enlargement-test',
    });
    this.boxEnlargerTest2.init();
  }
}

export default PanelStyleguide;