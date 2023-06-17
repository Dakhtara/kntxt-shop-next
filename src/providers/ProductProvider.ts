import productData from "@/src/data/products.json";
import Product from "@/src/models/Product";


export default class ProductProvider {

    findAll(): Product[] {
        return productData;
    }

    byCollection(collection: string): Product[] {
        return productData.filter(product => product.collection === collection);
    }

    bySlug(slug: string): Product | undefined {
        return productData.find(product => product.slug === slug);
    }
}
