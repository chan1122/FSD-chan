  // 보그  PJ 링크 시스템 JS - linksys.js
$(() => {
  /// 제이쿼리 로딩 구역 ///
  // 로딩 확인
  // console.log("로ㅋ딩ㅋ완ㅋ료");

  /******************************** 
    로그인, 회원가입, 갤러리 아이콘 넣기
  ********************************/
  // 대상: .sns a:last (마지막 카스링크)
  // 대상 추가 : .mosns a:last
  // 변경내용: 대상요소 앞ㅍ에 형제요소로 a요소 삽입
  // 메서드 : before(요소) -> 선택요소 앞에 형제요소로 추가
  // -> 참고) after(요소) -> 선택요소 뒤에 형제요소로 추가
  // 선택자 : last (제이쿼리 전용!)
  $(".sns a:last").before(`
    <a href="#" class="fi fi-laptop">
    <span class="ir"> 로그인 </span>
    </a>
    <a href="#" class="fi fi-user-secret">
    <span class="ir"> 회원가입 </span>
    </a>
    <a href="#" class="fi fi-camera">
    <span class="ir"> 갤러리 </span>
    </a>
 `);

 //// sns 파트 a 요소들에 툴팁넣기 ////
 // each((idx,ele)=>{코드구현부})
 // 모바일 대상추가
 $(".sns a, .mosns a").each((idx,ele)=>{
  // attr(속성명,값)
  // -> 값으로 자식요소인 .ir의 텍스트 읽어감!
  $(ele).attr("title",$(ele).children(".ir").text().trim())
  // .trim() 메서드 -> 앞뒤 공백 제거

 })



 /************************************************* 
    [ SNS 메뉴 파트 링크 셋팅하기 ]
 *************************************************/

    // 댓상 : .sns a
    // 모바일 대상 추가
    $(".sns a, .mosns a").click(function(e){ // e 는 클릭시 나타나는 이벤트 전달변수
      // a요소 기본 이동 막기
      e.preventDefault();
      // console.log("아이콘클릭")

      // 1. 클릭된 a요소 텍스트 읽기
      // -> 실제로 읽어 온것은 하위 span의 텍스트이므로
      // 앞뒤 공백이 생긴다! 꼭 trim() 처리 필수
      let atxt = $(this).text().trim();
      // console.log(atxt);

      // 2 . 이동할 페이지 주소 할당하기
      let url;

      switch(atxt){
        case "인스타그램":
          url="https://www.instagram.com/VOGUEKOREA/";
          break;
        case "페이스북":
          url="https://www.facebook.com/VOGUEkr";
          break;
        case "트위터":
          url="https://twitter.com/VogueKorea";
          break;
        case "유튜브":
          url="https://www.youtube.com/user/VogueKorea?sub_confirmation=1";
          break;
        case "로그인":
          url="login";
          break;
        case "회원가입":
          url="member";
          break;
        case "갤러리":
          url="gallery";
          break;
        case "카카오스토리":
          url="https://story.kakao.com/ch/voguekr";
          break;
      }

      console.log(url)

      // 3 . 페이지 이동하기 
      if(atxt === "로그인"||atxt === "회원가입"||atxt === "갤러리"){
        location.href = url + ".html";
      }else{ // 기타 sns는 새창열기(window.open())
        window.open().location.href = url;

      }/// 3. 페이지 이동하기 else ///
    });//// click ////


    // 모바일 sns 메뉴 4번째 a요소 뒤에 줄바꿈 널기
    $(".mosns a").eq(3).after("<br>");

  /******************************************************
   *  메인 로고 링크 셋팅하기 
   *********************************************************/
    $(".logo a").click(e=>location.href = "index.html");



  /******************************************************
   *  GNB 메뉴 파트 링크 셋팅하기
   *********************************************************/

  // 대상 .gnb a + .mognb a (모바일)
  $(".gnb a , .mognb a").click(function (e) {
    // e는 이벤트 전달변수
    // 기본 이동 막기
    // preventDefault - 메서드! - a태그의 이동을 막아버린다!!!!
    e.preventDefault();

    // 1 . 클릭된 a요소의 글자읽기
    let atxt = $(this).text().toLowerCase().trim();
    // toLowerCase() 소문자 변환
    // 참고! ) toUpperCase() 대문자 변환
    console.log(atxt);

    // 2 . 서브페이지 이동하기
    if (atxt !== "search") {
      // 검색이 아니면
      location.href = "categori.html?cat=" + encodeURIComponent(atxt);
    }
    // time&gem : 카테고리를 구분하기위해 파라미터 키=값 쌍을 보냄
    // cat=카테고리명
    // 이것을 받아서 페이지 셋업을 한다!
    // 이렇게 데이터를 url로 전달하는 방식을 get방식이라고 함
    // 그런데 데이터중 특수문자가 있으믈 (time & gem)
    // 이것을 보낼떄 encodeURIComponent() 로 변환해서 보내고
    // 받는곳에서 decodeURIComponent() 로 복원함
  }); // 클릭 이벤트 //
}); /// 제이쿼리 로딩 구역 ///
