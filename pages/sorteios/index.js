import Image from 'next/image'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import fetch from 'isomorphic-unfetch'
import SorteioCard from '../../src/components/SorteioCard'

import React from 'react'


function Content({ rifas }) {

    return (
        <div>
            <Header name="INÍCIO" link="/" />

            <div className="grid grid-cols-1 justify-center">
                {
                    rifas.map(rifa => (
                        <SorteioCard key={rifa.id} rifa={rifa} />
                    ))

                }
            </div>

            <Footer />
        </div>

    )
}

export async function getServerSideProps() {
    const { API_URL } = process.env
    const res = await fetch(`${API_URL}/rifas`)

    const data = await res.json()

    return {
        props: {
            rifas: data
        }
    }
}

export default Content;