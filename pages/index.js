import Head from 'next/head'
import Header from '../src/components/Header'
import Content from '../src/components/Content'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Dream Draw - Faça sua aposta</title>
        <link rel="icon" href="/clover.svg" />
      </Head>

      <body className="flex flex-col position-absolute">

        <Header />

        <Content />

        <Footer />

      </body>

    </div>

  )
}
