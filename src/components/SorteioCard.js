import Link from "next/link"
import React, { useState } from 'react'

function SorteioCard({ rifa }) {
    const { API_URL } = process.env

    const [gotClicked, setGotClicked] = useState(false)

    const Loader = () => {
        return (
            <div className="text-white text-center w-20">
                Carregando...
                <svg className=" animate-spin h-5 w-5 mr-3">
                    <circle cx="1" cy="1" r="4" stroke="white" stroke-width="5" fill="none" />
                </svg>
            </div>
        )
    }

    function handleClick() {
        setGotClicked(true)
    }

    return (

        <div className=" place-self-center m-4 rounded-md shadow-xl  text-white text-center">

            <Link href="/sorteios/[id]" as={`/sorteios/${rifa.id}`}>
                <button disabled={rifa.status === 'open' ? false : true} onClick={rifa.status === 'open' ? handleClick : null} className="">
                    <img className="" src={API_URL + rifa.img_sorteio_page.formats.small.url} />

                </button>

            </Link>
            <Link href="/sorteios/[id]" as={`/sorteios/${rifa.id}`}>
                {rifa.status === 'open' ? <button onClick={handleClick} className="bg-green-500 text-white p-2 rounded-md">COMPRAR</button> : <button disabled={true} className="bg-red-500 text-white p-2 rounded-md">CONCLUÍDA</button>}

            </Link>
            {
                gotClicked ? <Loader /> : null
            }

        </div >
    )
}

export default SorteioCard