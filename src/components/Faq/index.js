import "./index.css";

const Faq = () => {
  return (
    <div id="faq" className="faq">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="the-title">
              <span></span>FAQ
            </div>
            <h2>Frequently Asked Questions</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              eaque odit, iusto autem vel ullam ut! Totam voum.
            </p>
            <button className="button">Contact us</button>
          </div>
          <div className="col-md">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <div className="accordion-header" id="heading1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    <h5>Can order bulk food?</h5>
                  </button>
                </div>
                <div
                  id="collapse1"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading1"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cupiditate ullam, consequatur ipsa natus eaque,
                      repellendus quas corrupti vel quae suscipit possimusd
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="heading2">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                    aria-expanded="true"
                    aria-controls="collapse2"
                  >
                    <h5>Delivery order question?</h5>
                  </button>
                </div>
                <div
                  id="collapse2"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading2"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cupiditate ullam, consequatur ipsa natus eaque,
                      repellendus quas corrupti vel quae suscipit possimusd
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="heading3">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded="true"
                    aria-controls="collapse3"
                  >
                    <h5>How many table available?</h5>
                  </button>
                </div>
                <div
                  id="collapse3"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading3"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cupiditate ullam, consequatur ipsa natus eaque,
                      repellendus quas corrupti vel quae suscipit possimusd
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="heading4">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="true"
                    aria-controls="collapse4"
                  >
                    <h5>The chef can be invite?</h5>
                  </button>
                </div>
                <div
                  id="collapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading4"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cupiditate ullam, consequatur ipsa natus eaque,
                      repellendus quas corrupti vel quae suscipit possimusd
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="heading5">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded="true"
                    aria-controls="collapse5"
                  >
                    <h5>Order via marketplace?</h5>
                  </button>
                </div>
                <div
                  id="collapse5"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading5"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cupiditate ullam, consequatur ipsa natus eaque,
                      repellendus quas corrupti vel quae suscipit possimusd
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="heading5">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse6"
                    aria-expanded="true"
                    aria-controls="collapse6"
                  >
                    <h5>Payment support order food?</h5>
                  </button>
                </div>
                <div
                  id="collapse6"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading5"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cupiditate ullam, consequatur ipsa natus eaque,
                      repellendus quas corrupti vel quae suscipit possimusd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
