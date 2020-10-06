const CustomError = require("../extensions/custom-error");

module.exports = function transform( inputArr ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  var transformedArr = new Array ();
  var arr = inputArr.slice();
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  for (var index = 0; index < arr.length; index++){
   var doTransform = false;
   var value = arr[index];
   var i = 0;

   switch (value){
      case discardPrev:
      case doublePrev : i = -1; doTransform = true; break;
      case discardNext:
      case doubleNext : i = 1;  doTransform = true; break;
      case undefined: continue; break;
      default: break;
    }
    if (doTransform){
      var prevValue = arr[index + i];

      if ( prevValue !== undefined
        && ( prevValue !== discardPrev
          && prevValue !== doublePrev
          && prevValue !== discardNext
          && prevValue !== doubleNext ) ){
        switch (value){
        case discardPrev: transformedArr.pop(); break;
        case doublePrev :
        case doubleNext : transformedArr.push(prevValue); break;
        case discardNext: arr[index+i]= undefined;

        default: break;
        }
      }
    }
    else{
      transformedArr.push(value);
    }
  }
  return transformedArr;
};
