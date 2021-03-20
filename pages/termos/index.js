import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

import React from 'react'


function Terms() {



    return (
        <div className="font-montserrat">


            <div className=" bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
                <Header sorteios="/sorteios" />
                <div className="px-5 tablet:px-20 laptop:px-40">
                    <div className="text-white text-xl text-center font-bold pt-4">Termos e Condições de uso hiperpremiosonline.com.br</div>
                    <div className="text-white pt-4">

                        <p className="py-2">Ao utlizar a plataforma, o organizador e comprador concordam com os termos presentes nesta página.</p>

                        <p className="py-2 font-medium">I - Introdução</p>

                        <p className="py-2">A Hiper Prêmios é uma plataforma de sorteios de prêmios baseado na venda de cotas dos bens ou valores sorteados.
                        O valor anunciado das rifas refere-se a uma cota (número, dezena, centena ou milhar) do bem, coisa ou valor sorteado.
                        Não existe limite de aquisição de cotas por usuário.
Todos os nossos sorteios são extraídos da Loteria Federal.</p>

                        <p className="py-2 font-medium">II - Requisitos Cadastro</p>

                        <p className="py-2">Ter no mínimo 18 anos de idade. Além disso, o comprador autoriza a divulgação do seu nome em todos certificados adquiridos no site e autoriza também a divulgação do nome nas redes sociais caso seja um dos ganhadores.
                        </p>

                        <p className="py-2 font-medium">III - Como funciona</p>

                        <p className="py-2"><span className="font-bold italic">Exemplo 1:</span> da extração da Loteria Federal caso o produto tenha até 10 cotas (de 0 a 9) apenas com um premiado (concurso 05159 de 04/03/2017):</p>

                        <p className="py-2">
                            <p>1° Prêmio 0132<span className="font-bold">3</span></p>
                            <p>2° Prêmio 53015</p>
                            <p>3° Prêmio 32796</p>
                            <p>4° Prêmio 72271</p>
                            <p>5° Prêmio 57902</p>
                        </p>

                        <p className="py-2">Nesse caso, o número extraído será apenas o último número do 1° prêmio. Portanto o resultado do prêmio principal seria o número <span className="font-bold">3 (três)</span>. Se houvessem mais premiados e não apenas um, o 2° premiado seria o último número do segundo prêmio e assim sucessivamente e nessa ordem até o preenchimento de todos os premiados.</p>

                        <p className="py-2"><span className="font-bold italic">Exemplo 2:</span> da extração da Loteria Federal caso o produto tenha até 100 cotas (de 00 a 99) apenas com um premiado (concurso 05159 de 04/03/2017):</p>

                        <p className="py-2">
                            <p>1° Prêmio 013<span className="font-bold">23</span></p>
                            <p>2° Prêmio 53015</p>
                            <p>3° Prêmio 32796</p>
                            <p>4° Prêmio 72271</p>
                            <p>5° Prêmio 57902</p>
                        </p>

                        <p className="py-2">Nesse caso, os números extraídos serão apenas os dois últimos números do 1° prêmio. Portanto o resultado do prêmio principal seria a dezena <span className="font-bold">23 (vinte e três).</span> Se houvessem mais premiados e não apenas um, o 2° premiado seria a combinação dos dois últimos números do segundo prêmio e assim sucessivamente e nessa ordem até o preenchimento de todos os premiados.</p>

                        <p className="py-2"><span className="font-bold italic">Exemplo 3:</span> da extração da Loteria Federal caso o produto tenha até 1000 cotas (de 000 a 999) apenas com um premiado (concurso 05159 de 04/03/2017):</p>

                        <p className="py-2">
                            <p>1° Prêmio 01<span className="font-bold">323</span></p>
                            <p>2° Prêmio 53015</p>
                            <p>3° Prêmio 32796</p>
                            <p>4° Prêmio 72271</p>
                            <p>5° Prêmio 57902</p>
                        </p>

                        <p className="py-2">Nesse caso, os números extraídos serão os três últimos números do 1° prêmio. Portanto o resultado do prêmio principal seria a centena <span className="font-bold">323 (trezentos e vinte e três).</span> Se houvessem mais premiados e não apenas um, o 2° premiado seria a combinação dos três últimos números do segundo prêmio e assim sucessivamente e nessa ordem até o preenchimento de todos os premiados.</p>

                        <p className="py-2"><span className="font-bold italic">Exemplo 4:</span> da extração da Loteria Federal caso o produto tenha até 10.000 cotas (de 0000 a 9999) apenas com um premiado (concurso 05159 de 04/03/2017):</p>

                        <p className="py-2">
                            <p>1° Prêmio 0<span className="font-bold">1323</span></p>
                            <p>2° Prêmio 53015</p>
                            <p>3° Prêmio 32796</p>
                            <p>4° Prêmio 72271</p>
                            <p>5° Prêmio 57902</p>
                        </p>

                        <p className="py-2">Nesse caso, os números extraídos serão os quatro últimos números do 1° prêmio. Portanto o resultado do prêmio principal seria a milhar <span className="font-bold">1323 (mil trezentos e vinte e três).</span> Se houvessem mais premiados e não apenas um, o 2° premiado seria a combinação dos quatro últimos números do segundo prêmio e assim sucessivamente e nessa ordem até o preenchimento de todos os premiados.</p>

                        <p className="py-2">A data do sorteio será anunciada em todas as nossas redes sociais (Telegram, Whatsapp e Instagram) quando 100% das cotas forem vendidas.</p>
                        <p>.</p>
                    </div>
                </div>
            </div>

            <div className="bottom-0 w-full"><Footer /></div>
        </div >

    )
}

export default Terms;