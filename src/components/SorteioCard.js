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

        <div className=" place-self-center m-4 rounded-md shadow-xl  text-white text-center">

            <Link href="/sorteios/[id]" as={`/sorteios/${rifa.id}`}>
                <button className="p-2">
                    <img className="" src={API_URL + rifa.img_sorteio_page.formats.small.url} />
                </button>
            </Link>


        </div>
    )
}

export default SorteioCard