import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="loginPageWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            connect with friends and the world around you on lamasocial.
          </span>
        </div>

        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="email" className="loginInput" />
            <input placeholder="password" className="loginInput" />
            <button className="loginButton">
                Login
            </button>
            <span className="loginForgot">Forgot Password? </span>
            <button className="loginRegisterButton">create a new account</button>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
