import $ from 'jQuery';

let Methods = {

  getBoxWindow() {
    return {
      width: $(window).innerWidth(),
      height: $(window).innerHeight(),
    }
  },



  // Returns percentage of the width and height
  // of a box to the window size. Also the chosen
  // axis to focus on.
  getBoxLongestAxisPercentage(box, window) {
    const boxPercentage = {
      widthPercentage: box.width / window.width,
      heightPercentage: box.height / window.height,
    };

    // console.log(boxPercentage);
    // console.log('width', boxPercentage.widthPercentage);
    // console.log('height', boxPercentage.heightPercentage);
    // console.log('width % less than height', boxPercentage.widthPercentage < boxPercentage.heightPercentage);

    return $.extend({}, boxPercentage, {
      axis: (boxPercentage.widthPercentage > boxPercentage.heightPercentage) ? 'width' : 'height'
    });
  },


  // makeClone
  // Returns a clone duplicate or a div with
  // the same classnames and cloned content
  makeClone($e, isClone) {
    if (isClone) {
      return $e.clone();
    }
    else {
      return $('<div/>', {
        class: $e.attr('class'),
        style: $e.attr('style')
      }).append($e.children().clone());
    }
  },

  //Returns offset object top, left, bottom, right
  getOffsetAll($e) {
    let offset = $e.offset();

    return $.extend({}, offset, {
      right: $e.outerWidth(),
      bottom: $e.outerHeight()
    });
  },


  // Returns an object of {
  //  width,
  //  height,
  //  offset left,
  //  offset right,
  //  offset right,
  //  offset bottom
  // }
  getBoxOffsetFull($e) {
    let offset = $e.offset();
    let box = {
      width: $e.innerWidth(),
      height: $e.innerHeight()
    };
    return $.extend({}, offset, box, {
      bottom: offset.top + box.height,
      right: offset.left + box.width
    });
  }
}

export default Methods;