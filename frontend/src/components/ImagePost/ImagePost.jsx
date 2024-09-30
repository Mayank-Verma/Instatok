import dots from "../../assets/3dots.svg";
export default function ImagePost() {
  return (
    <div style={{ width: "28vw" }}>
      <div
        style={{
          fontSize: "0.9rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src="https://avatar.iran.liara.run/public"
            style={{ borderRadius: "50%", width: "2.2vw" }}
          ></img>
          <span>username</span>
          <span style={{ color: "#8E8E8E" }}>.</span>
          <span style={{ color: "#8E8E8E" }}>5h</span>
        </div>

        <img src={dots} width="16rem"></img>
      </div>
      <div style={{ objectFit: "cover" }}>
        <img src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      </div>
    </div>
  );
}
