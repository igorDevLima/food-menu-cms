import "./index.css";

const Product = () => {
  return (
    <div className="product" id="menus">
      <div className="container">
        <h2>
          Choose Our Menus
          <br />
          Food And Drinks
        </h2>
        <div className="box-content">
          <div className="product-filter-menu">
            <ul>
              <li data-filter="all" className="active">
                <span>Show All</span>
              </li>
              <li data-filter="1">
                <span>Food</span>
              </li>
              <li data-filter="2">
                <span>Drink</span>
              </li>
            </ul>
          </div>
          <div className="row filtr-container">
            <div
              className="col-md-4 col-sm-12 col-xs-12 col-12 filtr-item"
              data-category="1"
            >
              <div className="content">
                <a href="/image/product3.png" className="product-popup">
                  <img src="/image/product3.png" alt="" />
                </a>
                <h5>Avocado Egg</h5>
                <ul>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                </ul>
                <span>$45</span>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-12 col-xs-12 col-12 filtr-item"
              data-category="2"
            >
              <div className="content">
                <a href="/image/product1.png" className="product-popup">
                  <img src="/image/product1.png" alt="" />
                </a>
                <h5>Fresh Orange</h5>
                <ul>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                </ul>
                <span>$15</span>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-12 col-xs-12 col-12 filtr-item"
              data-category="1"
            >
              <div className="content">
                <a href="/image/product4.png" className="product-popup">
                  <img src="/image/product4.png" alt="" />
                </a>
                <h5>Healthy Food</h5>
                <ul>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                </ul>
                <span>$35</span>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-12 col-xs-12 col-12 filtr-item"
              data-category="1"
            >
              <div className="content">
                <a href="/image/product5.png" className="product-popup">
                  <img src="/image/product5.png" alt="" />
                </a>
                <h5>Great Grilled</h5>
                <ul>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                </ul>
                <span>$38</span>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-12 col-xs-12 col-12 filtr-item"
              data-category="2"
            >
              <div className="content">
                <a href="/image/product2.png" className="product-popup">
                  <img src="/image/product2.png" alt="" />
                </a>
                <h5>Strawberry Ice</h5>
                <ul>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                </ul>
                <span>$12</span>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-12 col-xs-12 col-12 filtr-item"
              data-category="2"
            >
              <div className="content">
                <a href="/image/product6.png" className="product-popup">
                  <img src="/image/product6.png" alt="" />
                </a>
                <h5>Black Coffee</h5>
                <ul>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                  <li>
                    <i className="la la-star"></i>
                  </li>
                </ul>
                <span>$21</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
