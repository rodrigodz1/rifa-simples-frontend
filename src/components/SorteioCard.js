import Link from "next/link"

function SorteioCard({ rifa }) {
    const { API_URL } = process.env

    return (

        <div className="bg-gray-700 text-white ">
            {rifa.name}
            <img src={API_URL + rifa.image.formats.thumbnail.url} />

            <Link href="/sorteios/[id]" as={`/sorteios/${rifa.id}`}>
                <a className="ml-2">Ver informações</a>
            </Link>
        </div>
    )
}

export default SorteioCard