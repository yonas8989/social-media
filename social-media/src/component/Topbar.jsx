import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
function Topbar() {
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
          <span className="topbarLink">Homepage </span>
          <span className="topbarLink">Timeline</span>
        </div>


      {/* topbar icons */}
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
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
