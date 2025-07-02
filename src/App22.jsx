import React from "react";

function App22(props) {
  function handleLinkClick(e) {
    // event.preventDefault() : 브라우저 기본 동작을 막기
    e.preventDefault();
    return console.log("링크 클릭됨");
  }

  return (
    <div>
      {/* onSubmit 이벤트 발생중 */}
      {/* 연습 : onSubmit 이벤트 발생시 브라우저 기본 동작을 멈추고 */}
      {/*       콘솔에 메세지 출력*/}
      <form
        action="https://search.naver.com/search.naver"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("메시지");
        }}
      >
        <input type="text" name="query" />
        <button>검색</button>
      </form>

      <button onClick={() => console.log("버튼 클릭됨")}>버튼</button>
      <a href="https://www.google.com" onClick={handleLinkClick}>
        구글로 이동
      </a>
    </div>
  );
}

export default App22;
