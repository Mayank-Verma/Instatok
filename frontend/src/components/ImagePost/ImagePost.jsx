import dots from "../../assets/3dots.svg";
import heart from "../../assets/imagePostHeart.svg";
import commment from "../../assets/imagePostComment.svg";
import share from "../../assets/imagePostShare.svg";
import save from "../../assets/imagePostSave.svg";
export default function ImagePost() {
  return (
    <div style={{ width: "28vw", paddingTop: "1rem", paddingBottom: "1rem" }}>
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
            display: "flex",
            width: "9.5vw",
            justifyContent: "space-between",
            fontWeight: "600",
            alignItems: "center",
          }}
        >
          <img
            src="https://avatar.iran.liara.run/public"
            style={{ borderRadius: "50%", width: "2.2vw" }}
          ></img>
          <span>username</span>
          <span style={{ color: "#8E8E8E" }}>.</span>
          <span style={{ color: "#8E8E8E" }}>5h</span>
        </div>
        <a href="#" style={{ display: "block" }}>
          <img src={dots} width="16rem"></img>
        </a>
      </div>
      <div style={{ objectFit: "cover" }}>
        <img src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
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
            width: "7vw",
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
    </div>
  );
}
