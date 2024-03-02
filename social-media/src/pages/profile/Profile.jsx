import "./profile.css";
import Topbar from "../../component/topbar/Topbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Rightbar from "../../component/rightbar/Rightbar";
import Feed from "../../component/feed/Feed";
function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />

        {/* this we divide profile in to two part profile right and profile left   */}
        {/* this is profile right side  */}
        <div className="profileRight">
          {/* also we divide profile right side in to two right top and right bottom  */}
          {/* this is profileRightTop side which contain prifile cover image and profile user image */}
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="asset/post/3.jpeg" alt="" className="profileCoverImg" />
              <img
                src="asset/person/7.jpeg"
                alt=""
                className="profileUserImg"
              />
              <div className="profileInfo">
                <h4 className="profileInfoName">yonas fikadie </h4>
                <span className="profileInfodescription">hello my friends</span>
              </div>
            </div>
          </div>

          {/* this one is also profile right bottom which contain the the Feed and s the side bar . as home page  */}
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
