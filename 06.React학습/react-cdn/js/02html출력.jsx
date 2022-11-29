// HTML출력 JSX

// 변수에 태그를 JSX문법으로 작성하여 할당한다!
// JSX는 최상위 부모가 하나여야한다!(기본XML문법과 동일!)

const myelement = (
  <div>
    <h1>○나의 친구 리스트!</h1>
    <table>
      <tr>
        <th>이름</th>
        <th>전화번호</th>
        <th>MBTI</th>
      </tr>
      <tr>
        <td>누군가</td>
        <td>010-1111-2222</td>
        <td>INFP</td>
      </tr>
      <tr>
        <td>누군가2</td>
        <td>010-3333-4444</td>
        <td>INFJ</td>
      </tr>
    </table>
  </div>
);

// 화면 출력
// ReactDOM.render(출력할요소,출력요소)
ReactDOM.render(myelement, document.getElementById("root"));
