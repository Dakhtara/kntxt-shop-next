import ProductImage from "./ProductImage";
import ProductVariant from "./ProductVariant";

export default interface Product {
    id: number;
    name: string;
    collection: string;
    price: number;
    currency: string;
    description: string;
    varitans?: ProductVariant[];
    images: ProductImage[];
}