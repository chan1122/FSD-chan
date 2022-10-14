// 도캐빙 PJ v2 링크 시스템 js - linksys.js

// 로드구역
window.addEventListener("DOMContentLoaded", () => {

    // 호출확인!    
    console.log("로딩완료!");



    /// 링크 대상 . top
    const link = document.querySelectorAll(".top a");
    // 호출확인!
    // console.log(link);

    // 링크 이벤트 걸기 및 셋팅하기
    // click 이벤트걸기
    link.forEach(ele => {

        //ele는 각 a 요소이다 
        ele.onclick = () => {
            let atxt = ele.innerText;
            // console.log("a텍스트:",atxt)


            // 주소할당변수
            let url;
            // 2. 링크 분깋기
            switch (atxt) {
                case "프로그램 소개":
                    url = "etc";
                    break;
                case "인물소개":
                    url = "etc";
                    break;
                case "인물관계도":
                    url = "cat";
                    break;
                case "미리보기":
                    url = "etc";
                    break;
                case "동영상":
                    url = "etc";
                    break;
                case "클립영상":
                    url = "etc";
                    break;
                case "다시보기":
                    url = "etc";
                    break;
                case "예고편":
                    url = "etc";
                    break;
                case "스페셜":
                    url = "etc";
                    break;
                case "사진첩":
                    url = "etc";
                    break;
                case "현장 포토":
                    url = "etc";
                    break;
                case "대표 포스터":
                    url = "etc";
                    break;
                case "OST":
                    url = "";
                    break;
                case "[심리 테스트]":
                    url = "etc";
                    break;
                case "시청자 게시판":
                    url = "board";
                    break;
                case "로그인":
                    url = "login";
                    break;
                case "회원가입":
                    url = "member";
                    break;
                case "트위터 바로가기":
                    url = "twitter";
                    break;
                case "인스타 바로가기":
                    url = "instargram";
                    break;
                case "페이스북 바로가기":
                    url = "facebook";
                    break;
                default:
                    url = "index";


            }

            // console.log("url:", url);

            if (url === "etc") {
                alert("현제 페이지는 공사중(제작중)입니다... ㅜㅠ");
            } else {
                if (url === "twitter" || url === "instargram" || url === "facebook") {
                    window.open().location.href = 
                    url === "instargram"?
                    "https://www.instagram.com/tvn_joy/":
                    url === "twitter"?
                    "https://twitter.com/chtvn":
                    "https://www.facebook.com/cjtvngo";
                } else {
                    location.href = url + ".html";
                }
            }

        }; // 클릭 이벤트

    }); ///forEach////

}); //로드 구역




// 프로그램 소개
// 인물소개
// 인물관계도
// 미리보기
// 동영상
// 클립영상
// 다시보기
// 예고편
// 스페셜
// 사진첩
// 현장 포토
// 대표 포스터
// OST
// [심리 테스트]
// 시청자 게시판

// 로그인
// 회원가입
// 트위터 바로가기
// 인스타 바로가기
// 페이스북 바로가기