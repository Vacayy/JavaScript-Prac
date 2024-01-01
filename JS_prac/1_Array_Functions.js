// 1. forEach: 배열의 모든 요소를 반환함
const arr = [1, 2, 3, 4, 5];

arr.forEach((elem) => print(elem));
function print(i) {
    console.log(i); // 1 ~ 5 출력
}


// 2. map: 배열의 모든 요소에 특정 함수 적용
const newArr = arr.map((elem) => {
    return elem + 1;
})

newArr.forEach((elem) => console.log(elem)); // 2 ~ 6 출력

console.log("-----------------");


// 3. includes: 배열 내에서 해당 요소 탐색 
const fruits = ["apple", "banana", "apple"];
console.log(fruits.includes("apple")); // true
console.log(fruits.includes("app")); // false 


// 4. indexOf: 배열 내에서 해당 요소 탐색 + index 반환
console.log(fruits.indexOf("apple")); // 0
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("app")); // -1
console.log(fruits.indexOf("ba")); // -1


// 5. findIndex: 속성 기반 탐색 + index 반환
const fruitColors = {
    apple: "red",
    banana: "yellow",
    melon: "green",
    orange: "orange"
}

const fruitsKeys = Object.keys(fruitColors);
console.log(fruitsKeys); // [ 'apple', 'banana', 'melon', 'orange' ]
const index = fruitsKeys.findIndex(elem => fruitColors[elem] === "green");
console.log(index); // 2


// 6. find: 속성 기반 탐색 + 해당 요소 반환
console.log(fruitsKeys.find(elem => fruitColors[elem] == "green")); // melon



// 7. filter: 배열을 특정 조건에 따라 필터링
const clothes = [
    { num: 1, color: "red" },
    { num: 2, color: "blue" },
    { num: 3, color: "yellow" },
    { num: 4, color: "green" },
    { num: 5, color: "gray" }
]

console.log(clothes.filter((i) => i.color === "blue")); // [ { num: 2, color: 'blue' } ]


// 커링 - FP 적인 개념
// let aaa = function(arg1, arg2){

// }

// let bbb = (arg1) => (arg2) => {
//     console.log(arg1, arg2); 
// }

// let ccc = bbb("hello");
// ccc("world!");
// ccc("javascript");


// 8. slice: 배열 자르기
const slicedClothes = clothes.slice(0, 3);
console.log(slicedClothes);


// 9. concat: 배열 붙이기
const arr1 = [
    { num: 1, color: "red" },
    { num: 2, color: "blue" },
    { num: 3, color: "yellow" }
]

const arr2 = [
    { num: 4, color: "green" },
    { num: 5, color: "gray" }
]

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));


// 10. sort: 배열 정렬
let arrB = [3, 4, 5, 1, 2];
arrB.sort();
console.log(arrB);

// 비교함수를 정의해서 정렬하기
// 반환값의 대소관계를 통해 정렬 방식 조절 (꼭 -1, 0, 1 이렇게 안해도 됨)
let arrC = [3, 4, 5, 1, 2];

function compare(a, b) {
    if (a > b) {
        return 1;
    }

    if (a == b) {
        return 0;
    }

    return -1;
}

arrC.sort(compare);
console.log(arrC);







