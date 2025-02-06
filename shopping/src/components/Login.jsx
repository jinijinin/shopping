import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value; // 입력된 이메일 값
    const password = e.target.password.value; // 입력된 비밀번호 값
    alert("로그인 시도 중...");
  };
  return (
    <div>
      <body>
        <header className="header">
          <div className="HeadContainer">
            <nav>
              <Link to="/home">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </nav>
          </div>
        </header>
        <h2>로그인</h2>
        <div id="LoginContainer">
          <form id="Login" onSubmit={HandleSubmit}>
            <div className="LoginGroup">
              <label htmlFor="LoginEmail">Email: </label>
              <input
                type="email"
                id="LoginEmail"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
            </div>
            <div className="LoginGroup">
              <label htmlFor="LoginPassword">Password: </label>
              <input
                type="password"
                id="LoginPassword"
                name="password"
                required
              />
            </div>
            <div className="LoginGroup">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Login;
