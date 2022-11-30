// DC 코믹스 페이지 JS
import React from "react";
import isrc from "./imgSrc";
const COMICS = () => {
    return(
        <React.Fragment>

            <h2>COMICS 페이지</h2>
            <img src={isrc[2]} />
        </React.Fragment>
        
        
    );
};
export default COMICS;