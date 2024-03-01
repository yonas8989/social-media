import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        {/* divide the post wrapper in to thre e */}
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="./asset/person/3.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">yonas fikadie</span>
            <span className="postDate"> 5 days ago</span>
          </div>


          <div className="postTopRight">
            <MoreVertIcon />
          </div>


        </div>
        <div className="postCenter">
          <span className="postText">hey! it is my first post</span>
          <img src="./asset/post/1.jpeg" alt="" className="postImg" />
        </div>
        
        <div className="postBottom">

          <div className="postBottomLeft">
            <img src="asset/like.png" alt="" className="likeIcon" />
            <img src="asset/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">32 people like it </span>
          </div>

          <div className="postBottomRight">
            <span className="postComment">9 comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
