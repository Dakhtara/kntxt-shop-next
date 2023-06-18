"use client";

import { useAppSelector } from "@/src/store/hooks";
import ProductCartItem from "../organism/ProductCartItem";
import Link from "next/link";
import Button from "../atom/Button";
import Price from "../atom/Price";

export default function CartPageProduct() {
  const cartState = useAppSelector((state) => state.cart);

    function handleCheckout() {
        alert("Checkout not implemented yet");
    }

  function RenderCart() {
    const shippingPrice = 8.99
    const totalPrice = cartState.products.reduce(
      (total, product) => total + (product.price * product.quantity),
      0
    ) + shippingPrice;
    return (
      <div className="grid md:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-4">
          {cartState.products.map((product) => (
            <div key={product.id}>
              <ProductCartItem product={product} />
            </div>
          ))}
        </div>

        <div>
          <div className="sticky top-2 border rounded p-4 flex flex-col gap-8">
            <div className="flex justify-between">
                <span>Shipping Price</span>
                <Price price={shippingPrice} currency={cartState.products[0].currency} />
            </div>
            <div className="flex justify-between">
              <span>Total Price</span>
              <Price
                price={totalPrice}
                currency={cartState.products[0].currency}
              />
            </div>
            <Button onClick={handleCheckout}>Checkout</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>{cartState.products.length !== 0 ? RenderCart() : EmptyCart()}</div>
  );
}

function EmptyCart() {
  return (
    <div>
      <p>
        Your cart is empty.{" "}
        <Link className="text-sky-300 hover:text-sky-500" href="/">
          Go to the homepage to find products
        </Link>
        .
      </p>
    </div>
  );
}
