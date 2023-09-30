import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  const attemptLogin = async () => {
    try {
      const uName = document.getElementById('uName') as HTMLInputElement | null;
      const password = document.getElementById('password') as HTMLInputElement | null;
      const message = await login(uName.value, password.value);
      // console.log(uName, password);
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <form>
          <label>Username:</label>
          <input type="text" id="uName" name="uName"></input><br></br>

          <label>Password:</label>
          <input type="password" id="password" name="password"></input><br></br>

          <button onClick={() => attemptLogin()}>
            Login
          </button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </Page>
  );
}

export default Login;
