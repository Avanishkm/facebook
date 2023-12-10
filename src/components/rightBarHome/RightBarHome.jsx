import React from 'react'
import "./rightbarhome.css";
import RightBar from '../rightbar/RightBar'
import ProfileRightBar from '../profileRightBar/ProfileRightBar'

const RightBarHome = ({ profile }) => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">

        {profile ? <ProfileRightBar/> : <RightBar/>}
      </div>
    </div>
  )
}

export default RightBarHome