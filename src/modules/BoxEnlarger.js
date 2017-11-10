import $ from 'jQuery';

const boxEnlargerName = 'box-enlarger';

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
      //console.log($e.offset());
    });
  }
}

export default BoxEnlarger;