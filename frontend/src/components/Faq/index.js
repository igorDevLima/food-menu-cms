import useStrapi from "../../hooks/useStrapi";
import Button from "../Button";
import StrapiWrapper from "../StrapiWrapper";
import "./index.css";

const Faq = () => {
  const { strapiData, isFetching } = useStrapi({
    route: "faq",
    populate: "populate=*",
  });

  return (
    <StrapiWrapper data={strapiData} isFetching={isFetching}>
      <div id="faq" className="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="the-title">
                <span></span>FAQ
              </div>
              <h2>{strapiData?.heading}</h2>
              <p>{strapiData?.paragraph}</p>
              <Button
                text={strapiData?.button.label}
                url={strapiData?.button.url}
              />
            </div>
            <div className="col-md">
              <div className="accordion" id="accordionExample">
                {strapiData?.question.map((item, index) => (
                  <div className="accordion-item" key={item.id}>
                    <div className="accordion-header" id="heading1">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index + 1}`}
                        aria-expanded="true"
                        aria-controls={`collapse${index + 1}`}
                      >
                        <h5>{item.question}</h5>
                      </button>
                    </div>
                    <div
                      id={`collapse${index + 1}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index + 1}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{item.response}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StrapiWrapper>
  );
};

export default Faq;
