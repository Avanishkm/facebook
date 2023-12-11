import React from "react";
import "./leftbar.css";
import { Link } from "react-router-dom";
import CurrentUser from "../../FakeApis/CurrentUserData";
import Hospital from "../../assets/icon/H.png";
import Friend from "../../assets/icon/1.png";
import Groups from "../../assets/icon/2.png";
import Market from "../../assets/icon/3.png";
import Watch from "../../assets/icon/4.png";
import gallery from "../../assets/icon/5.png";
import videos from "../../assets/icon/6.png";
import message from "../../assets/icon/7.png";
import Page from "../../assets/icon/pageFlag.png"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../../Features/auth/authenticationSlice";
import DarkMood from "../darkmod/DarkMood";
import { Users, Usersonline } from "../../FakeApis/data";
import Online from "../online/Online";
import FriendReqe from "../friendReqe/FriendReqs";

const LeftBar = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("facebook-user"));
  // const logOut = () => {
  //   dispatch(logout());
  // };

  return (
    <div className="leftBar">
      <div className="left-container">
        <div className="menu">
          <Link to={"/profile/id"}>
            <div className="user">
              <img src={CurrentUser.map((user) => user.ProfieImage)} alt="" />
              <h4>{user.name}</h4>
            </div>
          </Link>
          <Link to={"/comming"}>
            <div className="item">
              <img src={Hospital} alt="" />
              <h4>COVID-19 Information Centre</h4>
            </div>
          </Link>
          <Link to={"/comming"}>
            <div className="item">
              <img src={Friend} alt="" />
              <h4>Friends</h4>
            </div>
          </Link>
          <Link to={"/comming"}>
            <div className="item">
              <img src={Groups} alt="" />
              <h4>Groups</h4>
            </div>
          </Link>
          <Link to={"/comming"}>
            <div className="item">
              <img src={Market} alt="" />
              <h4>Market</h4>
            </div>
          </Link>
          <Link to={"/comming"}>
            <div className="item">
              <img src={Watch} alt="" />
              <h4>Watch</h4>
            </div>
          </Link>
          <Link to={"/createpage"}>
            <div className="item">
              <img src={Page} alt="" />
              <h4>Page</h4>
            </div>
          </Link>
          <Link>
            <div className="item">
              <div className="mode"><DarkMood /></div>
              <h4>Theme</h4>
            </div>
          </Link>
          <div style={{fontSize: "23px"}}></div>
            {/* <div className="item">
                <div className="logout" onClick={logOut}>
                  <FontAwesomeIcon icon={faRightFromBracket} style={{fontSize: "25px", color:"blue"}} />
                </div>
              <h4>Logout</h4>
            </div> */}
        </div>
        <hr />
        <div className="menu">
          <h4 className="others">Your Shortcuts</h4>
          <ul className='sidebarFriendList'>
                {Users.map((u) =>(
                    <FriendReqe key={u.id} user={u}/>
                ))}   
            </ul> 
          {/* <Link to={"/comming"}>
            <div className="item">
              <img src={gallery} alt="" />
              <h4>Gallery</h4>
            </div>
          </Link> */}
          {/* <Link to={"/comming"}>
            <div className="item">
              <img src={videos} alt="" />
              <h4>Videos</h4>
            </div>
          </Link> */}
          {/* <Link to={"/comming"}>
            <div className="item">
              <img src={message} alt="" />
              <h4>Message</h4>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
