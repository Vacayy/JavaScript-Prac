// 학점 계산기 만들기

let score = Math.round(Math.random() * 100);
console.log(`점수: ${score}`);
(score >= 90) ? console.log("학점: A") : (score >= 70) ? console.log("학점: B") : (score >= 40) ? console.log("학점: C") : console.log("학점: F");

/*
(score >= 90) ? console.log("학점: A") 
    : (score >= 70) ? console.log("학점: B") 
    : (score >= 40) ? console.log("학점: C") 
    : console.log("학점: F")
*/

 