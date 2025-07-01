import { Button } from "react-bootstrap";

function App16() {
  return (
    <>
      <button className={"btn btn-primary"}>저장</button>
      <Button>등록</Button>
      <Button variant={"warning"}>경고</Button>
      <Button variant={"danger"}>위험</Button>
      <Button>버튼</Button>
      <hr />
      {/* 연습 : 다양한 variant, size props 값으로 버튼들 만들어보기 */}
      <Button variant="dark" size="sm">
        b1
      </Button>
      <Button variant="info" size="lg">
        b2
      </Button>
      <Button variant="outline-secondary" size="sm">
        b3
      </Button>
    </>
  );
}

export default App16;
