import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { useCart, useDispatchCart } from "./ContextReducer";

const Card = ({ foodItem }) => {
  let dispatch = useDispatchCart();
  let state = useCart();
  let option = foodItem.options[0];
  let priceOption = Object.keys(option);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  let finalPrice = qty * parseInt(option[size]);
  const priceRef = useRef();

  const handleAddToCart = async () => {
    let food = [];
    for (const item of state) {
      if (item.id === foodItem._id) {
        food = item;
        break;
      }
    }
    if (food !== []) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: foodItem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: foodItem._id,
          name: foodItem.name,
          img: foodItem.img,
          qty: qty,
          size: size,
          price: finalPrice,
        });
        return;
      }
      return;
    }
    await dispatch({
      type: "ADD",
      id: foodItem._id,
      name: foodItem.name,
      img: foodItem.img,
      qty: qty,
      size: size,
      price: finalPrice,
    });
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <Wrapper>
      <div className="card">
        <img src={foodItem.img} className="card-img-top" alt="card-img" />
        <div className="card-body">
          <h5 className="card-title">{foodItem.name}</h5>
          <p className="card-text">{foodItem.description}</p>
          <div className="container w-100">
            <select
              name="quantity"
              id="quantity"
              className="quantity bg-success rounded m-2 h-100"
              onChange={(e) => setQty(e.target.value)}
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
              name="size"
              id="size"
              className=" size bg-success rounded m-2 h-100"
              onChange={(e) => setSize(e.target.value)}
              ref={priceRef}
            >
              {priceOption.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>

            <div className="total-price d-inline fs-5 h-100">
              ৳{finalPrice}/-
            </div>
          </div>
          <hr />

          <button className="btn btn-success m-3" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    width: 18rem;
    margin-top: 3rem;
    .card-img-top {
      width: 100%;
      height: 250px;
    }
    .card-body {
      .card-title {
        text-transform: capitalize;
      }
    }

    select {
      border: none;
      outline: none;
      color: #ffffff;
    }
  }
`;
export default Card;
