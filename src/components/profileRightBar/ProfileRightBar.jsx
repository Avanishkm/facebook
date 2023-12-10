import React from 'react'
import './profilerightbar.css'
import { Link } from 'react-router-dom'

const ProfileRightBar = () => {
  return (
    <div className='profileRightBar'>
        <div className="profileRightBarHeading">
            <span className='profileRightTitle'>User Information</span>
            <Link to="/profile/userId/edit" style={{textDecoration: "none"}}>
                <span className='editButton'>Edit Profile</span>
            </Link>
        </div>
        <div className="profileRightBarInfo">
            <div className="profileRightBarInfoItem">
                <span className="profileRightBarInfoKey">Email: </span>
                <span className="profileRightBarInfoValue">avanish@gmail.com</span>
            </div>
            <div className="profileRightBarInfoItem">
                <span className="profileRightBarInfoKey">Phone Number: </span>
                <span className="profileRightBarInfoKey">+918052667273</span>
            </div>
            <div className="profileRightBarInfoItem">
                <span className="profileRightBarInfoKey">Address: </span>
                <span className="profileRightBarInfoKey">New Delhi</span>
            </div>
            <div className="profileRightBarInfoItem">
                <span className="profileRightBarInfoKey">Country: </span>
                <span className="profileRightBarInfoKey">India</span>
            </div>
            <div className="profileRightBarInfoItem">
                <span className="profileRightBarInfoKey">Relationship: </span>
                <span className="profileRightBarInfoKey">Single</span>
            </div>
        </div>
        <h4 className="profileRightBarTitle">Close Friends</h4>
        <div className="profileRightBarFollowings">
            <div className="profileRightBarFollowing">
                <img src="/assests/profileImg3.jpg" alt="" className='profileRightBarFollowingImg' />
                <span className='profileRightBarFollowingName'>Abhishek</span>
            </div>
            <div className="profileRightBarFollowing">
                <img src="/assests/profileImg3.jpg" alt="" className='profileRightBarFollowingImg' />
                <span className='profileRightBarFollowingName'>Alok</span>
            </div>
            <div className="profileRightBarFollowing">
                <img src="/assests/profileImg3.jpg" alt="" className='profileRightBarFollowingImg' />
                <span className='profileRightBarFollowingName'>Amit kumar</span>
            </div>
            <div className="profileRightBarFollowing">
                <img src="/assests/profileImg3.jpg" alt="" className='profileRightBarFollowingImg' />
                <span className='profileRightBarFollowingName'>Rakesh Yadev</span>
            </div>
            <div className="profileRightBarFollowing">
                <img src="/assests/profileImg3.jpg" alt="" className='profileRightBarFollowingImg' />
                <span className='profileRightBarFollowingName'>Suraj</span>
            </div>
            <div className="profileRightBarFollowing">
                <img src="/assests/profileImg3.jpg" alt="" className='profileRightBarFollowingImg' />
                <span className='profileRightBarFollowingName'>Akash</span>
            </div>
        </div>
    </div>
  )
}

export default ProfileRightBar