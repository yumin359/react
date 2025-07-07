import React from "react";
import axios from "axios";

function App53(props) {
  function handleButton1Click() {
    axios.request({
      method: "get",
      url: "http://localhost:8080/main1/sub1",
    });
  }

  function handleButton2Click() {
    axios.request({
      method: "get",
      url: "/api/main28/sub1",
    });
  }

  function handleButton3Click() {
    axios.request({
      method: "post",
      url: "/api/main28/sub2",
    });
  }

  function handleButton4Click() {
    axios.request({
      method: "get",
      url: "/api/main28/sub3",
    });
  }

  function handleButton5Click() {
    axios.request({
      method: "post",
      url: "/api/main28/sub4",
    });
  }

  return (
    <div>
      {/* 연습 : 버튼 5 클릭하면 post /api/main28/sub4 으로 요청*/}
      {/* 서버에서 post /api/main28/sub4 의 요청 받는 method 만들기*/}
      <button onClick={handleButton5Click} type="button">
        요청 5
      </button>
      <hr />
      {/* 연습 : 버튼 4 클릭하면 get /api/main28/sub3 으로 요청 보내기*/}
      {/* 서버에서  get /api/main28/sub3 의 요청 받는 method 만들기*/}
      <button onClick={handleButton4Click}>요청 4</button>
      <hr />
      <button onClick={handleButton3Click}>요청 보내기 3</button>
      <hr />
      <button onClick={handleButton2Click}>요청 보내기 2</button>
      <hr />
      <button onClick={handleButton1Click}>요청 보내기 1</button>
    </div>
  );
}

export default App53;
