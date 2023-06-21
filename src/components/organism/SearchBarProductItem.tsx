import Product from "@/src/models/Product";
import Image from "next/image";
import Link from "next/link";
import Price from "../atom/Price";

export type SearchBarProductItemProps = {
    product: Product;
    onClickHandler: () => void;
}

export default function SearchBarProductItem({product, onClickHandler}: SearchBarProductItemProps) {

    return (
        <Link onClick={onClickHandler} className="flex hover:bg-gray-800 items-center justify-between gap-4 my-2 py-2 px-2" href={`/products/${product.slug}`}>
            <Image src={product.images[0].src} width={50} height={50} alt={product.name} />
            <span>{product.name}</span>
            <Price price={product.price} currency={product.currency} />
        </Link>
    )
}