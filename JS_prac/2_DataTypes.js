const a = null;
let aUndefined;
const b = Boolean;
const bTrue = true;
const bFalse = false;

console.log(a, typeof a); // null object
console.log(aUndefined, typeof aUndefined); // undefined undefined
console.log(b, typeof b); // [Function: Boolean] function
console.log(bTrue, typeof bTrue); // true boolean
console.log(bFalse, typeof bFalse); // false boolean 

console.log("------------");

/* ------- 구조체(Struct) in JS == Objects (객체) ------- */

const player = {
    playerName: "철수",
    playerAge: 23, 
    newYear
};

function newYear(){
    player.playerAge += 1;    
}

console.log(player.playerName); // "철수"
console.log(player.playerAge); // 23
player.newYear();
console.log(player.playerAge); // 24. 객체를 const로 선언했지만, 내부 필드의 변경은 가능함. 
// player = "바꾸기"; // TypeError: Assignment to constant variable.
player.playerHeight = 180;
console.log(player.playerHeight); // 180. 요소 추가 가능


console.log(player); 


let playerChangable = {
    playerName: "민수",
    playerAge: 19,     
}

console.log(playerChangable.playerName); // "민수"
playerChangable = "바꾸기";
console.log(playerChangable.playerName); // undefined
console.log(playerChangable); // 바꾸기




