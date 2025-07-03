import React, { createContext, useContext, useState } from "react";

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

function ChildComp33() {
  // step2. use context
  const message = useContext(MyComp3Context);

  return <div>메세지 : {message}</div>;
}

function ChildComp32() {
  return (
    <div>
      <ChildComp33 />
    </div>
  );
}

function ChildComp31() {
  return (
    <div>
      <ChildComp32 />
    </div>
  );
}

// step1. create context
const MyComp3Context = createContext(null);
// 이름은 의미 있는 거로 적절히 쓰면 됨
// 기본값은 잘 사용 안 되니 아무거나 넣으면 됨

function MyComp3() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {/* // step3. provide context */}
      <MyComp3Context value={message}>
        <ChildComp31 />
      </MyComp3Context>
    </div>
  );
}

function ChildComp43() {
  const list = useContext(MyComp4Context);

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

function ChildComp42() {
  return (
    <div>
      <ChildComp43 />
    </div>
  );
}

function MyComp41() {
  return (
    <div>
      <ChildComp42 />
    </div>
  );
}

const MyComp4Context = createContext(null);

function MyComp4() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  // 연습 : list를 context를 사용해서 ChildComp43 에서 출력해보기

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={() => setList([...list, item])}>추가</button>
      <MyComp4Context value={list}>
        <MyComp41 />
      </MyComp4Context>
    </div>
  );
}

function App35(props) {
  return (
    <div>
      {/* using context */}
      <MyComp4 />
      <hr />
      {/* using context */}
      <MyComp3 />
      <hr />
      {/* prop drilling */}
      <MyComp2 />
      <hr />
      {/* prop drilling 일어남 */}
      <MyComp1 />
    </div>
  );
}

export default App35;
