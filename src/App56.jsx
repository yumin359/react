import React, { useState } from "react";
import axios from "axios";

function App56(props) {
  const [myFiles, setMyFiles] = useState(null);

  function handleButton1Click() {
    // file 전송시 postForm/putForm
    axios.postForm("api/main31/sub1", {
      name: "흥민",
      age: 77,
      myFiles: myFiles,
    });
  }

  function handleButton2Click() {
    axios.postForm("api/main31/sub2", {
      address: "신촌",
      score: 55.66,
      yourFiles: myFiles,
    });
  }

  function handleButton3Click() {
    axios.postForm("api/main31/sub3", {
      city: "seoul",
      uploadFiles: myFiles,
    });
  }

  return (
    <div>
      <div>
        <input
          type="file"
          multiple
          onChange={(e) => setMyFiles(e.target.files)}
        />
        <button onClick={handleButton3Click}>파일 전송 3 여러개 (연습)</button>
      </div>
      <hr />
      <div>
        <input
          type="file"
          multiple={true}
          onChange={(e) => setMyFiles(e.target.files)}
        />
        <button onClick={handleButton2Click}>파일 전송 2 여러개</button>
      </div>
      <hr />
      <div>
        {/* file은 e.target.files */}
        <input type="file" onChange={(e) => setMyFiles(e.target.files)} />
        <button onClick={handleButton1Click}>파일 전송 1</button>
      </div>
    </div>
  );
}

export default App56;
