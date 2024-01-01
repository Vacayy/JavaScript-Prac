// 공통적으로 쓰이는 객체를 중복해서 포함시킬 때 -> spread 연산자 (...) 사용

const cookie = {
    base: "cookie",
    madeIn: "korea"
};

const chocochipCookie = {
    ...cookie,
    toping: "chocochip"
};

const blueberryCookie = {
    ...cookie,
    toping: "blueberry"
}

const chocochipCookieSmoothie = {
    ...chocochipCookie,
    baseDrink: "milk"
}

console.log(cookie);
console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(chocochipCookieSmoothie);


// spread 연산자를 활용한 배열 합치기
const arr1 = [1,2,3];
const arr2 = [9,10];

const arr3 = [...arr1, "|||", ...arr2];
console.log(arr3);
