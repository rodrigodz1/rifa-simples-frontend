//import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import Board from '../../src/components/Board'
import api from '../../api/config'


function Sorteio({ rifas, gamblers }) {
    const { API_URL } = process.env

    //console.log(gamblers);
    let reserved = 0;
    let paid = 0;
    let available = 1000;

    rifas.rifa_tickets.map(item => {
        if (item.state === 'reserved') {
            reserved++
        } else if (item.state === 'paid') {
            paid++
        }
    })
    available = available - (reserved + paid)


    return (

        <div className="absolute inset-0">

            <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-600"> {/*bg-black*/}
                <Header name="INÍCIO" sorteios="/sorteios" />
                <div className="grid grid-cols-1 mx-6 text-white"> {/*text-white*/}
                    <div className="text-xl font-bold text-center m-2 place-self-center">
                        <div className="bg-gray-900 rounded-md border border-black">
                            {rifas.name}
                        </div>
                        <div className=" rounded-md">
                            <img className="rounded-md" src={API_URL + rifas.image.formats.small.url} />
                        </div>
                        <div className="bg-gray-900 rounded-sm text-sm  text-center whitespace-pre-line pt-1">
                            {rifas.description}
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-3 m-2">

                    <button title="" className=" bg-green-600 text-white mx-1 p-1 font rounded-full">Disponíveis ({available})</button>

                    <button className="bg-yellow-600 text-white mx-1 p-1 font rounded-full">Reservados ({reserved})</button>
                    <button className="bg-red-600 text-white mx-1 p-1 font rounded-full">Pagos ({paid})</button>

                </div>


                <Board className="bg-gray-900 grid grid-cols-5 laptop:grid-cols-8 desktop:grid-cols-10 rounded-md mx-4" gamblers={gamblers} tickets={rifas.rifa_tickets} rifa_id={rifas.id} ticket_price={rifas.ticket_price} />

                <div className="mt-2"><Footer /></div>
            </div>

        </div>

    )
}

//const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context) {

    const { id } = context.query

    const { API_URL } = process.env

    const res = await fetch(`${API_URL}/rifas/${id}`)
    const gamblers = await fetch(`${API_URL}/gamblers`)

    const data2 = await gamblers.json()
    const data = await res.json()

    return {
        props: {
            rifas: data,
            gamblers: data2
        },
    }
}

export default Sorteio