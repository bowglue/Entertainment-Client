import { Link } from "react-router-dom";
import Bookmark from "../../assets/icons/bookmarks.png";

function NavbarBookmark() {
  return (
    <Link to="/bookmarks">
      <img src={Bookmark} alt="bookmarks" />
    </Link>
  );
}

export default NavbarBookmark;
