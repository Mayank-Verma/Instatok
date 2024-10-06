import dots from "../../assets/3dots.svg";
import heart from "../../assets/imagePostHeart.svg";
import commment from "../../assets/imagePostComment.svg";
import share from "../../assets/imagePostShare.svg";
import save from "../../assets/imagePostSave.svg";
import { timePassedSincePostUpdated } from "../../utils/timePassedSincePostUpdated.js";
export default function ImagePost({ postInfo }) {
  const {
    post: postURL,
    commentsCount,
    likesCount,
    uploadedBy,
    description,
    updatedAt,
  } = postInfo;
  return (
    <div style={{ width: "30vw", paddingTop: "1rem", paddingBottom: "1rem" }}>
      <div
        style={{
          fontSize: "0.9rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "0.5rem",
        }}
      >
        <div
          style={{
            // display: "flex",
            width: "60rem",
            // justifyContent: "space-between",
            fontWeight: "600",
            // alignItems: "center",
          }}
        >
          <img
            src={
              uploadedBy.profilePicture
                ? uploadedBy.profilePicture
                : "https://avatar.iran.liara.run/public"
            }
            style={{
              borderRadius: "50%",
              width: "2.4rem",
              marginRight: "0.3rem",
              display: "inline",
            }}
          ></img>
          <span style={{ marginRight: "0.3rem" }}>{uploadedBy.username}</span>
          <span
            style={{
              width: "7rem",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "#8E8E8E",
                marginRight: "0.3rem",
              }}
            >
              .
            </span>
            <span style={{ color: "#8E8E8E" }}>
              {timePassedSincePostUpdated(updatedAt)}
            </span>
          </span>
        </div>
        <a href="#" style={{ display: "block" }}>
          <img src={dots} width="28rem"></img>
        </a>
      </div>
      <div style={{ objectFit: "cover" }}>
        <img src={postURL}></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "0.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "7rem",
            justifyContent: "space-between",
          }}
        >
          <a href="#">
            <img src={heart}></img>
          </a>
          <a href="#">
            <img src={commment}></img>
          </a>
          <a href="#">
            <img src={share}></img>
          </a>
        </div>
        <a href="#">
          <img src={save}></img>
        </a>
      </div>
      <div
        style={{
          fontWeight: "600",
          fontSize: "0.9rem",
          marginTop: "0.5rem",
        }}
      >
        <span style={{ marginRight: "0.3rem" }}>{likesCount}</span>
        <span>likes</span>
      </div>
      <div style={{ fontSize: "0.9rem" }}>
        <span style={{ fontWeight: "600", marginRight: "0.3rem" }}>
          {uploadedBy.username}
        </span>
        <span>{description}</span>
      </div>
    </div>
  );
}
