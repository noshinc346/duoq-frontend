import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../services/user.js";
import './Login.css'


function Login({setUser}) {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userData = await signIn(form);
      setUser(userData);

      navigate("/home");
    } catch (error) {
      console.error(error);
      setForm((prevForm) => ({
        isError: true,
        errorMsg: "Invalid Credentials",
        username: prevForm.username,
        password: "",
      }));
    }
  };

  const renderError = () => {
    if (form.isError) {
      return <p className="login-error"> {form.errorMsg}</p>;
    } 
  };


  const { username, password } = form;

  return (
    <div className="loginpage-body">
      <div className="login-container">
        <form className="login-form">
          <h3 className="login-title">Welcome back to DuoQ!</h3>
          {renderError()}
          <div className="username-box input-box">
         <p className="input-title">Username</p>
          <input
            type='text'
            name='username'
            value={username}
            placeholder='Username'
            onChange={handleChange}
            required
            autoComplete="off"
          />
          </div>
          <div className="username-box input-box">
          <p className="input-title">Password</p>
          <input
            type='password'
            name='password'
            value={password}
            placeholder='Password'
            onChange={handleChange}
            required
            autoComplete="off"
          />
          </div>
          <div className="Steven-Is-Numer-2">
          <button className="login-buttonpage" type="submit" onClick={handleSubmit}>Login</button>
      </div>
      <p className="loginpage-register-link">
        Dont have an account? <Link className="register-link" to={"/register"}>Register </Link>
      </p>
        </form>
      </div>
    </div>
  )
}

export default Login