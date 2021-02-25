function SorteioCard({ rifa }) {
    const { API_URL } = process.env

    return (
        <div className="bg-gray-700 text-white">
            <img src={API_URL + rifa.image.formats.thumbnail.url} />
            {rifa.name}
        </div>
    )
}

export default SorteioCard