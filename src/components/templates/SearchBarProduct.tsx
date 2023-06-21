"use client";
import ProductSearchEngine from "@/src/lunr/ProductSearchEngine";
import SearchBar, { SearchBarRef } from "../organism/SearchBar";
import { createRef, useState } from "react";
import ProductProvider from "@/src/providers/ProductProvider";
import Product from "@/src/models/Product";
import SearchBarProductItem from "../organism/SearchBarProductItem";

export default function SearchBarProduct() {
  const searchEngine = new ProductSearchEngine();
  const productProvider = new ProductProvider();
  const [products, setProducts] = useState<Product[]>([]);
  const searchBarRef = createRef<SearchBarRef>();

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    const query = target.value;
    const results = searchEngine.search(query);
    const productsResult: Product[] = results
      .map((result) => productProvider.byName(result.ref))
      .filter((product) => product !== undefined) as Product[];
    setProducts(productsResult);
    searchBarRef?.current?.open();
  }


  return (
    <SearchBar handleChange={handleChange} ref={searchBarRef}>
      <div>
        {products.map((product) => (
            <SearchBarProductItem onClickHandler={() => searchBarRef?.current?.close()} key={product.id} product={product} />
        ))}
      </div>
    </SearchBar>
  );
}
