import Image from 'next/image'
import Header from '../../src/components/Header'
import Button from '../../src/components/Button'
import Cart from '../../src/components/Cart'
import Board from '../../src/components/Board'
import axios from 'axios'

import React, { useState, useRef } from 'react'


function Content({ tickets }) {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [myNumbers, setMyNumbers] = useState([])



    const nums = [12, 17, 200] //botoes comprados, consumir de api 

    const precoDaRifa = 10

    //

    const Btn = (props) => {
        const btnArray = []

        for (let i = 0; i < props.num; i++) {

            if (i in nums)
                console.log("We've found", nums[i]);

            if ((i + "").length == 1) {
                btnArray.push(<button onClick={() => {
                    setIsModalVisible(true)
                    setMyNumbers(myNumbers => [...myNumbers, "00" + i + " "]) //passar só i futuramente
                }} className={props.className}>{"00" + i}</button>)

            } else if ((i + "").length == 2) {
                btnArray.push(<button onClick={() => {
                    setIsModalVisible(true)
                    setMyNumbers(myNumbers => [...myNumbers, "0" + i + " "])
                }} className={props.className}>{"0" + i}</button>)
            } else {
                btnArray.push(<button onClick={() => {
                    setIsModalVisible(true)
                    setMyNumbers(myNumbers => [...myNumbers, i + " "])
                }} className={props.className}>{i}</button>)
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

export default Content;