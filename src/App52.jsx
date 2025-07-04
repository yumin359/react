import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

function App52(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="react"
            element={
              <div>
                <div>NAVBAR</div>
                <div>
                  <Outlet />
                </div>
              </div>
            }
          >
            {/* index prop : 하위 경로 없음 */}
            <Route
              index
              element={
                <div>
                  <h3>HOME</h3>
                </div>
              }
            />

            {/* /react/learn */}
            <Route
              path="learn"
              element={
                <div>
                  <h3>LEARN</h3>
                </div>
              }
            />

            {/* /react/state */}
            <Route
              path="state"
              element={
                <div>
                  <h3>STATE</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App52;
