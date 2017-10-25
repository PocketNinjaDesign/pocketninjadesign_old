import $ from 'jQuery';

class PanelNavigation {
  constructor(element, onClick) {
    $(element).find('.nav').each(function() {
      var $this = $(this);
      var option = $this.data('nav');
    
      $this.on('click', () => {
        onClick($(this).data('nav'));
      });
    });
  }
};

export default PanelNavigation;