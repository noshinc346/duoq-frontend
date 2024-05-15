import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/user.js";
import './Register.css'
import pinkcontroller from "../../assets/pinkcontroller2.png"
import Marquee from "../../components/Marquee/Marquee.jsx";

const defaultProfilePicture = "https://i.imgur.com/agfEXRF.jpeg";
const defaultBanner = "https://www.colorhexa.com/ceffeb.png";

function Register({ setUser, setProfile }) {

  const TypeWriter = ({ content = "", speed = 100 }) => {
    const [displayedContent, setDisplayedContent] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const animKey = setInterval(() => {
        setIndex((prevIndex) => {
          if (prevIndex >= content.length - 1) {
            clearInterval(animKey);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, speed);
  
      // Clear interval on unmount
      return () => clearInterval(animKey);
    }, [content, speed]);
  
    useEffect(() => {
      // Update displayed content with characters up to the current index
      setDisplayedContent(content.substring(0, index + 1));
    }, [index, content]);
  
    return <pre className="type-writer">{displayedContent}</pre>;
  };
  
  
  const sample_content = `Welcome to DuoQ! Create an Account.`;

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
      setUser({
        ...userData,
        profilePicture: defaultProfilePicture,
        banner: defaultBanner,
      })

      navigate("/profile");
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
      <div className="something">
        <div className="type-box">
          <TypeWriter content={sample_content} speed={100} />
        </div>
        <div className="Steven-Is-Numer-1">
          <button className="register-button" type="submit" onClick={handleSubmit}>Register</button>
        </div>
      </div>
      {/* <img className="icon-controller" src="https://i.imgur.com/WTCZ8sC.png" alt="Icon Description"/> */}
      <div className="nintendo-container">
        <div className="switch-container" >
          {/* <img className="nintendo-switch" src={nintendo} /> */}
        </div>
        <div className="register-form-container">
          <form className="register-form" 
          // onSubmit={handleSubmit}
          >
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
      

    {/* <h4 className="register-title">Welcome to DuoQ!</h4>
          <h5 className="create-account-title">Create an Account</h5> */}
    <div className="faketerms">
      <p className="terms">By clicking on Create Account, you agree to our <span className="underline">Terms of Service</span>.</p>
      <p className="privacy">To learn more about how U.GG collects, uses, shares and protects your personal data please read our <span className="underline">Privacy Policy</span>.</p>
    </div>
    </div>
  )
}

export default Register