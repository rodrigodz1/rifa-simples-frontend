import Image from 'next/image'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

import React, { useState } from 'react'


function Content({ raffles }) {

    return (
        <div>
            <Header name="INÍCIO" link="/" />
            <div className="h-screen bg-gray-400">
                <div className="text-center my-1">
                    <Image className="rounded-md" src="/images/bmw2.png" width={1300} height={300} />
                </div>

                <div className="grid grid-cols-3 mx-6">
                    {(raffles.data).map(({ id, name, date }) => (
                        <ul className="border border-black text-center m-2">
                            {date}
                            <li className="border-t border-black"> {name} </li>

                        </ul>
                    ))}


                </div>

                <div className="border border-black text-center my-20">Como funciona</div>
            </div>
            <Footer />
        </div>

    )
}

export async function getStaticProps() {
    const res = await fetch(`http://api-dc.herokuapp.com/raffle`)
    const raffles = await res.json()


    if (!raffles) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            raffles,
        }, // will be passed to the page component as props
    }
}

export default Content;