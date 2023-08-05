import homeIcon from "../image/home.svg";
import notificationIcon from "../image/notification.svg";
import bookmarkIcon from "../image/bookmark.svg";
import profileIcon from "../image/profile.svg";

const Navbar = () => {
    return (
      <div className="navbar">
        <div className="nav-item">
          <p>TravelMedia.in</p>
        </div>
        <div className="nav-icons">
          <img className="navicon" src={homeIcon} alt="Home" />
          <img className="navicon" src={notificationIcon} alt="Notifications" />
          <img className="navicon" src={bookmarkIcon} alt="Bookmarks" />
          <img className="navicon" src={profileIcon} alt="Profile" />
        </div>
        <div></div>
      </div>
    );
}
export default Navbar;