import Product from "./Product";

export default interface ProductCart  extends Product {
    quantity: number;
    variantsSelected?: [];
}