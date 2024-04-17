let userName :string = 'kim';

const userNames :string[] = ['a', 'b'];
userNames.push('c');

console.log(userNames);


type UserNameType = string | string[] | number;

const userObj :{
    age: string | number[], // Union 타입: 여러 개의 타입 지정
    name: UserNameType;
    number?: number, // ? 는 해당 프로퍼티가 optional 하다는 뜻
} = {
    age: '3',
    name: 'kim',
};

userObj.number = 1;
userObj.age = [3,4,5];
console.log(userObj);


function sum(x: number, y: number) :number {
    return x + y;
} // 파라미터로 number 넣고, 리턴값도 number 여야 함

const multiply = (x: number, y: number) :number => {
    return x * y;
}

// console.log(multiply(3, '3')); // 에러
console.log(multiply(3, 3)); // 에러

///////// 

type UserInfo = [string, number]; // UserInfo 라는 타입 선언해주고
let jay :UserInfo = ['jay', 123];  // UserInfo 타입의 변수를 선언
console.log(jay);


//////

type Test = {
    [key :string] : number, // 값이 string인 프로퍼티의 value는 number여야 한다. 
    // [key :number] : boolean,
};

const userA :Test = {
    // zz: 'dd',
    xx: 333,
}