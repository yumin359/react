import { Alert, Button, Table } from "react-bootstrap";

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
      <hr />
      <Alert variant="danger">위험 경고</Alert>
      <Alert variant="info">정보 알림</Alert>
      {/* 연습 : Alert 만들어보기 */}
      <Alert variant="warning">노란색</Alert>
      {/* 연습 : Table component 사용해서 아래와 같은 table 만들어보기 */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Lorem.</th>
            <th>Eum.</th>
            <th>Eum.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Beatae?</td>
            <td>Eaque.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Et?</td>
            <td>Tempora.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Sit.</td>
            <td>Aspernatur?</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Eos.</td>
            <td>Eveniet!</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Accusamus.</td>
            <td>Molestias?</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Quos?</td>
            <td>Dolorem?</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Iure.</td>
            <td>Laborum?</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Earum.</td>
            <td>Nisi.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Et!</td>
            <td>Sequi.</td>
          </tr>
        </tbody>
      </Table>

      {/* 아래는 bootstrap으로 한 거 */}
      {/*table.table.table-striped.table-bordered.table-hover>thead>tr>th*3>lorem1^^^tbody>tr*3>td*3>lorem1*/}
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Lorem.</th>
            <th>Odio.</th>
            <th>Et!</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Quod.</td>
            <td>Nisi?</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Autem?</td>
            <td>Hic.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Consectetur.</td>
            <td>Quam!</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Reprehenderit?</td>
            <td>Perferendis?</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Libero.</td>
            <td>Pariatur!</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Deserunt!</td>
            <td>Quam?</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Ducimus?</td>
            <td>Deleniti?</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Eum!</td>
            <td>Nemo.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Eos?</td>
            <td>Modi?</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App16;
