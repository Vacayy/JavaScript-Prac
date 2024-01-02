/* 
JSON Placeholder 서비스를 통해 API 호출 테스트
- API 요청을 보내면, 다양한 종류의 더미 데이터를 response 해줌

JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. 
It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, 
...or simply to test things locally.

(이처럼 조건없이 무료로 공개한 API들을 Open API라고 부른다.)
*/


// fetch는 Promise 객체를 반환한다 -> API 요청의 성공 여부에 따라 then으로 핸들링
async function getData(){
    let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonResponse = await rawResponse.json();

    console.log(jsonResponse);
}

getData();

