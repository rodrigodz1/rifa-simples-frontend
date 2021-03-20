import Router from 'next/router';
import Link from 'next/link'
import React, { Component, useEffect } from 'react'



function Content(props) {

	const { API_URL } = process.env

	useEffect(() => {
		Router.push({ pathname: '/sorteios/1' })
	}, [])

	return (
		<div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white  h-screen text-center">

			<div className="font-bold text-lg pt-4">

				Redirecionando você à página de sorteios... <Link href='/sorteios/1'><button className="text-blue-500">Clique aqui</button></Link> caso não tenha sido redirecionado.
			</div>
		</div>
	)
}



export default Content;