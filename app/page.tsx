import Alert from "@/components/alert/Alert";
import ProductCard from "@/components/card/ProductCard";
import ProductProvider from "@/providers/ProductProvider";

export default function Home() {

  const productProvider = new ProductProvider();
  const products = productProvider.findAll();

  return (
    <main className="container mx-auto py-24">
      <Alert>
        Welcome on the KNTXT Shop website. <br />
        This website is not the official website, it is just to learn and train
        on NextJS website.
        <br />
        If you want to order on the official website please go to{" "}
        <a className="text-sky-300" href="https://kntxt.shop/">
          https://shop.kntxt.be
        </a>
      </Alert>
      <h1 className="text-4xl">KNTXT Shop</h1>
      <div className="grid gap-4 grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
