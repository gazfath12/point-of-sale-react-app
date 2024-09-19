import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("/form.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
        saveProductsToLocalStorage(data);
      });
    console.log("useEffect Hook is called");
  }, []);
  const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(cart);
    }
    return [];
  };

  const saveCartToLocalStorage = (arg) => {
    localStorage.setItem("cart", JSON.stringify(arg));
  };

  const getProductsFromLocalStorage = () => {
    const products = localStorage.getItem("products");
    if (products) {
      return JSON.parse(products);
    }
    return [];
  };

  const saveProductsToLocalStorage = (arg) => {
    localStorage.setItem("products", JSON.stringify(arg));
  };

  function addToOrder(id) {
    console.log(id)
    const products = getProductsFromLocalStorage();
    const cart = getCartFromLocalStorage();
    const productSelected = products.find((product) => product.id === id);
    const existingProduct = cart.some((product) => product.id === id);
    if (existingProduct) {
      productSelected.counter++;
      alert("produk sudah ada di cart")
    } else {
      cart.push({
        id: id,
        counter: 1,
        img: productSelected.img,
        title: productSelected.title,
        price: productSelected.price,     
      });
      alert("produk msuk")
    }
    saveCartToLocalStorage(cart);
  }
  return (
    <div className="flex mt-10 ml-4 mr-5 flex-wrap flex-col ">
      <div className=" max-h-[410px]  flex flex-wrap flex-row overflow-y-scroll">
        {product.map((product, index) => {
          return (
            <div
              className=" gap-5 mb-9 flex-col w-[30%] flex flex-wrap m-2"
              id="card"
              key={product.id}
            >
              <button
                id="button"
                className="flex flex-col  items-center p-4 w-[100%] hover:scale-105 transition-transform bg-white"
                onClick={() => addToOrder(product.id)}
              >
                <div className="w-full h-44flex justify-center items-center  ">
                  <img
                    src={product.img}
                    alt=""
                    id="picture"
                    className="object-cover max-h-full "
                  />
                </div>
                <div className="pb-2">
                  <h2 id="title" className=" pt-5 font-bold text-xl">
                    {product.title}
                  </h2>
                  <p id="para" className="text-xs pt-2 font-semibold">
                    {" "}
                    {product.descripsi}
                  </p>
                  <hr />
                  <h2 id="price" className="text-center text-xl pt-2 font-bold">
                    Rp {product.price}
                  </h2>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
