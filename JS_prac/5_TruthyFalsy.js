/*
파이썬에서는 빈 배열을 넣으면 false, 배열에 값이 있으면 true 인 속성을 이용해서 알고리즘을 짤 때가 종종 있다.
자바스크립트에서도 이렇게 boolean이 아닌 대상을 상태에 따라 true, 혹은 false로 인식하는 메커니즘이 있다. 

참으로 인식하는 값들을 truthy라고 하며, 
거짓으로 인식하는 대상들을 falsy한 값들이라 한다. 

falsy한 값들: null, undefined, undefine(변수만 선언한 경우), 0, NaN, 빈 문자열("")

*/ 

let a = [];
if (a) {
    console.log("TRUE"); // 빈 배열도 true로 인식
} else {
    console.log("FALSE");
}

/////

const getName = (person) => {
    if (!person) {
        return "잘못된 input 입니다."
    }

    return person.name;
};

let person = {name: "이정환"};
const name = getName(undefined);
// const name = getName(null);
// const name = getName(person);
console.log(name);

