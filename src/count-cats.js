const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  var catsCounter = 0;
  matrix.forEach(function(value, index){
    value.forEach(function(innerValue){
      if ( innerValue === '^^')
        catsCounter++;
    }
    );
  }
  );
return catsCounter;
};
