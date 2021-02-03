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

      <body className="flex flex-col">

        <div className="flex justify-between px-20 bg-black shadow-xl">
          <img className="max-h-16 max-w-16 justify-self-center" src="images/fingers.svg" href="/" />
          <a className="transition duration-300 text-white text-xl py-4 tracking-wide font-bold uppercase hover:text-yellow-400 border-b-4 border-black hover:border-yellow-400" href="/">Sorteios</a>
          <a className="transition duration-300 text-white text-xl py-4 tracking-wide font-bold uppercase border-b-4 border-black hover:border-gray-400" href="/">Instagram</a>
        </div>

        <div className="h-screen bg-gray-200">
          Conteúdo
		    </div>

        <div className="w-full text-center p-8 bg-black">
          <div className="text-white">well thats the footer... for now :)</div>
        </div>

      </body>

    </div>

  )
}
