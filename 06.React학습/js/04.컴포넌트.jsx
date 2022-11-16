// 04. 리액틑 컴포넌트 JSX
/************************************************ 
    [ 리액트 컴포넌트 ]
    - 컴포넌트는 Html요소를 반환하는 함수!

    { 특징 !! }
    - 1) 컴포넌트는 독립적이다
    - 2) 재사용이 가능한 코드집합 - ?


    - 3) JS함수와는 비슷함
    - 4) HTML 코드 반환이 필수이다! => render() 메서드!

    - 5) 컴포넌트는 => |클래스 컴포넌트 / 함수 컴포넌트|       
            2가지로 나뉜다.
        (-> 우리는 함수 컴포넌트에 집중할 예정!)

        -> 5-1) 클래스 컴포넌트는 리액트 초중기에 주로 사용되었으나... React 16.8버전에서 Hooks와 함께
        더이상 사용되지 않는다!!!
        ~> Hooks는 함수 컴포넌트만 사용한다!


____________________________________________________

    [ 첫번째 컴포넌트 만들기! ]

    - 리액트 컴포넌트의 이름은 반드시 첫글자가 대문자이어야 한다!!(안지키면 적용안됨!!)

    [ 클래스 컴포넌트 ]
    클래스 컴포넌트에는
    extends React.Component 상속문이 포함되어야 함!


    -> 컴포넌트에도 메서드가 필요함
        render() 메서드는 HTML을 반환함

           => (- 4) HTML 코드 반환이 필수이다! => render() 메서드!)


************************************************/
// [ 클래스로 컴포넌트 작성 ] //////////
class Gogh extends React.Component {
  // render() 메서드 사용
  render() {
    // HTML태그를 리턴해준다!
    return (
      <React.Fragment>
        <h2>안녕 나는 고흐그림이야!!</h2>
        <img src="./images/01.png" alt="고흐!" />
        {/* 홀로태그는 반드시 끝부분을 닫아준다! */}
      </React.Fragment>
    );
  }
} //// Gogh 클래스 컴포넌트 /////

// 랭더링 하기
// ReactDOM 은 가상돔을 만드는 객체
// CreateRoot(요소) 출력요소를 설정함
const root1 = ReactDOM.createRoot(document.getElementById("root1"));

// render(출력할 요소)
// 출력할 요소 -> 클래스를 호출하면 구성된 태그가 들어옴
// 클래스 호출법: <클래스명 />
root1.render(<Gogh />);

// [ 함수로 컴포넌트 작성 ] //
// 컴포넌트 이므로 반드시 대문자!!!!!
function IronMan() {
  return (
    <React.Fragment>
      <h2>Hello My Name 아이언맨 lol!</h2>
      <h3>안녕 내 이름은 IronMan ㅋ</h3>
      <img src="./images/ab1.jpg" alt="아이론맨!" />
    </React.Fragment>
  );
} /// IronMan 컴포넌트 함수

// 랜더링 하기 //
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<IronMan />);

/*************************************** 
    [** Props 사용하기 **]
    Props는 properties 에서 나온말
    속성들... 즉, 변수에 값을 할당하여 전달하는 방법
    함수의 전달값과 같고 속성으로 컴포넌트에 보낸다!

    -> props는 05번 다음번에 자세히 다룬다!

***************************************/
// 내가 좋아하는 색 표시하기!
function Favorite(props){ //props는 속성 셋팅 변수집합!
    return <h2>내가 좋아하는 색은 {props.color}이야!
    내가 좋아하는음식은{props.food}
    내취미는 {props.hobby}야</h2>;
    // 표현식에 {props.color} 는 호출시 보낸 속성명의 값이다!
} // Favorite 컴포넌트 함수 //

// 좋아하는 색을 props로 전달할수 있다!
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
// 랜더링시 속성셋팅 형식으로 함수 컴포넌트에 값을 전달함!
root3.render(<Favorite color="모든색" food="고기" hobby="운동이"/>)
// 함수 컴포넌트에서는 표현식안에서 {props.호출시사용한속성명}
// 여기서는 {props.color}를 사용한다!

