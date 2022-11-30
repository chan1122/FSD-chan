// DC 로고 컴포넌트
import React from "react";
import isrc from "./imgSrc";

const mystyle = {
    width:"81px",
    height:"81px",
    backgroundImage:"linear-gradient(45deg, #88f62f, red)",
    borderRadius:"50%",
}
const Logo = () => {
  return (
    <>
        <h1 style={mystyle}>
            <img src={isrc.logo} style={{width:"81px"}} />
        </h1>
    </>
  );
};

export default Logo;