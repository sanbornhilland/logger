(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.isoFormat = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function pad(num, digits) {
    while (num.toString().length < digits) {
      num = '0' + num;
    }
    return num.toString();
  };

  function isoFormat(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // Months are zero-indexed
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var msecond = date.getMilliseconds();

    month = pad(month, 2);
    day = pad(day, 2);
    hour = pad(hour, 2);
    minute = pad(minute, 2);
    second = pad(second, 2);
    msecond = pad(msecond, 3);

    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + '.' + msecond;
  }

  exports.default = isoFormat;
  module.exports = exports['default'];
});