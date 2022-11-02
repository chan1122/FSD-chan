$(() => {
  // 1. 로딩확인
  console.log("로딩완료");

  // 2. 변수 셋팅
  // 2-1 . 변경대상 바박스 : .lbar
  const lbar = $(".lbar");
  // 2-2 . 변경대상 숫자 박스 : .ltxt b
  const ltxt = $(".ltxt b");

  // 3. 팽수 2 버튼 클릭시
  // 로딩바에 있는 .lineper 박스에 .lbar width 크기를
  // % 숫자 증가와 매칭하여 보여주기!
  // 클릭대상 : .act button -> 마지막버튼
  $(".act button")
    .last()
    .click(function () {
      // 1. 숫자 데이터 증가하기
      chgPer();
    }); /// 클릭

  // 퍼센트 증가 숫자변수
  let pernum = 0;

  /******************************************************************** 
        [ 함수명 ] : chgper
        기능 : 숫자% 변경 밑 바% 변경하기
    ********************************************************************/
  function chgPer() {
    // 1. 호출확인
    console.log("%변경중");
    // 2. 숫자% 변경하기!
    // 대상: .ltxt b -> ltxt변수
    // 퍼센트 숫자 변수 1씩 증가

    pernum++;

    ltxt.text(pernum);
    // 3. bar % 변경하기!
    // 대상: .lbar -> lbar변수
    lbar.css({width:pernum+"%"})

    // 4. 재귀호출하기! -> 자기자신 호출!
    // 재귀호출의 한계를 if문으로 제어함!
    // pernum이 100이하일때까지만 재귀 호출
    if(pernum <= 99){
        setTimeout(() => {
            chgPer();
            
        }, 100);
    };
  }; /// chgper 함수 ///
}); //// JQ릭 ////
