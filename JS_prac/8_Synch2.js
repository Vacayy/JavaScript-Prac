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

function isPositiveP(number) {
    const executor = (resolve, reject) => { // 실행자. 비동기작업을 실질적으로 수행
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

    const asyncTask = new Promise(executor);
    return asyncTask;
}

/* 
1. 비동기 작업 자체인 Promise()를 저장할 asyncTask 상수를 선언
2. new 키워드로 Promise 객체 생성
3. Promise의 인자로 실행자(executor)를 넘겨줌
4. 전달하는 순간 executor가 바로 실행됨. 

executor를 담은 Promise 객체를 asyncTask에 담았음. 
isPositiveP에 커서를 올리면 반환값이 Promise 객체로 표시됨을 확인할 수 있음. 

*/

// isPositive(1, 
//     (res) => {
//         console.log("success:", res);
//     },
//     (err) => {
//         console.log("fail:", err);
//     }
// );
