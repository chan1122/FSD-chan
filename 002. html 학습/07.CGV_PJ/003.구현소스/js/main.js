//CGV PJ 메인페이지  JS - main.js

// 예고편 선택메뉴 a 요소 
var mvlink = document.querySelectorAll(".mlist a");
console.log(mvlink);
//html요소를 변수에 담으면 
//여러개의 요소일 경우 querySelectorAll()을 사용하ㅁ여
//html 컬렉션에 저장함
//여러개의 내부주소가있고 번호로 되어있음

//0부터 시작함
//순번의 요소를 선택하는 방법은?
//컬렋ㄴ변수.item(순번) 또는 컬렉션변수[순번]


// a요소 개수
var len = mvlink.length;
//length는 개수를 구해오는 속설

//for문을ㄹ 이용하여 링크설정하기
//for(시;한;증){실행코드}

for (var i = 0; i < len; i++) {

    // 순서대로 a요소에 click 이벤트 설정하기!
    // 대상은: mvlink변수
    mvlink.item(i).onclick = function(){chgMV(this)};
    // 온클릭은 a요소의 이벤트속성임
    // 이퀄 오른쪽애 할당되는데 
    // 이떄 chgMV() 함수르 직접쓰면 함수가 바로 싷핼됨
    //따라서 이벤트 발샐시 호출하려면
    // 익명함수 즉,function(){}안에  써야함!
    //이것은 마치 <a href="#" onclick="chvMV()"> 라고 설명한것과 같다!!!!
    
    //이벤트에 할당한 익명함수안에 함수에 this를 보내면
    //이벤트가 걸린 요소자신리 함수에 전달된다!


    // console.log("진짜도니?", i)

} //////// for //////////

/**************
    함수명: chgMV
    기능: iframe의 영화 예고편 변경하기!
    
***************/ 
function chgMV(ele){ //ele 전달되는 a요소
    //전달변수는 ㅓㄴ언없이 바로씀!

    // 0. 전달더ㅣ는 adythdml "data-mv" 속성값 읽어오기
    var minfo = ele.getAttribute("data-mv");
    // getAttribute(속성명) -> 요소의 속성값 읽어오는 내장함수
    // setAttribute(속성명,값) -> 요소값셋팅 내장함수

    //함수 호출하기
    console.log("바꿔!",minfo)
    // 2. 변경대상 #screen iframe
    var tg = document.querySelector("#screen iframe");

    // 3. 변경내용 : 대상요소의 src 소성을 변경함!
    tg.src = `https://www.youtube.com/embed/${minfo}?autoplay=1`;
}//chgMV 함수

//익명함수란? : 코드를 실행하지않고 저장하는 메모릴 공산 
// 단, 이름이 없음
// 즉 주소지가 없다는것임
//왜? 호출하는 방법을 응용 할수있도록 함!

// 호출법
// 1. 변수에 할당하는방법 -> 변수명이 함수명이 됨!
// 2. 이벤트와 연결하는방법  -> 이벤트가 발생시 함수실행

console.log("난 바깥이야!");

var myFn = function(){
    console.log("난 안이야!");
}

// 익명함수 호출!
myFn();