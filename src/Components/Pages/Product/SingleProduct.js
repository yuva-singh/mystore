import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContect";
import FormatPrice from "../../FormatPrice/FormatPrice";
import BannerSection from "../../childs/BannerSection";
import Myimage from "./Myimage";
import Stars from "./Stars";
import Addtocart from "./Addtocart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();


  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  if (isSingleLoading) {
    return (
      <div className="text-center">
        <h3>...Loading</h3>
      </div>
    );
  }
  return (
    <>
      {/* <BannerSection productname={name} /> */}
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-6 contentcenter">
            <Myimage image={image} />
          </div>
          <div className="col-lg-6">
            <h2>{name} </h2>
            <p>
              <span>
                <Stars stars={stars} reviews={reviews} />
              </span>
            </p>
            <p>
              <b>MRP:</b>{" "}
              <del>
                <FormatPrice price={price + 25000} />
              </del>
            </p>
            <p>
              <span className="text-primary">Deal of the day</span>{" "}
              <FormatPrice price={price} />
            </p>
            {/* <h2>{company}</h2> */}
            <p>{description}</p>
            <div className="d-flex justify-content-between">
              <figure className="text-center">
                <i className="bi bi-truck fs-4"></i>
                <div className="fontsizeinsingleproductpage">Free delivary</div>
              </figure>
              <figure className="text-center">
                <i className="bi bi-repeat fs-4"></i>
                <div className="fontsizeinsingleproductpage">
                  15 Days Replacement
                </div>
              </figure>
              <figure className="text-center">
                <i className="bi bi-currency-rupee fs-4"></i>
                <div className="fontsizeinsingleproductpage">
                  Money Back Guaranteed
                </div>
              </figure>
              <figure className="text-center">
                <i className="bi bi-shield fs-4"></i>
                <div className="fontsizeinsingleproductpage">
                  2 Year Warranty
                </div>
              </figure>
            </div>
            <p>
              Available: <b>{stock > 0 ? "In Stoke" : "Not Available"}</b>
            </p>
            <p>
              Brand : <b>{company}</b>
            </p>
            <hr />
            {stock > 0 ? <Addtocart Product={singleProduct} /> : "out of stock"}
          
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
