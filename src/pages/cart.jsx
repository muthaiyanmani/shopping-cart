import Footer from "@/components/footer";
import Header from "@/components/header";
import { useCart } from "@/context/cart-context";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Cart({title}) {
  const { products, removeProductFromCart } = useCart();
  return (
    <>
      <h1>Title {title}</h1>
    </>
  );
}


export function getServerSideProps() {
  console.log("cart page :::", process.pid, process.ppid, {globalThis}, process.uptime());
  return {
    props: {
      title: globalThis.catalyst
    }
  }
}