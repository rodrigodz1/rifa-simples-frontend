import Link from "next/link"
import React, { useState } from 'react'

function SorteioCard({ rifa }) {
    const { API_URL } = process.env

    const [gotClicked, setGotClicked] = useState(false)

    const Loader = () => {
        return (
            <div className="text-white w-20">
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

        <div className="border border-black place-self-center m-4 p-4 rounded-md shadow-xl  text-white text-center">
            <p className="font-bold">{rifa.name}</p>
            <img className="" src={API_URL + rifa.image.formats.thumbnail.url} />
            <button onClick={handleClick}>
                <Link href="/sorteios/[id]" as={`/sorteios/${rifa.id}`}>
                    <a className="font-bold text-yellow-300">Ver informações</a>

                </Link>
            </button>
            {
                gotClicked ? <Loader /> : null
            }

        </div>
    )
}

export default SorteioCard