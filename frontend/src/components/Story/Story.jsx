import unwatchedStoryRing from "../../assets/unwatchedStoryRing.svg";
export default function Story() {
  return (
    <div
      style={{
        position: "relative",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <img src={unwatchedStoryRing} width="90rem"></img>
        <img
          src="https://avatar.iran.liara.run/public"
          width="80rem"
          style={{ position: "absolute", top: "0.35rem", left: "1.25rem" }}
        ></img>
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>username</div>
      </div>
    </div>
  );
}
