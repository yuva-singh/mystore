import React from "react";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark py-4 px-4">
        <div className="row  justify-content-center">
          <div className="col-lg-6">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Subscribe to latest update"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text border-0" id="basic-addon2">
                Subscribe
              </span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center text-white">
          <div className="col-lg-3">
            <h5>MYSTORE</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              dolor magni autem tempore ea aperiam facilis mollitia sunt?
              Facilis blanditiis et aliquam perferendis quasi provident.
            </p>
          </div>
          <div className="col-lg-3">
            <h5>GET TO KNOW US</h5>
            <p>
              <a href="/about" className="text-white">
                ABOUT
              </a>
            </p>
            <p>
              <a href="/about" className="text-white">
                PRODUCT
              </a>
            </p>
            <p>
              <a href="/about" className="text-white">
                CART
              </a>
            </p>
            <p>
              <a href="/about" className="text-white">
                CONTACT
              </a>
            </p>
          </div>
          <div className="col-lg-3">
            <h5>POLICYS</h5>

            <p>
              <a href="/about" className="text-white">
                COVID-19
              </a>
            </p>
            <p>
              <a href="/about" className="text-white">
                TERM & POLICY
              </a>
            </p>
            <p>
              <a href="/about" className="text-white">
                PRIVACY POLICY
              </a>
            </p>
            <p>
              <a href="/about" className="text-white">
                HELP
              </a>
            </p>
          </div>

          <div className="col-lg-3">
            <h5>CONNTECT WITH US</h5>
            <p>
              <a href="/about" className="text-white">
                FACEBOOK
              </a>
            </p>
            <p>
              <a href="/about" className="text-white">
                INSTAGRAM
              </a>
            </p>
            <p>
              <a href="/about" className="text-white">
                TWITTER
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="row">
            <div className="col-12">
             <p className="text-center pt-3">All copy right reserved by MYSTORE</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
