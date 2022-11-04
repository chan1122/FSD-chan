// 모듈연습 메인 JS- main.js

// 로딩구역 없이...
// 1 . 타이틀 출력 박스
const tpart = document.querySelector(".tpart");
// 2. 내용 출력박스
const demo  = document.querySelector("#demo");


// 3 . 제목넣기
tpart.innerHTML = `

    <h2>중제목</h2>
    <h3>소제목</h3>
`;

// 4 . 내용넣기
demo.innerHTML = "내용이다!";