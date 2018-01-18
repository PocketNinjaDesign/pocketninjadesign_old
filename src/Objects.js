export default {
  isTypeOf(str, obj) {
    //console.log(Object.prototype.toString.call(obj));
    return '[object ' + str + ']' === Object.prototype.toString.call(obj);
  },

  isArray(obj) {
    return this.isTypeOf('Array', obj);
  },

  isString(obj) {
    return this.isTypeOf('String', obj);
  },

  isNumber(obj) {
    return this.isTypeOf('Number', obj);
  },

  isObject(obj) {
    return this.isTypeOf('Object', obj);
  }
}