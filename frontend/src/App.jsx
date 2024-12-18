import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "../src/store/store"; // Import the store
import Story from "./components/Story/Story";
import StoriesComponent from "./components/StoriesComponent/StoriesComponent";
import FollowSuggestions from "./components/FollowSuggestions/FollowSuggestions";
import Reels from "./pages/Reels/Reels";
import ImagePost from "./components/ImagePost/ImagePost";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup.jsx";
import Login from "./pages/Login/Login.jsx";
import Create from "./pages/Create/Create";
import Spinner from "./components/Spinner/Spinner";
import Loader from "./components/SplashLoader/SplashLoader";
import Test from "./pages/Test/Test";
import MuteUnmuteButton from "./components/MuteUnmuteButton/MuteUnmuteButton";

function App() {
  const notify = () => {
    console.log("Toast is triggered");
    toast.success("🦄 Wow, it works!", {
      position: "top-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Home />} />
          <Route path="/discover" element={<Home />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/messages" element={<Home />} />
          <Route path="/notifications" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/more" element={<Home />} />
          <Route path="/test" element={<MuteUnmuteButton />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
