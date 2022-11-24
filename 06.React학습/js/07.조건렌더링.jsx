// 07.조건렌더링 JSX

// 리액트에서는 조건부로 구성요소를 랜더링 할 수 있다!

////////////////////////////////////////
// 1. if문을 사용하여 조건부 렌더링하기 //
////////////////////////////////////////

function MakeDev() {
  return <h1>나는 개발자야!</h1>;
}

function LostDev() {
  return <h1>개발자가 뭐지?</h1>;
}

// 메인 컴포넌트에서 위의 2가지 중 조건부로 컴포넌트 선택로딩
function Developer(props) {
  // 호출시 전달되는 속성명 isDev
  const isNow = props.isDev; // true / false
  // 조건문
  if (isNow) {
    return <MakeDev />;
  }
  // else문이 없어도 if문에 들어가면
  // return문 때문에 함수를 나간다!
  return <LostDev />;
} //////// Developer 컴포넌트 //////

// 컴포넌트 호출출력
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<Developer isDev={true} />);

// 컴포넌트 호출출력
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<Developer isDev={false} />);

/////////////////////////////////////////////
// 2. if문이 아닌 조건 표현하기
// -> (조건식) && JSX표현식
// 조건이 true일때만 && 뒤의 JSX표현식이 출력됨!
//////////////////////////////////////////////

// 리스트 반복찍기를 위한 컴포넌트
function CarList(props) {
  // 전달되는 속성명은 name
  return <li>나는 {props.name}입니다!</li>;
}

// 리스트를 출력하는 컴포넌트
// 내가 사고싶은 자동차 리스트
function WishList(props) {
  // 전달되는 속성명은 wlist
  const mycars = props.wlist;
  return (
    <React.Fragment>
      <h1>[ 자동차 위시리스트 ]</h1>
      {/* 자동차 리스트가 0보다 클때만 아래출력 */}
      {mycars.length > 0 && (
        <div>
          <h2>내가 사고 싶은 자동차는 모두 {mycars.length}대입니다.</h2>
          <ul>
            {
              // 배열변수.map() 메서드로 배열을 자동순회한다!
              // map((변수)=>{표현식})
              // map(변수=>표현식)
              // 변수는 화살표함수 안으로 배열값을 전달함
              // CarList 컴포넌트에 전달되는 속성명은 name
              mycars.map((x) => (
                <CarList name={x} />
              ))
            }
          </ul>
        </div>
      )}
    </React.Fragment>
  );
} /////////////// WishList 컴포넌트 /////////////////////

const cars = ["제네시스", "그랜져", "롤스로이스", "렉서스"];
// const cars = [];
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(<WishList wlist={cars} />);

///////// 조금 더 복잡한 속성을 전달하여 반복하는 위시리스트2 /////////

// 리스트 반복찍기를 위한 컴포넌트
function CarList2(props) {
  // 전달되는 속성명은 seq,cname
  return (
    <li>
      {props.seq} {props.cname}입니다!
    </li>
  );
}

