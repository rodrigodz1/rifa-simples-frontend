import Image from 'next/image'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import { withRouter } from 'next/router'
import PaymentDetails from '../../src/components/PaymentDetails'

import React, { useState } from 'react'


function Content({ router: { query } }) {

    const [isBankInfoVisible, setIsBankInfoVisible] = useState(false)
    const [banco, setBanco] = useState()
    const [titular, setTitular] = useState()
    const [conta, setConta] = useState()
    const [agencia, setAgencia] = useState()

    const [nubank, setNubank] = useState(false)
    const [bancodobrasil, setBancodobrasil] = useState(false)
    const [pix, setPix] = useState(false)
    const [picpay, setPicpay] = useState(false)

    //validar no backend
    /*
    1. A partir do número da rifa, verificar se os números escolhidos estão de fato reservados.
    2. Verificar se o nome digitado realmente está no db
    */
    const id = (query.tid)
    const numbers = (query.object);
    //const [numbers, setNumbers] = useState([query.object])
    const price = (query.price)
    const name = (query.name)

    return (
        <div className="font-montserrat relative inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
            <Header name="INÍCIO" sorteios="/sorteios" />
            <div className="">

                <div className="grid grid-cols-1 mx-6 pt-2">


                    <div className="text-center pt-4 rounded-md">
                        <p className="text-white">Oi, {name}</p>



                        <div className="text-center text-red-600 bg-green-200">
                            Pedido número: #{id}
                        </div>
                        <div className="text-center text-white m-2">
                            Números selecionados
                        <div className="bg-black text-white">{
                                numbers + " "
                            }</div>

                        Valor a transferir
                        <div className="bg-yellow-300 text-black font-bold">R$ {price}</div>

                        </div>
                        <p className="text-lg text-white font-bold">Escolha um método de pagamento:</p>
                        <div className=" py-2">
                            <div className="grid grid-cols-4">
                                <div className="mx-1">
                                    <button onClick={
                                        () => {
                                            setNubank(!nubank)
                                            setBancodobrasil(false)
                                            setPix(false)
                                            setPicpay(false)
                                        }
                                    } className="inline-flex  border border-black bg-black text-white rounded-xl my-2"><img className="rounded-xl" src="/nb.png" height={80} width={80} /></button>

                                </div>
                                <div className="mx-1">
                                    <button onClick={
                                        () => {
                                            setNubank(false)
                                            setBancodobrasil(!bancodobrasil)
                                            setPix(false)
                                            setPicpay(false)
                                        }
                                    } className="inline-flex  border border-black bg-yellow-200 rounded-xl my-2"><img className="rounded-xl" src="/bb.png" height={80} width={80} /></button>

                                </div>
                                <div className="mx-1">
                                    <button onClick={
                                        () => {
                                            setNubank(false)
                                            setBancodobrasil(false)
                                            setPix(!pix)
                                            setPicpay(false)
                                        }
                                    } className="inline-flex border border-black bg-yellow-200 rounded-xl my-2"><img className="rounded-xl" src="/pix.png" height={80} width={80} /></button>

                                </div>
                                <div className="mx-1">
                                    <button onClick={
                                        () => {
                                            setNubank(false)
                                            setBancodobrasil(false)
                                            setPix(false)
                                            setPicpay(!picpay)
                                        }
                                    } className="inline-flex border border-black bg-yellow-200 rounded-xl my-2"><img className="rounded-xl" src="/pp.png" height={80} width={80} /></button>

                                </div>
                            </div>

                            {/*<Bank name="Nubank" img="/nb.png" owner="RODRIGO DE BRITO" account={[1234, 4321]} />
                            <Bank name="Banco do Brasil" padding="pt-3" img="/bb.png" owner="RODRIGO DE BRITO" account={[91011, 11109]} />
                            <Bank name="PIX" img="/pix.png" owner="RODRIGO DE BRITO" account={[91011, 11109]} />
    <Bank name="PicPay" padding="pt-3" img="/pp.png" owner="RODRIGO DE BRITO" account={[91011, 11109]} />*/}

                        </div>
                        {
                            nubank ? <div className=" text-left pl-20 bg-gray-700 text-white border-b-2">
                                <p>Nubank:</p>
                                <p>Agência: 0001</p>
                                <p>Conta: 25085155-6</p>
                                <p>Nome: FELIPE V MACHADO</p>
                                <p className="font-bold">Nos envie o comprovante:</p>
                                <div className=" h-full">
                                    <button className="bg-green-600 text-gray-100 p-2 my-1 rounded-md shadow-xl">Enviar comprovante</button>
                                </div>
                            </div> : null
                        }
                        {
                            bancodobrasil ? <div className="text-left pl-20 bg-gray-700 text-white border-b-2">
                                <p>BB</p>
                                <p>Agência: 1777-9</p>
                                <p>Conta: 18319-9</p>
                                <p>FELIPE V MACHADO</p>
                                <p className="font-bold">Nos envie o comprovante:</p>                                        <div className="h-full">
                                    <button className="bg-green-600 text-gray-100 p-2 my-1 rounded-md shadow-xl">Enviar comprovante</button>
                                </div>
                            </div> : null
                        }
                        {
                            pix ? <div className="text-left pl-20 bg-gray-700 text-white border-b-2">
                                <p>Chave PIX, email: </p>
                                <p className="font-bold">epilef231veras@gmail.com</p>
                                <p>Transferir à: FELIPE V MACHADO</p>
                                <p className="font-bold">Nos envie o comprovante:</p>                                        <div className="h-full">
                                    <button className="bg-green-600 text-gray-100 p-2 my-1 rounded-md shadow-xl">Enviar comprovante</button>
                                </div>
                            </div> : null
                        }
                        {
                            picpay ? <div className="text-left bg-gray-700 text-white">
                                <p className="font-bold">Nos envie o comprovante:</p>                                        <div className=" h-full">
                                    <button className="bg-green-600 text-gray-100 p-2 mt-1 rounded-md shadow-xl">Enviar comprovante</button>
                                </div>
                                <p className="">Acesse o link <a className="text-blue-500" href='https://picpay.me/felipeverasm'>https://picpay.me/felipeverasm</a></p>
                                        ou pelo QRCode abaixo:
                                        <img src="/ppF.jpeg" />
                            </div> : null
                        }
                    </div>
                </div>
            </div>
            <div className="w-full relative bottom-0"><Footer /></div>

        </div>

    )
}

export default withRouter(Content);