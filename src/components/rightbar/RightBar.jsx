import React from "react";
import "./rightBar.css";
import Message from "../message/Message";
import  {Usersonline}  from "../../FakeApis/data";
import Online from "../online/Online";
// import FriendReqe from "../friendReqe/FriendReqs";



const RightBar = () => {
  return (
    <div className='rightbarhome'>
        <div className="birthdayContainer">
            <img src="/assests/young-bearded.avif" alt="" className='birthdayImg' />
            <span className='birthdayText'>
                <b>Akash raj</b> and <b>other friends</b> have birthday today
            </span>
        </div>
        <img src="/assests/giftImg.webp" alt="" className='rightbarAdvert' />

        <span className='rightbarTitle'>Online Friends</span>
        <ul className='rightbarFriendList'>
            {Usersonline.map((u) => (
                <Online key={u.id} onlineuser={u}/> 
            ))}
           
        </ul>
    </div>
    // <div className="rightBar">
    //   <div className="rightbar-container">
    //     <Message />
    //     {/* <FriendReqe /> */}
    //   </div>
    // </div>
  );
};

export default RightBar;
