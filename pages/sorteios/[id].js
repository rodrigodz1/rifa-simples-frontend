//import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Header from '../../src/components/Header'
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

        <div>
            <Header name="INÍCIO" link="/" />
            <div className="bg-black"> {/*bg-black*/}

                <div className="grid grid-cols-1 mx-6 text-white"> {/*text-white*/}
                    <div className="font-bold text-center m-2 place-self-center">
                        {rifas.name}
                        <div className="border border-black ">
                            <img src={API_URL + rifas.image.formats.small.url} />
                        </div>
                    </div>
                    <div className="text-sm border border-black text-center m-2 whitespace-pre-line">
                        {rifas.description}
                    </div>
                </div>
                <div className="grid grid-cols-3 m-2">

                    <button title="" className=" bg-green-600 text-white mx-1 p-1 font rounded-full">Disponíveis ({available})</button>

                    <button className="bg-yellow-600 text-white mx-1 p-1 font rounded-full">Reservados ({reserved})</button>
                    <button className="bg-red-600 text-white mx-1 p-1 font rounded-full">Pagos ({paid})</button>

                </div>


                <Board className="bg-yellow-200 grid grid-cols-5 laptop:grid-cols-8 desktop:grid-cols-10 rounded-md mx-4" gamblers={gamblers} tickets={rifas.rifa_tickets} rifa_id={rifas.id} ticket_price={rifas.ticket_price} />


            </div>
            <div className="border border-black text-center my-20">maybe a footer</div>
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