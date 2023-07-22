import { useCart } from "@/context/cart-context";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { products } = useCart();
  return (
    <header className="flex items-center justify-between w-full gap-2 px-2 mt-3 xs:flex-row pb-7 sm:px-4">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="https://www.zylker.com/zf-logo-mark%20copy.png"
          width={40}
          height={40}
        />
        <h1 className="ml-2 text-xl font-bold tracking-tight sm:text-3xl">
          Zylker{" "}
          <span className="relative text-blue-600 whitespace-nowrap">
            Bazaar
          </span>
        </h1>
      </Link>

      <div className="flex items-center">
        {/* Search */}
        <Link
          href="/search"
          className="hidden p-2 ml-6 text-gray-400 hover:text-gray-500 lg:block"
        >
          <span className="sr-only">Search</span>
          <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
        </Link>

        {/* Account */}
        <Link href="/account" className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
          <span className="sr-only">Account</span>
          <UserIcon className="w-6 h-6" aria-hidden="true" />
        </Link>

        {/* Cart */}
        <div className="flow-root ml-4 lg:ml-6">
          <Link href="/cart" className="flex items-center p-2 -m-2 group">
            <ShoppingBagIcon
              className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
              {products.length}
            </span>
            <span className="sr-only">items in cart, view bag</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SquigglyLines() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 418 42"
      className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-500/60"
      preserveAspectRatio="none"
    >
      <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
    </svg>
  );
}
