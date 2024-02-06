import useStrapi from "../../hooks/useStrapi";
import Button from "../Button";
import StrapiWrapper from "../StrapiWrapper";
import "./index.css";

const Navbar = () => {
  const { strapiData, isFetching, convertToStrapiImageUrl } = useStrapi({
    route: "navbar",
    populate: "populate=*",
  });
  return (
    <StrapiWrapper data={strapiData} isFetching={isFetching}>
      <div
        id="navbar"
        className="navbar navbar-expand-lg justify-content-center align-items-center"
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            <img
              src={
                convertToStrapiImageUrl(strapiData?.logo.data.attributes.url) ||
                "/image/intro.png"
              }
              alt="logo"
            />
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
              {strapiData?.link.map((item) => (
                <li className="nav-item" key={item.label}>
                  <a className="nav-link" href={item.url}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="button-navbar">
            <li>
              <Button
                text={strapiData?.button?.label}
                url={strapiData?.button?.url}
              />
            </li>
          </ul>
        </div>
      </div>
    </StrapiWrapper>
  );
};

export default Navbar;
