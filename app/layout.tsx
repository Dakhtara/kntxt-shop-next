import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import ShoppingCartIcon from "@/components/icons/ShoppingCart";
import Link from "next/link";
import Alert from "@/components/alert/Alert";

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
        <header className="container flex items-center justify-between mx-auto mt-8 mb-24">
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
            <div className="flex items-center gap-2">
              Cart <ShoppingCartIcon width={16} height={16} />
            </div>
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
              https://shop.kntxt.be
            </a>
          </Alert>
        </div>
        {children}
      </body>
    </html>
  );
}
