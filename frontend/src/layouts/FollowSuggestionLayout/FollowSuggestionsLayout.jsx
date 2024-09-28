import FollowSuggestions from "@/components/FollowSuggestions/FollowSuggestions";
import SwitchProfile from "@/components/SwitchProfile/SwitchProfile";
function FollowSuggestionsLayout() {
  return (
    <div>
      <SwitchProfile />
      <div
        style={{
          display: "flex",
          fontSize: "0.9rem",
          justifyContent: "space-between",
          marginTop: "1.5rem",
          marginBottom: "0.4rem",
          fontWeight: "600",
          color: "#262626",
        }}
      >
        <div style={{ color: "#8E8E8E" }}>Suggested for you</div>
        <a href="#">See All</a>
      </div>
      <FollowSuggestions />
      <FollowSuggestions />
      <FollowSuggestions />
      <FollowSuggestions />
      <FollowSuggestions />
    </div>
  );
}

export default FollowSuggestionsLayout;
