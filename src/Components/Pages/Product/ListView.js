import React from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../../FormatPrice/FormatPrice";

function ListView({ products }) {
  console.log(products);
  return (
    <>
      {products.map((products) => {
        const { id, name, image, price, description } = products;
        return <div className="col-lg-12 border rounded py-3 my-3" key={id}>
          <div className="row">
            <div className="col-lg-4 contentcenter">
             <Link to={`/singleproduct/${id}`}><img src={image} alt="" className="img-fluid shadow-sm rounded" /></Link>
            </div>
            <div className="col-lg-8">
              <h5>{name}</h5>
              <p><FormatPrice price={price}/></p>
              <p>{description.slice(0,200)}</p>
              <Link to={`/singleproduct/${id}`}>
                <button className="btn btn-dark btn-sm">Read more</button>
              </Link>
            </div>
          </div>
        </div>;
      })}
    </>
  );
}

export default ListView;
