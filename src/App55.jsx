import React from "react";
import axios from "axios";

function App55(props) {
  function handleButton1Click() {
    axios.put("/api/main30/sub1");
  }

  function handleButton2Click() {
    axios.delete("/api/main30/sub2");
  }

  // 연습: 3번 클릭시 put /api/main30/sub3 요청 보내기
  //      4번 클릭시 delete /api/main30/sub4 요청 보내기
  // spring : put /api/main30/sub3 받는 request handler method
  function handleButton3Click() {
    axios.put("/api/main30/sub3");
  }

  function handleButton4Click() {
    axios.delete("/api/main30/sub4");
  }

  function handleButton5Click() {
    axios.put("/api/main30/sub5", {
      nickName: "trump",
      team: {
        name: "donald",
        age: 212,
      },
      age: 22,
      married: true,
      address: ["daa", "dda"],
    });
  }

  //          delete /api/main30/sub4 받는 request handler method
  return (
    <div>
      <button onClick={handleButton5Click}>put 5 w/ data</button>
      <hr />
      <button onClick={handleButton4Click}>delete 요청 2</button>
      <hr />
      <button onClick={handleButton3Click}>put 요청 2</button>
      <hr />
      <button onClick={handleButton2Click}>delete 요청 1</button>
      <hr />
      <button onClick={handleButton1Click}>put 요청 1</button>
    </div>
  );
}

export default App55;
