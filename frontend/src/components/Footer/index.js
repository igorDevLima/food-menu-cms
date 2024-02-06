import useStrapi from "../../hooks/useStrapi";
import StrapiWrapper from "../StrapiWrapper";
import "./index.css";

const Footer = () => {
  const { strapiData, isFetching } = useStrapi({
    route: "footer",
    populate: "populate=*",
  });
  return (
    <StrapiWrapper data={strapiData} isFetching={isFetching}>
      <footer>
        <div className="container">{strapiData?.copyright}</div>
      </footer>
    </StrapiWrapper>
  );
};

export default Footer;
