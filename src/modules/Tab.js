import $ from 'jQuery';

const DEFAULT_OPTIONS = {
  $tab: undefined,
  startIndex: 0
};

class Tab {
  constructor(options) {
    this.options = $.extend({}, DEFAULT_OPTIONS, options);
    this.$navigation;
    this.$navigationList;
    this.$content;
    this.currentSelection = this.options.startIndex;
  }

  init() {
    this.$navigation = this.options.$tab.find('[data-tab-nav]');
    this.$navigationList = this.$navigation.find('li');
    this.$content = this.options.$tab.find('[data-tab-content]');
    this.$contentList = this.$content.find('.tab-content-item');

    this.setCurrentSelection(this.currentSelection);

    this.setEvents();
  }

  setEvents() {
    let root = this;

    this.$navigationList.on('click', function() {
      root.setCurrentSelection($(this).index());
    });
  }

  setCurrentSelection(newPosition) {
    this.$navigationList.eq(this.currentSelection).removeClass('active');
    this.$navigationList.eq(newPosition).addClass('active');

    this.$contentList.eq(this.currentSelection).hide();
    this.$contentList.eq(newPosition).show();

    this.currentSelection = newPosition;
  }
}

export default Tab;