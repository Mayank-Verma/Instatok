import Navbar from "@/components/Navbar/Navbar.jsx";
import StoriesComponent from "../../components/StoriesComponent/StoriesComponent.jsx";
import "./Home.css";
export default function Home() {
  return (
    <main>
      <Navbar />
      <StoriesComponent />
    </main>
  );
}
