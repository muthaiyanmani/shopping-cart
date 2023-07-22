import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex flex-col items-center justify-center min-h-screen py-2 mx-auto text-gray-950 bg-slate-50 max-w-7xl">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
