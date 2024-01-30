import "./index.css";

const Intro = () => {
  return (
    <div id="home" className="intro">
      <div className="container">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-md-12 col-sm-12 col-lg-7">
              <div className="content-text">
                <h1>
                  The Best Favorite Place Eat And Drink With Friendly Price
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique quae unde vitae hic impedit voluptate labore quam
                  aliquam. Eaque, perspiciatis? Quaerat quibusdam natus
                  distinctio accusantium eligendi eaque numquam deserunt at?
                </p>
                <ul>
                  <li>
                    <a href="">
                      <i className="la la-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="la la-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="la la-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="la la-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="la la-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="content-image">
                <img src="/image/intro.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
