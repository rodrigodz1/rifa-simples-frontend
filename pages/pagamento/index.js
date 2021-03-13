import Image from 'next/image'
import Header from '../../src/components/Header'
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
        <div>
            <Header name="INÍCIO" link="/" />
            <div className="">

                <div className="grid grid-cols-1 mx-6 mt-8">


                    <div className="text-center pt-4">
                        <p>Oi, {name}</p>
                        <p className="">Escolha um método de pagamento.</p>
                        <p>Em seguida nos envie o comprovante.</p>
                        <div className="text-center bg-green-200 font-bold">
                            Pedido número: #{id}
                        </div>
                        <div className="bg-yellow-100 py-6">
                            <div className="flex flex-col ">

                                <button onClick={
                                    () => {
                                        setNubank(!nubank)
                                        setBancodobrasil(false)
                                        setPix(false)
                                        setPicpay(false)
                                    }
                                } className="inline-flex mx-14 border border-black bg-yellow-200 rounded-xl my-2"><img className="rounded-xl" src="/nb.png" height={80} width={80} /><span className="font-bold flex-1  place-self-center">Nubank</span></button>
                                {
                                    nubank ? <div className=" text-left pl-10 bg-yellow-200"><p>Nubank:</p>
                                        <p>Agência: 0001</p>
                                        <p>Conta: 25085155-6</p>
                                        <p>Nome: FELIPE V MACHADO</p>
                                    </div> : null
                                }
                                <button onClick={
                                    () => {
                                        setNubank(false)
                                        setBancodobrasil(!bancodobrasil)
                                        setPix(false)
                                        setPicpay(false)
                                    }
                                } className="inline-flex mx-14 border border-black bg-yellow-200 rounded-xl my-2"><img className="rounded-xl" src="/bb.png" height={80} width={80} /><span className="font-bold  flex-1  place-self-center">Banco do Brasil</span></button>
                                {
                                    bancodobrasil ? <div className="text-left pl-10 bg-yellow-200">
                                        <p>BB</p>
                                        <p>Agência: 1777-9</p>
                                        <p>Conta: 18319-9</p>
                                        <p>FELIPE V MACHADO</p>
                                    </div> : null
                                }
                                <button onClick={
                                    () => {
                                        setNubank(false)
                                        setBancodobrasil(false)
                                        setPix(!pix)
                                        setPicpay(false)
                                    }
                                } className="inline-flex mx-14 border border-black bg-yellow-200 rounded-xl my-2"><img className="rounded-xl" src="/pix.png" height={80} width={80} /><span className="font-bold  flex-1  place-self-center">Pix</span></button>
                                {
                                    pix ? <div className="bg-yellow-200">
                                        <p>Chave PIX, email: </p>
                                        <p className="font-bold">epilef231veras@gmail.com</p>
                                        <p>Transferir à: FELIPE V MACHADO</p>
                                    </div> : null
                                }
                                <button onClick={
                                    () => {
                                        setNubank(false)
                                        setBancodobrasil(false)
                                        setPix(false)
                                        setPicpay(!picpay)
                                    }
                                } className="inline-flex mx-14 border border-black bg-yellow-200 rounded-xl my-2"><img className="rounded-xl" src="/pp.png" height={80} width={80} /><span className="font-bold  flex-1  place-self-center">PicPay</span></button>
                                {
                                    picpay ? <div className="bg-yellow-200">
                                        <p className="">Acesse o link <a className="text-blue-500" href='https://picpay.me/felipeverasm'>https://picpay.me/felipeverasm</a></p>
                                        ou pelo QRCode abaixo:
                                        <img src="/ppF.jpeg" />
                                    </div> : null
                                }

                            </div>

                            {/*<Bank name="Nubank" img="/nb.png" owner="RODRIGO DE BRITO" account={[1234, 4321]} />
                            <Bank name="Banco do Brasil" padding="pt-3" img="/bb.png" owner="RODRIGO DE BRITO" account={[91011, 11109]} />
                            <Bank name="PIX" img="/pix.png" owner="RODRIGO DE BRITO" account={[91011, 11109]} />
    <Bank name="PicPay" padding="pt-3" img="/pp.png" owner="RODRIGO DE BRITO" account={[91011, 11109]} />*/}

                        </div>
                        {isBankInfoVisible ? <div className="bg-yellow-200 pl-24 text-left">
                            {
                                //bancos com titular, ag, conta, etc...
                                banco === 'Nubank' || banco === 'Banco do Brasil' ? <div><p>Banco: {banco}</p>
                                    <p>Titular: {titular}</p>
                                    <p>Agência: {agencia} </p>
                                    <p>Conta: {conta} </p></div> : null
                            }
                            {
                                banco === 'PIX' ? <div>a definir pix</div> : null
                            }
                            {
                                banco === 'PicPay' ? <div>a definir picpay</div> : null
                            }
                        </div> : null}
                    </div>



                    <div className="text-center m-2">
                        Números selecionados
                        <div className="bg-black text-white">{
                            numbers + " "
                        }</div>

                        Valor a transferir
                        <div className="bg-yellow-300 text-black font-bold">R$ {price}</div>

                    </div>

                </div>
                <div className="text-center h-full">
                    <button className="bg-green-600 text-gray-100 p-2 mt-5 rounded-md shadow-xl">Enviar comprovante</button>
                </div>


            </div>
        </div>

    )
}

export default withRouter(Content);