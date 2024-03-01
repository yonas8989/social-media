import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import Rightbar from '../rightbar/Rightbar'

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Feed;
