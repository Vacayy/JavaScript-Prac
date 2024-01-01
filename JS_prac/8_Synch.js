/*
자바스크립트는 싱글 스레드 언어임. 
- 따라서 하나의 작업 흐름을 따라 처리
- 이전 작업이 진행 중이라면, 다음 작업을 수행하지 않고 기다림.
- 이를 동기적 방식, blocking 방식 이라고 부름

그럼 무거운 하나의 함수가 계속 CPU를 점유하는 불상사도 발생 가능하겠지?
- 비동기적 방식, Non-blocking 방식이 도입됨
- 싱글 스레드이지만 마치 병렬처리를 하는듯한 착시! 
- 이때 순서 보장을 call back 함수로 한다.
*/


// setTimeout이 대표적인 비동기함수이다. 

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

// task A에 callback 함수를 전달하여, 작업의 순서를 지정해주었다. 
taskA(1, 2, (res) => {
    console.log("A:", res);
});

// task B는 A보다 일찍 호출되도록 지정했기 때문에 비동기적으로 먼저 처리된다. 
taskB(1, (res) => {
    console.log("B: ", res);
})

// 비동기적으로 처리되므로, 이 코드 끝이 먼저 출력된다. 
console.log("End-of-code");

