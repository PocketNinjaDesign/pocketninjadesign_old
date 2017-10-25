import $ from 'jQuery';

// Scroll To Panel

class PanelScroll {
  constructor(options, $element) {
    const DATA_NAME = 'scroll-panel';
    const DEFAULT_OPTIONS = {
      width: 800,
      height: 800
    };
    this.$panelBase = $($element || '#panelBase');

    this.options = $.extend({},
      DEFAULT_OPTIONS,
      this.$panelBase.data(DATA_NAME),
      options);

    this.locations = {
      landing: { top: 0, left: 0 },
      home: { top: 25, left: 25 },
      about: { top: 50, left: 50 },
      portfolio: { top: 0, left: 75 }
    }
    this.navigation;
  }

  init() {
    this.setPanelBase();
    this.setPanels();
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