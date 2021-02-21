import Image from 'next/image'
import Header from '../../src/components/Header'

import React, { useState } from 'react'


function Content({ raffles }) {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [myNumbers, setMyNumbers] = useState([])

    const Cart = (props) => {
        return (
            <div className="sticky bottom-0 text-center bg-green-800">
                <button onClick={() => {
                    setIsModalVisible(false)
                    setMyNumbers([])
                }} className="bg-black text-white" >Limpar carrinho</button>
                {isModalVisible ? <h1>Esse é seu carrinho. Números?: {myNumbers}</h1> : null}

                <button className="bg-yellow-600 text-white">Reservar números</button>
            </div>
        )
    }

    const Btn = (props) => {
        const btnArray = []

        for (let i = 0; i < props.num; i++) {
            if ((i + "").length == 1) {
                btnArray.push(<button onClick={() => {
                    setIsModalVisible(true)
                    setMyNumbers(myNumbers => [...myNumbers, "00" + i + " "]) //passar só i futuramente
                }} className="bg-green-600 text-white m-2">{"00" + i}</button>)

            } else if ((i + "").length == 2) {
                btnArray.push(<button onClick={() => {
                    setIsModalVisible(true)
                    setMyNumbers(myNumbers => [...myNumbers, "0" + i + " "])
                }} className="bg-green-600 text-white m-2">{"0" + i}</button>)
            } else {
                btnArray.push(<button onClick={() => {
                    setIsModalVisible(true)
                    setMyNumbers(myNumbers => [...myNumbers, i + " "])
                }} className="bg-green-600 text-white m-2">{i}</button>)
            }

        }

        return btnArray
    }



    return (
        <div>
            <Header name="INÍCIO" link="/" />
            <div className="">

                <div className="grid grid-cols-2 mx-6">
                    <div className=" text-center m-2">
                        Sorteio de algo!
                        <div className="border border-black">imagem...</div>
                    </div>
                    <div className="border border-black text-center m-2">Informações úteis!</div>
                </div>
                <div className="border border-black m-2 pl-10">
                    <button className="bg-green-600 text-white mx-2 p-1">Disponíveis</button>
                    <button className="bg-yellow-600 text-white mx-2 p-1">Reservados</button>
                    <button className="bg-red-600 text-white mx-2 p-1">Pagos</button>
                </div>



                <div className="grid grid-cols-12 border border-black mx-10">
                    <Btn num={1000} />
                </div>

                {isModalVisible ? <Cart /> : null}

                <div className="border border-black text-center my-20">possible footer</div>
            </div>
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