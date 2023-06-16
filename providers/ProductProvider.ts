import productData from "@/data/products.json";
import Product from "@/models/Product";


export default class ProductProvider {

    findAll(): Product[] {
        return productData;
    }
}