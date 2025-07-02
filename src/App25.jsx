import React, { useState } from "react";

function MyComp1(props) {
  const [text, setText] = useState("기본값");

  function handleInputChange(event) {
    console.log(event.target.value);
    // setText("다른 값");
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
    </div>
  );
}

function MyComp2() {
  // 연습
  // input 값이 입력되도록
  // 리셋 버튼 클릭 시 input 의 value가 "" 되도록
  const [message, setMessage] = useState("");

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => setMessage("")}>리셋</button>
    </div>
  );
}

function App25(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App25;
