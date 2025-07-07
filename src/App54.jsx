import React from "react";
import axios from "axios";

function App54(props) {
  function handleButton1Click() {
    axios.request({
      method: "post",
      url: "/api/main29/sub1",
    });
  }

  function handleButton2Click() {
    axios.post("/api/main29/sub2");
  }

  function handleButton3Click() {
    axios.post("/api/main29/sub3");
  }

  return (
    <div>
      <button onClick={handleButton3Click}>post 3</button>
      <hr />
      <button onClick={handleButton2Click}>post 2</button>
      <hr />
      <button onClick={handleButton1Click}>post 1</button>
    </div>
  );
}

export default App54;
