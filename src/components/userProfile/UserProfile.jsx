import React from "react";
import "./userProfile.css";
import CurrentUser from "../../FakeApis/CurrentUserData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeed, faLink, faMessage } from "@fortawesome/free-solid-svg-icons";

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("facebook-user"));
  return (
    <div className="userProfile">
      <div className="cover-photos">
        <img src={CurrentUser.map((user) => user.CoverPhoto)} alt="" />
      </div>
      <div className="profile-info">
        <img src={CurrentUser.map((user) => user.ProfieImage)} alt="" />
        <div className="user-name">
          <h3>{user.name}</h3>
          <h5>{user.email}</h5>
        </div>
        {/* <div className="profile-button">
          <Link to={"/chatbox/id"}>
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faMessage} />
            </button>
          </Link>
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faFeed} /> Follow Me
          </button>
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faLink} />
          </button>
        </div> */}
        {/* <p className="bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ad.
          Ad assumenda asperiores officia perspiciatis quo nulla? Corrupti,
          assumenda ut.
        </p> */}
      </div>
    </div>
  );
};

export default UserProfile;
