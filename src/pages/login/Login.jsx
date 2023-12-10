import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { setUser, setToken } from "../../Features/auth/authenticationSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logIn = async () => {
    let response = await fetch(
      "https://academics.newtonschool.co/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectId: "f104bi07c490",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          appType: "facebook",
        }),
      }
    );

    response = await response.json();
    console.log("status", response.token);
    // projectID: "f104bi07c490",
    if (response && response.token) {
      toast.success(response.status, {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/");
      dispatch(setUser(response.data));
      dispatch(setToken(response.token));
    } else {
      toast.error(response.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (

    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">FaceBook</h3>
                <span className="loginDesc">
                    Connect with friends and the word around you on Facebook.
                </span>
            </div>

            <div className="login">
      {/* <img
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        className="login_logo"
        alt="logo"
      /> */}
      <div className="login_container">
        <h3>Log In To Facebook</h3>
        <form>
          <center>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </center>
          <center>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </center>
          <center>
            <button
              type="submit"
              className="login_login"
              onClick={(e) => {
                e.preventDefault();
                logIn();
              }}
            >
              Log In
            </button>
          </center>
          <center>
            <div className="sideinfo">
              <h5>Forgotten Password?</h5>
              <h5 className="dot">.</h5>
              <Link to={"/signup"} style={{ textDecoration: "none" }}>
                <h5 className="rtd">Sign Up For Facebook</h5>
              </Link>
            </div>
          </center>
        </form>
      </div>
      <ToastContainer />
    </div>
    </div>
    </div>

    // <div className="login">
    //   <ToastContainer />
    //   <div className="card">
    //     <div className="left">
    //       <h2>
    //         facebook <br />-
    //       </h2>
    //       <p>
    //         facebook helps you connect and share with the people in your life.
    //       </p>
    //       <span>Don't have An Account?</span>
    //       <Link to={"/signup"}>
    //         <button className="btn btn-primary">Register</button>
    //       </Link>
    //     </div>
    //     <form className="right">
    //       <input
    //         type="email"
    //         required
    //         placeholder="Email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <input
    //         type="password"
    //         required
    //         placeholder="passsword"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <button
    //         type="submit"
    //         className="btn"
    //         onClick={(e) => {
    //           e.preventDefault();
    //           logIn();
    //         }}
    //       >
    //         Login
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Login;
