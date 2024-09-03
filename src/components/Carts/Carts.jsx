import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../fetures/cartSlice"; // Adjust the path as necessary
import "./Carts.css";

const Carts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const options = {
    method: "GET",
    url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
    params: {
      country: "us",
      lang: "en",
      currentpage: "0",
      pagesize: "30",
      categories: "men_all",
      concepts: "H&M MAN",
    },
    headers: {
      "x-rapidapi-key": "f8eaa1122emsh4fac7f9b736d3efp168c18jsn88afb465ec79",
      "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setData(response.data.results);
        // console.log(response.data);
        // Assuming the data is in response.data.results
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    console.log("Cart items:", cart);
  }, [cart]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="cards">
        {data.slice(0, 20).map((item, index) => (
          <div className="mycard" key={index}>
            <img src={item.images[0].url} alt={item.name} />
            <div className="content">
              <h3>{item.name}</h3>
              <p>{index + 1}</p>
              <p>{item.price.formattedValue}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carts;
