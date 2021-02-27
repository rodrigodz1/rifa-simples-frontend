import Link from "next/link"

function SorteioCard({ rifa }) {
    const { API_URL } = process.env

    return (

        <div className="border border-black place-self-center m-4 p-4 rounded-md shadow-xl bg-black text-white text-center">
            <p className="font-bold">{rifa.name}</p>
            <img className="" src={API_URL + rifa.image.formats.thumbnail.url} />

            <Link href="/sorteios/[id]" as={`/sorteios/${rifa.id}`}>
                <a className="font-bold text-yellow-300">Ver informações</a>
            </Link>
        </div>
    )
}

export default SorteioCard