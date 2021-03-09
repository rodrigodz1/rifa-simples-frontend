import Head from 'next/head'
import Header from '../src/components/Header'
import Content from '../src/components/Content'
import Footer from '../src/components/Footer'
import React from 'react'
import Slider from 'react-slick';

function Home({ rifas }) {
  const { API_URL } = process.env

  const images = []
  rifas.map(item => {
    images.push(item.image.formats.thumbnail.url)
  })

  const carrousel = images.map(function (img) {
    return <div className="mt-2">
      <img className="" src={`${API_URL}${img}`} width={400} height={700} />
    </div>
  })

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="">
      <Head>
        <title>Dream Draw - Faça sua aposta</title>
        <link rel="icon" href="/clover.svg" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

      </Head>
      <Header name="SORTEIOS" link="sorteios" />
      <div className="bg-gray-800 mx-1 ">
        <Slider {...settings}>
          {carrousel}
        </Slider>
      </div>
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

