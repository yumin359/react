import React from "react";

function App21(props) {
  function handleButtonClick(e) {
    // e : event 객체
    console.log(e);

    // stopPropagation() : 이벤트 전달 막기
    e.stopPropagation();
    console.log("button click");
  }

  // p 부분 위에처럼 빼서 써도 됨.
  return (
    <div className="p-5 bg-info" onClick={() => console.log("div click")}>
      {/* 연습 : p 클릭 이벤트가 div까지 전파되지 않도록 코드 수정 */}
      <p
        className="bg-danger"
        onClick={(e) => {
          e.stopPropagation();
          console.log("para click");
        }}
      >
        Lorem ipsum dolor.
      </p>

      <button onClick={handleButtonClick}>버튼</button>
    </div>
  );
}

export default App21;
