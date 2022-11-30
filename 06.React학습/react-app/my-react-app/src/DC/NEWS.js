// DC 뉴스 페이지 JS
import React from "react";
import isrc from "./imgSrc";
const NEWS = () => {
    return(
        <React.Fragment>

            <h2>NEWS 페이지</h2>
            <img src={isrc.news} />
        </React.Fragment>
        
        
    );
};
export default NEWS;