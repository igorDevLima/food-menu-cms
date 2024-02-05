import Map from "../Map";
import useStrapi from "../../hooks/useStrapi";
import StrapiWrapper from "../StrapiWrapper";

const ContactUs = () => {
  const { strapiData, isFetching } = useStrapi({
    route: "contact",
    populate: "populate=*",
  });

  return (
    <StrapiWrapper data={strapiData} isFetching={isFetching}>
      <div id="contact" className="contact">
        <div className="container">
          <div className="row g-0">
            <div className="col-md">
              {strapiData?.local.latitude && strapiData?.local.longitude && (
                <Map
                  center={[
                    parseFloat(strapiData?.local.latitude),
                    parseFloat(strapiData?.local.longitude),
                  ]}
                  zoom={13}
                  adress={strapiData?.address}
                />
              )}
            </div>
            <div className="col-md">
              <div className="content">
                <h2>{strapiData?.heading}</h2>
                <ul>
                  <li>
                    <i className="la la-phone"></i> {strapiData?.phone}
                  </li>
                  <li>
                    <i className="la la-envelope"></i> {strapiData?.email}
                  </li>
                  <li className="address">
                    <i className="la la-map"></i>
                    <span>{strapiData?.address}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StrapiWrapper>
  );
};

export default ContactUs;
