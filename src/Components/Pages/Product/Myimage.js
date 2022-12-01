import React, { useState } from "react";

function Myimage({ image = [{ url: "" }] }) {
  const [mainimage, setmainimage] = useState(image[0]);
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-12">
          <div className="row text-center">
            {image.map((img, index) => (
              <div className="col-lg-12 col-3 py-1" key={index}>
                <img src={img.url} className="img-fluid rounded" alt="img" onClick={()=>setmainimage(img)} style={{cursor:"pointer"}}/>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-9 col-12 text-center contentcenter">
          <img src={mainimage.url} className="img-fluid rounded" alt="img" />
        </div>
      </div>
    </>
  );
}

export default Myimage;
