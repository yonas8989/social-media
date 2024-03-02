import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";
import { useState } from "react";

function Post({post}) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  function handleLike(){
    setLike(isLiked? like -1 : like + 1);
    setIsLiked(!isLiked);
  }
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
            <img src="asset/like.png" alt="" className="likeIcon" onClick={handleLike} />
            <img src="asset/heart.png" alt="" className="likeIcon" onClick={handleLike}/>
            <span className="postLikeCounter"> {like} people like it </span>
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
