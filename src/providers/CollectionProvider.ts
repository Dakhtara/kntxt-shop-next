import productData from "@/src/data/products.json";


export default class CollectionProvider {

    findAll() {
        const collections = productData.map(product => product.collection);
        //remove duplicates
        return collections.filter((collection, index) => collections.indexOf(collection) === index);
    }
}