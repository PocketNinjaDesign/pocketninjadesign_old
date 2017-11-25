import $ from 'jQuery';
import $methods from '../jquery.methods';

const boxEnlargerName = 'box-enlarger';
const $boxOverlay = $('<div/>', {
  class: "box-enlarger-overlay"
});

$boxOverlay.appendTo('body');

/**
 * BoxEnlarger
 * Desc: For making any container you click on suddenly
 * enlarge to fit the screen like a popup
 *
 */
class BoxEnlarger {
  constructor($base = $('body'), targetString = `[data-${boxEnlargerName}]`, clone = false) {
    this.$base = $base;
    this.targetString = targetString;
    this.clone = clone;
  }

  init() {
    let root = this;

    this.$base.find(this.targetString).each(function(index, element) {
      let $e = $(element);

      $e.on('click', () => {
        let box = $methods.getBoxOffsetFull($e);
        let $clone = $methods.makeClone($e, this.clone);

        let windowBox = $methods.getBoxWindow();
        let resizeTimeout;

        let setNewSizeAndPosition = () => {
          let boxPercentage, newWidth, newHeight, newXPos, newYPos;
          
          boxPercentage = $methods.getBoxLongestAxisPercentage(box, windowBox);

          if(boxPercentage.axis === 'width') {
            newWidth = windowBox.width * .7;
            newHeight = box.height / box.width * newWidth;
            newXPos = (windowBox.width / 2) - (newWidth / 2);
            newYPos = (windowBox.height / 2) - (newHeight / 2);
          }
          else {
            // Height
            newHeight = windowBox.height * .7;
            newWidth = box.width / box.height * newHeight;
            newXPos = (windowBox.width / 2) - (newWidth / 2);
            newYPos = (windowBox.height / 2) - (newHeight / 2);
          }

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
          });

        // On resize change the size of the enlarged
        $(window).on('resize', function() {
          console.log('resizing');
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(function() {
            setNewSizeAndPosition();
          }, 200);
        });
          
        setTimeout(function() {
          //$clone.addClass('active');
          setNewSizeAndPosition();
        }, 1000);
      });
    });
  }
}

export default BoxEnlarger;