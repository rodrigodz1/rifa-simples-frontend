export default function Header() {
	return (
		<div className="flex justify-between border border-black px-20 bg-black shadow-xl border border-white">
			<div className="text-white text-xl rounded-md justify-self-center">a
			</div>

			<a className="transition duration-300 text-white text-xl py-4 tracking-wide font-bold uppercase hover:text-yellow-400 border-b-4 border-black hover:border-yellow-400" href="/">Sorteios</a>
			<a className="transition duration-300 text-white text-xl py-4 tracking-wide font-bold uppercase border-b-4 border-black hover:border-gray-400" href="/">Instagram</a>
		</div>
	)
}