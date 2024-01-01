// 콜백 함수: 함수의 argument로 다른 함수를 넘겨준 함수

function cry(){
    console.log("울기");
}

function sing(){
    console.log("노래하기");
}

function dance(){
    console.log("춤추기");
}

function reaction(mood, goodCallBack, normCallBack, badCallBack){
    if (mood === "good"){
        goodCallBack();
    } else if (mood === "normal"){
        normCallBack();
    } else {
        badCallBack();
    }
}

function feelGood(){    
    let mood = Math.random();
    if (mood > 0.7){
        reaction("good", dance, sing, cry);
    } else if (mood > 0.3){
        reaction("normal", dance, sing, cry);        
    } else {
        reaction("bad", dance, sing, cry);        
    }

    return mood;
}


feelGood();