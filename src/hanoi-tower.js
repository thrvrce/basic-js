const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  var myObj = {turns: 0, seconds: 0};
  myObj.turns = ( 2 ** disksNumber ) -1 ;
  myObj.seconds = Math.floor(3600 * myObj.turns / turnsSpeed);
  return myObj;
};
