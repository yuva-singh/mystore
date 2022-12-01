import React from "react";

function BannerSection({Title,productname}) {
  return (
    <div className="container-fluid">
      <div className="row bg-light text-center">
        <div className="col-lg-12 py-3">
          <h3>{Title}</h3>
           <div>
            <a href="/">HOME</a>
             <div>
             <b>{productname}</b>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
