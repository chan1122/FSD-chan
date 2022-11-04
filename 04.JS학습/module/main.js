// 모듈연습 메인 JS- main.js

// 로딩구역 없이... => script 태그에 defer 속성 사용!

// 모듈화 JS파일 import하기!
import { mTitle as mTit, sTitle as tit, personInfo as pinfo } from "./textData.js";
import {message as msg} from "./msgFormat.js";
/******************************************************* 
    import 형식:
    import 전달변수 from 파일경로;
    -> 반드시 가져올 모듈화 JS에서 export를 해줘야함!
    -> from 뒤에 경로는 반드시 상대경로일 경우 
    같은 위치일 지라도 ./ 표시를 꼭 해야함!(없으면 안나옴)
    -> 모듈 구성은 반드시 서버형식으로 열어야 작동한다!
    (http://........) Live Server로 열기떄문에 볼수 있음!

    [ import시 변수명 변경하기]
    import {전달변수 as 별칭} from 파일경로;
    예) import {mymymy as m} from 파일경로;
    -> 별칭 사용이유: 단순 변경요구, 같은 이름 변수 피하기
*******************************************************/

/* 
    [ 모듈화를 위한 구성]
    1 . 데이터를 처리하기위한 JS
    -> textData.js
    2 . 구체적인 데이터 구성 처리를 위한 JS
    -> msgFormat.js

*/
// 1 . 타이틀 출력 박스
const tpart = document.querySelector(".tpart");
// 2. 내용 출력박스
const demo = document.querySelector("#demo");

// 3 . 제목넣기
tpart.innerHTML = `

    <h2>${mTit}</h2>
    <h3>${tit}</h3>
`;

// 4 . 내용넣기
demo.innerHTML = msg("현석",40);
demo.innerHTML += msg("톰",40);
demo.innerHTML += msg("레알",40);

// pinfo.forEach(ele,idx){

// }


