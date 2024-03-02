import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";
import HomeFriend from "../homeFriend/HomeFriend";

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="asset/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>markos fikadie </b> and others <b>have birthday to day</b>
          </span>
        </div>
        <img src="asset/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">online friends</h4>
        <ul className="rightbarFreindsList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <div className="rightbarContainerProfile">
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Ethiopia</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">single</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Education: </span>
            <span className="rightbarInfoValue">
              Degree in electrical and computer engineering
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends </h4>

        <div className="rightbarFollowings">
          {Users.map((u) =>(
            <HomeFriend key={u.id} user = {u}/>

          ) )}


        </div>
      </div>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar />: <HomeRightbar/>}
       
      </div>
    </div>
  );
}
export default Rightbar;
