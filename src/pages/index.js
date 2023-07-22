import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Header, { SquigglyLines } from "@/components/header";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div >
        <Header />
        <br />
        <main className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center mt-28 sm:mt-20 background-gradient">
          <h1 className="max-w-4xl py-8 mx-auto text-5xl font-bold tracking-normal text-gray-700 font-display sm:text-7xl">
            Your one-stop destination for all your{" "}
            <span className="relative text-blue-600 whitespace-nowrap">
              <SquigglyLines />
              <span className="relative"> shopping</span>
            </span>{" "}
            needs.
          </h1>
          <h2 className="max-w-xl mx-auto mt-12 text-lg leading-7 text-gray-950 sm:text-gray-600">
            Browse through our diverse range of products, enjoy seamless
            shopping and superior customer service, all from the comfort of your
            home. Start your effortless online shopping journey with us today.
          </h2>
          <Link
            className="px-4 py-3 mt-8 font-medium text-white transition bg-blue-600 rounded-lg sm:mt-10 hover:bg-blue-500"
            href="/shop"
          >
            Start Shopping
          </Link>
          <br />
          <br />
        </main>

        <Footer />
      </div>
    </>
  );
}
