import React, { useState } from "react";

function MyComp1() {
  const [person, setPerson] = useState({ name: "", address: "" });

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            value={person.name}
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            value={person.address}
            onChange={(e) => setPerson({ ...person, address: e.target.value })}
          />
        </div>
      </div>
      <div>
        <div>
          <p>이름 : {person.name}</p>
        </div>
        <div>
          <p>주소 : {person.address}</p>
        </div>
      </div>
    </div>
  );
}

function MyInput({ onNameChange, onAddressChange }) {
  return (
    <div>
      <div>
        <input type="text" onChange={onNameChange} />
      </div>
      <div>
        <input type="text" onChange={onAddressChange} />
      </div>
    </div>
  );
}

function MyOutput({ person }) {
  return (
    <div>
      <p>이름 : {person.name}</p>
      <p>주소 : {person.address}</p>
    </div>
  );
}

function MyComp2() {
  const [person, setPerson] = useState({ name: "", address: "" });

  function handleNameChange(e) {
    setPerson({ ...person, name: e.target.value });
  }
  function handleAddressChange(e) {
    setPerson({ ...person, address: e.target.value });
  }

  return (
    <div>
      <MyInput
        onNameChange={handleNameChange}
        onAddressChange={handleAddressChange}
      />
      <MyOutput person={person} />
    </div>
  );
}
// 위에랑 같은 코드인데 얘를 더 많이 쓴대요
// 위에는 Uncontrolled에 가깝고, 아래는 Controlled(제어 컴포넌트)로
// 아래는 input 값이 항상 state에 의해 제어 되기 때문에 다방면에서 유리하대요
/*
function MyInput({ person, onNameChange, onAddressChange }) {
  return (
    <div>
      <div>
        <input
          type="text"
          value={person.name}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={person.address}
          onChange={(e) => onAddressChange(e.target.value)}
        />
      </div>
    </div>
  );
}

function MyOutput({ person }) {
  return (
    <div>
      <p>이름 : {person.name}</p>
      <p>주소 : {person.address}</p>
    </div>
  );
}

function MyComp2() {
  const [person, setPerson] = useState({ name: "", address: "" });

  function handleNameChange(name) {
    setPerson({ ...person, name: name });
  }
  function handleAddressChange(address) {
    setPerson({ ...person, address });
  }

  return (
    <div>
      <MyInput
        person={person}
        onNameChange={handleNameChange}
        onAddressChange={handleAddressChange}
      />
      <MyOutput person={person} />
    </div>
  );
}
 */

function App34(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App34;
