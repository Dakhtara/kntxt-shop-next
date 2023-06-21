import Product from "../models/Product";
import ProductProvider from "../providers/ProductProvider";
import lunr from "lunr";

export default class ProductSearchEngine {
    products: Product[];
    index;
    constructor() {
        this.products = new ProductProvider().findAll();
        const products = this.products;
        this.index = lunr(function () { 
            this.ref("name");
            this.field("name");
            this.field("description");

            products.forEach((product) => {
                this.add(product)
            })
        })
    }

    search(query: string) {
        return this.index.search(query);
    }
}