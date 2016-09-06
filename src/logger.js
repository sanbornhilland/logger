import isoFormat from './isoFormat.js';

/**
 * @constructs logger
 * @returns logger
 */
function createLogger (className) {

  var properties = ['log', 'info', 'warn', 'error', 'debug'];

  var logger = {};

  properties.forEach(function (property) {
    Object.defineProperty(logger, property, {
      get () {
        return console[property].bind(console, isoFormat(new Date), `[${className}]`);
      }
    });
  });

  return logger;
}

export default createLogger;
