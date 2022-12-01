import React from "react";

function Service() {
  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-lg-4 text-center py-2">
          <div className="bg-light rounded-3 p-5">
            <i className="bi bi-truck fs-1"></i>
            <div>Fast and Free Delivery</div>
          </div>
        </div>
        {/*  */}
        <div className="col-lg-4 text-center py-2">
          <div className="bg-light rounded-3 py-3 mb-2">
            <div>
              {" "}
              <i className="bi bi-shield-lock fs-1"></i>{" "}
              <div>Non-contact Shipping</div>
            </div>
          </div>
          <div className="bg-light rounded-3 py-2">
            <div>
              <i className="bi bi-currency-rupee fs-1"></i> Money Back
              Guaranteed
            </div>
          </div>
        </div>
        {/*  */}
        <div className="col-lg-4 text-center py-2">
          <div className="bg-light rounded-3 p-5">
            <i className="bi bi-key fs-1"></i>
            <div>Secure Payment System</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
