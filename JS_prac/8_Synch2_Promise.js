/*
비동기 함수들의 순서를 보장하고 싶을 때도 마찬가지로 call back 함수를 이용한다. 
*/

/*
function taskA(a, b, cb) {
    setTimeout(() => {
        const res = a + b;
        cb(res);
    }, 2000);
}


function taskB(a, cb) {
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1000);
}

function taskC(a, cb) {
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1500);
}

// 콜백을 중첩해서 다수의 비동기 처리를 순서대로 처리 -> 콜백 지옥 -> Promise 객체 등장 !!
taskA(1, 2, (a_res) => {
    console.log("A:", a_res);
    taskB(a_res, (b_res) => {
        console.log("B:", b_res);
        taskC(b_res, (c_res) => {
            console.log("C:", c_res);
        });
    });
});

console.log("End-of-code");
*/

function isPositive(number, resolve, reject) {
    setTimeout(() => {
        if (typeof number === 'number') {
            // 성공 -> resolve
            resolve(number >= 0 ? "양수" : "음수");
        } else {
            // 실패 -> reject
            reject("주어진 값이 숫자형 값이 아닙니다.");
        }
    }, 2000);
}



/* 
[Promise 객체 생성하기]

1. 비동기 작업 자체인 Promise()를 저장할 asyncTask 상수를 선언
2. new Promise() 생성자를 이용하여 Promise 객체 생성 
3. Promise 생성자에 실행 함수(executor function)를 인자로 넘겨줌

*/
function isPositiveP(number) {
    // 실행자. 비동기작업을 실질적으로 수행
    const executor = (resolve, reject) => { // 결과에 따라 각기 다른 콜백함수 호출
        setTimeout(() => {
            if (typeof number === 'number') {                
                resolve(number >= 0 ? "양수" : "음수"); // 성공 -> resolve
            } else {                
                reject("주어진 값이 숫자형 값이 아닙니다."); // 실패 -> reject
            }
        }, 2000);
    }

    const asyncTask = new Promise(executor);
    return asyncTask;
}

/*
[Promise 객체 사용] 

1. Promise 객체의 비동기 처리 결과를 변수에 담기
2. Promise 객체에 사용 가능한 then, catch 함수로 비동기 처리 핸들링

*/

const res = isPositiveP(10);
res.then((res) => {
    console.log("success:", res);
}).catch((err) => {
    console.log("fail:", err);
});


