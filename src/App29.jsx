import React from "react";

function MyComp1() {
  const arr = ["java", "react", "css"];

  return (
    <div>
      {arr.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

function MyComp2() {
  const datas = [9, 5, 1, 0];
  return (
    <div>
      {/* 연습 : datas를 활용해서 아래처럼 출력하기 */}
      {/*
          <ul>
            <li>9</li>
            <li>5</li>
            <li>1</li>
            <li>0</li>
          </ul>
      */}
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App29(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App29;
