import React, { useEffect, useState } from "react";
import { FormCheck } from "react-bootstrap";

function MyComp1({ vaule }) {
  return <div className="border">value * 2 : {vaule * 2}</div>;
}

let someValue = 0;
function MyComp2() {
  someValue = someValue + 1;
  return <div className="border bg-light">someValue : {someValue}</div>;
}

// strict mode 지우니까 마운트됨 하나만 콘솔에 출력된당
function MyComp3() {
  useEffect(() => {
    // 마운트 될 ㄸㅐ 실행되는 코드
    console.log("comp3 마운트 됨");

    return () => {
      // 언마운트 될 때 실행되는 코드
      console.log("comp3 언마운트 됨");
    };
  }, []);
  return (
    <div>
      <h3>mycomp3</h3>
    </div>
  );
}

function Child41() {
  useEffect(() => {
    console.log("child41 mounted");
    return () => {
      console.log("child41 unmounted");
    };
  }, []);
  return (
    <div>
      <h3>child41 component</h3>
    </div>
  );
}

function MyComp4() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <FormCheck
        type="switch"
        checked={show}
        onClick={() => setShow(!setShow)}
      />
      {show && <Child41 />}
    </div>
  );
}

function App38(props) {
  // strict mode : 모든 컴포넌트를 마운트, 언마운트, 마운트
  // purity 한지 확인하는 거라 원래 쓰는건데 초보니까 헷갈리면 지워도 됨
  // 나중에는 쓰기
  // pure component : 함수(컴포넌트) 밖의 데이터를 변경하지 말 것
  return (
    <div>
      <MyComp4 />
      <hr />
      <MyComp3 />
      <hr />
      <MyComp2 />
      <MyComp2 />
      <MyComp2 />
      <hr />
      <MyComp1 vaule={1} />
      <MyComp1 vaule={2} />
    </div>
  );
}

export default App38;
