import Product from "@/models/Product";
import Image from "next/image";
import Price from "../macro/Price";

export type ProductCardProps = {
    product: Product;
}
export default function ProductCard(props: ProductCardProps)
{

    return (
        <div>
            <Image src={props.product.images[0].src} alt={props.product.images[0].alt} width={260} height={260} />
            <p>{props.product.name}</p>
            <Price price={props.product.price} currency={props.product.currency} />
        </div>
    );
}