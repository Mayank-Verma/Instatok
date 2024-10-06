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
import { Link } from "react-router-dom";

const Navbar = () => {
  const currentSection = useSelector((state) => state.appSection.value); // Access the current App section value
  console.log(currentSection);
  const dispatch = useDispatch(); // Get the dispatch function
  return (
    <div className="navbar">
      <Link to="#home" onClick={() => dispatch(home())}>
        <div
          className="navbarOptions"
          style={{ width: "8rem", marginRight: "4rem" }}
        >
          <img src={instatokLogoLight}></img>
        </div>
      </Link>
      <Link to="#home" onClick={() => dispatch(home())}>
        <div className="navbarOptions">
          <img src={homeUnselected}></img>
          <span>Home</span>
        </div>
      </Link>
      <Link to="#search" onClick={() => dispatch(search())}>
        <div className="navbarOptions">
          <img src={searchUnselected}></img>
          <span>Search</span>
        </div>
      </Link>
      <Link to="#discover" onClick={() => dispatch(discover())}>
        <div className="navbarOptions">
          <img src={discoverUnselected}></img>
          <span>Discover</span>
        </div>
      </Link>
      <Link to="#reels" onClick={() => dispatch(reels())}>
        <div className="navbarOptions">
          <img src={reelsUnselected}></img>
          <span>Reels</span>
        </div>
      </Link>
      <Link to="#messages" onClick={() => dispatch(messages())}>
        <div className="navbarOptions">
          <img src={messagesUnselected}></img>
          <span>Messages</span>
        </div>
      </Link>
      <Link to="#notifications" onClick={() => dispatch(notifications())}>
        <div className="navbarOptions">
          <img src={notificationUnselected}></img>
          <span>Notifications</span>
        </div>
      </Link>
      <Link to="#create" onClick={() => dispatch(create())}>
        <div className="navbarOptions">
          <img src={createUnselected}></img>
          <span>Create</span>
        </div>
      </Link>
      <Link to="#profile" onClick={() => dispatch(profile())}>
        <div className="navbarOptions">
          <Avatar style={{ width: "24px", height: "24px" }}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>Profile</span>
        </div>
      </Link>
      <Link to="#more" onClick={() => dispatch(more())}>
        <div className="navbarOptions">
          <img src={hamburger}></img>
          <span>More</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
