import "./homefriend.css";

function HomeFriend({user}) {
  return (
    <div className="rightbarfollowing">
      <img src={user.profilePicture} alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName">{user?.username}</span>
    </div>
  );
}

export default HomeFriend;
