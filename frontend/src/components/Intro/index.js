import useStrapi from "../../hooks/useStrapi";
import SourceImage from "../SourceImage";
import StrapiWrapper from "../StrapiWrapper";
import "./index.css";

const Intro = () => {
  const { strapiData, isFetching, convertToStrapiImageUrl } = useStrapi({
    route: "content",
    populate: "populate=*",
  });

  return (
    <StrapiWrapper data={strapiData} isFetching={isFetching}>
      <div id="home" className="intro">
        <div className="container">
          <div className="content">
            <div className="row align-items-center">
              <div className="col-md-12 col-sm-12 col-lg-7">
                <div className="content-text">
                  <h1>{strapiData?.heading}</h1>
                  <p>{strapiData?.subheading}</p>
                  <ul>
                    {strapiData?.social.map((item) => (
                      <li key={item.id}>
                        <a href={item.url}>
                          <i
                            className={`la la-${item.socialmedia.toLowerCase()}`}
                          ></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="content-image">
                  <SourceImage
                    source={convertToStrapiImageUrl(
                      strapiData?.image.data.attributes.url
                    )}
                    fallbackSource="/image/intro.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StrapiWrapper>
  );
};

export default Intro;
