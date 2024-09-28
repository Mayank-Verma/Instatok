import Navbar from "@/components/Navbar/Navbar.jsx";
import StoriesComponent from "../../components/StoriesComponent/StoriesComponent.jsx";
import "./Home.css";
import FollowSuggestions from "@/components/FollowSuggestions/FollowSuggestions.jsx";
import FollowSuggestionsLayout from "@/layouts/FollowSuggestionLayout/FollowSuggestionsLayout.jsx";
export default function Home() {
  return (
    <main>
      <Navbar />
      <StoriesComponent />
      <FollowSuggestionsLayout />
    </main>
  );
}
