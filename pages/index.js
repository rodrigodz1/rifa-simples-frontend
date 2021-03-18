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
    images.push(item.image.formats.small.url)
  })

  const carrousel = images.map(function (img) {
    return <div className="">
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
    <div className="font-montserrat">

      <Header name="SORTEIOS" sorteios="sorteios" />

      <body className="flex flex-col position-absolute ">
        <div className="bg-gray-800 ">

          <Slider {...settings}>
            {carrousel}
          </Slider>
        </div>
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
  //console.log(data);
  return {
    props: {
      rifas: data,
    }
  }
}

export default Home

