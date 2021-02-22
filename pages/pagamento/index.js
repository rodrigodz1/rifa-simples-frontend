import Image from 'next/image'
import Header from '../../src/components/Header'

import React, { useState } from 'react'


function Content({ raffles }) {

    const [isBankInfoVisible, setIsBankInfoVisible] = useState(false)
    const [banco, setBanco] = useState()
    const [titular, setTitular] = useState()
    const [conta, setConta] = useState()
    const [agencia, setAgencia] = useState()

    const Bank = (props) => {
        return (
            <div className="">
                <button onClick={() => {
                    if (!isBankInfoVisible) {
                        setIsBankInfoVisible(true)
                        setAgencia(props.account[1])
                        setConta(props.account[0])
                        setTitular(props.owner)
                        setBanco(props.name)
                    }
                    else {
                        setIsBankInfoVisible(false)
                    }
                }} className={"bg-" + props.color + "-500 p-2 rounded-md shadow-xl text-white"}>{props.name}</button>
            </div>
        )
    }

    return (
        <div>
            <Header name="INÍCIO" link="/" />
            <div className="">

                <div className="grid grid-cols-3 mx-6 mt-8">

                    <div className="border border-black text-center m-2">Como funciona:<p>1. Você realiza a transferência para uma de nossas contas
                        </p><p>2. Envie o comprovante para o nosso WhatsApp</p>
                        <p>3. Iremos confirmar o pagamento e você já poderá visualizá-lo na página usando seu número de telefone.</p>
                    </div>
                    <div className="text-center pt-4">
                        Escolha o Banco para fazer a transferência
                        <div className="grid grid-cols-3 justify-between bg-yellow-100 py-12">
                            <Bank name="Nubank" owner="RODRIGO DE BRITO" account={[1234, 4321]} color="purple" />
                            <Bank name="Inter" owner="RODRIGO DE BRITO" account={[5678, 8765]} color="red" />
                            <Bank name="Banco do Brasil" owner="RODRIGO DE BRITO" account={[91011, 11109]} color="yellow" />

                        </div>
                        {isBankInfoVisible ? <div className="bg-yellow-200 pl-24 text-left">
                            <p>Banco: {banco}</p>
                            <p>Titular: {titular}</p>
                            <p>Agência: {agencia} </p>
                            <p>Conta: {conta} </p>
                        </div> : null}
                    </div>

                    <div className="text-center m-2">
                        Etapa de pagamento
                        <div className="border border-black">Você está quase lá!</div>
                    </div>

                </div>
                <div className="text-center h-full">
                    <button className="bg-green-600 text-gray-100 p-2 mt-20 rounded-md shadow-xl">Enviar comprovante</button>
                </div>


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