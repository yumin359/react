function MyComp1({ color }) {
  return <h1>color : {color}</h1>;
}

// 컨텐츠는 children prop
function MyComp2({ city, children }) {
  console.log("city", city);
  console.log("children", children);
  return null;
}

function MyAwesomeButton1({ color, children }) {
  return (
    <button style={{ color: color, padding: "10px", fontSize: "2em" }}>
      {children}
    </button>
  );
}

function MyAwesomeCard1({ mark, children }) {
  return (
    <div
      style={{
        padding: "10px",
        width: "100px",
        height: "200px",
        margin: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
      }}
    >
      {mark} {children}
    </div>
  );
}

function App10() {
  return (
    <>
      <MyComp1 color={"red"} />
      <MyComp2 city={"seoul"}>우리의 컨텐츠</MyComp2>
      <MyAwesomeButton1 color={"red"}>전송</MyAwesomeButton1>
      <MyAwesomeButton1 color={"blue"}>등록</MyAwesomeButton1>
      <MyAwesomeButton1 color={"yellow"}>저장</MyAwesomeButton1>
      <hr />
      {/* 연습 : <div>spade 10</div> */}
      <MyAwesomeCard1 mark={"spade"}>10</MyAwesomeCard1>
      <MyAwesomeCard1 mark={"heart"}>ACE</MyAwesomeCard1>
      <MyAwesomeCard1 mark={"clover"}>5</MyAwesomeCard1>
    </>
  );
}
export default App10;
