// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/
/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
    ******************************************/
    let prot = 0;
    // 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    let pnum = 100;
function loadFn() {
  // 1. 호출확인
  console.log("로딩완료!");
  // 광클 금지 함수!!!!!!
  // 광클 금지 상태변수

  if(prot) return; //나가!
  prot = 1;
  setTimeout(() => 
    prot=0,800);

  // 2 . 대상 선정 :
  // 2 - 1 . 이벤트 대상 : .abtn
  const abtn = document.querySelectorAll(".abtn");
  // 2 - 3 . 변경 대상 : #slide
  const slide = document.querySelector("#slide");
  abtn[1].onclick = () => {
    // 1 1 1 1 1 1 1 1 1 1 1 11
    // pnum += 100;

    slide.style.left = `-${pnum}%`;
    slide.style.transition = ".8s";

    // 이거 주석 풀자잉!!!  ! ! ! ! ! ! !! ! !
    // 0.8 초후 맨앞 li 잘라서 맨뒤로 이동
    setTimeout(() => {
      slide.appendChild(slide.querySelectorAll("li")[0]);
      slide.style.left = "0";
      slide.style.transition = "none";
    }, 800);

    //불릿 함수 호출!
    // -> 오른쪽 버튼은 
    chgIndic(1)
  }; ////////////////// 클릭 //////////////////


  // 3 - 2 . 왼쪽 버튼 클릭시 : 외쪽버튼 abtn변수 0번째
  abtn[0].onclick = function(){
    if(prot) return; //나가!
    prot = 1;
    setTimeout(() => 
      prot=0,800);
    //  1 . 맨뒤요소를 잘라서 맨앞으로 이동한다!
    // 대상: slide변수 -> ul#slide
    // 사용 메서드: insertBefore(넣을놈,넣을놈 전놈)
    let cli = slide.querySelectorAll("li");
    let ssllidd = slide.insertBefore(cli[cli.length-1],cli[0]);
    //  2 . 왼쪽 바깥에 -100% left값 주기!
    slide.style.left = "-100%";
    // 첫번째 실행후 트랜지션 없애기
    slide.style.transition = "";
    
    //2 번과 3번 코드 사이에 시차 필요 
    setTimeout(() => {
      
      // 3 . left값을 0으로 트랜지션 애니메이션하기
      slide.style.left = "0";
      slide.style.transition = ".8s";
    }, 0);

    // 불릿 변경 함수 호출 !
    // -> 왼쪽 버튼은 첫번째 슬라이드가 주인공!
    chgIndic();

  };

  // 4 . 슬라이드가 이동 되므로 순서를 알수 있는 
  // 고유순번용 속성을 만들어서 넣어준다!
  // w3c 에서 허용한 사용자 지정 송성명은 반드시 data-로
  // 시작해야하므로 우리는 "data-seq" 라는 이름을 쓰자!
  // 대상: #slide li -> 여기에 속성을 넣는다
  // 
  // 사용 메서드 : forEach((요소,순번)=>{코드})
  slide.querySelectorAll("li")
  .forEach((ele,idx)=>{

    ele.setAttribute("data-seq",idx);
  });// for Each

  // 5 . 불릿 변경 함수!
  // 버튼을 클릭할때 블릿을 해당 순번의 슬라이드와 같은 
  //순번의 블릿의 li에 클래스"on을 넣고
  // 나머지는 클래스를 제거함!
  // chgIndic -> change Indicator (변경하라! 표시자를!)
  const chgIndic = idx => { // idx - 대상 슬라이드 순번

    // 1 . 현제 슬라이드 순번 알아오기
    // cseq -> current sequence number(현제순번)
    let cseq = slide.querySelectorAll("li")[0] // 해당 li 순번
    .getAttribute("data-seq"); // 그 li에 "data-seq"속성값
    // getAttribute(속성명) -> 속성값 읽어오는 JS 내장함수

    console.log(cseq)
    // 2 . 슬라이드 li클래스 초기화
    for(let x of indic) x.classList.remove("on");

    // 2 . 슬라이드 순번과 동일한 블릿 li 클래스 "on"넣기
    indic[cseq].classList.add("on");

    

  }; ////////// chgIndic 함수 //////////








 /***************************************** 
        자동넘기기 기능구현
    *****************************************/
    // 인터발용변수
    let autoI;
    // 타임아웃용 변수
    let autoT;

    // 자동넘기기 /////
    // 인터발함수를 지우려면 변수에 넣고
    // clearInterval(변수) 해야함!!!

    /******************************* 
        함수명: slideAuto
        기능: 슬라이드 인터발 호출
    *******************************/
    function slideAuto() {
        autoI = setInterval(() => {
          slide.style.left = "-100%";
          slide.style.transition = ".8s";
        }, 2000);
    } //////// slideAuto 함수 //////////

    // 인터발함수 최초호출!
    slideAuto();

    /*********************************** 
        함수명: clearAuto
        기능: 인터발지우기,타임아웃셋팅
    ***********************************/
    function clearAuto() {
        console.log("인터발지워!!!");
        // 1. 인터발 지우기
        clearInterval(autoI);
        // 2. 타임아웃 지우기(실행쓰나미 방지!)
        clearTimeout(autoT);
        // 3. 일정시간 후 다시 인터발 호출!
        autoT = setTimeout(slideAuto, 5000);
    } /////// clearAuto함수 ////////


} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////
