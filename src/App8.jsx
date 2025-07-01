function MyComp1({ name = "son", age = 44, city = "london" }) {
  // {} : jsx 내에서 js 코드 작성하는 부분
  return (
    <>
      <ul>
        <li>이름 : {name}</li>
        <li>나이 : {age * 2}</li>
        <li>도시 : {city}</li>
      </ul>
    </>
  );
}

function App8() {
  return (
    <>
      <MyComp1 />
      <MyComp1 name={"lee"} />
      <MyComp1 name={"kim"} age={55} />
      <MyComp1 name={"park"} age={66} city={"busan"} />
    </>
  );
}

export default App8;
