import $ from 'jQuery';

import PanelScrollBase from './PanelScrollBase';
import LoadPageContentService from '../../services/LoadPageContent.service';

class PanelNavigation {
  constructor(element) {
    this.$element = $(element);
  }

  init() {
    this.$element.find('.nav').each(function() {
      let $this = $(this);
      let option = $this.data('nav');
    
      $this.on('click', () => {
        let panelName = $(this).data('nav');

        // Send the site to 
        PanelScrollBase.goToPanel(panelName);

        // Load the panel content with clean
        // content area as false
        LoadPageContentService.getPage({
          panelName: panelName,
          cleanContent: false
        });
      });
    });
  }
};

export default PanelNavigation;