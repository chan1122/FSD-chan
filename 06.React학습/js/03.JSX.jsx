// 03.JSX.jsx
/******************************************************
    [ JSX란 무엇인가? ] 
    -Javascript XML을 나타냄
    -리액트에서 HTML을 쉽게 작성할 수 있다
    -appendChild() 메서드 없이 DOM에 요소넣기 가능하다!

*****************************************************/
// JSX를 사용한 것과 사용안한 것을 비교

// 1. JSX를 사용한 예
// 넣을 요소
const myele1 = <h1>나는 JSX를 사용하고있어!</h1>;
// 리액트 루트생성하기 : createRoot() 메서드 사용!
const root1 = ReactDOM.createRoot(document.querySelectorAll("#root div")[0]);
// 적용하기 : 생성된 루트에 render()메서드를 붙여서 쓸 수 있다!
root1.render(myele1);

/* 
    출력방식 정리
    1. 한꺼번에 쓰기
    ReactDOM.render(출력할요소,출력요소)
    2. 따로쓰기 
    1)변수 = ReactDOM.createRoot(출력요소)
    2)변수.render(출력할요소)

*/

// 2. JSX 를 사용하지 않은 예

// 넣을 요소를 createElement()메서드로 생성함(JSX를 사용하지 않고....)
const myele2 = React.createElement("h1", {}, "나는 JSX를 사용하지 안아!");
// createElement("요소명",{javascript코드 작성},"요소내용!");
const root2 = ReactDOM.createRoot(document.querySelectorAll("#root div")[1]);
// 적용하기 : 생성된 루트에 render()메서드를 붙여서 쓸 수 있다
root2.render(myele2);
/****************************************** 
    위 두가지 방식
    즉, JSX를 사용하거나 안쓸 수 있다!

    JSX는 ES6 기반의 자바스크립트 언어의 확장이며 
    런타임 시에 일반 자바스크립트로 변환된다

    ________________________________________


    [ JSX 표현식 ]
    JSX를 사용하면 중괄호에 표현식을 작성할 수 있음
    {....................표현식..................}

    표현식이란 React변수, 속성, JS문법 등의 내용임

******************************************/

// 3. JSX 표현식 사용하기

let num1 = 1000;
let num2 = 7;
const myele3 = <h1>반가워요^^ 리액트는 {num1 * num2}번 사용할수있어!</h1>;
const root3 = ReactDOM.createRoot(document.querySelectorAll("#root div")[2]);
root3.render(myele3);

/******************************************* 
    [ JSX 태그요소 작성시 여러줄일 겨우
    1 . 최상위를 하나 만들고 여러요소를 작성한다!
    2 . 소괄호로 전체를 싸준다!
    - 지원되는 스타일 
    1) <>태그들</>
    2) <Fragment>태그들</Fragment>
    3) <기존태그>태그들</기존태그>
    -> 1),2)번은 CDN방식에서는 지원안함! (설치형SPA지원!)
    -> 기존태그는 <div>,<section> 등 원레 있는 html태그를 말함

]

*******************************************/
const myele4 = (
  <React.Fragment>
    <h2>[ 다수의 HTML요소 블록 삽입 ]</h2>
    <ul>
      <li>프론트엔드개발</li>
      <li>리액트사용개발</li>
      <li>백엔드개발</li>
    </ul>
  </React.Fragment>
);
const root4 = ReactDOM.createRoot(document.querySelectorAll("#root div")[3]);
root4.render(myele4);

const myele5 = (
  <div>
    <h1>개인적인 리액트!</h1>
    <ul>
      <li>개발자</li>
      <li>퍼블리셔</li>
      <li>그냥그런</li>
      <li>점심뭐먹지...</li>
    </ul>
  </div>
);
const root5 = ReactDOM.createRoot(document.querySelectorAll("#root div")[4]);
root5.render(myele5);

/************************************************ 
    [ JSX는 홀로태그이더라도 끝에 닫기해줘야함! ]
    예) <br> -> <br />
    <input type="text"> -> <input type="text" />
************************************************/

const myele6 = <input type="text" value="홀로태그는 스스로 닫아라!" />;
const root6 = ReactDOM.createRoot(document.querySelectorAll("#root div")[5]);
root6.render(myele6);
/**************************************************** 
    [ JSX에서 속성클래스는 className 으로 표기한다! ]
    <태그 class="클래스명">
    class는 JS에서 키워드이므로 사용못함! 대신....
    <태그 ClassName="클래스명">
****************************************************/

const myele7 = <h1 className="myclass">ClassName속성으로 클래스 셋팅!!!</h1>;
const root7 = ReactDOM.createRoot(document.querySelectorAll("#root div")[6]);

root7.render(myele7);

/************************************** 
    [ JSX에소 조건문 사용하기 - if문 ]

**************************************/

// JSX외부에서 if문 사용학
const x = 10000;
let txt = "열심히 살기란 힘들구나..";
if (x < 10000) {
  txt = "개발자까지 힘내자! 고액 연봉이 나를 기다린다!";
} //// if ////
const myele8 = <h1>{txt}</h1>;

const root8 = ReactDOM.createRoot(document.querySelectorAll("#root div")[7]);

root8.render(myele8);

// JSX 표현식에 삼항 연산자 사용하기

let time = 10;
const myele9 = (
  <React.Fragment>
    <h1>지금 몇시지? {time}시야</h1>
    <h1>{time > 9 ? "집으로가자!" : "더하자..."}</h1>
  </React.Fragment>
);
const root9 = ReactDOM.createRoot(document.querySelectorAll("#root div")[8]);

root9.render(myele9);
