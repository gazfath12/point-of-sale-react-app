import React from "react";

const Carts = () => {
  const getProductsFromLocalStorage = () => {
    const products = localStorage.getItem("products");
    if (products) {
      return JSON.parse(products);
    }
    return [];
  };

  return <div></div>;
};

export default Carts;
