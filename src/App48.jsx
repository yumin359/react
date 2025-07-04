import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

// /react/learn
// /react/tutorial
// /react/docs
// /react/api

function ReactLayout() {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>NAVBAR</div>
        <div>
          <a href="/react/learn">LEARN</a>
        </div>
        <div>
          <a href="/react/tutorial">TUTORIAL</a>
        </div>
        <div>
          <a href="/react/docs">DOCS</a>
        </div>
        <div>
          <a href="/react/api">API</a>
        </div>
      </div>
      {/* 자식 경로의 컴포넌트가 출력되는 곳 */}
      <Outlet />
    </div>
  );
}

function App48(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="react" element={ReactLayout()}>
            <Route
              path="learn"
              element={
                <div>
                  <h3>learn 화면</h3>
                </div>
              }
            />
            <Route
              path="tutorial"
              element={
                <div>
                  <h3>tutorial 화면</h3>
                </div>
              }
            />
            <Route
              path="docs"
              element={
                <div>
                  <h3>docs 화면</h3>
                </div>
              }
            />
            <Route
              path="api"
              element={
                <div>
                  <h3>api 화면</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App48;
