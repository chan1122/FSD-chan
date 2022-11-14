// 보그  PJ 링크 시스템 JS - linksys.js

$(() => {
  /// 제이쿼리 로딩 구역 ///
  // 로딩 확인
  console.log("로ㅋ딩ㅋ완ㅋ료");

  /******************************** 
    로그인, 회원가입, 갤러리 아이콘 넣기
  ********************************/
  // 대상: .sns a:last-child (마지막 카스링크)
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
 $(".sns a").each((idx,ele)=>{
  // attr(속성명,값)
  // -> 값으로 자식요소인 .ir의 텍스트 읽어감!
  $(ele).attr("title",$(ele).children(".ir").text().trim())
  // .trim() 메서드 -> 앞뒤 공백 제거

 })

  /***********************
   *  GNB 메뉴 파트 링크 셋팅하기
   **************************/

  $(".gnb a").click(function (e) {
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
