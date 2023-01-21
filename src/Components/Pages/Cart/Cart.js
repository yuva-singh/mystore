import React,{useState} from "react";
import { useCartContext } from "../../Context/CartContext";
import FormatPrice from "../../FormatPrice/FormatPrice";
import ItemQuantity from '../Product/ItemQuantity';

function Cart() {
  const { cart } = useCartContext();
  const [amount, setamount] = useState(1)

  let setDecrease = () => {
    // amount > 1 ? setamount(amount - 1) : setamount(1);
  }
  let setIncrease = () => {
    // amount < stock ? setamount(amount + 1) : setamount(stock);
  }
  console.log(cart);
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <table class="table">
              <thead>
                <tr style={{border:"none"}}>
                  <th scope="col">S.N0</th>
                  <th scope="col">ITEM</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">QUANTITY</th>
                  <th scope="col">SUBTOTAL</th>
                  <th scope="col">REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((data, index) => {
                  return (
                    <tr key={data.id}>
                      <th scope="row">{index + 1}</th>
                      <td className="d-flex">
                        <div>
                          <img
                            src={data.image}
                            height={47}
                            width="auto"
                            className="rounded mx-1"
                            alt=""
                          />
                        </div>{" "}
                        <div>{data.name}</div>
                        <div
                          className="btnstyle"
                          style={{
                            backgroundColor: data.color,
                            color: data.color,
                          }}
                        ></div>
                      </td>
                      <td>
                        <FormatPrice price={data.price} />
                      </td>
                      <td>
                        <ItemQuantity
                          amount={amount}
                          setDecrease={setDecrease}
                          setIncrease={setIncrease}
                        />
                      </td>
                      <td><FormatPrice price={data.price*data.amount} /></td>
                      <td>
                        <i className="bi bi-archive text-danger"></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
