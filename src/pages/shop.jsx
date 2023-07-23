import { getProducts } from "@/client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Products from "@/components/products";
import axios from "axios";
import { useEffect } from "react";

export default function Shop() {
  useEffect(() => { 

    getProducts().then(({ data }) => console.log(data));
  }, []);

 
  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
};
