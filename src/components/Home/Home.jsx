import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const Home = () => {
  const settings = {
    infinite: true,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <div className="first">
            <h1>Welcome to Our Fake Store1</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
              eum ipsa? Rem sint ut in non.
            </p>
            <button>
              <Link to={"/carts"}>Go to Products</Link>
            </button>
          </div>
        </div>
        <div className="slide">
          <div className="snd">
            <h1>Welcome to Our Fake Store2</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
              eum ipsa? Rem sint ut in non.
            </p>
            <button>
              <Link to={"/carts"}>Go to Products</Link>
            </button>
          </div>
        </div>
        <div className="slide">
          <div className="thrd">
            <h1>Welcome to Our Fake Store3</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
              eum ipsa? Rem sint ut in non.
            </p>
            <button>
              <Link to={"/carts"}>Go to Products</Link>
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Home;
