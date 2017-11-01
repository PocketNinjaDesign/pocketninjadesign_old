
/**
 * Each panel is dynamically stored in panels with it's loaded state
 */
export default {
  panels: {
  },

  setPanelLoadedState: function(_panelName, _loadedState = false) {
    if(this.panels[_panelName]) {
      this.panels[_panelName].loaded = _loadedState;
    }
    else {
      this.panels[_panelName] = {
        loaded: _loadedState
      }
    }
  },

  isPanelLoaded: function(_panelName) {
    return this.panels[_panelName] && this.panels[_panelName].loaded;
  }
};