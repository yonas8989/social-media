import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
function Share() {
  return (
    <div className="share ">
      <div className="shareWrapper">
        {/* let us divide the container as top , bottom  */}
        <div className="shareTop">
          <img
            src="./asset/person/3.jpeg"
            alt="shareProfileImg"
            className="shareImg"
          />
          <input placeholder="what is in you mind yon" className="shareInput" />
        </div>
        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOptions">
            {/* this is options  */}
            <div className="shareOption">
              <PermMediaIcon 
              className="shareIcon" htmlColor="tomato"/>
              <span className="shareOptionText">photo or video</span>
            </div>

            <div className="shareOption">
              <LabelIcon className="shareIcon" htmlColor="yellow" />
              <span className="shareOptionText">Tag</span>
            </div>

            <div className="shareOption">
              <LocationOnIcon className="shareIcon" htmlColor="blue"/>
              <span className="shareOptionText">Location</span>
            </div>

            <div className="shareOption">
              <EmojiEmotionsIcon className="shareIcon"
              htmlColor="purple" />
              <span className="shareOptionText">feelings</span>
            </div>
          </div>
          <button className="shareButton">share </button>
        </div>
      </div>
    </div>
  );
}

export default Share;
