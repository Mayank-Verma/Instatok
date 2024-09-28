import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "../src/store/store"; // Import the store
import Story from "./components/Story/Story";
import StoriesComponent from "./components/StoriesComponent/StoriesComponent";
import FollowSuggestions from "./components/FollowSuggestions/FollowSuggestions";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
