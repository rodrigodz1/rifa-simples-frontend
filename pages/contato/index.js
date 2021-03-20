import Image from 'next/image'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

import React from 'react'


function Contact() {

    return (
        <div className="font-montserrat ">

            <div className="h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
                <Header sorteios="/sorteios" />
                <div className="text-center text-white text-xl p-2 font-bold">
                    Entre em contato com a gente!
                    <p><a target="_blank" href="https://wa.me/559182264084"><button className="text-sm bg-green-600 p-1 rounded-md m-2">Clique para abrir uma conversa no WhatsApp</button></a></p>
                    <div className="font-medium mt-5">Grupos</div>
                    <p><a target="_blank" href="https://chat.whatsapp.com/GH5d47AWfJe1qPyHytFXeZ"><button className="text-sm bg-green-500 p-1 rounded-md m-2">Grupo do WhatsApp</button></a></p>
                    <p><a target="_blank" href="https://t.me/joinchat/L7C8bXvMKFUyY2Jh"><button className="text-sm bg-blue-900 p-1 rounded-md m-2">Grupo do Telegram </button></a></p>
                    <div className="font-medium mt-5">Endereço de e-mail</div>
                    <span className="text-sm ">hiperpremios@gmail.com</span>
                    <div className="font-medium mt-5">Nosso Instagram:</div>
                    <a target="_blank" href="https://www.instagram.com/hiperpremiosonline/"><button className="text-sm bg-pink-600 p-1 rounded-md m-2">Instagram</button></a>
                </div>

            </div>
            <span className="absolute bottom-0 w-full"><Footer /></span>
        </div>

    )
}

export default Contact;