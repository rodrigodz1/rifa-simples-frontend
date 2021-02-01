import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Dream Draw - Faça sua aposta</title>
        <link rel="icon" href="/clover.svg" />
      </Head>
      <div className="grid grid-cols-3 border border-black px-4 bg-black">
        <div className="text-white text-xl rounded-md justify-self-center">
          <img className="max-h-16 pr-6" src="images/fingers.svg" href="/" />
        </div>

        <div className="text-white text-xl rounded-md pt-5 justify-self-center">
          <a className="rounded-md hover:text-red-500 px-2" href="/">Sorteios</a>
        </div>

        <div className="text-white text-xl rounded-md pt-5 justify-self-center">
          <a className="rounded-md hover:text-red-500 px-2" href="/">Instagram</a>
        </div>
      </div>
    </div>

  )
}
