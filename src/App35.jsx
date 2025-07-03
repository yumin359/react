import React, { useState } from "react";

function ChildComp13({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

function ChildComp12({ text }) {
  return (
    <div>
      <ChildComp13 text={text} />
    </div>
  );
}

function ChildComp11({ text }) {
  return (
    <div>
      <ChildComp12 text={text} />
    </div>
  );
}

function MyComp1() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ChildComp11 text={text} />
    </div>
  );
}

function ChildComp23({ list }) {
  return (
    <div>
      <h3>목록</h3>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ChildComp22({ list }) {
  return (
    <div>
      <ChildComp23 list={list} />
    </div>
  );
}

function ChildComp21({ list }) {
  return (
    <div>
      <ChildComp22 list={list} />
    </div>
  );
}

function MyComp2() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleAddClick() {
    setList([...list, text]);
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddClick}>추가</button>
      <ChildComp21 list={list} />
    </div>
  );
}

function App35(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      {/* prop drilling 일어남 */}
      <MyComp1 />
    </div>
  );
}

export default App35;
