import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import "./AddToCart.css";
import { removeItem } from "../../fetures/cartSlice"; // Corrected the import path

const AddTocart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cart);
  }, [cart]); // Add cart as a dependency

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="card-info">
        <h1>No items in the cart</h1>
      </div>
    );
  }

  return (
    <>
      <div className="card-info">
        <h1>Product Details</h1>
        <div className="add-cards">
          {cart.map((item) => (
            <div key={item.id} className="card">
              <img src={item.images[0].url} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price.formattedValue}</p>
              <button
                className="delete-button"
                onClick={() => handleDelete(item.id)}
              >
                <MdDelete className="delete-icon" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddTocart;
