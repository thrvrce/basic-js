const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
 var tmpStr = '';

 if (options.repeatTimes === undefined){
  options.repeatTimes = 1;
 }
 if (options.separator === undefined){
  options.separator = '+';
 }
 if (options.addition === undefined){
  options.addition = '';
 }
 if (options.additionSeparator === undefined){
  options.additionSeparator = '|';
 }
 if (options.addition === undefined){
  options.addition = '';
 }
 if (options.additionRepeatTimes === undefined){
  options.additionRepeatTimes = 1;
 }

 for (var i = 1; i <= options.repeatTimes; i++){
   tmpStr += str;
   for (var j = 1; j <= options.additionRepeatTimes; j++){
     tmpStr +=  (j !== options.additionRepeatTimes) ? options.addition + options.additionSeparator : options.addition;
   }
   tmpStr += (i !== options.repeatTimes) ? options.separator : '';
 }
return tmpStr;
};
