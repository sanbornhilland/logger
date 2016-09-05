import isoFormat from './isoFormat.js';

/**
 * @constructs logger
 * @returns logger
 */
function createLogger (className) {

  function time () {
    return isoFormat(new Date);
  }

  function className () {
    return `[${className}]`
  }

  var logger = {};

  Object.defineProperty(logger, log, {
    get () {
      return console.log.bind(console, time(), className());
    }
  });

  Object.defineProperty()
    info: getLogFunction('info'),

    /**
     * @function
     * @param {*} args Values to print to the console
     */
    warn: getLogFunction('warn'),

    /**
     * @function
     * @param {*} args Values to print to the console
     */
    error: getLogFunction('error'),

    /**
     * @function
     * @param {*} args Values to print to the console
     */
    debug: debug ? getLogFunction('debug') : QP.noop
  };



  return logger;
}

export default createLogger;
