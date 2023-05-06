import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";

const NavbarLogo = () => {
  return (
    <Link to="/home">
      <img src={Logo} alt="" />
    </Link>
  );
};

export default NavbarLogo;
