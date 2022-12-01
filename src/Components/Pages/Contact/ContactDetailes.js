import "./Contact.css";

function ContactDetailes() {
  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div>
              <img src={require("../../../../src/Img/contactanimation.gif")} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <h4>Contact Form</h4>
            <form action="https://formspree.io/f/xlevvgra" method="post">
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="exampleInputName"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputnumber" className="form-label">
                  Number
                </label>
                <input
                  name="number"
                  type="number"
                  className="form-control"
                  id="exampleInputnumber"
                />
              </div>
              <div className="form-floating mb-3">
                <textarea
                  name="Comments"
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  defaultValue={""}
                />
                <label htmlFor="floatingTextarea">Comments</label>
              </div>

              <button type="submit" className="btn btn-dark">
                Send Mail
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetailes;
