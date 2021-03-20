import React from 'react'
import Link from 'next/link';

const Footer = () => {
	return (
		<div className="relative bottom-0 w-full grid grid-cols-1 tablet:grid-cols-2 text-center bg-black p-8" >
			<div className="text-white">
				<button className="font-bold mx-4"><Link href="/">Início</Link></button>
				{/*<button className="font-bold mx-4"><Link href="/termos">Termos</Link></button>*/}
				<button className="font-bold mx-4"><Link href="/contato">Contato</Link></button>
			</div>
			<div className="text-white ">All rights reserved.</div>
		</div >
	)
}

export default Footer;