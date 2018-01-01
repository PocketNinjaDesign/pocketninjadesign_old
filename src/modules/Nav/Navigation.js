import $ from 'jQuery';


class Navigation {
  constructor(element, callBack = function() {}) {
    this.$element = $(element);
    this.callBack = callBack;
  }

  init() {
    let root = this;

    this.$element.find('.nav').each(function() {
      let $this = $(this);
      let option = $this.data('nav');
    
      $this.on('click', () => {
        let panelName = $(this).data('nav');

        root.callBack();
      });
    });
  }
};

export default Navigation;