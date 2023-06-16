import ProductProvider from "@/providers/ProductProvider";
import ProductCard from "../card/ProductCard";

export type SectionProductCollectionProps = {
    title: string;
    collection: string;
}

export default function SectionProductCollection({title, collection}: SectionProductCollectionProps)
{
    const productProvider = new ProductProvider();

 return (
    <div className="flex flex-col gap-4">
    <h2 className="text-2xl">{title}</h2>
    <div className="grid gap-4 grid-cols-4">
    {productProvider.byCollection(collection).map((product) => (
      <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
 )   
}