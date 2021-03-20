import React from 'react'

const Instructions = () => {
    return (
        <div className="select-none px-16 font-bold grid grid-cols-1 laptop:grid-cols-4 text-white bg-yellow-600">
            <div className="place-self-center text-9xl flex py-1">
                1 <span className="material-icons">search </span>
                <div className="text-lg">
                    Escolha o sorteio
                    <div className="font-light text-sm whitespace-pre-line pt-1 ">
                        Escolha o prêmio que gostaria
                        de concorrer, verifique a
                        descrição e fotos. Em caso de
                        dúvidas, entre em contato
                    </div>
                </div>
            </div>
            <div className="place-self-center text-9xl flex py-1">
                2 <span className="material-icons">check </span>
                <div className="text-lg">
                    Selecione os números
                    <div className="font-light text-sm whitespace-pre-line pt-1">
                        Você pode escolher a
                        quantidade de números
                        que desejar. Mais
                        números, maiores suas chances!
                    </div>
                </div>
            </div>
            <div className="place-self-center text-9xl flex py-1">
                3 <span className="material-icons">attach_money </span>
                <div className="text-lg">
                    Faça o pagamento
                    <div className="font-light text-sm whitespace-pre-line pt-1">
                        Faça o pagamento via
                        transferência bancária.
                        Envie o comprovante da
                        transferência ao administrador
                        via WhatsApp
                    </div>
                </div>
            </div>
            <div className="place-self-center text-9xl flex py-1">
                4 <span className="material-icons">verified </span>
                <div className="text-lg">
                    Aguarde o sorteio
                    <div className="font-light text-sm whitespace-pre-line pt-1">
                        Você pode ser
                        o próximo grande
                        vencedor!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructions