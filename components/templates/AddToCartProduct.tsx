"use client";

import Product from "@/models/Product";
import Button from "../macro/Button";
import Select from "../macro/Select";
import { addItemToCart } from "@/store/cart-slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function AddToCartProduct({ product }: { product: Product }) {
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(addItemToCart(product));
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="product" value={product.id} />
      {ProductWithVariants({ product })}
      <Button>Add to cart</Button>
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
