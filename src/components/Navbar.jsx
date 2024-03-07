import React from "react";
import { BsCartFill } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useSearchContext } from "../App";

export default function Navbar() {
  const { search, setSearch } = useSearchContext();

  const handleSearch = () => {
    setSearch(search);
  };

  return (
    <div className="nav flex text-neutral-50 justify-around p-8 bg-black items-center">
      <Link to="/">
        <img src="../logo/logoAncora.png" alt="Company Logo" />
      </Link>
      <div className="search flex w-9/12 h-11 justify-center font-bold">
        <input
          type="text"
          placeholder="Pesquise aqui o seu produto"
          className="w-10/12 p-1 mx-5 text-black"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <button onClick={handleSearch}>
          <SlMagnifier className="hover:text-red-500" />
        </button>
      </div>
      <button>
        <BsCartFill className="text-3xl hover:text-red-500" />
      </button>
    </div>
  );
}
