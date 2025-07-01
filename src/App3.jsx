// 처음 만드는 component
// component : 함수
// component명(함수명) : UpperCamelCase 규칙임. 소문자로 작성 X
function MyAwesomeButton() {
  // 함수 코드들

  // return 에 dom에 그려야할 코드 작성
  return (
    <button
      style={{
        backgroundColor: "red",
        color: "yellow",
        padding: "15px",
        border: "2px solid yellow",
      }}
    >
      너무 잘 만든 버튼
    </button>
  );
}

// MyNewHeader 컴포넌트 만들기

function App3() {
  return (
    <>
      <h1>Lorem ipsum dolor.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet delectus
        in molestias non quae. Atque commodi, cumque, error fugiat labore
        laborum libero necessitatibus nemo quis quod rem sequi tempore,
        veritatis.
      </p>
      <button>Lorem.</button>
      <button>Lorem.</button>
      <hr />
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "1px solid yellow",
          padding: "10px",
        }}
      >
        너무 잘 만든 버튼
      </button>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "1px solid yellow",
          padding: "10px",
        }}
      >
        너무 잘 만든 버튼
      </button>
      <MyAwesomeButton />
      <MyNewHeader />
    </>
  );
}

export default App3;
