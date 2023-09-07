import { useState, useEffect } from "react";
import { useRef } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);
  let data = useCart();
  let foodItems = props.foodItem;
  const priceRef = useRef();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  let dispatch = useDispatchCart();
  const handleAddToCart = async () => {
    console.log(data)
    
    let food = [];
    for (const item of data) {
      if (item.id === foodItems._id) {
        food = item;
        break;
      }
    }
    if (food !== []) {
      if (food.size === size) {
        console.log("inner if 1")
        await dispatch({
          type: "UPDATE",
          id: foodItems._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        // console.log("else if",foodItems._id)
        await dispatch({
          type: "ADD",
          id: foodItems._id,
          name: foodItems.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: foodItems.img,
        });
        return
        
      }
      return
    }
    console.log("outer if")
    await dispatch({type:"ADD",id:foodItems._id,name:foodItems.name,price:finalPrice,qty:qty,size:size, img:foodItems.img})
  
  };

  return (
    <div>
      <div
        className="card  mt-3"
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img
          className="card-img-top"
          src={foodItems.img}
          alt=""
          style={{ height: "120px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{foodItems.name}</h5>

          <div className="container w-100">
            <select
              className="m-2 h-100  bg-primary"
              style={{ backgroundColor: "#20B2AA" }}
              onChange={(e) => {
                setQty(e.target.value);
              }}
              name=""
              id=""
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100 bg-success rounded"
              style={{ backgroundColor: "#20B2AA" }}
              ref={priceRef}
              onChange={(e) => {
                setSize(e.target.value);
              }}
              id=""
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">₹{finalPrice}</div>
            <hr />
            <button
              className="btn btn-success justify-center ms-2"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
