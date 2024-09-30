import Navbar from "@/components/Navbar/Navbar.jsx";
import StoriesComponent from "../../components/StoriesComponent/StoriesComponent.jsx";
import "./Home.css";
import FollowSuggestions from "@/components/FollowSuggestions/FollowSuggestions.jsx";
import FollowSuggestionsLayout from "@/layouts/FollowSuggestionLayout/FollowSuggestionsLayout.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import ImagePost from "@/components/ImagePost/ImagePost.jsx";
import ImagePostFeed from "@/components/ImagePostFeed/ImagePostFeed.jsx";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StoriesComponent />
          <ImagePostFeed />
        </div>
        <div>
          <FollowSuggestionsLayout />
          <Footer />
        </div>
      </main>
    </>
  );
}
