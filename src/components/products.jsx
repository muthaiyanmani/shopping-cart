import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Tab, Transition } from "@headlessui/react";
import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const products = [
  {
    id: 1,
    name: "Zip Tote Basket",
    color: "White and black",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700"
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500"
      }
    ]
  },
  {
    id: 2,
    name: "Zip Tote Basket",
    color: "White and black",
    rating: 2,
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700"
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500"
      }
    ]
  }
  // More products...
];

const product = {
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright."
    }
    // More images...
  ],

  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant"
      ]
    }
    // More sections...
  ]
};

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});

  const openModal = (product) => {
    setProduct(product);
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Latest Products</h2>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-full p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <main className="mx-auto bg-white rounded-lg max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
                    <div className="max-w-2xl mx-auto lg:max-w-none">
                      {/* Product */}
                      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Image gallery */}
                        <Tab.Group as="div" className="flex flex-col-reverse">
                          <Tab.Panels className="w-full aspect-h-1 aspect-w-1">
                            <Tab.Panel>
                              <Image
                                src={product.imageSrc}
                                alt={"product preview"}
                                width={200}
                                height={200}
                                className="object-cover object-center w-full h-full sm:rounded-lg"
                              />
                            </Tab.Panel>
                          </Tab.Panels>
                        </Tab.Group>

                        {/* Product info */}
                        <div className="flex flex-col items-center justify-center">
                          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            {product.name}
                          </h1>

                          <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">
                              {product.price}
                            </p>
                          </div>

                          {/* Reviews */}
                          <div className="mt-3">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                              <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                  <StarIcon
                                    key={rating}
                                    className={classNames(
                                      product.rating > rating
                                        ? "text-indigo-500"
                                        : "text-gray-300",
                                      "h-5 w-5 flex-shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                              <p className="sr-only">
                                {product.rating} out of 5 stars
                              </p>
                            </div>
                          </div>

                          <div className="mt-6">
                            <h3 className="sr-only">Description</h3>

                            <div
                              className="space-y-6 text-base text-gray-700"
                              dangerouslySetInnerHTML={{
                                __html: product.description
                              }}
                            />
                          </div>

                          <div className="flex mt-10">
                            <button
                              type="submit"
                              className="flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                            >
                              Add to bag
                            </button>

                            <button
                              type="button"
                              className="flex items-center justify-center px-3 py-3 ml-4 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500"
                            >
                              <HeartIcon
                                className="flex-shrink-0 w-6 h-6"
                                aria-hidden="true"
                              />
                              <span className="sr-only">Add to favorites</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        <div className="grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
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
                  onClick={() => openModal(product)}
                  className="relative flex items-center justify-center w-full px-8 py-2 text-sm font-medium text-gray-900 bg-gray-100 border-2 border-transparent border-gray-400 rounded-md hover:bg-gray-200"
                >
                  Add to bag<span className="sr-only">, {product.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
