// 로그인.js 보그pj로그인 페이지 JS - login.js

//////// 제이쿼리 코드블럭 //////////////////
$(() => {
  console.log("로딩완료!");

  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, /// 한 화면당 슬라이드 개수
    spaceBetween: 30, /// 슬라이드 사이간격(px)

    // 사이즈별 슬라이드 개수 간격 동적변경
    slidesPerGroup: 1, /// 슬라이드 그룹(개수단위로 넘어감!)
    loop: true, // 무한 루프 (기본값 flase)
    loopFillGroupWithBlank: true,
    // 한 화면 단위 지정시 단위보다 그룹이 작을 경우 빈칸을 채움
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,   /// 시간간격 (1/1000초)

    },
  })  ;
}); //////////// jQB /////////////////////////
