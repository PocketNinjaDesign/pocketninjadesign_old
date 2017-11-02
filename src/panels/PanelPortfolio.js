import $ from 'jQuery';
import Panel from './Panel';

class PanelPortfolio extends Panel {
  constructor() {
    super();
    this.$base = $('#panelPortfolio');
  }
}

export default PanelPortfolio;