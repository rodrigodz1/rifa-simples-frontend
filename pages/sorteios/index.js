import Image from 'next/image'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import fetch from 'isomorphic-unfetch'
import SorteioCard from '../../src/components/SorteioCard'

import React from 'react'


function Content({ rifas }) {



    return (
        <div className="font-montserrat">


            <div className="tablet:absolute tablet:inset-0  bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
                <Header sorteios="/sorteios" />
                <div className="grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-5">
                    {
                        rifas.map(rifa => (
                            <SorteioCard key={rifa.id} rifa={rifa} />
                        ))

                    }
                </div>

            </div>

            <div className="tablet:absolute tablet:bottom-0 w-full"><Footer /></div>
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