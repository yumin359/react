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

  function handleButton5Click() {
    axios.get("/api/main32/sub5").then((res) => {
      const data = res.data;
      console.log(data.id, data.city, data.phone.phone1, data.phone.phone2);
    });
  }

  function handleButton6Click() {
    axios.get("/api/main32/sub6").then((res) => {
      const data = res.data;
      console.log(
        data.id,
        data.name,
        data.address[0],
        data.address[1],
        data.address[2],
      );
    });
  }

  function handleButton7Click() {
    axios.get("/api/main32/sub7").then((res) => {
      const data = res.data;
      console.log(
        data.id,
        data.name,
        data.fruits[0],
        data.fruits[1],
        data.address.city,
        data.address.country,
      );
    });
  }

  function handleButton8Click() {
    axios.get("/api/main32/sub8").then((res) => {
      const data = res.data;
      console.log(
        data.id,
        data.title,
        data.category.author,
        data.category.genre,
        data.orders[0],
        data.orders[1],
        data.price,
      );
    });
  }

  return (
    <div>
      <button
        onClick={() => {
          axios.get("/api/main32/sub12");
        }}
      >
        200 code
      </button>
      <button
        onClick={() => {
          axios.get("/api/main32/sub13");
        }}
      >
        400 code
      </button>
      <button
        onClick={() => {
          axios.get("/api/main32/sub14");
        }}
      >
        404 code
      </button>
      <hr />
      <button
        onClick={() => {
          axios.get("/api/main32/sub9");
        }}
      >
        200 code
      </button>
      <button
        onClick={() => {
          axios.get("/api/main32/sub10");
        }}
      >
        404 code
      </button>
      <button
        onClick={() => {
          axios.get("/api/main32/sub11");
        }}
      >
        500 code
      </button>
      <hr />

      <button onClick={handleButton8Click}>버튼 8</button>
      <hr />
      <button onClick={handleButton7Click}>버튼 7</button>
      <hr />
      <button onClick={handleButton6Click}>버튼 6</button>
      <hr />
      <button onClick={handleButton5Click}>버튼 5</button>
      <hr />
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
