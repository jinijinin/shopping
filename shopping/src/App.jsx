import "./App.css";
import Signup from "./components/Signup"; // 경로 수정
import Login from "./components/Login"; // Login 컴포넌트가 있다면 추가
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 경로 '/'에 대한 Route 추가 */}
        <Route path="/" element={<Signup />} />{" "}
        {/* 기본 페이지는 Signup으로 설정 */}
        {/* 다른 페이지들 */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        {/* 404 페이지 처리 (선택사항) */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
