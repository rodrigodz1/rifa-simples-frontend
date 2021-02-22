import Link from 'next/link';
import React from 'react'

const Header = (props) => {

	return (
		<div className="flex justify-between px-10 laptop:px-20 bg-black shadow-xl">
			<img className="max-h-16 max-w-16 justify-self-center" src="images/fingers.svg" href="/" />
			<Link href={props.link}>
				<span className="transition duration-300 text-white text-xl py-4 tracking-wide font-bold uppercase hover:text-yellow-400 border-b-4 border-black hover:border-yellow-400 cursor-pointer"> {props.name} </span>
			</Link>
			<a className="transition duration-300 text-white text-xl py-4 tracking-wide font-bold uppercase border-b-4 border-black hover:border-gray-400" href={props.link}>Instagram</a>
		</div>
	)
}

export default Header;