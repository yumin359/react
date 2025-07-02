import React, { useState } from "react";

function MyComp1() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(10);
  console.log(num1, num2);
  return (
    <div>
      {/*div*2>div+button*/}
      <div>
        <div>{num1}</div>
        <button onClick={() => setNum1(num1 + 1)}>button 1</button>
      </div>
      <div>
        <div>{num2}</div>
        <button onClick={() => setNum2(num2 - 1)}>button 2</button>
      </div>
    </div>
  );
}

function MyComp2() {
  // 연습
  // 각 인풋에 입력한 값으로 변경되도록 코드 작성
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  return (
    <div>
      {/*div*2>input[value=""]*/}
      <div>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
    </div>
  );
}

function App26(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App26;
