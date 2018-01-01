
const privateGetPromise = ($element, animationName, type) => {
  return new Promise((resolve, reject) => {
    $element
      .on(`animation${type}`, function(e) {
        if (animationName === e.originalEvent.animationName) {
          //console.log(`animation ${e.originalEvent.animationName} ${type}`);
          resolve(e);
        }
      });
  });
};



export default {

  /**
   * checkStarted
   * checks the given jQuery element when a particular animation has started
   * 
   * @param {jQuery} $()  
   * @param {String} animationName 
   */
  checkStarted($element, animationName) {
    return privateGetPromise($element, animationName, 'start');
  },

  /**
   * checkComplete
   * Checks the given jQuery element when a particular animation has finished
   * 
   * @param {jQuery} $()
   * @param {String} animationName 
   */
  checkComplete($element, animationName) {
    return privateGetPromise($element, animationName, 'end');
  },
};