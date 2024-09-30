export default function Footer() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "0.8rem",
          color: "#C7C7C7",
          justifyContent: "space-between",
          paddingTop: "1rem",
        }}
      >
        <a href="#">About</a>
        <span>.</span>
        <a href="#">Press</a>
        <span>.</span>
        <a href="#">Help</a>
        <span>.</span>
        <a href="#">API</a>
        <span>.</span>
        <a href="#">Jobs</a>
        <span>.</span>
        <a href="#">Privacy</a>
        <span>.</span>
        <a href="#">Terms</a>
        <span>.</span>
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          color: "#C7C7C7",
        }}
      >
        <a href="#">Location</a>
        <span style={{ padding: "0.25rem" }}>.</span>
        <a href="#">Language</a>
        <span style={{ padding: "0.25rem" }}>.</span>
        <a href="#">Verified</a>
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          color: "#C7C7C7",
          paddingTop: "0.5rem",
        }}
      >
        <span>&copy; 2024 INSTATOK</span>
      </div>
    </>
  );
}