// 리스트를 출력하는 컴포넌트
// 내가 사고싶은 자동차 리스트
function WishList2(props) {
  // 전달되는 속성명은 wlist
  const mycars = props.wlist; // 객체를 담은 배열
  return (
    <React.Fragment>
      <h1>[ 자동차 위시리스트2 ]</h1>
      {/* 자동차 리스트가 0보다 클때만 아래출력 */}
      {mycars.length > 0 && ( /// 조건문
        <div>
          <h2>내가 사고 싶은 자동차는 모두 {mycars.length}대입니다.</h2>
          <ul>
            {mycars.map((x) => (
              <CarList2 seq={x.id} cname={x.name} />
            ))}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
} /////////////// WishList 컴포넌트 /////////////////////

// 전달할 배열변수 할당하기 ///
// 배열안에 객체가 같은 구조로 들어감!
const cars2 = [
  { id: "첫번째", name: "레이" },
  { id: "두번째", name: "캐스퍼" },
  { id: "세번째", name: "티코" },
];
// 출력하기 ///
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(<WishList2 wlist={cars2} />);

////////////////////////////////////////////////////////////
// 3. 조건연산자자 (삼항연산자) 를 사용하여 조건부 렌더링하기 //
////////////////////////////////////////////////////////////
function MadeGoal() {
  return <h2>골!!!! </h2>;
}
function MissedGoal() {
  return <h2>노골!</h2>;
}

// 골인 여부를 결정하는 메인 컴포넌트

function Goal(props) {
  // 전달되는 속성명은
  const result = props.isGoal;

  return (
    <React.Fragment>
      <h1>[ ★ 중계석 ★ ]</h1>
      {result ? <MadeGoal /> : <MissedGoal />}
    </React.Fragment>
  );
}

const root5 = ReactDOM.createRoot(document.getElementById("root5"));
root5.render(
  <React.Fragment>
    <h2>한국팀 지금 슛!</h2>
    <Goal isGoal={false} />
  </React.Fragment>
);
const root6 = ReactDOM.createRoot(document.getElementById("root6"));
root6.render(
  <React.Fragment>
    <h2>한국팀 지금 다시 슛!</h2>
    <Goal isGoal={true} />
  </React.Fragment>
);

// 자체 TEST

/* 1. 반복하는 컴포넌트  */
function LoopTEST(props) {
  return (
    <li>
      이것은 {props.int} + {props.stringE} + {props.stringK}입니다.
    </li>
  );
}
/* 2. 출력하고싶은 컴포넌트  */
function PrintLn(props) {
  const print = props.pt;
  return (
    <React.Fragment>
      <h1>테스트용</h1>
      {print.length > 0 && (
        <div>
          <h2>순서대로!!</h2>
          <ul>
            {print.map((AA) => (
              <LoopTEST int={AA.name} stringE={AA.ele} stringK={AA.bo} />
            ))}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}
/* 3. 배열 컴포넌트  */
const bb = [
  { name: "a", ele: "b", bo: "c" },
  { name: "1", ele: "2", bo: "3" },
  { name: "ㄱ", ele: "ㄴ", bo: "ㄷ" },
];
/* 4. 출력 컴포넌트  */
const testroot = ReactDOM.createRoot(document.getElementById("root7"));
testroot.render(<PrintLn pt={bb} />);

///////// -> 성공 단순 글자 출력 성공
function AA() {
  return (
    <React.Fragment>
      <h1>테스트</h1>
    </React.Fragment>
  );
}
const root8 = ReactDOM.createRoot(document.getElementById("root8"));
root8.render(<AA />);

/////////// Event
// 이벤트들 창모양
function Evt1() {
  alert("반가워");
}
function EEVVEENNTT(props) {
  return <button onClick={Evt1}>클릭요망</button>;
}

const root9 = ReactDOM.createRoot(document.getElementById("root9"));
root9.render(<EEVVEENNTT />);

/// 연습 2 배열 2번째

function TT(props) {
  return <h2>TT불러왔어!</h2>;
}
function DDD(props) {
  return <h2>DD불러왔어!</h2>;
}
function EE(props) {
  return <h2>EE불러왔어!</h2>;
}
function ASDASD(props) {
  return (
    <li>
      그러니까{props.z}이게{props.x}이렇다고{props.c}
    </li>
  );
}

function AADDAA(props) {
  let num = 0;
  const LLAA = props.Asd;

  return (
    <React.Fragment>
      <h1>2번째 연습입니다.</h1>
      {LLAA.length > num && (
        <div>
          <h2>좀있으면 사라지느누ㅠ</h2>
          <ul>
            {LLAA.map((ASD) => {
              <ASDASD z={ASD.ll} x={ASD.pp} c={ASD.oo} />;
            })}
          </ul>
        </div>
      )}
      <button onClick={num++}></button>
    </React.Fragment>
  );
}

const LLAAA = [
  { ll: "123", pp: "456", oo: "789" },
  { ll: "qwe", pp: "asd", oo: "zxc" },
  { ll: "ㅂㅈㄷ", pp: "ㅁㄴㅇ", oo: "ㅋㅌㅊ" },
];
const root10 = ReactDOM.createRoot(document.getElementById("root10"));
root10.render(<AADDAA Asd={LLAAA} />);
