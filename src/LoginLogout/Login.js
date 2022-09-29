import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate(`/home/${userEmail}`);
    } else {
      alert("Hãy nhập đầy đủ thông tin. Please!");
    }
  };

  useEffect(() => {
    if (userEmail && userPassword && isRemember) {
      setIsValid(true);
    }
  }, [userEmail, userPassword, isRemember]);

  useEffect(() => {
    if (isValid) {
      setIsLoggedIn(true);
    }
  }, [isValid]);

  return (
    <div className="container d-flex align-items-center text-center">
      <div className="form-signin">
        <form>
          <img
            className="mb-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              className="form-control email"
              type="text"
              name="username"
              placeholder="name@example.com"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <label>UserName</label>
          </div>
          <div className="form-floating">
            <input
              className="form-control password"
              type="password"
              name="password"
              placeholder="Password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" onChange={(e) => setIsRemember(e.target.checked)} /> Remember
              me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleSubmit}>
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
