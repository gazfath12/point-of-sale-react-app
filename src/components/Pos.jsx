import React from "react";
import { CiSearch } from "react-icons/ci";
import Products from "./Products";
const Pos = () => {
  return (
    <div className="flex flex-row  p-0 m-0 overflow-hidden max-h-[650px]">
      <div className="container flex flex-col w-[65%] bg-gray-300">
        <div className="justify-around flex mb-7">
          <div className="text-left p-10">
            <h1 className="text-4xl font-bold">Welcome, Gorry</h1>
            <p className="pt-3">Discover Whatever You Need Easily</p>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search product..."
              className="px-2 bg-cyan-100 p-2 pl-6 pr-5"
            />
            <CiSearch className="mr-10 absolute ml-1" />
          </div>
        </div>
        <div className="flex gap-10 justify-center p-2">
          <a
            href=""
            className="bg-orange-500 p-2 rounded-md px-6 hover:bg-orange-300 text-white"
          >
            Mewing
          </a>
          <a
            href=""
            className="bg-orange-500 p-2 rounded-md px-6 hover:bg-orange-300  text-white"
          >
            Sigma
          </a>
          <a
            href=""
            className="bg-orange-500 p-2 rounded-md px-6  hover:bg-orange-300  text-white"
          >
            Rizzz
          </a>
          <a
            href=""
            className="bg-orange-500 p-2 rounded-md px-6  hover:bg-orange-300 text-white"
          >
            Skibidi
          </a>
          <a
            href=""
            className="bg-orange-500 p-2 rounded-md px-6  hover:bg-orange-300  text-white"
          >
            Gyyat
          </a>
        </div>
        {/* ini bekas masa lalu*/}
        <Products />
      </div>
      <div className="flex w-[35%] flex-col min-h-screen fixed right-0 top-0 gap-y-5 py-12 justify-between px-5">
        <div className="flex gap-y-5 flex-col overflow-y-scroll max-h-[400px] ">
        <h1 className="text-4xl mt-5 gap-10">Current Order</h1>
          <div className="bg-cyan-100 flex w-full p-0 pb-5">
            <div className="ml-10 mt-5 w-[20%] flex jus">
              <img src="" alt="" className="w-[70%]" />
            </div>
            <div className="w-4/5 flex flex-col justify-evenly ml-5">
              <div className="w-1/2 flex ">
                <h1>Mixue Coffea</h1>
              </div>
              <div className="flex justify-between ">
                <p>20.000</p>
                <div className="flex flex-row gap-2 justify-between pl-10 pr-10">
                  <button className="bg-gray-300 px-2">-</button>
                  <strong>1</strong>
                  <button className="bg-gray-300 px-2">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="bg-slate-100 p-10">
            <div className="flex justify-between">
              <h1 className="text-4xl">Total:</h1>
              <h2 className="text-3xl">Rp 20.000</h2>
            </div>
          </div>
          <div className="bg-orange-400 p-3  hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 border-r-4">
            <button className="">
              Continue To Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pos;
