"use client";

import Product from "@/src/models/Product";
import Button from "../atom/Button";
import Select from "../atom/Select";
import { addItemToCart } from "@/src/store/cart-slice";
import { useAppDispatch } from "@/src/store/hooks";
import Toast from "../organism/Toast";
import { useState } from "react";

export default function AddToCartProduct({ product, onAdd }: { product: Product, onAdd?: () => void }) {
  const dispatch = useAppDispatch();
  const [toastShown, setToastShown] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    dispatch(addItemToCart({ ...product, variantsSelected: formJson }));
    setToastShown(true);
    setTimeout(() => {
      setToastShown(false);
  }, 3000);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {ProductWithVariants({ product })}
      <Button>Add to cart</Button>
      <Toast show={toastShown}>
        <p>Product added to cart</p>
      </Toast>
    </form>
  );
}

function ProductWithVariants({ product }: { product: Product }) {
  if (!product.variants) {
    return null;
  }
  return (
    <div>
      {product.variants.map((variant) => (
        <Select
          key={variant.name}
          label={variant.name}
          options={variant.values}
        />
      ))}
    </div>
  );
}
