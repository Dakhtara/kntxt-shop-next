import Product from "@/src/models/Product";
import Image from "next/image";
import Price from "../atom/Price";
import Link from "next/link";

export type ProductCardProps = {
    product: Product;
}
export default function ProductCard({product}: ProductCardProps)
{
    return (
        <div className="group">
            <Link href={`/products/${product.slug}`}>
            <Image className="rounded" src={product.images[0].src} alt={product.images[0].alt} width={260} height={260} />
            <p className="group-hover:underline mt-2">{product.name}</p>
            <Price className="group-hover:underline mt-1" price={product.price} currency={product.currency} />
            </Link>
        </div>
    );
}