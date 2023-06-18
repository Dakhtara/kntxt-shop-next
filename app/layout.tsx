import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Alert from "@/src/components/alert/Alert";
import HeaderCart from "@/src/components/templates/HeaderCart";
import { Providers } from "@/src/store/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FAKE KNTXT Shop",
  description: "Recreation of the KNTXT Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black/90 text-white"}>
        <Providers>
          <header className="container flex flex-col items-center justify-between mx-auto mt-8 mb-24">
            <Link href="/">
              <Image
                src={"/kntxt-logo-white.png"}
                alt="KNTXT Logo"
                width={220}
                height={360}
              />
            </Link>
            <span>Search bar</span>
            <div className="flex gap-8">
              <span>Products</span>
              <HeaderCart />
            </div>
          </header>
          <div className="container mx-auto">
            <Alert>
              Welcome on the KNTXT Shop website. <br />
              This website is not the official website, it is just to learn and
              train on NextJS website.
              <br />
              If you want to order on the official website please go to{" "}
              <a className="text-sky-300" href="https://kntxt.shop/">
                https://kntxt.shop/
              </a>
              <br />
              No data is persisted, when you hard refresh the page, the cart is
              reset.
            </Alert>
          </div>

          {children}

          <footer className="container mx-auto my-24">
            <span className="text-sm text-gray-400">
              Website made with Next.js, TailwindCSS and TypeScript
            </span>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
