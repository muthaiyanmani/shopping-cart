import Footer from "@/components/footer";
import Header from "@/components/header";
import { useCart } from "@/context/cart-context";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  const { products, removeProductFromCart } = useCart();
  return (
    <>
      <Header />
      <h2 className="px-4 my-4 text-xl font-bold">My Cart</h2>
      <div >
        {products?.length ? (
          <div className="flex justify-evenly">
            <div className="grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id}>
                  <div className="relative cursor-pointer">
                    <div className="relative w-full overflow-hidden rounded-lg h-72">
                      <Image
                        height={300}
                        width={300}
                        src={product.Image_Url || '/assets/no-product-image.jpg'}
                        alt={product.imageAlt}
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        {product.Product_Name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <div className="absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden rounded-lg h-72">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black"
                      />
                      <p className="relative text-lg font-semibold text-white">
                       {product?.$currency_symbol} {product.Unit_Price}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => removeProductFromCart(product.id)}
                      className="relative flex items-center justify-center w-full px-8 py-2 text-sm font-medium text-gray-900 bg-gray-200 border-2 border-transparent border-gray-400 rounded-md"
                    >
                      Remove from bag
                      <span className="sr-only">, {product.name}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <section
              aria-labelledby="summary-heading"
              className="px-4 py-6 mt-16 rounded-lg w-96 bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            >
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Order summary
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">$99.00</dd>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping estimate</span>
                    <a
                      href="#"
                      className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Learn more about how shipping is calculated
                      </span>
                      <QuestionMarkCircleIcon
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <dt className="flex text-sm text-gray-600">
                    <span>Tax estimate</span>
                    <a
                      href="#"
                      className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Learn more about how tax is calculated
                      </span>
                      <QuestionMarkCircleIcon
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">$8.32</dd>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    $112.32
                  </dd>
                </div>
              </dl>

              <div className="mt-10">
                <Link href="/checkout"
                  className="inline-block px-4 py-3 text-sm font-medium text-center text-white bg-blue-600 border border-transparent rounded-md shadow-sm w-80 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Checkout
                </Link>
              </div>
            </section>
          </div>
        ) : (
          <h3 className="text-2xl font-bold text-center">No items in cart</h3>
        )}
      </div>
      <Footer />
    </>
  );
}
