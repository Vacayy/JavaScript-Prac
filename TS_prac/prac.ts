function addNumbers(a: number, b: number): number {
    return a + b;
}

const sum = addNumbers(5, 10);
console.log(sum);  // 출력: 15

/* 인터페이스
인터페이스를 사용하여 객체의 구조를 정의하는 것입니다. 이를 통해 객체가 특정 구조를 준수하도록 강제할 수 있습니다.
이 예제에서 User 인터페이스는 name, age, isActive 속성을 정의합니다. 
user 객체는 User 인터페이스를 따라야 하므로, 이 세 속성을 모두 포함해야 합니다.
*/ 

interface User {
    name: string;
    age: number;
    isActive: boolean;
}

const user: User = {
    name: "Juyeong Kim",
    age: 30,
    isActive: true
};

// 