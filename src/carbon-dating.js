const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {

 var isparameterOk =  (/^\d+$|^\d+\.\d+$/.test(sampleActivity)) //строка состоит из цифр или цифр раделенной еинственнйо точкой
                   && (typeof(sampleActivity) === 'string')     //передана строка?
                   && ( Number(sampleActivity) > 0 && Number(sampleActivity) < 15); //число в строке менее 15 и более нуля.

 return  isparameterOk ? Math.ceil(Math.log2(sampleActivity/15) * (-HALF_LIFE_PERIOD)) : false;

};
