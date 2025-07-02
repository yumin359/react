import React, { useState } from "react";

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
  // 배열은 map으로 그릴 수 있따.
}

function MyComp3() {
  const [datas, setDatas] = useState(["java", "react", "css"]);

  function handleButtonClick() {
    datas.push("boot");
    console.log(datas);
    // react는 배열을 참조값 비교로 상태가 변경되었는지 확인
    // 따라서 이전 상태 배열을 복사한 새 배열을 상태 변경시 사용해야 함
    setDatas(datas);
  }

  console.log("상태 변경됨 !!!");

  return (
    <div>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>추가</button>
    </div>
  );
}

function MyComp4() {
  const [datas, setDatas] = useState(["java", "react", "css"]);

  function handleButtonClick() {
    // react는 배열을 참조값 비교로 상태가 변경되었는지 확인
    // 따라서 이전 상태 배열을 복사한 새 배열을 상태 변경시 사용해야 함
    const nextDatas = [...datas, "boot"];
    setDatas(nextDatas);
  }

  console.log("상태 변경됨");

  return (
    <div>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>추가</button>
    </div>
  );
}

function MyComp5() {
  const [list, setList] = useState(["곰", "독수리", "벌"]);

  // 연습
  function handleLionButtonClick() {
    setList([...list, "사자"]);
  }

  // 각 버튼 클릭시 새 아이템 추가 되도록 코드 작성
  return (
    <div>
      {/*button*3+ul*/}
      <button onClick={() => setList([...list, "곰"])}>곰 추가</button>
      <button onClick={() => setList([...list, "독수리"])}>독수리 추가</button>
      <button onClick={() => setList([...list, "벌"])}>벌 추가</button>
      <button onClick={handleLionButtonClick}>사자 추가</button>
      <button
        onClick={() => {
          const nextList = [...list];
          nextList.pop();
          setList(nextList);
        }}
      >
        마지막 요소 지우기
      </button>

      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App29(props) {
  return (
    <div>
      <MyComp5 />
      <hr />
      <MyComp4 />
      <hr />
      <MyComp3 />
      <hr />
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App29;
