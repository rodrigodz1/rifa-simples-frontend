import Image from 'next/image'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import fetch from 'isomorphic-unfetch'
import SorteioCard from '../../src/components/SorteioCard'

import React, { useState } from 'react'


function Content({ rifas }) {

    return (
        <div>
            <Header />
            <button className="flex bg-black place-self-center text-white m-5 p-5 rounded-md" >
                <svg className="animate-spin h-5 w-5 mr-3">
                    <circle r="15" stroke="white" stroke-width="5" fill="black" />
                </svg>
                Being built.</button>

        </div>

    )
}

export default Content;