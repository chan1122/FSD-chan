import React from "react";
import { Outlet ,Link } from "react-router-dom";
import "./Layout.css"
import Logo from "./Logo";
/* 
  [ 리액트 스타일링 기법 3가지 ]
  1. 일반 css파이을 컴포넌트 js파일에 import하여 사용
  에) import "css경로";


  2. 객체를 만들어서 적용하는 방법
  에) 
  const mystyle = {color:"red",fontSize:"30px"}
  <h1 styel={}> 안녕 나는 h1이야 </h1>
  3. 직접 중괄호 표현식에 중괄호를 하나 더 하여
  표현
  에) 

  <h1 styel={}> </h1>
*/
const mystyle = {color:"red",fontSize:"30px"}
const Layout = () => {
  return (
    <React.Fragment>
      {/* 네비게이션 파트 */}
      <nav className="gnb">
        <ul>
          <li><Logo /></li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ct">CHARACTERS</Link>
          </li>
          <li>
            <Link to="/co">COMICS</Link>
          </li>
          <li>
            <Link to="/gm">GAMES</Link>
          </li>
          <li>
            <Link to="/mv">MOVIES</Link>
          </li>
          <li>
            <Link to="/vd">VIDEO</Link>
          </li>
          <li>
            <Link to="/nw">NEWS</Link>
          </li>
        </ul>
      </nav>
      {/* 출력파트 : 각페이지가 여기에 표시됨 */}
      <Outlet />
    </React.Fragment>
  );
};

// Layout 내보내기
export default Layout;
