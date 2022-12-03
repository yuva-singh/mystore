import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemQuantity from "./ItemQuantity";


function Addtocart({ Product }) {
  const { id, colors, stock } = Product;
  const [color, setcolor] = useState(colors);
  const [amount ,setamount] = useState(1)
  let setDecrease = ()=>{
        amount > 1 ? setamount(amount -1):setamount(1);
  }
  let setIncrease = ()=>{
      amount < stock ? setamount(amount + 1): setamount(stock);
  }
  return (
    <>
      <div className="d-flex">
        Color:{" "}
        {colors.map((curcolor, index) => {
          return (
            <div
              key={index}
              className={color === curcolor ? "btnstyle btnactive" : "btnstyle"}
              style={{ backgroundColor: curcolor }}
              onClick={() => setcolor(curcolor)}
            >
              {color === curcolor ? (
                <span className="bi bi-check-lg text-white text-center" />
              ) : null}
            </div>
          );
        })}
      </div>
      {/*  */}
      <ItemQuantity
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <Link to="/cart">
        <button className="btn btn-dark">ADD TO CARD</button>
      </Link>
    </>
  );
}

export default Addtocart;
