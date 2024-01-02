const add = (a, b) => a + b;
const mult = (a, b) => a * b;

// node.js의 내장함수인 exports로 모듈 내보내기
module.exports = {
    moduleName: "calc module",
    // 현 파일 내의 함수 등을 객체 형태로 내보낼 수 있음. 
    moduleAdd: add,
    moduleMult: mult
};

