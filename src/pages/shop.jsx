import Footer from "@/components/footer";
import Header from "@/components/header";
import Products from "@/components/products";
import axios from "axios";
import { useEffect } from "react";

export default function Shop() {
 
  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
}
