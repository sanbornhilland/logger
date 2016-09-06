import isoFormat from './isoFormat.js';

/**
 * @constructs logger
 * @returns logger
 */
function createLogger (className) {

  var properties = ['log', 'info', 'warn', 'error', 'debug'];

  function time () {
    return isoFormat(new Date);
  }

  function className () {
    return `[${className}]`
  }

  var logger = {};

  properties.forEach(function (property) {
    Object.defineProperty(logger, property, {
      get () {
        return console[property].bind(console, time(), className());
      }
    });
  });

  return logger;
}

export default createLogger;
