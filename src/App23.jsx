import React, { useState } from "react";

function MyComp1() {
  let count = 1;

  function handleButtonClick() {
    count++;
    console.log("button click", count);
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={handleButtonClick}>count 증가</button>
    </div>
  );
}

function MyComp2() {
  // 어려운 내용입니당
  // 컴포넌트는 처음 그려진(render) 이후
  // 상태(state)가 변경되어야 다시 그려짐(re-render)

  // 상태(state)는 react가 관리하는 값
  // 컴포넌트는 useState로 상태를 얻고 업데이트 가능.

  // useState : 초기값을 받고, 현재 상태와[0], 상태를 업데이트 할 수 있는 메소드[1]를 배열로 리턴
  const arr = useState(1);
  let count = arr[0]; // 현재상태
  let setCount = arr[1]; // 상태를 업데이트 하는 메소드

  function handleButtonClick() {
    // 상태 변경할 때 useState 에서 받은 값의 [1]인덱스에 있는 함수를 사용해야함
    setCount(count + 1); // 상태 변경됨 -> re-render
    console.log("button click", count);
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={handleButtonClick}>count 증가</button>
    </div>
  );
}

function App23(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App23;
