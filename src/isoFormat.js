function isoFormat (date) {
  var year    = date.getFullYear();
  var month   = date.getMonth() + 1; // Months are zero-indexed
  var day     = date.getDate();
  var hour    = date.getHours();
  var minute  = date.getMinutes();
  var second  = date.getSeconds();
  var msecond = date.getMilliseconds();

  month   = pad(month, 2);
  day     = pad(day, 2);
  hour    = pad(hour, 2);
  minute  = pad(minute, 2);
  second  = pad(second, 2);
  msecond = pad(msecond, 3);

  return `${year}-${month}-${day} ${hour}:${minute}:${second}.${msecond}`;
}

export default isoFormat;