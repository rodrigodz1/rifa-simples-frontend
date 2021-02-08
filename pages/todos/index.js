import Image from 'next/image'
import Link from 'next/link'

import React from 'react'


function Content({ todos }) {


    return (
        <div className="h-screen bg-gray-400">
            <div className="text-center my-1">
                <Image className="rounded-md" src="/images/bmw2.png" width={1300} height={300} />
            </div>

            <div className="grid grid-cols-3 mx-6">

                <ol>
                    {todos.map(({ id, title, completed }) => (
                        <li key={id}> {id} </li>
                    ))}
                </ol>

            </div>

            <div className="border border-black text-center my-20">Como funciona</div>
        </div>

    )
}

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const todos = await res.json()

    if (!todos) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            todos,
        }, // will be passed to the page component as props
    }
}

export default Content;