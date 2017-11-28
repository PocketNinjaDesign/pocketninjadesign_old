import $ from 'jQuery';
import $methods from '../jquery.methods';
import WidgetManager from '../services/WidgetManager.service';



const BOX_ENLARGER_NAME = 'box-enlarger';
const $BOX_OVERLAY = $('<div/>', {
  class: "box-enlarger-overlay"
});
const DEFAULT_SETTINGS = {
  base: $('body'),
  targetString: `data-${BOX_ENLARGER_NAME}`,
  clone: false,
  screenPercentage: 0.7,
  cloneContent: undefined,
  callBack: function() {},
};

$BOX_OVERLAY.appendTo('body');

// $.fn.BoxEnlarger_Maker = function() {
//   for(let i = 0; i < arguments.length; i++) {
//     this.BoxEnlarger();
//   }
//   return this;
// };

// $.fn.BoxEnlarger = function(group) {
//   let newBE = new BoxEnlarger();
//   newBE.init();

//   WidgetManager.addEntry('BoxEnlarger', newBE, group);

//   return this;
// }



/**
 * BoxEnlarger
 * Desc: For making any container you click on suddenly
 * enlarge to fit the screen like a popup
 *
 */
class BoxEnlarger {
  constructor(newOptions) {
    this.options = $.extend({}, DEFAULT_SETTINGS, newOptions);
    this.currentClone;
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

          $clone
            .on('click', function(e) {
              e.stopPropagation();
            })
            .css({
              width: newWidth,
              height: newHeight,
              left: newXPos,
              top: newYPos,
            });

          if(root.options.cloneContent !== undefined) {
            $clone
              .html('')
              .append(root.options.cloneContent);
          }

          root.options.callBack(index, $clone);
          
          root.currentClone = $clone;
        }

        // Activate box overlay
        $BOX_OVERLAY
          .addClass('box-overlay-active')
          .append($clone.css(box).addClass('box-enlarge-item'))
          .on('click', () => {
            $clone.remove();
            root.currentClone = undefined;

            $BOX_OVERLAY.removeClass('box-overlay-active').html('');
            $BOX_OVERLAY.off('click');
            $(window).off('resize.enlarge');
          });

        // On resize change the size of the enlarged
        $(window).on('resize.enlarge', function() {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(function() {
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

  ChangeCloneContent($content) {
    // Ability to alter the content of the clone to show anything
    if(this.currentClone !== undefined) {
      this
      .currentClone.html('')
      .append($content)
    }
  }
}

export default BoxEnlarger;