import { Link } from "react-router-dom";
import logo from "../images/talentXlogofinal.png";

function Header() {
  return (
    <>
      <nav className="laptopNavBar">
        <div className="container">
          <img src={logo} alt="" />
          <ul className="leadtext">
            <li>
              <Link to="/" className="nav-item">
                Allabolag
              </Link>
            </li>
            <li>
              <Link to="/layoff" className="nav-item">
                Layoff
              </Link>
            </li>
            <li>
              <Link to="/sifted" className="nav-item">
                Sifted
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Header;
