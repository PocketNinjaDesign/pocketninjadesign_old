

export default {
  panels: {
    home: {
      loaded: false
    },
    about: {
      loaded: false
    },
    portfolio: {
      loaded: false
    },
  },

  setPanelLoaded: function(_panelName) {
    this.panels[_panelName].loaded = true;
  },

  isPanelLoaded: function(_panelName) {
    return this.panels[_panelName].loaded;
  }
};