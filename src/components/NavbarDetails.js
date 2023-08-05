import bookmarkDetails from "../image/bookmarkDetails.svg";
import homeDetails from "../image/homeDetails.svg";
import notificationIcon from "../image/notification.svg";
import profileIcon from "../image/profile.svg";

const NavbarDetails = () => {
  return (
    <div className="navbar">
      <div className="nav-item">
        <p>TravelMedia.in</p>
      </div>
      <div className="nav-icons">
        <img className="navicon" src={homeDetails} alt="Home" />
        <img className="navicon" src={notificationIcon} alt="Notifications" />
        <img className="navicon" src={bookmarkDetails} alt="Bookmarks" />
        <img className="navicon" src={profileIcon} alt="Profile" />
      </div>
      <div></div>
    </div>
  );
};

export default NavbarDetails;
