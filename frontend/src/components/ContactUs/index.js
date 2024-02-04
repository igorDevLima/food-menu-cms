import Map from "../Map";

const ContactUs = () => {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="row g-0">
          <div className="col-md">
            <Map
              center={[45.02133335176785, -69.26838037323436]}
              zoom={13}
              adress="strapi address here"
            />
          </div>
          <div className="col-md">
            <div className="content">
              <h2>Contact us</h2>
              <ul>
                <li>
                  <i className="la la-phone"></i> +61 3 8376 6284{" "}
                </li>
                <li>
                  <i className="la la-envelope"></i> contact@domain.com{" "}
                </li>
                <li className="address">
                  <i className="la la-map"></i>{" "}
                  <span>
                    121 King Street, Melbourne Victoria 3000 Australia{" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
