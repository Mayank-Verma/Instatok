export default function FollowSuggestions() {
  return (
    <div
      style={{
        display: "flex",
        fontSize: "0.9rem",
        width: "18rem",
        justifyContent: "space-between",
        height: "3.5rem",
        alignItems: "center",
        // border: "1px solid black",
        marginBottom: "0.5rem",
        
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <img
          src="https://avatar.iran.liara.run/public"
          style={{ width: "3rem", height: "3rem", display: "block" }}
        ></img>
        <div>
          <div style={{ fontWeight: "600" }}>username</div>
          <div
            style={{
              lineHeight: "0.7rem",
              fontSize: "0.8rem",
              color: "#8E8E8E",
            }}
          >
            Firstname Lastname
          </div>
        </div>
      </div>
      <a
        href="#"
        style={{ fontWeight: "600", fontSize: "0.8", color: "#0095F6" }}
      >
        Follow
      </a>
    </div>
  );
}
