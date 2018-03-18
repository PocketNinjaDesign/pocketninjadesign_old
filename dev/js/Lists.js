export default {

  /**
   * @description Returns an random item from a passed array
   * @param {Array} list
   */
  getRandomListItem(list) {
    const { length } = list;

    return (length === 1) ?
      list[0] :
      list[Math.floor(Math.random() * length)];
  },

  /**
   * objectAssign
   *
   * @description Merges each list object instance with a default object
   * @param {Object} obj main object defaults to be merged with
   * @param {Array} list List of objects to override any obj defaults
   * @returns {Array} final list after merging
   */
  objectAssign(obj, _list) {
    const list = _list;

    for (let i = 0; i < list.length; i += 1) {
      list[i] = Object.assign({}, obj, list[i]);
    }

    return list;
  },
};
