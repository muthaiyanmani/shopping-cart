import { getProducts } from "@/client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Products from "@/components/products";
import axios from "axios";
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
      <Products products={products} />
      <Footer />
    </>
  );
};
