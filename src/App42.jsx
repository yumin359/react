import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

// 연습 : react router 사용해서 아래 경로에 따른 컴포넌트 다르게 보이기
// localhost:5173/learn : <h3>react 배우기</h3>
// localhost:5173/tutorial : <h3>react 공부하기</h3>
// localhost:5173/install : <h3>react 설치하기</h3>
// localhost:5173/reference : <h3>react 참고문서</h3>

function Learn() {
  return (
    <div>
      <h3>react 배우기</h3>
    </div>
  );
}

function Tutorial() {
  return (
    <div>
      <h3>react 공부하기</h3>
    </div>
  );
}

function Install() {
  return (
    <div>
      <h3>react 설치하기</h3>
    </div>
  );
}

function Reference() {
  return (
    <div>
      <h3>react 참고문서</h3>
    </div>
  );
}

function App42(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="learn" element={<Learn />}></Route>
          <Route path="tutorial" element={<Tutorial />}></Route>
          <Route path="install" element={<Install />}></Route>
          <Route path="reference" element={<Reference />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App42;
