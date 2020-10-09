const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
 constructor (directStr = true){
  this.directStr = directStr;
 }
  encrypt(message, key) {
    return this.myencrypt (message, key, true);
  }
  decrypt(message, key) {
    return this.myencrypt (message, key, false);
  }

  myencrypt (message, key, mode){
  var tmpStr = '';
  if ( message === undefined || key === undefined || message === '' || key === ''){
    throw new Error ('Не все параметры переданы');
  }
  message = message.toUpperCase();
  key = key.toUpperCase();
  var keyCounter = 0;
  var i = 0;
  var sdvig = 0;
  while(i < message.length){
    if ( /^[A-Z]$/.test(message[i])  ){
    keyCounter = (i - sdvig) % key.length;
    var keyCode = key.charCodeAt(keyCounter);
    var mCode = message.charCodeAt(i);
    var modifier = (mode) ? 1 : -1;
    var x = (keyCode - 65);
    var newCode = (x * modifier) + mCode;
    if (newCode < 65 ||  newCode >90){
      newCode = mode ?  ((x + mCode) % 91 + 65) : (90 - (64 - (newCode % 65)));
    }
    tmpStr+= String.fromCharCode(newCode);
    }
    else{
      tmpStr += message[i];
      sdvig++;
    }
    i++;
  }
  return  (this.directStr) ?  tmpStr: String(tmpStr).split("").reverse().join("");
}
}
module.exports = VigenereCipheringMachine;
