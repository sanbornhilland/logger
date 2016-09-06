(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports', './isoFormat.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./isoFormat.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.isoFormat);
    global.logger = mod.exports;
  }
})(this, function (module, exports, _isoFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _isoFormat2 = _interopRequireDefault(_isoFormat);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function getClassString(className) {
    return className ? '[' + className + ']' : '';
  }

  function createLogger(className) {

    var logger = {};

    ['log', 'info', 'warn', 'error', 'debug'].forEach(function (property) {
      Object.defineProperty(logger, property, {
        get: function get() {
          return console[property].bind(console, (0, _isoFormat2.default)(new Date()), getClassString(className));
        }
      });
    });

    return logger;
  }

  exports.default = createLogger;
  module.exports = exports['default'];
});