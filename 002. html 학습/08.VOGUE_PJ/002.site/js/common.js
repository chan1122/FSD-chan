// 보그PJ 공통 JS

// 제이쿼리 구역 길게 쓰기도 있음!
// $(document).ready(function)
$(()=>{
console.log("로딩 스 완료 스!");


//  스크롤 이벤트 구역 ! 
//  이벤트명 : scroll
const realTop = $("#top");
let scTop;
let lastSC = 0;

$(window).scroll(function(){
    // 스크롤 위치값
    scTop = $(this).scrollTop();
    // scrollTop() 메서드
    // - 세로 스크롤 위치값을 리턴 하는 메서드
    // console.log(scTop); 

    // 1 . 슬림메뉴 클래스 on적용
    // 기준 위치는 스크롤위치 100px이상

    if(scTop >= 100){
        realTop.addClass("on down");
    }////// if //////
    else{
        realTop.removeClass("on")
    }
    if(scTop > lastSC){
        realTop.removeClass("down")

    }
    else{
        realTop.addClass("down")
        // 띄어쓰기로 복수에 클래스 적용 가능

    }////// else //////

    lastSC = scTop;




}); //// 스크롤 ////

}); //// JQuery codeBlock ////