let btn = document.getElementById("btn-1");
let carRaceBox = document.getElementById("car-race-id");
// let abc = document.getElementsByClassName("~~");

// let carRaceBox = document.querySelector("car-race");
/* 
querySelector 는 요소를 CSS selector로(계층적으로) 검색 가능 
- 뭐 아래 있는 뭐를 찾아라~ 라는 식 (특정 class, id 혹은 특정 태그 .. 등)
- 대충 위치만 잘 잡아주면 알아서 찾는다. 찾기 쉬움. (한 가지 요소를 다양한 방식으로 가리킬 수 있음.)
- 여러개가 있다면 querySelectorAll 을 사용
- 또는 CSS Selector를 통해 찾아낼 수 있는데, 이를 이용하면 특정 자식을 고를 수 있음.
*/

// let titleBoxTwo = document.querySelector(".top h1");

let titleBoxTwo = document.querySelector("div h1");
let clickCount = 0;

// let tmp1 = document.querySelectorAll("div h1");
// console.log(tmp1);

let tmp2 = document.querySelector(".top h1"); // 1) 특정 id 내부의 2) 특정 태그를 가져왔다
// console.log(tmp2);
// let tmp3 = document.querySelector(".top h1:first-child");
// console.log(tmp3);
let tmp_id = document.querySelector("#h1-top");
console.log(tmp_id);
let tmp_class = document.querySelector(".top");
console.log(tmp_class);

/* ------------------------------------------ */ 
/* ------------------------------------------ */ 
let pointerOverCount = 0;    
let countScoreOne = document.querySelector(".top #h2-top");
let countScoreTwo = document.querySelector(".top #h3-top");
let keyboard = document.querySelector("#keyboard");
    
carRaceBox.addEventListener("mouseenter", handlePointerOver);
// titleBox.onmouseenter = handlePointerOver;

carRaceBox.addEventListener("mouseleave", handlePointerOver);
// titleBox.onmouseleave = handlePointerOver;

btn.addEventListener("click", handleClickButtonEvent); // 그냥 버튼에 event를 listen하는 기능을 부여!!
// btn.onclick = handleClickButtonEvent;

keyboard.addEventListener("keydown", handleKeyboardEvent);
// keyboard.onkeydown = handleKeyboardEvent;


let dragCheck = document.querySelector("#dragCheck");
let dragPrint = document.querySelector("#dragPrint");
dragCheck.addEventListener("dragstart", function(){
    document.style.backgroundColor = "red";
    console.log("ddd");
    // dragPrint.innerText = "🐶🐱";
})


/* window 객체의 이벤트 핸들링 */
window.addEventListener("resize", handleWindowResize);
function handleWindowResize(){
    
    // document.body.style.backgroundColor = "tomato";
    btn.style.backgroundColor = "tomato";
};

let clipboardPrint = document.querySelector("#clipboard-print");
window.addEventListener("copy", handleClipboard);
function handleClipboard(){    
    clipboardPrint.innerHTML = `<h1> 복사하지 말랬지! </h1>`;
};

// window.addEventListener("online", function(){
//     this.alert("Wifi 연결 완료!");
// })
// window.addEventListener("offline", function(){
//     this.alert("Wifi 연결 해제!");
// })

/* window 객체의 이벤트 핸들링 */



/* event 함수 정의 부분 */ 
function handlePointerOver(){
    let newContent;
    let newStyle;
    const zeroStyle = "active-point-zero";
    const fourStyle = "active-point-four"
    
    if (pointerOverCount == 0){    
        newStyle = zeroStyle;
        newContent = "🔴.......................🏎️.";
        pointerOverCount ++;
    } else if (pointerOverCount == 1){        
        newContent = "🟢................🏎️........";        
        pointerOverCount ++;
    } else if (pointerOverCount == 2){        
        newContent = "🟢......🏎️..................";
        pointerOverCount ++;
    } else if (pointerOverCount == 3){
        newStyle = fourStyle;
        newContent = "🟢🏎️........................";
        pointerOverCount = 0;        
    }

    carRaceBox.className = newStyle;
    carRaceBox.innerText = newContent;
}

function handleClickButtonEvent(){
    clickCount ++;
    if (clickCount <= 10){
        countScoreOne.innerText = clickCount;
        countScoreTwo.innerText = 0;
    } else {
        countScoreTwo.innerText = clickCount-10;
        if (clickCount == 21) {
            countScoreOne.innerText = "🎵";
            countScoreTwo.innerText = "🎶";
            clickCount = 0;
        }
    }
}

function handleKeyboardEvent(event){
    switch(event.key) {
        case "ArrowUp":
            keyboard.innerText = "⬆️"
            break;
        case "ArrowDown":
            keyboard.innerText = "⬇️"            
            break;
        case "ArrowLeft":
            keyboard.innerText = "⬅️"            
            break;
        case "ArrowRight":
            keyboard.innerText = "➡️"                                    
            break;
        default:
            keyboard.innerText = "🔳"
            break;
    }
}
