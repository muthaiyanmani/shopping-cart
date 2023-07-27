import { getProducts } from "@/client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Products from "@/components/products";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Shop({ title }) {
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
      <h1>Title {title}</h1>
    </>
  );
};

export function getServerSideProps() {
  console.log("shop page :::", process.pid, process.ppid, {globalThis}, process.uptime());
  return {
    props: {
      title: globalThis.catalyst
    }
  }
}