const CustomError = require("../extensions/custom-error");

const chainMaker = {
  segments: new Array(),
  getLength() {
   return this.segments.length
  },
  addLink(newSegment){
   this.segments.push(`( ${newSegment} )`);  return this;
  },
  removeLink(position){
   var truePosition = position -1;
   if (truePosition < 0 || typeof(position) !== 'number' || truePosition > this.getLength()){
    this.segments.splice(0, this.getLength());
    throw new Error('ошибка');
   }
   else{
    this.segments.splice(truePosition, 1);
   }
   return this;
  },
  reverseChain() {
   this.segments.reverse(); return this
  },
  finishChain(){
   var finishedChain = this.segments.join('~~');
   this.segments.splice(0, this.getLength());
   return finishedChain;
  }
};

module.exports = chainMaker;
