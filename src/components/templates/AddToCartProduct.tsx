"use client";

import Product from "@/src/models/Product";
import Button from "../atom/Button";
import Select from "../atom/Select";
import { addItemToCart } from "@/src/store/cart-slice";
import { useAppDispatch } from "@/src/store/hooks";

export default function AddToCartProduct({ product }: { product: Product }) {
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    dispatch(addItemToCart({ ...product, variantsSelected: formJson }));
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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