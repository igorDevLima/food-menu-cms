const ContactUs = () => {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="row g-0">
          <div className="col-md">
            <div className="content-map">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sKota%20New%20York%2C%20New%20York%2C%20Amerika%20Serikat!5e0!3m2!1sid!2sid!4v1639286790548!5m2!1sid!2sid"
                height="350"
                style={{ style: "border:0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
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
