import "./index.css";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md">
            <img src="/image/about.png" alt="" />
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="content">
              <div className="the-title">
                <span></span>ABOUT US
              </div>
              <h2>
                We Were Founded In The 90's <br /> Innovate For The Better
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis ex quod perspiciatis accusamus maxime iis ex quod
                perspiciatis accusamus maxime ommo nditiis ex quod perspiciatis
                accusamus maxime omm
              </p>
              <div className="row">
                <div className="col">
                  <div className="icon">
                    <i className="la la-wifi"></i>
                  </div>
                  <div className="text">
                    <h5>Free Wifi</h5>
                    <span>Features</span>
                  </div>
                </div>
                <div className="col">
                  <div className="icon">
                    <i className="la la-dollar"></i>
                  </div>
                  <div className="text">
                    <h5>Friendly Price</h5>
                    <span>Price</span>
                  </div>
                </div>
                <div className="col">
                  <div className="icon">
                    <i className="la la-recycle"></i>
                  </div>
                  <div className="text">
                    <h5>Clean & Cool</h5>
                    <span>Place</span>
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

export default About;
