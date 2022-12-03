import React from "react";
import Product from "../Featured/Product";
function GridView({ products }) {
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((index) => {
            return <Product key={index.id} {...index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default GridView;
