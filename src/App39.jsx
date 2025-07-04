import React from "react";
import { Table } from "react-bootstrap";

function MyComp1() {
  const list = ["java", "css", "react", "boot"];
  // key prop : 리스트를 컴포넌트로 그릴 때 각 컴포넌트를 유일하게 식별하는 값
  // -> key로 같은 컴포넌트 인지 판단해서 효율적으로 컴포넌트를 출력
  // -> 보통 key prop의 값은 db의 pk를 사용함
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MyComp2() {
  const board = [
    { id: 3, title: "게시물 3번 제목", author: "son" },
    { id: 5, title: "게시물 5번 제목", author: "park" },
    { id: 9, title: "게시물 9번 제목", author: "son" },
    { id: 14, title: "또 다른 제목", author: "cha" },
    { id: 21, title: "게시물 제목 21", author: "park" },
  ];
  // 연습 : key prop 사용하기
  return (
    <div>
      <Table striped={true}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {board.map((item) => (
            <tr key={item.id}>
              {/*<tr key={item.title}> 이거는 중복 없어서 되긴 하는데 보통 id로 함*/}
              {/*<tr key={item.author}> 이거는 중복값 있어서 안 됨*/}
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function App39(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App39;
