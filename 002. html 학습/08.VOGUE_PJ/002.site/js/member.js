// 회원가입.js 보그pj회원가입 페이지 JS - member.js

//// JQB ////
$(() => {
  // 로딩완료
  console.log("로딩완료");

  /*********************************************** 

        [ 사용자 입력폼 유효성 검사 ]
        - 이벤트 종류 : blur(포커스가 빠질떄 발생)
        - 제이쿼리 이벤트 메서드 : blur()
        - 이벤트 대상 : 
        -> idrk 'emain2'가 아니고 class가 'searcs' 가 아닌 type이
        'text'인 입력요소 input과 함꼐 type이 'password'인 입력 요소 input

        ->>>>>> 제이쿼리 표현법
        input[type=text][id!=email2][class!=search],input[type=password]
        >>> 대괄호는 속성 선택자(CSS원래문법), != 같지않다(제이쿼리 전용)
    ***********************************************/

  $(`input[type=text][id!=email2][class!=search],
        input[type=password]`).blur(() => {
    // 1 . 방금 블러가 바랭한 요소의 id는?
    let cid = $(this).attr("id");
    // cid는 current id 즉, 현제아이디라는 뜻으로 작명!

    // 2 . 블러가 발생한 요소의 입력값은?
    let cv = $(this).val();
    // cv는 current value 즉, 현제값이라는 뜻으로 작명!

    console.log("블러발생", cid, "/", cv);
  });
}); //// JQB ////
