import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import Home from '../../pages/home/Home'
import { useState } from "react";
import Profile from "../../pages/profile/Profile";
function Topbar() {
  const [home , sethome] = useState(<Profile/>)

  function handleClick(){
    sethome(<Home/>)

  }



  return (
    <div className="topbarContainer">
      {/* top bar left  */}
      <div className="topbarLeft">
        <span className=" logo "> lamasocial</span>
      </div>

      {/* top bar center  */}
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="SearchIcon" />
          <input
            placeholder="search for friend, post or vedios"
            className="searchInput"
          />
        </div>
      </div>

      {/* top ba right  */}
      <div className="topbarRight">

        {/* topbar link */}
        <div className="topbarLink">
          <span className="topbarLink" onClick={handleClick}>Home page </span>
          <span className="topbarLink">Timeline</span>
        </div>


      {/* topbar icons */}
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        {/* image */}
        <img
          src="./asset/person/1.jpeg"
          alt="profile picture "
          className="topbarImg"
        />
      </div>
    </div>
  );
}

export default Topbar;
