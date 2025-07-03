import React, { useState } from "react";

function MyComp1() {
  const [person, setPerson] = useState({
    name: "",
    address: { city: "", country: "" },
  });
  const [history, setHistory] = useState([]);

  function handleNameChange(e) {
    const nextPerson = structuredClone(person); // deep copy(깊은 복사)
    nextPerson.name = e.target.value;
    setPerson(nextPerson);
  }
  function handleCityChange(e) {
    const nextPerson = structuredClone(person); // deep copy(깊은 복사)
    nextPerson.address.city = e.target.value;
    setPerson(nextPerson);
  }
  function handleCountryChange(e) {
    const nextPerson = structuredClone(person); // deep copy(깊은 복사)
    nextPerson.address.country = e.target.value;
    setPerson(nextPerson);
  }
  function handleSaveClick() {
    const nextHistory = [...history];
    nextHistory.push(person);
    setHistory(nextHistory);
  }

  return (
    <div>
      {/*div.d-flex>div.flex-1*2*/}
      <div className="d-flex">
        <div className="flex-1">
          <div>
            <input
              type="text"
              value={person.name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <input
              type="text"
              value={person.address.city}
              onChange={handleCityChange}
            />
          </div>
          <div>
            <input
              type="text"
              value={person.address.country}
              onChange={handleCountryChange}
            />
          </div>
          <div>
            <button onClick={handleSaveClick}>변경</button>
          </div>
        </div>
        <div className="flex-1">
          <h3>변경 이력</h3>
          {history.map((item) => (
            <div className="border my-1">
              <div>이름 : {item.name}</div>
              <div>도시 : {item.address.city}</div>
              <div>국가 : {item.address.country}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MyComp2() {
  // 이름은 값 가져오니까(중첩된 거 아니니까) 상관없는데
  // city랑 country는 참조값을 가져오는 거라서 값이 바뀌면 전에 값들도 같이 바뀜
  // 그러니까 얕은 복사 하지 마세용
  const [person, setPerson] = useState({
    name: "",
    address: { city: "", country: "" },
  });
  const [history, setHistory] = useState([]);

  function handleNameChange(e) {
    const nextPerson = { ...person }; // shallow copy(얕은 복사, 하지 말 것)
    nextPerson.name = e.target.value;
    setPerson(nextPerson);
  }
  function handleCityChange(e) {
    const nextPerson = { ...person }; // shallow copy(얕은 복사, 하지 말 것)
    nextPerson.address.city = e.target.value;
    setPerson(nextPerson);
  }
  function handleCountryChange(e) {
    const nextPerson = { ...person }; // shallow copy(얕은 복사, 하지 말 것)
    nextPerson.address.country = e.target.value;
    setPerson(nextPerson);
  }
  function handleSaveClick() {
    const nextHistory = [...history];
    nextHistory.push(person);
    setHistory(nextHistory);
  }

  return (
    <div>
      {/*div.d-flex>div.flex-1*2*/}
      <div className="d-flex">
        <div className="flex-1">
          <div>
            <input
              type="text"
              value={person.name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <input
              type="text"
              value={person.address.city}
              onChange={handleCityChange}
            />
          </div>
          <div>
            <input
              type="text"
              value={person.address.country}
              onChange={handleCountryChange}
            />
          </div>
          <div>
            <button onClick={handleSaveClick}>변경</button>
          </div>
        </div>
        <div className="flex-1">
          <h3>변경 이력</h3>
          {history.map((item) => (
            <div className="border my-1">
              <div>이름 : {item.name}</div>
              <div>도시 : {item.address.city}</div>
              <div>국가 : {item.address.country}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App32(props) {
  return (
    <div>
      {/*잘 안 돌아가는 버전(얕은 복사 사용)*/}
      <MyComp2 />
      <hr />
      {/*잘 돌아가는 버전(깊은 복사 사용)*/}
      <MyComp1 />
    </div>
  );
}

export default App32;
