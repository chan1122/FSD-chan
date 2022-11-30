// DC 캐릭터 페이지 JS
import React from "react";
import isrc from "./imgSrc";
const CHARACTERS = () => {
    return(
        <React.Fragment>

            <h2>CHARACTERS 페이지</h2>
            <img src={isrc.character} />
        </React.Fragment>
        
        
    );
};
export default CHARACTERS;