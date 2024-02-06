import { useEffect, useState } from "react";
import useStrapi from "../../hooks/useStrapi";
import StrapiWrapper from "../StrapiWrapper";
import "./index.css";
import SourceImage from "../SourceImage";

const Product = () => {
  const { strapiData, isFetching, convertToStrapiImageUrl } = useStrapi({
    route: "product",
    populate: "populate[0]=foods&populate[1]=foods.image",
  });

  const [menuCategories, setMenuCategories] = useState([]);

  useEffect(() => {
    const menuArray = strapiData?.foods?.data;

    if (menuArray) {
      const uniqueCategories = Array.from(
        new Set(menuArray.map((item) => item.attributes?.category))
      );

      setMenuCategories(uniqueCategories);
    }
  }, [strapiData]);

  return (
    <StrapiWrapper data={strapiData} isFetching={isFetching}>
      <div className="product" id="menus">
        <div className="container">
          <h2>{strapiData?.heading}</h2>
          <div className="box-content">
            <div className="product-filter-menu">
              <ul>
                <li data-filter="all" className="active">
                  <span>Show All</span>
                </li>
                {menuCategories.map((item, index) => (
                  <li data-filter={index + 1} key={item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="row filtr-container">
              {strapiData?.foods?.data.map((item) => (
                <div
                  key={item.attributes.name}
                  className="col-md-4 col-sm-12 col-xs-12 col-12 filtr-item"
                  data-category={
                    menuCategories.indexOf(item.attributes?.category) + 1
                  }
                >
                  <div className="content">
                    <a
                      href={convertToStrapiImageUrl(
                        item.attributes.image.data.attributes.url
                      )}
                      className="product-popup"
                    >
                      <SourceImage
                        source={convertToStrapiImageUrl(
                          item.attributes.image.data.attributes.url
                        )}
                        fallbackSource="/image/product1.png/"
                      />
                    </a>
                    <h5>{item.attributes.name}</h5>
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
                    <span>{item.attributes.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StrapiWrapper>
  );
};

export default Product;
