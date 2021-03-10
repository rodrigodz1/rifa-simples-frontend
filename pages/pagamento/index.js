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
                }} className={"shadow-xl p-2 rounded-md mx-1 text-black font-bold hover:bg-yellow-300"}>

                    <img className={props.padding + ""} src={props.img} />
                </button>
            </div>
        )
    }

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
                        <div className="grid grid-cols-4 justify-between bg-yellow-100 py-12">
                            <Bank name="Nubank" img="/nb.png" owner="RODRIGO DE BRITO" account={[1234, 4321]} />
                            <Bank name="Banco do Brasil" padding="pt-3" img="/bb.png" owner="RODRIGO DE BRITO" account={[91011, 11109]} />
                            <Bank name="PIX" img="/pix.png" owner="RODRIGO DE BRITO" account={[91011, 11109]} />
                            <Bank name="PicPay" padding="pt-3" img="/pp.png" owner="RODRIGO DE BRITO" account={[91011, 11109]} />

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