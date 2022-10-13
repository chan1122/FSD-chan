// 이이폰 회전 페이지

window.addEventListener("DOMContentLoaded", () => {

    // 1 . 호출 확인!
    console.log("로딩완료!");
    /* ******************
    [ 아이폰 영역오버시 회전 가능 ]
    1 . 화면에 4등분된 투명 영역을 구현
    2 . 이 영역이 이벤트 대상이됨
    3 . 오버시 변경대상인 아이폰에 회전값 변경
    4 . 트랜지션으로 애니메이션 설정적용!
    5 . 애니메이션 후에 이벤트 박스를 보이게함
    (최초 display: none -> display:block)
    ******************** */
    // 0. 애니메이샨 후에 이벤트 박스 보이게 함!
    // 일정시간후 실행함수
    // settimeout(함수,시간)
    // 함수는 실행코드
    // 시간은 1/1000초(단위안씀 -> 1000은 1초)
    setTimeout(() => {
        document.querySelector(".evt")
        .style.width = "100vw";
    }, 3000);

    // 1 . 대상선정
    // (1) 이벤트 대상: .evt div -> 여러개!!!
    const evt = document.querySelectorAll(".evt div");
    // console.log(evt);

    // (2) . 변경대상 .iphone

    const iphone = document.querySelector(".iphone");
    console.log(iphone);

    // 2. 변경할 값 배열에 셋팅
    const setdeg = [-90, -30, 30, 90];

    // 3. 이벤트 대상의 이벤트 셋팅

    evt.forEach((ele, idx) => {

        // 호출 확인
        // console.log(ele,"/",idx)

        // 각 요소에 마우스 오버시 셋팅
        ele.onmouseover = () => {

            // console.log("나의 순번",idx,setdeg[idx]);

            // 아이폰에 회전값넣기
            iphone.style.transform = `rotateX(10deg) rotateY(${setdeg[idx]}deg)`;

            iphone.style.transition = ".4s ease-out"
        }; ///// 마우스 오버시 //////

    }); ////// forEach //////







});