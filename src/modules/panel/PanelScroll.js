import $ from 'jQuery';
import PanelService from '../../services/Panel.service';

// Scroll To Panel

class PanelScroll {
  constructor(options, $element) {
    const DATA_NAME = 'scroll-panel';
    const DEFAULT_OPTIONS = {
      width: 1600,
      height: 1600
    };
    this.$panelBase = $($element || '#panelBase');

    this.options = $.extend({},
      DEFAULT_OPTIONS,
      this.$panelBase.data(DATA_NAME),
      options);

    this.locations = {};
    this.navigation;
  }

  init() {
    this.setPanelBase();
    this.setLocations();
    this.setPanels();
  }

  setLocations() {
    this.$panelBase.find('.panel').each((index, element) => {
      let data = $(element).data('panel');
      this.locations[data.name] = {
        top: data.top,
        left: data.left
      };
    });
  }

  setPanelBase() {
    this.$panelBase.css({
      width: this.options.width + '%',
      height: this.options.height + '%',
    });
  }

  setPanels() {
    for (var key in this.locations) {
      this.$panelBase.find('.' + key).css({
        top: this.locations[key].top + '%',
        left: this.locations[key].left + '%',
        width: 100 * (100 / this.options.width) + '%',
        height: 100 * (100 / this.options.height) + '%'
      });

      PanelService.setPanelLoadedState(key);
    }
  }

  goToPanel(_panelName) {
    let top = this.locations[_panelName].top / 100;
    let left = this.locations[_panelName].left / 100;

    this.$panelBase.css({
      top: -(this.options.height * top) + '%',
      left: -(this.options.width * left) + '%'
    });
  }
}

export default PanelScroll;