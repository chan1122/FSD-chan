// 미니언즈 좀비 탈출 애니 구현 JS - main.js
$(() => {
  /////////// jQB ///////////////////

  // 로딩확인
  console.log("로딩완료!");

  /*********************************** 
        [ 요구사항정리 ]
        1. 버튼을 클릭하여 미니언즈가
        순서대로 특정위치로 이동하며
        메시지를 보여준다
        2. 각 위치별 좀비를 등장시킨다
        3. 맨윗층에서 탈출할때 헬기를 사용한다

        [ 변경대상 ]
        1. 주인공 미니언즈
        2. 좀비 미니언즈들
        3. 주사기
        4. 헬기

        [ 이벤트와 이벤트대상  ]
        1. 이벤트 : 클릭이벤트
        2. 이벤트대상 : 버튼들
        3. 기능구분 : 버튼글자(지시사항)

    ***********************************/

  // 0. 주인공들 변수에 할당!
  // (1) 미니언즈
  let mi = $(".mi");

  // (2) 건물 li
  let bd = $(".building li");

  // (3) 버튼들
  let btns = $(".btns button");

  // (4) 메시지박스
  let msg = $(".msg");

  // (5) 좀비,주사기 요소 변수처리
  let mz1 = `<img src="images/mz1.png" alt="좀1" class="mz">`;
  let mz2 = `<img src="images/mz2.png" alt="좀2" class="mz">`;
  let zom = `<img src="images/zom.png" alt="좀emf" class="mz">`;
  let inj = `<img src="images/inj.png" alt="주사기" class="inj">`;

  console.log(mi, bd, btns, msg);

  // 1 . 건물 각 방에 번호 넣기
  // each((순서,요소)=>{}) -> 요소의 순서대로 돌기
  // append(요소) -> 요소내부에 자식요소 추가(이동)
  bd.each((idx, ele) => {
    //text() 텍스트 넣기
    $(ele).text(idx);
    // 좀비넣기, 주사기 넣기
    switch (idx) {
      case 9:
        $(ele).append(mz1);
        break;
      case 7:
        $(ele).append(mz2);
        break;
      case 1:
        $(ele).append(zom);
        break;
      case 2:
        $(ele).append(inj);
        break;
    } /// switch
  }); ////each
  // 좀은 모두 숨기기
  $(".mz").delay(2000).hide(3000);
  // 시간없는 hide()는 display:none처리함

  // 2 . 버튼 셋팅하기
  // 모든 버튼은 숨기고 첫번쨰 버튼만 보여!
  // 버튼.숨겨().첫번쨰().보여()
  btns.hide().first().show();

  // 3. 공통 함수

  const actMini = (ele, seq, mtxt) => {
    // 전달값 (ele-버튼요소,seq-방순번,mtxt-메시지)
    // 1. 클릭된 버튼 사라지기
    $(ele).slideUp(200);
    // slideUP(시간,이징,함수)
    // 높이값이 0되면서 애니, 0된후 dispaly:none처리함

    // 1. 메시지 없애기 : .msg -> msg변수
    msg.fadeOut(300);
    // fadeOut(시간,이징,함수)
    // 서서히 사라짐, 사라진후 display:none

    // 2 . 메시지 함수 : msgFn() + 다음 버튼 보이기
    const msgFn = (txt) => {
      msg.text(txt).fadeIn(300);
      $(ele).next().delay(500).slideDown(300);
    }; ////// msgFn 함수 //////
    // 1 . 이동하기
    // 위치: i 8번방
    let pos = [];
    // 대상: li의 몇번쨰
    let room = bd.eq(seq);
    // top 위치값
    pos[0] = room.offset().top;
    // left 위치값
    pos[1] = room.offset().left + room.width() / 2 - mi.width() / 2;
    console.log(pos);

    // 미니언즈 위치이동하기 애니메이션
    // 대상: .mi -> mi변수
    mi.animate(
      {
        top: pos[0] + "px",
        left: pos[1] + "px",
      },
      600,
      "easeOutElastic",
      msgFn(mtxt)
    );
    // animate({CSS설정},시간,이징,함수)
  };
  ///// act mini 함수

  // 4 . 들어가기 버튼클릭시;
  btns
    .first()
    .click(function () {
      actMini(this, 8, "와~! 아늑하다! 옆방으로 가볼까?");
    })
    // 5 . 옆방으로 버튼클릭시!
    .next()
    .click(function () {
      actMini(this, 9, "와~! 아늑하다! 옆방으로 가볼까?");
    })
    // 6 . 윗층으로 도망가 버튼클릭시!
    .next()
    .click(function () {
      actMini(this, 7, "악!;;;; 좀비!어서피하자!");
    })
    // 7 . 다시옆방으로 버튼클릭시!
    .next()
    .click(function () {
      actMini(this, 6, "와~! 아늑하다! 옆방으로 가볼까?");
    })
    // 8 . 무서우니 윗층으로 버튼클릭시!
    .next()
    .click(function () {
      actMini(this, 4, "와~! 아늑하다! 옆방으로 가볼까?");
    })
    // 9 . 치료주사방으로 버튼클릭시!
    .next()
    .click(function () {
      actMini(this, 2, "와~! 아늑하다! 옆방으로 가볼까?");
    })
    // 10 . 3번방으로 버튼클릭시!
    .next()
    .click(function () {
      actMini(this, 3, "와~! 아늑하다! 옆방으로 가볼까?");
    })
    // 11 . 1번방으로 버튼클릭시!
    .next()
    .click(function () {
      actMini(this, 1, "와~! 아늑하다! 옆방으로 가볼까?");
    })
    // 12 . 헬기를 호출 버튼클릭시!
    .next()
    .click(function () {
      actMini(this, 0, "와~! 아늑하다! 옆방으로 가볼까?");
    });
}); /////////////// jQB ////////////////////
