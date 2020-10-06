const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
 var tmpArr = new Array ();

 if (Array.isArray(members))
   members.forEach(function(value, index){
      if (typeof(value) === 'string' && (/^\s*[a-z]+[\s_]*[a-z]+\s*$/i.test(value)))
        tmpArr.push(value.trim().toUpperCase()[0]);
    });

  return tmpArr.length !== 0 ? tmpArr.sort().join('') : false;
};
