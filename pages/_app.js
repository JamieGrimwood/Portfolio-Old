import Router from 'next/router';
import NProgress from 'nprogress';
import Link from 'next/link'
import Head from 'next/head'
import { AnimateSharedLayout } from "framer-motion"

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
      </Head>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  )
}
