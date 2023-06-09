import Head from 'next/head'
import Header from './components/Header'
import Home from './components/Home'
import Listing from './components/Listing'
import Footer from './components/Footer'




export default function Main() {
  return (
    <>
      <Head>
        <title>GT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Home />

      <Listing />
      <Footer></Footer>
    </>
  )
}
