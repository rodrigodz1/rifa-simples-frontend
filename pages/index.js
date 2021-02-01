import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Dream Draw - Faça sua aposta</title>
        <link rel="icon" href="/clover.svg" />
      </Head>
      <div className="flex border border-black p-5 justify-around bg-black">
        <div className="text-white">
          <a className="rounded-md hover:bg-gray-700 p-1" href="/">Início</a>
        </div>

        <div className="text-white">
          <a className="rounded-md hover:bg-gray-700 p-1" href="/">Sorteios</a>
        </div>

        <div className="text-white">
          <a className="rounded-md hover:bg-gray-700 p-1" href="/">Instagram</a>
        </div>
      </div>
    </div>

  )
}
