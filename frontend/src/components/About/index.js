import useStrapi from "../../hooks/useStrapi";
import SourceImage from "../SourceImage";
import StrapiWrapper from "../StrapiWrapper";
import "./index.css";

const About = () => {
  const { strapiData, isFetching, convertToStrapiImageUrl } = useStrapi({
    route: "about",
    populate: "populate=*",
  });
  return (
    <StrapiWrapper data={strapiData} isFetching={isFetching}>
      <div id="about" className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md">
              <SourceImage
                source={convertToStrapiImageUrl(
                  strapiData?.image.data.attributes.url
                )}
                fallbackSource="/image/about.png"
              />
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="content">
                <div className="the-title">
                  <span></span>ABOUT US
                </div>
                <h2>{strapiData?.heading}</h2>
                <p>{strapiData?.paragraph}</p>
                <div className="row">
                  {strapiData?.benefit.map((item) => (
                    <div className="col" key={item.title}>
                      <div className="icon">
                        <i className={`la la-${item.icon}`}></i>
                      </div>
                      <div className="text">
                        <h5>{item.title}</h5>
                        <span>{item.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StrapiWrapper>
  );
};

export default About;
