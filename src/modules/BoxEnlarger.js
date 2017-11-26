import $ from 'jQuery';
import $methods from '../jquery.methods';

const BOX_ENLARGER_NAME = 'box-enlarger';
const $boxOverlay = $('<div/>', {
  class: "box-enlarger-overlay"
});
const $defaultSettings = {
  base: $('body'),
  targetString: `data-${BOX_ENLARGER_NAME}`,
  clone: false,
  screenPercentage: 0.7,
};

$boxOverlay.appendTo('body');

/**
 * BoxEnlarger
 * Desc: For making any container you click on suddenly
 * enlarge to fit the screen like a popup
 *
 */
class BoxEnlarger {
  constructor(newOptions) {
    this.options = $.extend({}, $defaultSettings, newOptions);
  }

  init() {
    let root = this;

    this.options.base.find(this.options.targetString).each(function(index, element) {
      let $e = $(element);

      $e.on('click', () => {
        let box = $methods.getBoxOffsetFull($e);
        let $clone = $methods.makeClone($e, root.options.clone);
        let resizeTimeout;

        let setNewSizeAndPosition = () => {
          let boxPercentage, newWidth, newHeight, newXPos, newYPos, windowBox;
          windowBox = $methods.getBoxWindow();

          boxPercentage = $methods.getBoxLongestAxisPercentage(box, windowBox);

          if(boxPercentage.axis === 'width') {
            newWidth = windowBox.width * root.options.screenPercentage;
            newHeight = box.height / box.width * newWidth;
          }
          else {
            // Height
            newHeight = windowBox.height * root.options.screenPercentage;
            newWidth = box.width / box.height * newHeight;
          }

          newXPos = (windowBox.width / 2) - (newWidth / 2);
          newYPos = (windowBox.height / 2) - (newHeight / 2);

          $clone.css({
            width: newWidth,
            height: newHeight,
            left: newXPos,
            top: newYPos,
          });
        }

        // Activate box overlay
        $boxOverlay
          .addClass('box-overlay-active')
          .append($clone.css(box).addClass('clone-item'))
          .on('click', () => {
            $clone.remove();
            $boxOverlay.removeClass('box-overlay-active').html('');
            $boxOverlay.off('click');
            $(window).off('resize.enlarge');
          });

        // On resize change the size of the enlarged
        $(window).on('resize.enlarge', function() {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(function() {
            console.log('resize and position activated');
            setNewSizeAndPosition();
          }, 200);
        });

        // Animate the clone to it's new
        // size and position
        setTimeout(function() {
          setNewSizeAndPosition();
        }, 1000);
      });
    });
  }
}

export default BoxEnlarger;