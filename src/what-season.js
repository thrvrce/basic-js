const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( param ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  var result = 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(param) === '[object Date]'){
    switch (param.getMonth()){
     case 11:
     case 0  :
     case 1  : result = 'winter'; break;
     case 2  :
     case 3  :
     case 4  :result = 'spring'; break;
     case 5  :
     case 6  :
     case 7  :result = 'summer'; break;
     case 8  :
     case 9  :
     case 10 :result = 'autumn'; break;
     default : result = 'dunno'; break;
    }
  }
  else if (param !== undefined)
    throw new Error('ошибка');

  return result;
};
