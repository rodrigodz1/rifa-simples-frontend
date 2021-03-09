import Link from 'next/link';
import React, { useState } from 'react'

const Header = (props) => {

	const [menu, setMenu] = useState('hidden')

	return (

		<nav className="grid grid-cols-2 gap-3 p-3 bg-black text-white items-center">
			<a href="#">
				Hiper Prêmios Online
			</a>

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

			<div className={menu + "  col-span-2 tablet:col-span-1 tablet:inline-flex tablet:flex-grow tablet:w-auto bg-black shadow-xl"}>
				<div className="tablet:inline-flex tablet:flex-row tablet:ml-auto flex flex-col place-items-center">
					<Link href='/'>
						<span className=" transition duration-300 tablet:px-2 text-white text-xl py-2 border-black tracking-wide font-bold uppercase hover:text-yellow-400 border-b-4 hover:border-yellow-400 cursor-pointer"> Início </span>
					</Link>
					<Link href='sorteios'>
						<span className="transition duration-300 tablet:px-2 text-white text-xl py-2 border-black tracking-wide font-bold uppercase hover:text-yellow-400 border-b-4 hover:border-yellow-400 cursor-pointer"> sorteios </span>
					</Link>
					<Link href='contato'>
						<span className="transition duration-300 tablet:px-2 text-white text-xl py-2 border-black tracking-wide font-bold uppercase hover:text-yellow-400 border-b-4 hover:border-yellow-400 cursor-pointer"> contato </span>
					</Link>
				</div>
			</div>
		</nav>

	)
}

export default Header;