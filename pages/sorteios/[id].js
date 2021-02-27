//import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Header from '../../src/components/Header'
import Board from '../../src/components/Board'

function Sorteio({ rifas }) {

    return (
        <div>
            <Header name="INÍCIO" link="/" />
            <div className="">

                <div className="grid grid-cols-2 mx-6">
                    <div className=" text-center m-2">
                        {rifas.name}
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


                <Board className="grid grid-cols-5 laptop:grid-cols-8 desktop:grid-cols-10 border border-black mx-10" tickets={rifas.rifa_tickets} rifa_id={rifas.id} />

                <div className="border border-black text-center my-20">possible footer</div>
            </div>
        </div>

    )
}

//const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context) {

    const { id } = context.query

    const { API_URL } = process.env

    const res = await fetch(`${API_URL}/rifas/${id}`)

    const data = await res.json()

    return {
        props: {
            rifas: data
        },
    }
}

export default Sorteio