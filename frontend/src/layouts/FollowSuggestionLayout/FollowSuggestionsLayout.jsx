import FollowSuggestions from "@/components/FollowSuggestions/FollowSuggestions";
import SwitchProfile from "@/components/SwitchProfile/SwitchProfile";

let followersList = [1, 2, 3, 4, 5];
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
          // paddingRight: "2rem",
        }}
      >
        <div style={{ color: "#8E8E8E" }}>Suggested for you</div>
        <a href="#">See All</a>
      </div>
      {followersList.map((follower, index) => (
        <FollowSuggestions key={index} followerId={follower} />
      ))}
    </div>
  );
}

export default FollowSuggestionsLayout;
