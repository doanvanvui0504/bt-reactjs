import { useNavigate, useParams } from "react-router-dom";

import "./LoginLogout.css";

function Welcome() {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    alert(`Goodbye ${username}!`);
    navigate("/");
  };

  return (
    <div className="container d-flex align-items-center text-center">
      <div className="form-signin">
        <h1 className="h3 mb-3 fw-normal">Welcome {username}</h1>
        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleClick}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default Welcome;
