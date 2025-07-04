import React from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router";
import "./assets/mystyle.css";

// 연습 : 아래 경로에 같은 sidebar가 존재하도록 코드 작성
// 연습 : 경로 이동 시 모든 컴포넌트가 다시 마운트 되지 않도록 코드 수정 -> Link
// 연습 : 현재 경로와 Link의 to prop이 같으면 그려지는 a 요소에 active class 추가하기 -> NavLink

// /react/install
// /react/game
// /react/state

function sideNav() {
  return (
    <div className="d-flex">
      <div
        className="d-flex flex-column gap-2"
        style={{ width: "100px", border: "1px solid blue" }}
      >
        <NavLink to="/react/install" className="d-block nav-link">
          install
        </NavLink>
        <NavLink to="/react/game" className="d-block nav-link">
          game
        </NavLink>
        <NavLink to="/react/state" className="d-block nav-link">
          state
        </NavLink>
      </div>
      <div
        className="d-flex flex-column flex-grow-1"
        style={{ border: "1px solid black" }}
      >
        <Outlet />
      </div>
    </div>
  );
}

function App49(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="react" element={sideNav()}>
            <Route path="install" element={<h3>install</h3>} />
            <Route path="game" element={<h3>game</h3>} />
            <Route path="state" element={<h3>state</h3>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App49;

// 위의 코드보고 지피티가 꾸며준 코드
/*

import React from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

*/
/*
// ✅ 사이드 네비게이션 컴포넌트
function SideNav() {
  const location = useLocation();

  // 현재 URL에 따라 active 클래스 부여
  const isActive = (path) => location.pathname === path;

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      { /* 왼쪽 메뉴 }
      <div
        className="d-flex flex-column gap-3 p-3 bg-light border-end"
        style={{ width: "160px" }}
      >
        <h5 className="text-primary">React</h5>
        <Link
          to="/react/install"
          className={`nav-link ${isActive("/react/install") ? "fw-bold text-primary" : "text-dark"}`}
        >
          Install
        </Link>
        <Link
          to="/react/game"
          className={`nav-link ${isActive("/react/game") ? "fw-bold text-primary" : "text-dark"}`}
        >
          Game
        </Link>
        <Link
          to="/react/state"
          className={`nav-link ${isActive("/react/state") ? "fw-bold text-primary" : "text-dark"}`}
        >
          State
        </Link>
      </div>

      {/* 오른쪽 화면 내용 }
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}

// ✅ 전체 앱
function App49() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="react" element={<SideNav />}>
          <Route path="install" element={<h3>📦 React 설치 페이지</h3>} />
          <Route path="game" element={<h3>🎮 게임 예제 페이지</h3>} />
          <Route path="state" element={<h3>🔁 상태 관리 페이지</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App49;

 */
