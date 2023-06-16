import Product from "@/models/Product";
import ProductProvider from "@/providers/ProductProvider";
import {notFound} from "next/navigation";

export async function generateStaticParams() {
    const productProvider = new ProductProvider();
    const productsSlug = productProvider.findAll().map((product) => ({slug: product.slug}));

    return productsSlug;
}

async function getData(slug: string): Promise<Product> {
    const product = new ProductProvider().bySlug(slug);

    if (!product) {
        notFound();
    }

    return product;
}

export default async function Product({params}: {params: {slug: string}}) {
    const product = await getData(params.slug);

    return (
        <main className="container mx-auto">
            <h1 className="text-2xl">{product.name}</h1>
        </main>
    )
}