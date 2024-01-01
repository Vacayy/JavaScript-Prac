/* 
[async & await]
- Promise를 더 직관적으로 작성할 수 있도록 ES8에서 도입된 문법
*/

/*
// async 함수는 Promise 객체를 리턴한다. 
async function helloAsync(){
    return "hello Async";
};

// 따라서 then(), catch() 등의 메소드를 사용할 수 있다. 
helloAsync().then((res) => {
    console.log(res);
})
*/

/*
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms); // 딱히 전달해줄 인자가 없으면, 콜백함수에 바로 resolve 넣어도 됨.
    });
}

async function helloAsync(){
    return delay(2000).then(() => {
        return "hello Async";
    });    
};

helloAsync().then((res) => {
    console.log(res);
})
*/

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms); // 딱히 전달해줄 인자가 없으면, 콜백함수에 바로 resolve 넣어도 됨.
    });
};

async function helloAsync() {
    try {
        await delay(2000);
        return "hello Async";
    } catch (error) {
        throw new Error('delay 함수에서 오류 발생');
    }
}

async function main() {
    try {
        const res = await helloAsync();
        console.log(res);
    } catch (error) {
        console.error('오류 발생:', error);
    }
}

main();

// helloAsync().then((res) => {
//     console.log(res);
// });

