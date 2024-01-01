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

function taskA(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b;
            resolve(res);
        }, 2000);
    })
}

function taskB(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 1000);        
    })
}

function taskC(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 1500);
    })
}


taskA(5, 1)
.then((a_res) => {
    console.log("A result:", a_res);
    return taskB(a_res); 
}).then((b_res) => {
    console.log("B result:", b_res);
    return taskC(b_res);
}).then((c_res) => {
    console.log("C result:", c_res);
})

/* 
(이 케이스는 실패할 일이 없기에 계속해서 resolve 함수만 호출함)

taskA의 리턴값 = Promise 객체임
-> then으로 taskA의 Promise 객체 중 결과값(a_res)을 인자로 주면서 taskB 호출

taskB의 리턴값 = Promise 객체임
-> then으로 taskB의 Promise 객체 중 결과값(b_res)을 인자로 주면서 taskC 호출

taskC의 리턴값 = Promise 객체임
-> then으로 resolve 함수에 해당하는 console.log만 찍고 끝남. 

*/