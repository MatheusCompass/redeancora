import React, { createContext, useContext, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import AppLayout from "./AppLayout";
import ProductViewMore from "./pages/ProductViewMore";
import Navbar from "./components/Navbar";

// Criar um contexto para o estado global
const SearchContext = createContext();

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext deve ser usado dentro de um SearchProvider");
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    element: (
      <SearchProvider>
        <AppLayout />
      </SearchProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <ProductViewMore />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
