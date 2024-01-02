// node.js의 내장함수인 require로 다른 파일의 모듈 가져오기
const calcModule = require("./calc");

// Common JS 모듈 시스템
// 모듈 사용하기
console.log(calcModule);
console.log(calcModule.moduleAdd(1,2));
console.log(calcModule.moduleMult(2,4));