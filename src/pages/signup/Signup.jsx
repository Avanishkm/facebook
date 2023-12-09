import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { setToken, setUser } from "../../Features/auth/authenticationSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUp = async () => {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectID: "f104bi07c490",
        },
        body: JSON.stringify({
          name: userName,
          email: email,
          password: password,
          appType: "facebook",
        }),
      }
    );
    const res = await response.json();
    console.log("register", response);
    if (res.status === "success") {
      // console.log("sign up data", response.data);
      dispatch(setUser(res.data));
      dispatch(setToken(res.token));

      toast.success(res.status, {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/login");
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <div className="register">
        <div className="registerWrapper">
        <div className="registerLeft">
                <h3 className="registerLogo">FaceBook</h3>
                <span className="registerDesc">
                    Connect with friends and the word around you on Facebook.
                </span>
            </div>

            <div className="register">
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        className="register_logo"
        alt="logo"
      />
      <div className="register_container">
        <h1>Sign Up</h1>
        <p>It's quick and easy</p>
        <div className="hr3"></div>
        <form>
          <center>
            <input
              type="name"
              className="register_name"
              placeholder="User Name"
              value={userName}
              // onChange={handleusername}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </center>

          <center>
            <input
              type="email"
              className="register_name"
              placeholder="Email"
              value={email}
              // onChange={handleEmail}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </center>
          <center>
            <input
              type="password"
              className="register_name"
              placeholder="Password"
              value={password}
              // onChange={handlePassword}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </center>

          <center>
            <button
              type="submit"
              className="register_register"
              onClick={(e) => {
                e.preventDefault();
                SignUp()
              }}
              // onClick={register}
            >
              Sign Up
            </button>
          </center>
          <center>
            <Link to={"/login"}>
              <p className="register_login">Already have an account?</p>
            </Link>
          </center>
        </form>
      </div>
      <ToastContainer />
    </div>
        </div>
    </div>
    // <div className="signup">
    //   <ToastContainer />
    //   <div className="card">
    //     <div className="left">
    //       <h2>
    //         -<br />
    //         facebook Signup
    //         <br />-
    //       </h2>
    //       <p>
    //         facebook helps you connect and share with the people in your life.
    //       </p>
    //       <span>Have An Account?</span>
    //       <Link to={"/login"}>
    //         <button className="btn btn-primary">Login</button>
    //       </Link>
    //     </div>
    //     <form className="right">
    //       <input
    //         type="text"
    //         required
    //         placeholder="User Name"
    //         value={userName}
    //         onChange={(e) => setUserName(e.target.value)}
    //       />
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
    //           SignUp();
    //         }}
    //       >
    //         Register
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Signup;
