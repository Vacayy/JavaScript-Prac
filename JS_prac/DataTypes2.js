/* parseInt */

let a = "11";
console.log(a, typeof a); // "11" string
let b = parseInt(a);
console.log(b, typeof b); // 11 number


let c = toString(b);
console.log(c, typeof c); // 11 number

if (typeof(b) == typeof(1)){
    console.log("b는 숫자가 맞아! - 1");
}

if (!isNaN(b)){
    console.log("b는 숫자가 맞아! - 2");
}

if (a == 11){
    console.log("a == 11");
}

if (a === 11){
    console.log("a === 11");
} else {
    console.log("a !== 11")
}