import "./index.css"
const Cta = () => {
  return (
    <div className="cta">
      <div className="container">
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md">
            <img src="/image/cta.png" alt="" />
          </div>
        </div>
        <div className="box-content">
          <div className="row align-items-center">
            <div className="col-md">
              <h2>
                Come On, <br />
                Eat And Drink At Our Place
              </h2>
              <button className="button">Order Now</button>
            </div>
            <div className="col-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
