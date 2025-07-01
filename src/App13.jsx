// import : 가져오기
// named export 는 이름을 명시해서 import
// 중복을 피하기 위해 as로 별칭 주기 가능
import { myAddress as myAddress1, MyAwesomeButton } from "./App12.jsx";
import { myAddress as yourAddress1 } from "./App11"; // .jsx 확장자 생략 가능

// default export 는 아무 이름으로 import 해도됨
import App1092 from "./App12.jsx";

function App13() {
  return (
    <>
      <h3>13번 파일</h3>
      <MyAwesomeButton color={"skyblue"}>저장</MyAwesomeButton>
      <hr />
      {myAddress1}, {yourAddress1}
      <hr />
      <App1092 />
    </>
  );
}

export default App13;
