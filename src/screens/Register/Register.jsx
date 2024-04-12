import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/user.js";
import './Register.css'
import pinkcontroller from "../../assets/pinkcontroller2.png"
import Marquee from "../../components/Marquee/Marquee.jsx";
import nintendo from "../../assets/nintendo (1).png";

function Register({ setUser }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.password !== form.passwordConfirmation) {
      setForm({
        ...form,
        isError: true,
        errorMsg: "Password and password confirmation do not match.",
      });
      return;
    }

    try {
      const userData = await signUp(form);
      setUser(userData);

      navigate("/home");
    } catch (error) {
      console.error(error);
      setForm((prevForm) => ({
        isError: true,
        errorMsg: "Invalid Credentials",
        username: prevForm.username,
        email: "",
        password: "",
      }));
    }
  };

  const renderError = () => {
    if (form.isError) {
      return <p className="register-error"> {form.errorMsg}</p>;
    } 
  };

  return (
    <div className="registerpage-body">
      <Marquee />
      {/* <img className="icon-controller" src="https://i.imgur.com/WTCZ8sC.png" alt="Icon Description"/> */}
      <div className="nintendo-container">
        <div className="switch-container" >
          {/* <img className="nintendo-switch" src={nintendo} /> */}
        </div>
        {/* <button className="register-button" type="submit">Register</button> */}
        <div className="register-form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            {renderError()}
            <div className="username-box input-box">
              <p className="input-title">Username</p>
              <input
                type='text'
                name='username'
                value={form.username}
                placeholder='Username'
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div className="email-box input-box">
              <p className="input-title">Email</p>
              <input
                type='email'
                name='email'
                value={form.email}
                placeholder='Enter Email'
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div className="password-box input-box">
              <p className="input-title">Password</p>
              <input
                type='password'
                name='password'
                value={form.password}
                placeholder='Password'
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div className="confirm-box input-box">
              <p className="input-title">Confirm Password</p>
              <input
                type='password'
                name='passwordConfirmation'
                value={form.passwordConfirmation}
                placeholder='Confirm Password'
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
          </form>
      </div>
    </div>
      

    <h4 className="register-title">Welcome to DuoQ!</h4>
          <h5 className="create-account-title">Create an Account</h5>
      <p className="terms">By clicking on Create Account, you agree to our <span class="underline">Terms of Service</span>.</p>
      <p className="privacy">To learn more about how U.GG collects, uses, shares and protects your personal data please read our <span class="underline">Privacy Policy</span>.</p>

    </div>
  )
}

export default Register