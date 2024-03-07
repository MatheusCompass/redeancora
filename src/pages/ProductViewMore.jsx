import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductItem } from "../components/ProductItem";
import { productData } from "../ProductData";
import { BsCartFill } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { SlMagnifier } from "react-icons/sl";
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

export default function ProductViewMore({ productObj }) {
  const { id } = useParams();

  //   const { id } = productObj;
  // console.log(Id do produto: ${id});

  //TEMP DATA
  const currentProduct = productData[id - 1];

  const { productName, price, productDesc, photoName, photoView } =
    currentProduct;
  // console.log(productData)

  return (
    <>
      <div className="product-detail-container flex flex-row  bg-white rounded-md  mx-auto my-28 w-11/12">
        <div className="left-detail-container w-7/12  flex items-center justify-center rounded-md">
          <img src={`../${photoName}`} alt="" className="w-10/12" />
        </div>
        <div
          className="right-detail-container w-5/12 bg-gray-500 text-white
        flex flex-col p-10"
        >
          <div className="right-detail-name w-full text-3xl mb-28">
            <h2>{productName}</h2>
          </div>
          <div className="product-right-specs h-full">
            <p>{productDesc}</p>
          </div>
          <div className="product-right-purchase flex flex-col mb-4">
            <span className="bg-price-green rounded-lg h-10 font-extrabold flex items-center justify-center mb-5">
              R$ {price}
            </span>
            <button className=" rounded-lg h-10 font-bold uppercase hover:opacity-50 bg-theme-red">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
