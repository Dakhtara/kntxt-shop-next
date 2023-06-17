"use client";

import { useAppSelector } from "@/src/store/hooks";
import ShoppingCartIcon from "../icons/ShoppingCart";
import Link from "next/link";

export default function HeaderCart() {
  const count = useAppSelector((state) => state.cart.products.length);

  return (
    <div>
      <Link className="flex relative items-center gap-2" href="/cart">
        <span className="absolute text-xs -top-2 -right-4 bg-sky-500 rounded p-1">
          {count}
        </span>
        Cart
        <ShoppingCartIcon width={16} height={16} />
      </Link>
    </div>
  );
}
