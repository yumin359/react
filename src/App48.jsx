import React, { useEffect } from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router";

// /react/learn
// /react/tutorial
// /react/docs
// /react/api

function ReactLayout() {
  useEffect(() => {
    // mount 될 때 실행되는 코드
    console.log("ReactLayout 컴포넌트 마운트 됨");
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-around">
        <div>NAVBAR</div>
        {/* 전체 페이지를 다시 마운트 하지 않으려면 a 태그 대신에
         react router의 Link 컴포넌트 사용 */}
        {/* Link는 화면만 바뀌는데 a 태그는 화면이 깜빡깜빡 거림 */}
        <div>
          <Link to="/react/learn">LEARN</Link>
        </div>
        <div>
          <Link to="/react/tutorial">TUTORIAL</Link>
        </div>
        <div>
          <Link to="/react/docs">DOCS</Link>
        </div>
        <div>
          <Link to="/react/api">API</Link>
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
