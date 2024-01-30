import Button from "../Button";
import "./index.css";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="navbar navbar-expand-lg justify-content-center align-items-center"
    >
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src="/image/logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="la la-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menus">
                Menus
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                Faq
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <ul className="button-navbar">
          <li>
            <Button text="Order Now" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
