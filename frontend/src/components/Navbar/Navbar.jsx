import "./Navbar.css"; // Import the CSS for styling the navbar
import homeUnselected from "../../assets/homeUnselected.svg";
import homeSelected from "../../assets/homeSelected.svg";
import searchUnselected from "../../assets/searchUnselected.svg";
import searchSelected from "../../assets/searchSelected.svg";
import discoverUnselected from "../../assets/discoverUnselected.svg";
import discoverSelected from "../../assets/discoverSelected.svg";
import reelsUnselected from "../../assets/reelsUnselected.svg";
import reelsSelected from "../../assets/reelsSelected.svg";
import messagesUnselected from "../../assets/messagesUnselected.svg";
import messagesSelected from "../../assets/messagesSelected.svg";
import notificationUnselected from "../../assets/notificationUnselected.svg";
import notificationSelected from "../../assets/notificationSelected.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import createUnselected from "../../assets/createUnselected.svg";
import createSelected from "../../assets/createSelected.svg";
import hamburgerUnselected from "../../assets/hamburgerUnselected.svg";
import hamburgerSelected from "../../assets/hamburgerSelected.svg";
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
      <Link to="/home" onClick={() => dispatch(home())}>
        <div
          className="navbarOptions"
          style={{ width: "8rem", marginRight: "4rem" }}
        >
          <img src={instatokLogoLight}></img>
        </div>
      </Link>
      <Link to="/home" onClick={() => dispatch(home())}>
        <div className="navbarOptions">
          <img
            src={currentSection == "home" ? homeSelected : homeUnselected}
          ></img>
          <span style={{ fontWeight: currentSection == "home" ? "bold" : "" }}>
            Home
          </span>
        </div>
      </Link>
      <Link to="/search" onClick={() => dispatch(search())}>
        <div className="navbarOptions">
          <img
            src={currentSection == "search" ? searchSelected : searchUnselected}
          ></img>
          <span
            style={{ fontWeight: currentSection == "search" ? "bold" : "" }}
          >
            Search
          </span>
        </div>
      </Link>
      <Link to="/discover" onClick={() => dispatch(discover())}>
        <div className="navbarOptions">
          <img
            src={
              currentSection == "discover"
                ? discoverSelected
                : discoverUnselected
            }
          ></img>
          <span
            style={{ fontWeight: currentSection == "discover" ? "bold" : "" }}
          >
            Discover
          </span>
        </div>
      </Link>
      <Link to="/reels" onClick={() => dispatch(reels())}>
        <div className="navbarOptions">
          <img
            src={currentSection == "reels" ? reelsSelected : reelsUnselected}
          ></img>
          <span style={{ fontWeight: currentSection == "reels" ? "bold" : "" }}>
            Reels
          </span>
        </div>
      </Link>
      <Link to="/messages" onClick={() => dispatch(messages())}>
        <div className="navbarOptions">
          <img
            src={
              currentSection == "messages"
                ? messagesSelected
                : messagesUnselected
            }
          ></img>
          <span
            style={{ fontWeight: currentSection == "messages" ? "bold" : "" }}
          >
            Messages
          </span>
        </div>
      </Link>
      <Link to="/notifications" onClick={() => dispatch(notifications())}>
        <div className="navbarOptions">
          <img
            src={
              currentSection == "notifications"
                ? notificationSelected
                : notificationUnselected
            }
          ></img>
          <span
            style={{
              fontWeight: currentSection == "notifications" ? "bold" : "",
            }}
          >
            Notifications
          </span>
        </div>
      </Link>
      <Link to="/create" onClick={() => dispatch(create())}>
        <div className="navbarOptions">
          <img
            src={currentSection == "create" ? createSelected : createUnselected}
          ></img>
          <span
            style={{
              fontWeight: currentSection == "create" ? "bold" : "",
            }}
          >
            Create
          </span>
        </div>
      </Link>
      <Link to="/profile" onClick={() => dispatch(profile())}>
        <div className="navbarOptions">
          <Avatar style={{ width: "24px", height: "24px" }}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span
            style={{ fontWeight: currentSection == "profile" ? "bold" : "" }}
          >
            Profile
          </span>
        </div>
      </Link>
      <Link to="/more" onClick={() => dispatch(more())}>
        <div className="navbarOptions">
          <img
            src={
              currentSection == "more" ? hamburgerSelected : hamburgerUnselected
            }
          ></img>
          <span>More</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
