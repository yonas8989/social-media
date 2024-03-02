import "./register.css";

function Register() {
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
            <input placeholder="user name" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="password" className="loginInput" />
            <input placeholder="confirm password" className="loginInput" />
            <button className="loginButton">
                Sign up
            </button>
            <button className="loginRegisterButton">log into Account</button>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
