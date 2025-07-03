import React, { useEffect, useState } from "react";
import { FormCheck } from "react-bootstrap";

function Child11() {
  const [count, setCount] = useState(0);
  // useEffect : 컴포넌트 생애 주기(lifecycle)별 실행되는 코드 작성 가능한 훅(hook)

  useEffect(() => {
    // initial-render(mount)
    console.log("첫 렌더링시 실행 (mount 시 실행)");

    // unmount 시 실행되는 코드 :
    // useEffect의 첫번째 파라미터로 들어가는 함수의 리턴되는 함수로
    return () => {
      console.log("unmount때 실행되는 코드들...");
    };
  }, []);

  console.log("child 함수 실행됨");
  return (
    <div>
      <h3>자식 컴포넌트</h3>
      <button onClick={() => setCount(count + 1)}>증가 {count}</button>
    </div>
  );
}

function MyComp1() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <FormCheck
        type="switch"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {checked && <Child11 />}
    </div>
  );
}

function Child21() {
  // 연습 :
  // 이 컴포넌트가 마운트 될 때 로그로 "자식21 마운트 됨" 출력
  // 이 컴포넌트가 언마운트 될 때 로그로 "자식21 언마운트 됨" 출력

  // useEffect는 여러 개 사용 가능
  // 순서대로 실행됨
  useEffect(() => {
    // mount 시
    console.log("자식21 마운트 됨");

    // unmount 시
    return () => {
      console.log("또 다른 unmount시 실행 코드");
    };
  }, []);

  useEffect(() => {
    // mount 시
    console.log("또 다른 mount 때 실행되는 코드");
    return () => {
      // unmount 시
      console.log("자식21 언마운트 됨");
    };
  }, []);

  return (
    <div>
      <h3>자식 21</h3>
    </div>
  );
}

function MyComp2() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <FormCheck type="switch" checked={show} onChange={() => setShow(!show)} />
      {show && <Child21 />}
    </div>
  );
}

function App37(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App37;
