import $ from 'jQuery';

const boxEnlargerName = 'box-enlarger';
const $boxOverlay = $('<div/>', {
  class: "box-enlarger-overlay"
});

$boxOverlay.on('click', () => {
  $boxOverlay.removeClass('box-overlay-active').html('');
});

$boxOverlay.appendTo('body');

/**
 * BoxEnlarger
 * Desc: For making any container you click on suddenly
 * enlarge to fit the screen like a popup
 *
 */
class BoxEnlarger {
  constructor($base = $('body'), targetString = `[data-${boxEnlargerName}]`) {
    this.$base = $base;
    this.targetString = targetString;
  }

  init() {
    let root = this;
    this.$base.find(this.targetString).each(function(index, element) {
      let $e = $(element);
      let $clone = $e.clone();

      $e.on('click', () => {
        let offset = $e.offset();
        let box = {
          width: $clone.innerWidth(),
          height: $clone.innerHeight()
        };
        box = $.extend({}, offset, box, {
          bottom: offset.top + box.height,
          right: offset.left + box.width,
          margin: 0
        });

        $boxOverlay.addClass('box-overlay-active');
        $boxOverlay.append($clone.css(box).addClass('clone-item')); 
      });
    });
  }
}

export default BoxEnlarger;