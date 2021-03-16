import Image from 'next/image'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import fetch from 'isomorphic-unfetch'
import SorteioCard from '../../src/components/SorteioCard'

import React from 'react'


function Content({ rifas }) {



    return (
        <div className="font-montserrat">


            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
                <Header sorteios="/sorteios" />
                <div className="grid grid-cols-1 justify-center">
                    {
                        rifas.map(rifa => (
                            <SorteioCard key={rifa.id} rifa={rifa} />
                        ))

                    }
                </div>
                <div className="w-full absolute bottom-0"><Footer /></div>
            </div>


        </div>

    )
}

export async function getServerSideProps() {
    const { API_URL } = process.env
    const res = await fetch(`${API_URL}/rifas`)

    const data = await res.json()

    return {
        props: {
            rifas: data,
        }
    }
}

export default Content;