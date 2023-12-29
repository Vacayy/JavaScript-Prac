/* 
<< 배열 관련 함수들 >>

[요소 추가 및 삭제]
1. push()
- 배열의 끝에 하나 이상의 요소를 추가하고, 새로운 배열의 길이를 반환합니다.
- 예: arr.push(element1, ..., elementN)

2. pop()
- 배열의 마지막 요소를 제거하고 그 요소를 반환합니다.
- 예: arr.pop()

3. unshift()
- 배열의 시작 부분에 하나 이상의 요소를 추가하고, 새로운 배열의 길이를 반환합니다.
- 예: arr.unshift(element1, ..., elementN)

4. shift()
- 배열의 첫 번째 요소를 제거하고 그 요소를 반환합니다.
- 예: arr.shift()

5. splice()
- 배열의 특정 위치에 요소를 추가하거나 제거합니다.
- 예: arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])


[요소 탐색 및 접근]
1. indexOf()
- 주어진 요소를 배열에서 찾아 그 위치를 반환합니다. 요소가 없으면 -1을 반환합니다.
- 예: arr.indexOf(searchElement[, fromIndex])

2. find()
- 주어진 테스트 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 없으면 undefined를 반환합니다.
- 예: arr.find(callback[, thisArg])

3. findIndex()
- 주어진 테스트 함수를 만족하는 첫 번째 요소의 인덱스를 반환합니다. 없으면 -1을 반환합니다.
- 예: arr.findIndex(callback[, thisArg])

4. includes()
- 배열이 특정 요소를 포함하고 있는지 여부를 확인합니다.
- 예: arr.includes(valueToFind[, fromIndex])


[배열 변환]
1. map()
- 모든 요소에 대해 함수를 호출한 결과를 모아 새 배열을 반환합니다.
- 예: arr.map(callback[, thisArg])

2. filter()
- 주어진 함수를 만족하는 모든 요소로 이루어진 새 배열을 반환합니다.
- 예: arr.filter(callback[, thisArg])

3. reduce()
- 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
- 예: arr.reduce(callback[, initialValue])

4. forEach()
- 배열의 각 요소에 대해 주어진 함수를 실행합니다.
- 예: arr.forEach(callback[, thisArg])

5. slice()
- 배열의 일부분을 얕게 복사하여 새 배열로 반환합니다.
- 예: arr.slice([begin[, end]])


[정렬 및 기타]
1. sort()
- 배열의 요소를 적절한 위치에 정렬하고 배열을 반환합니다.
- 예: arr.sort([compareFunction])

2. reverse()
- 배열의 순서를 반전합니다.
- 예: arr.reverse()

3. join()
- 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
- 예: arr.join([separator])

4. concat()
- 여러 배열을 합쳐 새 배열을 만듭니다.
- 예: arr.concat(value1[, value2[, ...[, valueN]]])

*/

let arr = [1,2,3,4,5];

for (let i=0; i<arr.length; i++){
    console.log(`arr[${i}] = ${arr[i]}`);
} 

arr.splice(1, 0, 9);
console.log(arr); // 1, 9, 2, 3, 4, 5

arr.splice(2, 2, 9);
console.log(arr); // 1, 9, 9, 4, 5

console.log(arr.indexOf(9)); // 1

arr.push(333);
console.log(arr); // [ 1, 9, 9, 4, 5, 333 ]

