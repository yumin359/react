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

  function handleButton6Click() {
    // axios.request({
    //   method: "get",
    //   url: "/api/main28/sub6",
    // });
    // get 방식 요청
    // 아래처럼 더 많이 씀
    axios.get("/api/main28/sub6");
  }

  function handleButton7Click() {
    axios.get("/api/main28/sub7");
  }

  function handleButton8Click() {
    // get 방식으로 데이터 보낼 때 query string 사용
    axios.get("/api/main28/sub8?name=son&age=33");
  }

  function handleButton9Click() {
    axios.get("/api/main28/sub9?address=seoul&score=99.99");
  }

  function handleButton10Click() {
    // query string 직접 완성
    // 이렇게 해도 되지만,
    axios.get("/api/main28/sub10?address=서울 강남&score=99.99");
  }

  function handleButton11Click() {
    // config의 params에 객체를 넣는 방법
    // 한글이나 띄어쓰기 등 잘 안 넘어갈 때도 있어서 안전하게 넘기는 방법
    axios.get("/api/main28/sub11", {
      params: {
        address: "서울 신촌",
        score: "88.88",
      },
    });
  }

  function handleButton12Click() {
    axios.get("/api/main28/sub11", {
      params: {
        fruit: "apple",
        price: 1000,
      },
    });
  }

  return (
    <div>
      <button onClick={handleButton12Click}>요청 12 + query string</button>
      <hr />
      <button onClick={handleButton11Click}>요청 11 + query string</button>
      <hr />
      <button onClick={handleButton10Click}>요청 10 + query string</button>
      <hr />
      <button onClick={handleButton9Click}>요청 9 + query string</button>
      <hr />
      <button onClick={handleButton8Click}>요청 8 w/ query string</button>
      <hr />
      {/* 연습 : axios.get 메소드 활용해서 7버튼 클릭시 get /api/main28/sub7 요청 보내기*/}
      {/* server 에서 get /api/main28/sub7 요청 받기 */}
      <button onClick={handleButton7Click}>요청 7</button>
      <hr />
      <button onClick={handleButton6Click} type="button">
        요청 6
      </button>
      <hr />
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
