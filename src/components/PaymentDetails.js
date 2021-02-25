import React, { Component } from 'react'

class PaymentDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="border border-black text-center m-2">Você está quase lá, PESSOA
                <p>1. Selecione uma das contas ao lado e transfira R$ {this.props.price}.
                </p><p>2. Clique no botão abaixo e nos informe no WhatsApp</p>
                <p>3. O status do número mudará para pago.</p>
                <p>Agora só aguardar o sorteio do SORTEIO</p>
            </div>
        )
    }

}

export default PaymentDetails