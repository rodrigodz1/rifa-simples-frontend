import Image from 'next/image'
import Header from '../../src/components/Header'
import Button from '../../src/components/Button'
import Cart from '../../src/components/Cart'
import Board from '../../src/components/Board'
import axios from 'axios'

import React, { useState, useRef } from 'react'


function Content({ tickets }) {

    return (
        <div>
            <Header name="INÍCIO" link="/" />
            <div className="">

                <div className="grid grid-cols-2 mx-6">
                    <div className=" text-center m-2">
                        Sorteio de algo!
                        <div className="border border-black">imagem...</div>
                    </div>
                    <div className="border border-black text-center m-2">
                        informaçã
                    </div>
                </div>
                <div className="border border-black m-2 pl-10">
                    <button className="bg-green-600 text-white mx-2 p-1">Disponíveis</button>
                    <button className="bg-yellow-600 text-white mx-2 p-1">Reservados</button>
                    <button className="bg-red-600 text-white mx-2 p-1">Pagos</button>
                </div>


                <Board className="grid grid-cols-5 laptop:grid-cols-8 desktop:grid-cols-10 border border-black mx-10" />

                <div className="border border-black text-center my-20">possible footer</div>
            </div>
        </div>

    )
}

export async function getServerSideProps() {
    const { API_URL } = process.env
    const res = await fetch(`${API_URL}/tickets`)

    const data = await res.json()

    return {
        props: {
            tickets: data
        }
    }
}

export default Content;