// 로딩구역
window.addEventListener("DOMContentLoaded", () => {

    // 호출 확인 
    console.log("로딩완료!");

    ///////////////////////////////////////////////
    // 동영상이 끝나면 메인페이지로 이동하게 만들기//
    //////////////////////////////////////////////

    const myvid = document.getElementById("myvid");
    // console.log("영상로드 하기!",myvid);

    // 이벤트 : timeupdate
    // -> 동영상이 재생중일떄 발생하는 이벤트
    // -> html이벤트 속성명은 : ontimeupdate
    myvid.ontimeupdate = ()=>{
        
        // 비디오가 멈췃는가? -> myvid.paused
        // paused 속성 : 비디오 멈춤 상태면 true /(아니면) false
        console.log(myvid.paused);
        if(myvid.paused)
            location.href = "index.html";

    };  // 타임업데이트 //


    const Enter = document.querySelector("#enter a");

    Enter.onclick = () => {
        location.href = "main.html";
    };





}); ////////////////////////////////////////////////////////////////////////로딩구역