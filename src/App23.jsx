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

function MyComp3() {
  // const count = arr[0]; // 현재 상태
  // const setCount = arr[1]; // 상태 업데이트 함수
  const [count, setCount] = useState(1);

  function handleButtonClick() {
    setCount(count + 1);
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={handleButtonClick}>세번째 버튼</button>
    </div>
  );
}

function MyComp4() {
  const [message, setMessage] = useState("첫번째 메세지");

  // 연습
  // 1번 버튼을 클릭하면 message가 "첫번째 메세지"
  // 2번 버튼을 클릭하면 message가 "두번째 메세지"
  function handleButton1Click() {
    // message = "첫번째 메세지"; // 이렇게 하면 안 됨
    setMessage("첫번째 메세지");
  }

  function handleButton2Click() {
    // message = "두번째 메세지"; // 이렇게 하면 안 됨
    setMessage("두번째 메세지");
  }

  // 로 출력되도록 코드 작성
  return (
    <div>
      {message}
      <br />
      <button onClick={handleButton1Click}>1번</button>
      <button onClick={handleButton2Click}>2번</button>
    </div>
  );
}

function MyComp5() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <div style={{ background: color, padding: "20px" }}></div>
      <button onClick={() => setColor("red")}>빨강</button>
      <button onClick={() => setColor("yellow")}>노랑</button>
      <button onClick={() => setColor("blue")}>파랑</button>
    </div>
  );
}

function MyComp6() {
  // 각 버튼 클릭시 해당 이미지로 출력되도록 코드 완성
  const [imagePath, setImagePath] = useState("/public/bear.jpg");
  return (
    <div>
      <img className="w-100" src={imagePath} alt="" />
      <br />
      <button onClick={() => setImagePath("/public/bear.jpg")}>곰</button>
      <button onClick={() => setImagePath("/public/eagle.jpg")}>독수리</button>
      <button onClick={() => setImagePath("/public/lion.jpg")}>사자</button>
    </div>
  );
}

const images = ["/public/bear.jpg", "/public/eagle.jpg", "/public/lion.jpg"];
let i = 0;
function MyComp7() {
  // 연습: 다음 버튼 클릭시 독수리->사자->곰->독수리로 출력되도록 코드 완성
  const [imgArr, setImgArr] = useState(images[i]);
  function handleNextButtonClick() {
    i++;
    if (i == 3) {
      i = 0;
    }
    setImgArr(images[i]);
    console.log(i);
  }

  function handlePrevButtonClick() {
    i--;
    if (i == -1) {
      i = 2;
    }
    setImgArr(images[i]);
    console.log(i);
  }

  return (
    <div>
      <img className="w-100" src={imgArr} alt="" />
      <br />
      <button onClick={handlePrevButtonClick}>이전</button>
      <button onClick={handleNextButtonClick}>다음</button>
    </div>
  );
}

function App23(props) {
  return (
    <div>
      <MyComp7 />
      <hr />
      <MyComp6 />
      <hr />
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

export default App23;
