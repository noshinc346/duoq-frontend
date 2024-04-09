import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../services/user.js";

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
    const toggleForm = form.isError ? "danger" : "";

    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Log In</button>;
    }
  };


  const { username, password } = form;

  return (
    <div className="loginpage-body">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h3 className="login-title">Welcome back to DuoQ!</h3>
          <input
            type='text'
            name='username'
            value={username}
            placeholder='Enter Username'
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <input
            type='password'
            name='password'
            value={password}
            placeholder='Enter Password'
            onChange={handleChange}
            required
            autoComplete="off"
          />
          {renderError()}
        </form>
      </div>
      <p className="loginpage-register-link">
        Dont have an account? <Link to={"/register"}>Register </Link>
      </p>
    </div>
  )
}

export default Login