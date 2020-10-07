const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
 calculateDepth( arr ) {
  var curDepth = 0;
  var maxDepth = 0;
  if (Array.isArray(arr)){
    maxDepth = curDepth = 1;
    for (var i = 0; i < arr.length; i++){
      curDepth += this.calculateDepth(arr[i]);
      if (curDepth > maxDepth){
        maxDepth = curDepth;
      }
      curDepth = 1;
    }
  }
  return maxDepth;
}
};