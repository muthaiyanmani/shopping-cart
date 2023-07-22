import Footer from "@/components/footer";
import Header from "@/components/header";
import Products from "@/components/products";
import { useCart } from "@/context/cart-context";
import Image from "next/image";

export default function Cart() {
  const { products, removeProductFromCart } = useCart();
  return (
    <>
      <Header />
      <h2 className="px-4 my-4 text-xl font-bold">My Cart</h2>
      <div className="grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      
        {products?.length ? (
          products.map((product) => (
            <div key={product.id}>
              <div className="relative cursor-pointer">
                <div className="relative w-full overflow-hidden rounded-lg h-72">
                  <Image
                    height={300}
                    width={300}
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden rounded-lg h-72">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    {product.price}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => removeProductFromCart(product.id)}
                  className="relative flex items-center justify-center w-full px-8 py-2 text-sm font-medium text-gray-900 bg-gray-100 border-2 border-transparent border-gray-400 rounded-md hover:bg-gray-200"
                >
                  Remove from bag
                  <span className="sr-only">, {product.name}</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-2xl font-bold text-center">No items in cart</h3>
        )}
      </div>
      <Footer />
    </>
  );
}
