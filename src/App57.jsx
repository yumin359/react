import React from "react";
import axios from "axios";

function App57(props) {
  function handleButton1Click() {
    axios.get("/api/main32/sub1").then((res) => {
      // 바로 실행 X , 응답 받은 후에 실행됨! spring 에서 5초 멈춰서 해봄
      console.log("응답 받은 후 실행되는 코드");
      console.log(res.data);
    });
  }

  function handleButton2Click() {
    axios.get("/api/main32/sub2").then((res) => {
      console.log(res.data);
    });
  }

  function handleButton3Click() {
    axios.get("/api/main32/sub3").then((res) => {
      // js가 자동으로 역직렬화 해줘서 그냥 이렇게 쓰면 됨
      console.log(res.data); // json이 parsing된 js object
      console.log(res.data.name);
      console.log(res.data.age);
      // 이렇게 해도 되고~
      console.log();
      const data = res.data;
      console.log(data.name);
      console.log(data.age);
    });
  }

  function handleButton4Click() {
    axios.get("/api/main32/sub4").then((res) => {
      const data = res.data;
      console.log(data.city);
      console.log(data.address);
      console.log(data.country);
    });
  }

  return (
    <div>
      <button onClick={handleButton4Click}>직렬화된 json 데이터 받기</button>
      <hr />
      <button onClick={handleButton3Click}>직렬화된 json 데이터 받기</button>
      <hr />
      <button onClick={handleButton2Click}>데이터 받기 2</button>
      <hr />
      <button onClick={handleButton1Click}>데이터 받기 1</button>
    </div>
  );
}

export default App57;
