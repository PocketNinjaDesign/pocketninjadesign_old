const css = require('../styles/primary.scss');

import $ from 'jQuery';
import EggTimer from './experiment';
import PanelScroll from './modules/panelScroll';

let arse = new EggTimer();
arse.hello();

$(() => {
  let basePanel = new PanelScroll();
  basePanel.init();

  let $nav = $('#nav');

  $nav.find('.nav').each(function() {
    var $this = $(this);
    var option = $this.data('nav');

    $this.on('click', function() {
      basePanel.goToPanel($(this).data('nav'));
    });
  });
});