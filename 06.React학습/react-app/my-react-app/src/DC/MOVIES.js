// DC 무비 페이지 JS
import React from "react";
import isrc from "./imgSrc";
import VIDEO from "./VIDEO";
const MOVIES = () => {
    return(
        <React.Fragment>

            <h2>MOVIES 페이지</h2>
            <img src={isrc.movies} />
        </React.Fragment>
        
        
    );
};
export default MOVIES;