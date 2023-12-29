/* 
1) 브라우저 밖에서 JS 구동 가능케 하는 런타임 환경 구성: node.js 설치 
2) code runner 익스텐션 설치
    -> ctrl + option + N 누르면 VSCode에서 console.log 찍어볼 수 있음. 
*/


function factorial(n, res){
    if (n == 0) return res;
    
    res += n;
    
    return factorial(n-1, res);
}

console.log(factorial(5, 0));

/* ------------------ */

function fact_by_for(n){
    res = 0;

    for (let i = 1; i < n+1; i++){
        console.log(`${res}+${i} = ${res+i}`);
        res += i;
    }

    return res;
};

fact_by_for(5);

