import isoFormat from './isoFormat.js';

function createLogger (className) {

  var logger = {};

  ['log', 'info', 'warn', 'error', 'debug'].forEach(function (property) {
    Object.defineProperty(logger, property, {
      get () {
        return console[property].bind(console, isoFormat(new Date), `[${className}]`);
      }
    });
  });

  return logger;
}

export default createLogger;
