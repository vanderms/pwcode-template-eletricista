import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from 'components/navbar/navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>André Soares Eletricista</title>
        <meta name="description" content="Generated by create next app" />        
      </Head>
      <Navbar />
      <main style={{height: '200vh', background: 'grey'}}></main>

    </>
  )
}

export default Home
