import Router from 'next/router';
import React, { Component, useEffect } from 'react'



function Content(props) {

	const { API_URL } = process.env

	useEffect(() => {
		Router.push({ pathname: '/sorteios/1' })
	}, [])

	return (
		<div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white  h-screen text-center">

			<div className="font-bold text-lg pt-4">

				Redirecionando você à página de sorteios...
			</div>
		</div>
	)
}



export default Content;