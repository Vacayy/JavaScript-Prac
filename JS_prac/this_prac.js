// const obj = {
//     name: 'jay',
//     info() {
//         console.log("메서드에서 this 호출: ", this.name); // jay

//         setTimeout(function () { // 콜백 실행은 그냥 함수로서 호출됨
//             console.log("콜백에서 this 호출 - 함수 표현식", this.name); // undefined
//         }, 1000)

//         setTimeout(() => { // 그러나 화살표 함수로 선언한다면? -> 상위 스코프의 this 호출
//             console.log("콜백에서 this 호출 - 화살표 함수", this.name); // jay
//         }, 2000)
//     },
// }

// obj.info();


// ////// 명시적 this binding - 변수 선언 //////

// const obj2 = {
//     name: 'kim',
//     info() {
//         // const self = this; // 객체의 this를 변수에 담아서 해당 변수를 호출
//         setTimeout(function () {
//             console.log(this.name); // kim
//         }, 1000)
//     },
// }

// obj2.info();


////// 명시적 this binding - bind로 this 넘겨주기 //////

const obj3 = {
    name: 'young',
    info() {
        setTimeout(function () {
            console.log(this.name); // 'young'
        }.bind(this), 1000) // 호출하는 객체의 this를 인자로 건네주며, 똑같은 새로운 함수를 반환함.
    },
}

obj3.info();

// ------ 변수에 할당하는 우회 방식 -----
// const obj = {
//     outer: function () {
//         console.log(this); // obj 객체에 대한 정보가 출력됨
//         let innerFunc1 = function () {
//             console.log(this); // window
//         };
//         innerFunc1();

//         let self = this;
//         let innerFunc2 = function () {
//             console.log(self); // obj
//         };
//         innerFunc2();
//     }
// }

// obj.outer();

// ---- 화살표 함수 사용 ----
// const obj = {
//     outer: () => {
//         console.log(this); // (1) window

//         let innerFunc1 = function () {
//             console.log(this); // (2) window
//         };
//         innerFunc1();
//     }
// }

// obj.outer();