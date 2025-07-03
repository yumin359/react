import React, { useState } from "react";
import { Form } from "react-bootstrap";

function ChildComp11() {
  const [count, setCount] = useState(1);

  return (
    <div className="border bg-info">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

function MyComp1() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <div>
      <Form.Check
        type="switch"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {checked && <ChildComp11 />}

      <hr />

      <Form.Check
        type="switch"
        checked={checked2}
        onChange={() => setChecked2(!checked2)}
      />
      {checked2 && <ChildComp11 />}
    </div>
  );
}

// component의 lifecycle :
// initial render : 컴포넌트 트리에 붙을 때
// re-render : 상태가 변경될 때
// 트리에서 떨어짐
// 각각 ~할 때 어떤 걸 하고 싶을 때 사용하는 것이
// useEffect : component의 lifecycle에 맞춰 실행시킬 수 있는 메소드를 가짐

function App36(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App36;
