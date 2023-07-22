import { CartProvider } from "@/context/cart-context";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex flex-col items-center justify-center min-h-screen py-2 mx-auto bg-slate-100 text-gray-950 max-w-7xl">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
