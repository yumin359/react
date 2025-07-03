import React, { useState } from "react";

function MyComp1() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={() => setList([...list, item])}>추가</button>
      </div>
      <div>
        <h3>리스트</h3>
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
// 위에처럼 한번에 쓰는 것보다

// 한 컴포넌트가 또 다른 컴포넌트를 품고있는 이런 형태가 더 많이 나타남
function MyInput({ onSaveClick }) {
  const [item, setItem] = useState("");
  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={() => onSaveClick(item)}>추가</button>
    </div>
  );
}
function MyList({ list }) {
  return (
    <div>
      <h3>리스트</h3>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
function MyComp2() {
  // lifting state up : 하위(자식) 컴포넌트의 상태를 상위(조상,부모) 컴포넌트로 옮김
  // 필요한 상태만 했음
  const [list, setList] = useState([]);

  function handleSaveClick(item) {
    setList([...list, item]);
  }

  return (
    <div>
      <MyInput onSaveClick={handleSaveClick} />
      <MyList list={list} />
    </div>
  );
}

function App33(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App33;
