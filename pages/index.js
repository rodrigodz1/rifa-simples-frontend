import Head from 'next/head'
import Header from '../src/components/Header'
import Content from '../src/components/Content'

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

      </body>

    </div>

  )
}
