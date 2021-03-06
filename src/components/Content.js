import React from 'react'

function Content(props) {

	const { API_URL } = process.env


	return (
		<div className="bg-black text-white border border-white h-screen text-center">

			<div className="border border-white">
				sorteios
			</div>
			<div className="border border-white">
				instruções
			</div>
		</div>
	)
}



export default Content;