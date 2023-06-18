"use client";

import ProductCart from "@/src/models/ProductCart";
import Image from "next/image";
import Price from "../atom/Price";
import Link from "next/link";
import { useAppDispatch } from "@/src/store/hooks";
import { removeItemFromCart } from "@/src/store/cart-slice";
import CrossX from "../icons/CrossX";

export type ProductCartItemProps = {
  product: ProductCart;
};

export default function ProductCartItem({ product }: ProductCartItemProps) {
  const dispatch = useAppDispatch();

  function handleRemoveProduct() {
    dispatch(removeItemFromCart(product));
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      <div className="flex flex-col md:flex-row gap-4">
        <Image
          src={product.images[0].src}
          className="rounded w-full"
          alt={product.images[0].alt}
          width={260}
          height={260}
        />
        <div className="flex justify-between mb-8">
        <div className="flex gap-3 self-start flex-col">
          <Link className="hover:underline" href={"/products/" + product.slug}>
            {product.name}
          </Link>
          {product.variantsSelected &&
            Object.entries(product.variantsSelected).map((variant, key) => (
              <div key={key}>
                <span>
                  {variant[0]}: {variant[1]}
                </span>
              </div>
            ))}
          <span>Quantity: {product.quantity}</span>
          <span className="text-xl">
            <Price price={product.price} currency={product.currency} />
          </span>
        </div>
        <button onClick={handleRemoveProduct} className="mr-4 self-start">
            <CrossX />
            <span className="sr-only">Remove product from cart</span>
          </button>
        </div>

      </div>
    </div>
  );
}
