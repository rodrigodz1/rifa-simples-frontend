import Head from 'next/head'
import Header from '../src/components/Header'
import Content from '../src/components/Content'
import Footer from '../src/components/Footer'
import React, { useState } from 'react'

function Home({ rifas }) {

  const [currentImage, setCurrentImage] = useState(0)

  const images = []
  rifas.map(item => {
    images.push(item.image.formats.thumbnail.url)
  })
  console.log(images);

  return (
    <div className="">
      <Head>
        <title>Dream Draw - Faça sua aposta</title>
        <link rel="icon" href="/clover.svg" />
      </Head>
      <Header name="SORTEIOS" link="sorteios" />
      <body className="flex flex-col position-absolute">
        <Content />

        <Footer />

      </body>

    </div>

  )

}

export async function getServerSideProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/rifas`)

  const data = await res.json()
  console.log(data);
  return {
    props: {
      rifas: data,
    }
  }
}

export default Home

