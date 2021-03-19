import Link from 'next/link';
import React, { useState } from 'react'

const Header = (props) => {

	const [menu, setMenu] = useState('hidden')

	return (

		<nav className="font-montserrat grid grid-cols-3  p-3 bg-black text-white items-center">
			<Link href="/">
				<button className="rounded tablet:place-self-center">
					<img src="/site.png" width={60} height={20} href="/" className="" />
				</button>
			</Link>
			<img src="/hiperp.png" href="/" className="w-max" />

			<button
				onClick={() => {
					if (menu === 'hidden') {
						setMenu('')
					} else if (menu === '') {
						setMenu('hidden')
					}
				}}
				className="inline-flex hover:bg-yellow-300 hover:text-black rounded tablet:hidden ml-auto">
				<i class="material-icons">
					menu
				</i>
			</button>

			<div className={menu + "  col-span-3 tablet:col-span-1 tablet:inline-flex tablet:flex-grow tablet:w-auto bg-black shadow-xl  justify-center"}>
				<div className="tablet:inline-flex tablet:flex-row  flex flex-col place-items-center">
					<Link href='/'>
						<span className=" transition duration-300 tablet:px-2 text-white text-xl py-2 border-black tracking-wide font-bold uppercase hover:text-yellow-400 border-b-4 hover:border-yellow-400 cursor-pointer">Início </span>
					</Link>
					<Link href={props.sorteios + ""}>
						<span className="transition duration-300 tablet:px-2 text-white text-xl py-2 border-black tracking-wide font-bold uppercase hover:text-yellow-400 border-b-4 hover:border-yellow-400 cursor-pointer">

							sorteios
						</span>
					</Link>

				</div>
			</div>
		</nav>

	)
}

export default Header;