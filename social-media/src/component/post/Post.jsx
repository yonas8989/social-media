import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";

function Post({post}) {
  const user = Users.filter(u=>u.id===1);
  console.log(user[0].username);
  return (
    <div className="post">
      <div className="postWrapper">
        {/* divide the post wrapper in to thre e */}
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter(u=>u.id===post.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">{Users.filter(u=>u.id===post.userId)[0].username}</span>
            <span className="postDate"> {post?.date}</span>
          </div>


          <div className="postTopRight">
            <MoreVertIcon />
          </div>


        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post?.photo} alt="" className="postImg" />
        </div>
        
        <div className="postBottom">

          <div className="postBottomLeft">
            <img src="asset/like.png" alt="" className="likeIcon" />
            <img src="asset/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter"> {post?.like} people like it </span>
          </div>

          <div className="postBottomRight">
            <span className="postComment">{post?.comment} comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
