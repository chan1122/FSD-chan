import React from "react";
import { Outlet ,Link } from "react-router-dom";

const Layout = () => {
  return (
    <React.Fragment>
      {/* 네비게이션 파트 */}
      <nav>
        <ul>
          <li>로고</li>
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
