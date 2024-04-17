// // var a = 1;
// // function outer() {
// //     function inner() {
// //         console.log.log(a); // undefined
// //         var a = 3;
// //     }
// //     inner();
// //     console.log(a); // 1
// // }
// // outer();
// // console.log(a); // 1


// // function a(x) {
// //     console.log(x);
// //     var x;
// //     console.log(x);
// //     var x = 2;
// //     console.log(x);
// // }
// // a(1);

// // let, const 테스트

// // function a() {
// //     var x; // 매개변수
// //     var x; // 함수 내 선언 1
// //     var x; // 함수 내 선언 2

// //     x = 1; // 매개변수 값 할당
// //     console.log(x);
// //     console.log(x);
// //     x = 2; // 함수 내 값 할당
// //     console.log(x);
// // }
// // a(1);


// hello(); // "Hello, world!"

// function hello() {
//     console.log("Hello, world!");
// }

// hello(); // TypeError: hello is not a function

// var hello = function () {
//     console.log("Hello, world!");
// };


// -------- 클로저 테스트 -----

const x = 1;

function outer() {
    const x = 10;
    const inner = function () {
        console.log(x);
    }
    return inner;
}

const result = outer();
result(); // 10