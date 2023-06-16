import Price from "@/components/macro/Price";
import AddToCartProduct from "@/components/templates/AddToCartProduct";
import Product from "@/models/Product";
import ProductProvider from "@/providers/ProductProvider";
import { nl2br } from "@/utils/NlToBr";
import Image from "next/image";
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
    const description = nl2br(product.description);
    return (
        <main className="container mx-auto">
            <div className="flex gap-8">
            <Image src={product.images[0].src} alt={product.images[0].alt} width={600} height={600} className="rounded" />
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl">{product.name}</h1>
                <span>KNTXT SHOP BY CHARLOTTE DE WITTE</span>
                <Price price={product.price} currency={product.currency} />
                <span>Tax included. Shipping calculated at checkout.</span>
                <AddToCartProduct product={product} />

                <p dangerouslySetInnerHTML={{__html: description}}></p>
            </div>
            </div>
        </main>
    )
}


