import isoFormat from './isoFormat.js';

function getClassString (className) {
  return className ? `[${className}]` : '';
}

function createLogger (className) {

  var logger = {};

  ['log', 'info', 'warn', 'error', 'debug'].forEach(function (property) {
    Object.defineProperty(logger, property, {
      get () {
        return console[property].bind(console, isoFormat(new Date), getClassString(className));
      }
    });
  });

  return logger;
}

export default createLogger;
