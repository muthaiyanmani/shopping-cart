import Footer from "@/components/footer";
import Header from "@/components/header";
import Products from "@/components/products";
import axios from "axios";
import { useEffect } from "react";

export default function Shop() {
  useEffect(() => {
    axios.get("/api/mail").then((res) => console.log(res));
  }, []);
  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
}
