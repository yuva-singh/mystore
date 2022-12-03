import React from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../../FormatPrice/FormatPrice";

function Product(curElem) {
  const { id, name, image, price, category } = curElem;
  return (
    <>
      <div className="col-lg-4 py-2">
        <div className="position-relative">
          <Link to={`/singleproduct/${id}`}>
            <img src={image} className="img-fluid rounded-3" alt="img" />
            <figcaption className="position-absolute top-0 end-0 bg-light px-3 py-1 m-2 rounded-pill">
              {category}
            </figcaption>
            <body className="d-flex justify-content-between py-2 px-3">
              <h5>{name}</h5>
              <p><FormatPrice price={price} /></p>
            </body>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Product;
