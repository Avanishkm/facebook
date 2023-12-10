import React from "react";
import "./friendReqe.css";
// import Firends from "../../FackApis/FirendReqData";
import { Link } from "react-router-dom";

const FriendReqe = ({user}) => {
  return (
    <div>
        <li className='sidebarFriend'>
           <img src={user.profilePicture} alt="" className='sidebarFriendImg' /> 
           <span className='sidebarFriendName'>{user.username}</span>
        </li>
    </div>
    // <div className="Friend-Requests">
    //   <h4>Friend Requests</h4>
    //   {Firends.map((friend) => (
    //     <div className="request">
    //       <Link to={"/profile/id"}>
    //         <div className="info" key={friend.id}>
    //           <div className="user">
    //             <img src={friend.img} alt="" />
    //             <h5>{friend.name}</h5>
    //           </div>
    //           <div className="info-name">
    //             <p>{friend.info}</p>
    //           </div>
    //         </div>
    //       </Link>
    //       <div className="action">
    //         <button className="btn btn-primary">Accept</button>
    //         <button className="btn btn-red">Delete</button>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default FriendReqe;
