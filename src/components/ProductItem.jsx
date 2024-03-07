import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { productData } from "../ProductData";
import Home from "../pages/Home";

export function ProductItem({ productObj }) {
  // const { id } = useParams();
  const { id, productName, price, photoName, soldOut } = productObj;
 
  // bg-slate-200

  return (
    <li className="product">
      <div className="product-card w-72 p-2.5 rounded-lg flex flex-col relative items-center bg-white">
        <div className="product-card-img">
          <img src={photoName} alt={photoName} className="w-48 h-64 my-8"/>
        </div>
        <div className="product-card-details w-full h-16 text-center my-4">
          <h2 className="font-bold">{productName}</h2>
        </div>
        <div className="product-card-buy relative bottom-0 w-11/12 text-center h-28">
          <div className="product-price w-full h-8 bg-price-green rounded-xl absolute bottom-10">
            <span id="full" className="align-middle text-white font-bold">
              R$ {price}
            </span>
            
          </div>
          <div className="product-buy-now">
            <Link
              to={`${id}?name=${productName}?price=${price}`}
              className="w-full h-8 font-bold rounded-xl absolute bottom-0 left-0 text-white hover:opacity-50 items-center bg-theme-red"
            >
              Ver Mais
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
