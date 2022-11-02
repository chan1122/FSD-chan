// 쇼핑몰 배너 JS - 03.페이드효과 //
$(() => {
  // 1 . 호출 확인
  console.log("로딩 완료");

  // 2 . 변경 대상
  const slide = $("#slide li");

  // 3 . 순번 변수 : 슬라이드 순번 + 불릿 순번
  let slidenum = 0;
  // 3 - 1 순번변수 슬라이드 순번 + 블릿 순번
  // 광클 금지 변수 0일떄 허용 1일떄 불가
  let prot = 0;

  // 4. 이벤트 대상: .abtn (버튼2개)
  $(".abtn").click(function () {
    let rightbtn = $(this).is(".ab2");
    //////////////////// 0 . 광클 금지 /////////////////////////////////
    if (prot) return;
    prot = 1; // 잠금
    // 1 . 오른쪽버튼 여부 확인
    setTimeout(() => {
      prot = 0; // 헺제
    }, 600);
    // console.log("오른쪽 버튼이야?",rightbtn);

    // 분기하기
    // 2-1. 오른쪽일떄
    if (rightbtn) {
      console.log("오른쪽");
      // 순번넣기
      slidenum++;

      /////////////////////// 광클 금지 /////////////////////////////////

      // 한계갑 체크 (처음으로 돌림!)
      if (slidenum === slide.length) slidenum = 0;
      // 클래스 넣기
      // 처음으로 돌림!
      // slide.eq(slidenum).addClass("on").siblings().removeClass("on");
    } else {
      slidenum--;
      // 한계갑 체크 (처음으로 돌림!)
      if (slidenum === -1) slidenum = slide.length - 1;
      // 클래스 넣기
      // 처음으로 돌림!
      console.log("왼쪽");
    } ///// if ///

    // 슬라이드 해당 순번 클래스 넣기
    // + 나머지 다른형제 li는 on제거
    slide.eq(slidenum).addClass("on").siblings().removeClass("on");

    // 4 . 블릿 해당순번sldienum 클래스 on넣기
    // + 나머지 다른형제 li는 on 제거
    indic.eq(slidenum).addClass("on").siblings().removeClass("on");
  }); //////////////// click ////////////////
  /******************************************** 
     * 
        [ 페이드 효과 슬라이드 기능정의 ]
        -> 슬라이드 순번에 대한 전역변수를 사용한다!
    
        1. 오른쪽 버튼클릭시 다음 순번슬라이드에
        클래스 "on"을 줘서 opacity:1, z-index:1
        로 보이며 맨위로 설정해준다!(트랜지션적용)
        ->나머지 li는 모두 "on"을 지워서 초기화!
    
        2. 왼쪽버튼은 이전순번이 나오며 위와 동일
    
        3. 끝번호에 가서는 처음은 마지막으로 
        마지막은 처음으로 슬라이드가 다시 반복된다.
    
        4. 블릿은 현재 슬라이드와 일치된 순번표시
    
    ********************************************/
   let autoI;
   let autoT;

   function slideAuto() {
    autoI = setTimeout(() => {
        slidenum++;

        if(slidenum === slide.length) slidenum =0;

        slide.eq(slidenum)




    }, 2000);
   }
   slideAuto();
}); // JQB //
