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

function Child31() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // useEffect 의 두번째 파라미터 : dependencies(deps)
  // 변경 감지할 값들의 목록
  // 이 목록의 값이 변경되면 useEffect의 첫번째 파라미터(함수) 실행

  useEffect(() => {
    console.log("count 업데이트되면 실행되는 함수의 코드들...");
  }, [count]);
  useEffect(() => {
    console.log("마운트될 때만 실행되는 코드");
  }, []);

  useEffect(() => {
    console.log("otherCount 업데이트되면 실행되는 함수의 코드들...");
  }, [otherCount]);

  useEffect(() => {
    console.log("count/otherCount 업데이트");
  }, [count, otherCount]);
  // deps 없는 거 쓰면 항상 실행됨
  // 마운트없고, 업데이트 때만 실행되는 코드는 없음
  useEffect(() => {
    // 여기 쓰면 mount 시 실행되는 코드이고,

    return () => {
      // 여기 쓰면 unmount 시 실행되는 코드
    };
  }, []);
  // -> 즉 마운트 언마운트시에는 위치에 따라서 여기서는 어떨 때 실행될거야~ 라는게 있는데
  // 업데이트는 그런 게 없다는 것! 업데이트는 마운트 실행시 무조건 실행됨 즉
  // 마운트가 없는데 업데이트가 실행되는 코드가 없다는거! 그렇게 설계가 되어있음!
  // 근데 if 같은 거 쓰면 할 수 있긴한데 그렇게 만들어진 코드가 없다는 것임!

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>카운트 {count}</button>
      <button onClick={() => setOtherCount(otherCount + 1)}>
        또 다른 카운트 {otherCount}
      </button>
    </div>
  );
}

function MyComp3() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <FormCheck type="switch" checked={show} onChange={() => setShow(!show)} />
      {show && <Child31 />}
    </div>
  );
}

function Child41() {
  const [count, setCount] = useState(0);
  // 연습
  // 1. 마운트 될 때 ("마운트 됨")("count 업데이트 됨"->이거 안 되게 해보기) 출력
  // 2. 언마운트 될 때 ("언마운트 됨") 출력
  // 3. count가 업데이트 될 때 ("count 업데이트 됨") 출력

  useEffect(() => {
    console.log("마운트 됨");
    return () => {
      console.log("언마운트 됨");
    };
  }, []);
  useEffect(() => {
    if (count !== 0) {
      // != 해도 실행은 되는데 노란줄 뜬다
      console.log("count 업데이트 됨");
    }
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>카운트 {count}</button>
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
        onChange={() => {
          setShow(!show);
        }}
      />
      {show && <Child41 />}
    </div>
  );
}

function App37(props) {
  return (
    <div>
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

export default App37;
