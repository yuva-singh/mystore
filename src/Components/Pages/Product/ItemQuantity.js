import React from "react";

function ItemQuantity({ amount, setDecrease, setIncrease }) {
  return (
    <div>
      <div className="d-flex py-1">
        <div className="bi bi-dash fs-4" onClick={()=> setDecrease()}></div>
         <div className="fs-5 mx-3">{amount}</div>{" "}{" "}
        <div className="bi bi-plus fs-4" onClick={()=>setIncrease()}></div>
      </div>
    </div>
  );
}

export default ItemQuantity;
