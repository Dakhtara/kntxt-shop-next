import ProductCart from "@/src/models/ProductCart";
import Image from "next/image";
import Price from "../atom/Price";
import Link from "next/link";

export type ProductCartItemProps = {
    product: ProductCart;
}

export default function ProductCartItem({product}: ProductCartItemProps) {
    return (
        <div className="flex gap-4">
            <Image src={product.images[0].src} className="rounded" alt={product.images[0].alt} width={260} height={260} />
            <div className="flex gap-3 flex-col">
                <Link className="hover:underline" href={"/products/" + product.slug}>{product.name}</Link>
                {product.variantsSelected && Object.entries(product.variantsSelected).map((variant, key) => (
                    <div key={key}>
                        <span>{variant[0]}: {variant[1]}</span>
                    </div>
                ))}
                <span>Quantity: {product.quantity}</span>
                <span className="text-xl"><Price price={product.price} currency={product.currency} /></span>
            </div>
        </div>
    )
}