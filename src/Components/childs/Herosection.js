import React from "react";
import { Link } from "react-router-dom";

function Herosection({ content, pragraph, imgs, Button,welcome }) {
  return (
    <div className="container-fluid my-3">
      <div className="row justify-content-center">
        <div className="col-lg-5 contentcenter">
          <div>
            <spna className = "text-primary">{welcome}</spna>
            <h1 className="fw-bold">{content}</h1>
            <p>{pragraph}</p>
            <Link to="product">
              {" "}
              <button className="btn btn-dark">{Button}</button>
            </Link>
          </div>
        </div>
        <div className="col-lg-5">
          <img
            src={require(`../../Img/${imgs}`)}
            className="img-fluid rounded"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
