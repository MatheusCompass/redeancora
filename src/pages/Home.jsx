import React from "react";
import { ProductItem } from "../components/ProductItem";
import { productData } from "../ProductData";
import { useSearchContext } from "../App";

export default function Home() {
  const { search } = useSearchContext();

  const produtoLowerCase = search.toLowerCase();

  const produtoFiltrado = productData.filter((produto) =>
    produto.productName.toLowerCase().includes(produtoLowerCase)
  );

  return (
    <div>
      <ul className="products-list justify-center my-20">
        {produtoFiltrado.map((product) => (
          <ProductItem productObj={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}
