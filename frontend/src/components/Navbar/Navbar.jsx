import "./Navbar.css"; // Import the CSS for styling the navbar
import homeUnselected from "../../assets/homeUnselected.svg";
import searchUnselected from "../../assets/searchUnselected.svg";
import discoverUnselected from "../../assets/discoverUnselected.svg";
import reelsUnselected from "../../assets/reelsUnselected.svg";
import messagesUnselected from "../../assets/messagesUnselected.svg";
import notificationUnselected from "../../assets/notificationUnselected.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import createUnselected from "../../assets/createUnselected.svg";
import hamburger from "../../assets/hamburger.svg";
import instatokLogoLight from "../../assets/Instatok white theme.png";
import { useSelector, useDispatch } from "react-redux";
import {
  home,
  search,
  discover,
  reels,
  messages,
  notifications,
  create,
  profile,
  more,
} from "./NavbarSlice";

const Navbar = () => {
  const currentSection = useSelector((state) => state.appSection.value); // Access the current App section value
  console.log(currentSection);
  const dispatch = useDispatch(); // Get the dispatch function
  return (
    <div className="navbar">
      <a href="#home" onClick={() => dispatch(home())}>
        <div className="navbarOptions" style={{ marginBottom: "1rem" }}>
          <img src={instatokLogoLight}></img>
        </div>
      </a>
      <a href="#home" onClick={() => dispatch(home())}>
        <div className="navbarOptions">
          <img src={homeUnselected}></img>
          <span>Home</span>
        </div>
      </a>
      <a href="#search" onClick={() => dispatch(search())}>
        <div className="navbarOptions">
          <img src={searchUnselected}></img>
          <span>Search</span>
        </div>
      </a>
      <a href="#discover" onClick={() => dispatch(discover())}>
        <div className="navbarOptions">
          <img src={discoverUnselected}></img>
          <span>Discover</span>
        </div>
      </a>
      <a href="#reels" onClick={() => dispatch(reels())}>
        <div className="navbarOptions">
          <img src={reelsUnselected}></img>
          <span>Reels</span>
        </div>
      </a>
      <a href="#messages" onClick={() => dispatch(messages())}>
        <div className="navbarOptions">
          <img src={messagesUnselected}></img>
          <span>Messages</span>
        </div>
      </a>
      <a href="#notifications" onClick={() => dispatch(notifications())}>
        <div className="navbarOptions">
          <img src={notificationUnselected}></img>
          <span>Notifications</span>
        </div>
      </a>
      <a href="#create" onClick={() => dispatch(create())}>
        <div className="navbarOptions">
          <img src={createUnselected}></img>
          <span>Create</span>
        </div>
      </a>
      <a href="#profile" onClick={() => dispatch(profile())}>
        <div className="navbarOptions">
          <Avatar style={{ width: "24px", height: "24px" }}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>Profile</span>
        </div>
      </a>
      <a href="#more" onClick={() => dispatch(more())}>
        <div className="navbarOptions">
          <img src={hamburger}></img>
          <span>More</span>
        </div>
      </a>
    </div>
  );
};

export default Navbar;
