import React from 'react'
import Image from 'next/image'
import Footer from './Footer'

const Informatives = (props) => {
	return (
		<div className="border border-black rounded-md text-center m-2 bg-gray-500">
			{props.title}
			<div>
				<ul>
					<li className="border border-black">{props.data}</li>
					<li>Usuário 2</li>
					<li>Usuário 3</li>
				</ul>
			</div>
		</div>
	)
}

const Content = () => {
	return (
		<div className="h-screen bg-gray-400">
			<div className="text-center my-1">
				<Image className="rounded-md" src="/images/bmw2.png" width={1300} height={300} />
			</div>

			<div className="grid grid-cols-3 mx-6">

				<Informatives title="Últimos ganhadores" data="Rodrigo" />
				<Informatives title="Principais Sorteios" data="Sorteio de uma BMW" />
				<Informatives title="Métodos de Pagamento" data="BB 012938 012391-2" />

			</div>

			<div className="border border-black text-center my-20">Como funciona</div>
			<Footer />
		</div>

	)
}

export default Content;