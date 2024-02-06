import useStrapi from "../../hooks/useStrapi";
import Button from "../Button";
import SourceImage from "../SourceImage";
import StrapiWrapper from "../StrapiWrapper";
import "./index.css";

const Cta = () => {
  const { strapiData, isFetching, convertToStrapiImageUrl } = useStrapi({
    route: "cta",
    populate: "populate=*",
  });

  return (
    <StrapiWrapper data={strapiData} isFetching={isFetching}>
      <div className="cta">
        <div className="container">
          <div className="row">
            <div className="col-md-8"></div>
            <div className="col-md">
              <SourceImage
                source={convertToStrapiImageUrl(
                  strapiData?.image.data.attributes.url
                )}
                fallbackSource="/image/cta.png"
              />
            </div>
          </div>
          <div className="box-content">
            <div className="row align-items-center">
              <div className="col-md">
                <h2>{strapiData?.heading}</h2>
                <Button
                  text={strapiData?.button.label}
                  url={strapiData?.button.url}
                />
              </div>
              <div className="col-md"></div>
            </div>
          </div>
        </div>
      </div>
    </StrapiWrapper>
  );
};

export default Cta;
