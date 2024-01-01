
console.log(helloA()); // 함수 선언식은 호이스팅 O -> 출력됨
// console.log(helloB()); // 함수 표현식은 호이스팅 X -> 출력 안됨
// console.log(helloC()); 


// 함수 선언식
// 호이스팅되므로, 소스코드의 밑바닥에 함수들을 모아놓기 편함. 
function helloA(){
    return "이것은 함수 선언식";
}


// 함수 표현식
let helloB = function(){
    return "이것은 함수 표현식";
}


// 함수 표현식을 더 간단하게 표현하기: 화살표 함수
let helloC = () => {
    return "이것은 함수 표현식 - 화살표 함수";
}

// 함수 표현식은 정의부가 간단하다면 다음과 같이 정의할 수 있음
let helloD = () => "return만 있는 화살표 함수";

console.log(helloB()); 
console.log(helloC()); 
console.log(helloD()); 

