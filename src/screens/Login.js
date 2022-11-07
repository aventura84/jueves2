import { useContext } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import services from "../services";
import { useSetUser, useUser } from "../UserContext";
import "./Login.css";

function LoginScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
//setError("");

    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;
    const { email,password } = await services.user.login({
      email: emailInput,
      password: passwordInput,
    });
    setUser({
      id: id,
      email: email,
      token: token,
    });
    login(token);
    navigate("/");
  }catch(error){
SpeechSynthesisErrorEvent(error.message);
  }
  };

  return (
    <div className="login__screen">
      <label>Email</label>
      <input ref={emailRef} placeholder="Enter your email" />
      <label>Password</label>
      <input ref={passwordRef} placeholder="Enter your password" />
      <button onClick={loginHandler}>Log in my account</button>
    </div>
  );


export default LoginScreen;
