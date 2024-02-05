import useStrapi from "../../hooks/useStrapi";
import StrapiWrapper from "../StrapiWrapper";
import "./index.css";

const OpenHours = () => {
  const { strapiData, isFetching } = useStrapi({
    route: "open-hour",
    populate: "populate[0]=weekday&populate[2]=weekday.hour",
  });

  return (
    <StrapiWrapper data={strapiData} isFetching={isFetching}>
      <div className="open-hours">
        <div className="container">
          <div className="content">
            <h2>{strapiData?.heading}</h2>
            <div className="row">
              {strapiData?.weekday?.map((item) => {
                return item.allhours === true ? (
                  <div className="col-md-12" key={item.id}>
                    <ul className="hours text-center">
                      <li>{item.day}</li>
                      <li>24 Hours</li>
                    </ul>
                  </div>
                ) : (
                  <div className="col-md" key={item.id}>
                    <ul>
                      <li>{item.day}</li>
                      <li>{item.hour?.open} - {item.hour?.close}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </StrapiWrapper>
  );
};

export default OpenHours;
