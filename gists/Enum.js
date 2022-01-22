var Enum;

module.exports = Enum = (function() {
  function Enum(fields) {
    var _this = this;
    if (!(fields != null ? fields.length : void 0) || !Array.isArray(fields)) {
      throw 'Fields must be an array of Strings';
    }
    fields.forEach(function(field) {
      return _this[field.toUpperCase()] = field.toUpperCase();
    });
  }

  return Enum;

