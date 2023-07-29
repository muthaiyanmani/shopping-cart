import { getProducts } from "@/client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Products from "@/components/products";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Shop() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => { 
    async function fetchData() {
      const { data } = await getProducts();
      setProducts(data?.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);
 
  return (
    <>
      <Header />
      {isLoading ? <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="inline-block text-xl font-bold">Fetching products...</h2>
        <br/>
        <Image src={'/assets/products-fetching.png'} width={150} height={150} alt="fetching image" />
      </div> : <Products products={products} />}
      <Footer />
    </>
  );
};

export function getServerSideProps() {
  console.log("shop page :::", process.pid, process.ppid, {globalThis}, process.uptime());
  return {
    props: {
      title: 'Shop'
    }
  }
}