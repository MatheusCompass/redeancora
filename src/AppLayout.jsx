import React from "react";
import { Link, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
import { useSearchContext } from "./App";

export default function AppLayout() {
  const { search, setSearch } = useSearchContext();

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
