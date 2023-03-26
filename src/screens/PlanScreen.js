import React, { useState } from "react";
import "./PlanScreen.css";

const PlanScreen = () => {
  const [products, setProducts] = useState([
    {
      product: "Basic",
      description: "720p + 1 Screen Acess",
      price: "$7.99/month",
    },
    {
      product: "Standard",
      description: "1080p + 2 Screen Acess",
      price: "$11.99/month",
    },
    {
      product: "Premium",
      description: "4k & HDR + 4 Screen Acess",
      price: "$17.99/month",
    },
  ]);
  return (
    <div className="planScreen">
      {products.map((product) => {
        return (
          <div className="planScreen__plan">
            <div className="planScreen__info">
              <h5>{product.product}</h5>
              <h6>{product.description}</h6>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                alert(`You are now a ${product.product} user`);
              }}
            >
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlanScreen;
