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

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home">
        <div className="navbarOptions">
          <img src={homeUnselected}></img>
          <span>Home</span>
        </div>
      </a>
      <a href="#home">
        <div className="navbarOptions">
          <img src={searchUnselected}></img>
          <span>Search</span>
        </div>
      </a>
      <a href="#home">
        <div className="navbarOptions">
          <img src={discoverUnselected}></img>
          <span>Discover</span>
        </div>
      </a>
      <a href="#home">
        <div className="navbarOptions">
          <img src={reelsUnselected}></img>
          <span>Reels</span>
        </div>
      </a>
      <a href="#home">
        <div className="navbarOptions">
          <img src={messagesUnselected}></img>
          <span>Messages</span>
        </div>
      </a>
      <a href="#home">
        <div className="navbarOptions">
          <img src={notificationUnselected}></img>
          <span>Messages</span>
        </div>
      </a>
      <a href="#home">
        <div className="navbarOptions">
          <img src={createUnselected}></img>
          <span>Create</span>
        </div>
      </a>
      <a href="#home">
        <div className="navbarOptions">
          <Avatar style={{ width: "24px", height: "24px" }}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>Profile</span>
        </div>
      </a>
      <a href="#home">
        <div className="navbarOptions">
          <img src={hamburger}></img>
          <span>More</span>
        </div>
      </a>
    </div>
  );
};

export default Navbar;
